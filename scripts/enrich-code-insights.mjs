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
  const firstAlgorithmLine = () => findLine((text) => /^(export\s+)?function\s+\w+\s*\(|^(const|let)\s+\w+\s*=|^for\s*\(|^while\s*\(|^if\s*\(/.test(text));
  const fallbackLine = () => {
    const requested = Number.isInteger(step.activeLine) ? step.activeLine : 1;
    const requestedText = candidates[requested - 1]?.text || "";
    if (requestedText && !requestedText.startsWith("//") && !/^[});]+;?$/.test(requestedText)) return requested;
    if (/^[});]+;?$/.test(requestedText)) {
      return findLine((text) => /^return\b/.test(text))
        || firstAlgorithmLine()
        || requested
        || 1;
    }
    return firstAlgorithmLine() || requested || 1;
  };

  if (/\b(result|answer|return|output|visible)\b/.test(label)) {
    return findLine((text) => /^return\b/.test(text)) || step.activeLine || 1;
  }

  if (/\b(push|pop|resolve)\b/.test(label)) {
      return findLine((text) => /^while\b/.test(text) && /stack|\.at|\.length/.test(text))
      || findLine((text) => /\.pop\(\)|\.push\(/.test(text))
      || fallbackLine();
  }

  if (/\bstack\b/.test(label) && /\b(top|inspect|check)\b/.test(label)) {
    return findLine((text) => /^while\b/.test(text) && /stack|\.at|\.length/.test(text))
      || findLine((text) => /^(const|let)\s+stack\b/.test(text))
      || fallbackLine();
  }

  if (/\bstack\b/.test(label) && /\b(read|state|stack)\b/.test(label)) {
    return findLine((text) => /^(const|let)\s+stack\b/.test(text))
      || firstAlgorithmLine()
      || fallbackLine();
  }

  if (/\b(loop|transition|push|pop|swap|relax|compare|merge|partition|visit|rotate|update|resolve)\b/.test(label)) {
    if (/\b(push|pop|resolve)\b/.test(label)) {
      return findLine((text) => /^while\b/.test(text) && /stack|\.at|\.length/.test(text))
        || findLine((text) => /\.pop\(\)|\.push\(/.test(text))
        || fallbackLine();
    }
    if (/\b(compare|check|inspect)\b/.test(label)) {
      return findLine((text) => /^if\b/.test(text))
        || findLine((text) => /^const\b/.test(text) && /mid|pivot|current|candidate|target/i.test(text))
        || fallbackLine();
    }
    return findLine((text) => /\b(while|for|if)\b/.test(text) && /[<>!=]=?|\.length|\.at|includes|has\(/.test(text))
      || findLine((text) => /=/.test(text) && !/^const\b/.test(text))
      || fallbackLine();
  }

  if (/\b(pivot|minimum|maximum|key|slot|cursor|position)\b/.test(label)) {
    if (/\bslot\b/.test(label)) {
      return findLine((text) => /^(const|let)\s+(values|array|cells|slots)\b/.test(text))
        || findLine((text) => /^return\b/.test(text))
        || fallbackLine();
    }
    return findLine((text) => /\b(pivot|min|max|key|index|left|right|low|mid|high)\b/.test(text) && /^(const|let|if|while|for)\b/.test(text))
      || fallbackLine();
  }

  if (/\b(state|table|stack|queue|heap|set|map|visited|distance|window|bucket)\b/.test(label)) {
    if (/\bstack\b/.test(label)) return findLine((text) => /^(const|let)\s+stack\b/.test(text)) || fallbackLine();
    if (/\bqueue\b/.test(label)) return findLine((text) => /^(const|let)\s+queue\b/.test(text)) || fallbackLine();
    if (/\b(low|high|window|boundary)\b/.test(label)) return findLine((text) => /^(const|let)\s+(low|left|start|high|right|end)\b/.test(text)) || fallbackLine();
    if (/\bdistance\b/.test(label)) return findLine((text) => /^(const|let)\s+distance\b/.test(text)) || fallbackLine();
    return findLine((text) => /^(const|let)\s+\w+\s*=\s*(\[\]|new |Array|Object|{})/.test(text))
      || findLine((text) => /^const\b/.test(text) && !/^const\s+\w+\s*=\s*Array\.isArray/.test(text))
      || fallbackLine();
  }

  if (/\b(input|read|graph|array|text|root|start)\b/.test(label) && !/\b(top|inspect|check|compare|push|pop|resolve|relax)\b/.test(label)) {
    return firstAlgorithmLine() || fallbackLine();
  }

  return fallbackLine();
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

  const helperFunctionMatch = text.match(/^function\s+(\w+)\(([^)]*)\)/);
  if (helperFunctionMatch) {
    const params = helperFunctionMatch[2].trim();
    return params
      ? `Defines helper ${helperFunctionMatch[1]} with ${params}, separating the repeated recursive or structural work from the public entry point.`
      : `Defines helper ${helperFunctionMatch[1]} for the repeated work shown in the trace.`;
  }

  const constMatch = text.match(/^(const|let)\s+(\w+)\s*=\s*(.+);?$/);
  if (constMatch) {
    const [, declarationKind, name, expression] = constMatch;
    if (/^\[\.\.\.\w+\]/.test(expression)) return `Copies the input into ${name}, so the animation can show mutations without pretending the caller's original array changes.`;
    if (/\.reduce\(/.test(expression)) return `Computes ${name} by reducing the current values, matching the aggregate shown in the result state.`;
    if (/\.length\b/.test(expression)) return `Stores ${name} from the current length, making the loop boundary explicit for the visual trace.`;
    if (/\.filter\(/.test(expression) && /\.sort\(/.test(expression)) return `Selects ${name} by filtering unfinished candidates and ordering them by the algorithm's priority rule.`;
    if (name === "stack" && /\[\]/.test(expression)) return "Creates the monotonic stack. It stores indexes that are still waiting for a greater value to appear.";
    if (name === "result" && /Array\(/.test(expression) && /\.fill\(/.test(expression)) return "Creates the answer array and fills it with the fallback value for items that never find a next greater element.";
    if (/Array\(/.test(expression) && /\.fill\(/.test(expression)) return `Prepares ${name} with a default value so unresolved positions already have the correct fallback answer.`;
    if (/new Set|new Map/.test(expression)) return `Creates ${name} for fast membership or lookup checks while the scan runs.`;
    if (/Object\.fromEntries/.test(expression)) return `Builds ${name} as a lookup table so each key has an explicit starting state.`;
    if (/Math\./.test(expression)) return `Computes ${name} from the current values before the algorithm decides the next move.`;
    if (/^\[.*\]$/.test(expression.replace(/;$/, ""))) return `Seeds ${name} with the sample values shown in the visualizer, giving the trace concrete cells to inspect.`;
    if (/\[\]/.test(expression)) return `Creates ${name} as empty working state; later lines add and remove values from it.`;
    if (/^\{/.test(expression.replace(/;$/, ""))) return `Builds ${name} as a structured sample object that the tree, graph, or map visualizer can render directly.`;
    if (/\{/.test(expression)) return `Builds ${name} from structured fields so the visual trace can show named values instead of an opaque blob.`;
    if (declarationKind === "let") return `Initializes ${name} as mutable state; later branches update it as the search window or traversal changes.`;
    if (/\[/.test(expression)) return `Prepares ${name} from the sample collection that the next visual step inspects.`;
    return `Stores ${name} so the algorithm can reuse this value without recomputing it.`;
  }

  const forMatch = text.match(/^for\s*\((.+)\)/);
  if (forMatch) {
    const header = forMatch[1];
    if (/const\s+\[.+\]\s+of/.test(header)) return `Iterates over each pair from the input structure, so the animation advances one relationship at a time.`;
    if (/const\s+\w+\s+of/.test(header)) return `Visits each input value once, letting the displayed state update in the same order as the code.`;
    if (/left.*right|right.*left/.test(header)) return `Moves two indexes toward each other, matching the animation's paired pointer updates.`;
    return `Runs the counted loop (${header}) so each visual step follows one code-controlled iteration.`;
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
    const condition = ifMatch[1];
    const trailing = text.slice(ifMatch[0].length).trim().replace(/;$/, "");
    if (trailing && /=/.test(trailing)) return `When ${condition} is true, ${trailing}; the animation should show that branch's state update immediately.`;
    if (trailing && /break\b/.test(trailing)) return `Stops the loop when ${condition} is true, so the trace does not continue past a completed or impossible state.`;
    return `Checks ${condition}; only the branch that preserves ${title}'s invariant is allowed to change state.`;
  }

  const elseIfMatch = text.match(/^else\s+if\s*\((.+)\)\s*(.*)$/);
  if (elseIfMatch) {
    const [, condition, action] = elseIfMatch;
    const cleanAction = action.trim().replace(/;$/, "");
    if (cleanAction) return `If the earlier branch did not run and ${condition} is true, ${cleanAction}; the visual state follows that alternate path.`;
    return `Checks the alternate condition ${condition} after the first branch fails.`;
  }

  const elseMatch = text.match(/^else\s+(.+);?$/);
  if (elseMatch) {
    return `Runs the fallback branch, ${elseMatch[1].replace(/;$/, "")}, after the earlier conditions fail.`;
  }

  const objectFieldMatch = text.match(/^(\w+):\s*(.+),?$/);
  if (objectFieldMatch) {
    const [, field, value] = objectFieldMatch;
    return `Sets the returned ${field} field to ${value.replace(/,$/, "")}, which is one of the named values rendered in the visual summary.`;
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

  const swapMatch = text.match(/^\[(.+)\]\s*=\s*\[(.+)\];?$/);
  if (swapMatch) {
    return `Swaps ${swapMatch[1]} with ${swapMatch[2]}, so the animation should move those highlighted positions together.`;
  }

  const incrementMatch = text.match(/^(\w+)\s*(\+=|-=|\+\+|--)\s*(.*);?$/);
  if (incrementMatch) {
    const [, target, operator, amount] = incrementMatch;
    const delta = operator === "+=" || operator === "-=" ? `${operator} ${amount.replace(/;$/, "")}` : operator;
    return `Moves ${target} by ${delta}, which is the pointer or counter change the next animation frame depends on.`;
  }

  const assignmentMatch = text.match(/^(.+?)\s*=\s*(.+);?$/);
  if (assignmentMatch && !/^return\b/.test(text)) {
    const target = assignmentMatch[1].trim();
    const value = assignmentMatch[2].trim().replace(/;$/, "");
    if (/Math\.min|Math\.max/.test(value)) return `Updates ${target} with the better value from ${value}, matching the optimization step in the visual trace.`;
    return `Updates ${target} with ${value}; this is the state change the animation should reflect.`;
  }

  const returnMatch = text.match(/^return\s+(.+);?$/);
  if (returnMatch) {
    const expression = returnMatch[1].replace(/;$/, "");
    if (/^\[/.test(expression)) return `Returns the final array-style answer ${expression}, so the last frame should show the chosen positions or sequence.`;
    if (/^\{/.test(expression)) return `Returns the final state object ${expression}, exposing the exact fields the visualizer has been tracking.`;
    if (/true|false/.test(expression)) return `Returns ${expression}, the boolean result reached by the highlighted checks.`;
    return `Returns ${expression}, the final value maintained by ${title}'s code path.`;
  }

  if (/^return;?$/.test(text)) {
    return `Returns from this branch immediately because the current recursive or conditional state is complete.`;
  }

  const callMatch = text.match(/^(\w+)\((.*)\);?$/);
  if (callMatch) {
    const [, callee, args] = callMatch;
    return `Calls ${callee}(${args.replace(/;$/, "")}), advancing the helper logic that drives the next visual state.`;
  }

  return `Runs this ${title} operation exactly as shown, so the visual step should mirror this highlighted code line.`;
}

function enrichDryRun(page, codeLines) {
  const functionName = codeLines.join("\n").match(/export function\s+(\w+)/)?.[1] || "";
  return (page.dryRun || []).map((step) => {
    const activeLine = Math.min(Math.max(lineNumberForRole(step, codeLines), 1), codeLines.length || 1);
    const sourceLine = codeLines[activeLine - 1] || "";
    const note = step.note === "The code first asks whether the current state is complete."
      ? "The entry step names the function inputs before the trace checks base cases or expands choices."
      : step.note;
    return {
      ...step,
      note,
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
        note: dryStep.note ?? step.note,
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
