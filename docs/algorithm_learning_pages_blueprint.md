# Algorithm Learning Pages Blueprint for Codex

Use this file as the build plan for an algorithm-learning website focused on simple explanations, step-by-step visual dry runs, and line-by-line code reasoning.

## Product Goal

Build one page per algorithm. Each page should teach the algorithm like a visual debugger:

- Explain the problem in simple words.
- Explain why the algorithm exists.
- Explain every important variable and why it is needed.
- Show a step-by-step dry run.
- Show clickable code lines with a “why this line exists” explanation.
- Show common mistakes and memory tricks.
- End with practice problems.

## Core Page Route Pattern

Use this route format:

```text
/algorithms/{category}/{algorithm-slug}
```

Example:

```text
/algorithms/searching/binary-search
```

## Recommended Build Phases

### Phase 1: MVP / Beginner Core

Build these first because they prove the full learning structure.

1. Time Complexity Basics
2. Space Complexity Basics
3. Linear Search
4. Binary Search
5. Bubble Sort
6. Selection Sort
7. Insertion Sort
8. Two Pointers
9. Sliding Window
10. Prefix Sum
11. Recursion Basics
12. Stack Basics
13. Queue Basics

### Phase 2: Interview Core

1. Merge Sort
2. Quick Sort
3. Heap Sort
4. Hashing Basics
5. Kadane’s Algorithm
6. Linked List Basics
7. Binary Tree Traversals
8. Binary Search Tree Operations
9. BFS
10. DFS
11. Cycle Detection
12. Topological Sort
13. Greedy Basics
14. Backtracking Basics

### Phase 3: Advanced Interview Topics

1. Dynamic Programming Basics
2. 0/1 Knapsack
3. Coin Change
4. Longest Common Subsequence
5. Longest Increasing Subsequence
6. Edit Distance
7. Dijkstra’s Algorithm
8. Bellman-Ford
9. Floyd-Warshall
10. Prim’s Algorithm
11. Kruskal’s Algorithm
12. Union Find
13. Trie
14. KMP
15. Rabin-Karp

### Phase 4: Deep / Advanced Algorithms

1. Z Algorithm
2. Manacher’s Algorithm
3. Tarjan’s Algorithm
4. Kosaraju’s Algorithm
5. Matrix Chain Multiplication
6. DP on Trees
7. DP on Grids
8. Segment Tree
9. Fenwick Tree
10. Sieve of Eratosthenes
11. Modular Exponentiation
12. Modular Inverse
13. Fast Power

## Universal Algorithm Page Template

Every algorithm page should follow the same structure.

```text
1. Algorithm title
2. One-line meaning
3. Problem this algorithm solves
4. Real-life example
5. When to use it
6. Variables and why each one exists
7. Step-by-step logic in plain English
8. Visual dry run
9. Clickable code with line-by-line explanation
10. Common mistakes
11. Memory trick
12. Time and space complexity
13. Interview pattern recognition
14. Practice problems
15. Mini quiz
```

## Required Page Components

Codex should create reusable components for these sections.

```text
AlgorithmPageLayout
AlgorithmHero
WhenToUseCard
VariableExplainerGrid
DryRunPlayer
CodeWhyPanel
LineByLineCodeBlock
CommonMistakes
MemoryTrickCard
ComplexityCard
PracticeProblemList
MiniQuiz
```

## Data Schema Suggestion

Each algorithm can be stored as MDX, JSON, YAML, or TypeScript object.

```ts
export type AlgorithmPage = {
  id: string;
  title: string;
  slug: string;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  phase: 1 | 2 | 3 | 4;
  oneLineMeaning: string;
  whenToUse: string[];
  variables: {
    name: string;
    purpose: string;
    initialValue?: string;
    changesWhen?: string;
    whyNeeded: string;
    whatIfRemoved?: string;
  }[];
  steps: string[];
  code: {
    language: "cpp" | "c";
    lines: {
      lineNumber: number;
      code: string;
      whyThisLineExists: string;
      variablesUsed?: string[];
      commonMistake?: string;
    }[];
  };
  dryRun: {
    input: string;
    target?: string;
    steps: Record<string, string | number>[];
  };
  complexity: {
    time: string;
    space: string;
    simpleReason: string;
  };
  memoryTrick: string;
  commonMistakes: string[];
  practiceProblems: {
    title: string;
    difficulty: "easy" | "medium" | "hard";
    source?: "leetcode" | "gfg" | "custom";
  }[];
};
```

