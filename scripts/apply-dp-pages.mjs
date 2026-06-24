import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const dpRoot = path.join(root, "src", "algorithms", "dynamic-programming");

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

function writeSolution(slug, filename, code) {
  writeFileSync(path.join(dpRoot, slug, "code", filename), `${code.trim()}\n`, "utf8");
}

function arrayAnimation(spec) {
  return {
    type: "array-flow",
    static: true,
    title: `${spec.title} DP trace`,
    ruleLabel: "DP invariant",
    rule: spec.transitionSummary,
    values: spec.animationValues,
    steps: spec.animationSteps.map((step) => ({
      phase: step.phase,
      title: step.title,
      note: step.note,
      ruleLabel: "DP invariant",
      rule: step.rule || spec.transitionSummary,
      activeIndices: step.activeIndices || [],
      sortedIndices: step.sortedIndices || [],
      mutedIndices: step.mutedIndices || [],
      window: step.window || [0, spec.animationValues.length - 1],
      primaryLabel: step.phase,
      secondaryLabel: step.secondaryLabel || spec.transitionSummary,
    })),
  };
}

function matrixAnimation(spec) {
  return {
    type: "matrix-flow",
    static: true,
    title: `${spec.title} DP table`,
    ruleLabel: "DP recurrence",
    rule: spec.transitionSummary,
    matrix: spec.animationMatrix,
    steps: spec.animationSteps.map((step) => ({
      phase: step.phase,
      title: step.title,
      note: step.note,
      ruleLabel: "DP recurrence",
      rule: step.rule || spec.transitionSummary,
      activeCells: step.activeCells || [],
      visitedCells: step.visitedCells || [],
    })),
  };
}

function patchFor(spec) {
  return {
    meaning: `${spec.title} is taught with its own DP state definition, recurrence, code trace, and answer cell.`,
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
    animation: spec.animationKind === "array" ? arrayAnimation(spec) : matrixAnimation(spec),
    complexity: spec.complexity,
    quiz: {
      question: `Which state keeps ${spec.title} correct?`,
      options: [
        { key: "A", text: spec.correctOption, correct: true },
        { key: "B", text: "Reuse another DP recurrence without matching the state definition.", correct: false },
        { key: "C", text: "Read the answer before the required dependency cells have been filled.", correct: false },
      ],
      correctText: `Correct. ${spec.title} works when its table meaning and recurrence stay aligned.`,
      incorrectText: `Not quite. ${spec.title} needs its own state, recurrence, and answer cell.`,
    },
  };
}

