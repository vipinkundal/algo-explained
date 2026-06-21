import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = path.resolve("src/algorithms");

async function walk(dir, out = []) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const filePath = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(filePath, out);
    else if (entry.name === "data.js") out.push(filePath);
  }
  return out;
}

function words(value) {
  return String(value || "").toLowerCase();
}

function getKind(page) {
  const haystack = words(`${page.visualizerType} ${page.category} ${page.track} ${page.title}`);
  if (haystack.includes("bucket") || haystack.includes("digit") || haystack.includes("frequency-array")) return "bucket-flow";
  if (haystack.includes("graph") || haystack.includes("mst") || haystack.includes("edge") || haystack.includes("dag") || haystack.includes("scc") || haystack.includes("low-link") || haystack.includes("parent-tree")) return "graph-flow";
  if (haystack.includes("linked-list")) return "linked-list-flow";
  if (haystack.includes("tree") || haystack.includes("heap") || haystack.includes("bst") || haystack.includes("trie")) return "tree-operation";
  if (haystack.includes("matrix") || haystack.includes("grid") || haystack.includes("board") || haystack.includes("chess")) return "matrix-flow";
  if (haystack.includes("recursion") || haystack.includes("call-stack") || haystack.includes("choice") || haystack.includes("decision") || haystack.includes("disk")) return "recursion-flow";
  if (haystack.includes("stack") || haystack.includes("queue") || haystack.includes("deque") || haystack.includes("buffer")) return "stack-queue-flow";
  if (haystack.includes("string") || haystack.includes("palindrome") || haystack.includes("prefix") || haystack.includes("hash") || haystack.includes("z-box") || haystack.includes("anagram")) return "string-flow";
  if (haystack.includes("array") || haystack.includes("sort") || haystack.includes("scan") || haystack.includes("pointer") || haystack.includes("window") || haystack.includes("partition") || haystack.includes("range") || haystack.includes("candidate") || haystack.includes("min-max") || haystack.includes("running") || haystack.includes("cumulative")) return "array-flow";
  return "state-flow";
}

function firstArrayInput(page) {
  const input = Array.isArray(page.runnerInput) ? page.runnerInput : [];
  const array = input.find((item) => Array.isArray(item) && !Array.isArray(item[0]));
  return array && array.length ? array.slice(0, 8) : [4, 1, 7, 3, 6, 2];
}

function firstMatrixInput(page) {
  const input = Array.isArray(page.runnerInput) ? page.runnerInput : [];
  const matrix = input.find((item) => Array.isArray(item) && Array.isArray(item[0]));
  return matrix && matrix.length ? matrix.slice(0, 4).map((row) => row.slice(0, 4)) : [
    [1, 0, 1],
    [0, 1, 0],
    [1, 1, 1],
  ];
}

function firstStringInput(page) {
  const input = Array.isArray(page.runnerInput) ? page.runnerInput : [];
  return String(input.find((item) => typeof item === "string") || page.algorithmSlug || page.title || "algorithm").replace(/[^a-z0-9]/gi, "").slice(0, 12) || "algorithm";
}

function makeStep(page, step, index, extras = {}) {
  return {
    phase: step.label,
    title: step.title,
    note: step.note,
    ruleLabel: `${page.title} invariant`,
    rule: step.codeInsight || page.codeInsight || page.transitionSummary,
    ...extras,
  };
}

function arrayAnimation(page) {
  const values = firstArrayInput(page);
  const last = values.length - 1;
  return {
    type: "array-flow",
    title: `${page.title} array state`,
    ruleLabel: "Array invariant",
    rule: page.transitionSummary,
    values,
    steps: page.dryRun.map((step, index) => {
      const active = Math.min(index, last);
      const sortedUntil = page.category === "Sorting" ? Math.max(0, index - 1) : -1;
      return makeStep(page, step, index, {
        activeIndices: index % 2 === 0 ? [active] : [active, Math.min(active + 1, last)],
        sortedIndices: Array.from({ length: sortedUntil + 1 }, (_, itemIndex) => itemIndex),
        mutedIndices: index === 0 ? [] : Array.from({ length: values.length }, (_, itemIndex) => itemIndex).filter((itemIndex) => itemIndex < active - 2 || itemIndex > active + 2),
        window: [Math.max(0, active - 1), Math.min(last, active + 1)],
        primaryLabel: step.label,
        secondaryLabel: page.transitionSummary,
      });
    }),
  };
}