## Example Page Object: Binary Search

```ts
const binarySearchPage = {
  id: "binary-search",
  title: "Binary Search",
  slug: "binary-search",
  category: "searching",
  difficulty: "beginner",
  phase: 1,
  oneLineMeaning: "Binary Search finds an answer by repeatedly cutting the search area in half.",
  whenToUse: [
    "The data is sorted.",
    "The answer space can be divided into left and right parts.",
    "Each check lets us safely remove half of the remaining search area."
  ],
  variables: [
    {
      name: "low",
      purpose: "Left boundary of the current search range.",
      initialValue: "0",
      changesWhen: "Target is bigger than arr[mid].",
      whyNeeded: "We need to remember where the useful search area starts.",
      whatIfRemoved: "We would not know which left-side elements are already useless."
    },
    {
      name: "high",
      purpose: "Right boundary of the current search range.",
      initialValue: "n - 1",
      changesWhen: "Target is smaller than arr[mid].",
      whyNeeded: "We need to remember where the useful search area ends.",
      whatIfRemoved: "We would not know which right-side elements are already useless."
    },
    {
      name: "mid",
      purpose: "Middle index of the current search range.",
      initialValue: "low + (high - low) / 2",
      changesWhen: "Every loop iteration.",
      whyNeeded: "Binary Search works by checking the middle and removing one half.",
      whatIfRemoved: "The algorithm loses the point where it decides left or right."
    }
  ],
  steps: [
    "Start with the full sorted array.",
    "Calculate the middle index.",
    "If arr[mid] is the target, return mid.",
    "If arr[mid] is smaller than target, ignore the left half.",
    "If arr[mid] is bigger than target, ignore the right half.",
    "Repeat until low becomes greater than high."
  ],
  memoryTrick: "Check middle, remove half, repeat."
};
```

## Algorithm List by Category

### Foundations

| Phase | ID | Title | Route | Visualizer Type | Priority |
|---:|---|---|---|---|---|
| 1 | time-complexity-basics | Time Complexity Basics | /algorithms/foundations/time-complexity-basics | growth-chart | high |
| 1 | space-complexity-basics | Space Complexity Basics | /algorithms/foundations/space-complexity-basics | memory-blocks | high |
| 1 | recursion-basics | Recursion Basics | /algorithms/foundations/recursion-basics | call-stack | high |
| 2 | hashing-basics | Hashing Basics | /algorithms/foundations/hashing-basics | hash-table | high |
| 2 | greedy-basics | Greedy Basics | /algorithms/foundations/greedy-basics | decision-timeline | medium |
| 2 | backtracking-basics | Backtracking Basics | /algorithms/foundations/backtracking-basics | recursion-tree | high |
| 3 | dynamic-programming-basics | Dynamic Programming Basics | /algorithms/foundations/dynamic-programming-basics | dp-table | high |

### Searching

| Phase | ID | Title | Route | Visualizer Type | Priority |
|---:|---|---|---|---|---|
| 1 | linear-search | Linear Search | /algorithms/searching/linear-search | array-scan | high |
| 1 | binary-search | Binary Search | /algorithms/searching/binary-search | array-boundaries | high |
| 1 | lower-bound | Lower Bound | /algorithms/searching/lower-bound | array-boundaries | medium |
| 1 | upper-bound | Upper Bound | /algorithms/searching/upper-bound | array-boundaries | medium |
| 2 | search-in-rotated-sorted-array | Search in Rotated Sorted Array | /algorithms/searching/search-in-rotated-sorted-array | rotated-array | high |
| 2 | ternary-search | Ternary Search | /algorithms/searching/ternary-search | divided-range | low |

### Sorting

