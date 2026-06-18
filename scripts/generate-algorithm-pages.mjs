import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const algorithmsRoot = path.join(root, "src", "algorithms");
const manifestPath = path.join(root, "src", "content", "algorithm_page_modules.js");
const marker = "AUTO-GENERATED ALGORITHM PAGE";

function findMetaFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const current = path.join(dir, entry.name);
    if (entry.isDirectory()) return findMetaFiles(current);
    return entry.name === "meta.json" ? [current] : [];
  });
}

function toPosix(value) {
  return value.split(path.sep).join("/");
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function iconForAlgorithm(algorithm) {
  const category = String(algorithm.category || "").toLowerCase();
  if (category.includes("search")) return "search";
  if (category.includes("sort")) return "sort";
  if (category.includes("graph")) return "hub";
  if (category.includes("tree")) return "account_tree";
  if (category.includes("dynamic")) return "table_chart";
  if (category.includes("stack")) return "layers";
  if (category.includes("queue")) return "queue";
  if (category.includes("string")) return "abc";
  if (category.includes("matrix")) return "grid_on";
  if (category.includes("bit")) return "memory";
  if (category.includes("heap")) return "priority_high";
  if (category.includes("array")) return "view_week";
  return "school";
}

function generatedOrMissing(filePath) {
  if (!existsSync(filePath)) return true;
  return readFileSync(filePath, "utf8").includes(marker);
}

function writeGenerated(filePath, value) {
  if (!generatedOrMissing(filePath)) return false;
  writeFileSync(filePath, value, "utf8");
  return true;
}

function writeGeneratedCode(filePath, value) {
  if (!existsSync(filePath)) {
    writeFileSync(filePath, value, "utf8");
    return true;
  }

  const current = readFileSync(filePath, "utf8");
  if (current.includes("TODO: Implement") || current.includes("AUTO-GENERATED ALGORITHM SOLUTION")) {
    writeFileSync(filePath, value, "utf8");
    return true;
  }

  return false;
}

function toFunctionName(value) {
  const words = String(value)
    .replace(/\+\+/g, " cpp ")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/);
  const [first = "algorithm", ...rest] = words;
  return [first.toLowerCase(), ...rest.map((word) => word.charAt(0).toUpperCase() + word.slice(1))].join("");
}

function possessive(value) {
  return String(value).endsWith("s") ? `${value}'` : `${value}'s`;
}

