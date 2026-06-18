// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "kadanes-algorithm",
  "title": "Kadane’s Algorithm",
  "category": "Array Patterns",
  "route": "/algorithms/array-patterns/kadanes-algorithm",
  "phase": 2,
  "priority": "high",
  "visualizerType": "running-sum",
  "icon": "view_week",
  "codePath": "./src/algorithms/array-patterns/kadanes-algorithm/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Kadane’s Algorithm is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Kadane’s Algorithm keeps the best subarray ending here and the best subarray seen anywhere.",
  "concept": "Kadane’s Algorithm keeps the best subarray ending here and the best subarray seen anywhere.",
  "logicSummary": "Kadane’s Algorithm keeps an array-specific invariant and updates it as the scan moves through the input.",
  "transitionSummary": "Move the pointer, window, counter, or running value exactly once per step while preserving the invariant.",
  "codeInsight": "The code is written around the array invariant, not a generic scan: each variable explains what future positions can still change.",
  "realLifeExample": "Kadane’s Algorithm appears when contiguous ranges, ordering, or repeated array state can be reused across positions.",
  "whenToUse": "Use Kadane’s Algorithm when the problem statement matches its array invariant.",
  "memoryTrick": "Kadane’s Algorithm: write down the invariant before moving the pointer.",
  "visualizerCaption": "A running sum walkthrough showing Kadane’s Algorithm's input, state, transition, and answer.",
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
      "note": "Kadane’s Algorithm starts by reading the exact input shape it owns.",
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
    "question": "Which state choice keeps Kadane’s Algorithm correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Kadane’s Algorithm's transition.",
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
    "correctText": "Correct. Kadane’s Algorithm stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Kadane’s Algorithm needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "array-patterns",
  "algorithmSlug": "kadanes-algorithm"
};
