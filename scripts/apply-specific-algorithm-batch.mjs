import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const algorithmsRoot = path.join(root, "src", "algorithms");

function findMetaFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const current = path.join(dir, entry.name);
    if (entry.isDirectory()) return findMetaFiles(current);
    return entry.name === "meta.json" ? [current] : [];
  });
}

function readPageData(filePath) {
  const source = readFileSync(filePath, "utf8");
  const json = source.match(/export const algorithmPage = ([\s\S]*);\s*$/)?.[1];
  if (!json) throw new Error(`Could not parse ${filePath}`);
  return JSON.parse(json);
}

function writePageData(filePath, data) {
  writeFileSync(
    filePath,
    `// AUTO-GENERATED ALGORITHM PAGE\n// Edit this file to customize this algorithm page without touching app.js.\n\nexport const algorithmPage = ${JSON.stringify(data, null, 2)};\n`,
    "utf8",
  );
}

function functionName(id) {
  const words = id.split(/[^a-z0-9]+/).filter(Boolean);
  return words.map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join("");
}

function lines(...items) {
  return items.join("\n");
}

function standardDryRun(title, transition, activeLine = 8) {
  return [
    { label: "Input", title: "Read inputs", note: `${title} starts by reading the exact input shape it owns.`, activeLine: 1 },
    { label: "State", title: "Initialize state", note: "Create only the state needed for this algorithm's invariant.", activeLine: 3 },
    { label: "Loop", title: "Run transition", note: transition, activeLine },
    { label: "Answer", title: "Return answer", note: "Return the value produced by the maintained invariant.", activeLine: activeLine + 4 },
  ];
}

function pagePatch(title, spec) {
  return {
    meaning: `${title} is taught here with its own state, transition, code trace, and stopping rule.`,
    problem: spec.concept,
    concept: spec.concept,
    logicSummary: spec.logic,
    transitionSummary: spec.transition,
    codeInsight: spec.insight,
    realLifeExample: spec.example,
    whenToUse: spec.when,
    memoryTrick: spec.trick,
    logicSteps: spec.steps.map(([stepTitle, text]) => ({ title: stepTitle, text })),
    variables: spec.variables.map(([name, purpose]) => ({ name, purpose })),
    dryRun: spec.dryRun || standardDryRun(title, spec.transition, spec.activeLine),
    complexity: spec.complexity,
  };
}

