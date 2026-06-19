// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "prefix-sum",
  "title": "Prefix Sum",
  "category": "Array Patterns",
  "route": "/algorithms/array-patterns/prefix-sum",
  "phase": 1,
  "priority": "high",
  "visualizerType": "cumulative-array",
  "icon": "view_week",
  "codePath": "./src/algorithms/array-patterns/prefix-sum/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Prefix Sum is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Prefix Sum stores cumulative totals so any range sum can be answered by subtracting two saved totals.",
  "concept": "Prefix Sum stores cumulative totals so any range sum can be answered by subtracting two saved totals.",
  "logicSummary": "Prefix Sum keeps an array-specific invariant and updates it as the scan moves through the input.",
  "transitionSummary": "Move the pointer, window, counter, or running value exactly once per step while preserving the invariant.",
  "codeInsight": "The code is written around the array invariant, not a generic scan: each variable explains what future positions can still change.",
  "realLifeExample": "Prefix Sum appears when contiguous ranges, ordering, or repeated array state can be reused across positions.",
  "whenToUse": "Use Prefix Sum when the problem statement matches its array invariant.",
  "memoryTrick": "Prefix Sum: write down the invariant before moving the pointer.",
  "visualizerCaption": "A cumulative array walkthrough showing Prefix Sum's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the array",
      "text": "Identify whether the problem is about a range, window, order, or frequency."
    },
    {
      "title": "Initialize invariant",
      "text": "Create only the pointer or running state this pattern needs."
    },
    {
      "title": "Advance scan",
      "text": "Update the invariant as each position is consumed."
    },
    {
      "title": "Return answer",
      "text": "Return the value maintained by the invariant."
    }
  ],
  "variables": [
    {
      "name": "array",
      "purpose": "The ordered or unsorted list the algorithm scans, partitions, sorts, or transforms."
    },
    {
      "name": "prefix total",
      "purpose": "The cumulative sum that becomes the next prefix value."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by prefixSum after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Move the pointer, window, counter, or running value exactly once per step while preserving the invariant. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read inputs",
      "note": "Prefix Sum starts by reading the exact input shape it owns.",
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
      "note": "Move the pointer, window, counter, or running value exactly once per step while preserving the invariant.",
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
    "time": "O(n) to build, O(1) per range query.",
    "space": "O(n)."
  },
  "quiz": {
    "question": "Which state choice keeps Prefix Sum correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Prefix Sum's transition.",
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
    "correctText": "Correct. Prefix Sum stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Prefix Sum needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "array-patterns",
  "algorithmSlug": "prefix-sum",
  "runnerInput": [
    [
      1,
      2,
      3
    ]
  ]
};