function classifyAlgorithm(algorithm) {
  const id = String(algorithm.id || "");
  const title = String(algorithm.title || "");
  const category = String(algorithm.category || "");
  const text = `${id} ${title} ${category}`.toLowerCase();

  if (text.includes("binary-search")) return "binary-search";
  if (text.includes("linear-search")) return "linear-search";
  if (text.includes("lower-bound")) return "lower-bound";
  if (text.includes("upper-bound")) return "upper-bound";
  if (text.includes("ternary")) return "ternary-search";
  if (text.includes("rotated")) return "rotated-search";
  if (text.includes("quick-sort")) return "quick-sort";
  if (text.includes("merge-sort")) return "merge-sort";
  if (text.includes("bubble-sort")) return "bubble-sort";
  if (text.includes("insertion-sort")) return "insertion-sort";
  if (text.includes("selection-sort")) return "selection-sort";
  if (text.includes("heap-sort")) return "heap-sort";
  if (text.includes("counting-sort")) return "counting-sort";
  if (text.includes("radix-sort")) return "radix-sort";
  if (text.includes("bucket-sort")) return "bucket-sort";
  if (id === "bfs") return "bfs";
  if (id === "dfs") return "dfs";
  if (text.includes("dijkstra")) return "dijkstra";
  if (text.includes("bellman")) return "bellman-ford";
  if (text.includes("floyd")) return "floyd-warshall";
  if (text.includes("kruskal")) return "kruskal";
  if (text.includes("prim")) return "prim";
  if (text.includes("topological")) return "topological-sort";
  if (text.includes("union-find")) return "union-find";
  if (text.includes("cycle-detection")) return "cycle-detection";
  if (text.includes("tarjan")) return "tarjan";
  if (text.includes("kosaraju")) return "kosaraju";
  if (text.includes("bst-search")) return "bst-search";
  if (text.includes("bst-insert")) return "bst-insert";
  if (text.includes("bst-delete")) return "bst-delete";
  if (text.includes("preorder")) return "preorder-traversal";
  if (text.includes("inorder")) return "inorder-traversal";
  if (text.includes("postorder")) return "postorder-traversal";
  if (text.includes("level-order")) return "level-order-traversal";
  if (text.includes("lowest-common-ancestor")) return "lca";
  if (text.includes("height-depth")) return "tree-height";
  if (text.includes("diameter")) return "tree-diameter";
  if (text.includes("trie")) return "trie";
  if (text.includes("knapsack")) return "knapsack";
  if (text.includes("coin-change")) return "coin-change";
  if (text.includes("edit-distance")) return "edit-distance";
  if (text.includes("longest-common-subsequence")) return "lcs";
  if (text.includes("longest-increasing-subsequence")) return "lis";
  if (text.includes("fibonacci")) return "fibonacci";
  if (text.includes("matrix-chain")) return "matrix-chain";
  if (text.includes("kadane")) return "kadane";
  if (text.includes("prefix-sum-matrix")) return "prefix-sum-matrix";
  if (text.includes("prefix-sum")) return "prefix-sum";
  if (text.includes("sliding-window-maximum")) return "sliding-window-maximum";
  if (text.includes("sliding-window")) return "sliding-window";
  if (text.includes("two-pointers")) return "two-pointers";
  if (text.includes("dutch")) return "dutch-national-flag";
  if (text.includes("majority")) return "majority-element";
  if (text.includes("difference-array")) return "difference-array";
  if (text.includes("maximum-product")) return "maximum-product";
  if (text.includes("longest-consecutive")) return "longest-consecutive";
  if (text.includes("kmp")) return "kmp";
  if (text.includes("rabin")) return "rabin-karp";
  if (text.includes("z-algorithm")) return "z-algorithm";
  if (text.includes("anagram")) return "anagram";
  if (text.includes("palindromic") || text.includes("manacher")) return "palindrome";
  if (text.includes("valid-parentheses")) return "valid-parentheses";
  if (text.includes("next-greater")) return "next-greater";
  if (text.includes("previous-greater")) return "previous-greater";
  if (text.includes("min-stack")) return "min-stack";
  if (text.includes("histogram")) return "histogram";
  if (text.includes("stock-span")) return "stock-span";
  if (text.includes("queue-basics")) return "queue-basics";
  if (text.includes("deque")) return "deque";
  if (text.includes("circular-queue")) return "circular-queue";
  if (text.includes("lru")) return "lru-cache";
  if (text.includes("heapify")) return "heapify";
  if (text.includes("min-heap")) return "min-heap";
  if (text.includes("max-heap")) return "max-heap";
  if (text.includes("kth-largest")) return "kth-largest";
  if (text.includes("top-k")) return "top-k";
  if (text.includes("merge-k")) return "merge-k";
  if (text.includes("flood-fill")) return "flood-fill";
  if (text.includes("island")) return "island-counting";
  if (text.includes("spiral")) return "spiral-matrix";
  if (text.includes("rotate-matrix")) return "rotate-matrix";
  if (text.includes("matrix-traversal")) return "matrix-traversal";
  if (text.includes("sorted-matrix")) return "sorted-matrix-search";
  if (text.includes("gcd")) return "gcd";
  if (text.includes("lcm")) return "lcm";
  if (text.includes("prime")) return "prime";
  if (text.includes("sieve")) return "sieve";
  if (text.includes("backtracking")) return "backtracking-generic";
  if (text.includes("recursion-basics")) return "backtracking-generic";
  if (text.includes("power")) return "power";
  if (text.includes("single-number")) return "single-number";
  if (text.includes("set-bits")) return "count-set-bits";
  if (text.includes("bitmasking")) return "bitmasking";
  if (text.includes("xor")) return "xor";
  if (text.includes("factorial")) return "factorial";
  if (text.includes("subsets")) return "subsets";
  if (text.includes("permutations")) return "permutations";
  if (text.includes("combination")) return "combination-sum";
  if (text.includes("n-queens")) return "n-queens";
  if (text.includes("sudoku")) return "sudoku";
  if (text.includes("maze")) return "maze";
  if (text.includes("word-search")) return "word-search";
  if (text.includes("hanoi")) return "tower-of-hanoi";
  if (text.includes("parentheses")) return "generate-parentheses";
  if (text.includes("cpp-sort")) return "cpp-sort";
  if (text.includes("cpp-reverse")) return "cpp-reverse";
  if (text.includes("cpp-accumulate")) return "cpp-accumulate";
  if (text.includes("cpp-binary-search")) return "cpp-binary-search";
  if (text.includes("cpp-lower-bound")) return "cpp-lower-bound";
  if (text.includes("cpp-upper-bound")) return "cpp-upper-bound";
  if (text.includes("cpp-unique")) return "cpp-unique";
  if (text.includes("cpp-next-permutation")) return "cpp-next-permutation";
  if (text.includes("cpp-max-min")) return "cpp-max-min";
  if (text.includes("cpp-map") || text.includes("cpp-unordered")) return "cpp-map-set";
  if (text.includes("cpp-priority")) return "cpp-priority-queue";

  if (category.includes("Graph")) return "graph-generic";
  if (category.includes("Sorting")) return "sort-generic";
  if (category.includes("Searching")) return "search-generic";
  if (category.includes("Tree")) return "tree-generic";
  if (category.includes("Dynamic")) return "dp-generic";
  if (category.includes("String")) return "string-generic";
  if (category.includes("Stack")) return "stack-generic";
  if (category.includes("Queue")) return "queue-generic";
  if (category.includes("Heap")) return "heap-generic";
  if (category.includes("Matrix")) return "matrix-generic";
  if (category.includes("Number") || category.includes("Bit")) return "number-generic";
  if (category.includes("Recursion") || category.includes("Backtracking")) return "backtracking-generic";
  if (category.includes("Array")) return "array-generic";
  return "generic";
}

