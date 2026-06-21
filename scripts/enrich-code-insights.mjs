import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = path.resolve("src/algorithms");
const DATA_FILE = "data.js";

async function walk(dir, out = []) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const filePath = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(filePath, out);
    else if (entry.name === DATA_FILE) out.push(filePath);
  }
  return out;
}

function codePathFor(page, dataFile) {
  const declaredPath = page.codePath;
  if (!declaredPath) return null;
  if (declaredPath.startsWith("./")) return path.resolve(declaredPath.slice(2));
  return path.resolve(path.dirname(dataFile), declaredPath);
}

function lineNumberForRole(step, codeLines) {
  const label = `${step.label || ""} ${step.title || ""}`.toLowerCase();
  const candidates = codeLines.map((line, index) => ({ text: line.trim(), number: index + 1 }));
  const findLine = (matcher) => candidates.find(({ text }) => matcher(text))?.number;
  const firstAlgorithmLine = () => findLine((text) => /^(const|let)\s+\w+\s*=|^for\s*\(|^while\s*\(|^if\s*\(/.test(text));

  if (/\b(result|answer|return|output|visible)\b/.test(label)) {
    return findLine((text) => /^return\b/.test(text)) || step.activeLine || 1;
  }

  if (/\b(push|pop|resolve)\b/.test(label)) {
    return findLine((text) => /^while\b/.test(text) && /stack|\.at|\.length/.test(text))
      || findLine((text) => /\.pop\(\)|\.push\(/.test(text))
      || step.activeLine
      || 1;
  }

  if (/\bstack\b/.test(label) && /\b(top|inspect|check)\b/.test(label)) {
    return findLine((text) => /^while\b/.test(text) && /stack|\.at|\.length/.test(text))
      || findLine((text) => /^(const|let)\s+stack\b/.test(text))
      || step.activeLine
      || 1;
  }

  if (/\bstack\b/.test(label) && /\b(read|state|stack)\b/.test(label)) {
    return findLine((text) => /^(const|let)\s+stack\b/.test(text))
      || firstAlgorithmLine()
      || step.activeLine
      || 1;
  }

  if (/\b(loop|transition|push|pop|swap|relax|compare|merge|partition|visit|rotate|update|resolve)\b/.test(label)) {
    if (/\b(push|pop|resolve)\b/.test(label)) {
      return findLine((text) => /^while\b/.test(text) && /stack|\.at|\.length/.test(text))
        || findLine((text) => /\.pop\(\)|\.push\(/.test(text))
        || step.activeLine
        || 1;
    }
    if (/\b(compare|check|inspect)\b/.test(label)) {
      return findLine((text) => /^if\b/.test(text))
        || findLine((text) => /^const\b/.test(text) && /mid|pivot|current|candidate|target/i.test(text))
        || step.activeLine
        || 1;
    }
    return findLine((text) => /\b(while|for|if)\b/.test(text) && /[<>!=]=?|\.length|\.at|includes|has\(/.test(text))
      || findLine((text) => /=/.test(text) && !/^const\b/.test(text))
      || step.activeLine
      || 1;
  }

  if (/\b(state|table|stack|queue|heap|set|map|visited|distance|window|bucket)\b/.test(label)) {
    if (/\bstack\b/.test(label)) return findLine((text) => /^(const|let)\s+stack\b/.test(text)) || step.activeLine || 1;
    if (/\bqueue\b/.test(label)) return findLine((text) => /^(const|let)\s+queue\b/.test(text)) || step.activeLine || 1;
    if (/\b(low|high|window|boundary)\b/.test(label)) return findLine((text) => /^(const|let)\s+(low|left|start|high|right|end)\b/.test(text)) || step.activeLine || 1;
    if (/\bdistance\b/.test(label)) return findLine((text) => /^(const|let)\s+distance\b/.test(text)) || step.activeLine || 1;
    return findLine((text) => /^(const|let)\s+\w+\s*=\s*(\[\]|new |Array|Object|{})/.test(text))
      || findLine((text) => /^const\b/.test(text) && !/^const\s+\w+\s*=\s*Array\.isArray/.test(text))
      || step.activeLine
      || 1;
  }

  if (/\b(input|read|graph|array|text|root|start)\b/.test(label) && !/\b(top|inspect|check|compare|push|pop|resolve|relax)\b/.test(label)) {
    return firstAlgorithmLine() || step.activeLine || 1;
  }

  return step.activeLine || 1;
}

function describeLine(line, context) {
  const text = line.trim();
  const title = context.title;
  const functionName = context.functionName;

  if (!text) return `This blank line separates ${title}'s setup from the next code block.`;

  const functionMatch = text.match(/^export function\s+(\w+)\(([^)]*)\)/);
  if (functionMatch) {
    const params = functionMatch[2].trim();
    return params
      ? `Defines ${functionName || functionMatch[1]} and names the input ${params}; edits to those inputs change the visual state and output.`
      : `Defines ${functionName || functionMatch[1]} as the runnable entry point for this lesson.`;
  }

  const constMatch = text.match(/^(const|let)\s+(\w+)\s*=\s*(.+);?$/);
  if (constMatch) {
    const [, declarationKind, name, expression] = constMatch;
    if (name === "stack" && /\[\]/.test(expression)) return "Creates the monotonic stack. It stores indexes that are still waiting for a greater value to appear.";
    if (name === "result" && /Array\(/.test(expression) && /\.fill\(/.test(expression)) return "Creates the answer array and fills it with the fallback value for items that never find a next greater element.";
    if (/\[\]/.test(expression)) return `Creates ${name} as empty working state; later lines add and remove values from it.`;
    if (/Array\(/.test(expression) && /\.fill\(/.test(expression)) return `Prepares ${name} with a default value so unresolved positions already have the correct fallback answer.`;
    if (/new Set|new Map/.test(expression)) return `Creates ${name} for fast membership or lookup checks while the scan runs.`;
    if (/Object\.fromEntries/.test(expression)) return `Builds ${name} as a lookup table so each key has an explicit starting state.`;
    if (/Math\./.test(expression)) return `Computes ${name} from the current values before the algorithm decides the next move.`;
    if (declarationKind === "let") return `Initializes ${name} as mutable state; later branches update it as the search window or traversal changes.`;
    if (/\[/.test(expression) || /{/.test(expression)) return `Initializes ${name}, the local state that the next highlighted lines will update.`;
    return `Stores ${name} so the algorithm can reuse this value without recomputing it.`;
  }

  const forMatch = text.match(/^for\s*\((.+)\)/);
  if (forMatch) {
    return "Scans the input from left to right so each value gets one chance to resolve earlier pending values.";
  }

  const whileMatch = text.match(/^while\s*\((.+)\)/);
  if (whileMatch) {
    if (/stack\.length/.test(whileMatch[1]) && /\.at\(-1\)/.test(whileMatch[1])) {
      return "Peeks at the stack top and keeps popping while the current value is greater, resolving every smaller value that was waiting.";
    }
    return `Repeats while ${whileMatch[1]} is true, so the algorithm keeps resolving current work before moving on.`;
  }

  const ifMatch = text.match(/^if\s*\((.+)\)/);
  if (ifMatch) {
    return `Checks ${ifMatch[1]}; only the branch that preserves ${title}'s invariant is allowed to change state.`;
  }

  if (/result\[stack\.pop\(\)\]\s*=/.test(text)) return "Pops an index from the stack and writes the current value as that index's next greater element.";

  if (/stack\.push\(index\)/.test(text)) return "Pushes the current index because its next greater value has not been found yet.";

  if (/\.push\(/.test(text)) {
    const target = text.split(".push(")[0].trim();
    return `Adds the current value to ${target}, keeping it available for later comparisons or traversal.`;
  }

  if (/\.pop\(\)/.test(text)) {
    return `Removes the most recent pending item and uses the current state to resolve it.`;
  }

  if (/\.shift\(\)/.test(text)) {
    return `Removes the oldest queued item, which advances the traversal or first-in-first-out state.`;
  }

  const assignmentMatch = text.match(/^(.+?)\s*=\s*(.+);?$/);
  if (assignmentMatch && !/^return\b/.test(text)) {
    const target = assignmentMatch[1].trim();
    const value = assignmentMatch[2].trim().replace(/;$/, "");
    return `Updates ${target} with ${value}; this is the state change the animation should reflect.`;
  }

  const returnMatch = text.match(/^return\s+(.+);?$/);
  if (returnMatch) {
    return `Returns ${returnMatch[1].replace(/;$/, "")}, the value produced after ${title}'s state changes are complete.`;
  }

  return `Executes this ${title} line as part of the highlighted code path, linking the visual step to the implementation.`;
}

function enrichDryRun(page, codeLines) {
  const functionName = codeLines.join("\n").match(/export function\s+(\w+)/)?.[1] || "";
  return (page.dryRun || []).map((step) => {
    const activeLine = Math.min(Math.max(lineNumberForRole(step, codeLines), 1), codeLines.length || 1);
    const sourceLine = codeLines[activeLine - 1] || "";
    return {
      ...step,
      activeLine,
      codeInsight: describeLine(sourceLine, { title: page.title, functionName }),
    };
  });
}

function syncAnimationSteps(page, dryRun) {
  if (!page.animation || !Array.isArray(page.animation.steps)) return page.animation;
  return {
    ...page.animation,
    steps: page.animation.steps.map((step, index) => {
      const dryStep = dryRun[index];
      if (!dryStep) return step;
      return {
        ...step,
        rule: dryStep.codeInsight,
      };
    }),
  };
}

function serializePage(page) {
  return `// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = ${JSON.stringify(page, null, 2)};
`;
}

const dataFiles = await walk(ROOT);
let updated = 0;

for (const dataFile of dataFiles) {
  const moduleUrl = `${pathToFileURL(dataFile).href}?codeInsight=${Date.now()}-${Math.random()}`;
  const { algorithmPage } = await import(moduleUrl);
  const solutionPath = codePathFor(algorithmPage, dataFile);
  if (!solutionPath) continue;

  let codeSource = "";
  try {
    codeSource = await fs.readFile(solutionPath, "utf8");
  } catch {
    continue;
  }

  const codeLines = codeSource.trimEnd().split(/\r?\n/);
  const dryRun = enrichDryRun(algorithmPage, codeLines);
  const nextPage = {
    ...algorithmPage,
    dryRun,
    animation: syncAnimationSteps(algorithmPage, dryRun),
  };

  const nextSource = serializePage(nextPage);
  const currentSource = await fs.readFile(dataFile, "utf8");
  if (nextSource !== currentSource) {
    await fs.writeFile(dataFile, nextSource, "utf8");
    updated += 1;
  }
}

console.log(`Code insight pages scanned: ${dataFiles.length}`);
console.log(`Code insight pages updated: ${updated}`);
