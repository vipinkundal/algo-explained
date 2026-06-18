// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "dutch-national-flag",
  "title": "Dutch National Flag",
  "category": "Array Patterns",
  "route": "/algorithms/array-patterns/dutch-national-flag",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "three-partition",
  "icon": "view_week",
  "codePath": "./src/algorithms/array-patterns/dutch-national-flag/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Dutch National Flag is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Dutch National Flag partitions values into low, middle, and high regions in one pass.",
  "concept": "Dutch National Flag partitions values into low, middle, and high regions in one pass.",
  "logicSummary": "Dutch National Flag keeps an array-specific invariant and updates it as the scan moves through the input.",
  "transitionSummary": "Move the pointer, window, counter, or running value exactly once per step while preserving the invariant.",
  "codeInsight": "The code is written around the array invariant, not a generic scan: each variable explains what future positions can still change.",
  "realLifeExample": "Dutch National Flag appears when contiguous ranges, ordering, or repeated array state can be reused across positions.",
  "whenToUse": "Use Dutch National Flag when the problem statement matches its array invariant.",
  "memoryTrick": "Dutch National Flag: write down the invariant before moving the pointer.",
  "visualizerCaption": "A three partition walkthrough showing Dutch National Flag's input, state, transition, and answer.",
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
      "purpose": "The input values."
    },
    {
      "name": "invariant state",
      "purpose": "The running sum, window, pointer, candidate, or frequency state."
    },
    {
      "name": "answer",
      "purpose": "The best value, transformed array, or matching pair."
    },
    {
      "name": "scan remains",
      "purpose": "Continue while unchecked positions remain."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read inputs",
      "note": "Dutch National Flag starts by reading the exact input shape it owns.",
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
    "question": "Which state choice keeps Dutch National Flag correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Dutch National Flag's transition.",
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
    "correctText": "Correct. Dutch National Flag stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Dutch National Flag needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "array-patterns",
  "algorithmSlug": "dutch-national-flag"
};
