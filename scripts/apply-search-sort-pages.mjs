import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const algorithmsRoot = path.join(root, "src", "algorithms");

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

function writeSolution(category, slug, filename, code) {
  writeFileSync(
    path.join(algorithmsRoot, category, slug, "code", filename),
    `${code.trim()}\n`,
    "utf8",
  );
}

function codeLine(source, needle, fallback = 1) {
  const lines = source.trim().split("\n");
  const index = lines.findIndex((line) => line.includes(needle));
  return index === -1 ? fallback : index + 1;
}

function pagePatch(spec) {
  return {
    meaning: `${spec.title} is taught here with its own input shape, state, transition, code trace, and stop condition.`,
    problem: spec.problem,
    concept: spec.concept,
    logicSummary: spec.logicSummary,
    transitionSummary: spec.transitionSummary,
    codeInsight: spec.codeInsight,
    realLifeExample: spec.realLifeExample,
    whenToUse: spec.whenToUse,
    memoryTrick: spec.memoryTrick,
    visualizerCaption: spec.visualizerCaption,
    logicSteps: spec.logicSteps,
    variables: spec.variables,
    dryRun: spec.dryRun,
    runnerInput: spec.runnerInput,
    animation: spec.animation,
    complexity: spec.complexity,
    quiz: {
      question: spec.quizQuestion,
      options: [
        { key: "A", text: spec.correctOption, correct: true },
        { key: "B", text: spec.wrongOptionOne, correct: false },
        { key: "C", text: spec.wrongOptionTwo, correct: false },
      ],
      correctText: `Correct. ${spec.title} works because that state and transition match the algorithm.`,
      incorrectText: `Not quite. ${spec.title} needs its own state and stop condition instead of borrowed page logic.`,
    },
  };
}

function arrayAnimation(spec, values, steps) {
  return {
    type: "array-flow",
    static: true,
    title: `${spec.title} trace`,
    ruleLabel: spec.animationRuleLabel,
    rule: spec.transitionSummary,
    values,
    steps: steps.map((step, index) => ({
      phase: step.phase,
      title: step.title,
      note: step.note,
      ruleLabel: spec.animationRuleLabel,
      rule: step.rule || spec.transitionSummary,
      activeIndices: step.activeIndices || [Math.min(index, values.length - 1)],
      sortedIndices: step.sortedIndices || [],
      mutedIndices: step.mutedIndices || [],
      window: step.window || [0, values.length - 1],
      primaryLabel: step.phase,
      secondaryLabel: step.secondaryLabel || spec.transitionSummary,
    })),
  };
}

function searchSpec({
  slug,
  title,
  problem,
  concept,
  logicSummary,
  transitionSummary,
  codeInsight,
  realLifeExample,
  whenToUse,
  memoryTrick,
  variables,
  dryRun,
  runnerInput,
  animationValues,
  animationSteps,
  complexity,
  js,
  cpp,
}) {
  return {
    category: "searching",
    slug,
    title,
    problem,
    concept,
    logicSummary,
    transitionSummary,
    codeInsight,
    realLifeExample,
    whenToUse,
    memoryTrick,
    visualizerCaption: `${title} is shown with the exact boundary, probe, or scan state used by the code.`,
    logicSteps: dryRun.map(({ title: stepTitle, note }) => ({ title: stepTitle, text: note })),
    variables,
    dryRun,
    runnerInput,
    animationRuleLabel: "Search invariant",
    animation: arrayAnimation({ title, transitionSummary, animationRuleLabel: "Search invariant" }, animationValues, animationSteps),
    complexity,
    quizQuestion: `Which state keeps ${title} correct?`,
    correctOption: "Use the page's own search boundary or scan state and update it only through the listed transition.",
    wrongOptionOne: "Reuse another search algorithm's comparison rule without checking the invariant.",
    wrongOptionTwo: "Stop before the algorithm-specific boundary or scan condition is resolved.",
    js,
    cpp,
  };
}

function sortSpec({
  slug,
  title,
  problem,
  concept,
  logicSummary,
  transitionSummary,
  codeInsight,
  realLifeExample,
  whenToUse,
  memoryTrick,
  variables,
  dryRun,
  animationValues,
  animationSteps,
  complexity,
  js,
  cpp,
  runnerInput = [[5, 1, 4, 2, 8]],
}) {
  return {
    category: "sorting",
    slug,
    title,
    problem,
    concept,
    logicSummary,
    transitionSummary,
    codeInsight,
    realLifeExample,
    whenToUse,
    memoryTrick,
    visualizerCaption: `${title} is shown with the actual sorted/unsorted state that its code maintains.`,
    logicSteps: dryRun.map(({ title: stepTitle, note }) => ({ title: stepTitle, text: note })),
    variables,
    dryRun,
    runnerInput,
    animationRuleLabel: "Sorting invariant",
    animation: arrayAnimation({ title, transitionSummary, animationRuleLabel: "Sorting invariant" }, animationValues, animationSteps),
    complexity,
    quizQuestion: `Which state keeps ${title} correct?`,
    correctOption: "Track the algorithm's own sorted region, partition, bucket, count, heap, or digit state.",
    wrongOptionOne: "Use one generic sorted-array story for every sorting algorithm.",
    wrongOptionTwo: "Move values without preserving the algorithm's stated invariant.",
    js,
    cpp,
  };
}

