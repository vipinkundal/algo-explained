// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "majority-element",
  "title": "Majority Element",
  "category": "Array Patterns",
  "route": "/algorithms/array-patterns/majority-element",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "candidate-counter",
  "icon": "view_week",
  "codePath": "./src/algorithms/array-patterns/majority-element/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Majority Element is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Majority Element uses vote cancellation: different values cancel out, leaving the majority candidate.",
  "concept": "Majority Element uses vote cancellation: different values cancel out, leaving the majority candidate.",
  "logicSummary": "Majority Element keeps an array-specific invariant and updates it as the scan moves through the input.",
  "transitionSummary": "Move the pointer, window, counter, or running value exactly once per step while preserving the invariant.",
  "codeInsight": "The code is written around the array invariant, not a generic scan: each variable explains what future positions can still change.",
  "realLifeExample": "Majority Element appears when contiguous ranges, ordering, or repeated array state can be reused across positions.",
  "whenToUse": "Use Majority Element when the problem statement matches its array invariant.",
  "memoryTrick": "Majority Element: write down the invariant before moving the pointer.",
  "visualizerCaption": "A candidate counter walkthrough showing Majority Element's input, state, transition, and answer.",
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
      "note": "Majority Element starts by reading the exact input shape it owns.",
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
    "question": "Which state choice keeps Majority Element correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Majority Element's transition.",
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
    "correctText": "Correct. Majority Element stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Majority Element needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "array-patterns",
  "algorithmSlug": "majority-element"
};