| Phase | ID | Title | Route | Visualizer Type | Priority |
|---:|---|---|---|---|---|
| 1 | bubble-sort | Bubble Sort | /algorithms/sorting/bubble-sort | bar-swap | high |
| 1 | selection-sort | Selection Sort | /algorithms/sorting/selection-sort | min-selection | high |
| 1 | insertion-sort | Insertion Sort | /algorithms/sorting/insertion-sort | card-insertion | high |
| 2 | merge-sort | Merge Sort | /algorithms/sorting/merge-sort | divide-merge | high |
| 2 | quick-sort | Quick Sort | /algorithms/sorting/quick-sort | partition | high |
| 2 | heap-sort | Heap Sort | /algorithms/sorting/heap-sort | heap-tree | medium |
| 3 | counting-sort | Counting Sort | /algorithms/sorting/counting-sort | frequency-array | medium |
| 3 | radix-sort | Radix Sort | /algorithms/sorting/radix-sort | digit-buckets | medium |
| 3 | bucket-sort | Bucket Sort | /algorithms/sorting/bucket-sort | bucket-groups | low |

### Array Patterns

| Phase | ID | Title | Route | Visualizer Type | Priority |
|---:|---|---|---|---|---|
| 1 | two-pointers | Two Pointers | /algorithms/array-patterns/two-pointers | two-pointer-array | high |
| 1 | sliding-window | Sliding Window | /algorithms/array-patterns/sliding-window | moving-window | high |
| 1 | prefix-sum | Prefix Sum | /algorithms/array-patterns/prefix-sum | cumulative-array | high |
| 2 | kadanes-algorithm | Kadane’s Algorithm | /algorithms/array-patterns/kadanes-algorithm | running-sum | high |
| 2 | difference-array | Difference Array | /algorithms/array-patterns/difference-array | range-update | medium |
| 2 | dutch-national-flag | Dutch National Flag | /algorithms/array-patterns/dutch-national-flag | three-partition | medium |
| 2 | majority-element | Majority Element | /algorithms/array-patterns/majority-element | candidate-counter | medium |
| 2 | maximum-product-subarray | Maximum Product Subarray | /algorithms/array-patterns/maximum-product-subarray | min-max-tracker | medium |
| 2 | longest-consecutive-sequence | Longest Consecutive Sequence | /algorithms/array-patterns/longest-consecutive-sequence | hash-set-chain | medium |

### Recursion and Backtracking

| Phase | ID | Title | Route | Visualizer Type | Priority |
|---:|---|---|---|---|---|
| 1 | factorial-recursion | Factorial Recursion | /algorithms/recursion/factorial-recursion | call-stack | medium |
| 1 | fibonacci-recursion | Fibonacci Recursion | /algorithms/recursion/fibonacci-recursion | recursion-tree | medium |
| 1 | tower-of-hanoi | Tower of Hanoi | /algorithms/recursion/tower-of-hanoi | disk-moves | low |
| 2 | subsets | Subsets | /algorithms/backtracking/subsets | decision-tree | high |
| 2 | permutations | Permutations | /algorithms/backtracking/permutations | swap-tree | high |
| 2 | combination-sum | Combination Sum | /algorithms/backtracking/combination-sum | choice-tree | medium |
| 2 | generate-parentheses | Generate Parentheses | /algorithms/backtracking/generate-parentheses | state-tree | medium |
| 2 | n-queens | N-Queens | /algorithms/backtracking/n-queens | chessboard | medium |
| 2 | rat-in-a-maze | Rat in a Maze | /algorithms/backtracking/rat-in-a-maze | grid-path | medium |
| 2 | sudoku-solver | Sudoku Solver | /algorithms/backtracking/sudoku-solver | board-state | low |
| 2 | word-search | Word Search | /algorithms/backtracking/word-search | grid-dfs | medium |

### Dynamic Programming