const pages = [
  {
    slug: "zero-one-knapsack",
    title: "0/1 Knapsack",
    problem: "Given item weights and values, maximize value without exceeding capacity when each item can be taken at most once.",
    concept: "0/1 Knapsack defines dp[cap] as the best value reachable for a capacity after processing some prefix of items.",
    logicSummary: "Initialize dp with zeros, process each item once, scan capacities backward, and decide whether taking the item improves dp[cap].",
    transitionSummary: "For each item and capacity, dp[cap] becomes max(skip item, dp[cap - weight] + value).",
    codeInsight: "The capacity loop goes backward so the same item cannot be reused inside one item pass.",
    realLifeExample: "Use it for budgeted selection, packing, feature choice, or any take/skip optimization with limited capacity.",
    whenToUse: "Use 0/1 Knapsack when every item is either taken once or skipped.",
    memoryTrick: "Backward capacity means one copy of the item.",
    visualizerCaption: "The trace shows each item updating capacity cells from right to left.",
    logicSteps: [
      { title: "Define dp[cap]", text: "Best value possible with the processed items and capacity cap." },
      { title: "Start at zero", text: "No items means value 0 for every capacity." },
      { title: "Scan capacity backward", text: "Update larger capacities first so the current item is used once." },
      { title: "Read dp[capacity]", text: "The final capacity cell is the best valid value." },
    ],
    variables: [
      { name: "weights, values", purpose: "Parallel item arrays." },
      { name: "capacity", purpose: "Maximum allowed total weight." },
      { name: "dp[cap]", purpose: "Best value for capacity cap after processed items." },
      { name: "item, cap", purpose: "Current item and capacity cell being updated." },
    ],
    dryRun: [
      { label: "Initial", title: "dp = [0,0,0,0,0,0]", note: "With no items, every capacity has value 0.", activeLine: 2, codeInsight: "The one-dimensional table stores the best value for each capacity." },
      { label: "Item 0", title: "Weight 2, value 3", note: "Capacities 5 down to 2 can take item 0.", activeLine: 5, codeInsight: "The backward loop protects the 0/1 restriction." },
      { label: "Item 1", title: "Weight 3, value 4", note: "At capacity 5, taking item 1 plus dp[2] gives 7.", activeLine: 6, codeInsight: "The recurrence compares skip versus take." },
      { label: "Answer", title: "Return dp[5] = 7", note: "Items with weights 2 and 3 fit exactly and give value 7.", activeLine: 9, codeInsight: "The requested capacity cell is the final answer." },
    ],
    runnerInput: [[2, 3, 4], [3, 4, 5], 5],
    animationKind: "matrix",
    animationMatrix: [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 3, 3, 3, 3],
      [0, 0, 3, 4, 4, 7],
      [0, 0, 3, 4, 5, 7],
    ],
    animationSteps: [
      { phase: "base row", title: "No items processed", note: "All capacities start at value 0.", activeCells: [[0, 0]], visitedCells: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5]] },
      { phase: "item 0", title: "Take weight 2 at cap 2..5", note: "Item 0 sets reachable value 3.", activeCells: [[1, 2], [1, 5]], visitedCells: [[0, 0], [1, 2], [1, 3], [1, 4], [1, 5]] },
      { phase: "item 1", title: "Combine weights 2 and 3", note: "dp[5] improves to 7 using value 3 + 4.", activeCells: [[2, 5]], visitedCells: [[1, 2], [2, 3], [2, 5]] },
      { phase: "answer", title: "Best value at capacity 5", note: "The final answer is 7.", activeCells: [[3, 5]], visitedCells: [[1, 2], [2, 3], [3, 4], [3, 5]] },
    ],
    complexity: { time: "O(n * capacity).", space: "O(capacity)." },
    correctOption: "Define dp[cap] as best value and scan capacity backward for each item.",
    js: `export function zeroOneKnapsack(weights, values, capacity) {
  const dp = Array(capacity + 1).fill(0);
  for (let item = 0; item < weights.length; item += 1) {
    for (let cap = capacity; cap >= weights[item]; cap -= 1) {
      dp[cap] = Math.max(dp[cap], dp[cap - weights[item]] + values[item]);
    }
  }
  return dp[capacity];
}`,
    cpp: `#include <vector>
#include <algorithm>
using namespace std;

int zeroOneKnapsack(const vector<int>& weights, const vector<int>& values, int capacity) {
    vector<int> dp(capacity + 1, 0);
    for (int item = 0; item < static_cast<int>(weights.size()); item += 1) {
        for (int cap = capacity; cap >= weights[item]; cap -= 1) {
            dp[cap] = max(dp[cap], dp[cap - weights[item]] + values[item]);
        }
    }
    return dp[capacity];
}`,
  },
  {
    slug: "coin-change",
    title: "Coin Change",
    problem: "Find the fewest coins needed to make an amount when each coin denomination can be reused.",
    concept: "Coin Change defines dp[value] as the minimum number of coins needed to form that value.",
    logicSummary: "Set dp[0] = 0, initialize other amounts to Infinity, and relax every amount reachable by each coin.",
    transitionSummary: "For each coin and amount, dp[value] becomes min(current, dp[value - coin] + 1).",
    codeInsight: "The amount loop goes forward because coins are unlimited and the same coin may be reused.",
    realLifeExample: "Use it for payment denominations, minimum token counts, or any unbounded item-count minimization.",
    whenToUse: "Use Coin Change when each denomination can be used repeatedly and the goal is minimum count.",
    memoryTrick: "Forward amount means unlimited coins.",
    visualizerCaption: "The trace shows amounts improving as coin denominations relax the DP array.",
    logicSteps: [
      { title: "Define dp[value]", text: "Fewest coins required to form value." },
      { title: "Seed amount zero", text: "Amount 0 needs 0 coins." },
      { title: "Relax by coin", text: "Use solved smaller amount value - coin." },
      { title: "Return target", text: "Return dp[amount], or -1 if it stayed unreachable." },
    ],
    variables: [
      { name: "coins", purpose: "Reusable denominations." },
      { name: "amount", purpose: "Target value to form." },
      { name: "dp[value]", purpose: "Minimum coins for each amount." },
      { name: "Infinity", purpose: "Marker for amounts not yet reachable." },
    ],
    dryRun: [
      { label: "Base", title: "dp[0] = 0", note: "The empty amount needs no coins.", activeLine: 3, codeInsight: "Every reachable state grows from the base amount." },
      { label: "Coin 1", title: "Fill every amount with ones", note: "Coin 1 makes all amounts reachable, but not optimal.", activeLine: 6, codeInsight: "Forward iteration allows unlimited reuse of coin 1." },
      { label: "Coin 3", title: "Improve amount 3 and 6", note: "dp[3] becomes 1, and dp[6] can become 2.", activeLine: 6, codeInsight: "The recurrence uses the already-updated dp[value - coin]." },
      { label: "Coin 4", title: "Improve amount 4", note: "dp[4] becomes 1 and dp[6] remains 2.", activeLine: 6, codeInsight: "Each coin tries to improve every reachable amount." },
    ],
    runnerInput: [[1, 3, 4], 6],
    animationKind: "array",
    animationValues: [0, 1, 2, 1, 1, 2, 2],
    animationSteps: [
      { phase: "base", title: "Amount 0 is solved", note: "dp[0] = 0.", activeIndices: [0], sortedIndices: [0], window: [0, 6] },
      { phase: "coin 1", title: "One coin fills the table", note: "Amounts 1 through 6 are reachable with repeated 1s.", activeIndices: [1, 6], sortedIndices: [0, 1, 2, 3, 4, 5, 6], window: [0, 6] },
      { phase: "coin 3", title: "Amount 3 improves to 1", note: "dp[3] = min(3, dp[0] + 1).", activeIndices: [3], sortedIndices: [0, 1, 2, 3], window: [0, 6] },
      { phase: "amount 6", title: "Answer is 2 coins", note: "6 can be made as 3 + 3.", activeIndices: [6], sortedIndices: [0, 3, 4, 6], window: [0, 6] },
    ],
    complexity: { time: "O(coins * amount).", space: "O(amount)." },
    correctOption: "Define dp[value] as the fewest coins and scan amounts forward for reusable coins.",
    js: `export function coinChange(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (const coin of coins) {
    for (let value = coin; value <= amount; value += 1) {
      dp[value] = Math.min(dp[value], dp[value - coin] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}`,
    cpp: `#include <vector>
#include <algorithm>
#include <limits>
using namespace std;

int coinChange(const vector<int>& coins, int amount) {
    const int INF = numeric_limits<int>::max() / 4;
    vector<int> dp(amount + 1, INF);
    dp[0] = 0;
    for (int coin : coins) {
        for (int value = coin; value <= amount; value += 1) {
            dp[value] = min(dp[value], dp[value - coin] + 1);
        }
    }
    return dp[amount] == INF ? -1 : dp[amount];
}`,
  },
  {
    slug: "dp-on-grids",
    title: "DP on Grids",
    problem: "Count paths from the top-left to bottom-right of a grid while blocked cells cannot be used.",
    concept: "Grid DP defines dp[row][col] as the number of ways to reach that cell from allowed top and left predecessors.",
    logicSummary: "Scan cells in row-major order, skip obstacles, seed the start cell, and add ways from top plus left.",
    transitionSummary: "For each open cell, dp[row][col] = ways from above + ways from left.",
    codeInsight: "Row-major order is valid because the top and left dependencies have already been computed.",
    realLifeExample: "Use it for path counting, robot movement, grid scoring, and blocked-map route planning.",
    whenToUse: "Use DP on Grids when each cell depends on nearby previously solved cells.",
    memoryTrick: "A grid cell inherits ways from top and left.",
    visualizerCaption: "The trace fills a path-count table cell by cell while skipping obstacles.",
    logicSteps: [
      { title: "Define dp[row][col]", text: "Number of valid paths to that cell." },
      { title: "Seed start", text: "The start cell has one path if it is open." },
      { title: "Skip blockers", text: "Blocked cells contribute zero paths." },
      { title: "Add dependencies", text: "Open cells add top and left path counts." },
    ],
    variables: [
      { name: "grid", purpose: "0 means open, 1 means blocked." },
      { name: "row, col", purpose: "Current cell being filled." },
      { name: "dp[row][col]", purpose: "Number of paths to current cell." },
      { name: "top, left", purpose: "Already-computed predecessor cells." },
    ],
    dryRun: [
      { label: "Start", title: "dp[0][0] = 1", note: "There is one way to stand at the open start.", activeLine: 8, codeInsight: "The start cell is the base case." },
      { label: "First row", title: "Carry paths right", note: "Open cells in the first row inherit from the left.", activeLine: 9, codeInsight: "Missing top values contribute 0." },
      { label: "Block", title: "Obstacle at center", note: "A blocked cell is skipped and stays 0.", activeLine: 7, codeInsight: "continue prevents blocked cells from receiving paths." },
      { label: "Target", title: "Bottom-right gets 2", note: "The target combines paths from top and left.", activeLine: 11, codeInsight: "The final cell is the answer." },
    ],
    runnerInput: [[[0, 0, 0], [0, 1, 0], [0, 0, 0]]],
    animationKind: "matrix",
    animationMatrix: [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 2],
    ],
    animationSteps: [
      { phase: "start", title: "Seed start cell", note: "dp[0][0] = 1.", activeCells: [[0, 0]], visitedCells: [[0, 0]] },
      { phase: "first row", title: "Fill right from left", note: "Each open first-row cell has one path.", activeCells: [[0, 1], [0, 2]], visitedCells: [[0, 0], [0, 1], [0, 2]] },
      { phase: "obstacle", title: "Center is blocked", note: "The blocked center stays 0.", activeCells: [[1, 1]], visitedCells: [[0, 1], [1, 0], [1, 1]] },
      { phase: "target", title: "Target combines top and left", note: "dp[2][2] = 1 + 1 = 2.", activeCells: [[2, 2]], visitedCells: [[0, 2], [1, 2], [2, 1], [2, 2]] },
    ],
    complexity: { time: "O(rows * cols).", space: "O(rows * cols)." },
    correctOption: "Define each cell by top and left dependencies and fill in dependency order.",
    js: `export function dpOnGrids(grid) {
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
}`,
    cpp: `#include <vector>
using namespace std;

int dpOnGrids(const vector<vector<int>>& grid) {
    int rows = static_cast<int>(grid.size());
    int cols = rows == 0 ? 0 : static_cast<int>(grid[0].size());
    vector<vector<int>> dp(rows, vector<int>(cols, 0));
    for (int row = 0; row < rows; row += 1) {
        for (int col = 0; col < cols; col += 1) {
            if (grid[row][col] == 1) continue;
            if (row == 0 && col == 0) dp[row][col] = 1;
            else dp[row][col] = (row > 0 ? dp[row - 1][col] : 0) + (col > 0 ? dp[row][col - 1] : 0);
        }
    }
    return rows == 0 || cols == 0 ? 0 : dp[rows - 1][cols - 1];
}`,
  },
  {
    slug: "fibonacci-dp",
    title: "Fibonacci DP",
    problem: "Compute the nth Fibonacci number by storing each smaller Fibonacci value once.",
    concept: "Fibonacci DP defines dp[i] as Fibonacci(i), so every later value depends only on dp[i - 1] and dp[i - 2].",
    logicSummary: "Seed dp[0] and dp[1], then fill each index as the sum of the previous two states.",
    transitionSummary: "For each index >= 2, dp[index] = dp[index - 1] + dp[index - 2].",
    codeInsight: "The table removes the exponential repeated calls from naive recursion.",
    realLifeExample: "Use it to teach overlapping subproblems and bottom-up tabulation.",
    whenToUse: "Use Fibonacci DP when the recurrence is linear and smaller states can be reused.",
    memoryTrick: "Each Fibonacci cell reads the two cells behind it.",
    visualizerCaption: "The trace fills Fibonacci values left to right until n is reached.",
    logicSteps: [
      { title: "Define dp[i]", text: "The ith Fibonacci number." },
      { title: "Seed base values", text: "dp[0] = 0 and dp[1] = 1." },
      { title: "Add previous two", text: "Each next state is the sum of the two previous states." },
      { title: "Return dp[n]", text: "The requested index stores the answer." },
    ],
    variables: [
      { name: "n", purpose: "Fibonacci index to compute." },
      { name: "dp", purpose: "Stored Fibonacci values." },
      { name: "index", purpose: "Current Fibonacci state being filled." },
      { name: "dp[index - 1], dp[index - 2]", purpose: "Dependencies for the current state." },
    ],
    dryRun: [
      { label: "Base", title: "dp[0] = 0, dp[1] = 1", note: "The recurrence starts from two known values.", activeLine: 4, codeInsight: "Base cases stop the table from reading negative indices." },
      { label: "i = 2", title: "dp[2] = 1", note: "0 + 1 gives the next Fibonacci value.", activeLine: 5, codeInsight: "Every loop iteration fills exactly one new state." },
      { label: "i = 6", title: "dp[6] = 8", note: "The table has reused all previous values once.", activeLine: 5, codeInsight: "No recursive branch recomputes the same state." },
      { label: "Answer", title: "Return dp[7] = 13", note: "The requested cell stores the answer.", activeLine: 6, codeInsight: "The return reads the final table entry." },
    ],
    runnerInput: [7],
    animationKind: "array",
    animationValues: [0, 1, 1, 2, 3, 5, 8, 13],
    animationSteps: [
      { phase: "base", title: "Seed first two values", note: "dp[0] and dp[1] are known.", activeIndices: [0, 1], sortedIndices: [0, 1], window: [0, 7] },
      { phase: "i = 2", title: "Compute 0 + 1", note: "dp[2] becomes 1.", activeIndices: [0, 1, 2], sortedIndices: [0, 1, 2], window: [0, 2] },
      { phase: "i = 6", title: "Compute 3 + 5", note: "dp[6] becomes 8.", activeIndices: [4, 5, 6], sortedIndices: [0, 1, 2, 3, 4, 5, 6], window: [0, 6] },
      { phase: "answer", title: "dp[7] is 13", note: "The target index has been filled.", activeIndices: [7], sortedIndices: [0, 1, 2, 3, 4, 5, 6, 7], window: [0, 7] },
    ],
    complexity: { time: "O(n).", space: "O(n), reducible to O(1) by keeping two values." },
    correctOption: "Define dp[i] as Fibonacci(i) and fill each cell from the previous two cells.",
    js: `export function fibonacciDp(n) {
  if (n <= 1) return n;
  const dp = Array(n + 1).fill(0);
  dp[1] = 1;
  for (let index = 2; index <= n; index += 1) dp[index] = dp[index - 1] + dp[index - 2];
  return dp[n];
}`,
    cpp: `#include <vector>
using namespace std;

int fibonacciDp(int n) {
    if (n <= 1) return n;
    vector<int> dp(n + 1, 0);
    dp[1] = 1;
    for (int index = 2; index <= n; index += 1) dp[index] = dp[index - 1] + dp[index - 2];
    return dp[n];
}`,
  },
  {
    slug: "longest-common-subsequence",
    title: "Longest Common Subsequence",
    problem: "Find the length of the longest sequence that appears in both strings without requiring contiguous positions.",
    concept: "LCS defines dp[i][j] as the best subsequence length using the first i characters of a and first j characters of b.",
    logicSummary: "Build a prefix-pair table; matching characters extend the diagonal, while mismatches keep the better top or left answer.",
    transitionSummary: "If a[i - 1] === b[j - 1], use dp[i - 1][j - 1] + 1; otherwise use max(dp[i - 1][j], dp[i][j - 1]).",
    codeInsight: "Rows and columns include an empty-prefix base row and column, which makes boundary transitions simple.",
    realLifeExample: "Use LCS for diff tools, similarity scoring, DNA sequence comparison, and edit-distance-style reasoning.",
    whenToUse: "Use LCS when order matters but characters do not need to be adjacent.",
    memoryTrick: "Match takes diagonal plus one; mismatch takes best of top or left.",
    visualizerCaption: "The trace fills prefix-pair cells and ends at dp[a.length][b.length].",
    logicSteps: [
      { title: "Define dp[i][j]", text: "Best LCS length for prefixes a[0..i) and b[0..j)." },
      { title: "Seed empty prefixes", text: "Empty string against anything has LCS length 0." },
      { title: "Match or mismatch", text: "Use diagonal on match, otherwise best top/left." },
      { title: "Read bottom-right", text: "The final cell is the full-string LCS length." },
    ],
    variables: [
      { name: "a, b", purpose: "Input strings." },
      { name: "dp[i][j]", purpose: "Best LCS length for two prefixes." },
      { name: "i, j", purpose: "Current prefix lengths." },
      { name: "bottom-right cell", purpose: "Answer for the full strings." },
    ],
    dryRun: [
      { label: "Base", title: "Empty prefixes are zero", note: "Row 0 and column 0 start as 0.", activeLine: 2, codeInsight: "The table has one extra row and column for empty prefixes." },
      { label: "Match a", title: "a matches a", note: "dp[1][1] = dp[0][0] + 1.", activeLine: 5, codeInsight: "A match extends the diagonal result." },
      { label: "Mismatch", title: "b versus c", note: "Keep max(top, left) when characters differ.", activeLine: 5, codeInsight: "Mismatch never decreases the best subsequence length." },
      { label: "Answer", title: "LCS length is 3", note: "abcde and ace share ace.", activeLine: 8, codeInsight: "The bottom-right cell is returned." },
    ],
    runnerInput: ["abcde", "ace"],
    animationKind: "matrix",
    animationMatrix: [
      [0, 0, 0, 0],
      [0, 1, 1, 1],
      [0, 1, 1, 1],
      [0, 1, 2, 2],
      [0, 1, 2, 2],
      [0, 1, 2, 3],
    ],
    animationSteps: [
      { phase: "base", title: "Empty prefixes", note: "Top row and left column are 0.", activeCells: [[0, 0]], visitedCells: [[0, 0], [0, 1], [0, 2], [0, 3]] },
      { phase: "match a", title: "a == a", note: "dp[1][1] becomes 1 from the diagonal.", activeCells: [[1, 1]], visitedCells: [[0, 0], [1, 1]] },
      { phase: "match c", title: "c == c", note: "dp[3][2] becomes 2.", activeCells: [[3, 2]], visitedCells: [[1, 1], [2, 1], [3, 2]] },
      { phase: "answer", title: "ace has length 3", note: "The bottom-right cell dp[5][3] is 3.", activeCells: [[5, 3]], visitedCells: [[1, 1], [3, 2], [5, 3]] },
    ],
    complexity: { time: "O(nm).", space: "O(nm)." },
    correctOption: "Define dp[i][j] for prefixes and use diagonal/top/left dependencies.",
    js: `export function longestCommonSubsequence(a, b) {
  const dp = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
  for (let i = 1; i <= a.length; i += 1) {
    for (let j = 1; j <= b.length; j += 1) {
      dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[a.length][b.length];
}`,
    cpp: `#include <string>
#include <vector>
#include <algorithm>
using namespace std;

int longestCommonSubsequence(const string& a, const string& b) {
    vector<vector<int>> dp(a.size() + 1, vector<int>(b.size() + 1, 0));
    for (int i = 1; i <= static_cast<int>(a.size()); i += 1) {
        for (int j = 1; j <= static_cast<int>(b.size()); j += 1) {
            if (a[i - 1] == b[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
            else dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
    return dp[a.size()][b.size()];
}`,
  },
];

for (const spec of pages) {
  const dataPath = path.join(dpRoot, spec.slug, "data.js");
  const data = readPageData(dataPath);
  Object.assign(data, patchFor(spec));
  writePageData(dataPath, data);
  writeSolution(spec.slug, "solution.js", `// ${spec.title}\n// Route: /algorithms/dynamic-programming/${spec.slug}\n\n${spec.js}`);
  writeSolution(spec.slug, "solution.cpp", `// ${spec.title}\n// Route: /algorithms/dynamic-programming/${spec.slug}\n\n${spec.cpp}`);
}

console.log(`Updated ${pages.length} dynamic-programming pages.`);
