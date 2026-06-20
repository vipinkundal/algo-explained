import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourceRoot = process.argv[2] || "C:/Users/DESKTOP/Downloads/Data-Structures-master/Data-Structures-master";
const algorithmsRoot = path.join(root, "src", "algorithms");
const targetRoot = path.join(algorithmsRoot, "data-structures");
const indexPath = path.join(root, "src", "content", "algorithm_pages_index.json");
const manifestPath = path.join(root, "src", "content", "algorithm_page_modules.js");
const marker = "AUTO-GENERATED ALGORITHM PAGE";

const folderConfig = {
  "01_Essential_c_and_cpp": { group: "C/C++ Essentials", prefix: "C/C++", icon: "data_object", visualizerType: "cpp-memory-model" },
  "03_recursion": { group: "Recursion", prefix: "Recursion", icon: "account_tree", visualizerType: "call-stack" },
  "04_Array_representation": { group: "Arrays / Array ADT", prefix: "Array", icon: "view_week", visualizerType: "array-memory" },
  "05_Array_ADT": { group: "Arrays / Array ADT", prefix: "Array ADT", icon: "view_week", visualizerType: "array-adt" },
  "06_string": { group: "Strings", prefix: "String", icon: "abc", visualizerType: "string-scan" },
  "07_Matrix": { group: "Matrix / Sparse Matrix / Polynomial", prefix: "Matrix", icon: "grid_on", visualizerType: "matrix-layout" },
  "08_sparse_matrix": { group: "Matrix / Sparse Matrix / Polynomial", prefix: "Sparse Matrix", icon: "grid_on", visualizerType: "sparse-matrix" },
  "09_Linked_list": { group: "Linked List", prefix: "Linked List", icon: "link", visualizerType: "linked-list" },
  "10_Sparse_matrix_and_polynimial_representation": { group: "Matrix / Sparse Matrix / Polynomial", prefix: "Sparse Matrix / Polynomial", icon: "functions", visualizerType: "sparse-polynomial" },
  "11_Stack": { group: "Stack", prefix: "Stack", icon: "layers", visualizerType: "stack-operations" },
  "12_Queue": { group: "Queue", prefix: "Queue", icon: "queue", visualizerType: "queue-operations" },
  "13_Trees": { group: "Trees / BST / AVL / Heap", prefix: "Binary Tree", icon: "account_tree", visualizerType: "tree-structure" },
  "14_BST": { group: "Trees / BST / AVL / Heap", prefix: "BST", icon: "account_tree", visualizerType: "bst-operations" },
  "15_AVL_Tree": { group: "Trees / BST / AVL / Heap", prefix: "AVL Tree", icon: "account_tree", visualizerType: "tree-rotation" },
  "17_Heap": { group: "Trees / BST / AVL / Heap", prefix: "Heap", icon: "priority_high", visualizerType: "heap-operations" },
};

const existingTitles = {
  "array-patterns": "Array Patterns",
  "recursion-basics": "Recursion Basics",
  "factorial-recursion": "Factorial Recursion",
  "fibonacci-recursion": "Fibonacci Recursion",
  "tower-of-hanoi": "Tower of Hanoi",
  "linear-search": "Linear Search",
  "binary-search": "Binary Search",
  "anagram-detection": "Anagram Detection",
  "matrix-traversal": "Matrix Traversal",
  "prefix-sum-matrix": "Prefix Sum Matrix",
  "stack-basics": "Stack Basics",
  "valid-parentheses": "Valid Parentheses",
  "min-stack": "Min Stack",
  "queue-basics": "Queue Basics",
  "circular-queue": "Circular Queue",
  "level-order-traversal": "Level Order Traversal",
  "preorder-traversal": "Preorder Traversal",
  "inorder-traversal": "Inorder Traversal",
  "postorder-traversal": "Postorder Traversal",
  "height-depth-of-tree": "Height / Depth of Tree",
  "bst-search": "BST Search",
  "bst-insert": "BST Insert",
  "bst-delete": "BST Delete",
  "avl-tree-basics": "AVL Tree Basics",
  "max-heap": "Max Heap",
  "min-heap": "Min Heap",
  "heapify": "Heapify",
};