| Phase | ID | Title | Route | Visualizer Type | Priority |
|---:|---|---|---|---|---|
| 3 | fibonacci-dp | Fibonacci DP | /algorithms/dynamic-programming/fibonacci-dp | dp-table | high |
| 3 | zero-one-knapsack | 0/1 Knapsack | /algorithms/dynamic-programming/zero-one-knapsack | dp-grid | high |
| 3 | coin-change | Coin Change | /algorithms/dynamic-programming/coin-change | dp-array | high |
| 3 | longest-common-subsequence | Longest Common Subsequence | /algorithms/dynamic-programming/longest-common-subsequence | dp-grid | high |
| 3 | longest-increasing-subsequence | Longest Increasing Subsequence | /algorithms/dynamic-programming/longest-increasing-subsequence | sequence-dp | high |
| 3 | edit-distance | Edit Distance | /algorithms/dynamic-programming/edit-distance | dp-grid | medium |
| 4 | matrix-chain-multiplication | Matrix Chain Multiplication | /algorithms/dynamic-programming/matrix-chain-multiplication | interval-dp | medium |
| 4 | dp-on-grids | DP on Grids | /algorithms/dynamic-programming/dp-on-grids | grid-path-dp | high |
| 4 | dp-on-trees | DP on Trees | /algorithms/dynamic-programming/dp-on-trees | tree-dp | medium |
| 4 | partition-dp | Partition DP | /algorithms/dynamic-programming/partition-dp | partition-table | medium |

### Graphs

| Phase | ID | Title | Route | Visualizer Type | Priority |
|---:|---|---|---|---|---|
| 2 | bfs | Breadth-First Search | /algorithms/graphs/bfs | graph-queue | high |
| 2 | dfs | Depth-First Search | /algorithms/graphs/dfs | graph-stack | high |
| 2 | cycle-detection-undirected | Cycle Detection in Undirected Graph | /algorithms/graphs/cycle-detection-undirected | graph-visited | high |
| 2 | cycle-detection-directed | Cycle Detection in Directed Graph | /algorithms/graphs/cycle-detection-directed | graph-recursion-stack | high |
| 2 | topological-sort | Topological Sort | /algorithms/graphs/topological-sort | dag-order | high |
| 3 | dijkstra | Dijkstra’s Algorithm | /algorithms/graphs/dijkstra | weighted-graph | high |
| 3 | bellman-ford | Bellman-Ford Algorithm | /algorithms/graphs/bellman-ford | edge-relaxation | medium |
| 3 | floyd-warshall | Floyd-Warshall Algorithm | /algorithms/graphs/floyd-warshall | matrix-update | medium |
| 3 | prim | Prim’s Algorithm | /algorithms/graphs/prim | mst-growth | medium |
| 3 | kruskal | Kruskal’s Algorithm | /algorithms/graphs/kruskal | mst-edges | medium |
| 3 | union-find | Disjoint Set Union / Union Find | /algorithms/graphs/union-find | parent-tree | high |
| 4 | kosaraju | Kosaraju’s Algorithm | /algorithms/graphs/kosaraju | scc-two-pass | medium |
| 4 | tarjan | Tarjan’s Algorithm | /algorithms/graphs/tarjan | low-link | medium |

### Trees

| Phase | ID | Title | Route | Visualizer Type | Priority |
|---:|---|---|---|---|---|
| 2 | inorder-traversal | Inorder Traversal | /algorithms/trees/inorder-traversal | tree-traversal | high |
| 2 | preorder-traversal | Preorder Traversal | /algorithms/trees/preorder-traversal | tree-traversal | high |
| 2 | postorder-traversal | Postorder Traversal | /algorithms/trees/postorder-traversal | tree-traversal | high |
| 2 | level-order-traversal | Level Order Traversal | /algorithms/trees/level-order-traversal | tree-levels | high |
| 2 | bst-search | BST Search | /algorithms/trees/bst-search | bst-path | high |
| 2 | bst-insert | BST Insert | /algorithms/trees/bst-insert | bst-path | medium |
| 2 | bst-delete | BST Delete | /algorithms/trees/bst-delete | bst-restructure | medium |
| 3 | lowest-common-ancestor | Lowest Common Ancestor | /algorithms/trees/lowest-common-ancestor | tree-paths | high |
| 3 | diameter-of-tree | Diameter of Tree | /algorithms/trees/diameter-of-tree | tree-height | medium |
| 3 | height-depth-of-tree | Height / Depth of Tree | /algorithms/trees/height-depth-of-tree | tree-height | high |
| 3 | trie | Trie Operations | /algorithms/trees/trie | prefix-tree | high |
| 4 | avl-tree-basics | AVL Tree Basics | /algorithms/trees/avl-tree-basics | rotations | low |
| 4 | red-black-tree-basics | Red-Black Tree Basics | /algorithms/trees/red-black-tree-basics | balanced-tree | low |