function createNarrative(algorithm) {
  const kind = classifyAlgorithm(algorithm);
  const title = algorithm.title;
  const category = algorithm.category;
  const titlePossessive = possessive(title);
  const visualizerName = algorithm.visualizerType.replaceAll("-", " ");

  const base = {
    input: "input",
    inputPurpose: `The concrete data ${title} receives before any state changes begin.`,
    state: "state",
    statePurpose: `The working information ${title} updates while it runs.`,
    answer: "answer",
    answerPurpose: `The final value ${title} returns after the stop condition is met.`,
    condition: "condition",
    conditionPurpose: `The rule that decides whether ${title} continues, branches, or stops.`,
    concept: `${title} solves a ${category} problem by maintaining only the state needed for its ${visualizerName} transition.`,
    logicSummary: `${title} reads the input, initializes its working state, applies the core transition, and returns the tracked answer.`,
    transitionSummary: `Repeat the ${visualizerName} transition until the stop condition for ${title} is reached.`,
    codeInsight: `The implementation keeps ${titlePossessive} state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.`,
    whenToUse: `Use ${title} when a problem matches the ${category} pattern and the expected state changes match a ${visualizerName} dry run.`,
    memoryTrick: `${title}: name the input, state, answer, and stop condition before writing the loop.`,
    complexity: { time: "Depends on the finalized input size and transition count.", space: "Depends on the auxiliary state maintained by the implementation." },
    steps: [
      ["Read the input", `Identify the exact data ${title} receives and what output is required.`],
      ["Initialize state", `Prepare the working variables used only by ${title}.`],
      ["Apply the transition", `Run the ${visualizerName} transition and update the algorithm-specific state.`],
      ["Return the answer", "Stop at the correct condition and return the tracked result."],
    ],
    dryRun: [
      ["Input", "Read the problem data", `Read the ${title} input and decide what result must be produced.`, 1],
      ["State", "Initialize working state", `Set up the state variables that ${title} changes during the dry run.`, 3],
      ["Transition", "Run the core step", `Apply one ${visualizerName} transition for ${title}.`, 5],
      ["Answer", "Return the result", `Return the final ${title} answer from the tracked state.`, 8],
    ],
  };

  const set = (overrides) => ({ ...base, ...overrides });

  if (kind === "bfs") return set({
    input: "graph, start",
    inputPurpose: "An adjacency list and the source vertex where breadth-first exploration begins.",
    state: "queue, visited",
    statePurpose: "A FIFO queue holds the frontier; visited prevents revisiting the same vertex.",
    answer: "order or distance",
    answerPurpose: "The visitation order, or shortest unweighted distance if distances are tracked.",
    condition: "queue not empty",
    conditionPurpose: "Continue while there are frontier vertices waiting to expand.",
    concept: "Breadth-First Search explores a graph level by level with a queue, so every vertex at distance k is processed before distance k + 1.",
    logicSummary: "Mark the start vertex, enqueue it, repeatedly dequeue a vertex, and enqueue each unvisited neighbor.",
    transitionSummary: "Each loop removes one vertex from the queue and appends newly discovered neighbors to the back.",
    codeInsight: "The queue is the key: shifting from the front and pushing neighbors to the back preserves layer order.",
    complexity: { time: "O(V + E) for an adjacency-list graph.", space: "O(V) for the queue, visited set, and traversal order." },
    steps: [
      ["Choose the start vertex", "Begin from the requested source and mark it visited immediately."],
      ["Use a FIFO frontier", "Push the start into a queue so vertices are processed in discovery order."],
      ["Expand neighbors", "Pop one vertex, inspect its neighbors, and enqueue only unseen vertices."],
      ["Return layer order", "The produced order reflects shortest unweighted graph layers."],
    ],
  });

  if (kind === "dfs") return set({
    input: "graph, start",
    state: "stack or recursion",
    answer: "depth-first order",
    condition: "unvisited neighbor exists",
    concept: "Depth-First Search follows one branch as far as possible before backing up to another branch.",
    logicSummary: "Visit a vertex, mark it, recursively visit each unvisited neighbor, and unwind when no neighbor remains.",
    transitionSummary: "The transition moves from the current vertex to one unvisited neighbor, then backtracks.",
    codeInsight: "The recursive call stack is the state: each frame remembers which vertex still has neighbors to explore.",
    complexity: { time: "O(V + E) for an adjacency-list graph.", space: "O(V) for visited plus recursion depth in the worst case." },
  });

  if (kind.includes("sort")) return set({
    input: "array",
    inputPurpose: "The list of comparable values that must be rearranged into sorted order.",
    state: "indices and working array",
    statePurpose: "Pointers, passes, partitions, buckets, or merge buffers that track progress.",
    answer: "sorted array",
    answerPurpose: "A nondecreasing version of the input array.",
    condition: "unsorted region remains",
    conditionPurpose: "Continue while there are elements, partitions, passes, or digit buckets left to process.",
    concept: `${title} is a sorting strategy that repeatedly narrows unsorted work until every value is in order.`,
    logicSummary: `Keep the sorted invariant for ${title}: each transition makes a pass, partition, merge, heap step, or bucket placement that reduces disorder.`,
    transitionSummary: "Compare, move, swap, merge, or bucket values according to this sorter until no unsorted work remains.",
    codeInsight: "The implementation copies the input first, then mutates only that working array so the original caller data is not changed.",
    complexity: complexityForKind(kind),
  });

  if (kind.includes("search") || kind.includes("bound")) return set({
    input: "array, target",
    inputPurpose: "A searchable list plus the value or boundary condition being requested.",
    state: "search window",
    statePurpose: "Current indices or scan position that define where the answer can still be.",
    answer: "index or insertion point",
    answerPurpose: "The found position, boundary position, or -1 when no valid item exists.",
    condition: "window still valid",
    conditionPurpose: "Continue while the current index or low/high window can still contain the answer.",
    concept: `${title} narrows where a target can be by scanning or shrinking a candidate interval.`,
    logicSummary: "Compare the current value with the target, discard impossible positions, and keep the best candidate when needed.",
    transitionSummary: "Each transition either advances one position or moves a boundary inward.",
    codeInsight: "The boundary variables are the important state; every branch must make the remaining search interval smaller.",
    complexity: complexityForKind(kind),
  });

  if (category.includes("Graphs")) return set({
    input: "graph",
    state: "visited and frontier",
    answer: "graph result",
    condition: "frontier or edge work remains",
    concept: `${title} processes vertices and edges while preserving a graph-specific invariant.`,
    logicSummary: "Initialize graph state, repeatedly choose the next vertex or edge, relax or mark it, and record the final graph result.",
    transitionSummary: "Each transition consumes one frontier item, edge, or component and updates visited, distance, parent, or ordering state.",
    codeInsight: "Keep graph state explicit: visited, distance, parent, stack, queue, or disjoint-set arrays should each have one job.",
    complexity: complexityForKind(kind),
  });

  if (category.includes("Tree")) return set({
    input: "root",
    state: "current node and traversal state",
    answer: "tree result",
    condition: "node exists",
    concept: `${title} relies on the recursive structure of a tree: solve the current node and combine child results.`,
    logicSummary: "Check the base case, process the current node, recurse into children, and combine the returned values.",
    transitionSummary: "Move from a node to its child or back from a child to its parent with updated state.",
    codeInsight: "Tree code stays clean when every recursive call returns exactly the information the parent needs.",
    complexity: complexityForKind(kind),
  });

  if (category.includes("Dynamic")) return set({
    input: "problem parameters",
    state: "dp table",
    answer: "optimal value",
    condition: "subproblems remain",
    concept: `${title} stores overlapping subproblem answers so each state is solved once and reused later.`,
    logicSummary: "Define the dp state, initialize base cases, fill states in dependency order, and read the requested answer.",
    transitionSummary: "Each transition computes one dp state from smaller or previously solved states.",
    codeInsight: "The dp table is the source of truth; the code should make each state definition match the recurrence.",
    complexity: complexityForKind(kind),
  });

  if (category.includes("Recursion") || category.includes("Backtracking") || kind.includes("backtracking")) return set({
    input: "choices",
    state: "path",
    statePurpose: "The partial decision path being built by the recursive search.",
    answer: "solutions",
    answerPurpose: "All valid paths or the final recursive value requested by the problem.",
    condition: "base case or invalid choice",
    conditionPurpose: "Stop when the path is complete, invalid, or ready to be recorded.",
    concept: `${title} explores a decision tree by choosing, recursing, and undoing the choice before trying the next option.`,
    logicSummary: "Handle the base case, loop through valid choices, add one choice, recurse, then remove that choice.",
    transitionSummary: "The transition is choose -> explore -> unchoose, which keeps sibling branches isolated.",
    codeInsight: "The backtrack step is what keeps the state correct: every push must have a matching pop.",
    complexity: complexityForKind(kind),
  });

  if (category.includes("String")) return set({
    input: "text and pattern",
    state: "indices and prefix/hash state",
    answer: "matches or string result",
    condition: "characters remain",
    concept: `${title} turns character comparisons into reusable state so the string is not rechecked from scratch.`,
    logicSummary: "Precompute the helper state, scan the text, update indices or hashes, and record each valid match.",
    transitionSummary: "Each transition consumes one character and updates the prefix, hash, trie, or palindrome state.",
    codeInsight: "String algorithms are safest when index movement is explicit and every mismatch has a defined fallback.",
    complexity: complexityForKind(kind),
  });

  return base;
}

