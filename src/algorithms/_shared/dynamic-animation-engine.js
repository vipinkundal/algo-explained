const MAX_ARRAY_ITEMS = 16;
const MAX_STEPS = 80;

export function formatVisualizerInput(runnerInput = []) {
  const input = Array.isArray(runnerInput) && runnerInput.length === 1 ? runnerInput[0] : runnerInput;
  return JSON.stringify(input ?? [], null, 2);
}

export function createDynamicVisualization(algorithmPage, codeSource, inputText) {
  const expectedInput = Array.isArray(algorithmPage.runnerInput) ? algorithmPage.runnerInput : [];
  const parameterNames = getFunctionParameters(codeSource);
  const parsed = parseInputText(inputText, expectedInput, parameterNames);
  const animation = createAnimation(algorithmPage, parsed.runInput);

  return {
    ...parsed,
    animation,
  };
}

function parseInputText(inputText, expectedInput, parameterNames) {
  const text = String(inputText || "").trim();
  if (!text) {
    return {
      ok: true,
      message: "Using the page sample input.",
      runInput: expectedInput,
    };
  }

  const jsonValue = tryParseJson(text);
  if (jsonValue.ok) {
    return {
      ok: true,
      message: "Input parsed as JSON.",
      runInput: normalizeJsonInput(jsonValue.value, expectedInput),
    };
  }

  const namedValues = parseNamedValues(text);
  if (Object.keys(namedValues).length) {
    return {
      ok: true,
      message: "Input parsed from labeled values.",
      runInput: buildInputFromNamedValues(namedValues, expectedInput, parameterNames),
    };
  }

  return {
    ok: true,
    message: "Input parsed from plain text.",
    runInput: buildInputFromPlainText(text, expectedInput),
  };
}

function tryParseJson(text) {
  try {
    return { ok: true, value: JSON.parse(text) };
  } catch {
    return { ok: false };
  }
}

function normalizeJsonInput(value, expectedInput) {
  if (!Array.isArray(expectedInput) || expectedInput.length <= 1) return [coerceValue(value, expectedInput[0])];
  if (Array.isArray(value) && value.length === expectedInput.length) {
    return value.map((item, index) => coerceValue(item, expectedInput[index]));
  }
  return [coerceValue(value, expectedInput[0]), ...expectedInput.slice(1)];
}

function parseNamedValues(text) {
  const values = {};
  const pattern = /([A-Za-z_$][\w$ -]*)\s*[:=]\s*([^;\n]+)/g;
  let match;
  while ((match = pattern.exec(text))) {
    const key = normalizeName(match[1]);
    values[key] = parseLooseValue(match[2]);
  }
  return values;
}

function parseLooseValue(value) {
  const text = String(value || "").trim();
  const jsonValue = tryParseJson(text);
  if (jsonValue.ok) return jsonValue.value;

  const numbers = extractNumbers(text);
  if (numbers.length > 1) return numbers;
  if (numbers.length === 1 && /^-?\d+(?:\.\d+)?$/.test(text)) return numbers[0];

  const tokens = text.split(/[,\s]+/).map((item) => item.trim()).filter(Boolean);
  if (tokens.length > 1) return tokens.map((item) => {
    const numeric = Number(item);
    return Number.isFinite(numeric) ? numeric : item;
  });
  return text;
}

function buildInputFromNamedValues(namedValues, expectedInput, parameterNames) {
  const keys = Object.keys(namedValues);
  return expectedInput.map((expectedValue, index) => {
    const parameterKey = normalizeName(parameterNames[index] || "");
    const directKey = keys.find((key) => key === parameterKey);
    if (directKey) return coerceValue(namedValues[directKey], expectedValue);

    const semanticKey = findSemanticKey(keys, expectedValue, index);
    if (semanticKey) return coerceValue(namedValues[semanticKey], expectedValue);

    return expectedValue;
  });
}