const implementations = {
  "linear-search": {
    concept: "Linear Search scans items one by one and stops as soon as the target is found.",
    logic: "Start at index 0, compare each value with the target, and return the first matching index.",
    transition: "Advance the index by one after every failed comparison.",
    insight: "The loop has no hidden structure: correctness comes from checking every earlier item before moving forward.",
    example: "Use it for unsorted lists, small inputs, or cases where sorting first would cost more than scanning.",
    when: "Use Linear Search when the data is unsorted or a single sequential pass is acceptable.",
    trick: "Linear Search: current item either answers now or the scan moves right.",
    variables: [["array, target", "The list to scan and the value to find."], ["index", "The current position being compared."], ["matching index", "The first index whose value equals the target, or -1."], ["index < array.length", "The loop continues while unchecked items remain."]],
    steps: [["Start at the first element", "Initialize index to 0."], ["Compare current value", "Check whether array[index] equals target."], ["Move right", "Increment index after a miss."], ["Return result", "Return the match or -1 after the scan finishes."]],
    complexity: { time: "O(n) worst case.", space: "O(1)." },
    code: `export function linearSearch(array, target) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === target) return index;
  }
  return -1;
}`,
  },
  "binary-search": {
    concept: "Binary Search repeatedly halves a sorted search range using the middle value.",
    logic: "Keep low and high boundaries, compare the middle item, then discard the half that cannot contain the target.",
    transition: "Move low to mid + 1 when the middle is too small; move high to mid - 1 when it is too large.",
    insight: "Every branch must shrink the search window, otherwise binary search can loop forever.",
    example: "Use it for sorted arrays, lookup tables, and monotonic answer spaces.",
    when: "Use Binary Search when the range is sorted or the predicate is monotonic.",
    trick: "Binary Search: compare middle, keep only the possible half.",
    variables: [["array, target", "A sorted array and the value to find."], ["low, high, mid", "The current search window and its midpoint."], ["index", "The target index, or -1 when absent."], ["low <= high", "The loop runs while the window is non-empty."]],
    steps: [["Set boundaries", "low starts at 0 and high at the last index."], ["Pick middle", "Compute mid inside the current window."], ["Discard half", "Use the comparison to move low or high."], ["Return index", "Return mid on equality or -1 after the window closes."]],
    complexity: { time: "O(log n).", space: "O(1)." },
    code: `export function binarySearch(array, target) {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (array[mid] === target) return mid;
    if (array[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}`,
  },
  "lower-bound": {
    concept: "Lower Bound finds the first sorted position whose value is greater than or equal to the target.",
    logic: "Keep a half-open range [low, high), test the middle, and preserve the first possible answer.",
    transition: "If array[mid] is too small, move low right; otherwise keep mid by moving high to mid.",
    insight: "Using high = mid keeps a valid candidate in the range until low is the answer.",
    example: "Use it for insertion positions, frequency ranges, and first-true binary-search predicates.",
    when: "Use Lower Bound when you need the first position that can hold target without breaking order.",
    trick: "Lower Bound: first value not less than target.",
    variables: [["array, target", "A sorted array and boundary value."], ["low, high", "A half-open candidate range."], ["insertion index", "The first index with value >= target."], ["low < high", "The loop continues until the candidate range collapses."]],
    steps: [["Use a half-open range", "Start with [0, array.length)."], ["Check mid", "Compare array[mid] with target."], ["Keep or discard mid", "Discard mid only when it is too small."], ["Return low", "low is the first valid insertion index."]],
    complexity: { time: "O(log n).", space: "O(1)." },
    code: `export function lowerBound(array, target) {
  let low = 0;
  let high = array.length;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (array[mid] < target) low = mid + 1;
    else high = mid;
  }
  return low;
}`,
  },
  "upper-bound": {
    concept: "Upper Bound finds the first sorted position whose value is strictly greater than the target.",
    logic: "Keep [low, high), skip values <= target, and keep values that may be the first greater item.",
    transition: "If array[mid] <= target, move low right; otherwise move high to mid.",
    insight: "The only difference from lower bound is the comparison: <= target is discarded.",
    example: "Use it to count duplicates with upperBound - lowerBound.",
    when: "Use Upper Bound when you need the first item after all target-equal values.",
    trick: "Upper Bound: first value greater than target.",
    variables: [["array, target", "A sorted array and boundary value."], ["low, high", "A half-open search range."], ["upper index", "The first index with value > target."], ["low < high", "Stop when one insertion point remains."]],
    steps: [["Open full range", "Search [0, array.length)."], ["Compare middle", "Check whether mid still belongs to <= target."], ["Discard equal values", "Move low past mid when array[mid] <= target."], ["Return boundary", "low is the first greater position."]],
    complexity: { time: "O(log n).", space: "O(1)." },
    code: `export function upperBound(array, target) {
  let low = 0;
  let high = array.length;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (array[mid] <= target) low = mid + 1;
    else high = mid;
  }
  return low;
}`,
  },
  "search-in-rotated-sorted-array": {
    concept: "Rotated-array search uses binary search while first deciding which half is sorted.",
    logic: "Compare mid with target, identify the sorted half, then keep the half that can contain target.",
    transition: "Move low/high according to whether target lies inside the sorted side.",
    insight: "The rotation is handled by the sorted-half test; no full pivot search is required.",
    example: "Use it when a sorted array has been rotated at an unknown pivot.",
    when: "Use this when values are unique or duplicate handling is explicitly designed.",
    trick: "Find the sorted half, then ask whether target fits there.",
    variables: [["array, target", "A rotated sorted array and target."], ["low, high, mid", "Current candidate window."], ["index", "The target index or -1."], ["low <= high", "Continue while the window can contain target."]],
    steps: [["Pick mid", "Binary-search the rotated range."], ["Find sorted side", "Left side is sorted when array[low] <= array[mid]."], ["Keep fitting side", "Check whether target belongs inside that sorted range."], ["Return or miss", "Return mid on match or -1 after exhaustion."]],
    complexity: { time: "O(log n) with distinct values.", space: "O(1)." },
    code: `export function searchInRotatedSortedArray(array, target) {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (array[mid] === target) return mid;
    if (array[low] <= array[mid]) {
      if (array[low] <= target && target < array[mid]) high = mid - 1;
      else low = mid + 1;
    } else if (array[mid] < target && target <= array[high]) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}`,
  },
  "ternary-search": {
    concept: "Ternary Search narrows a unimodal range by comparing two interior points.",
    logic: "Split the interval into thirds and discard the side that cannot contain the optimum.",
    transition: "For a maximum, if f(mid1) < f(mid2), discard the left third; otherwise discard the right third.",
    insight: "Ternary search belongs to unimodal functions, not ordinary sorted-array lookup.",
    example: "Use it for discrete or continuous optimization where the function rises then falls.",
    when: "Use Ternary Search only when the objective is unimodal.",
    trick: "Two mids reveal which third cannot hold the peak.",
    variables: [["low, high, evaluate", "The search bounds and objective function."], ["mid1, mid2", "Two interior probes."], ["best position", "The remaining optimum candidate."], ["high - low > precision", "Stop when the range is small enough."]],
    steps: [["Create thirds", "Compute mid1 and mid2."], ["Evaluate both", "Compare objective values."], ["Discard one third", "Remove the side that cannot contain the optimum."], ["Return midpoint", "The final range center approximates the answer."]],
    complexity: { time: "O(log range / precision).", space: "O(1)." },
    code: `export function ternarySearch(low, high, evaluate, precision = 1e-7) {
  while (high - low > precision) {
    const mid1 = low + (high - low) / 3;
    const mid2 = high - (high - low) / 3;
    if (evaluate(mid1) < evaluate(mid2)) low = mid1;
    else high = mid2;
  }
  return (low + high) / 2;
}`,
  },
  "bubble-sort": sortSpec("Bubble Sort", "Repeatedly swap adjacent out-of-order pairs so the largest remaining value bubbles to the end.", `export function bubbleSort(array) {
  const values = [...array];
  for (let end = values.length - 1; end > 0; end -= 1) {
    let swapped = false;
    for (let index = 0; index < end; index += 1) {
      if (values[index] > values[index + 1]) {
        [values[index], values[index + 1]] = [values[index + 1], values[index]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return values;
}`, "O(n^2) worst case, O(n) best case when already sorted.", "O(1)."),
  "selection-sort": sortSpec("Selection Sort", "Select the smallest item from the unsorted suffix and swap it into the next output slot.", `export function selectionSort(array) {
  const values = [...array];
  for (let start = 0; start < values.length; start += 1) {
    let minIndex = start;
    for (let index = start + 1; index < values.length; index += 1) {
      if (values[index] < values[minIndex]) minIndex = index;
    }
    [values[start], values[minIndex]] = [values[minIndex], values[start]];
  }
  return values;
}`, "O(n^2).", "O(1)."),
  "insertion-sort": sortSpec("Insertion Sort", "Grow a sorted prefix by inserting each next value into its correct position.", `export function insertionSort(array) {
  const values = [...array];
  for (let index = 1; index < values.length; index += 1) {
    const current = values[index];
    let scan = index - 1;
    while (scan >= 0 && values[scan] > current) {
      values[scan + 1] = values[scan];
      scan -= 1;
    }
    values[scan + 1] = current;
  }
  return values;
}`, "O(n^2) worst case, O(n) nearly sorted.", "O(1)."),
  "merge-sort": sortSpec("Merge Sort", "Divide the array into halves, sort each half, then merge two sorted halves.", `export function mergeSort(array) {
  if (array.length <= 1) return [...array];
  const mid = Math.floor(array.length / 2);
  return merge(mergeSort(array.slice(0, mid)), mergeSort(array.slice(mid)));
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    result.push(left[i] <= right[j] ? left[i++] : right[j++]);
  }
  return result.concat(left.slice(i), right.slice(j));
}`, "O(n log n).", "O(n)."),
  "quick-sort": sortSpec("Quick Sort", "Partition values around a pivot, then recursively sort values smaller and greater than the pivot.", `export function quickSort(array) {
  const values = [...array];
  partitionSort(values, 0, values.length - 1);
  return values;
}

function partitionSort(values, low, high) {
  if (low >= high) return;
  const pivotIndex = partition(values, low, high);
  partitionSort(values, low, pivotIndex - 1);
  partitionSort(values, pivotIndex + 1, high);
}

function partition(values, low, high) {
  const pivot = values[high];
  let smaller = low;
  for (let index = low; index < high; index += 1) {
    if (values[index] <= pivot) {
      [values[smaller], values[index]] = [values[index], values[smaller]];
      smaller += 1;
    }
  }
  [values[smaller], values[high]] = [values[high], values[smaller]];
  return smaller;
}`, "Average O(n log n), worst-case O(n^2).", "O(log n) average recursion stack."),
  "counting-sort": sortSpec("Counting Sort", "Count occurrences of each integer key, then write values back in key order.", `export function countingSort(array) {
  if (!array.length) return [];
  const min = Math.min(...array);
  const max = Math.max(...array);
  const counts = Array(max - min + 1).fill(0);
  for (const value of array) counts[value - min] += 1;
  const result = [];
  counts.forEach((count, offset) => {
    for (let copy = 0; copy < count; copy += 1) result.push(offset + min);
  });
  return result;
}`, "O(n + k), where k is the key range.", "O(k)."),
  "heap-sort": sortSpec("Heap Sort", "Build a max heap and repeatedly move the maximum value to the end.", `export function heapSort(array) {
  const values = [...array];
  for (let index = Math.floor(values.length / 2) - 1; index >= 0; index -= 1) heapify(values, values.length, index);
  for (let end = values.length - 1; end > 0; end -= 1) {
    [values[0], values[end]] = [values[end], values[0]];
    heapify(values, end, 0);
  }
  return values;
}

function heapify(values, size, root) {
  let largest = root;
  const left = root * 2 + 1;
  const right = root * 2 + 2;
  if (left < size && values[left] > values[largest]) largest = left;
  if (right < size && values[right] > values[largest]) largest = right;
  if (largest !== root) {
    [values[root], values[largest]] = [values[largest], values[root]];
    heapify(values, size, largest);
  }
}`, "O(n log n).", "O(1) auxiliary space."),
  "bucket-sort": sortSpec("Bucket Sort", "Distribute values into buckets, sort each bucket, and concatenate the buckets.", `export function bucketSort(array, bucketCount = Math.max(1, Math.ceil(Math.sqrt(array.length)))) {
  if (array.length <= 1) return [...array];
  const min = Math.min(...array);
  const max = Math.max(...array);
  const width = (max - min + 1) / bucketCount;
  const buckets = Array.from({ length: bucketCount }, () => []);
  for (const value of array) {
    const bucketIndex = Math.min(bucketCount - 1, Math.floor((value - min) / width));
    buckets[bucketIndex].push(value);
  }
  return buckets.flatMap((bucket) => bucket.sort((a, b) => a - b));
}`, "Average O(n + k), plus bucket sorting cost.", "O(n + k)."),
  "radix-sort": sortSpec("Radix Sort", "Sort integers digit by digit from least significant to most significant.", `export function radixSort(array) {
  let values = [...array];
  const max = Math.max(0, ...values);
  for (let place = 1; Math.floor(max / place) > 0; place *= 10) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (const value of values) buckets[Math.floor(value / place) % 10].push(value);
    values = buckets.flat();
  }
  return values;
}`, "O(d(n + b)) for d digits and b buckets.", "O(n + b)."),
};