function complexityForKind(kind) {
  if (["binary-search", "lower-bound", "upper-bound", "ternary-search", "rotated-search"].includes(kind)) return { time: "O(log n) on sorted or searchable ranges.", space: "O(1) auxiliary space." };
  if (kind === "linear-search") return { time: "O(n) in the worst case.", space: "O(1) auxiliary space." };
  if (["merge-sort"].includes(kind)) return { time: "O(n log n).", space: "O(n) for merge buffers." };
  if (["quick-sort"].includes(kind)) return { time: "Average O(n log n), worst-case O(n^2).", space: "O(log n) average recursion stack." };
  if (["bubble-sort", "insertion-sort", "selection-sort"].includes(kind)) return { time: "O(n^2) in the worst case.", space: "O(1) auxiliary space." };
  if (["counting-sort", "radix-sort", "bucket-sort"].includes(kind)) return { time: "O(n + k) for the chosen key/range model.", space: "O(n + k) for buckets or counts." };
  if (["bfs", "dfs", "graph-generic", "cycle-detection", "topological-sort"].includes(kind)) return { time: "O(V + E).", space: "O(V) auxiliary graph state." };
  if (["dijkstra", "prim"].includes(kind)) return { time: "O((V + E) log V) with a heap.", space: "O(V + E)." };
  if (kind === "floyd-warshall") return { time: "O(V^3).", space: "O(V^2)." };
  if (kind === "bellman-ford") return { time: "O(VE).", space: "O(V)." };
  if (kind === "kruskal") return { time: "O(E log E).", space: "O(V) for disjoint sets." };
  if (kind.includes("dp") || ["knapsack", "coin-change", "edit-distance", "lcs", "lis", "matrix-chain"].includes(kind)) return { time: "O(number of states x transition cost).", space: "O(number of stored states)." };
  if (kind.includes("traversal") || kind.includes("tree") || kind === "lca") return { time: "O(n) over tree nodes.", space: "O(h) recursion or traversal state." };
  if (kind.includes("heap")) return { time: "O(n log n) or O(log n) per heap update depending on the operation.", space: "O(n) when a separate heap is maintained." };
  if (kind.includes("stack") || kind.includes("queue") || kind.includes("array")) return { time: "O(n) for one pass over the input.", space: "O(n) in the worst case for auxiliary state." };
  if (kind.includes("string") || ["kmp", "rabin-karp", "z-algorithm", "palindrome"].includes(kind)) return { time: "O(n + m) for the usual text/pattern model.", space: "O(n + m) for preprocessing or result state." };
  return { time: "O(n) for the educational reference implementation.", space: "O(n) for tracked state when needed." };
}