function findSemanticKey(keys, expectedValue, index) {
  const isMatrix = Array.isArray(expectedValue) && Array.isArray(expectedValue[0]);
  const isArray = Array.isArray(expectedValue) && !isMatrix;
  const isString = typeof expectedValue === "string";
  const isNumber = typeof expectedValue === "number";

  if (isMatrix) return keys.find((key) => ["matrix", "grid", "board"].includes(key));
  if (isArray) return keys.find((key) => ["array", "arr", "nums", "numbers", "values", "items", "input"].includes(key));
  if (isString) return keys.find((key) => ["text", "string", "str", "word", "pattern", "target"].includes(key));
  if (isNumber) {
    if (index > 0) return keys.find((key) => ["target", "key", "k", "n", "value", "size"].includes(key));
    return keys.find((key) => ["value", "n", "size", "target"].includes(key));
  }
  return keys[index];
}

function buildInputFromPlainText(text, expectedInput) {
  if (!expectedInput.length) return [extractNumbers(text)];

  const firstExpected = expectedInput[0];
  const expectsMatrix = Array.isArray(firstExpected) && Array.isArray(firstExpected[0]);
  const expectsArray = Array.isArray(firstExpected) && !expectsMatrix;
  const expectsString = typeof firstExpected === "string";

  if (expectsMatrix) {
    return [parseMatrixText(text, firstExpected), ...expectedInput.slice(1)];
  }

  if (expectsString) {
    const parts = text.split(/\s+(?:pattern|target|needle)\s+/i);
    return expectedInput.map((expectedValue, index) => {
      if (typeof expectedValue === "string") return index === 0 ? parts[0].trim() : (parts[index] || expectedValue);
      return coerceValue(parts[index] || expectedValue, expectedValue);
    });
  }

  const numbers = extractNumbers(text);
  if (expectsArray) {
    if (expectedInput.length > 1 && typeof expectedInput[1] === "number" && numbers.length > 1) {
      return [numbers.slice(0, -1), numbers.at(-1), ...expectedInput.slice(2)];
    }
    return [numbers.length ? numbers : firstExpected, ...expectedInput.slice(1)];
  }

  return expectedInput.map((expectedValue, index) => coerceValue(numbers[index] ?? expectedValue, expectedValue));
}

function parseMatrixText(text, fallback) {
  const rows = text
    .split(/[;\n]+/)
    .map((row) => extractNumbers(row))
    .filter((row) => row.length);
  return rows.length ? rows : fallback;
}

function coerceValue(value, expectedValue) {
  if (Array.isArray(expectedValue)) {
    if (Array.isArray(expectedValue[0])) {
      if (Array.isArray(value) && Array.isArray(value[0])) return value;
      if (Array.isArray(value)) return [value];
      return expectedValue;
    }
    if (Array.isArray(value)) return value;
    const numbers = extractNumbers(String(value));
    return numbers.length ? numbers : expectedValue;
  }
  if (typeof expectedValue === "number") {
    const number = Number(Array.isArray(value) ? value[0] : value);
    return Number.isFinite(number) ? number : expectedValue;
  }
  if (typeof expectedValue === "string") return String(value ?? expectedValue);
  return value ?? expectedValue;
}

function extractNumbers(text) {
  return (String(text || "").match(/-?\d+(?:\.\d+)?/g) || []).map(Number).filter(Number.isFinite);
}

function getFunctionParameters(source) {
  const match = String(source || "").match(/(?:export\s+)?(?:async\s+)?function\s+[A-Za-z_$][\w$]*\s*\(([^)]*)\)/);
  if (!match) return [];
  return match[1]
    .split(",")
    .map((parameter) => parameter.replace(/=.*/, "").trim())
    .filter(Boolean);
}

function normalizeName(value) {
  return String(value || "").trim().toLowerCase().replace(/[^a-z0-9_$]+/g, "");
}