function sortSpec(title, conceptDetail, code, time, space) {
  return {
    concept: conceptDetail,
    logic: `${title} keeps a clear sorted/unsorted invariant and makes one transition that places values closer to final order.`,
    transition: "Compare and move values according to the algorithm's invariant until no unsorted work remains.",
    insight: "The implementation copies the input array, then mutates only the working copy so callers keep their original data.",
    example: `${title} appears when values must be ordered and the chosen invariant matches the input size or stability needs.`,
    when: `Use ${title} when its ordering invariant and complexity tradeoff match the dataset.`,
    trick: `${title}: protect the invariant after every comparison or move.`,
    variables: [["array", "The values to sort."], ["working array", "A copy that is rearranged during sorting."], ["sorted array", "The final ordered result."], ["unsorted work remains", "Continue until every value is in final order."]],
    steps: [["Copy input", "Avoid mutating the caller's original array."], ["Maintain invariant", "Track which part is sorted or partitioned."], ["Move values", "Swap, insert, merge, or bucket according to the algorithm."], ["Return sorted result", "Return the fully ordered working array."]],
    complexity: { time, space },
    code,
  };
}

function arraySpec(title, concept, code, time = "O(n).", space = "O(1) unless output storage is counted.") {
  return {
    concept,
    logic: `${title} keeps an array-specific invariant and updates it as the scan moves through the input.`,
    transition: "Move the pointer, window, counter, or running value exactly once per step while preserving the invariant.",
    insight: "The code is written around the array invariant, not a generic scan: each variable explains what future positions can still change.",
    example: `${title} appears when contiguous ranges, ordering, or repeated array state can be reused across positions.`,
    when: `Use ${title} when the problem statement matches its array invariant.`,
    trick: `${title}: write down the invariant before moving the pointer.`,
    variables: [["array", "The input values."], ["invariant state", "The running sum, window, pointer, candidate, or frequency state."], ["answer", "The best value, transformed array, or matching pair."], ["scan remains", "Continue while unchecked positions remain."]],
    steps: [["Read the array", "Identify whether the problem is about a range, window, order, or frequency."], ["Initialize invariant", "Create only the pointer or running state this pattern needs."], ["Advance scan", "Update the invariant as each position is consumed."], ["Return answer", "Return the value maintained by the invariant."]],
    complexity: { time, space },
    code,
  };
}