const titleOverrides = {
  "05_Array_ADT/02_arrray_deletion.cpp": "Deletion in Array ADT",
  "05_Array_ADT/03_01_linear_search.cpp": "Linear Search in Array ADT",
  "05_Array_ADT/03_02_linerar_search.cpp": "Linear Search in Array ADT with Transposition",
  "05_Array_ADT/04_binary_search.cpp": "Binary Search in Array ADT",
  "05_Array_ADT/06_02_check_if_soted.cpp": "Check Sorted Array",
  "05_Array_ADT/10_01_finding_mising_element.cpp": "Find Missing Element in Array",
  "09_Linked_list/06_Inserting_in_Linked_list.cpp": "Linked List Insertion",
  "09_Linked_list/08_Deleting_in_linked_list.cpp": "Linked List Deletion",
  "09_Linked_list/15_circular_LinkedList.cpp": "Circular Linked List",
  "09_Linked_list/18_doubly_LL.cpp": "Doubly Linked List",
  "09_Linked_list/19_CDoubleLL.cpp": "Circular Doubly Linked List",
  "11_Stack/01_Stack_using_Arry.cpp": "Stack Using Array",
  "11_Stack/02_Stack_using_LL.cpp": "Stack Using Linked List",
  "11_Stack/03_parenthesis_is_balanced.cpp": "Balanced Parentheses with Stack",
  "11_Stack/04_parenthesis_is_balanced_extended.cpp": "Balanced Parentheses Extended",
  "11_Stack/06_infix_to_posstfix.cpp": "Infix to Postfix Conversion",
  "12_Queue/01_enqueue_and_dequeue.cpp": "Queue Enqueue and Dequeue",
  "12_Queue/02_circular_queue.cpp": "Circular Queue",
  "12_Queue/03_queue_using_ll.cpp": "Queue Using Linked List",
  "13_Trees/01_creating_binary_tree.cpp": "Binary Tree Creation",
  "13_Trees/02_Traversing.cpp": "Binary Tree Traversal",
  "13_Trees/03_LevelOrder.cpp": "Binary Tree Level Order Traversal",
  "13_Trees/04_Height_and_count.cpp": "Binary Tree Height and Node Count",
  "14_BST/01_bst.cpp": "BST Basics",
  "15_AVL_Tree/01_LL_Rotation.cpp": "AVL LL Rotation",
  "17_Heap/create_heap.cpp": "Heap Creation",
};

const slugOverrides = {
  "05_Array_ADT/02_arrray_deletion.cpp": "array-adt-deletion",
  "05_Array_ADT/03_01_linear_search.cpp": "array-adt-linear-search",
  "05_Array_ADT/03_02_linerar_search.cpp": "array-adt-linear-search-transposition",
  "05_Array_ADT/04_binary_search.cpp": "array-adt-binary-search",
  "09_Linked_list/06_Inserting_in_Linked_list.cpp": "linked-list-insertion",
  "11_Stack/01_Stack_using_Arry.cpp": "stack-using-array",
  "12_Queue/01_enqueue_and_dequeue.cpp": "queue-array-enqueue-dequeue",
  "12_Queue/02_circular_queue.cpp": "circular-queue",
  "12_Queue/03_queue_using_ll.cpp": "queue-using-linked-list",
  "13_Trees/01_creating_binary_tree.cpp": "binary-tree-creation",
  "13_Trees/02_Traversing.cpp": "binary-tree-traversal",
  "13_Trees/03_LevelOrder.cpp": "binary-tree-level-order",
  "14_BST/01_bst.cpp": "bst-basics",
  "15_AVL_Tree/01_LL_Rotation.cpp": "avl-ll-rotation",
  "17_Heap/create_heap.cpp": "heap-creation",
};

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/\+\+/g, " cpp ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function toFunctionName(value) {
  const words = slugify(value).split("-").filter(Boolean);
  const [first = "dataStructureDemo", ...rest] = words;
  return [first, ...rest.map((word) => word.charAt(0).toUpperCase() + word.slice(1))].join("");
}