function createAnimation(page, runInput) {
  const base = page.animation || {};
  const type = chooseAnimationType(page, base);

  if (type === "array-flow") return createArrayAnimation(page, runInput, base);
  if (type === "bucket-flow") return createBucketAnimation(page, runInput, base);
  if (type === "matrix-flow") return createMatrixAnimation(page, runInput, base);
  if (type === "stack-queue-flow") return createStackQueueAnimation(page, runInput, base);
  if (type === "string-flow") return createStringAnimation(page, runInput, base);
  if (type === "recursion-flow") return createRecursionAnimation(page, runInput, base);
  if (type === "graph-flow") return createGraphAnimation(page, runInput, base);
  return createStateAnimation(page, runInput, base);
}

function chooseAnimationType(page, base) {
  const inferred = inferAnimationType(page);
  if (!base.type) return inferred;
  if (inferred === "array-flow" && base.type === "string-flow") return inferred;
  if (inferred === "matrix-flow" && base.type !== "matrix-flow") return inferred;
  if (inferred === "stack-queue-flow" && !["stack-queue-flow", "state-flow"].includes(base.type)) return inferred;
  return base.type;
}

function inferAnimationType(page) {
  const haystack = `${page.visualizerType || ""} ${page.category || ""} ${page.title || ""}`.toLowerCase();
  if (haystack.includes("matrix") || haystack.includes("grid")) return "matrix-flow";
  if (haystack.includes("string") || haystack.includes("palindrome") || haystack.includes("text search")) return "string-flow";
  if (haystack.includes("stack") || haystack.includes("queue")) return "stack-queue-flow";
  if (haystack.includes("graph")) return "graph-flow";
  if (haystack.includes("recursion")) return "recursion-flow";
  if (haystack.includes("bucket") || haystack.includes("frequency")) return "bucket-flow";
  if (haystack.includes("array") || haystack.includes("window") || haystack.includes("pointer") || haystack.includes("prefix") || haystack.includes("cumulative")) return "array-flow";
  return "array-flow";
}

function createArrayAnimation(page, runInput, base) {
  const values = clampItems(firstArrayInput(runInput, base.values), MAX_ARRAY_ITEMS);
  const title = `${page.title} input trace`;
  const lowerTitle = `${page.title || ""} ${page.visualizerType || ""}`.toLowerCase();

  if (lowerTitle.includes("binary search") || lowerTitle.includes("lower bound") || lowerTitle.includes("upper bound")) {
    return createBinarySearchAnimation(page, runInput, base, values, title);
  }
  if (lowerTitle.includes("prefix") || lowerTitle.includes("cumulative")) {
    return createPrefixAnimation(page, base, values, title);
  }
  if (lowerTitle.includes("window")) {
    return createWindowAnimation(page, runInput, base, values, title);
  }

  return {
    ...base,
    type: "array-flow",
    title,
    values,
    steps: values.slice(0, MAX_STEPS).map((value, index) => makeStep(page, base, index, {
      phase: `Index ${index}`,
      title: `Inspect ${formatValue(value)}`,
      note: `The trace reads input[${index}] and updates only the state owned by this algorithm.`,
      activeIndices: [index],
      mutedIndices: values.map((_, itemIndex) => itemIndex).filter((itemIndex) => Math.abs(itemIndex - index) > 2),
      window: [Math.max(0, index - 1), Math.min(values.length - 1, index + 1)],
      primaryLabel: `input[${index}] = ${formatValue(value)}`,
      secondaryLabel: page.transitionSummary,
    })),
  };
}