Object.assign(implementations, {
  "prefix-sum": arraySpec("Prefix Sum", "Prefix Sum stores cumulative totals so any range sum can be answered by subtracting two saved totals.", `export function prefixSum(array) {
  const prefix = [0];
  for (const value of array) prefix.push(prefix[prefix.length - 1] + value);
  return prefix;
}

export function rangeSum(prefix, left, right) {
  return prefix[right + 1] - prefix[left];
}`, "O(n) to build, O(1) per range query.", "O(n)."),
  "difference-array": arraySpec("Difference Array", "Difference Array stores only changes at range boundaries, then reconstructs final values with a prefix scan.", `export function differenceArray(length, updates) {
  const diff = Array(length + 1).fill(0);
  for (const [left, right, delta] of updates) {
    diff[left] += delta;
    if (right + 1 < diff.length) diff[right + 1] -= delta;
  }
  const result = [];
  let running = 0;
  for (let index = 0; index < length; index += 1) {
    running += diff[index];
    result.push(running);
  }
  return result;
}`, "O(n + q) for n length and q updates.", "O(n)."),
  "sliding-window": arraySpec("Sliding Window", "Sliding Window reuses a contiguous range instead of recomputing it after every move.", `export function slidingWindow(array, size) {
  if (size <= 0 || size > array.length) return [];
  const sums = [];
  let windowSum = 0;
  for (let right = 0; right < array.length; right += 1) {
    windowSum += array[right];
    if (right >= size) windowSum -= array[right - size];
    if (right >= size - 1) sums.push(windowSum);
  }
  return sums;
}`, "O(n).", "O(number of windows)."),
  "two-pointers": arraySpec("Two Pointers", "Two Pointers moves two indices toward a condition without trying every pair.", `export function twoPointers(sortedArray, target) {
  let left = 0;
  let right = sortedArray.length - 1;
  while (left < right) {
    const sum = sortedArray[left] + sortedArray[right];
    if (sum === target) return [left, right];
    if (sum < target) left += 1;
    else right -= 1;
  }
  return [-1, -1];
}`, "O(n).", "O(1)."),
  "kadanes-algorithm": arraySpec("Kadane’s Algorithm", "Kadane’s Algorithm keeps the best subarray ending here and the best subarray seen anywhere.", `export function kadanesAlgorithm(array) {
  let bestEndingHere = array[0] ?? 0;
  let best = bestEndingHere;
  for (let index = 1; index < array.length; index += 1) {
    bestEndingHere = Math.max(array[index], bestEndingHere + array[index]);
    best = Math.max(best, bestEndingHere);
  }
  return best;
}`, "O(n).", "O(1)."),
  "maximum-product-subarray": arraySpec("Maximum Product Subarray", "Maximum Product Subarray tracks both max and min products because a negative value can flip them.", `export function maximumProductSubarray(array) {
  let maxEnding = array[0] ?? 0;
  let minEnding = array[0] ?? 0;
  let best = array[0] ?? 0;
  for (let index = 1; index < array.length; index += 1) {
    const value = array[index];
    const candidates = [value, value * maxEnding, value * minEnding];
    maxEnding = Math.max(...candidates);
    minEnding = Math.min(...candidates);
    best = Math.max(best, maxEnding);
  }
  return best;
}`, "O(n).", "O(1)."),
  "majority-element": arraySpec("Majority Element", "Majority Element uses vote cancellation: different values cancel out, leaving the majority candidate.", `export function majorityElement(array) {
  let candidate = null;
  let votes = 0;
  for (const value of array) {
    if (votes === 0) candidate = value;
    votes += value === candidate ? 1 : -1;
  }
  return candidate;
}`, "O(n).", "O(1)."),
  "longest-consecutive-sequence": arraySpec("Longest Consecutive Sequence", "Longest Consecutive Sequence starts only at numbers that have no predecessor and counts the chain forward.", `export function longestConsecutiveSequence(array) {
  const values = new Set(array);
  let best = 0;
  for (const value of values) {
    if (values.has(value - 1)) continue;
    let current = value;
    while (values.has(current)) current += 1;
    best = Math.max(best, current - value);
  }
  return best;
}`, "O(n) average.", "O(n)."),
  "dutch-national-flag": arraySpec("Dutch National Flag", "Dutch National Flag partitions values into low, middle, and high regions in one pass.", `export function dutchNationalFlag(array) {
  const values = [...array];
  let low = 0;
  let mid = 0;
  let high = values.length - 1;
  while (mid <= high) {
    if (values[mid] === 0) [values[low++], values[mid++]] = [values[mid], values[low]];
    else if (values[mid] === 2) [values[mid], values[high--]] = [values[high], values[mid]];
    else mid += 1;
  }
  return values;
}`, "O(n).", "O(1)."),
});

function dpSpec(title, concept, code, time, space) {
  return {
    concept,
    logic: `${title} defines subproblems, initializes base cases, fills states in dependency order, and reads the requested state as the answer.`,
    transition: "Compute one DP state from already-solved smaller states.",
    insight: "The DP table shape is the algorithm: every index in the code corresponds to a named subproblem.",
    example: `${title} appears when overlapping subproblems would otherwise be recomputed.`,
    when: `Use ${title} when the recurrence and base cases match the problem statement.`,
    trick: `${title}: state definition first, recurrence second, loops third.`,
    variables: [["input parameters", "The values that define the DP problem."], ["dp table", "Stored answers for subproblems."], ["target state", "The final state returned as the answer."], ["states remain", "Continue until every dependency needed by the answer is filled."]],
    steps: [["Define state", "Name what one DP cell means."], ["Set base cases", "Fill states that do not depend on others."], ["Apply recurrence", "Fill each state from solved states."], ["Return target", "Read the requested final state."]],
    complexity: { time, space },
    code,
  };
}

