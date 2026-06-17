import { createServer } from "node:http";
import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { createReadStream } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = fileURLToPath(new URL(".", import.meta.url));
const dataDir = join(rootDir, "data");
const progressPath = join(dataDir, "progress.json");
const port = Number(process.env.PORT || 4173);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
};

async function readProgressStore() {
  await mkdir(dataDir, { recursive: true });
  try {
    const source = await readFile(progressPath, "utf8");
    const parsed = JSON.parse(source);
    return parsed && typeof parsed === "object" ? parsed : { users: {} };
  } catch (error) {
    if (error.code === "ENOENT") return { users: {} };
    throw error;
  }
}

async function writeProgressStore(store) {
  await mkdir(dataDir, { recursive: true });
  await writeFile(progressPath, `${JSON.stringify(store, null, 2)}\n`);
}

function normalizeUser(store, userId) {
  const id = sanitizeId(userId) || "anonymous";
  store.users ||= {};
  store.users[id] ||= {
    savedAlgorithmIds: [],
    recentAlgorithmIds: [],
    progress: {},
    dailyQuizzes: {},
    createdAt: new Date().toISOString(),
  };
  store.users[id].savedAlgorithmIds ||= [];
  store.users[id].recentAlgorithmIds ||= [];
  store.users[id].progress ||= {};
  store.users[id].dailyQuizzes ||= {};
  return { id, user: store.users[id] };
}

function sanitizeId(value) {
  return String(value || "").replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 80);
}

function sanitizeSection(value) {
  const section = String(value || "");
  return ["lesson", "visualizer", "challenge"].includes(section) ? section : "";
}

function sanitizeDate(value) {
  const date = String(value || "");
  return /^\d{4}-\d{2}-\d{2}$/.test(date) ? date : "";
}

function sendJson(response, status, payload) {
  response.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
  });
  response.end(JSON.stringify(payload));
}

function collectJson(request) {
  return new Promise((resolveBody, rejectBody) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        request.destroy();
        rejectBody(new Error("Request body too large"));
      }
    });
    request.on("end", () => {
      try {
        resolveBody(body ? JSON.parse(body) : {});
      } catch {
        rejectBody(new Error("Invalid JSON"));
      }
    });
    request.on("error", rejectBody);
  });
}

async function handleApi(request, response, url) {
  if (url.pathname === "/api/daily-quiz") {
    return handleDailyQuizApi(request, response, url);
  }

  if (url.pathname !== "/api/progress") return false;

  if (request.method === "GET") {
    const store = await readProgressStore();
    const { id, user } = normalizeUser(store, url.searchParams.get("userId"));
    sendJson(response, 200, { userId: id, ...user });
    return true;
  }

  if (request.method === "PUT") {
    const body = await collectJson(request);
    const store = await readProgressStore();
    const { id, user } = normalizeUser(store, body.userId);

    user.savedAlgorithmIds = Array.isArray(body.savedAlgorithmIds)
      ? [...new Set(body.savedAlgorithmIds.map(sanitizeId).filter(Boolean))]
      : user.savedAlgorithmIds;
    user.recentAlgorithmIds = Array.isArray(body.recentAlgorithmIds)
      ? [...new Set(body.recentAlgorithmIds.map(sanitizeId).filter(Boolean))].slice(0, 12)
      : user.recentAlgorithmIds;

    if (body.progress && typeof body.progress === "object") {
      user.progress = normalizeProgress(body.progress);
    }

    user.updatedAt = new Date().toISOString();
    await writeProgressStore(store);
    sendJson(response, 200, { userId: id, ...user });
    return true;
  }

  if (request.method === "PATCH") {
    const body = await collectJson(request);
    const store = await readProgressStore();
    const { id, user } = normalizeUser(store, body.userId);
    const algorithmId = sanitizeId(body.algorithmId);
    const section = sanitizeSection(body.section);

    if (!algorithmId || !section) {
      sendJson(response, 400, { error: "algorithmId and section are required" });
      return true;
    }

    user.progress[algorithmId] ||= {};
    user.progress[algorithmId][section] = Boolean(body.completed);
    user.progress[algorithmId].updatedAt = new Date().toISOString();
    user.recentAlgorithmIds = moveToFront(user.recentAlgorithmIds, algorithmId, 12);
    user.updatedAt = new Date().toISOString();
    await writeProgressStore(store);
    sendJson(response, 200, { userId: id, ...user });
    return true;
  }

  response.writeHead(405, { allow: "GET, PUT, PATCH" });
  response.end();
  return true;
}