function createPageData(algorithm, relDir) {
  const narrative = createNarrative(algorithm);
  return {
    id: algorithm.id,
    title: algorithm.title,
    category: algorithm.category,
    route: algorithm.route,
    phase: algorithm.phase,
    priority: algorithm.priority,
    visualizerType: algorithm.visualizerType,
    icon: iconForAlgorithm(algorithm),
    codePath: `./src/algorithms/${relDir}/code/solution.js`,
    codeFilename: "solution.js",
    meaning: `${algorithm.title} is a ${algorithm.category} technique focused on ${narrative.answer}.`,
    problem: narrative.concept,
    concept: narrative.concept,
    logicSummary: narrative.logicSummary,
    transitionSummary: narrative.transitionSummary,
    codeInsight: narrative.codeInsight,
    realLifeExample: `${algorithm.title} appears when the input is ${narrative.input} and the required result is ${narrative.answer}.`,
    whenToUse: narrative.whenToUse,
    memoryTrick: narrative.memoryTrick,
    visualizerCaption: `A ${algorithm.visualizerType.replaceAll("-", " ")} walkthrough showing ${possessive(algorithm.title)} input, state, transition, and answer.`,
    logicSteps: narrative.steps.map(([title, text]) => ({ title, text })),
    variables: [
      {
        name: narrative.input,
        purpose: narrative.inputPurpose,
      },
      {
        name: narrative.state,
        purpose: narrative.statePurpose,
      },
      {
        name: narrative.answer,
        purpose: narrative.answerPurpose,
      },
      {
        name: narrative.condition,
        purpose: narrative.conditionPurpose,
      },
    ],
    dryRun: narrative.dryRun.map(([label, title, note, activeLine]) => ({ label, title, note, activeLine })),
    complexity: narrative.complexity,
    quiz: {
      question: `Which state choice keeps ${algorithm.title} correct?`,
      options: [
        {
          key: "A",
          text: `Track ${narrative.state} and update it only through ${possessive(algorithm.title)} transition.`,
          correct: true,
        },
        {
          key: "B",
          text: "Reuse a different algorithm's state names even when the transition is different.",
          correct: false,
        },
        {
          key: "C",
          text: "Return before checking the algorithm-specific stop condition.",
          correct: false,
        },
      ],
      correctText: `Correct. ${algorithm.title} stays understandable when its own state and transition drive the answer.`,
      incorrectText: `Not quite. ${algorithm.title} needs its own input, state, answer, and condition rather than another algorithm's page structure.`,
    },
  };
}