### Strings

| Phase | ID | Title | Route | Visualizer Type | Priority |
|---:|---|---|---|---|---|
| 2 | anagram-detection | Anagram Detection | /algorithms/strings/anagram-detection | frequency-map | medium |
| 2 | longest-palindromic-substring | Longest Palindromic Substring | /algorithms/strings/longest-palindromic-substring | expand-center | medium |
| 3 | kmp | KMP Algorithm | /algorithms/strings/kmp | prefix-table | high |
| 3 | rabin-karp | Rabin-Karp Algorithm | /algorithms/strings/rabin-karp | rolling-hash | medium |
| 4 | z-algorithm | Z Algorithm | /algorithms/strings/z-algorithm | z-box | medium |
| 4 | manachers-algorithm | Manacher’s Algorithm | /algorithms/strings/manachers-algorithm | palindrome-radius | low |
| 3 | trie-search | Trie-Based Search | /algorithms/strings/trie-search | prefix-tree | high |

### Heap and Priority Queue

| Phase | ID | Title | Route | Visualizer Type | Priority |
|---:|---|---|---|---|---|
| 2 | min-heap | Min Heap | /algorithms/heaps/min-heap | heap-tree | medium |
| 2 | max-heap | Max Heap | /algorithms/heaps/max-heap | heap-tree | medium |
| 2 | heapify | Heapify | /algorithms/heaps/heapify | heap-tree | medium |
| 2 | kth-largest-smallest | Kth Largest / Smallest Element | /algorithms/heaps/kth-largest-smallest | heap-selection | high |
| 2 | merge-k-sorted-lists | Merge K Sorted Lists | /algorithms/heaps/merge-k-sorted-lists | heap-merge | medium |
| 2 | top-k-frequent-elements | Top K Frequent Elements | /algorithms/heaps/top-k-frequent-elements | frequency-heap | high |

### Stack

| Phase | ID | Title | Route | Visualizer Type | Priority |
|---:|---|---|---|---|---|
| 1 | stack-basics | Stack Basics | /algorithms/stack/stack-basics | stack-push-pop | high |
| 1 | valid-parentheses | Valid Parentheses | /algorithms/stack/valid-parentheses | stack-match | high |
| 2 | next-greater-element | Next Greater Element | /algorithms/stack/next-greater-element | monotonic-stack | high |
| 2 | previous-greater-element | Previous Greater Element | /algorithms/stack/previous-greater-element | monotonic-stack | medium |
| 2 | min-stack | Min Stack | /algorithms/stack/min-stack | dual-stack | medium |
| 2 | largest-rectangle-histogram | Largest Rectangle in Histogram | /algorithms/stack/largest-rectangle-histogram | monotonic-stack-bars | medium |
| 2 | stock-span | Stock Span Problem | /algorithms/stack/stock-span | monotonic-stack | medium |

### Queue

| Phase | ID | Title | Route | Visualizer Type | Priority |
|---:|---|---|---|---|---|
| 1 | queue-basics | Queue Basics | /algorithms/queue/queue-basics | queue-enqueue-dequeue | high |
| 1 | circular-queue | Circular Queue | /algorithms/queue/circular-queue | circular-buffer | medium |
| 2 | deque | Deque | /algorithms/queue/deque | double-ended-queue | medium |
| 2 | sliding-window-maximum | Sliding Window Maximum | /algorithms/queue/sliding-window-maximum | monotonic-deque | high |
| 2 | lru-cache | LRU Cache | /algorithms/queue/lru-cache | hashmap-linkedlist | high |

### Matrix and Grid