Object.assign(implementations, {
  "fibonacci-dp": dpSpec("Fibonacci DP", "Fibonacci DP stores previous Fibonacci states so each number is computed once.", `export function fibonacciDp(n) {
  if (n <= 1) return n;
  const dp = Array(n + 1).fill(0);
  dp[1] = 1;
  for (let index = 2; index <= n; index += 1) dp[index] = dp[index - 1] + dp[index - 2];
  return dp[n];
}`, "O(n).", "O(n), reducible to O(1)."),
  "coin-change": dpSpec("Coin Change", "Coin Change stores the fewest coins needed for every amount up to the target.", `export function coinChange(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (const coin of coins) {
    for (let value = coin; value <= amount; value += 1) {
      dp[value] = Math.min(dp[value], dp[value - coin] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}`, "O(coins * amount).", "O(amount)."),
  "zero-one-knapsack": dpSpec("0/1 Knapsack", "0/1 Knapsack decides for each item whether taking it improves capacity-limited value.", `export function zeroOneKnapsack(weights, values, capacity) {
  const dp = Array(capacity + 1).fill(0);
  for (let item = 0; item < weights.length; item += 1) {
    for (let cap = capacity; cap >= weights[item]; cap -= 1) {
      dp[cap] = Math.max(dp[cap], dp[cap - weights[item]] + values[item]);
    }
  }
  return dp[capacity];
}`, "O(n * capacity).", "O(capacity)."),
  "longest-common-subsequence": dpSpec("Longest Common Subsequence", "LCS compares prefixes of two strings and keeps the best subsequence length for every prefix pair.", `export function longestCommonSubsequence(a, b) {
  const dp = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
  for (let i = 1; i <= a.length; i += 1) {
    for (let j = 1; j <= b.length; j += 1) {
      dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[a.length][b.length];
}`, "O(nm).", "O(nm)."),
  "edit-distance": dpSpec("Edit Distance", "Edit Distance stores the minimum insert/delete/replace operations for every prefix pair.", `export function editDistance(a, b) {
  const dp = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i += 1) dp[i][0] = i;
  for (let j = 0; j <= b.length; j += 1) dp[0][j] = j;
  for (let i = 1; i <= a.length; i += 1) {
    for (let j = 1; j <= b.length; j += 1) {
      if (a[i - 1] === b[j - 1]) dp[i][j] = dp[i - 1][j - 1];
      else dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[a.length][b.length];
}`, "O(nm).", "O(nm)."),
  "longest-increasing-subsequence": dpSpec("Longest Increasing Subsequence", "LIS keeps minimal tail values for increasing subsequences of each length.", `export function longestIncreasingSubsequence(array) {
  const tails = [];
  for (const value of array) {
    let low = 0;
    let high = tails.length;
    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      if (tails[mid] < value) low = mid + 1;
      else high = mid;
    }
    tails[low] = value;
  }
  return tails.length;
}`, "O(n log n).", "O(n)."),
  "matrix-chain-multiplication": dpSpec("Matrix Chain Multiplication", "Matrix Chain Multiplication chooses split points that minimize multiplication cost for every interval.", `export function matrixChainMultiplication(dimensions) {
  const n = dimensions.length - 1;
  const dp = Array.from({ length: n }, () => Array(n).fill(0));
  for (let length = 2; length <= n; length += 1) {
    for (let left = 0; left + length - 1 < n; left += 1) {
      const right = left + length - 1;
      dp[left][right] = Infinity;
      for (let split = left; split < right; split += 1) {
        const cost = dp[left][split] + dp[split + 1][right] + dimensions[left] * dimensions[split + 1] * dimensions[right + 1];
        dp[left][right] = Math.min(dp[left][right], cost);
      }
    }
  }
  return dp[0]?.[n - 1] ?? 0;
}`, "O(n^3).", "O(n^2)."),
  "partition-dp": dpSpec("Partition DP", "Partition DP tracks which subset sums are reachable to decide whether equal partition is possible.", `export function partitionDp(array) {
  const total = array.reduce((sum, value) => sum + value, 0);
  if (total % 2 !== 0) return false;
  const target = total / 2;
  const possible = Array(target + 1).fill(false);
  possible[0] = true;
  for (const value of array) {
    for (let sum = target; sum >= value; sum -= 1) possible[sum] ||= possible[sum - value];
  }
  return possible[target];
}`, "O(n * target).", "O(target)."),
  "dp-on-grids": dpSpec("DP on Grids", "DP on Grids fills each cell from previously reachable neighboring cells.", `export function dpOnGrids(grid) {
  const rows = grid.length;
  const cols = grid[0]?.length || 0;
  const dp = Array.from({ length: rows }, () => Array(cols).fill(0));
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      if (grid[row][col] === 1) continue;
      if (row === 0 && col === 0) dp[row][col] = 1;
      else dp[row][col] = (dp[row - 1]?.[col] || 0) + (dp[row]?.[col - 1] || 0);
    }
  }
  return dp[rows - 1]?.[cols - 1] || 0;
}`, "O(rows * cols).", "O(rows * cols)."),
  "dp-on-trees": dpSpec("DP on Trees", "DP on Trees combines child states into a parent state during DFS.", `export function dpOnTrees(root) {
  function solve(node) {
    if (!node) return { take: 0, skip: 0 };
    const left = solve(node.left);
    const right = solve(node.right);
    return {
      take: node.value + left.skip + right.skip,
      skip: Math.max(left.take, left.skip) + Math.max(right.take, right.skip),
    };
  }
  const result = solve(root);
  return Math.max(result.take, result.skip);
}`, "O(n).", "O(h) recursion stack."),
});

function stateSpec(title, concept, code, time = "O(n).", space = "O(n).") {
  return {
    concept,
    logic: `${title} maintains a dedicated data-structure invariant and changes it through one clear push, pop, enqueue, dequeue, heap, or cache transition.`,
    transition: "Read the next operation or value, update the owned data structure, and emit the current answer if needed.",
    insight: "The implementation names the backing state directly, so the code trace matches the visual data structure on the page.",
    example: `${title} appears when the problem is defined by the behavior of this exact data structure.`,
    when: `Use ${title} when its state transition is the natural way to model the problem.`,
    trick: `${title}: the data structure is the algorithm state.`,
    variables: [["input", "Values or operations to process."], ["data structure state", "The stack, queue, heap, deque, or cache state."], ["answer", "The output after all operations or after each step."], ["operations remain", "Continue while input values or operations remain."]],
    steps: [["Read operation", "Identify the next value or command."], ["Update structure", "Push, pop, enqueue, dequeue, rebalance, or evict as required."], ["Preserve invariant", "Keep the structure valid after the update."], ["Return output", "Return the accumulated answers or final structure."]],
    complexity: { time, space },
    code,
  };
}