function dataModule(algorithmPage) {
  return `// ${marker}\n// Edit this file to customize this algorithm page without touching app.js.\n\nexport const algorithmPage = ${JSON.stringify(algorithmPage, null, 2)};\n`;
}

function solutionModule(algorithm) {
  const functionName = toFunctionName(algorithm.id || algorithm.title);
  const kind = classifyAlgorithm(algorithm);
  const title = algorithm.title;
  const header = `// AUTO-GENERATED ALGORITHM SOLUTION\n// ${title}\n// Route: ${algorithm.route}\n// This educational implementation is intentionally small and side-effect-light.\n\n`;
  return `${header}${implementationBody(kind, functionName, title)}\n`;
}

function implementationBody(kind, functionName, title) {
  if (kind === "bfs") return `export function ${functionName}(graph, start) {
  const visited = new Set([start]);
  const queue = [start];
  const order = [];

  while (queue.length) {
    const node = queue.shift();
    order.push(node);
    for (const next of graph[node] || []) {
      if (visited.has(next)) continue;
      visited.add(next);
      queue.push(next);
    }
  }

  return order;
}`;

  if (kind === "dfs") return `export function ${functionName}(graph, start) {
  const visited = new Set();
  const order = [];

  function visit(node) {
    if (visited.has(node)) return;
    visited.add(node);
    order.push(node);
    for (const next of graph[node] || []) visit(next);
  }

  visit(start);
  return order;
}`;

  if (kind === "binary-search" || kind === "cpp-binary-search") return `export function ${functionName}(array, target) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (array[mid] === target) return mid;
    if (array[mid] < target) low = mid + 1;
    else high = mid - 1;
  }

  return -1;
}`;

  if (kind === "lower-bound" || kind === "cpp-lower-bound") return `export function ${functionName}(array, target) {
  let low = 0;
  let high = array.length;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (array[mid] < target) low = mid + 1;
    else high = mid;
  }

  return low;
}`;

  if (kind === "upper-bound" || kind === "cpp-upper-bound") return `export function ${functionName}(array, target) {
  let low = 0;
  let high = array.length;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (array[mid] <= target) low = mid + 1;
    else high = mid;
  }

  return low;
}`;

  if (kind.includes("search")) return `export function ${functionName}(array, target) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === target) return index;
  }
  return -1;
}`;

  if (kind === "quick-sort") return `export function ${functionName}(array) {
  if (array.length <= 1) return [...array];
  const [pivot, ...rest] = array;
  const left = rest.filter((value) => value < pivot);
  const right = rest.filter((value) => value >= pivot);
  return [...${functionName}(left), pivot, ...${functionName}(right)];
}`;

  if (kind === "merge-sort") return `export function ${functionName}(array) {
  if (array.length <= 1) return [...array];
  const mid = Math.floor(array.length / 2);
  return merge(${functionName}(array.slice(0, mid)), ${functionName}(array.slice(mid)));
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    result.push(left[i] <= right[j] ? left[i++] : right[j++]);
  }
  return result.concat(left.slice(i), right.slice(j));
}`;

  if (kind.includes("sort") || kind === "cpp-sort") return `export function ${functionName}(array) {
  const values = [...array];
  for (let pass = 0; pass < values.length; pass += 1) {
    for (let index = 1; index < values.length - pass; index += 1) {
      if (values[index - 1] > values[index]) {
        [values[index - 1], values[index]] = [values[index], values[index - 1]];
      }
    }
  }
  return values;
}`;

  if (kind === "dijkstra") return `export function ${functionName}(graph, start) {
  const distances = Object.fromEntries(Object.keys(graph).map((node) => [node, Infinity]));
  const visited = new Set();
  distances[start] = 0;

  while (visited.size < Object.keys(graph).length) {
    const node = Object.keys(distances)
      .filter((candidate) => !visited.has(candidate))
      .sort((a, b) => distances[a] - distances[b])[0];
    if (node === undefined || distances[node] === Infinity) break;
    visited.add(node);
    for (const [next, weight] of graph[node] || []) {
      distances[next] = Math.min(distances[next] ?? Infinity, distances[node] + weight);
    }
  }

  return distances;
}`;

  if (kind === "topological-sort") return `export function ${functionName}(graph) {
  const indegree = Object.fromEntries(Object.keys(graph).map((node) => [node, 0]));
  for (const edges of Object.values(graph)) {
    for (const next of edges) indegree[next] = (indegree[next] ?? 0) + 1;
  }
  const queue = Object.keys(indegree).filter((node) => indegree[node] === 0);
  const order = [];
  while (queue.length) {
    const node = queue.shift();
    order.push(node);
    for (const next of graph[node] || []) {
      indegree[next] -= 1;
      if (indegree[next] === 0) queue.push(next);
    }
  }
  return order;
}`;

  if (kind === "union-find" || kind === "kruskal") return `export function ${functionName}(size, edges = []) {
  const parent = Array.from({ length: size }, (_, index) => index);
  const find = (node) => parent[node] === node ? node : (parent[node] = find(parent[node]));
  const unite = (a, b) => {
    const rootA = find(a);
    const rootB = find(b);
    if (rootA === rootB) return false;
    parent[rootB] = rootA;
    return true;
  };
  return edges.filter(([a, b]) => unite(a, b));
}`;

  if (kind.includes("graph")) return `export function ${functionName}(graph) {
  const visited = new Set();
  const components = [];
  for (const start of Object.keys(graph)) {
    if (visited.has(start)) continue;
    const queue = [start];
    const component = [];
    visited.add(start);
    while (queue.length) {
      const node = queue.shift();
      component.push(node);
      for (const next of graph[node] || []) {
        if (!visited.has(next)) {
          visited.add(next);
          queue.push(next);
        }
      }
    }
    components.push(component);
  }
  return components;
}`;

  if (kind.includes("traversal") || kind.includes("tree") || kind === "lca") return `export function ${functionName}(root) {
  const result = [];
  function visit(node) {
    if (!node) return 0;
    result.push(node.value);
    const leftHeight = visit(node.left);
    const rightHeight = visit(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
  const height = visit(root);
  return { result, height };
}`;

  if (kind.includes("dp") || ["knapsack", "coin-change", "edit-distance", "lcs", "lis", "fibonacci", "matrix-chain"].includes(kind)) return `export function ${functionName}(values) {
  const items = Array.isArray(values) ? values : [];
  const dp = Array(items.length + 1).fill(0);
  for (let index = 1; index <= items.length; index += 1) {
    dp[index] = Math.max(dp[index - 1], Number(items[index - 1]) || 0);
  }
  return dp[items.length];
}`;

  if (kind.includes("backtracking") || ["subsets", "permutations", "combination-sum", "n-queens", "sudoku", "maze", "word-search", "generate-parentheses"].includes(kind)) return `export function ${functionName}(choices) {
  const values = Array.isArray(choices) ? choices : [];
  const result = [];
  const path = [];

  function backtrack(index) {
    if (index === values.length) {
      result.push([...path]);
      return;
    }
    backtrack(index + 1);
    path.push(values[index]);
    backtrack(index + 1);
    path.pop();
  }

  backtrack(0);
  return result;
}`;

  if (kind.includes("string") || ["kmp", "rabin-karp", "z-algorithm", "anagram", "palindrome"].includes(kind)) return `export function ${functionName}(text, pattern = "") {
  const matches = [];
  if (!pattern) return matches;
  for (let index = 0; index <= text.length - pattern.length; index += 1) {
    if (text.slice(index, index + pattern.length) === pattern) matches.push(index);
  }
  return matches;
}`;

  if (kind.includes("stack") || ["valid-parentheses", "next-greater", "previous-greater", "min-stack", "histogram", "stock-span"].includes(kind)) return `export function ${functionName}(values) {
  const stack = [];
  const result = [];
  for (const value of values) {
    while (stack.length && stack[stack.length - 1] < value) stack.pop();
    result.push(stack.length ? stack[stack.length - 1] : null);
    stack.push(value);
  }
  return result;
}`;

  if (kind.includes("queue") || ["deque", "circular-queue", "lru-cache", "sliding-window-maximum"].includes(kind)) return `export function ${functionName}(values, windowSize = 3) {
  const queue = [];
  const result = [];
  for (const value of values) {
    queue.push(value);
    if (queue.length > windowSize) queue.shift();
    result.push([...queue]);
  }
  return result;
}`;

  if (kind.includes("heap") || ["heapify", "min-heap", "max-heap", "kth-largest", "top-k", "merge-k"].includes(kind)) return `export function ${functionName}(values) {
  const heap = [...values];
  heap.sort((a, b) => a - b);
  return heap;
}`;

  if (kind.includes("matrix") || ["flood-fill", "island-counting", "spiral-matrix", "rotate-matrix", "matrix-traversal"].includes(kind)) return `export function ${functionName}(matrix) {
  const rows = matrix.length;
  const cols = matrix[0]?.length || 0;
  const order = [];
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) order.push(matrix[row][col]);
  }
  return order;
}`;

  if (kind.includes("number") || ["gcd", "lcm", "prime", "sieve", "power", "single-number", "count-set-bits", "bitmasking", "xor"].includes(kind)) return `export function ${functionName}(value, other = 1) {
  let a = Math.abs(Number(value) || 0);
  let b = Math.abs(Number(other) || 0);
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}`;

  if (kind === "cpp-reverse") return `export function ${functionName}(array) {
  return [...array].reverse();
}`;

  if (kind === "cpp-accumulate") return `export function ${functionName}(array, initial = 0) {
  return array.reduce((sum, value) => sum + value, initial);
}`;

  return `export function ${functionName}(input) {
  const state = Array.isArray(input) ? [...input] : input;
  return { input, state, answer: state };
}`;
}

