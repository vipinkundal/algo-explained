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
  "concept": "Two pointers are useful when moving one side changes the condition predictably. Use this when order lets you skip many pairs or positions.",
  "logicSummary": "Place two indices, inspect their combined state, and move the pointer that can still improve the condition.",
  "transitionSummary": "Each step moves left or right inward instead of trying all combinations.",
  "codeInsight": "The code is written around the array invariant, not a generic scan: each variable explains what future positions can still change.",
  "realLifeExample": "Two Pointers appears when contiguous ranges, ordering, or repeated array state can be reused across positions.",
  "whenToUse": "Use Two Pointers when the problem statement matches its array invariant.",
  "memoryTrick": "Two Pointers: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Two Pointers is shown as two coordinated indices. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Place pointers",
      "text": "Start left and right at meaningful boundaries."
    },
    {
      "title": "Inspect pair",
      "text": "Read the values or state between them."
    },
    {
      "title": "Move one side",
      "text": "Advance the pointer that cannot produce the answer."
    },
    {
      "title": "Return match",
      "text": "Return the pair, range, or transformed array."
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
      "label": "Range",
      "title": "Read ordered range",
      "note": "The code receives values where pointer movement has meaning.",
      "activeLine": 1,
      "codeInsight": "The code receives values where pointer movement has meaning."
    },
    {
      "label": "Pointers",
      "title": "Set left and right",
      "note": "Both indices define the current candidate state.",
      "activeLine": 3,
      "codeInsight": "Both indices define the current candidate state."
    },
    {
      "label": "Compare",
      "title": "Choose pointer movement",
      "note": "The condition decides which pointer moves.",
      "activeLine": 5,
      "codeInsight": "The condition decides which pointer moves."
    },
    {
      "label": "Pair result",
      "title": "Return pair or state",
      "note": "The loop stops when the target condition is met or exhausted.",
      "activeLine": 8,
      "codeInsight": "The loop stops when the target condition is met or exhausted."
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
  "algorithmSlug": "two-pointers",
  "runnerInput": [
    [
      1,
      2,
      4,
      6,
      8
    ],
    10
  ]
};