| Phase | ID | Title | Route | Visualizer Type | Priority |
|---:|---|---|---|---|---|
| 1 | matrix-traversal | Matrix Traversal | /algorithms/matrix/matrix-traversal | grid-walk | medium |
| 1 | spiral-matrix | Spiral Matrix | /algorithms/matrix/spiral-matrix | boundary-grid | medium |
| 1 | rotate-matrix | Rotate Matrix | /algorithms/matrix/rotate-matrix | grid-transform | medium |
| 2 | search-in-sorted-matrix | Search in Sorted Matrix | /algorithms/matrix/search-in-sorted-matrix | matrix-staircase | medium |
| 2 | flood-fill | Flood Fill | /algorithms/matrix/flood-fill | grid-bfs-dfs | high |
| 2 | island-counting | Island Counting | /algorithms/matrix/island-counting | grid-bfs-dfs | high |
| 2 | prefix-sum-matrix | Prefix Sum Matrix | /algorithms/matrix/prefix-sum-matrix | grid-prefix | medium |

### Number Theory and Bit Manipulation

| Phase | ID | Title | Route | Visualizer Type | Priority |
|---:|---|---|---|---|---|
| 1 | gcd-euclidean | GCD / Euclidean Algorithm | /algorithms/number-theory/gcd-euclidean | remainder-steps | high |
| 1 | lcm | LCM | /algorithms/number-theory/lcm | formula-card | medium |
| 1 | prime-checking | Prime Checking | /algorithms/number-theory/prime-checking | divisor-scan | medium |
| 3 | sieve-of-eratosthenes | Sieve of Eratosthenes | /algorithms/number-theory/sieve-of-eratosthenes | number-grid | high |
| 3 | modular-exponentiation | Modular Exponentiation | /algorithms/number-theory/modular-exponentiation | binary-power | high |
| 4 | modular-inverse | Modular Inverse | /algorithms/number-theory/modular-inverse | extended-gcd | medium |
| 3 | fast-power | Fast Power | /algorithms/number-theory/fast-power | binary-power | high |
| 1 | bit-basics | Bit Basics | /algorithms/bit-manipulation/bit-basics | bit-toggle | medium |
| 1 | count-set-bits | Count Set Bits | /algorithms/bit-manipulation/count-set-bits | bit-count | medium |
| 1 | power-of-two | Power of Two | /algorithms/bit-manipulation/power-of-two | bit-check | medium |
| 1 | xor-tricks | XOR Tricks | /algorithms/bit-manipulation/xor-tricks | xor-cancel | medium |
| 1 | single-number | Single Number | /algorithms/bit-manipulation/single-number | xor-cancel | high |
| 2 | bitmasking-subsets | Bitmasking for Subsets | /algorithms/bit-manipulation/bitmasking-subsets | subset-mask | medium |

### C++ STL Algorithm Pages

These pages explain how common STL functions work, when to use them, and what they hide internally.

| Phase | ID | Title | Route | Visualizer Type | Priority |
|---:|---|---|---|---|---|
| 1 | cpp-sort | C++ sort() | /algorithms/cpp-stl/sort | comparator-sort | high |
| 1 | cpp-reverse | C++ reverse() | /algorithms/cpp-stl/reverse | two-pointer-swap | medium |
| 1 | cpp-binary-search | C++ binary_search() | /algorithms/cpp-stl/binary-search | array-boundaries | high |
| 1 | cpp-lower-bound | C++ lower_bound() | /algorithms/cpp-stl/lower-bound | array-boundaries | high |
| 1 | cpp-upper-bound | C++ upper_bound() | /algorithms/cpp-stl/upper-bound | array-boundaries | high |
| 1 | cpp-next-permutation | C++ next_permutation() | /algorithms/cpp-stl/next-permutation | permutation-step | medium |
| 1 | cpp-max-min-element | C++ max_element() / min_element() | /algorithms/cpp-stl/max-min-element | array-scan | medium |
| 1 | cpp-accumulate | C++ accumulate() | /algorithms/cpp-stl/accumulate | running-sum | medium |
| 1 | cpp-unique | C++ unique() | /algorithms/cpp-stl/unique | duplicate-shift | medium |
| 1 | cpp-priority-queue | C++ priority_queue | /algorithms/cpp-stl/priority-queue | heap-tree | high |
| 1 | cpp-map-set | C++ map / set | /algorithms/cpp-stl/map-set | balanced-tree | medium |
| 1 | cpp-unordered-map-set | C++ unordered_map / unordered_set | /algorithms/cpp-stl/unordered-map-set | hash-table | high |

