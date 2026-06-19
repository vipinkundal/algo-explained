// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "maximum-product-subarray",
  "title": "Maximum Product Subarray",
  "category": "Array Patterns",
  "route": "/algorithms/array-patterns/maximum-product-subarray",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "min-max-tracker",
  "icon": "view_week",
  "codePath": "./src/algorithms/array-patterns/maximum-product-subarray/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Maximum Product Subarray is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Maximum Product Subarray tracks both max and min products because a negative value can flip them.",
  "concept": "Maximum Product Subarray tracks both max and min products because a negative value can flip them.",
  "logicSummary": "Maximum Product Subarray keeps an array-specific invariant and updates it as the scan moves through the input.",
  "transitionSummary": "Move the pointer, window, counter, or running value exactly once per step while preserving the invariant.",
  "codeInsight": "The code is written around the array invariant, not a generic scan: each variable explains what future positions can still change.",
  "realLifeExample": "Maximum Product Subarray appears when contiguous ranges, ordering, or repeated array state can be reused across positions.",
  "whenToUse": "Use Maximum Product Subarray when the problem statement matches its array invariant.",
  "memoryTrick": "Maximum Product Subarray: write down the invariant before moving the pointer.",
  "visualizerCaption": "A min max tracker walkthrough showing Maximum Product Subarray's input, state, transition, and answer.",
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
      "name": "current min, current max, best",
      "purpose": "Both extremes are tracked because a negative value can swap min and max products."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by maximumProductSubarray after the maintained state reaches the stop rule."
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
      "note": "Maximum Product Subarray starts by reading the exact input shape it owns.",
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
    "time": "O(n).",
    "space": "O(1)."
  },
  "quiz": {
    "question": "Which state choice keeps Maximum Product Subarray correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Maximum Product Subarray's transition.",
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
    "correctText": "Correct. Maximum Product Subarray stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Maximum Product Subarray needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "array-patterns",
  "algorithmSlug": "maximum-product-subarray",
  "runnerInput": [
    [
      2,
      3,
      -2,
      4
    ]
  ]
};