Object.assign(implementations, {
  "stack-basics": stateSpec("Stack Basics", "Stack Basics follows last-in, first-out order with push and pop operations.", `export function stackBasics(operations) {
  const stack = [];
  const output = [];
  for (const operation of operations) {
    if (operation.type === "push") stack.push(operation.value);
    if (operation.type === "pop") output.push(stack.pop() ?? null);
    if (operation.type === "peek") output.push(stack.at(-1) ?? null);
  }
  return output;
}`, "O(m) for m operations.", "O(m)."),
  "valid-parentheses": stateSpec("Valid Parentheses", "Valid Parentheses uses a stack of expected closing brackets.", `export function validParentheses(text) {
  const pairs = { "(": ")", "[": "]", "{": "}" };
  const stack = [];
  for (const char of text) {
    if (pairs[char]) stack.push(pairs[char]);
    else if ([")", "]", "}"].includes(char) && stack.pop() !== char) return false;
  }
  return stack.length === 0;
}`, "O(n).", "O(n)."),
  "next-greater-element": stateSpec("Next Greater Element", "Next Greater Element uses a decreasing stack to resolve values when a larger value appears.", `export function nextGreaterElement(values) {
  const result = Array(values.length).fill(-1);
  const stack = [];
  for (let index = 0; index < values.length; index += 1) {
    while (stack.length && values[index] > values[stack.at(-1)]) {
      result[stack.pop()] = values[index];
    }
    stack.push(index);
  }
  return result;
}`, "O(n).", "O(n)."),
  "previous-greater-element": stateSpec("Previous Greater Element", "Previous Greater Element keeps a decreasing stack of candidates to the left.", `export function previousGreaterElement(values) {
  const result = [];
  const stack = [];
  for (const value of values) {
    while (stack.length && stack.at(-1) <= value) stack.pop();
    result.push(stack.at(-1) ?? -1);
    stack.push(value);
  }
  return result;
}`, "O(n).", "O(n)."),
  "min-stack": stateSpec("Min Stack", "Min Stack keeps a normal stack plus a second stack of current minimum values.", `export function minStack(operations) {
  const stack = [];
  const mins = [];
  const output = [];
  for (const operation of operations) {
    if (operation.type === "push") {
      stack.push(operation.value);
      mins.push(Math.min(operation.value, mins.at(-1) ?? operation.value));
    }
    if (operation.type === "pop") {
      stack.pop();
      mins.pop();
    }
    if (operation.type === "min") output.push(mins.at(-1) ?? null);
  }
  return output;
}`, "O(m).", "O(m)."),
  "stock-span": stateSpec("Stock Span Problem", "Stock Span uses a monotonic stack to count consecutive previous prices less than or equal to today.", `export function stockSpan(prices) {
  const stack = [];
  const spans = [];
  for (let day = 0; day < prices.length; day += 1) {
    while (stack.length && prices[stack.at(-1)] <= prices[day]) stack.pop();
    spans[day] = stack.length ? day - stack.at(-1) : day + 1;
    stack.push(day);
  }
  return spans;
}`, "O(n).", "O(n)."),
  "largest-rectangle-histogram": stateSpec("Largest Rectangle in Histogram", "Largest Rectangle in Histogram uses an increasing stack to find each bar's maximal width.", `export function largestRectangleHistogram(heights) {
  const stack = [];
  let best = 0;
  for (let index = 0; index <= heights.length; index += 1) {
    const current = index === heights.length ? 0 : heights[index];
    while (stack.length && current < heights[stack.at(-1)]) {
      const height = heights[stack.pop()];
      const left = stack.length ? stack.at(-1) : -1;
      best = Math.max(best, height * (index - left - 1));
    }
    stack.push(index);
  }
  return best;
}`, "O(n).", "O(n)."),
  "queue-basics": stateSpec("Queue Basics", "Queue Basics follows first-in, first-out order with enqueue and dequeue operations.", `export function queueBasics(operations) {
  const queue = [];
  const output = [];
  for (const operation of operations) {
    if (operation.type === "enqueue") queue.push(operation.value);
    if (operation.type === "dequeue") output.push(queue.shift() ?? null);
    if (operation.type === "front") output.push(queue[0] ?? null);
  }
  return output;
}`, "O(m).", "O(m)."),
  deque: stateSpec("Deque", "Deque supports insertion and removal at both ends.", `export function deque(operations) {
  const values = [];
  const output = [];
  for (const operation of operations) {
    if (operation.type === "pushFront") values.unshift(operation.value);
    if (operation.type === "pushBack") values.push(operation.value);
    if (operation.type === "popFront") output.push(values.shift() ?? null);
    if (operation.type === "popBack") output.push(values.pop() ?? null);
  }
  return output;
}`, "O(m) for this educational array-backed version.", "O(m)."),
  "circular-queue": stateSpec("Circular Queue", "Circular Queue reuses fixed storage by wrapping front and rear indices.", `export function circularQueue(capacity, operations) {
  const data = Array(capacity);
  let front = 0;
  let size = 0;
  const output = [];
  for (const operation of operations) {
    if (operation.type === "enqueue" && size < capacity) {
      data[(front + size) % capacity] = operation.value;
      size += 1;
    }
    if (operation.type === "dequeue" && size > 0) {
      output.push(data[front]);
      front = (front + 1) % capacity;
      size -= 1;
    }
  }
  return output;
}`, "O(m).", "O(capacity)."),
  "sliding-window-maximum": stateSpec("Sliding Window Maximum", "Sliding Window Maximum keeps a deque of indices whose values are decreasing.", `export function slidingWindowMaximum(values, size) {
  const deque = [];
  const result = [];
  for (let index = 0; index < values.length; index += 1) {
    while (deque.length && deque[0] <= index - size) deque.shift();
    while (deque.length && values[deque.at(-1)] <= values[index]) deque.pop();
    deque.push(index);
    if (index >= size - 1) result.push(values[deque[0]]);
  }
  return result;
}`, "O(n).", "O(k)."),
  "lru-cache": stateSpec("LRU Cache", "LRU Cache combines a map with recency order so the least recently used key is evicted first.", `export function lruCache(capacity, operations) {
  const cache = new Map();
  const output = [];
  for (const operation of operations) {
    if (operation.type === "get") {
      if (!cache.has(operation.key)) output.push(-1);
      else {
        const value = cache.get(operation.key);
        cache.delete(operation.key);
        cache.set(operation.key, value);
        output.push(value);
      }
    }
    if (operation.type === "put") {
      if (cache.has(operation.key)) cache.delete(operation.key);
      cache.set(operation.key, operation.value);
      if (cache.size > capacity) cache.delete(cache.keys().next().value);
    }
  }
  return output;
}`, "O(1) average per operation.", "O(capacity)."),
  heapify: stateSpec("Heapify", "Heapify restores the heap property by pushing one out-of-place node downward.", `export function heapify(values, index = 0, size = values.length) {
  const heap = [...values];
  siftDown(heap, index, size);
  return heap;
}

function siftDown(heap, index, size) {
  while (true) {
    let largest = index;
    const left = index * 2 + 1;
    const right = index * 2 + 2;
    if (left < size && heap[left] > heap[largest]) largest = left;
    if (right < size && heap[right] > heap[largest]) largest = right;
    if (largest === index) break;
    [heap[index], heap[largest]] = [heap[largest], heap[index]];
    index = largest;
  }
}`, "O(log n).", "O(1)."),
  "max-heap": stateSpec("Max Heap", "Max Heap keeps the largest value at the root after each insertion.", `export function maxHeap(values) {
  const heap = [];
  for (const value of values) {
    heap.push(value);
    let child = heap.length - 1;
    while (child > 0) {
      const parent = Math.floor((child - 1) / 2);
      if (heap[parent] >= heap[child]) break;
      [heap[parent], heap[child]] = [heap[child], heap[parent]];
      child = parent;
    }
  }
  return heap;
}`, "O(n log n) by repeated insertion.", "O(n)."),
  "min-heap": stateSpec("Min Heap", "Min Heap keeps the smallest value at the root after each insertion.", `export function minHeap(values) {
  const heap = [];
  for (const value of values) {
    heap.push(value);
    let child = heap.length - 1;
    while (child > 0) {
      const parent = Math.floor((child - 1) / 2);
      if (heap[parent] <= heap[child]) break;
      [heap[parent], heap[child]] = [heap[child], heap[parent]];
      child = parent;
    }
  }
  return heap;
}`, "O(n log n) by repeated insertion.", "O(n)."),
  "kth-largest-smallest": stateSpec("Kth Largest / Smallest Element", "Kth selection sorts or heaps values until the requested rank is available.", `export function kthLargestSmallest(values, k) {
  const sorted = [...values].sort((a, b) => a - b);
  return {
    kthSmallest: sorted[k - 1] ?? null,
    kthLargest: sorted[sorted.length - k] ?? null,
  };
}`, "O(n log n) in this clear reference version.", "O(n)."),
  "top-k-frequent-elements": stateSpec("Top K Frequent Elements", "Top K Frequent Elements counts values, then selects the highest-frequency entries.", `export function topKFrequentElements(values, k) {
  const frequency = new Map();
  for (const value of values) frequency.set(value, (frequency.get(value) || 0) + 1);
  return [...frequency.entries()].sort((a, b) => b[1] - a[1]).slice(0, k).map(([value]) => value);
}`, "O(n log u), where u is the number of unique values.", "O(u)."),
  "merge-k-sorted-lists": stateSpec("Merge K Sorted Lists", "Merge K Sorted Lists repeatedly chooses the smallest current head among all sorted lists.", `export function mergeKSortedLists(lists) {
  const indices = Array(lists.length).fill(0);
  const result = [];
  while (true) {
    let bestList = -1;
    for (let list = 0; list < lists.length; list += 1) {
      if (indices[list] >= lists[list].length) continue;
      if (bestList === -1 || lists[list][indices[list]] < lists[bestList][indices[bestList]]) bestList = list;
    }
    if (bestList === -1) break;
    result.push(lists[bestList][indices[bestList]++]);
  }
  return result;
}`, "O(Nk) in this simple reference version.", "O(N)."),
});

