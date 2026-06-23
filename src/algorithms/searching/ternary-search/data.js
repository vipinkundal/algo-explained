// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ternary-search",
  "title": "Ternary Search",
  "category": "Searching",
  "route": "/algorithms/searching/ternary-search",
  "phase": 2,
  "priority": "low",
  "visualizerType": "divided-range",
  "icon": "search",
  "codePath": "./src/algorithms/searching/ternary-search/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Ternary Search is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Ternary Search narrows a unimodal range by comparing two interior points.",
  "concept": "Ternary Search is useful when algorithm state behavior is the clearest model for the data changes. Use this when the problem is naturally described by page-specific invariant.",
  "logicSummary": "Read the next value or operation, maintain page-specific invariant, then update the state described by this algorithm.",
  "transitionSummary": "Each step changes only the part of the algorithm state required to preserve the invariant.",
  "codeInsight": "Ternary search belongs to unimodal functions, not ordinary sorted-array lookup.",
  "realLifeExample": "Use it for discrete or continuous optimization where the function rises then falls.",
  "whenToUse": "Use Ternary Search only when the objective is unimodal.",
  "memoryTrick": "Ternary Search: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Ternary Search is shown as algorithm state state changes. The numbered steps follow the code path used to maintain the main invariant.",
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
      "name": "low, high, evaluate",
      "purpose": "The search bounds and objective function."
    },
    {
      "name": "mid1, mid2",
      "purpose": "Two interior probes."
    },
    {
      "name": "best position",
      "purpose": "The remaining optimum candidate."
    },
    {
      "name": "high - low > precision",
      "purpose": "Stop when the range is small enough."
    }
  ],
  "dryRun": [
    {
      "label": "Algorithm State",
      "title": "Read algorithm state action",
      "note": "The code receives the next value or command.",
      "activeLine": 7,
      "codeInsight": "Stores mid1 so the algorithm can reuse this value without recomputing it."
    },
    {
      "label": "Invariant",
      "title": "Inspect algorithm state",
      "note": "The active state must still satisfy page-specific invariant.",
      "activeLine": 7,
      "codeInsight": "Stores mid1 so the algorithm can reuse this value without recomputing it."
    },
    {
      "label": "State change",
      "title": "Update the state described by this algorithm",
      "note": "Only the necessary algorithm state fields are changed.",
      "activeLine": 6,
      "codeInsight": "Repeats while high - low > precision is true, so the algorithm keeps resolving current work before moving on."
    },
    {
      "label": "Result",
      "title": "Return visible result",
      "note": "The return value or printed state confirms the operation.",
      "activeLine": 12,
      "codeInsight": "Returns (low + high) / 2, the final value maintained by Ternary Search's code path."
    }
  ],
  "complexity": {
    "time": "O(log range / precision).",
    "space": "O(1)."
  },
  "quiz": {
    "question": "Which state choice keeps Ternary Search correct?",
    "options": [
      {
        "key": "A",
        "text": "Track search window and update it only through Ternary Search's transition.",
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
    "correctText": "Correct. Ternary Search stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Ternary Search needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "searching",
  "algorithmSlug": "ternary-search",
  "animation": {
    "type": "array-flow",
    "title": "Ternary Search array state",
    "ruleLabel": "Array invariant",
    "rule": "Each step changes only the part of the algorithm state required to preserve the invariant.",
    "values": [
      4,
      1,
      7,
      3,
      6,
      2
    ],
    "steps": [
      {
        "phase": "Algorithm State",
        "title": "Read algorithm state action",
        "note": "The code receives the next value or command.",
        "ruleLabel": "Ternary Search invariant",
        "rule": "Stores mid1 so the algorithm can reuse this value without recomputing it.",
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
        "ruleLabel": "Ternary Search invariant",
        "rule": "Stores mid1 so the algorithm can reuse this value without recomputing it.",
        "activeIndices": [
          1,
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [
          4,
          5
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
        "ruleLabel": "Ternary Search invariant",
        "rule": "Repeats while high - low > precision is true, so the algorithm keeps resolving current work before moving on.",
        "activeIndices": [
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [
          5
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
        "ruleLabel": "Ternary Search invariant",
        "rule": "Returns (low + high) / 2, the final value maintained by Ternary Search's code path.",
        "activeIndices": [
          3,
          4
        ],
        "sortedIndices": [],
        "mutedIndices": [
          0
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
