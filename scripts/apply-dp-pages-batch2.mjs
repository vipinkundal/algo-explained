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

function stateAnimation(spec) {
  return {
    type: "state-flow",
    static: true,
    title: `${spec.title} state trace`,
    ruleLabel: "DP invariant",
    rule: spec.transitionSummary,
    states: spec.animationStates,
    steps: spec.animationSteps.map((step, index) => ({
      phase: step.phase,
      title: step.title,
      note: step.note,
      ruleLabel: "DP invariant",
      rule: step.rule || spec.transitionSummary,
      activeState: step.activeState ?? index,
    })),
  };
}

function animationFor(spec) {
  if (spec.animationKind === "array") return arrayAnimation(spec);
  if (spec.animationKind === "matrix") return matrixAnimation(spec);
  return stateAnimation(spec);
}

function patchFor(spec) {
  return {
    meaning: `${spec.title} is taught with its own DP state definition, transition, code trace, and answer state.`,
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
    animation: animationFor(spec),
    complexity: spec.complexity,
    quiz: {
      question: `Which state keeps ${spec.title} correct?`,
      options: [
        { key: "A", text: spec.correctOption, correct: true },
        { key: "B", text: "Reuse another DP recurrence without matching this algorithm's state.", correct: false },
        { key: "C", text: "Read the final answer before the required dependency states are solved.", correct: false },
      ],
      correctText: `Correct. ${spec.title} works when the state meaning, transition, and answer state stay aligned.`,
      incorrectText: `Not quite. ${spec.title} needs its own state, dependencies, and stop condition.`,
    },
  };
}