const graphSpecs = {
  bfs: ["Breadth-First Search explores a graph level by level with a FIFO queue.", `export function bfs(graph, start) {
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
}`, "O(V + E).", "O(V)."],
  dfs: ["Depth-First Search follows one branch completely before backtracking.", `export function dfs(graph, start) {
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
}`, "O(V + E).", "O(V)."],
  dijkstra: ["Dijkstra’s Algorithm repeatedly finalizes the unvisited vertex with the smallest known distance.", `export function dijkstra(graph, start) {
  const distances = Object.fromEntries(Object.keys(graph).map((node) => [node, Infinity]));
  const visited = new Set();
  distances[start] = 0;
  while (visited.size < Object.keys(graph).length) {
    const node = Object.keys(distances).filter((candidate) => !visited.has(candidate)).sort((a, b) => distances[a] - distances[b])[0];
    if (node === undefined || distances[node] === Infinity) break;
    visited.add(node);
    for (const [next, weight] of graph[node] || []) {
      distances[next] = Math.min(distances[next] ?? Infinity, distances[node] + weight);
    }
  }
  return distances;
}`, "O(V^2 + E) in this simple implementation.", "O(V)."],
  "bellman-ford": ["Bellman-Ford relaxes every edge repeatedly, so it can handle negative edges and detect negative cycles.", `export function bellmanFord(vertices, edges, start) {
  const distance = Object.fromEntries(vertices.map((vertex) => [vertex, Infinity]));
  distance[start] = 0;
  for (let pass = 1; pass < vertices.length; pass += 1) {
    for (const [from, to, weight] of edges) {
      if (distance[from] !== Infinity && distance[from] + weight < distance[to]) {
        distance[to] = distance[from] + weight;
      }
    }
  }
  const hasNegativeCycle = edges.some(([from, to, weight]) => distance[from] !== Infinity && distance[from] + weight < distance[to]);
  return { distance, hasNegativeCycle };
}`, "O(VE).", "O(V)."],
  "floyd-warshall": ["Floyd-Warshall lets every vertex act as an intermediate stop for every pair of vertices.", `export function floydWarshall(matrix) {
  const dist = matrix.map((row) => [...row]);
  for (let mid = 0; mid < dist.length; mid += 1) {
    for (let from = 0; from < dist.length; from += 1) {
      for (let to = 0; to < dist.length; to += 1) {
        dist[from][to] = Math.min(dist[from][to], dist[from][mid] + dist[mid][to]);
      }
    }
  }
  return dist;
}`, "O(V^3).", "O(V^2)."],
  "topological-sort": ["Topological Sort repeatedly removes zero-indegree vertices from a DAG.", `export function topologicalSort(graph) {
  const indegree = Object.fromEntries(Object.keys(graph).map((node) => [node, 0]));
  for (const edges of Object.values(graph)) for (const next of edges) indegree[next] = (indegree[next] ?? 0) + 1;
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
  return order.length === Object.keys(indegree).length ? order : null;
}`, "O(V + E).", "O(V)."],
  "union-find": ["Union Find keeps components as parent trees and compresses paths during lookup.", `export function unionFind(size, operations) {
  const parent = Array.from({ length: size }, (_, index) => index);
  const rank = Array(size).fill(0);
  const find = (node) => parent[node] === node ? node : (parent[node] = find(parent[node]));
  const unite = (a, b) => {
    let rootA = find(a);
    let rootB = find(b);
    if (rootA === rootB) return false;
    if (rank[rootA] < rank[rootB]) [rootA, rootB] = [rootB, rootA];
    parent[rootB] = rootA;
    if (rank[rootA] === rank[rootB]) rank[rootA] += 1;
    return true;
  };
  return operations.map(([a, b]) => unite(a, b));
}`, "Nearly O(1) amortized per operation.", "O(V)."],
  kruskal: ["Kruskal’s Algorithm sorts edges and uses Union Find to avoid cycles while building an MST.", `export function kruskal(vertexCount, edges) {
  const parent = Array.from({ length: vertexCount }, (_, index) => index);
  const find = (node) => parent[node] === node ? node : (parent[node] = find(parent[node]));
  const unite = (a, b) => {
    const rootA = find(a);
    const rootB = find(b);
    if (rootA === rootB) return false;
    parent[rootB] = rootA;
    return true;
  };
  const mst = [];
  for (const edge of [...edges].sort((a, b) => a[2] - b[2])) {
    if (unite(edge[0], edge[1])) mst.push(edge);
  }
  return mst;
}`, "O(E log E).", "O(V)."],
  prim: ["Prim’s Algorithm grows a minimum spanning tree by repeatedly adding the cheapest edge leaving the current tree.", `export function prim(graph, start) {
  const visited = new Set([start]);
  const mst = [];
  while (visited.size < Object.keys(graph).length) {
    let best = null;
    for (const from of visited) {
      for (const [to, weight] of graph[from] || []) {
        if (!visited.has(to) && (!best || weight < best[2])) best = [from, to, weight];
      }
    }
    if (!best) break;
    mst.push(best);
    visited.add(best[1]);
  }
  return mst;
}`, "O(VE) in this simple edge-scanning version.", "O(V)."],
  "cycle-detection-undirected": ["Undirected cycle detection tracks each vertex's parent so the edge back to the parent is not mistaken for a cycle.", `export function cycleDetectionUndirected(graph) {
  const visited = new Set();
  function visit(node, parent) {
    visited.add(node);
    for (const next of graph[node] || []) {
      if (!visited.has(next) && visit(next, node)) return true;
      if (visited.has(next) && next !== parent) return true;
    }
    return false;
  }
  return Object.keys(graph).some((node) => !visited.has(node) && visit(node, null));
}`, "O(V + E).", "O(V)."],
  "cycle-detection-directed": ["Directed cycle detection uses a recursion stack to detect edges back into the active DFS path.", `export function cycleDetectionDirected(graph) {
  const visited = new Set();
  const active = new Set();
  function visit(node) {
    if (active.has(node)) return true;
    if (visited.has(node)) return false;
    visited.add(node);
    active.add(node);
    for (const next of graph[node] || []) if (visit(next)) return true;
    active.delete(node);
    return false;
  }
  return Object.keys(graph).some((node) => visit(node));
}`, "O(V + E).", "O(V)."],
  kosaraju: ["Kosaraju’s Algorithm finds strongly connected components with one DFS order pass and one reversed-graph pass.", `export function kosaraju(graph) {
  const visited = new Set();
  const order = [];
  function dfs(node) {
    visited.add(node);
    for (const next of graph[node] || []) if (!visited.has(next)) dfs(next);
    order.push(node);
  }
  Object.keys(graph).forEach((node) => { if (!visited.has(node)) dfs(node); });
  const reversed = {};
  for (const [node, edges] of Object.entries(graph)) {
    reversed[node] ||= [];
    for (const next of edges) {
      reversed[next] ||= [];
      reversed[next].push(node);
    }
  }
  visited.clear();
  const components = [];
  function collect(node, component) {
    visited.add(node);
    component.push(node);
    for (const next of reversed[node] || []) if (!visited.has(next)) collect(next, component);
  }
  while (order.length) {
    const node = order.pop();
    if (visited.has(node)) continue;
    const component = [];
    collect(node, component);
    components.push(component);
  }
  return components;
}`, "O(V + E).", "O(V + E)."],
  tarjan: ["Tarjan’s Algorithm uses discovery indices and low-link values to emit strongly connected components in one DFS.", `export function tarjan(graph) {
  let index = 0;
  const stack = [];
  const onStack = new Set();
  const indices = {};
  const low = {};
  const components = [];
  function strongConnect(node) {
    indices[node] = low[node] = index++;
    stack.push(node);
    onStack.add(node);
    for (const next of graph[node] || []) {
      if (indices[next] === undefined) {
        strongConnect(next);
        low[node] = Math.min(low[node], low[next]);
      } else if (onStack.has(next)) low[node] = Math.min(low[node], indices[next]);
    }
    if (low[node] === indices[node]) {
      const component = [];
      let current;
      do {
        current = stack.pop();
        onStack.delete(current);
        component.push(current);
      } while (current !== node);
      components.push(component);
    }
  }
  Object.keys(graph).forEach((node) => { if (indices[node] === undefined) strongConnect(node); });
  return components;
}`, "O(V + E).", "O(V)."],
};