function createBinarySearchAnimation(page, runInput, base, values, title) {
  const target = firstScalarInput(runInput, values[Math.floor(values.length / 2)] ?? 0);
  const steps = [];
  let low = 0;
  let high = values.length - 1;

  while (low <= high && steps.length < MAX_STEPS) {
    const mid = Math.floor((low + high) / 2);
    const value = Number(values[mid]);
    let note = `${formatValue(value)} equals target ${formatValue(target)}. Return index ${mid}.`;
    const nextLow = low;
    const nextHigh = high;

    steps.push(makeStep(page, base, steps.length, {
      phase: `low ${low}, high ${high}`,
      title: `Compare middle index ${mid}`,
      note,
      activeIndices: uniqueNumbers([low, mid, high]),
      mutedIndices: values.map((_, index) => index).filter((index) => index < low || index > high),
      window: [low, high],
      primaryLabel: `mid ${mid}: ${formatValue(value)}`,
      secondaryLabel: `target ${formatValue(target)}`,
    }));

    if (value === Number(target)) break;
    if (value < Number(target)) {
      note = `${formatValue(value)} is smaller than ${formatValue(target)}, so low moves to ${mid + 1}.`;
      low = mid + 1;
    } else {
      note = `${formatValue(value)} is greater than ${formatValue(target)}, so high moves to ${mid - 1}.`;
      high = mid - 1;
    }
    steps[steps.length - 1].note = note;
    steps[steps.length - 1].window = [nextLow, nextHigh];
  }

  if (!steps.length) {
    steps.push(makeStep(page, base, 0, {
      phase: "Empty input",
      title: "No candidates",
      note: "The search range is empty, so the algorithm returns not found.",
      activeIndices: [],
      mutedIndices: [],
      window: [],
      primaryLabel: "empty",
      secondaryLabel: `target ${formatValue(target)}`,
    }));
  }

  return { ...base, type: "array-flow", title, values, steps };
}

function createPrefixAnimation(page, base, values, title) {
  let running = 0;
  const steps = values.slice(0, MAX_STEPS).map((value, index) => {
    running += Number(value) || 0;
    return makeStep(page, base, index, {
      phase: `Prefix ${index + 1}`,
      title: `Add input[${index}]`,
      note: `Running total becomes ${formatValue(running)} after adding ${formatValue(value)}.`,
      activeIndices: [index],
      sortedIndices: range(0, index),
      mutedIndices: values.map((_, itemIndex) => itemIndex).filter((itemIndex) => itemIndex > index + 1),
      window: [0, index],
      primaryLabel: `sum = ${formatValue(running)}`,
      secondaryLabel: `added ${formatValue(value)}`,
    });
  });
  return { ...base, type: "array-flow", title, values, steps };
}

function createWindowAnimation(page, runInput, base, values, title) {
  const windowSize = Math.max(1, Math.min(values.length, Number(runInput.find((item) => typeof item === "number")) || 3));
  const limit = Math.max(values.length - windowSize + 1, 1);
  const steps = range(0, limit - 1).slice(0, MAX_STEPS).map((start, index) => {
    const end = Math.min(values.length - 1, start + windowSize - 1);
    return makeStep(page, base, index, {
      phase: `Window ${start}-${end}`,
      title: "Move the active window",
      note: `Only values from index ${start} to ${end} are inside the current window.`,
      activeIndices: range(start, end),
      mutedIndices: values.map((_, itemIndex) => itemIndex).filter((itemIndex) => itemIndex < start || itemIndex > end),
      window: [start, end],
      primaryLabel: `window size ${windowSize}`,
      secondaryLabel: page.transitionSummary,
    });
  });
  return { ...base, type: "array-flow", title, values, steps };
}

function createBucketAnimation(page, runInput, base) {
  const values = clampItems(firstArrayInput(runInput, base.values), MAX_ARRAY_ITEMS);
  const buckets = base.buckets?.length ? base.buckets : [{ label: "low" }, { label: "mid" }, { label: "high" }];
  const bucketValues = buckets.map(() => []);
  const steps = values.slice(0, MAX_STEPS).map((value, index) => {
    const bucketIndex = Math.abs(Number(value) || 0) % buckets.length;
    bucketValues[bucketIndex].push(value);
    return makeStep(page, base, index, {
      phase: `Value ${formatValue(value)}`,
      title: "Place value in bucket",
      note: `${formatValue(value)} maps to ${buckets[bucketIndex].label || `bucket ${bucketIndex + 1}`}.`,
      activeValue: value,
      bucketIndex,
      bucketValues: bucketValues.map((bucket) => [...bucket]),
    });
  });
  return { ...base, type: "bucket-flow", title: `${page.title} bucket trace`, values, buckets, steps };
}