const pages = [
  {
    slug: "longest-increasing-subsequence",
    title: "Longest Increasing Subsequence",
    problem: "Find the length of the longest subsequence whose values strictly increase while keeping original order.",
    concept: "The O(n log n) LIS method stores tails[length - 1] as the smallest possible tail value for any increasing subsequence of that length.",
    logicSummary: "Scan the numbers left to right, binary-search the first tail that is greater than or equal to the current number, and replace it.",
    transitionSummary: "For each value, replace the lower_bound position in tails; if no position exists, append a longer subsequence tail.",
    codeInsight: "Replacing a tail does not claim that exact subsequence is final; it keeps the best future extension candidate for that length.",
    realLifeExample: "Use LIS for ranking trends, envelope nesting, timeline ordering, and any problem asking for longest ordered growth.",
    whenToUse: "Use this version when only the LIS length is needed and strict increasing order matters.",
    memoryTrick: "Smallest tail leaves the most room to grow.",
    visualizerCaption: "The trace shows how the compact tails array changes as each input value is processed.",
    logicSteps: [
      { title: "Define tails", text: "tails[k] is the minimum tail value seen for an increasing subsequence of length k + 1." },
      { title: "Process each value", text: "Use binary search to find the first tail that is at least the current value." },
      { title: "Replace or append", text: "Replace to improve a tail, or append when the value extends every known length." },
      { title: "Return tails length", text: "The number of maintained tails equals the LIS length." },
    ],
    variables: [
      { name: "nums", purpose: "Input sequence." },
      { name: "tails", purpose: "Best tail value for each subsequence length." },
      { name: "left, right", purpose: "Binary-search bounds inside tails." },
      { name: "position", purpose: "The tail slot replaced or appended for the current value." },
    ],
    dryRun: [
      { label: "10", title: "Start tails = [10]", note: "The first number creates a length-1 subsequence.", activeLine: 4, codeInsight: "tails starts empty and grows from scanned values." },
      { label: "2", title: "Replace the length-1 tail", note: "2 replaces 9/10 because a smaller tail is better for future values.", activeLine: 10, codeInsight: "lower_bound finds the first tail that is not smaller than value." },
      { label: "7", title: "Extend after 3", note: "7 appends after [2, 3], producing a length-3 candidate.", activeLine: 9, codeInsight: "Appending means the current value is greater than every maintained tail." },
      { label: "Answer", title: "Return tails.length = 4", note: "For [10,9,2,5,3,7,101,18], one LIS length is 4.", activeLine: 13, codeInsight: "The compact table's length is the answer." },
    ],
    runnerInput: [[10, 9, 2, 5, 3, 7, 101, 18]],
    animationKind: "array",
    animationValues: [2, 3, 7, 18],
    animationSteps: [
      { phase: "seed", title: "10 opens length 1", note: "tails = [10].", activeIndices: [0], sortedIndices: [0], window: [0, 3] },
      { phase: "replace", title: "2 becomes the smallest length-1 tail", note: "After 9 and 2, the best length-1 tail is 2.", activeIndices: [0], sortedIndices: [0], window: [0, 3] },
      { phase: "extend", title: "5 and 7 extend the chain", note: "tails reaches [2, 3, 7].", activeIndices: [1, 2], sortedIndices: [0, 1, 2], window: [0, 3] },
      { phase: "answer", title: "LIS length is 4", note: "101 appends, then 18 replaces the length-4 tail.", activeIndices: [3], sortedIndices: [0, 1, 2, 3], window: [0, 3] },
    ],
    complexity: { time: "O(n log n).", space: "O(n)." },
    correctOption: "Define tails[k] as the smallest tail for length k + 1 and update it with lower_bound.",
    js: `export function longestIncreasingSubsequence(nums) {
  const tails = [];
  for (const value of nums) {
    let left = 0;
    let right = tails.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (tails[mid] < value) left = mid + 1;
      else right = mid;
    }
    tails[left] = value;
  }
  return tails.length;
}`,
    cpp: `#include <vector>
#include <algorithm>
using namespace std;

int longestIncreasingSubsequence(const vector<int>& nums) {
    vector<int> tails;
    for (int value : nums) {
        auto it = lower_bound(tails.begin(), tails.end(), value);
        if (it == tails.end()) tails.push_back(value);
        else *it = value;
    }
    return static_cast<int>(tails.size());
}`,
  },
  {
    slug: "dp-on-trees",
    title: "DP on Trees",
    problem: "Choose a maximum-value set of tree nodes where no chosen node is directly connected to another chosen node.",
    concept: "Tree DP stores two values per node: take means include this node, skip means exclude this node.",
    logicSummary: "Traverse children first, compute their take/skip pairs, then combine those pairs at the parent.",
    transitionSummary: "take = node.value + left.skip + right.skip; skip = max(left.take,left.skip) + max(right.take,right.skip).",
    codeInsight: "Postorder recursion is required because a parent cannot decide take or skip until every child DP pair is known.",
    realLifeExample: "Use tree DP for hierarchy selection, independent set on trees, and manager/subordinate planning constraints.",
    whenToUse: "Use DP on Trees when each subtree can return a compact summary to its parent.",
    memoryTrick: "Take parent means skip children; skip parent means children choose their best.",
    visualizerCaption: "The trace follows postorder combination of take/skip values through the sample tree.",
    logicSteps: [
      { title: "Define node state", text: "Each node returns { take, skip } for its subtree." },
      { title: "Solve children first", text: "Postorder traversal gives child summaries before the parent combines them." },
      { title: "Compute take", text: "Taking a node forces both children to be skipped." },
      { title: "Compute skip", text: "Skipping a node lets each child choose its better state." },
    ],
    variables: [
      { name: "root", purpose: "Root of the input tree." },
      { name: "take", purpose: "Best sum when the current node is selected." },
      { name: "skip", purpose: "Best sum when the current node is not selected." },
      { name: "left, right", purpose: "Child DP summaries." },
    ],
    dryRun: [
      { label: "Leaf 3", title: "Leaf returns {3, 0}", note: "Taking a leaf gives its value; skipping gives 0.", activeLine: 4, codeInsight: "The null base case lets leaves combine empty children." },
      { label: "Node 4", title: "Combine children 1 and 3", note: "take = 4, skip = 1 + 3 = 4.", activeLine: 8, codeInsight: "take reads child skip values only." },
      { label: "Node 5", title: "Right subtree returns {5, 1}", note: "Skipping 5 allows child 1, but taking 5 is better.", activeLine: 9, codeInsight: "skip reads each child's max state." },
      { label: "Root", title: "Best root answer is 9", note: "Root 3 can take 4 from left skip and 2 from right skip for 9.", activeLine: 13, codeInsight: "The final answer is max(root.take, root.skip)." },
    ],
    runnerInput: [{ value: 3, left: { value: 4, left: { value: 1 }, right: { value: 3 } }, right: { value: 5, right: { value: 1 } } }],
    animationKind: "state",
    animationStates: ["leaf 1 -> {1,0}", "leaf 3 -> {3,0}", "node 4 -> {4,4}", "node 5 -> {5,1}", "root 3 -> {9,9}"],
    animationSteps: [
      { phase: "leaf", title: "Solve leaf nodes", note: "Leaves produce {value, 0}.", activeState: 0 },
      { phase: "left subtree", title: "Combine node 4", note: "Node 4 can be taken or skipped for value 4.", activeState: 2 },
      { phase: "right subtree", title: "Combine node 5", note: "Taking 5 beats skipping it.", activeState: 3 },
      { phase: "answer", title: "Root answer is 9", note: "The root summary is {take: 9, skip: 9}.", activeState: 4 },
    ],
    complexity: { time: "O(n).", space: "O(h) recursion stack, where h is tree height." },
    correctOption: "Return take and skip for every subtree, then combine children in postorder.",
    js: `export function dpOnTrees(root) {
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
}`,
    cpp: `#include <algorithm>
using namespace std;

struct TreeNode {
    int value;
    TreeNode* left;
    TreeNode* right;
};

struct TreeDpState {
    int take;
    int skip;
};

TreeDpState solveTreeDp(TreeNode* node) {
    if (!node) return {0, 0};
    TreeDpState left = solveTreeDp(node->left);
    TreeDpState right = solveTreeDp(node->right);
    return {
        node->value + left.skip + right.skip,
        max(left.take, left.skip) + max(right.take, right.skip)
    };
}

int dpOnTrees(TreeNode* root) {
    TreeDpState result = solveTreeDp(root);
    return max(result.take, result.skip);
}`,
  },
  {
    slug: "edit-distance",
    title: "Edit Distance",
    problem: "Find the minimum number of insert, delete, or replace operations needed to transform one string into another.",
    concept: "Edit Distance defines dp[i][j] as the fewest operations needed to convert the first i characters of a into the first j characters of b.",
    logicSummary: "Initialize empty-prefix costs, then fill each prefix pair by matching characters or trying insert, delete, and replace.",
    transitionSummary: "If characters match, use dp[i-1][j-1]; otherwise use 1 + min(delete, insert, replace).",
    codeInsight: "The first row and column model converting from or to an empty string, so every later cell has valid neighbors.",
    realLifeExample: "Use edit distance for spell checking, fuzzy search, DNA mutation distance, and text diff scoring.",
    whenToUse: "Use it when the allowed operations are insert, delete, and replace with equal cost.",
    memoryTrick: "Match takes diagonal; mismatch costs one plus the cheapest neighbor.",
    visualizerCaption: "The trace fills a prefix-pair table for horse -> ros.",
    logicSteps: [
      { title: "Define dp[i][j]", text: "Minimum edits to convert a[0..i) into b[0..j)." },
      { title: "Seed empty prefixes", text: "Deleting i characters or inserting j characters creates the first column and row." },
      { title: "Compare characters", text: "A match copies the diagonal; a mismatch tries the three edit operations." },
      { title: "Read bottom-right", text: "dp[a.length][b.length] is the full transformation cost." },
    ],
    variables: [
      { name: "a, b", purpose: "Source and target strings." },
      { name: "dp[i][j]", purpose: "Best edit count for prefix pair." },
      { name: "deleteCost", purpose: "Cost after deleting a character from a." },
      { name: "insertCost, replaceCost", purpose: "Costs for inserting into a or replacing a character." },
    ],
    dryRun: [
      { label: "Base", title: "Empty prefix costs", note: "horse -> empty needs deletions, empty -> ros needs insertions.", activeLine: 3, codeInsight: "Boundary rows are real edit operations, not placeholders." },
      { label: "h vs r", title: "Replace h with r", note: "The first real cell becomes 1.", activeLine: 10, codeInsight: "Mismatch takes one edit plus the cheapest dependency." },
      { label: "o vs o", title: "Copy diagonal on match", note: "Matching o carries dp[1][1].", activeLine: 9, codeInsight: "A match adds no operation." },
      { label: "Answer", title: "horse -> ros costs 3", note: "One optimal sequence is replace h, delete r, delete e.", activeLine: 13, codeInsight: "The bottom-right cell stores the minimum edit count." },
    ],
    runnerInput: ["horse", "ros"],
    animationKind: "matrix",
    animationMatrix: [
      [0, 1, 2, 3],
      [1, 1, 2, 3],
      [2, 2, 1, 2],
      [3, 2, 2, 2],
      [4, 3, 3, 2],
      [5, 4, 4, 3],
    ],
    animationSteps: [
      { phase: "base", title: "Seed empty prefixes", note: "First row and column count insertions/deletions.", activeCells: [[0, 0]], visitedCells: [[0, 0], [0, 1], [1, 0]] },
      { phase: "replace", title: "h vs r needs one replace", note: "dp[1][1] = 1.", activeCells: [[1, 1]], visitedCells: [[0, 0], [0, 1], [1, 0], [1, 1]] },
      { phase: "match", title: "o matches o", note: "dp[2][2] copies the diagonal.", activeCells: [[2, 2]], visitedCells: [[1, 1], [1, 2], [2, 1], [2, 2]] },
      { phase: "answer", title: "horse -> ros costs 3", note: "The answer is dp[5][3] = 3.", activeCells: [[5, 3]], visitedCells: [[3, 2], [4, 3], [5, 3]] },
    ],
    complexity: { time: "O(nm).", space: "O(nm)." },
    correctOption: "Define dp[i][j] as the edit count for prefixes and use insert/delete/replace dependencies.",
    js: `export function editDistance(a, b) {
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
}`,
    cpp: `#include <string>
#include <vector>
#include <algorithm>
using namespace std;

int editDistance(const string& a, const string& b) {
    vector<vector<int>> dp(a.size() + 1, vector<int>(b.size() + 1, 0));
    for (int i = 0; i <= static_cast<int>(a.size()); i += 1) dp[i][0] = i;
    for (int j = 0; j <= static_cast<int>(b.size()); j += 1) dp[0][j] = j;
    for (int i = 1; i <= static_cast<int>(a.size()); i += 1) {
        for (int j = 1; j <= static_cast<int>(b.size()); j += 1) {
            if (a[i - 1] == b[j - 1]) dp[i][j] = dp[i - 1][j - 1];
            else dp[i][j] = 1 + min({dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]});
        }
    }
    return dp[a.size()][b.size()];
}`,
  },
  {
    slug: "matrix-chain-multiplication",
    title: "Matrix Chain Multiplication",
    problem: "Find the minimum scalar multiplication cost for multiplying a chain of matrices without changing their order.",
    concept: "Matrix Chain DP defines dp[left][right] as the minimum cost to multiply matrices left through right.",
    logicSummary: "Solve short intervals first, then try every split point for larger intervals and keep the cheapest split.",
    transitionSummary: "dp[l][r] = min over split k of dp[l][k] + dp[k+1][r] + dims[l] * dims[k+1] * dims[r+1].",
    codeInsight: "The outer interval-length loop guarantees both subchains around each split are already solved.",
    realLifeExample: "Use it for optimizing matrix expression evaluation and any ordered interval split optimization.",
    whenToUse: "Use matrix-chain DP when the problem asks for the best way to parenthesize an ordered sequence.",
    memoryTrick: "Every interval tries every final split.",
    visualizerCaption: "The trace fills interval costs by increasing chain length.",
    logicSteps: [
      { title: "Define interval state", text: "dp[left][right] is the minimum cost for matrices left through right." },
      { title: "Set single matrix cost", text: "A single matrix needs no multiplication, so diagonal cells are 0." },
      { title: "Grow intervals", text: "Fill length 2, then length 3, and so on." },
      { title: "Try splits", text: "Each interval tests every possible final split point." },
    ],
    variables: [
      { name: "dimensions", purpose: "Matrix i has size dimensions[i] x dimensions[i + 1]." },
      { name: "dp[left][right]", purpose: "Minimum cost for an interval of matrices." },
      { name: "length", purpose: "Current interval size." },
      { name: "split", purpose: "Final multiplication boundary tested inside an interval." },
    ],
    dryRun: [
      { label: "Base", title: "Diagonal costs are zero", note: "A single matrix has no multiplication cost.", activeLine: 3, codeInsight: "The DP table is indexed by matrix interval." },
      { label: "Length 2", title: "Compute adjacent products", note: "A1*A2 costs 10*30*5 = 1500.", activeLine: 9, codeInsight: "Length 2 intervals have one possible split." },
      { label: "Length 3", title: "Try both split points", note: "The interval [0,2] chooses the cheaper of two parenthesizations.", activeLine: 10, codeInsight: "The split loop is the core optimization." },
      { label: "Answer", title: "Minimum cost is 4500", note: "For dimensions [10,30,5,60], the best order costs 4500.", activeLine: 14, codeInsight: "dp[0][n-1] covers the whole matrix chain." },
    ],
    runnerInput: [[10, 30, 5, 60]],
    animationKind: "matrix",
    animationMatrix: [
      [0, 1500, 4500],
      [0, 0, 9000],
      [0, 0, 0],
    ],
    animationSteps: [
      { phase: "base", title: "Single matrices cost 0", note: "The diagonal is the base case.", activeCells: [[0, 0], [1, 1], [2, 2]], visitedCells: [[0, 0], [1, 1], [2, 2]] },
      { phase: "length 2", title: "Fill adjacent intervals", note: "dp[0][1] = 1500 and dp[1][2] = 9000.", activeCells: [[0, 1], [1, 2]], visitedCells: [[0, 0], [1, 1], [2, 2], [0, 1], [1, 2]] },
      { phase: "split", title: "Try splits for [0,2]", note: "Split at 1 gives 1500 + 10*5*60 = 4500.", activeCells: [[0, 2]], visitedCells: [[0, 1], [1, 2], [0, 2]] },
      { phase: "answer", title: "Minimum cost is 4500", note: "The full-chain answer is dp[0][2].", activeCells: [[0, 2]], visitedCells: [[0, 0], [0, 1], [1, 2], [0, 2]] },
    ],
    complexity: { time: "O(n^3).", space: "O(n^2)." },
    correctOption: "Define dp[left][right] for intervals and try every split after shorter intervals are solved.",
    js: `export function matrixChainMultiplication(dimensions) {
  const n = dimensions.length - 1;
  if (n <= 1) return 0;
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
  return dp[0][n - 1];
}`,
    cpp: `#include <vector>
#include <algorithm>
#include <limits>
using namespace std;

int matrixChainMultiplication(const vector<int>& dimensions) {
    int n = static_cast<int>(dimensions.size()) - 1;
    if (n <= 1) return 0;
    const int INF = numeric_limits<int>::max() / 4;
    vector<vector<int>> dp(n, vector<int>(n, 0));
    for (int length = 2; length <= n; length += 1) {
        for (int left = 0; left + length - 1 < n; left += 1) {
            int right = left + length - 1;
            dp[left][right] = INF;
            for (int split = left; split < right; split += 1) {
                int cost = dp[left][split] + dp[split + 1][right] + dimensions[left] * dimensions[split + 1] * dimensions[right + 1];
                dp[left][right] = min(dp[left][right], cost);
            }
        }
    }
    return dp[0][n - 1];
}`,
  },
  {
    slug: "partition-dp",
    title: "Partition DP",
    problem: "Decide whether an array can be split into two subsets with equal sum.",
    concept: "Partition DP reduces equal partition to subset sum: can any subset reach total / 2?",
    logicSummary: "Reject odd totals, set possible[0] = true, then scan sums backward for each value so each number is used once.",
    transitionSummary: "For each value and target sum, possible[sum] becomes possible[sum] OR possible[sum - value].",
    codeInsight: "Backward sum scanning keeps the problem 0/1; forward scanning would let one value be reused in the same pass.",
    realLifeExample: "Use it for equal load balancing, package splitting, and subset feasibility checks.",
    whenToUse: "Use partition DP when the objective is whether a subset can hit a target sum exactly.",
    memoryTrick: "Equal partition asks for half the total.",
    visualizerCaption: "The trace shows reachable subset sums expanding toward target 11.",
    logicSteps: [
      { title: "Check total", text: "An odd total can never be split evenly." },
      { title: "Set target", text: "The subset target is total / 2." },
      { title: "Seed zero sum", text: "Sum 0 is always reachable by picking nothing." },
      { title: "Scan sums backward", text: "Each value updates reachable sums without being reused." },
    ],
    variables: [
      { name: "array", purpose: "Input values." },
      { name: "target", purpose: "Half of the total sum." },
      { name: "possible[sum]", purpose: "Whether some processed subset reaches sum." },
      { name: "value", purpose: "Current number being considered once." },
    ],
    dryRun: [
      { label: "Total", title: "Total is 22, target is 11", note: "[1,5,11,5] can only partition if some subset reaches 11.", activeLine: 2, codeInsight: "The odd-total guard avoids impossible tables." },
      { label: "Seed", title: "possible[0] = true", note: "The empty subset starts the recurrence.", activeLine: 5, codeInsight: "Every reachable sum grows from the zero-sum base." },
      { label: "Value 5", title: "Sums 1, 5, and 6 become reachable", note: "Backward scanning combines 5 with earlier reachable sums.", activeLine: 8, codeInsight: "The loop direction prevents using the same value twice." },
      { label: "Answer", title: "possible[11] is true", note: "The value 11 alone reaches the half-total target.", activeLine: 10, codeInsight: "The target boolean is the final answer." },
    ],
    runnerInput: [[1, 5, 11, 5]],
    animationKind: "array",
    animationValues: [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
    animationSteps: [
      { phase: "target", title: "Target is 11", note: "The total is 22, so a subset must hit 11.", activeIndices: [11], sortedIndices: [], window: [0, 11] },
      { phase: "seed", title: "Sum 0 is reachable", note: "possible[0] = true before reading values.", activeIndices: [0], sortedIndices: [0], window: [0, 11] },
      { phase: "value 5", title: "Reach 5 and 6", note: "After values 1 and 5, sums 1, 5, and 6 are reachable.", activeIndices: [5, 6], sortedIndices: [0, 1, 5, 6], window: [0, 11] },
      { phase: "answer", title: "Target sum 11 is reachable", note: "The value 11 turns possible[11] true.", activeIndices: [11], sortedIndices: [0, 1, 5, 6, 11], window: [0, 11] },
    ],
    complexity: { time: "O(n * target).", space: "O(target)." },
    correctOption: "Define possible[sum] as subset reachability and scan sums backward for each value.",
    js: `export function partitionDp(array) {
  const total = array.reduce((sum, value) => sum + value, 0);
  if (total % 2 !== 0) return false;
  const target = total / 2;
  const possible = Array(target + 1).fill(false);
  possible[0] = true;
  for (const value of array) {
    for (let sum = target; sum >= value; sum -= 1) {
      possible[sum] = possible[sum] || possible[sum - value];
    }
  }
  return possible[target];
}`,
    cpp: `#include <vector>
#include <numeric>
using namespace std;

bool partitionDp(const vector<int>& array) {
    int total = accumulate(array.begin(), array.end(), 0);
    if (total % 2 != 0) return false;
    int target = total / 2;
    vector<bool> possible(target + 1, false);
    possible[0] = true;
    for (int value : array) {
        for (int sum = target; sum >= value; sum -= 1) {
            possible[sum] = possible[sum] || possible[sum - value];
        }
    }
    return possible[target];
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