## Codex Build Instructions

### Step 1: Create the Data Layer

Create a single data file first:

```text
src/content/algorithms/index.ts
```

This file should export the algorithm list with:

```text
id, title, slug, category, route, phase, difficulty, visualizerType, priority
```

### Step 2: Create Category Listing Pages

Create pages like:

```text
/algorithms/searching
/algorithms/sorting
/algorithms/graphs
/algorithms/dynamic-programming
```

Each category page should show:

- Category description
- Beginner to advanced order
- Cards for each algorithm
- Progress indicator placeholder

### Step 3: Create Dynamic Algorithm Page Route

Create a dynamic route:

```text
/algorithms/[category]/[slug]
```

Load algorithm content using the `id` or `slug`.

### Step 4: Build the Learning Page Components

Create these first:

```text
AlgorithmHero
VariableExplainerGrid
DryRunPlayer
LineByLineCodeBlock
CodeWhyPanel
CommonMistakes
MemoryTrickCard
ComplexityCard
PracticeProblemList
```

### Step 5: Build the Binary Search Page Fully

Use Binary Search as the first complete example. It should include:

- Visual dry run with array cells
- low, high, mid pointer labels
- Clickable code lines
- Right-side why panel
- Mistake examples
- Practice problems

### Step 6: Reuse the Template

After Binary Search is done, build:

1. Linear Search
2. Bubble Sort
3. Selection Sort
4. Insertion Sort
5. Two Pointers
6. Sliding Window
7. Prefix Sum
8. Recursion Basics

### Step 7: Add Visualizer Types Gradually

Do not build all visualizers at once. Start with:

```text
array-scan
array-boundaries
bar-swap
moving-window
cumulative-array
call-stack
```

Later add:

```text
graph-queue
graph-stack
dp-grid
heap-tree
prefix-table
recursion-tree
```

## Design Rules for Codex

- Every page must explain the algorithm before showing code.
- Every important variable must answer: why needed, when it changes, what happens if removed.
- Every code line must be clickable or highlightable.
- The right-side explanation panel must update based on selected code line.
- Dry run and code explanation should stay visually connected.
- Use simple language suitable for undergraduate students.
- Avoid long theory paragraphs.
- Prefer cards, timelines, tables, diagrams, and examples.

## Suggested File Structure

```text
src/
  app/
    algorithms/
      page.tsx
      [category]/
        page.tsx
        [slug]/
          page.tsx
  components/
    algorithms/
      AlgorithmHero.tsx
      AlgorithmPageLayout.tsx
      CategoryCard.tsx
      VariableExplainerGrid.tsx
      DryRunPlayer.tsx
      LineByLineCodeBlock.tsx
      CodeWhyPanel.tsx
      CommonMistakes.tsx
      MemoryTrickCard.tsx
      ComplexityCard.tsx
      PracticeProblemList.tsx
      visualizers/
        ArrayScanVisualizer.tsx
        ArrayBoundariesVisualizer.tsx
        BarSwapVisualizer.tsx
        MovingWindowVisualizer.tsx
        CallStackVisualizer.tsx
  content/
    algorithms/
      index.ts
      binary-search.ts
      linear-search.ts
      bubble-sort.ts
```

## First Codex Prompt to Use

```text
Build the algorithm learning website data layer and page structure using the attached algorithm_learning_pages_blueprint.md.

Start with a Next.js app using TypeScript. Create the algorithm content index, category pages, and dynamic algorithm detail route. Use the page template from the blueprint.

Only fully implement the Binary Search page first. It must include:
- AlgorithmHero
- VariableExplainerGrid
- DryRunPlayer
- LineByLineCodeBlock
- CodeWhyPanel
- CommonMistakes
- MemoryTrickCard
- ComplexityCard
- PracticeProblemList

The Binary Search page must explain why each variable exists and why every important code line is needed. Keep the wording simple for undergraduate students.

Do not build all algorithm pages yet. Create placeholders/cards for the remaining algorithms using the algorithm list from the blueprint.
```