function createMatrixAnimation(page, runInput, base) {
  const matrix = firstMatrixInput(runInput, base.matrix);
  const cells = matrix.flatMap((row, rowIndex) => row.map((_, columnIndex) => [rowIndex, columnIndex]));
  const steps = cells.slice(0, MAX_STEPS).map((cell, index) => makeStep(page, base, index, {
    phase: `Cell ${cell[0]},${cell[1]}`,
    title: "Visit matrix cell",
    note: `The trace visits row ${cell[0]}, column ${cell[1]}.`,
    activeCells: [cell],
    visitedCells: cells.slice(0, index + 1),
  }));
  return { ...base, type: "matrix-flow", title: `${page.title} matrix trace`, matrix, steps };
}

function createStackQueueAnimation(page, runInput, base) {
  const items = clampItems(firstArrayInput(runInput, base.items), MAX_ARRAY_ITEMS);
  const orientation = base.orientation || (String(page.visualizerType || "").includes("queue") ? "queue" : "stack");
  const steps = items.slice(0, MAX_STEPS).map((item, index) => makeStep(page, base, index, {
    phase: `${orientation} slot ${index}`,
    title: `${orientation === "queue" ? "Enqueue" : "Push"} ${formatValue(item)}`,
    note: `${formatValue(item)} becomes part of the ${orientation} state.`,
    activeItems: [index],
    topIndex: orientation === "queue" ? 0 : index,
    queueWindow: orientation === "queue" ? [0, index] : [index, items.length - 1],
  }));
  return { ...base, type: "stack-queue-flow", title: `${page.title} ${orientation} trace`, orientation, items, steps };
}

function createStringAnimation(page, runInput, base) {
  const text = String(runInput.find((item) => typeof item === "string") || base.text || page.algorithmSlug || "algorithm");
  const pattern = String(runInput.find((item, index) => index > 0 && typeof item === "string") || base.pattern || "");
  const safeText = text.slice(0, MAX_ARRAY_ITEMS);
  const windowLength = Math.max(1, Math.min(pattern.length || 3, safeText.length || 1));
  const stepCount = Math.max(safeText.length - windowLength + 1, 1);
  const matchIndex = pattern ? safeText.indexOf(pattern) : -1;
  const steps = range(0, stepCount - 1).slice(0, MAX_STEPS).map((start, index) => {
    const end = Math.min(safeText.length - 1, start + windowLength - 1);
    return makeStep(page, base, index, {
      phase: `Window ${start}-${end}`,
      title: "Scan text window",
      note: pattern ? `Compare this window with pattern ${pattern}.` : "The trace advances through the input text.",
      activeRange: [start, end],
      matchedRange: matchIndex >= 0 && start === matchIndex ? [matchIndex, matchIndex + pattern.length - 1] : [],
    });
  });
  return { ...base, type: "string-flow", title: `${page.title} text trace`, text: safeText, pattern, steps };
}

function createRecursionAnimation(page, runInput, base) {
  const n = Math.max(1, Math.min(8, Number(firstScalarInput(runInput, 4)) || 4));
  const calls = range(n, 1).map((value) => `${page.algorithmSlug || "solve"}(${value})`);
  calls.push("base case");
  const steps = calls.slice(0, MAX_STEPS).map((call, index) => makeStep(page, base, index, {
    phase: `Depth ${index}`,
    title: call,
    note: index === calls.length - 1 ? "The base case stops the recursive descent." : "The recursive call creates one deeper stack frame.",
    activeCall: index,
    returningCalls: index === calls.length - 1 ? [index] : [],
  }));
  return { ...base, type: "recursion-flow", title: `${page.title} call trace`, calls, steps };
}

