import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const algorithmsRoot = path.join(root, "src", "algorithms");

function findDataFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const current = path.join(dir, entry.name);
    if (entry.isDirectory()) return findDataFiles(current);
    return entry.name === "data.js" ? [current] : [];
  });
}

function readPageData(filePath) {
  const source = readFileSync(filePath, "utf8");
  const json = source.match(/export const algorithmPage = ([\s\S]*);\s*$/)?.[1];
  if (!json) throw new Error(`Could not parse ${filePath}`);
  return JSON.parse(json);
}

function writePageData(filePath, data) {
  const header = data.track === "Data Structures"
    ? "// Edit this file to customize this data-structure page without touching app.js."
    : "// Edit this file to customize this algorithm page without touching app.js.";
  writeFileSync(
    filePath,
    `// AUTO-GENERATED ALGORITHM PAGE\n${header}\n\nexport const algorithmPage = ${JSON.stringify(data, null, 2)};\n`,
    "utf8",
  );
}

function sentence(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  return /[.!?]$/.test(text) ? text : `${text}.`;
}

function humanize(value) {
  return String(value || "")
    .replace(/\+\+/g, " C++ ")
    .replace(/[-_/]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function compactTitle(title) {
  return String(title || "This page").replace(/\s+/g, " ").trim();
}

function selectProfile(page) {
  const text = `${page.id || ""} ${page.title || ""} ${page.category || ""} ${page.topicGroup || ""} ${page.visualizerType || ""}`.toLowerCase();
  const visualizer = String(page.visualizerType || "").toLowerCase();

  if (visualizer.includes("array-boundaries") || text.includes("lower bound") || text.includes("upper bound") || text.includes("binary search")) return profiles.boundarySearch;
  if (visualizer.includes("rotated-array")) return profiles.rotatedSearch;
  if (visualizer.includes("array-scan") || text.includes("linear search")) return profiles.arrayScan;
  if (visualizer.includes("bar-swap") || visualizer.includes("min-selection") || visualizer.includes("card-insertion") || visualizer.includes("divide-merge") || visualizer.includes("partition") || visualizer.includes("bucket") || visualizer.includes("digit") || text.includes("sort")) return profiles.sorting;
  if (visualizer.includes("moving-window") || visualizer.includes("monotonic-deque")) return profiles.window;
  if (visualizer.includes("two-pointer")) return profiles.twoPointers;
  if (visualizer.includes("cumulative") || visualizer.includes("running-sum") || visualizer.includes("range-update")) return profiles.prefix;
  if (visualizer.includes("dp") || visualizer.includes("partition-table") || visualizer.includes("sequence-dp") || text.includes("dynamic programming")) return profiles.dp;
  if (visualizer.includes("graph-queue") || text === "bfs" || text.includes("breadth-first")) return profiles.graphQueue;
  if (visualizer.includes("graph-stack") || text === "dfs" || text.includes("depth-first")) return profiles.graphStack;
  if (visualizer.includes("weighted") || visualizer.includes("relaxation") || text.includes("dijkstra") || text.includes("bellman") || text.includes("floyd")) return profiles.shortestPath;
  if (visualizer.includes("mst")) return profiles.mst;
  if (visualizer.includes("scc") || visualizer.includes("low-link")) return profiles.components;
  if (visualizer.includes("parent-tree") || text.includes("union-find")) return profiles.unionFind;
  if (visualizer.includes("dag") || text.includes("topological")) return profiles.topological;
  if (visualizer.includes("tree-levels") || text.includes("level order")) return profiles.treeLevels;
  if (visualizer.includes("bst")) return profiles.bst;
  if (visualizer.includes("tree-traversal")) return profiles.treeTraversal;
  if (visualizer.includes("tree-height") || text.includes("diameter") || text.includes("height")) return profiles.treeMeasure;
  if (visualizer.includes("rotations") || visualizer.includes("balanced-tree") || text.includes("avl") || text.includes("red-black")) return profiles.balancedTree;
  if (visualizer.includes("prefix-tree") || text.includes("trie")) return profiles.trie;
  if (visualizer.includes("array-adt") || visualizer.includes("array-memory")) return profiles.arrayStructure;
  if (visualizer.includes("cpp-memory-model")) return profiles.cppMemory;
  if (visualizer.includes("stack") || text.includes("stack")) return profiles.stack;
  if (visualizer.includes("queue") || visualizer.includes("deque") || text.includes("queue") || text.includes("deque")) return profiles.queue;
  if (visualizer.includes("heap") || text.includes("heap") || text.includes("priority queue")) return profiles.heap;
  if (visualizer.includes("linked-list")) return profiles.linkedList;
  if (visualizer.includes("string") || visualizer.includes("prefix-table") || visualizer.includes("rolling-hash") || visualizer.includes("z-box") || visualizer.includes("palindrome") || text.includes("string") || text.includes("kmp") || text.includes("rabin") || text.includes("anagram")) return profiles.string;
  if (visualizer.includes("grid") || visualizer.includes("matrix")) return profiles.grid;
  if (visualizer.includes("call-stack") || visualizer.includes("recursion") || visualizer.includes("decision") || visualizer.includes("choice") || visualizer.includes("chessboard") || text.includes("backtracking") || text.includes("recursion") || text.includes("subsets") || text.includes("permutation") || text.includes("sudoku") || text.includes("maze")) return profiles.recursion;
  if (visualizer.includes("bit") || visualizer.includes("xor") || visualizer.includes("binary-power") || visualizer.includes("gcd") || visualizer.includes("divisor") || visualizer.includes("number") || text.includes("gcd") || text.includes("prime") || text.includes("power") || text.includes("bit")) return profiles.number;
  if (visualizer.includes("cpp")) return profiles.cpp;
  return profiles.generic;
}

function buildConcept(page, profile) {
  const title = compactTitle(page.title);
  return `${profile.why(title, page)} ${profile.when(title, page)}`;
}

function buildLogic(page, profile) {
  return profile.logic(compactTitle(page.title), page);
}

function buildTransition(page, profile) {
  return profile.transition(compactTitle(page.title), page);
}

function buildSteps(page, profile) {
  const title = compactTitle(page.title);
  return profile.steps(title, page).map(([stepTitle, text]) => ({
    title: stepTitle,
    text,
  }));
}

function buildDryRun(page, profile) {
  const title = compactTitle(page.title);
  return profile.dryRun(title, page).map(([label, stepTitle, note, activeLine, codeInsight], index) => ({
    label,
    title: stepTitle,
    note,
    activeLine: activeLine ?? (index * 2) + 1,
    codeInsight: codeInsight || note,
  }));
}

function buildCaption(page, profile) {
  const title = compactTitle(page.title);
  return `${profile.caption(title, page)} The numbered steps follow the code path used to maintain the main invariant.`;
}

function shouldUpdatePage(page) {
  return Boolean(page?.id && page?.title && Array.isArray(page.dryRun));
}

function sortingDetails(page) {
  const text = `${page.id || ""} ${page.title || ""} ${page.visualizerType || ""}`.toLowerCase();

  if (text.includes("bubble") || text.includes("bar-swap")) {
    return {
      why: "local adjacent swaps can repeatedly move large values toward the end",
      when: "you want the simplest comparison-sort trace for learning adjacent swaps",
      logic: "Sweep across adjacent pairs, swap out-of-order neighbors, and repeat until no unsorted pair remains.",
      transition: "Each comparison either keeps a pair or swaps it, shrinking disorder near the end of the array.",
      steps: [["Copy values", "Work on a mutable array."], ["Compare neighbors", "Inspect the current adjacent pair."], ["Swap if needed", "Move the larger value one position right."], ["Return sorted array", "Stop when a pass leaves the order stable."]],
      dryRun: [["Array", "Copy values", "The code starts with the list to reorder.", 1], ["Pair", "Compare neighbors", "Only adjacent values are inspected.", 4], ["Swap", "Move larger right", "Out-of-order neighbors exchange positions.", 6], ["Sorted", "Return final order", "The last pass confirms every pair is ordered.", 10]],
    };
  }

  if (text.includes("selection") || text.includes("min-selection")) {
    return {
      why: "you can choose the next smallest value and lock one final position at a time",
      when: "clear minimum-selection behavior matters more than minimizing swaps",
      logic: "Scan the unsorted suffix for the minimum value, swap it into the next fixed slot, and advance the boundary.",
      transition: "Each pass selects one minimum and grows the sorted prefix by one position.",
      steps: [["Set boundary", "Mark the first unsorted slot."], ["Find minimum", "Scan the remaining values."], ["Place minimum", "Swap the minimum into the boundary slot."], ["Return sorted array", "Finish after every slot is fixed."]],
      dryRun: [["Boundary", "Choose next fixed slot", "The left side is already sorted.", 1], ["Minimum", "Scan unsorted suffix", "The code tracks the smallest remaining value.", 4], ["Swap", "Place selected value", "The minimum moves into its final position.", 7], ["Sorted", "Return final order", "All positions are fixed after the last pass.", 11]],
    };
  }

  if (text.includes("insertion") || text.includes("card-insertion")) {
    return {
      why: "a sorted prefix can absorb one new value at a time",
      when: "the input is small, nearly sorted, or you want stable insertion behavior",
      logic: "Take the next unsorted value, shift larger prefix values right, and insert the value into its sorted position.",
      transition: "Each step expands the sorted prefix by inserting one value without disturbing earlier order.",
      steps: [["Start prefix", "Treat the first value as sorted."], ["Pick key", "Take the next unsorted value."], ["Shift larger values", "Move larger prefix values right."], ["Insert key", "Place the key in the open slot."]],
      dryRun: [["Prefix", "Start sorted area", "The left side is maintained in order.", 1], ["Key", "Read next value", "One value is removed from the unsorted side.", 4], ["Shift", "Move larger values", "Larger prefix values slide right to create room.", 6], ["Insert", "Place key", "The sorted prefix grows by one.", 9]],
    };
  }

  if (text.includes("merge") || text.includes("divide-merge")) {
    return {
      why: "splitting into sorted halves makes merging predictable",
      when: "stable n log n sorting is preferred and extra merge space is acceptable",
      logic: "Divide the array into halves, sort each half recursively, then merge the two sorted halves.",
      transition: "Each merge step chooses the smaller front value from two already-sorted halves.",
      steps: [["Split range", "Divide the current array section."], ["Sort halves", "Recursively sort left and right sections."], ["Merge fronts", "Choose the smaller front value."], ["Return merged array", "Produce one sorted section."]],
      dryRun: [["Range", "Split array", "The code divides work into smaller ranges.", 1], ["Halves", "Sort recursively", "Each half is solved before merge.", 4], ["Merge", "Choose smaller front", "The next output value comes from one sorted half.", 8], ["Sorted", "Return merged result", "The merged section is fully ordered.", 12]],
    };
  }

  if (text.includes("quick") || text.includes("partition")) {
    return {
      why: "a pivot can partition values into smaller and larger sides",
      when: "in-place average-case n log n sorting fits the dataset",
      logic: "Choose a pivot, partition values around it, then recursively sort the left and right partitions.",
      transition: "Each partition step moves values to the correct side of the pivot and fixes the pivot position.",
      steps: [["Choose pivot", "Select the value that splits the range."], ["Partition range", "Move smaller values left and larger values right."], ["Fix pivot", "Place pivot at its final index."], ["Sort partitions", "Recurse on both sides."]],
      dryRun: [["Pivot", "Choose pivot value", "The pivot defines the partition rule.", 1], ["Scan", "Move values by pivot", "Values are compared with the pivot.", 4], ["Place", "Fix pivot index", "The pivot lands between smaller and larger values.", 8], ["Recurse", "Sort both sides", "The same partition rule handles each side.", 11]],
    };
  }

  if (text.includes("heap")) {
    return {
      why: "a heap can repeatedly expose the next largest or smallest value",
      when: "in-place n log n sorting with heap structure is the right tradeoff",
      logic: "Build a heap, swap the root into its final position, shrink the heap, and restore heap order.",
      transition: "Each extraction fixes one output position and heapifies the remaining prefix.",
      steps: [["Build heap", "Arrange values into parent-child priority order."], ["Swap root", "Move the top priority value to the end."], ["Shrink heap", "Exclude the fixed value."], ["Heapify", "Restore the root rule for the remaining values."]],
      dryRun: [["Heap", "Build priority tree", "The array is interpreted as a heap.", 1], ["Root", "Move root to output", "The max or min root becomes fixed.", 5], ["Size", "Shrink active heap", "Fixed values are no longer heapified.", 7], ["Restore", "Heapify remaining range", "The parent-child invariant is repaired.", 9]],
    };
  }

  if (text.includes("counting") || text.includes("frequency-array")) {
    return {
      why: "small integer ranges can be counted instead of compared pair by pair",
      when: "keys are bounded integers and frequency memory is acceptable",
      logic: "Count each value, compute output positions or repeated values, then rebuild the array in key order.",
      transition: "Each value increments a count, and each count later emits ordered copies.",
      steps: [["Read range", "Identify the integer key bounds."], ["Count values", "Increment the frequency bucket."], ["Emit by count", "Write values in key order."], ["Return sorted array", "Return the rebuilt ordered list."]],
      dryRun: [["Range", "Read key bounds", "Counting needs a finite integer range.", 1], ["Counts", "Increment frequency", "Each input value updates one bucket.", 4], ["Emit", "Write repeated keys", "Counts turn into ordered output values.", 8], ["Sorted", "Return output", "The rebuilt list is sorted by key.", 10]],
    };
  }

  if (text.includes("bucket")) {
    return {
      why: "values distribute naturally into ranges that can be sorted independently",
      when: "inputs are spread across buckets and per-bucket sorting is cheaper",
      logic: "Create buckets, place each value by range, sort each bucket, and concatenate the buckets.",
      transition: "Each value moves into its bucket, then each bucket is locally sorted before concatenation.",
      steps: [["Create buckets", "Divide the value range into buckets."], ["Place values", "Map each value to its bucket."], ["Sort buckets", "Order values inside each bucket."], ["Concatenate", "Join buckets from low to high."]],
      dryRun: [["Buckets", "Create bucket ranges", "The code creates containers for value ranges.", 1], ["Value", "Assign to bucket", "Each input value lands in one bucket.", 5], ["Inside bucket", "Sort local values", "Small bucket lists are ordered independently.", 9], ["Concatenate", "Concatenate buckets", "Buckets are joined in range order.", 12]],
    };
  }

  if (text.includes("radix") || text.includes("digit")) {
    return {
      why: "numbers can be ordered digit by digit without full comparisons",
      when: "keys have fixed-width digits or bounded digit count",
      logic: "Group values by the current digit, rebuild the array, and repeat for more significant digits.",
      transition: "Each pass stabilizes one digit while preserving the order created by earlier digit passes.",
      steps: [["Choose digit", "Start at the least significant digit."], ["Bucket by digit", "Group values by digit value."], ["Rebuild array", "Concatenate digit buckets stably."], ["Repeat digits", "Move to the next digit until sorted."]],
      dryRun: [["Digit", "Choose active digit", "The pass focuses on one digit place.", 1], ["Bucket", "Group by digit", "Values move into digit buckets.", 4], ["Rebuild", "Concatenate buckets", "Stable rebuild keeps earlier digit order.", 8], ["Sorted", "Finish all digits", "After the highest digit, the array is sorted.", 11]],
    };
  }

  return {
    why: "values must be placed into a reliable order before later work can be simple",
    when: "the algorithm's ordering invariant and cost fit the input size and stability needs",
    logic: "Protect the algorithm's ordering invariant until every value reaches final order.",
    transition: "Each step compares or moves values so the unsorted region gets smaller.",
    steps: [["Copy values", "Work on a mutable array without changing the original input."], ["Choose invariant", "Track the sorted or partitioned region."], ["Move values", "Perform the comparison, swap, merge, or placement."], ["Return order", "Return the fully sorted array."]],
    dryRun: [["Input array", "Copy values", "The code starts with the values to reorder.", 1], ["Invariant", "Track ordered work", "The algorithm marks what part is already safe.", 3], ["Move", "Apply ordering step", "The current operation reduces disorder.", 6], ["Sorted output", "Return final order", "The result is returned when no unsorted work remains.", 10]],
  };
}

const profiles = {
  boundarySearch: {
    why: (title) => `${title} is useful when sorted order lets you discard a whole half of the search space.`,
    when: () => "Use this when the input is sorted or the answer predicate changes only once.",
    logic: () => "Maintain low/high boundaries, test the middle, and keep only the half that can still contain the answer.",
    transition: () => "Each comparison must shrink the boundary range; equality returns immediately, otherwise low or high moves past mid.",
    caption: (title) => `${title} is shown as a shrinking boundary search.`,
    steps: () => [["Read sorted input", "Confirm the array or predicate has monotonic order."], ["Set boundaries", "Place low and high around every candidate."], ["Compare middle", "Use mid to decide which half is impossible."], ["Return boundary", "Return the found index or final insertion boundary."]],
    dryRun: () => [["Sorted input", "Read the ordered search space", "The code starts from a range where binary decisions are valid.", 1], ["low / high", "Open the candidate window", "low and high mark every position that may still answer.", 3], ["mid check", "Compare the midpoint", "The midpoint decides which half is removed.", 5], ["Return", "Emit index or boundary", "The loop ends with a match or the collapsed boundary.", 9]],
  },
  rotatedSearch: {
    why: () => "Rotated search is useful when sorted data has been shifted but one side of any midpoint is still ordered.",
    when: () => "Use this when the array is rotated and you still need logarithmic search.",
    logic: () => "Pick mid, identify which side is sorted, then keep the side whose value range can contain the target.",
    transition: () => "Move low or high after checking whether target fits inside the sorted half.",
    caption: (title) => `${title} is shown as sorted-half detection inside a rotated array.`,
    steps: () => [["Pick mid", "Probe the current rotated range."], ["Find sorted side", "Check whether left or right half is ordered."], ["Keep fitting half", "Keep the half whose boundary values include the target."], ["Return match", "Stop when mid equals target or the range empties."]],
    dryRun: () => [["Rotated range", "Read array and target", "The code starts with a sorted array shifted around a pivot.", 1], ["mid probe", "Choose the middle", "mid divides the current candidate window.", 4], ["sorted half", "Detect ordered side", "One side of mid must still be sorted.", 6], ["Move bounds", "Keep possible side", "Bounds move toward the only half that can contain target.", 8]],
  },
  arrayScan: {
    why: (title) => `${title} is useful when every item may matter and the input has no stronger ordering to exploit.`,
    when: () => "Use this when a simple pass is clearer or cheaper than preprocessing.",
    logic: () => "Move one index through the array, update the running state, and stop when the required condition is met.",
    transition: () => "Each loop consumes the current item exactly once and advances the index.",
    caption: (title) => `${title} is shown as a left-to-right scan.`,
    steps: () => [["Start scan", "Set the first index and initial result."], ["Read value", "Inspect the current array item."], ["Update state", "Change the answer, counter, or candidate."], ["Finish pass", "Return the maintained result after the scan."]],
    dryRun: () => [["Input array", "Read values", "The code receives the list and any target condition.", 1], ["Index", "Select current item", "The loop focuses on one position at a time.", 3], ["Update", "Apply comparison or count", "The current value changes the running state only if the rule says so.", 5], ["Result", "Return scan output", "When the scan ends, the tracked result is returned.", 8]],
  },
  sorting: {
    why: (title, page) => `${title} is useful when ${sortingDetails(page).why}.`,
    when: (title, page) => `Use this when ${sortingDetails(page).when}.`,
    logic: (title, page) => sortingDetails(page).logic,
    transition: (title, page) => sortingDetails(page).transition,
    caption: (title) => `${title} is shown as values moving toward sorted order.`,
    steps: (title, page) => sortingDetails(page).steps,
    dryRun: (title, page) => sortingDetails(page).dryRun,
  },
  window: {
    why: () => "Sliding-window logic is useful when the answer depends on a contiguous range that changes one edge at a time.",
    when: () => "Use this when recomputing every range would repeat work.",
    logic: () => "Expand or slide the window, remove expired items, and keep the answer from the current valid range.",
    transition: () => "Each step adds the right item and removes or ignores items that no longer belong.",
    caption: (title) => `${title} is shown as a moving range over an array.`,
    steps: () => [["Open window", "Start with an empty or first valid range."], ["Add right edge", "Include the next value."], ["Remove stale edge", "Shrink or pop values that no longer belong."], ["Record answer", "Emit the best value for the current window."]],
    dryRun: () => [["Window rule", "Read array and window rule", "The code knows the range size or condition.", 1], ["Right edge", "Consume next value", "The window grows by one new item.", 4], ["Left edge", "Drop expired state", "Values outside the range are removed.", 6], ["Window answer", "Record current result", "The current valid window updates the output.", 8]],
  },
  twoPointers: {
    why: () => "Two pointers are useful when moving one side changes the condition predictably.",
    when: () => "Use this when order lets you skip many pairs or positions.",
    logic: () => "Place two indices, inspect their combined state, and move the pointer that can still improve the condition.",
    transition: () => "Each step moves left or right inward instead of trying all combinations.",
    caption: (title) => `${title} is shown as two coordinated indices.`,
    steps: () => [["Place pointers", "Start left and right at meaningful boundaries."], ["Inspect pair", "Read the values or state between them."], ["Move one side", "Advance the pointer that cannot produce the answer."], ["Return match", "Return the pair, range, or transformed array."]],
    dryRun: () => [["Range", "Read ordered range", "The code receives values where pointer movement has meaning.", 1], ["Pointers", "Set left and right", "Both indices define the current candidate state.", 3], ["Compare", "Choose pointer movement", "The condition decides which pointer moves.", 5], ["Pair result", "Return pair or state", "The loop stops when the target condition is met or exhausted.", 8]],
  },
  prefix: {
    why: () => "Prefix-style state is useful when a running total or boundary delta lets future queries reuse past work.",
    when: () => "Use this when range answers or cumulative changes appear repeatedly.",
    logic: () => "Build a running state once, then answer each range or final value by combining saved boundaries.",
    transition: () => "Each item updates the running total, difference, or accumulator exactly once.",
    caption: (title) => `${title} is shown as cumulative state over positions.`,
    steps: () => [["Initialize accumulator", "Start with zero or the neutral value."], ["Consume value", "Add the current contribution."], ["Store boundary", "Save the cumulative state for later lookup."], ["Answer range", "Use stored boundaries to produce the result."]],
    dryRun: () => [["Values", "Read values or updates", "The code receives the array, ranges, or deltas.", 1], ["Accumulator", "Start running state", "A neutral starting value makes every update consistent.", 3], ["Prefix step", "Apply current contribution", "The running state changes by the current value or boundary delta.", 5], ["Range result", "Read saved state", "The stored state gives the final or range answer.", 8]],
  },
  dp: {
    why: (title) => `${title} is useful when the same subproblems appear again and storing answers prevents repeated work.`,
    when: () => "Use this when you can define a state, base cases, and a recurrence.",
    logic: () => "Define what one DP state means, initialize base cases, fill dependent states, and read the target state.",
    transition: () => "Each step computes one state from already-solved smaller or earlier states.",
    caption: (title) => `${title} is shown as a dependency-ordered DP fill.`,
    steps: () => [["Define state", "Name exactly what one cell or entry means."], ["Set base cases", "Fill answers that need no recurrence."], ["Apply recurrence", "Compute each state from solved dependencies."], ["Read target", "Return the state requested by the problem."]],
    dryRun: () => [["State meaning", "Define DP cell", "The code first needs a precise subproblem meaning.", 1], ["Base case", "Seed known answers", "Base values stop the recurrence from falling through.", 3], ["Recurrence", "Fill next state", "The transition combines previously solved states.", 6], ["Target", "Return requested state", "The answer is read from the final DP state.", 10]],
  },
  graphQueue: graphProfile("queue frontier", "level-by-level traversal", "enqueue newly discovered neighbors"),
  graphStack: graphProfile("stack or recursion frontier", "deep traversal", "visit one unvisited neighbor before backtracking"),
  shortestPath: graphProfile("distance table", "shortest-path relaxation", "relax outgoing edges when a better distance is found"),
  mst: graphProfile("chosen edge set", "minimum-spanning-tree growth", "add the cheapest safe edge"),
  components: graphProfile("discovery/component state", "component discovery", "update low-link/order state and emit components"),
  unionFind: graphProfile("parent array", "component merging", "find roots and union separate sets"),
  topological: graphProfile("indegree state", "dependency ordering", "remove zero-indegree vertices"),
  treeLevels: {
    why: () => "Level-order traversal is useful when tree nodes must be processed by depth from top to bottom.",
    when: () => "Use this when closer-to-root nodes must be handled before deeper nodes.",
    logic: () => "Start with the root in a queue, visit the front node, append its value, then enqueue children.",
    transition: () => "Each step removes the next queued node and appends its children to the back.",
    caption: (title) => `${title} is shown as breadth-first queue traversal.`,
    steps: () => [["Check root", "Return an empty result for an empty tree."], ["Seed queue", "Put the root in the BFS queue."], ["Visit front", "Append the next queued node value."], ["Enqueue children", "Push left and right children for the next levels."]],
    dryRun: () => [["Root", "Check for empty tree", "If root is missing, there are no levels to visit.", 1], ["Queue", "Seed traversal queue", "The root becomes the first discovered node.", 3], ["Visit", "Process queue front", "The front node is appended to output.", 6], ["Children", "Discover next level", "Children are pushed to the queue for later visits.", 8]],
  },
  treeTraversal: treeProfile("visit order", "visit the current node in preorder, inorder, or postorder position"),
  treeMeasure: treeProfile("child height/result", "combine child measurements into the parent answer"),
  bst: treeProfile("ordered branch", "compare with the current node and move left or right"),
  balancedTree: treeProfile("balance invariant", "rotate or recolor when height/color rules are violated"),
  trie: treeProfile("character path", "follow or create the child link for the current character"),
  stack: stateProfile("stack", "last-in, first-out state", "push, pop, peek, or resolve stack entries"),
  queue: stateProfile("queue", "first-in, first-out state", "enqueue, dequeue, peek, or evict entries"),
  heap: stateProfile("heap", "parent-child priority invariant", "sift values until the root rule is restored"),
  linkedList: stateProfile("linked list", "node-link structure", "move pointers without losing the rest of the chain"),
  arrayStructure: {
    why: (title) => `${title} is useful when contiguous storage, indexes, length, or capacity explain the operation.`,
    when: () => "Use this when an array operation depends on slot position, bounds, or shifting values.",
    logic: () => "Read the index or value, check the active length and capacity, update the affected slots, and return the visible array result.",
    transition: () => "Each step changes one index, length, capacity, or shifted range while preserving the array representation.",
    caption: (title) => `${title} is shown as indexed array state changes.`,
    steps: () => [["Read request", "Identify the index, value, length, or capacity involved."], ["Check bounds", "Confirm the operation is valid for the active array size."], ["Update slots", "Set, shift, scan, or resize the affected cells."], ["Return array result", "Return the found value, status, or updated array view."]],
    dryRun: () => [["Array", "Read array request", "The code receives an array plus an index, value, or command.", 1], ["Index / length", "Check active range", "Bounds and current length decide whether the operation is valid.", 4], ["Slots", "Update affected cells", "The operation sets, shifts, scans, or resizes array slots.", 7], ["Result", "Return array state", "The visible value or updated array confirms the operation.", 10]],
  },
  cppMemory: {
    why: (title) => `${title} is useful when C/C++ storage, addresses, structures, or object ownership affect the program result.`,
    when: () => "Use this when the lesson depends on stack memory, heap memory, references, pointers, structs, or classes.",
    logic: () => "Create the C/C++ value, inspect how it is passed or referenced, apply the operation, and read the final memory-visible result.",
    transition: () => "Each step changes a value, address, member, or object boundary according to C/C++ memory rules.",
    caption: (title) => `${title} is shown as C/C++ memory and value flow.`,
    steps: () => [["Declare value", "Create the variable, pointer, structure, or object."], ["Inspect storage", "Notice whether the code uses value, address, reference, or member access."], ["Apply operation", "Run the function, assignment, dereference, or method call."], ["Read result", "Read the changed value, member, pointer target, or object output."]],
    dryRun: () => [["Declaration", "Create program value", "The code introduces the variable, pointer, structure, or object.", 1], ["Storage", "Track address or copy", "Passing by value, pointer, or reference controls what can change.", 4], ["C/C++ rule", "Apply C/C++ rule", "Assignment, dereference, member access, or method call changes the state.", 7], ["Result", "Read final value", "The visible output follows from the memory model.", 10]],
  },
  string: {
    why: () => "String algorithms are useful when character order, frequency, prefix, hash, or palindrome structure can be reused.",
    when: () => "Use this when scanning every substring directly would repeat character work.",
    logic: () => "Prepare helper state, scan characters, update the pattern state, and record matches or the best string result.",
    transition: () => "Each step consumes one character and updates prefix, hash, frequency, trie, or palindrome state.",
    caption: (title) => `${title} is shown as character-state updates.`,
    steps: () => [["Read text", "Identify text, pattern, or character rule."], ["Prepare state", "Build frequency, prefix, hash, trie, or radius state."], ["Scan character", "Consume the next character and update state."], ["Return match", "Return matches, validity, or the best substring result."]],
    dryRun: () => [["Text", "Read string input", "The code receives text, pattern, or character data.", 1], ["Helper", "Prepare string state", "Prefix, hash, frequency, or radius state avoids repeated work.", 3], ["Character", "Update on current char", "One character changes the active string state.", 6], ["Result", "Return string answer", "Matches or best values are returned after the scan.", 9]],
  },
  grid: {
    why: () => "Grid algorithms are useful when positions, neighbors, boundaries, or cell states define the problem.",
    when: () => "Use this when the answer depends on moving through rows, columns, or regions.",
    logic: () => "Read dimensions, choose the active cell or boundary, update neighbors or accumulated state, and return the grid result.",
    transition: () => "Each step moves to a valid cell, changes a boundary, or updates a matrix state.",
    caption: (title) => `${title} is shown as row/column state changes.`,
    steps: () => [["Read grid", "Identify dimensions and valid cells."], ["Choose position", "Select the current row/column or boundary."], ["Update neighbors", "Move, fill, rotate, or accumulate according to the rule."], ["Return grid result", "Return count, transformed grid, or lookup answer."]],
    dryRun: () => [["Grid", "Read rows and columns", "The code starts from the matrix shape.", 1], ["Position", "Choose active cell", "The current row/column controls the next update.", 3], ["Move/update", "Apply neighbor or boundary rule", "The transition changes reachable cells, boundaries, or accumulated values.", 6], ["Result", "Return grid output", "The final matrix, count, or query answer is returned.", 9]],
  },
  recursion: {
    why: () => "Recursion and backtracking are useful when a problem branches into smaller choices that share the same rule.",
    when: () => "Use this when the answer is built by choosing, recursing, and sometimes undoing choices.",
    logic: () => "Handle the base case, choose the next option, recurse into smaller state, then combine or undo state.",
    transition: () => "Each step either reaches a base case or moves one level deeper with a smaller decision state.",
    caption: (title) => `${title} is shown as call/choice state changes.`,
    steps: () => [["Base case", "Stop when the current state is complete or invalid."], ["Choose option", "Pick the next valid branch."], ["Recurse", "Solve the smaller state."], ["Return or undo", "Collect the result or backtrack before the next choice."]],
    dryRun: () => [["Base", "Check stop condition", "The code first asks whether the current state is complete.", 1], ["Choice", "Select next option", "One valid move is added to the state.", 4], ["Call", "Recurse deeper", "The same rule runs on a smaller or extended state.", 6], ["Unwind", "Return or backtrack", "The result is combined or the choice is removed.", 9]],
  },
  number: {
    why: () => "Number and bit algorithms are useful when arithmetic properties let you skip brute-force work.",
    when: () => "Use this when divisibility, powers, bits, xor, or modular rules define the answer.",
    logic: () => "Read numeric input, keep the relevant arithmetic state, apply the identity, and return the reduced result.",
    transition: () => "Each step applies one arithmetic, modular, or bit operation that preserves the invariant.",
    caption: (title) => `${title} is shown as arithmetic-state reduction.`,
    steps: () => [["Read numbers", "Identify the integer, range, or modulus."], ["Set invariant", "Choose the arithmetic or bit rule."], ["Apply operation", "Shift, xor, divide, multiply, or mark values."], ["Return result", "Return the reduced number or boolean answer."]],
    dryRun: () => [["Numbers", "Read numeric state", "The code receives the number, range, or modulus.", 1], ["Rule", "Select math invariant", "The chosen identity controls every update.", 3], ["Reduction", "Apply one reduction", "A shift, xor, multiply, divide, or mark changes state.", 5], ["Numeric result", "Return numeric result", "The loop ends when the invariant gives the answer.", 8]],
  },
  cpp: stateProfile("C++ STL call", "library operation contract", "apply the STL operation and inspect iterator/value output"),
  generic: stateProfile("algorithm state", "page-specific invariant", "update the state described by this algorithm"),
};

function graphProfile(stateName, resultName, transitionText) {
  const stateLabel = humanize(stateName);
  const resultLabel = humanize(resultName);
  return {
    why: (title) => `${title} is useful when graph structure can be solved by maintaining ${stateName}.`,
    when: () => `Use this when the required result is ${resultName}.`,
    logic: () => `Initialize graph input and ${stateName}, choose the next work item, then ${transitionText}.`,
    transition: () => `Each step consumes one vertex or edge and updates ${stateName} without losing the graph invariant.`,
    caption: (title) => `${title} is shown as graph frontier/state updates.`,
    steps: () => [["Read graph", "Identify vertices, edges, weights, and start state."], ["Build graph state", `Create the ${stateName}.`], ["Process work item", transitionText.charAt(0).toUpperCase() + transitionText.slice(1) + "."], ["Return graph result", `Return the ${resultName}.`]],
    dryRun: () => [["Graph", "Read graph input", "The code receives vertices, edges, weights, or adjacency lists.", 1], [stateLabel, `Initialize ${stateName}`, "Only the graph state owned by this algorithm is created.", 3], ["Work item", "Process next vertex or edge", `${transitionText.charAt(0).toUpperCase()}${transitionText.slice(1)}.`, 6], [resultLabel, `Return ${resultName}`, "The final graph state becomes the answer.", 10]],
  };
}

function treeProfile(stateName, transitionText) {
  return {
    why: (title) => `${title} is useful when tree structure lets each node decide the next smaller piece of work.`,
    when: () => `Use this when the answer depends on ${stateName}.`,
    logic: () => `Start at the root, maintain ${stateName}, ${transitionText}, and return the tree-specific result.`,
    transition: () => `Each step focuses on one node and uses ${stateName} to decide the next child, rotation, or returned value.`,
    caption: (title) => `${title} is shown as node-by-node tree state.`,
    steps: () => [["Check node", "Handle an empty root or finished subtree."], ["Read node state", `Inspect ${stateName}.`], ["Move/combine", `${transitionText}.`], ["Return tree result", "Return traversal output, path result, or updated tree state."]],
    dryRun: () => [["Root", "Check current node", "The code starts by handling missing nodes or the current root.", 1], ["Node state", `Read ${stateName}`, "The current node controls the next step.", 3], ["Child step", transitionText.charAt(0).toUpperCase() + transitionText.slice(1), "The algorithm moves to a child, combines a value, or repairs structure.", 6], ["Tree result", "Return result", "The final traversal, path, measurement, or tree state is returned.", 10]],
  };
}

function stateProfile(structure, invariant, transitionText) {
  const structureLabel = {
    "stack": "Stack top",
    "queue": "Queue front",
    "heap": "Heap root",
    "linked list": "Node links",
    "C++ STL call": "STL call",
    "algorithm state": "Invariant",
  }[structure] || humanize(structure);
  const changeLabel = {
    "stack": "Push / pop",
    "queue": "Enqueue / dequeue",
    "heap": "Sift",
    "linked list": "Pointer update",
    "C++ STL call": "Library call",
    "algorithm state": "State change",
  }[structure] || "Update";
  return {
    why: (title) => `${title} is useful when ${structure} behavior is the clearest model for the data changes.`,
    when: () => `Use this when the problem is naturally described by ${invariant}.`,
    logic: () => `Read the next value or operation, maintain ${invariant}, then ${transitionText}.`,
    transition: () => `Each step changes only the part of the ${structure} required to preserve the invariant.`,
    caption: (title) => `${title} is shown as ${structure} state changes.`,
    steps: () => [[`Read ${structure}`, "Identify the next command, value, node, or library call."], [`Inspect ${structureLabel.toLowerCase()}`, `Look at the active ${structure} fields.`], [changeLabel, `${transitionText}.`], ["Read result", "Return the emitted value or updated structure."]],
    dryRun: () => [[humanize(structure), `Read ${structure} action`, "The code receives the next value or command.", 1], [structureLabel, `Inspect ${structure}`, `The active state must still satisfy ${invariant}.`, 3], [changeLabel, transitionText.charAt(0).toUpperCase() + transitionText.slice(1), `Only the necessary ${structure} fields are changed.`, 6], ["Result", "Return visible result", "The return value or printed state confirms the operation.", 9]],
  };
}

let updated = 0;
for (const dataPath of findDataFiles(algorithmsRoot)) {
  const page = readPageData(dataPath);
  if (!shouldUpdatePage(page)) continue;

  const profile = selectProfile(page);
  page.concept = buildConcept(page, profile);
  page.logicSummary = buildLogic(page, profile);
  page.transitionSummary = buildTransition(page, profile);
  page.logicSteps = buildSteps(page, profile);
  page.dryRun = buildDryRun(page, profile);
  page.visualizerCaption = buildCaption(page, profile);
  page.memoryTrick = `${compactTitle(page.title)}: name the invariant, then trace the exact state change.`;

  writePageData(dataPath, page);
  updated += 1;
}

console.log(`Enriched learning sections for ${updated} pages.`);