function toTitle(value) {
  const acronyms = new Map([
    ["adt", "ADT"],
    ["avl", "AVL"],
    ["bst", "BST"],
    ["cpp", "C++"],
    ["ll", "Linked List"],
    ["cdoublell", "Circular Doubly Linked List"],
    ["ncr", "nCr"],
    ["toh", "Tower of Hanoi"],
    ["2d", "2D"],
  ]);

  return String(value)
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => acronyms.get(word.toLowerCase()) || word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function cleanBaseName(fileName) {
  return path.basename(fileName, path.extname(fileName))
    .replace(/^\d+(?:_\d+)?_?/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\bve\b/gi, "negative values")
    .replace(/\blinerar\b/gi, "linear")
    .replace(/\barrray\b/gi, "array")
    .replace(/\barry\b/gi, "array")
    .replace(/\bposstfix\b/gi, "postfix")
    .replace(/\bpermutattion\b/gi, "permutation")
    .replace(/\bsoted\b/gi, "sorted")
    .replace(/\bmising\b/gi, "missing")
    .replace(/\bpolynimial\b/gi, "polynomial")
    .replace(/\bmodeular\b/gi, "modular")
    .replace(/\bmonolythic\b/gi, "monolithic")
    .replace(/\blidt\b/gi, "list")
    .replace(/\bREmove\b/g, "remove")
    .trim();
}

function titleFor(folder, fileName) {
  const override = titleOverrides[`${folder}/${fileName}`];
  if (override) return override;

  const config = folderConfig[folder];
  const base = cleanBaseName(fileName);
  const title = toTitle(base || path.basename(fileName, path.extname(fileName)));
  const lowerTitle = title.toLowerCase();
  const lowerPrefix = config.prefix.toLowerCase().replace("c/c++", "c++");
  if (fileName.endsWith(".h")) return `${config.prefix} ${title}`;
  if (lowerTitle.includes(lowerPrefix) || lowerTitle.includes(config.group.toLowerCase().split(" / ")[0].toLowerCase())) return title;
  return `${config.prefix} ${title}`;
}

function sourceLanguage(fileName) {
  const ext = path.extname(fileName).toLowerCase();
  if (ext === ".c") return "c";
  if (ext === ".h") return "header";
  return "cpp";
}

function relatedAlgorithmIds(folder, title, fileName) {
  const text = `${folder} ${title} ${fileName}`.toLowerCase();
  const ids = new Set();
  if (text.includes("array")) ids.add("array-patterns");
  if (text.includes("recursion")) ids.add("recursion-basics");
  if (text.includes("factorial")) ids.add("factorial-recursion");
  if (text.includes("fibonacci")) ids.add("fibonacci-recursion");
  if (text.includes("hanoi") || text.includes("toh")) ids.add("tower-of-hanoi");
  if (text.includes("linear search")) ids.add("linear-search");
  if (text.includes("binary search")) ids.add("binary-search");
  if (text.includes("string") || text.includes("anagram")) ids.add("anagram-detection");
  if (text.includes("matrix")) ids.add("matrix-traversal");
  if (text.includes("stack")) ids.add("stack-basics");
  if (text.includes("parenthesis")) ids.add("valid-parentheses");
  if (text.includes("queue")) ids.add("queue-basics");
  if (text.includes("circular queue")) ids.add("circular-queue");
  if (text.includes("tree")) ids.add("level-order-traversal");
  if (text.includes("travers")) {
    ids.add("preorder-traversal");
    ids.add("inorder-traversal");
    ids.add("postorder-traversal");
  }
  if (text.includes("height")) ids.add("height-depth-of-tree");
  if (text.includes("bst")) {
    ids.add("bst-search");
    ids.add("bst-insert");
    ids.add("bst-delete");
  }
  if (text.includes("avl")) ids.add("avl-tree-basics");
  if (text.includes("heap")) {
    ids.add("heapify");
    ids.add("max-heap");
  }
  return [...ids].filter((id) => existingTitles[id]);
}

function relatedLinks(ids) {
  return ids.map((id) => ({ id, title: existingTitles[id], label: "Existing algorithm lesson" }));
}

function operationKind(folder, title, fileName) {
  const text = `${folder} ${title} ${fileName}`.toLowerCase();
  if (text.includes("queue")) return "queue";
  if (text.includes("stack")) return "stack";
  if (text.includes("linked")) return "linked-list";
  if (text.includes("bst")) return "bst";
  if (text.includes("avl")) return "avl";
  if (text.includes("heap")) return "heap";
  if (text.includes("tree")) return "tree";
  if (text.includes("matrix") || text.includes("polynomial")) return "matrix";
  if (text.includes("string") || text.includes("anagram") || text.includes("permutation")) return "string";
  if (text.includes("recursion") || text.includes("factorial") || text.includes("fibonacci") || text.includes("hanoi")) return "recursion";
  if (text.includes("array")) return "array";
  return "cpp";
}

function indefiniteArticle(value) {
  return /^[aeiou]/i.test(value) ? "An" : "A";
}

function titleSentence(title) {
  return `${title} shows how data is organized, changed, and inspected through a small browser demo with the original C/C++ reference available beside it.`;
}

function focusNoun(kind) {
  const labels = {
    queue: "queue",
    stack: "stack",
    "linked-list": "linked-list",
    bst: "search-tree",
    avl: "balanced-tree",
    heap: "heap",
    tree: "tree",
    matrix: "matrix",
    string: "string",
    recursion: "recursive call",
    array: "array",
    cpp: "C/C++ storage",
  };
  return labels[kind] || "structure";
}

function verbForKind(kind) {
  const verbs = {
    queue: "enqueue, dequeue, or inspect the next item",
    stack: "push, pop, or inspect the top item",
    "linked-list": "connect, insert, remove, or scan nodes",
    bst: "compare keys and choose a branch",
    avl: "rebalance the tree after a height change",
    heap: "promote or demote values to restore priority order",
    tree: "visit nodes in the selected traversal order",
    matrix: "map row and column positions to stored values",
    string: "scan characters and update text state",
    recursion: "enter a call, reach a base case, then unwind",
    array: "move, search, insert, remove, or summarize slots",
    cpp: "trace declarations, addresses, and values",
  };
  return verbs[kind] || "run the next structure operation";
}

function stateFields(kind, title) {
  const commonPrefix = title.split(/\s+/).slice(0, 2).join(" ").toLowerCase();
  const fields = {
    queue: [
      ["front cursor", "Marks the next value that would leave the queue."],
      ["rear cursor", "Marks where the next incoming value is placed."],
      ["waiting line", `The ordered queue contents while ${title} runs.`],
      ["served item", "The value removed or inspected by the current queue operation."],
    ],
    stack: [
      ["top marker", "Points at the most recent item in the stack."],
      ["stack slots", `The ordered storage used by ${title}.`],
      ["popped item", "The value removed when the top marker moves down."],
      ["balance flag", "Shows whether the stack invariant still holds."],
    ],
    "linked-list": [
      ["head link", "References the first node in the chain."],
      ["walk pointer", "Moves through links one node at a time."],
      ["new node", `Represents the node created or examined in ${title}.`],
      ["chain view", "Shows the visible node order after pointer updates."],
    ],
    bst: [
      ["root key", "Starts every comparison path in the search tree."],
      ["branch choice", "Records whether the next move goes left or right."],
      ["matched node", "Holds the node found by the comparison path."],
      ["ordered keys", "Shows the tree values while preserving sorted order."],
    ],
    avl: [
      ["pivot node", "The node around which the rotation happens."],
      ["height gap", "Tracks when one side is too tall."],
      ["rotated child", "The child that moves during rebalancing."],
      ["balanced view", "Shows the tree after the rotation restores order."],
    ],
    heap: [
      ["priority root", "Stores the highest-priority value in the heap."],
      ["candidate child", "The child compared during heap adjustment."],
      ["swap path", "Records the movement needed to restore heap order."],
      ["heap view", "Shows the array-backed tree after the operation."],
    ],
    tree: [
      ["entry node", "The node where the traversal or creation step begins."],
      ["visit queue", "Holds nodes waiting to be processed."],
      ["current node", `The node being handled by ${title}.`],
      ["visit order", "The visible order produced by the traversal."],
    ],
    matrix: [
      ["row marker", "Selects the row being inspected."],
      ["column marker", "Selects the column being inspected."],
      ["stored cell", `The value addressed by ${title}.`],
      ["matrix view", "Shows the compact or expanded grid state."],
    ],
    string: [
      ["read index", "Selects the current character."],
      ["write index", "Marks where the next transformed character lands."],
      ["character bag", `Tracks characters considered by ${title}.`],
      ["text result", "Shows the string after the scan or transformation."],
    ],
    recursion: [
      ["call input", "The value passed into the current recursive call."],
      ["base guard", "Stops the recursion when the smallest case is reached."],
      ["return trail", "Records values while calls unwind."],
      ["final value", `The answer produced by ${title}.`],
    ],
    array: [
      ["slot index", "Selects the current array position."],
      ["active value", "The value currently being read or moved."],
      ["write slot", "Marks where an updated value is stored."],
      ["array view", `Shows the slots after ${title} applies its operation.`],
    ],
    cpp: [
      ["declared name", "The identifier introduced by the C/C++ example."],
      ["stored value", "The value currently associated with that identifier."],
      ["address view", "Shows where pointer-style examples refer in memory."],
      ["printed output", `The observable result produced by ${title}.`],
    ],
  };
  return fields[kind] || [
    [`${commonPrefix} input`, "The starting value for the demonstration."],
    [`${commonPrefix} workspace`, "The temporary state used during the operation."],
    [`${commonPrefix} transition`, "The next change applied to the structure."],
    [`${commonPrefix} answer`, "The visible result after the operation finishes."],
  ];
}

function jsDemo(title, folder, fileName, functionName) {
  const kind = operationKind(folder, title, fileName);
  const header = `// Runnable JavaScript companion for ${title}\n// Original source: ${folder}/${fileName}\n`;

  if (kind === "queue") return `${header}export function ${functionName}() {
  const queue = [];
  const output = [];
  for (const value of [1, 2, 3, 4]) queue.push(value);
  output.push(queue.shift());
  return { structure: "queue", invariant: "first in, first out", state: queue, dequeued: output };
}`;

  if (kind === "stack") return `${header}export function ${functionName}() {
  const stack = [];
  const output = [];
  for (const value of [10, 20, 30]) stack.push(value);
  output.push(stack.pop());
  return { structure: "stack", invariant: "last in, first out", state: stack, popped: output };
}`;

  if (kind === "linked-list") return `${header}export function ${functionName}() {
  const nodes = [10, 20, 30].map((value, index, values) => ({ value, next: index + 1 < values.length ? values[index + 1] : null }));
  nodes.splice(1, 0, { value: 15, next: 20 });
  return { structure: "linked list", operation: "insert at position 1", values: nodes.map((node) => node.value) };
}`;

  if (kind === "bst") return `${header}export function ${functionName}() {
  const values = [40, 20, 60, 10, 30, 50, 70];
  const search = 50;
  const path = [40, 60, 50];
  return { structure: "binary search tree", values, search, path, found: true };
}`;

  if (kind === "avl") return `${header}export function ${functionName}() {
  return {
    structure: "AVL tree",
    imbalance: "left-left",
    rotation: "right rotation",
    before: [30, 20, 10],
    after: [20, 10, 30],
  };
}`;

  if (kind === "heap") return `${header}export function ${functionName}() {
  const values = [10, 20, 15, 30, 40];
  const heap = [...values].sort((a, b) => b - a);
  return { structure: "max heap", inserted: values, heap };
}`;

  if (kind === "tree") return `${header}export function ${functionName}() {
  const tree = { value: 1, left: { value: 2 }, right: { value: 3 } };
  return { structure: "binary tree", traversal: "level order", result: [tree.value, tree.left.value, tree.right.value] };
}`;

  if (kind === "matrix") return `${header}export function ${functionName}() {
  const matrix = [[1, 0, 0], [0, 2, 0], [0, 0, 3]];
  const nonZero = matrix.flatMap((row, r) => row.map((value, c) => ({ r, c, value }))).filter((cell) => cell.value !== 0);
  return { structure: "matrix", representation: "non-zero entries", nonZero };
}`;

  if (kind === "string") return `${header}export function ${functionName}() {
  const text = "decimal";
  const reversed = [...text].reverse().join("");
  return { structure: "string", input: text, reversed, length: text.length };
}`;

  if (kind === "recursion") return `${header}export function ${functionName}(n = 5) {
  const calls = [];
  function factorial(value) {
    calls.push(value);
    return value <= 1 ? 1 : value * factorial(value - 1);
  }
  return { pattern: "recursion", calls, result: factorial(n) };
}`;

  if (kind === "array") return `${header}export function ${functionName}() {
  const values = [3, 1, 4, 1, 5];
  const sum = values.reduce((total, value) => total + value, 0);
  return { structure: "array", values, length: values.length, max: Math.max(...values), sum };
}`;

  return `${header}export function ${functionName}() {
  return {
    topic: ${JSON.stringify(title)},
    idea: "This runnable JS companion mirrors the state-first C/C++ lesson in browser-safe JavaScript.",
    state: ["input", "working memory", "result"],
  };
}`;
}

function findActiveLine(source) {
  const lines = source.split(/\r?\n/);
  const index = lines.findIndex((line) => /\b(class|struct|void|int|char|float|double)\b/.test(line) && !line.trim().startsWith("#"));
  return index >= 0 ? index + 1 : 1;
}

function originalInsight(source, title) {
  if (/\bstruct\s+Node\b/.test(source)) return "The C/C++ Node struct is the memory layout: data stores the value and next/child pointers connect the structure.";
  if (/\bclass\b/.test(source)) return "The C++ class groups data members with operations, so the structure controls how outside code can mutate state.";
  if (/\bnew\b|\bmalloc\b/.test(source)) return "Dynamic allocation creates storage at runtime; every pointer assignment changes how nodes or arrays are connected.";
  if (/\bfor\s*\(|\bwhile\s*\(/.test(source)) return "The loop is the transition: it repeatedly visits elements or nodes and updates the structure state.";
  return `The original ${title} source shows the C/C++ memory model and operation order used by this lesson.`;
}

function pageData(record) {
  const kind = operationKind(record.folder, record.title, record.sourceFile);
  const operation = focusNoun(kind);
  const actionText = verbForKind(kind);
  const fields = stateFields(kind, record.title);
  const relatedIds = relatedAlgorithmIds(record.folder, record.title, record.sourceFile);
  const activeOriginalLine = findActiveLine(record.source);
  return {
    id: record.id,
    title: record.title,
    category: "Data Structures",
    track: "Data Structures",
    topicGroup: record.group,
    sourceFolder: record.folder,
    sourceFile: record.sourceFile,
    sourceLanguage: sourceLanguage(record.sourceFile),
    route: `/algorithms/data-structures/${record.slug}`,
    phase: 1,
    priority: "medium",
    visualizerType: record.visualizerType,
    icon: record.icon,
    codePath: `./src/algorithms/data-structures/${record.slug}/code/solution.js`,
    codeFilename: "solution.js",
    originalCodePath: `./src/algorithms/data-structures/${record.slug}/code/original${record.ext}`,
    originalCodeFilename: record.sourceFile,
    originalActiveLine: activeOriginalLine,
    meaning: titleSentence(record.title),
    problem: `${record.title} explains the ${operation} state model and how one focused change updates it.`,
    concept: `Data structures are easier to learn when each value has a clear place and every change preserves a rule.`,
    logicSummary: `Track the active state, ${actionText}, and inspect the updated view.`,
    transitionSummary: `Move one step forward by changing only the slots, links, cursors, or nodes required by this operation.`,
    codeInsight: "Use the Runnable JS tab to edit inputs and see browser-safe output. Use the Original C/C++ tab to study the source implementation.",
    originalCodeInsight: originalInsight(record.source, record.title),
    realLifeExample: `${record.title} is useful when you need to understand the mechanics behind library-level data structures.`,
    whenToUse: `Use this page when learning ${record.group} behavior through state changes instead of memorized code.`,
    memoryTrick: "Name the moving part first, then ask which invariant must still be true.",
    visualizerCaption: `${indefiniteArticle(record.visualizerType)} ${record.visualizerType.replaceAll("-", " ")} walkthrough for ${record.title}.`,
    logicSteps: [
      { title: "Map the state", text: `Identify the values ${record.title} needs before any operation starts.` },
      { title: "Set the rule", text: `Name the ${operation} invariant that should remain true after the step.` },
      { title: "Apply one change", text: `Run the next action: ${actionText}.` },
      { title: "Read the view", text: "Compare the before and after state to confirm the transition." },
    ],
    variables: fields.map(([name, purpose]) => ({ name, purpose })),
    dryRun: [
      { label: "State map", title: "Prepare the working view", note: `Start with the values that ${record.title} needs to inspect or change.`, activeLine: 1, codeInsight: "The JS companion builds a compact state you can edit safely in the browser.", originalCodeInsight: originalInsight(record.source, record.title) },
      { label: "Cursor move", title: "Choose the active part", note: `Focus on the ${fields[0][0]} before changing anything else.`, activeLine: 4, codeInsight: "Keeping the active part explicit makes the output easier to debug.", originalCodeInsight: "Initialization lines define the valid memory shape before mutation begins." },
      { label: "State change", title: "Apply the rule", note: `Perform one ${operation} update and keep the invariant intact.`, activeLine: 7, codeInsight: "This line group performs the browser-safe version of the same data-structure transition.", originalCodeInsight: "The important lines update the pointer, index, child link, cursor, or stored value." },
      { label: "Visible result", title: "Inspect the answer", note: `Read the ${fields[3][0]} after the update.`, activeLine: 10, codeInsight: "The return object exposes the updated state so edits have immediate feedback.", originalCodeInsight: "Display, return, or cout lines reveal the observable result." },
    ],
    complexity: { time: "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).", space: "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item." },
    quiz: {
      question: `What should you identify first when studying ${record.title}?`,
      options: [
        { key: "A", text: "The memory/state representation and invariant.", correct: true },
        { key: "B", text: "Only the final cout output.", correct: false },
        { key: "C", text: "A different algorithm with the same name.", correct: false },
      ],
      correctKey: "A",
      correctText: "Correct. Data-structure code is easiest to understand when the state representation is clear first.",
      incorrectText: "Not quite. Start with the structure state, then follow the operation that mutates or reads it.",
    },
    relatedAlgorithmIds: relatedIds,
    relatedLinks: relatedLinks(relatedIds),
    runnerInput: [],
    categorySlug: "data-structures",
    algorithmSlug: record.slug,
  };
}

function pageModule() {
  return `// ${marker}\nimport { createGenericAlgorithmPage } from "../../_shared/page-factory.js";\nimport { algorithmPage } from "./data.js";\n\nexport const stylePath = \`./src/algorithms/\${algorithmPage.categorySlug}/\${algorithmPage.algorithmSlug}/styles.css\`;\n\nexport function createAlgorithmPage(deps) {\n  return createGenericAlgorithmPage(deps, algorithmPage);\n}\n`;
}

function stylesModule() {
  return `/* ${marker} */\n@import "../../_shared/page.css";\n`;
}

function dataModule(data) {
  return `// ${marker}\n// Edit this file to customize this data-structure page without touching app.js.\n\nexport const algorithmPage = ${JSON.stringify(data, null, 2)};\n`;
}

function metaModule(data) {
  const { id, title, route, visualizerType, priority, category, phase, icon, track, topicGroup } = data;
  return JSON.stringify({ phase, id, title, route, visualizerType, priority, category, icon, track, topicGroup }, null, 2) + "\n";
}

function collectSourceRecords() {
  if (!existsSync(sourceRoot)) throw new Error(`Missing source root: ${sourceRoot}`);
  const records = [];
  const seen = new Set();

  for (const folder of Object.keys(folderConfig)) {
    const dir = path.join(sourceRoot, folder);
    if (!existsSync(dir)) continue;
    const config = folderConfig[folder];
    const files = readdirSync(dir, { withFileTypes: true })
      .filter((entry) => entry.isFile() && [".c", ".cpp", ".h"].includes(path.extname(entry.name).toLowerCase()))
      .map((entry) => entry.name)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

    for (const sourceFile of files) {
      const ext = path.extname(sourceFile).toLowerCase();
      const title = titleFor(folder, sourceFile);
      const sourceKey = `${folder}/${sourceFile}`;
      const baseSlug = slugOverrides[sourceKey] || slugify(`${folder.replace(/^\d+_?/, "")}-${cleanBaseName(sourceFile) || sourceFile}`);
      let slug = baseSlug;
      let suffix = 2;
      while (seen.has(slug)) slug = `${baseSlug}-${suffix++}`;
      seen.add(slug);
      const id = `ds-${slug}`;
      const source = readFileSync(path.join(dir, sourceFile), "utf8");
      records.push({
        id,
        slug,
        title,
        folder,
        sourceFile,
        source,
        ext,
        group: config.group,
        icon: config.icon,
        visualizerType: config.visualizerType,
      });
    }
  }

  return records;
}

function writePage(record) {
  const dir = path.join(targetRoot, record.slug);
  const codeDir = path.join(dir, "code");
  mkdirSync(codeDir, { recursive: true });
  const data = pageData(record);
  const functionName = toFunctionName(record.id.replace(/^ds-/, ""));
  writeFileSync(path.join(dir, "meta.json"), metaModule(data), "utf8");
  writeFileSync(path.join(dir, "data.js"), dataModule(data), "utf8");
  writeFileSync(path.join(dir, "page.js"), pageModule(), "utf8");
  writeFileSync(path.join(dir, "styles.css"), stylesModule(), "utf8");
  writeFileSync(path.join(codeDir, `original${record.ext}`), record.source, "utf8");
  writeFileSync(path.join(codeDir, "solution.js"), jsDemo(record.title, record.folder, record.sourceFile, functionName), "utf8");
  return data;
}

function resetGeneratedDataStructures() {
  const expectedTarget = path.join(algorithmsRoot, "data-structures");
  if (path.resolve(targetRoot) !== path.resolve(expectedTarget)) {
    throw new Error(`Refusing to reset unexpected target directory: ${targetRoot}`);
  }

  if (existsSync(targetRoot)) {
    rmSync(targetRoot, { recursive: true, force: true });
  }
}

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

function regenerateManifest() {
  const pages = findMetaFiles(algorithmsRoot)
    .map((metaPath) => {
      const algorithm = JSON.parse(readFileSync(metaPath, "utf8"));
      const relDir = toPosix(path.relative(algorithmsRoot, path.dirname(metaPath)));
      return { id: algorithm.id, importPath: `../algorithms/${relDir}/page.js` };
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
}

function updateIndex(generatedPages) {
  const index = JSON.parse(readFileSync(indexPath, "utf8"));
  const existing = Array.isArray(index.algorithms) ? index.algorithms.filter((algorithm) => !String(algorithm.id).startsWith("ds-")) : [];
  index.algorithms = [
    ...existing,
    ...generatedPages.map((page) => ({
      phase: page.phase,
      id: page.id,
      title: page.title,
      route: page.route,
      visualizerType: page.visualizerType,
      priority: page.priority,
      category: page.category,
      icon: page.icon,
      track: page.track,
      topicGroup: page.topicGroup,
      sourceFolder: page.sourceFolder,
      sourceFile: page.sourceFile,
    })),
  ];
  writeFileSync(indexPath, JSON.stringify(index, null, 2) + "\n", "utf8");
}

function readPageData(filePath) {
  const source = readFileSync(filePath, "utf8");
  const json = source.match(/export const algorithmPage = ([\s\S]*);\s*$/)?.[1];
  if (!json) throw new Error(`Could not parse ${filePath}`);
  return JSON.parse(json);
}

function writePageData(filePath, data) {
  writeFileSync(filePath, dataModule(data), "utf8");
}

function updateExistingRelatedLinks(generatedPages) {
  const byFolder = new Map();
  for (const page of generatedPages) {
    if (!byFolder.has(page.sourceFolder)) byFolder.set(page.sourceFolder, []);
    byFolder.get(page.sourceFolder).push(page);
  }

  const groups = [
    { id: "recursion-basics", folders: ["03_recursion"], label: "C/C++ recursion source" },
    { id: "factorial-recursion", folders: ["03_recursion"], label: "C/C++ recursion source", titleMatch: /factorial/i },
    { id: "fibonacci-recursion", folders: ["03_recursion"], label: "C/C++ recursion source", titleMatch: /fibonacci/i },
    { id: "tower-of-hanoi", folders: ["03_recursion"], label: "C/C++ recursion source", titleMatch: /hanoi/i },
    { id: "linear-search", folders: ["05_Array_ADT"], label: "C/C++ array source", titleMatch: /linear search/i },
    { id: "binary-search", folders: ["05_Array_ADT"], label: "C/C++ array source", titleMatch: /binary search/i },
    { id: "anagram-detection", folders: ["06_string"], label: "C/C++ string source", titleMatch: /anagram/i },
    { id: "matrix-traversal", folders: ["07_Matrix", "08_sparse_matrix", "10_Sparse_matrix_and_polynimial_representation"], label: "C/C++ matrix source" },
    { id: "stack-basics", folders: ["11_Stack"], label: "C/C++ stack source" },
    { id: "valid-parentheses", folders: ["11_Stack"], label: "C/C++ stack source", titleMatch: /parenthesis/i },
    { id: "queue-basics", folders: ["12_Queue"], label: "C/C++ queue source" },
    { id: "circular-queue", folders: ["12_Queue"], label: "C/C++ queue source", titleMatch: /circular/i },
    { id: "level-order-traversal", folders: ["13_Trees"], label: "C/C++ tree source", titleMatch: /level order|binary tree/i },
    { id: "preorder-traversal", folders: ["13_Trees"], label: "C/C++ tree source", titleMatch: /travers/i },
    { id: "inorder-traversal", folders: ["13_Trees"], label: "C/C++ tree source", titleMatch: /travers/i },
    { id: "postorder-traversal", folders: ["13_Trees"], label: "C/C++ tree source", titleMatch: /travers/i },
    { id: "height-depth-of-tree", folders: ["13_Trees"], label: "C/C++ tree source", titleMatch: /height|count/i },
    { id: "bst-search", folders: ["14_BST"], label: "C/C++ BST source" },
    { id: "bst-insert", folders: ["14_BST"], label: "C/C++ BST source" },
    { id: "bst-delete", folders: ["14_BST"], label: "C/C++ BST source" },
    { id: "avl-tree-basics", folders: ["15_AVL_Tree"], label: "C/C++ AVL source" },
    { id: "heapify", folders: ["17_Heap"], label: "C/C++ heap source" },
    { id: "max-heap", folders: ["17_Heap"], label: "C/C++ heap source" },
  ];

  for (const group of groups) {
    const metaPath = findMetaFiles(algorithmsRoot).find((file) => JSON.parse(readFileSync(file, "utf8")).id === group.id);
    if (!metaPath) continue;
    const dataPath = path.join(path.dirname(metaPath), "data.js");
    if (!existsSync(dataPath)) continue;
    const links = group.folders
      .flatMap((folder) => byFolder.get(folder) || [])
      .filter((page) => !group.titleMatch || group.titleMatch.test(page.title))
      .slice(0, 4)
      .map((page) => ({ id: page.id, title: page.title, label: group.label }));
    if (!links.length) continue;
    const data = readPageData(dataPath);
    data.relatedLinks = links;
    writePageData(dataPath, data);
  }
}

resetGeneratedDataStructures();
const records = collectSourceRecords();
const generatedPages = records.map(writePage);
updateIndex(generatedPages);
regenerateManifest();
updateExistingRelatedLinks(generatedPages);

console.log(`Imported ${generatedPages.length} C/C++ data-structure source files.`);
console.log(`Generated pages in ${path.relative(root, targetRoot)}.`);