function createGraphAnimation(page, runInput, base) {
  const graph = runInput.find((item) => item && typeof item === "object" && !Array.isArray(item)) || null;
  const nodeIds = graph ? Object.keys(graph).slice(0, 6) : (base.nodes || []).map((node) => node.id).slice(0, 6);
  const nodes = nodeIds.length ? nodeIds.map((id, index) => ({
    id,
    label: id,
    x: 320 + Math.cos((Math.PI * 2 * index) / nodeIds.length) * 210,
    y: 150 + Math.sin((Math.PI * 2 * index) / nodeIds.length) * 100,
  })) : base.nodes || [];
  const edges = graph
    ? Object.entries(graph).flatMap(([from, tos]) => (Array.isArray(tos) ? tos : []).map((to) => ({ from, to: String(to) })))
    : base.edges || [];
  const steps = nodes.slice(0, MAX_STEPS).map((node, index) => makeStep(page, base, index, {
    phase: `Visit ${node.label}`,
    title: "Advance graph frontier",
    note: `${node.label} becomes the active graph node.`,
    activeNode: node.id,
    visitedNodes: nodes.slice(0, index).map((item) => item.id),
    frontierNodes: nodes[index + 1] ? [nodes[index + 1].id] : [],
    activeEdge: edges.find((edge) => edge.from === node.id) || {},
  }));
  return { ...base, type: "graph-flow", title: `${page.title} graph trace`, nodes, edges, steps };
}

function createStateAnimation(page, runInput, base) {
  const states = runInput.flatMap((item) => Array.isArray(item) ? item : [item]).slice(0, MAX_ARRAY_ITEMS).map(formatValue);
  const safeStates = states.length ? states : (base.states || ["Input", "State", "Answer"]);
  const steps = safeStates.slice(0, MAX_STEPS).map((item, index) => makeStep(page, base, index, {
    phase: `State ${index + 1}`,
    title: item,
    note: "The dynamic trace advances one state change at a time.",
    activeState: index,
  }));
  return { ...base, type: base.type || "state-flow", title: `${page.title} state trace`, states: safeStates, steps };
}

function makeStep(page, base, index, extras) {
  const dryRun = Array.isArray(page.dryRun) && page.dryRun.length ? page.dryRun[index % page.dryRun.length] : {};
  return {
    phase: dryRun.label || `Step ${index + 1}`,
    title: dryRun.title || `Step ${index + 1}`,
    note: dryRun.note || page.transitionSummary || "",
    ruleLabel: `${page.title} invariant`,
    rule: dryRun.codeInsight || page.codeInsight || base.rule || page.transitionSummary || "",
    ...extras,
  };
}

function firstArrayInput(runInput, fallback = [4, 1, 3, 2]) {
  const array = runInput.find((item) => Array.isArray(item) && !Array.isArray(item[0]));
  return Array.isArray(array) && array.length ? array : fallback;
}

function firstMatrixInput(runInput, fallback) {
  const matrix = runInput.find((item) => Array.isArray(item) && Array.isArray(item[0]));
  if (matrix?.length) return matrix.slice(0, 8).map((row) => row.slice(0, 8));
  if (Array.isArray(fallback) && fallback.length) return fallback;
  return [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
}

function firstScalarInput(runInput, fallback) {
  return runInput.find((item) => !Array.isArray(item) && (typeof item === "number" || typeof item === "string")) ?? fallback;
}

function clampItems(items, limit) {
  return (Array.isArray(items) ? items : []).slice(0, limit);
}

function uniqueNumbers(values) {
  return [...new Set(values.filter((value) => Number.isInteger(value)))];
}

function range(start, end) {
  const step = start <= end ? 1 : -1;
  const values = [];
  for (let value = start; step > 0 ? value <= end : value >= end; value += step) values.push(value);
  return values;
}

function formatValue(value) {
  if (Array.isArray(value)) return `[${value.map(formatValue).join(", ")}]`;
  if (value && typeof value === "object") return JSON.stringify(value);
  return String(value);
}
