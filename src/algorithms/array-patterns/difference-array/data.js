// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "difference-array",
  "title": "Difference Array",
  "category": "Array Patterns",
  "route": "/algorithms/array-patterns/difference-array",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "range-update",
  "icon": "view_week",
  "codePath": "./src/algorithms/array-patterns/difference-array/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Difference Array is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Difference Array stores only changes at range boundaries, then reconstructs final values with a prefix scan.",
  "concept": "Difference Array stores only changes at range boundaries, then reconstructs final values with a prefix scan.",
  "logicSummary": "Difference Array keeps an array-specific invariant and updates it as the scan moves through the input.",
  "transitionSummary": "Move the pointer, window, counter, or running value exactly once per step while preserving the invariant.",
  "codeInsight": "The code is written around the array invariant, not a generic scan: each variable explains what future positions can still change.",
  "realLifeExample": "Difference Array appears when contiguous ranges, ordering, or repeated array state can be reused across positions.",
  "whenToUse": "Use Difference Array when the problem statement matches its array invariant.",
  "memoryTrick": "Difference Array: write down the invariant before moving the pointer.",
  "visualizerCaption": "A range update walkthrough showing Difference Array's input, state, transition, and answer.",
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
      "name": "length, updates",
      "purpose": "length: The output array length that range updates are applied against. updates: Range operations that change the difference array before reconstruction."
    },
    {
      "name": "difference array",
      "purpose": "Boundary deltas that make each range update O(1) before reconstruction."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by differenceArray after the maintained state reaches the stop rule."
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
      "note": "Difference Array starts by reading the exact input shape it owns.",
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
    "time": "O(n + q) for n length and q updates.",
    "space": "O(n)."
  },
  "quiz": {
    "question": "Which state choice keeps Difference Array correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Difference Array's transition.",
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
    "correctText": "Correct. Difference Array stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Difference Array needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "array-patterns",
  "algorithmSlug": "difference-array",
  "runnerInput": [
    5,
    [
      [
        0,
        2,
        3
      ],
      [
        1,
        4,
        2
      ]
    ]
  ]
};
