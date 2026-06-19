// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "longest-increasing-subsequence",
  "title": "Longest Increasing Subsequence",
  "category": "Dynamic Programming",
  "route": "/algorithms/dynamic-programming/longest-increasing-subsequence",
  "phase": 3,
  "priority": "high",
  "visualizerType": "sequence-dp",
  "icon": "table_chart",
  "codePath": "./src/algorithms/dynamic-programming/longest-increasing-subsequence/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Longest Increasing Subsequence is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "LIS keeps minimal tail values for increasing subsequences of each length.",
  "concept": "LIS keeps minimal tail values for increasing subsequences of each length.",
  "logicSummary": "Longest Increasing Subsequence defines subproblems, initializes base cases, fills states in dependency order, and reads the requested state as the answer.",
  "transitionSummary": "Compute one DP state from already-solved smaller states.",
  "codeInsight": "The DP table shape is the algorithm: every index in the code corresponds to a named subproblem.",
  "realLifeExample": "Longest Increasing Subsequence appears when overlapping subproblems would otherwise be recomputed.",
  "whenToUse": "Use Longest Increasing Subsequence when the recurrence and base cases match the problem statement.",
  "memoryTrick": "Longest Increasing Subsequence: state definition first, recurrence second, loops third.",
  "visualizerCaption": "A sequence dp walkthrough showing Longest Increasing Subsequence's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Define state",
      "text": "Name what one DP cell means."
    },
    {
      "title": "Set base cases",
      "text": "Fill states that do not depend on others."
    },
    {
      "title": "Apply recurrence",
      "text": "Fill each state from solved states."
    },
    {
      "title": "Return target",
      "text": "Read the requested final state."
    }
  ],
  "variables": [
    {
      "name": "array",
      "purpose": "The ordered or unsorted list the algorithm scans, partitions, sorts, or transforms."
    },
    {
      "name": "dp table and dependencies",
      "purpose": "Stored subproblem answers plus the dependency order needed to fill them. This page visualizes it as sequence dp."
    },
    {
      "name": "target dp answer",
      "purpose": "The value produced by longestIncreasingSubsequence after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Compute one DP state from already-solved smaller states. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read inputs",
      "note": "Longest Increasing Subsequence starts by reading the exact input shape it owns.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize state",
      "note": "Create only the state needed for this algorithm's invariant.",
      "activeLine": 3
    },
    {
      "label": "Loop",
      "title": "Run transition",
      "note": "Compute one DP state from already-solved smaller states.",
      "activeLine": 8
    },
    {
      "label": "Answer",
      "title": "Return answer",
      "note": "Return the value produced by the maintained invariant.",
      "activeLine": 12
    }
  ],
  "complexity": {
    "time": "O(n log n).",
    "space": "O(n)."
  },
  "quiz": {
    "question": "Which state choice keeps Longest Increasing Subsequence correct?",
    "options": [
      {
        "key": "A",
        "text": "Track dp table and update it only through Longest Increasing Subsequence's transition.",
        "correct": true
      },
      {
        "key": "B",
        "text": "Reuse a different algorithm's state names even when the transition is different.",
        "correct": false
      },
      {
        "key": "C",
        "text": "Return before checking the algorithm-specific stop condition.",
        "correct": false
      }
    ],
    "correctText": "Correct. Longest Increasing Subsequence stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Longest Increasing Subsequence needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "dynamic-programming",
  "algorithmSlug": "longest-increasing-subsequence",
  "runnerInput": [
    [
      10,
      9,
      2,
      5,
      3,
      7,
      101,
      18
    ]
  ]
};
