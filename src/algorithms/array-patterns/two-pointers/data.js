// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "two-pointers",
  "title": "Two Pointers",
  "category": "Array Patterns",
  "route": "/algorithms/array-patterns/two-pointers",
  "phase": 1,
  "priority": "high",
  "visualizerType": "two-pointer-array",
  "icon": "view_week",
  "codePath": "./src/algorithms/array-patterns/two-pointers/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Two Pointers is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Two Pointers moves two indices toward a condition without trying every pair.",
  "concept": "Two Pointers moves two indices toward a condition without trying every pair.",
  "logicSummary": "Two Pointers keeps an array-specific invariant and updates it as the scan moves through the input.",
  "transitionSummary": "Move the pointer, window, counter, or running value exactly once per step while preserving the invariant.",
  "codeInsight": "The code is written around the array invariant, not a generic scan: each variable explains what future positions can still change.",
  "realLifeExample": "Two Pointers appears when contiguous ranges, ordering, or repeated array state can be reused across positions.",
  "whenToUse": "Use Two Pointers when the problem statement matches its array invariant.",
  "memoryTrick": "Two Pointers: write down the invariant before moving the pointer.",
  "visualizerCaption": "A two pointer array walkthrough showing Two Pointers' input, state, transition, and answer.",
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
      "note": "Two Pointers starts by reading the exact input shape it owns.",
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
    "question": "Which state choice keeps Two Pointers correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Two Pointers' transition.",
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
    "correctText": "Correct. Two Pointers stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Two Pointers needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "array-patterns",
  "algorithmSlug": "two-pointers"
};