function bucketAnimation(page) {
  const values = firstArrayInput(page);
  const buckets = [
    { label: "low range" },
    { label: "middle range" },
    { label: "high range" },
  ];
  return {
    type: "bucket-flow",
    title: `${page.title} bucket movement`,
    ruleLabel: "Bucket rule",
    rule: page.transitionSummary,
    values,
    buckets,
    steps: page.dryRun.map((step, index) => {
      const activeValue = values[index % values.length];
      const bucketValues = [[], [], []];
      values.slice(0, Math.min(values.length, index + 1)).forEach((value) => {
        bucketValues[Math.abs(Number(value) || 0) % bucketValues.length].push(value);
      });
      return makeStep(page, step, index, {
        activeValue,
        bucketIndex: Math.abs(Number(activeValue) || 0) % bucketValues.length,
        bucketValues,
      });
    }),
  };
}

function matrixAnimation(page) {
  const matrix = firstMatrixInput(page);
  const cells = matrix.flatMap((row, rowIndex) => row.map((_, columnIndex) => [rowIndex, columnIndex]));
  return {
    type: "matrix-flow",
    title: `${page.title} matrix state`,
    ruleLabel: "Grid rule",
    rule: page.transitionSummary,
    matrix,
    steps: page.dryRun.map((step, index) => {
      const activeCell = cells[index % cells.length] || [0, 0];
      return makeStep(page, step, index, {
        activeCells: [activeCell],
        visitedCells: cells.slice(0, Math.min(cells.length, index + 1)),
      });
    }),
  };
}

function graphAnimation(page) {
  const nodes = [
    { id: "A", label: "A", x: 110, y: 150 },
    { id: "B", label: "B", x: 300, y: 75 },
    { id: "C", label: "C", x: 500, y: 150 },
    { id: "D", label: "D", x: 300, y: 235 },
  ];
  const edges = [
    { from: "A", to: "B" },
    { from: "A", to: "D" },
    { from: "B", to: "C" },
    { from: "D", to: "C" },
  ];
  return {
    type: "graph-flow",
    title: `${page.title} graph state`,
    ruleLabel: "Graph invariant",
    rule: page.transitionSummary,
    nodes,
    edges,
    steps: page.dryRun.map((step, index) => {
      const activeNode = nodes[index % nodes.length].id;
      const nextNode = nodes[(index + 1) % nodes.length].id;
      return makeStep(page, step, index, {
        activeNode,
        visitedNodes: nodes.slice(0, Math.min(nodes.length, index)).map((node) => node.id),
        frontierNodes: [nextNode],
        activeEdge: { from: activeNode, to: nextNode },
      });
    }),
  };
}

function treeAnimation(page) {
  const nodes = [
    { id: "8", label: "8", x: 340, y: 58 },
    { id: "4", label: "4", x: 190, y: 150 },
    { id: "12", label: "12", x: 490, y: 150 },
    { id: "2", label: "2", x: 110, y: 255 },
    { id: "6", label: "6", x: 270, y: 255 },
    { id: "10", label: "10", x: 420, y: 255 },
    { id: "14", label: "14", x: 570, y: 255 },
  ];
  const edges = [
    { from: "8", to: "4" },
    { from: "8", to: "12" },
    { from: "4", to: "2" },
    { from: "4", to: "6" },
    { from: "12", to: "10" },
    { from: "12", to: "14" },
  ];
  return {
    type: "tree-operation",
    title: `${page.title} tree state`,
    nodes,
    edges,
    steps: page.dryRun.map((step, index) => {
      const activeNode = nodes[index % nodes.length].id;
      const targetNode = nodes[Math.min(nodes.length - 1, index + 1)].id;
      return makeStep(page, step, index, {
        activeNode,
        targetNode,
        replacementNode: index >= page.dryRun.length - 2 ? targetNode : "",
        mutedNodes: index <= 1 ? nodes.slice(4).map((node) => node.id) : [],
      });
    }),
  };
}

function stackQueueAnimation(page) {
  const values = firstArrayInput(page).slice(0, 5);
  const orientation = words(`${page.category} ${page.visualizerType}`).includes("queue") || words(page.visualizerType).includes("deque") ? "queue" : "stack";
  return {
    type: "stack-queue-flow",
    title: `${page.title} ${orientation} state`,
    ruleLabel: `${orientation} rule`,
    rule: page.transitionSummary,
    orientation,
    items: values,
    steps: page.dryRun.map((step, index) => {
      const active = Math.min(index, values.length - 1);
      return makeStep(page, step, index, {
        activeItems: [active],
        topIndex: orientation === "stack" ? active : 0,
        queueWindow: orientation === "queue" ? [0, active] : [active, values.length - 1],
      });
    }),
  };
}

