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
  "concept": "Maximum Product Subarray is useful when algorithm state behavior is the clearest model for the data changes. Use this when the problem is naturally described by page-specific invariant.",
  "logicSummary": "Read the next value or operation, maintain page-specific invariant, then update the state described by this algorithm.",
  "transitionSummary": "Each step changes only the part of the algorithm state required to preserve the invariant.",
  "codeInsight": "The code is written around the array invariant, not a generic scan: each variable explains what future positions can still change.",
  "realLifeExample": "Maximum Product Subarray appears when contiguous ranges, ordering, or repeated array state can be reused across positions.",
  "whenToUse": "Use Maximum Product Subarray when the problem statement matches its array invariant.",
  "memoryTrick": "Maximum Product Subarray: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Maximum Product Subarray is shown as algorithm state state changes. The numbered steps follow the code path used to maintain the main invariant.",
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
      "activeLine": 10,
      "codeInsight": "Prepares value from the sample collection that the next visual step inspects."
    },
    {
      "label": "Invariant",
      "title": "Inspect algorithm state",
      "note": "The active state must still satisfy page-specific invariant.",
      "activeLine": 10,
      "codeInsight": "Prepares value from the sample collection that the next visual step inspects."
    },
    {
      "label": "State change",
      "title": "Update the state described by this algorithm",
      "note": "Only the necessary algorithm state fields are changed.",
      "activeLine": 9,
      "codeInsight": "Runs the counted loop (let index = 1; index < array.length; index += 1) so each visual step follows one code-controlled iteration."
    },
    {
      "label": "Result",
      "title": "Return visible result",
      "note": "The return value or printed state confirms the operation.",
      "activeLine": 16,
      "codeInsight": "Returns best, the final value maintained by Maximum Product Subarray's code path."
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
  ],
  "animation": {
    "type": "array-flow",
    "title": "Maximum Product Subarray array state",
    "ruleLabel": "Array invariant",
    "rule": "Each step changes only the part of the algorithm state required to preserve the invariant.",
    "values": [
      2,
      3,
      -2,
      4
    ],
    "steps": [
      {
        "phase": "Algorithm State",
        "title": "Read algorithm state action",
        "note": "The code receives the next value or command.",
        "ruleLabel": "Maximum Product Subarray invariant",
        "rule": "Prepares value from the sample collection that the next visual step inspects.",
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
        "ruleLabel": "Maximum Product Subarray invariant",
        "rule": "Prepares value from the sample collection that the next visual step inspects.",
        "activeIndices": [
          1,
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [],
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
        "ruleLabel": "Maximum Product Subarray invariant",
        "rule": "Runs the counted loop (let index = 1; index < array.length; index += 1) so each visual step follows one code-controlled iteration.",
        "activeIndices": [
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [],
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
        "ruleLabel": "Maximum Product Subarray invariant",
        "rule": "Returns best, the final value maintained by Maximum Product Subarray's code path.",
        "activeIndices": [
          3,
          3
        ],
        "sortedIndices": [],
        "mutedIndices": [
          0
        ],
        "window": [
          2,
          3
        ],
        "primaryLabel": "Result",
        "secondaryLabel": "Each step changes only the part of the algorithm state required to preserve the invariant."
      }
    ]
  }
};