for (const [id, [concept, code, time, space]] of Object.entries(graphSpecs)) {
  implementations[id] = {
    concept,
    logic: `${id} maintains graph-specific state and updates it through the algorithm's own vertex or edge transition.`,
    transition: "Consume the next vertex or edge, update graph state, and preserve the graph invariant.",
    insight: "The code keeps visited, distance, parent, indegree, or component state explicit so it is not confused with another graph routine.",
    example: "Use this graph routine when the problem's required result matches its traversal, shortest path, ordering, or connectivity invariant.",
    when: "Use it when the graph input and required output match this algorithm's invariant.",
    trick: "Graph algorithms are state machines: pick the right frontier and update only that state.",
    variables: [["graph input", "Vertices, edges, weights, or adjacency lists."], ["graph state", "Visited, distance, parent, indegree, or component state."], ["graph result", "Traversal order, shortest paths, MST edges, SCCs, or cycle status."], ["work remains", "Continue while vertices, edges, or frontier items remain."]],
    steps: [["Initialize graph state", "Create the state this graph algorithm owns."], ["Choose next work item", "Pick the next vertex or edge according to the invariant."], ["Update state", "Relax, visit, union, or decrement state."], ["Return graph result", "Return the final graph-specific result."]],
    complexity: { time, space },
    code,
  };
}

const metaById = new Map();
for (const metaPath of findMetaFiles(algorithmsRoot)) {
  const meta = JSON.parse(readFileSync(metaPath, "utf8"));
  metaById.set(meta.id, { meta, dir: path.dirname(metaPath) });
}

let updated = 0;
for (const [id, spec] of Object.entries(implementations)) {
  const item = metaById.get(id);
  if (!item) continue;
  const dataPath = path.join(item.dir, "data.js");
  const codePath = path.join(item.dir, "code", "solution.js");
  const data = readPageData(dataPath);
  Object.assign(data, pagePatch(item.meta.title, spec));
  writePageData(dataPath, data);
  writeFileSync(codePath, `// SPECIFIC ALGORITHM SOLUTION\n// ${item.meta.title}\n// Route: ${item.meta.route}\n\n${spec.code}\n`, "utf8");
  updated += 1;
}

console.log(`Updated ${updated} specific algorithm pages.`);