function linkedListAnimation(page) {
  const nodes = ["head", "n2", "n3", "tail"].map((id, index) => ({
    id,
    label: ["head", "12", "18", "tail"][index],
    role: index === 0 ? "head" : index === 3 ? "tail" : `node ${index + 1}`,
  }));
  return {
    type: "linked-list-flow",
    title: `${page.title} pointer state`,
    ruleLabel: "Pointer rule",
    rule: page.transitionSummary,
    nodes,
    steps: page.dryRun.map((step, index) => {
      const active = nodes[index % nodes.length];
      return makeStep(page, step, index, {
        activeNode: active.id,
        previousNode: nodes[Math.max(0, index - 1) % nodes.length].id,
        nextNode: nodes[Math.min(nodes.length - 1, index + 1)].id,
      });
    }),
  };
}

function recursionAnimation(page) {
  const base = page.algorithmSlug || "solve";
  const calls = [`${base}(3)`, `${base}(2)`, `${base}(1)`, "base case"];
  return {
    type: "recursion-flow",
    title: `${page.title} call stack`,
    ruleLabel: "Recursive contract",
    rule: page.transitionSummary,
    calls,
    steps: page.dryRun.map((step, index) => makeStep(page, step, index, {
      activeCall: Math.min(index, calls.length - 1),
      returningCalls: index >= calls.length - 1 ? calls.map((_, callIndex) => callIndex) : [],
    })),
  };
}

function stringAnimation(page) {
  const text = firstStringInput(page);
  const pattern = String((Array.isArray(page.runnerInput) ? page.runnerInput.find((item, index) => index > 0 && typeof item === "string") : "") || text.slice(0, 3));
  return {
    type: "string-flow",
    title: `${page.title} character scan`,
    ruleLabel: "String invariant",
    rule: page.transitionSummary,
    text,
    pattern,
    steps: page.dryRun.map((step, index) => {
      const start = Math.min(index, Math.max(0, text.length - 1));
      return makeStep(page, step, index, {
        activeRange: [start, Math.min(text.length - 1, start + Math.max(0, pattern.length - 1))],
        matchedRange: index === page.dryRun.length - 1 ? [0, Math.min(text.length - 1, pattern.length - 1)] : [],
      });
    }),
  };
}

function stateAnimation(page) {
  return {
    type: "state-flow",
    title: `${page.title} state transitions`,
    ruleLabel: "State rule",
    rule: page.transitionSummary,
    states: page.dryRun.map((step) => step.label),
    steps: page.dryRun.map((step, index) => makeStep(page, step, index, {
      activeState: index,
    })),
  };
}

function makeAnimation(page) {
  const kind = getKind(page);
  if (kind === "array-flow") return arrayAnimation(page);
  if (kind === "bucket-flow") return bucketAnimation(page);
  if (kind === "matrix-flow") return matrixAnimation(page);
  if (kind === "graph-flow") return graphAnimation(page);
  if (kind === "tree-operation") return treeAnimation(page);
  if (kind === "stack-queue-flow") return stackQueueAnimation(page);
  if (kind === "linked-list-flow") return linkedListAnimation(page);
  if (kind === "recursion-flow") return recursionAnimation(page);
  if (kind === "string-flow") return stringAnimation(page);
  return stateAnimation(page);
}

function serialize(page) {
  return `// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = ${JSON.stringify(page, null, 2)};
`;
}

const files = await walk(ROOT);
let updated = 0;
const counts = {};

for (const file of files) {
  const href = `${pathToFileURL(path.resolve(file)).href}?${Date.now()}-${Math.random()}`;
  const { algorithmPage } = await import(href);
  if (!algorithmPage) continue;
  if (algorithmPage.animation?.type === "edge-relaxation" || algorithmPage.id === "bst-delete") continue;

  algorithmPage.animation = makeAnimation(algorithmPage);
  counts[algorithmPage.animation.type] = (counts[algorithmPage.animation.type] || 0) + 1;
  await fs.writeFile(file, serialize(algorithmPage), "utf8");
  updated += 1;
}

console.log(`Animation metadata updated: ${updated}`);
for (const [type, count] of Object.entries(counts).sort((a, b) => b[1] - a[1])) {
  console.log(`${count} ${type}`);
}