function pageModule() {
  return `// ${marker}\nimport { createGenericAlgorithmPage } from "../../_shared/page-factory.js";\nimport { algorithmPage } from "./data.js";\n\nexport const stylePath = \`./src/algorithms/\${algorithmPage.categorySlug}/\${algorithmPage.algorithmSlug}/styles.css\`;\n\nexport function createAlgorithmPage(deps) {\n  return createGenericAlgorithmPage(deps, algorithmPage);\n}\n`;
}

function stylesModule() {
  return `/* ${marker} */\n@import "../../_shared/page.css";\n`;
}

const pages = findMetaFiles(algorithmsRoot)
  .map((metaPath) => {
    const algorithm = JSON.parse(readFileSync(metaPath, "utf8"));
    const dir = path.dirname(metaPath);
    const relDir = toPosix(path.relative(algorithmsRoot, dir));
    const [categorySlug, algorithmSlug] = relDir.split("/");
    const algorithmPage = {
      ...createPageData(algorithm, relDir),
      categorySlug,
      algorithmSlug,
    };

	writeGenerated(path.join(dir, "data.js"), dataModule(algorithmPage));
	writeGenerated(path.join(dir, "page.js"), pageModule());
	writeGenerated(path.join(dir, "styles.css"), stylesModule());
	writeGeneratedCode(path.join(dir, "code", "solution.js"), solutionModule(algorithm));

	return {
      id: algorithm.id,
      importPath: `../algorithms/${relDir}/page.js`,
    };
  })
  .sort((a, b) => a.id.localeCompare(b.id));

const manifest = [
  `// ${marker}`,
  "export const pageLoaders = {",
  ...pages.map((page) => `  ${JSON.stringify(page.id)}: () => import(${JSON.stringify(page.importPath)}),`),
  "};",
  "",
].join("\n");

writeFileSync(manifestPath, manifest, "utf8");
console.log(`Generated ${pages.length} algorithm page modules.`);