async function handleDailyQuizApi(request, response, url) {
  if (request.method === "GET") {
    const date = sanitizeDate(url.searchParams.get("date"));
    if (!date) {
      sendJson(response, 400, { error: "date is required" });
      return true;
    }

    const store = await readProgressStore();
    const { id, user } = normalizeUser(store, url.searchParams.get("userId"));
    sendJson(response, 200, {
      userId: id,
      date,
      quiz: user.dailyQuizzes[date] || null,
    });
    return true;
  }

  if (request.method === "PUT") {
    const body = await collectJson(request);
    const date = sanitizeDate(body.date);
    if (!date || !body.quiz || typeof body.quiz !== "object") {
      sendJson(response, 400, { error: "date and quiz are required" });
      return true;
    }

    const store = await readProgressStore();
    const { id, user } = normalizeUser(store, body.userId);
    user.dailyQuizzes[date] = normalizeDailyQuiz(body.quiz, date);
    user.updatedAt = new Date().toISOString();
    await writeProgressStore(store);
    sendJson(response, 200, {
      userId: id,
      date,
      quiz: user.dailyQuizzes[date],
    });
    return true;
  }

  response.writeHead(405, { allow: "GET, PUT" });
  response.end();
  return true;
}

function normalizeDailyQuiz(quiz, date) {
  return {
    ...quiz,
    date,
    questions: Array.isArray(quiz.questions) ? quiz.questions.slice(0, 10) : [],
    hintCount: Number.isFinite(Number(quiz.hintCount)) ? Number(quiz.hintCount) : 0,
    elapsedMs: Number.isFinite(Number(quiz.elapsedMs)) ? Number(quiz.elapsedMs) : 0,
  };
}

function normalizeProgress(progress) {
  return Object.fromEntries(Object.entries(progress).map(([algorithmId, sections]) => {
    const normalizedSections = {};
    if (sections && typeof sections === "object") {
      ["lesson", "visualizer", "challenge"].forEach((section) => {
        if (section in sections) normalizedSections[section] = Boolean(sections[section]);
      });
      if (sections.updatedAt) normalizedSections.updatedAt = String(sections.updatedAt);
    }
    return [sanitizeId(algorithmId), normalizedSections];
  }).filter(([algorithmId]) => algorithmId));
}

function moveToFront(items, item, limit) {
  return [item, ...(items || []).filter((value) => value !== item)].slice(0, limit);
}

async function serveStatic(request, response, url) {
  const requestedPath = url.pathname === "/" ? "/index.html" : decodeURIComponent(url.pathname);
  const filePath = resolve(rootDir, `.${normalize(requestedPath)}`);

  if (!filePath.startsWith(rootDir)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const fileStat = await stat(filePath);
    if (!fileStat.isFile()) throw new Error("Not a file");
    response.writeHead(200, {
      "content-type": mimeTypes[extname(filePath)] || "application/octet-stream",
    });
    createReadStream(filePath).pipe(response);
  } catch {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
}

createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", `http://${request.headers.host || "localhost"}`);
    if (await handleApi(request, response, url)) return;
    await serveStatic(request, response, url);
  } catch (error) {
    sendJson(response, 500, { error: error.message || "Server error" });
  }
}).listen(port, () => {
  console.log(`Algo Explained running at http://localhost:${port}/`);
});
