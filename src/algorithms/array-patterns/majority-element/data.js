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
  "concept": "Majority Element is useful when algorithm state behavior is the clearest model for the data changes. Use this when the problem is naturally described by page-specific invariant.",
  "logicSummary": "Read the next value or operation, maintain page-specific invariant, then update the state described by this algorithm.",
  "transitionSummary": "Each step changes only the part of the algorithm state required to preserve the invariant.",
  "codeInsight": "The code is written around the array invariant, not a generic scan: each variable explains what future positions can still change.",
  "realLifeExample": "Majority Element appears when contiguous ranges, ordering, or repeated array state can be reused across positions.",
  "whenToUse": "Use Majority Element when the problem statement matches its array invariant.",
  "memoryTrick": "Majority Element: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Majority Element is shown as algorithm state state changes. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Read algorithm state",
      "text": "Identify the next command, value, node, or library call."
    },
    {
      "title": "Inspect invariant",
      "text": "Look at the active algorithm state fields."
    },
    {
      "title": "State change",
      "text": "update the state described by this algorithm."
    },
    {
      "title": "Read result",
      "text": "Return the emitted value or updated structure."
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
      "label": "Algorithm State",
      "title": "Read algorithm state action",
      "note": "The code receives the next value or command.",
      "activeLine": 1,
      "codeInsight": "The code receives the next value or command."
    },
    {
      "label": "Invariant",
      "title": "Inspect algorithm state",
      "note": "The active state must still satisfy page-specific invariant.",
      "activeLine": 3,
      "codeInsight": "The active state must still satisfy page-specific invariant."
    },
    {
      "label": "State change",
      "title": "Update the state described by this algorithm",
      "note": "Only the necessary algorithm state fields are changed.",
      "activeLine": 6,
      "codeInsight": "Only the necessary algorithm state fields are changed."
    },
    {
      "label": "Result",
      "title": "Return visible result",
      "note": "The return value or printed state confirms the operation.",
      "activeLine": 9,
      "codeInsight": "The return value or printed state confirms the operation."
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
  "algorithmSlug": "majority-element",
  "runnerInput": [
    [
      2,
      2,
      1,
      1,
      1,
      2,
      2
    ]
  ],
  "animation": {
    "type": "array-flow",
    "title": "Majority Element array state",
    "ruleLabel": "Array invariant",
    "rule": "Each step changes only the part of the algorithm state required to preserve the invariant.",
    "values": [
      2,
      2,
      1,
      1,
      1,
      2,
      2
    ],
    "steps": [
      {
        "phase": "Algorithm State",
        "title": "Read algorithm state action",
        "note": "The code receives the next value or command.",
        "ruleLabel": "Majority Element invariant",
        "rule": "The code receives the next value or command.",
        "activeIndices": [
          0
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          1
        ],
        "primaryLabel": "Algorithm State",
        "secondaryLabel": "Each step changes only the part of the algorithm state required to preserve the invariant."
      },
      {
        "phase": "Invariant",
        "title": "Inspect algorithm state",
        "note": "The active state must still satisfy page-specific invariant.",
        "ruleLabel": "Majority Element invariant",
        "rule": "The active state must still satisfy page-specific invariant.",
        "activeIndices": [
          1,
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [
          4,
          5,
          6
        ],
        "window": [
          0,
          2
        ],
        "primaryLabel": "Invariant",
        "secondaryLabel": "Each step changes only the part of the algorithm state required to preserve the invariant."
      },
      {
        "phase": "State change",
        "title": "Update the state described by this algorithm",
        "note": "Only the necessary algorithm state fields are changed.",
        "ruleLabel": "Majority Element invariant",
        "rule": "Only the necessary algorithm state fields are changed.",
        "activeIndices": [
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [
          5,
          6
        ],
        "window": [
          1,
          3
        ],
        "primaryLabel": "State change",
        "secondaryLabel": "Each step changes only the part of the algorithm state required to preserve the invariant."
      },
      {
        "phase": "Result",
        "title": "Return visible result",
        "note": "The return value or printed state confirms the operation.",
        "ruleLabel": "Majority Element invariant",
        "rule": "The return value or printed state confirms the operation.",
        "activeIndices": [
          3,
          4
        ],
        "sortedIndices": [],
        "mutedIndices": [
          0,
          6
        ],
        "window": [
          2,
          4
        ],
        "primaryLabel": "Result",
        "secondaryLabel": "Each step changes only the part of the algorithm state required to preserve the invariant."
      }
    ]
  }
};