const searchPages = [
  searchSpec({
    slug: "linear-search",
    title: "Linear Search",
    problem: "Find the first index whose value equals the target in an unsorted array.",
    concept: "Linear Search checks each value from left to right because no ordering rule lets it skip positions.",
    logicSummary: "Start at index 0, compare the current value with target, and advance one position after each miss.",
    transitionSummary: "A failed comparison increments the index; a match returns immediately.",
    codeInsight: "The loop is intentionally simple: every earlier value has been proven not equal before the index moves right.",
    realLifeExample: "Use it for small or unsorted lists such as scanning recent actions, names, or command history.",
    whenToUse: "Use Linear Search when the data is unsorted or sorting would cost more than one scan.",
    memoryTrick: "Linear search asks one item at a time: are you the target?",
    variables: [
      { name: "array, target", purpose: "Input values and the value to find." },
      { name: "index", purpose: "Current position being compared." },
      { name: "answer", purpose: "First matching index, or -1 if no value matches." },
      { name: "index < array.length", purpose: "The scan continues while unchecked items remain." },
    ],
    dryRun: [
      { label: "Index 0", title: "Compare 4", note: "4 is not the target 9, so the scan moves right.", activeLine: 3, codeInsight: "The for-loop owns the scan position." },
      { label: "Index 1", title: "Compare 2", note: "2 is also a miss.", activeLine: 4, codeInsight: "Only equality can stop the loop early." },
      { label: "Index 2", title: "Compare 9", note: "9 matches the target, so return index 2.", activeLine: 4, codeInsight: "The first match returns immediately." },
      { label: "Done", title: "Return result", note: "No later positions are inspected after the first match.", activeLine: 4, codeInsight: "The answer is the first matching index." },
    ],
    runnerInput: [[4, 2, 9, 7, 9], 9],
    animationValues: [4, 2, 9, 7, 9],
    animationSteps: [
      { phase: "index = 0", title: "Check 4", note: "4 != 9.", activeIndices: [0], window: [0, 4] },
      { phase: "index = 1", title: "Check 2", note: "2 != 9.", activeIndices: [1], mutedIndices: [0], window: [0, 4] },
      { phase: "index = 2", title: "Found 9", note: "Return the first matching index.", activeIndices: [2], mutedIndices: [0, 1], sortedIndices: [2], window: [0, 4] },
      { phase: "return 2", title: "Stop at first match", note: "Later values do not affect first occurrence.", activeIndices: [2], mutedIndices: [0, 1, 3, 4], sortedIndices: [2], window: [2, 2] },
    ],
    complexity: { time: "O(n).", space: "O(1)." },
    js: `export function linearSearch(array, target) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === target) return index;
  }
  return -1;
}`,
    cpp: `#include <vector>
using namespace std;

int linearSearch(const vector<int>& values, int target) {
    for (int index = 0; index < static_cast<int>(values.size()); index += 1) {
        if (values[index] == target) return index;
    }
    return -1;
}`,
  }),
  searchSpec({
    slug: "binary-search",
    title: "Binary Search",
    problem: "Find a target inside a sorted array by repeatedly halving the candidate range.",
    concept: "Binary Search relies on sorted order: one midpoint comparison proves an entire half impossible.",
    logicSummary: "Keep low and high around the remaining range, test mid, and discard the half that cannot contain target.",
    transitionSummary: "If array[mid] is too small move low to mid + 1; if too large move high to mid - 1; equality returns mid.",
    codeInsight: "Every branch shrinks the window, so the loop cannot repeat the same mid forever.",
    realLifeExample: "Use it for sorted lookup tables, dictionary pages, IDs, timestamps, and monotonic predicates.",
    whenToUse: "Use Binary Search only when the array is sorted or the predicate changes direction once.",
    memoryTrick: "Middle decides which half survives.",
    variables: [
      { name: "array, target", purpose: "Sorted values and the value to locate." },
      { name: "low, high", purpose: "Inclusive candidate range." },
      { name: "mid", purpose: "Probe index in the current range." },
      { name: "low <= high", purpose: "The loop runs while candidates remain." },
    ],
    dryRun: [
      { label: "Full range", title: "low = 0, high = 6", note: "The target 13 can be anywhere in the sorted range.", activeLine: 2, codeInsight: "low and high define the inclusive search window." },
      { label: "mid = 3", title: "Compare 7", note: "7 is smaller than 13, so the left half cannot contain 13.", activeLine: 5, codeInsight: "mid is computed from the current window." },
      { label: "Right half", title: "Move low to 4", note: "Only indices 4 through 6 remain.", activeLine: 7, codeInsight: "low = mid + 1 discards mid and everything left of it." },
      { label: "Found", title: "Compare 13", note: "The new midpoint equals target, so return its index.", activeLine: 6, codeInsight: "Equality is the only successful stop condition." },
    ],
    runnerInput: [[1, 3, 5, 7, 9, 13, 15], 13],
    animationValues: [1, 3, 5, 7, 9, 13, 15],
    animationSteps: [
      { phase: "[0, 6]", title: "Start full range", note: "Every index is a candidate.", activeIndices: [3], window: [0, 6] },
      { phase: "mid = 3", title: "7 is too small", note: "Discard indices 0 through 3.", activeIndices: [3], mutedIndices: [0, 1, 2, 3], window: [0, 6] },
      { phase: "[4, 6]", title: "Search right half", note: "The next midpoint is index 5.", activeIndices: [5], mutedIndices: [0, 1, 2, 3], window: [4, 6] },
      { phase: "return 5", title: "13 found", note: "array[5] equals the target.", activeIndices: [5], sortedIndices: [5], mutedIndices: [0, 1, 2, 3, 4, 6], window: [5, 5] },
    ],
    complexity: { time: "O(log n).", space: "O(1)." },
    js: `export function binarySearch(array, target) {
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
    cpp: `#include <vector>
using namespace std;

int binarySearch(const vector<int>& values, int target) {
    int low = 0;
    int high = static_cast<int>(values.size()) - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (values[mid] == target) return mid;
        if (values[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}`,
  }),
  searchSpec({
    slug: "lower-bound",
    title: "Lower Bound",
    problem: "Find the first sorted position whose value is greater than or equal to target.",
    concept: "Lower Bound keeps the first possible answer inside a half-open range until low and high meet.",
    logicSummary: "Search [low, high), discard values strictly less than target, and keep mid when it may be the answer.",
    transitionSummary: "array[mid] < target moves low to mid + 1; otherwise high becomes mid to preserve that candidate.",
    codeInsight: "The key detail is high = mid, not mid - 1, because mid may already be the first valid index.",
    realLifeExample: "Use it for insertion points, first true predicates, and counting duplicates with upper bound.",
    whenToUse: "Use Lower Bound when you need the first value not less than target.",
    memoryTrick: "Lower bound keeps equals; it only throws away values that are too small.",
    variables: [
      { name: "array, target", purpose: "Sorted values and boundary target." },
      { name: "low, high", purpose: "Half-open candidate range [low, high)." },
      { name: "mid", purpose: "Candidate tested during each loop." },
      { name: "low < high", purpose: "Stop when one insertion point remains." },
    ],
    dryRun: [
      { label: "[0, 6)", title: "Open half range", note: "The answer is somewhere before high.", activeLine: 2, codeInsight: "high starts at array.length because insertion can be after the last value." },
      { label: "mid = 3", title: "Value 5 is not less than 5", note: "Keep mid by moving high to 3.", activeLine: 7, codeInsight: "The candidate remains in the range." },
      { label: "mid = 1", title: "Value 2 is too small", note: "Move low to 2.", activeLine: 6, codeInsight: "Everything at or before mid is too small." },
      { label: "return 2", title: "First 5", note: "low and high meet at the first valid index.", activeLine: 9, codeInsight: "low is the lower-bound insertion point." },
    ],
    runnerInput: [[1, 2, 5, 5, 9, 12], 5],
    animationValues: [1, 2, 5, 5, 9, 12],
    animationSteps: [
      { phase: "[0, 6)", title: "Start full insertion range", note: "Any position from 0 to 6 can be the boundary.", activeIndices: [3], window: [0, 5] },
      { phase: "high = 3", title: "5 can be the answer", note: "Keep index 3 and all earlier possible answers.", activeIndices: [3], mutedIndices: [4, 5], window: [0, 3] },
      { phase: "low = 2", title: "2 is too small", note: "Discard indices 0 and 1.", activeIndices: [1], mutedIndices: [0, 1, 4, 5], window: [2, 3] },
      { phase: "return 2", title: "First valid index", note: "Index 2 is the first value >= 5.", activeIndices: [2], sortedIndices: [2], mutedIndices: [0, 1, 3, 4, 5], window: [2, 2] },
    ],
    complexity: { time: "O(log n).", space: "O(1)." },
    js: `export function lowerBound(array, target) {
  let low = 0;
  let high = array.length;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (array[mid] < target) low = mid + 1;
    else high = mid;
  }
  return low;
}`,
    cpp: `#include <vector>
using namespace std;

int lowerBound(const vector<int>& values, int target) {
    int low = 0;
    int high = static_cast<int>(values.size());
    while (low < high) {
        int mid = low + (high - low) / 2;
        if (values[mid] < target) low = mid + 1;
        else high = mid;
    }
    return low;
}`,
  }),
  searchSpec({
    slug: "upper-bound",
    title: "Upper Bound",
    problem: "Find the first sorted position whose value is strictly greater than target.",
    concept: "Upper Bound discards every value less than or equal to target, including duplicates equal to target.",
    logicSummary: "Search [low, high), move past mid when array[mid] <= target, and keep mid only when it is greater.",
    transitionSummary: "array[mid] <= target moves low to mid + 1; otherwise high becomes mid.",
    codeInsight: "The comparison is <=, which is why upper bound returns the slot after the final duplicate.",
    realLifeExample: "Use it to count equal values: upperBound(x) - lowerBound(x).",
    whenToUse: "Use Upper Bound when you need the first value after all target-equal values.",
    memoryTrick: "Upper bound skips equals.",
    variables: [
      { name: "array, target", purpose: "Sorted values and boundary target." },
      { name: "low, high", purpose: "Half-open candidate range [low, high)." },
      { name: "mid", purpose: "Index being tested for first greater value." },
      { name: "low < high", purpose: "Stop when one boundary remains." },
    ],
    dryRun: [
      { label: "[0, 6)", title: "Open half range", note: "Search for the first value greater than 5.", activeLine: 2, codeInsight: "high allows insertion after the last element." },
      { label: "mid = 3", title: "Value 5 is skipped", note: "5 <= target, so move low to 4.", activeLine: 6, codeInsight: "Equals are not valid upper-bound answers." },
      { label: "mid = 5", title: "Value 12 is greater", note: "Keep index 5 by setting high to 5.", activeLine: 7, codeInsight: "A greater value may be the first greater value." },
      { label: "return 4", title: "First greater index", note: "Index 4 holds 9, the first value greater than 5.", activeLine: 9, codeInsight: "low is the upper-bound insertion point." },
    ],
    runnerInput: [[1, 2, 5, 5, 9, 12], 5],
    animationValues: [1, 2, 5, 5, 9, 12],
    animationSteps: [
      { phase: "[0, 6)", title: "Start full insertion range", note: "The answer is after the target duplicates.", activeIndices: [3], window: [0, 5] },
      { phase: "low = 4", title: "Skip equal 5", note: "Index 3 cannot be the first greater value.", activeIndices: [3], mutedIndices: [0, 1, 2, 3], window: [4, 5] },
      { phase: "high = 5", title: "12 is greater", note: "Keep index 5 as a candidate.", activeIndices: [5], mutedIndices: [0, 1, 2, 3], window: [4, 5] },
      { phase: "return 4", title: "9 is first greater", note: "Index 4 is the upper bound.", activeIndices: [4], sortedIndices: [4], mutedIndices: [0, 1, 2, 3, 5], window: [4, 4] },
    ],
    complexity: { time: "O(log n).", space: "O(1)." },
    js: `export function upperBound(array, target) {
  let low = 0;
  let high = array.length;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (array[mid] <= target) low = mid + 1;
    else high = mid;
  }
  return low;
}`,
    cpp: `#include <vector>
using namespace std;

int upperBound(const vector<int>& values, int target) {
    int low = 0;
    int high = static_cast<int>(values.size());
    while (low < high) {
        int mid = low + (high - low) / 2;
        if (values[mid] <= target) low = mid + 1;
        else high = mid;
    }
    return low;
}`,
  }),
  searchSpec({
    slug: "search-in-rotated-sorted-array",
    title: "Search in Rotated Sorted Array",
    problem: "Find a target in a sorted array that was rotated at an unknown pivot.",
    concept: "The array is not globally sorted, but every step has at least one sorted half that can be tested.",
    logicSummary: "Compare mid, identify the sorted side, and keep only the side where target can legally fit.",
    transitionSummary: "If the left side is sorted, target either fits there and high moves left, or low moves right; the mirrored rule handles the right side.",
    codeInsight: "The sorted-half check replaces a separate pivot search and keeps the algorithm logarithmic.",
    realLifeExample: "Use it for circularly shifted sorted IDs, rotated logs, or ring-buffer snapshots.",
    whenToUse: "Use this version when values are distinct or duplicate handling is added deliberately.",
    memoryTrick: "One half is sorted; ask if target belongs there.",
    variables: [
      { name: "array, target", purpose: "Rotated sorted values and search target." },
      { name: "low, high, mid", purpose: "Current candidate window and probe." },
      { name: "sorted half", purpose: "The half whose endpoints can be used for range testing." },
      { name: "low <= high", purpose: "Continue while candidate indices remain." },
    ],
    dryRun: [
      { label: "Window", title: "Probe rotated array", note: "mid splits the current window even though the whole array is rotated.", activeLine: 5, codeInsight: "The midpoint is still useful because one side is ordered." },
      { label: "Left sorted", title: "Identify sorted half", note: "array[low] <= array[mid] means the left side is ordered.", activeLine: 7, codeInsight: "Endpoint comparisons are valid only on the sorted half." },
      { label: "Target side", title: "Choose the fitting half", note: "If target is not inside the sorted half, discard that half.", activeLine: 8, codeInsight: "The range test decides low/high, not the rotation point." },
      { label: "Found", title: "Return mid on equality", note: "Equality stops the search regardless of rotation.", activeLine: 6, codeInsight: "A found target has the same stop condition as normal binary search." },
    ],
    runnerInput: [[6, 7, 0, 1, 2, 4, 5], 1],
    animationValues: [6, 7, 0, 1, 2, 4, 5],
    animationSteps: [
      { phase: "[0, 6]", title: "Start at rotated window", note: "The midpoint is index 3.", activeIndices: [3], window: [0, 6] },
      { phase: "mid = 1", title: "Found target", note: "array[3] is 1, so the search can return.", activeIndices: [3], sortedIndices: [3], window: [0, 6] },
      { phase: "sorted side", title: "Left side example", note: "When mid is not target, test which half is sorted.", activeIndices: [0, 1], mutedIndices: [2, 3, 4, 5, 6], window: [0, 1] },
      { phase: "return 3", title: "Target index", note: "The code returns index 3.", activeIndices: [3], sortedIndices: [3], mutedIndices: [0, 1, 2, 4, 5, 6], window: [3, 3] },
    ],
    complexity: { time: "O(log n) for distinct values.", space: "O(1)." },
    js: `export function searchInRotatedSortedArray(array, target) {
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
    cpp: `#include <vector>
using namespace std;

int searchInRotatedSortedArray(const vector<int>& values, int target) {
    int low = 0;
    int high = static_cast<int>(values.size()) - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (values[mid] == target) return mid;
        if (values[low] <= values[mid]) {
            if (values[low] <= target && target < values[mid]) high = mid - 1;
            else low = mid + 1;
        } else {
            if (values[mid] < target && target <= values[high]) low = mid + 1;
            else high = mid - 1;
        }
    }
    return -1;
}`,
  }),
  searchSpec({
    slug: "ternary-search",
    title: "Ternary Search",
    problem: "Find an optimum in a unimodal numeric range by comparing two interior points.",
    concept: "Ternary Search is for functions that rise then fall, or fall then rise, so one third can be discarded each step.",
    logicSummary: "Compute mid1 and mid2, evaluate both, and keep the side that can still contain the peak.",
    transitionSummary: "For a maximum, f(mid1) < f(mid2) discards the left third; otherwise discard the right third.",
    codeInsight: "This is not sorted-array lookup. Its invariant is unimodality of an evaluated function.",
    realLifeExample: "Use it for one-dimensional optimization such as best price, best position, or peak score under a unimodal model.",
    whenToUse: "Use Ternary Search only when the objective is unimodal.",
    memoryTrick: "Two probes tell which third cannot hold the peak.",
    variables: [
      { name: "low, high", purpose: "Current numeric interval." },
      { name: "mid1, mid2", purpose: "Interior probe points." },
      { name: "evaluate", purpose: "Function being optimized." },
      { name: "high - low > precision", purpose: "Continue until the range is accurate enough." },
    ],
    dryRun: [
      { label: "Range", title: "Start [-2, 6]", note: "The peak of the sample parabola lies inside the range.", activeLine: 2, codeInsight: "The loop controls precision, not array indices." },
      { label: "Two probes", title: "Evaluate mid1 and mid2", note: "Two function values reveal which side is worse.", activeLine: 4, codeInsight: "Both probes are needed to compare slope direction." },
      { label: "Discard third", title: "Keep better side", note: "If mid2 is better, the left third cannot contain the maximum.", activeLine: 5, codeInsight: "The comparison depends on maximizing a unimodal function." },
      { label: "Answer", title: "Return range center", note: "The final midpoint approximates the optimum.", activeLine: 8, codeInsight: "The return value is a position, not an array index." },
    ],
    runnerInput: [-2, 6, "(x) => -(x - 2) * (x - 2) + 9", 0.001],
    animationValues: [-2, 0.67, 3.33, 6],
    animationSteps: [
      { phase: "[-2, 6]", title: "Start unimodal range", note: "The peak is somewhere in this interval.", activeIndices: [0, 3], window: [0, 3] },
      { phase: "mid1/mid2", title: "Probe thirds", note: "Evaluate around 0.67 and 3.33.", activeIndices: [1, 2], window: [0, 3] },
      { phase: "discard left", title: "mid2 is better", note: "Move low to mid1.", activeIndices: [1, 2], mutedIndices: [0], window: [1, 3] },
      { phase: "near peak", title: "Converge near 2", note: "Return the center of the final small interval.", activeIndices: [1, 2], sortedIndices: [1, 2], window: [1, 2] },
    ],
    complexity: { time: "O(log((high - low) / precision)).", space: "O(1)." },
    js: `export function ternarySearch(low, high, evaluate, precision = 1e-7) {
  const score = typeof evaluate === "function" ? evaluate : Function("return " + evaluate)();
  while (high - low > precision) {
    const mid1 = low + (high - low) / 3;
    const mid2 = high - (high - low) / 3;
    if (score(mid1) < score(mid2)) low = mid1;
    else high = mid2;
  }
  return (low + high) / 2;
}`,
    cpp: `#include <functional>
using namespace std;

double ternarySearch(double low, double high, const function<double(double)>& evaluate, double precision = 1e-7) {
    while (high - low > precision) {
        double mid1 = low + (high - low) / 3.0;
        double mid2 = high - (high - low) / 3.0;
        if (evaluate(mid1) < evaluate(mid2)) low = mid1;
        else high = mid2;
    }
    return (low + high) / 2.0;
}`,
  }),
];

const sortingPages = [
  sortSpec({
    slug: "bubble-sort",
    title: "Bubble Sort",
    problem: "Sort an array by repeatedly swapping adjacent out-of-order values.",
    concept: "Bubble Sort pushes the largest unsorted value to the end of the unsorted range on every pass.",
    logicSummary: "Scan adjacent pairs, swap when left is greater than right, then shrink the unsorted suffix boundary.",
    transitionSummary: "Each adjacent comparison either swaps a local inversion or leaves the pair as-is; the pass ends with one more final value.",
    codeInsight: "The swapped flag is an early-stop check: a full pass with no swaps proves the array is sorted.",
    realLifeExample: "Use it for teaching adjacent swaps and inversion removal, not for large production sorting.",
    whenToUse: "Use Bubble Sort only for small or educational cases where adjacent-swap behavior matters.",
    memoryTrick: "Big values bubble right one pass at a time.",
    variables: [
      { name: "values", purpose: "Working copy being sorted." },
      { name: "end", purpose: "Last unsorted index in the current pass." },
      { name: "index", purpose: "Left index of the adjacent pair." },
      { name: "swapped", purpose: "Whether the current pass changed the array." },
    ],
    dryRun: [
      { label: "Pass 1", title: "Compare 5 and 1", note: "5 > 1, so swap the adjacent pair.", activeLine: 6, codeInsight: "Only adjacent inversions are swapped." },
      { label: "Pass 1", title: "Bubble 5 right", note: "5 continues moving until it reaches the end of the pass.", activeLine: 7, codeInsight: "The largest remaining value lands at index end." },
      { label: "Shrink end", title: "Lock final value", note: "The last slot is sorted and excluded from the next pass.", activeLine: 3, codeInsight: "end moves left after each outer pass." },
      { label: "No swaps", title: "Stop early", note: "A pass without swaps means every adjacent pair is ordered.", activeLine: 10, codeInsight: "swapped prevents unnecessary extra passes." },
    ],
    animationValues: [5, 1, 4, 2, 8],
    animationSteps: [
      { phase: "compare", title: "5 and 1 are inverted", note: "Swap the adjacent pair.", activeIndices: [0, 1], window: [0, 4] },
      { phase: "bubble", title: "5 moves right", note: "Continue adjacent comparisons.", activeIndices: [1, 2], window: [0, 4] },
      { phase: "lock end", title: "8 is final", note: "The largest value in the pass is fixed.", activeIndices: [4], sortedIndices: [4], window: [0, 3] },
      { phase: "finish", title: "No inversions remain", note: "The sorted suffix grows until all values are ordered.", activeIndices: [0, 1, 2, 3], sortedIndices: [0, 1, 2, 3, 4], window: [0, 4] },
    ],
    complexity: { time: "O(n^2) worst case, O(n) if already sorted.", space: "O(1)." },
    js: `export function bubbleSort(array) {
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
}`,
    cpp: `#include <vector>
#include <algorithm>
using namespace std;

vector<int> bubbleSort(vector<int> values) {
    for (int end = static_cast<int>(values.size()) - 1; end > 0; end -= 1) {
        bool swapped = false;
        for (int index = 0; index < end; index += 1) {
            if (values[index] > values[index + 1]) {
                swap(values[index], values[index + 1]);
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return values;
}`,
  }),
  sortSpec({
    slug: "selection-sort",
    title: "Selection Sort",
    problem: "Sort an array by repeatedly selecting the smallest value from the unsorted suffix.",
    concept: "Selection Sort grows a sorted prefix; each pass chooses the smallest remaining item and swaps it into the next prefix slot.",
    logicSummary: "For each start index, scan the suffix for the minimum value, then swap it into start.",
    transitionSummary: "The minimum candidate changes during the suffix scan; after the scan one swap extends the sorted prefix.",
    codeInsight: "Unlike bubble sort, selection sort performs at most one swap per outer pass.",
    realLifeExample: "Use it when swaps are expensive but comparisons are acceptable, or when teaching prefix invariants.",
    whenToUse: "Use Selection Sort for small arrays or educational traces of minimum selection.",
    memoryTrick: "Pick the smallest remaining card and place it next.",
    variables: [
      { name: "start", purpose: "Next sorted-prefix position." },
      { name: "minIndex", purpose: "Smallest value seen in the suffix scan." },
      { name: "index", purpose: "Current suffix scanner." },
      { name: "values", purpose: "Working array." },
    ],
    dryRun: [
      { label: "start = 0", title: "Scan suffix", note: "Find the smallest value among all positions.", activeLine: 4, codeInsight: "minIndex stores the best candidate, not the final answer yet." },
      { label: "min = 1", title: "Swap into prefix", note: "Move 1 into index 0.", activeLine: 8, codeInsight: "Only one swap happens after the full scan." },
      { label: "start = 1", title: "Find next minimum", note: "The sorted prefix is protected while the suffix is scanned.", activeLine: 4, codeInsight: "start separates sorted and unsorted regions." },
      { label: "Done", title: "Prefix covers array", note: "Every position has received the smallest remaining value.", activeLine: 10, codeInsight: "The invariant is sorted prefix plus unsorted suffix." },
    ],
    animationValues: [5, 1, 4, 2, 8],
    animationSteps: [
      { phase: "start 0", title: "Scan for minimum", note: "1 is the minimum candidate.", activeIndices: [0, 1], window: [0, 4] },
      { phase: "swap", title: "Place 1 first", note: "The sorted prefix now has one value.", activeIndices: [0, 1], sortedIndices: [0], window: [1, 4] },
      { phase: "start 1", title: "Find 2", note: "Scan the remaining suffix.", activeIndices: [1, 3], sortedIndices: [0], window: [1, 4] },
      { phase: "sorted", title: "Prefix complete", note: "Each pass fixes exactly one position.", activeIndices: [4], sortedIndices: [0, 1, 2, 3, 4], window: [0, 4] },
    ],
    complexity: { time: "O(n^2).", space: "O(1)." },
    js: `export function selectionSort(array) {
  const values = [...array];
  for (let start = 0; start < values.length; start += 1) {
    let minIndex = start;
    for (let index = start + 1; index < values.length; index += 1) {
      if (values[index] < values[minIndex]) minIndex = index;
    }
    [values[start], values[minIndex]] = [values[minIndex], values[start]];
  }
  return values;
}`,
    cpp: `#include <vector>
#include <algorithm>
using namespace std;

vector<int> selectionSort(vector<int> values) {
    for (int start = 0; start < static_cast<int>(values.size()); start += 1) {
        int minIndex = start;
        for (int index = start + 1; index < static_cast<int>(values.size()); index += 1) {
            if (values[index] < values[minIndex]) minIndex = index;
        }
        swap(values[start], values[minIndex]);
    }
    return values;
}`,
  }),
  sortSpec({
    slug: "insertion-sort",
    title: "Insertion Sort",
    problem: "Sort an array by inserting each new value into an already sorted prefix.",
    concept: "Insertion Sort keeps everything left of the current index sorted, shifts larger values right, and inserts the current value into the gap.",
    logicSummary: "Take the current value, scan left through the sorted prefix, shift larger values right, and place current after the last smaller value.",
    transitionSummary: "Each shift opens one slot to the left until the correct insertion position is found.",
    codeInsight: "The current value is stored before shifting so it is not overwritten while values move right.",
    realLifeExample: "Use it for nearly sorted data, tiny arrays, and the base case inside hybrid sorting algorithms.",
    whenToUse: "Use Insertion Sort when data is small or almost sorted.",
    memoryTrick: "Insert the next card into the sorted hand.",
    variables: [
      { name: "index", purpose: "First item outside the sorted prefix." },
      { name: "current", purpose: "Value being inserted." },
      { name: "scan", purpose: "Pointer moving left through larger prefix values." },
      { name: "values", purpose: "Working array." },
    ],
    dryRun: [
      { label: "index = 1", title: "Pick current value", note: "1 must be inserted into prefix [5].", activeLine: 4, codeInsight: "current protects the value while the prefix shifts." },
      { label: "shift", title: "Move 5 right", note: "5 is larger than 1, so shift it one slot right.", activeLine: 7, codeInsight: "The while condition controls all prefix shifts." },
      { label: "insert", title: "Place 1", note: "The gap after scan receives current.", activeLine: 10, codeInsight: "scan + 1 is the insertion point." },
      { label: "grow prefix", title: "Repeat for next index", note: "The sorted prefix grows one value at a time.", activeLine: 3, codeInsight: "The outer loop advances the prefix boundary." },
    ],
    animationValues: [5, 1, 4, 2, 8],
    animationSteps: [
      { phase: "current = 1", title: "Pick insertion value", note: "Insert 1 into [5].", activeIndices: [1], sortedIndices: [0], window: [0, 1] },
      { phase: "shift 5", title: "Open a gap", note: "5 moves right.", activeIndices: [0, 1], sortedIndices: [], window: [0, 1] },
      { phase: "place 1", title: "Prefix sorted", note: "[1, 5] is sorted.", activeIndices: [0], sortedIndices: [0, 1], window: [0, 1] },
      { phase: "finish", title: "All insertions complete", note: "Every item has entered the prefix.", activeIndices: [4], sortedIndices: [0, 1, 2, 3, 4], window: [0, 4] },
    ],
    complexity: { time: "O(n^2) worst case, O(n) when nearly sorted.", space: "O(1)." },
    js: `export function insertionSort(array) {
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
}`,
    cpp: `#include <vector>
using namespace std;

vector<int> insertionSort(vector<int> values) {
    for (int index = 1; index < static_cast<int>(values.size()); index += 1) {
        int current = values[index];
        int scan = index - 1;
        while (scan >= 0 && values[scan] > current) {
            values[scan + 1] = values[scan];
            scan -= 1;
        }
        values[scan + 1] = current;
    }
    return values;
}`,
  }),
  sortSpec({
    slug: "merge-sort",
    title: "Merge Sort",
    problem: "Sort an array by recursively sorting halves and merging two sorted lists.",
    concept: "Merge Sort divides until single-item arrays, then merges sorted halves by repeatedly taking the smaller front value.",
    logicSummary: "Split the array around mid, recursively sort both halves, then merge the two sorted results.",
    transitionSummary: "During merge, compare the left and right front values and append the smaller one to output.",
    codeInsight: "The merge function is where ordering happens; recursion only creates sorted halves for merge to combine.",
    realLifeExample: "Use it for stable sorting and linked-list sorting where predictable O(n log n) matters.",
    whenToUse: "Use Merge Sort when stable O(n log n) sorting is preferred and O(n) extra space is acceptable.",
    memoryTrick: "Split down, merge up.",
    variables: [
      { name: "array", purpose: "Current range being sorted." },
      { name: "mid", purpose: "Split point between halves." },
      { name: "left, right", purpose: "Sorted halves waiting to merge." },
      { name: "result", purpose: "Merged sorted output." },
    ],
    dryRun: [
      { label: "Split", title: "Divide at mid", note: "Break [5,1,4,2] into [5,1] and [4,2].", activeLine: 3, codeInsight: "mid defines the two recursive subproblems." },
      { label: "Base", title: "Single items are sorted", note: "Arrays of length 1 return immediately.", activeLine: 2, codeInsight: "The base case stops recursion." },
      { label: "Merge", title: "Compare fronts", note: "Take the smaller front from left or right.", activeLine: 11, codeInsight: "Only sorted halves make the front comparison valid." },
      { label: "Return", title: "Merged result", note: "Concatenate leftovers after one half is empty.", activeLine: 13, codeInsight: "Remaining values are already ordered inside their half." },
    ],
    animationValues: [5, 1, 4, 2],
    animationSteps: [
      { phase: "split", title: "Divide into halves", note: "[5,1] and [4,2].", activeIndices: [1, 2], window: [0, 3] },
      { phase: "base", title: "Sort tiny halves", note: "Single values are sorted by definition.", activeIndices: [0, 1, 2, 3], window: [0, 3] },
      { phase: "merge", title: "Compare front values", note: "Choose the smaller front for output.", activeIndices: [0, 2], sortedIndices: [1, 3], window: [0, 3] },
      { phase: "return", title: "Merged order", note: "The final array is [1,2,4,5].", activeIndices: [0, 1, 2, 3], sortedIndices: [0, 1, 2, 3], window: [0, 3] },
    ],
    complexity: { time: "O(n log n).", space: "O(n)." },
    runnerInput: [[5, 1, 4, 2]],
    js: `export function mergeSort(array) {
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
}`,
    cpp: `#include <vector>
using namespace std;

vector<int> mergeVectors(const vector<int>& left, const vector<int>& right) {
    vector<int> result;
    int i = 0;
    int j = 0;
    while (i < static_cast<int>(left.size()) && j < static_cast<int>(right.size())) {
        if (left[i] <= right[j]) result.push_back(left[i++]);
        else result.push_back(right[j++]);
    }
    while (i < static_cast<int>(left.size())) result.push_back(left[i++]);
    while (j < static_cast<int>(right.size())) result.push_back(right[j++]);
    return result;
}

vector<int> mergeSort(const vector<int>& values) {
    if (values.size() <= 1) return values;
    int mid = static_cast<int>(values.size()) / 2;
    vector<int> left(values.begin(), values.begin() + mid);
    vector<int> right(values.begin() + mid, values.end());
    return mergeVectors(mergeSort(left), mergeSort(right));
}`,
  }),
  sortSpec({
    slug: "quick-sort",
    title: "Quick Sort",
    problem: "Sort an array by partitioning around a pivot and recursively sorting both sides.",
    concept: "Quick Sort places one pivot in final position, with smaller-or-equal values on the left and larger values on the right.",
    logicSummary: "Choose a pivot, partition the current range, then recursively sort the left and right partitions.",
    transitionSummary: "During partition, each value <= pivot swaps into the smaller region; the final pivot swap fixes the pivot index.",
    codeInsight: "partition returns the pivot's final index, which is excluded from both recursive calls.",
    realLifeExample: "Use quick sort when average-case speed and in-place partitioning are more important than stability.",
    whenToUse: "Use Quick Sort for general in-memory sorting with good pivot strategy.",
    memoryTrick: "Partition first; recurse around the fixed pivot.",
    variables: [
      { name: "low, high", purpose: "Current partition range." },
      { name: "pivot", purpose: "Value used to split the range." },
      { name: "smaller", purpose: "Boundary of values <= pivot." },
      { name: "pivotIndex", purpose: "Final pivot position." },
    ],
    dryRun: [
      { label: "Pivot", title: "Use last value as pivot", note: "8 is the pivot for the first full range.", activeLine: 11, codeInsight: "This implementation chooses values[high]." },
      { label: "Partition", title: "Move smaller values left", note: "Every value <= pivot joins the left partition.", activeLine: 15, codeInsight: "smaller marks the next slot for a small value." },
      { label: "Fix pivot", title: "Swap pivot into place", note: "The pivot lands between smaller and larger values.", activeLine: 20, codeInsight: "The pivot index is final after this swap." },
      { label: "Recurse", title: "Sort both sides", note: "The pivot is excluded from recursive ranges.", activeLine: 7, codeInsight: "Recursive calls work on [low, pivot-1] and [pivot+1, high]." },
    ],
    animationValues: [5, 1, 4, 2, 8],
    animationSteps: [
      { phase: "pivot 8", title: "Choose pivot", note: "The last value is pivot.", activeIndices: [4], window: [0, 4] },
      { phase: "partition", title: "Move <= pivot left", note: "All values are <= 8 in this pass.", activeIndices: [0, 1, 2, 3], window: [0, 4] },
      { phase: "pivot fixed", title: "8 lands at end", note: "The pivot is in final position.", activeIndices: [4], sortedIndices: [4], window: [0, 3] },
      { phase: "recurse", title: "Sort left side", note: "Repeat partitioning for the left range.", activeIndices: [0, 3], sortedIndices: [4], window: [0, 3] },
    ],
    complexity: { time: "Average O(n log n), worst case O(n^2).", space: "O(log n) average recursion stack." },
    js: `export function quickSort(array) {
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
}`,
    cpp: `#include <vector>
#include <algorithm>
using namespace std;

int partition(vector<int>& values, int low, int high) {
    int pivot = values[high];
    int smaller = low;
    for (int index = low; index < high; index += 1) {
        if (values[index] <= pivot) {
            swap(values[smaller], values[index]);
            smaller += 1;
        }
    }
    swap(values[smaller], values[high]);
    return smaller;
}

void quickSortRange(vector<int>& values, int low, int high) {
    if (low >= high) return;
    int pivotIndex = partition(values, low, high);
    quickSortRange(values, low, pivotIndex - 1);
    quickSortRange(values, pivotIndex + 1, high);
}

vector<int> quickSort(vector<int> values) {
    quickSortRange(values, 0, static_cast<int>(values.size()) - 1);
    return values;
}`,
  }),
  sortSpec({
    slug: "counting-sort",
    title: "Counting Sort",
    problem: "Sort integer values by counting how many times each key appears.",
    concept: "Counting Sort replaces comparisons with frequency counts over a bounded integer range.",
    logicSummary: "Find min/max, count each value by offset, then emit every value in increasing key order.",
    transitionSummary: "Each input value increments exactly one count; output repeats each offset by its count.",
    codeInsight: "The range width controls memory use, so counting sort is good only when the key range is reasonable.",
    realLifeExample: "Use it for grades, ages, bytes, or other bounded integer keys.",
    whenToUse: "Use Counting Sort when values are integers in a small known range.",
    memoryTrick: "Count keys first, write values later.",
    variables: [
      { name: "min, max", purpose: "Bounds of integer key range." },
      { name: "counts", purpose: "Frequency for each value offset." },
      { name: "offset", purpose: "Index mapped back to actual value." },
      { name: "result", purpose: "Sorted output array." },
    ],
    dryRun: [
      { label: "Bounds", title: "Find min and max", note: "The count array covers every key from min to max.", activeLine: 3, codeInsight: "Offsets let the code support negative values too." },
      { label: "Count", title: "Increment frequencies", note: "Every value updates one count slot.", activeLine: 6, codeInsight: "Counting is the main transition." },
      { label: "Emit", title: "Write repeated keys", note: "The output walks counts from low key to high key.", activeLine: 9, codeInsight: "Nested output loops reconstruct sorted order." },
      { label: "Return", title: "Sorted by key order", note: "No pairwise comparisons were needed.", activeLine: 11, codeInsight: "The result is sorted because offsets are visited in order." },
    ],
    animationValues: [4, 2, 2, 8, 3, 3, 1],
    animationSteps: [
      { phase: "range", title: "Find key range", note: "min = 1, max = 8.", activeIndices: [0, 6], window: [0, 6] },
      { phase: "count", title: "Count frequencies", note: "2 and 3 each appear twice.", activeIndices: [1, 2, 4, 5], window: [0, 6] },
      { phase: "emit", title: "Write low to high", note: "Output starts with 1, 2, 2, 3, 3.", activeIndices: [6, 1, 2], sortedIndices: [6, 1, 2], window: [0, 6] },
      { phase: "sorted", title: "All counts emitted", note: "The sorted output is complete.", activeIndices: [0, 1, 2, 3, 4, 5, 6], sortedIndices: [0, 1, 2, 3, 4, 5, 6], window: [0, 6] },
    ],
    complexity: { time: "O(n + k), where k is max - min + 1.", space: "O(k)." },
    runnerInput: [[4, 2, 2, 8, 3, 3, 1]],
    js: `export function countingSort(array) {
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
}`,
    cpp: `#include <vector>
#include <algorithm>
using namespace std;

vector<int> countingSort(const vector<int>& values) {
    if (values.empty()) return {};
    int minValue = *min_element(values.begin(), values.end());
    int maxValue = *max_element(values.begin(), values.end());
    vector<int> counts(maxValue - minValue + 1, 0);
    for (int value : values) counts[value - minValue] += 1;
    vector<int> result;
    for (int offset = 0; offset < static_cast<int>(counts.size()); offset += 1) {
        for (int copy = 0; copy < counts[offset]; copy += 1) result.push_back(offset + minValue);
    }
    return result;
}`,
  }),
  sortSpec({
    slug: "heap-sort",
    title: "Heap Sort",
    problem: "Sort an array by building a max heap and repeatedly extracting the maximum value.",
    concept: "Heap Sort first makes the array obey the max-heap property, then swaps the root into the final suffix and heapifies the reduced heap.",
    logicSummary: "Build a max heap, swap root with the end of the heap, shrink heap size, and sift down the new root.",
    transitionSummary: "Each extraction places one maximum into the sorted suffix and restores heap order in the remaining prefix.",
    codeInsight: "heapify works only inside the current heap size; the sorted suffix is excluded from future heap repairs.",
    realLifeExample: "Use heap sort when in-place O(n log n) sorting is needed without quick sort's worst-case risk.",
    whenToUse: "Use Heap Sort when predictable time and O(1) auxiliary space matter more than stability.",
    memoryTrick: "Max at root, swap to end, repair the heap.",
    variables: [
      { name: "values", purpose: "Array holding both heap prefix and sorted suffix." },
      { name: "size", purpose: "Number of active heap values." },
      { name: "root", purpose: "Node being sifted down." },
      { name: "largest", purpose: "Largest among root and children." },
    ],
    dryRun: [
      { label: "Build heap", title: "Heapify internal nodes", note: "Bottom-up heapify creates a max heap.", activeLine: 3, codeInsight: "The first loop starts at the last parent node." },
      { label: "Extract max", title: "Swap root with end", note: "The maximum moves into its final sorted slot.", activeLine: 5, codeInsight: "Root is always the largest active heap value." },
      { label: "Shrink heap", title: "Exclude sorted suffix", note: "The heap size decreases before the next heapify.", activeLine: 6, codeInsight: "heapify receives end as its active size." },
      { label: "Repair", title: "Sift root down", note: "The remaining prefix becomes a valid max heap again.", activeLine: 17, codeInsight: "Recursive heapify follows the swapped child." },
    ],
    animationValues: [5, 1, 4, 2, 8],
    animationSteps: [
      { phase: "heapify", title: "Build max heap", note: "8 rises to the root.", activeIndices: [0, 4], window: [0, 4] },
      { phase: "extract", title: "Move max to end", note: "Swap root with last heap item.", activeIndices: [0, 4], sortedIndices: [4], window: [0, 3] },
      { phase: "sift", title: "Repair heap prefix", note: "The new root moves down as needed.", activeIndices: [0, 2], sortedIndices: [4], window: [0, 3] },
      { phase: "sorted", title: "Repeat until heap empty", note: "The sorted suffix grows from right to left.", activeIndices: [0], sortedIndices: [0, 1, 2, 3, 4], window: [0, 4] },
    ],
    complexity: { time: "O(n log n).", space: "O(1) auxiliary space." },
    js: `export function heapSort(array) {
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
}`,
    cpp: `#include <vector>
#include <algorithm>
using namespace std;

void heapify(vector<int>& values, int size, int root) {
    int largest = root;
    int left = root * 2 + 1;
    int right = root * 2 + 2;
    if (left < size && values[left] > values[largest]) largest = left;
    if (right < size && values[right] > values[largest]) largest = right;
    if (largest != root) {
        swap(values[root], values[largest]);
        heapify(values, size, largest);
    }
}

vector<int> heapSort(vector<int> values) {
    for (int index = static_cast<int>(values.size()) / 2 - 1; index >= 0; index -= 1) heapify(values, static_cast<int>(values.size()), index);
    for (int end = static_cast<int>(values.size()) - 1; end > 0; end -= 1) {
        swap(values[0], values[end]);
        heapify(values, end, 0);
    }
    return values;
}`,
  }),
  sortSpec({
    slug: "bucket-sort",
    title: "Bucket Sort",
    problem: "Sort values by distributing them into value-range buckets, sorting each bucket, and concatenating buckets.",
    concept: "Bucket Sort uses distribution: values with similar ranges go into the same bucket, and bucket order determines global order.",
    logicSummary: "Find min/max, compute bucket width, place each value into a bucket, sort buckets, and flatten them.",
    transitionSummary: "Each value maps to exactly one bucket based on its numeric range.",
    codeInsight: "Bucket width controls the distribution; bad distribution can make one bucket do most of the work.",
    realLifeExample: "Use it for roughly uniform numeric values such as scores or normalized measurements.",
    whenToUse: "Use Bucket Sort when values are numeric and spread reasonably across known ranges.",
    memoryTrick: "Put values in range bins, sort inside bins, read bins left to right.",
    variables: [
      { name: "bucketCount", purpose: "Number of buckets to distribute into." },
      { name: "min, max, width", purpose: "Range mapping details." },
      { name: "buckets", purpose: "Grouped values by range." },
      { name: "bucketIndex", purpose: "Destination bucket for the current value." },
    ],
    dryRun: [
      { label: "Range", title: "Find min and max", note: "The range determines bucket width.", activeLine: 3, codeInsight: "A value range is required before assigning buckets." },
      { label: "Distribute", title: "Map values to buckets", note: "Each value enters the bucket for its range.", activeLine: 8, codeInsight: "Math.min protects the max value from overflowing the final bucket." },
      { label: "Sort buckets", title: "Order inside each bucket", note: "Small buckets are sorted individually.", activeLine: 11, codeInsight: "The educational implementation uses built-in sort inside buckets." },
      { label: "Flatten", title: "Concatenate bucket order", note: "Lower-range buckets come before higher-range buckets.", activeLine: 11, codeInsight: "Bucket order creates global ordering." },
    ],
    animationValues: [29, 25, 3, 49, 9, 37, 21, 43],
    animationSteps: [
      { phase: "range", title: "Compute buckets", note: "min = 3, max = 49.", activeIndices: [2, 3], window: [0, 7] },
      { phase: "bucket", title: "Place 29", note: "29 maps to a middle bucket.", activeIndices: [0], window: [0, 7] },
      { phase: "sort buckets", title: "Sort inside groups", note: "Each bucket is ordered locally.", activeIndices: [1, 6], sortedIndices: [2, 4], window: [0, 7] },
      { phase: "flatten", title: "Read buckets in order", note: "Concatenation gives sorted output.", activeIndices: [0, 1, 2, 3], sortedIndices: [0, 1, 2, 3, 4, 5, 6, 7], window: [0, 7] },
    ],
    complexity: { time: "Average O(n + k), plus cost to sort bucket contents.", space: "O(n + k)." },
    runnerInput: [[29, 25, 3, 49, 9, 37, 21, 43], 4],
    js: `export function bucketSort(array, bucketCount = Math.max(1, Math.ceil(Math.sqrt(array.length)))) {
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
}`,
    cpp: `#include <vector>
#include <algorithm>
#include <cmath>
using namespace std;

vector<int> bucketSort(const vector<int>& values, int bucketCount) {
    if (values.size() <= 1) return values;
    int minValue = *min_element(values.begin(), values.end());
    int maxValue = *max_element(values.begin(), values.end());
    double width = static_cast<double>(maxValue - minValue + 1) / bucketCount;
    vector<vector<int>> buckets(bucketCount);
    for (int value : values) {
        int bucketIndex = min(bucketCount - 1, static_cast<int>((value - minValue) / width));
        buckets[bucketIndex].push_back(value);
    }
    vector<int> result;
    for (auto& bucket : buckets) {
        sort(bucket.begin(), bucket.end());
        result.insert(result.end(), bucket.begin(), bucket.end());
    }
    return result;
}`,
  }),
  sortSpec({
    slug: "radix-sort",
    title: "Radix Sort",
    problem: "Sort non-negative integers digit by digit from least significant to most significant.",
    concept: "Radix Sort uses stable digit buckets so lower-place ordering is preserved while higher places are processed.",
    logicSummary: "Find the max digit length, bucket values by the current place, flatten buckets, and move to the next place.",
    transitionSummary: "For each digit place, every value enters bucket digit(value, place), then buckets are flattened from 0 to 9.",
    codeInsight: "Stability is essential: flattening buckets in insertion order preserves previous digit work.",
    realLifeExample: "Use it for fixed-width integer-like keys such as IDs when digits are bounded.",
    whenToUse: "Use Radix Sort for non-negative integers with manageable digit length.",
    memoryTrick: "Ones, tens, hundreds: stable buckets each round.",
    variables: [
      { name: "place", purpose: "Current digit place: 1, 10, 100, ..." },
      { name: "buckets", purpose: "Ten digit buckets for current place." },
      { name: "max", purpose: "Largest value, used to know when digits are finished." },
      { name: "values", purpose: "Current stable order after each digit pass." },
    ],
    dryRun: [
      { label: "max", title: "Find largest value", note: "The largest value tells how many digit passes are needed.", activeLine: 3, codeInsight: "The loop stops when max / place becomes 0." },
      { label: "ones", title: "Bucket by ones digit", note: "Every value enters bucket 0 through 9.", activeLine: 6, codeInsight: "Digit extraction uses Math.floor(value / place) % 10." },
      { label: "flatten", title: "Preserve bucket order", note: "Buckets flatten from 0 to 9 while preserving order inside each bucket.", activeLine: 7, codeInsight: "Stable flattening carries previous digit sorting forward." },
      { label: "next place", title: "Repeat for tens", note: "The same distribution runs for the next digit place.", activeLine: 4, codeInsight: "place *= 10 moves to the next digit." },
    ],
    animationValues: [170, 45, 75, 90, 802, 24],
    animationSteps: [
      { phase: "place 1", title: "Bucket ones digits", note: "170 goes to bucket 0, 45 to bucket 5.", activeIndices: [0, 1], window: [0, 5] },
      { phase: "flatten", title: "Ones pass order", note: "Buckets flatten in digit order.", activeIndices: [0, 3, 5], sortedIndices: [], window: [0, 5] },
      { phase: "place 10", title: "Bucket tens digits", note: "Now tens digits decide order.", activeIndices: [2, 4], window: [0, 5] },
      { phase: "place 100", title: "Final digit pass", note: "Hundreds digit finishes the sorted order.", activeIndices: [0, 4], sortedIndices: [0, 1, 2, 3, 4, 5], window: [0, 5] },
    ],
    complexity: { time: "O(d(n + b)) for d digits and b = 10 buckets.", space: "O(n + b)." },
    runnerInput: [[170, 45, 75, 90, 802, 24]],
    js: `export function radixSort(array) {
  let values = [...array];
  const max = Math.max(0, ...values);
  for (let place = 1; Math.floor(max / place) > 0; place *= 10) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (const value of values) buckets[Math.floor(value / place) % 10].push(value);
    values = buckets.flat();
  }
  return values;
}`,
    cpp: `#include <vector>
#include <algorithm>
using namespace std;

vector<int> radixSort(vector<int> values) {
    int maxValue = values.empty() ? 0 : *max_element(values.begin(), values.end());
    for (int place = 1; maxValue / place > 0; place *= 10) {
        vector<vector<int>> buckets(10);
        for (int value : values) buckets[(value / place) % 10].push_back(value);
        values.clear();
        for (const auto& bucket : buckets) values.insert(values.end(), bucket.begin(), bucket.end());
    }
    return values;
}`,
  }),
];

const pages = [...searchPages, ...sortingPages];

let updated = 0;
for (const spec of pages) {
  const dir = path.join(algorithmsRoot, spec.category, spec.slug);
  const dataPath = path.join(dir, "data.js");
  const data = readPageData(dataPath);
  Object.assign(data, pagePatch(spec));

  for (const step of data.dryRun) {
    if (!step.activeLine) step.activeLine = codeLine(spec.js, step.codeNeedle);
  }

  writePageData(dataPath, data);
  writeSolution(spec.category, spec.slug, "solution.js", `// ${spec.title}\n// Route: /algorithms/${spec.category}/${spec.slug}\n\n${spec.js}`);
  writeSolution(spec.category, spec.slug, "solution.cpp", `// ${spec.title}\n// Route: /algorithms/${spec.category}/${spec.slug}\n\n${spec.cpp}`);
  updated += 1;
}

console.log(`Updated ${updated} searching/sorting pages.`);
