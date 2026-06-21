// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "longest-consecutive-sequence",
  "title": "Longest Consecutive Sequence",
  "category": "Array Patterns",
  "route": "/algorithms/array-patterns/longest-consecutive-sequence",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "hash-set-chain",
  "icon": "view_week",
  "codePath": "./src/algorithms/array-patterns/longest-consecutive-sequence/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Longest Consecutive Sequence is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Longest Consecutive Sequence starts only at numbers that have no predecessor and counts the chain forward.",
  "concept": "Longest Consecutive Sequence is useful when algorithm state behavior is the clearest model for the data changes. Use this when the problem is naturally described by page-specific invariant.",
  "logicSummary": "Read the next value or operation, maintain page-specific invariant, then update the state described by this algorithm.",
  "transitionSummary": "Each step changes only the part of the algorithm state required to preserve the invariant.",
  "codeInsight": "The code is written around the array invariant, not a generic scan: each variable explains what future positions can still change.",
  "realLifeExample": "Longest Consecutive Sequence appears when contiguous ranges, ordering, or repeated array state can be reused across positions.",
  "whenToUse": "Use Longest Consecutive Sequence when the problem statement matches its array invariant.",
  "memoryTrick": "Longest Consecutive Sequence: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Longest Consecutive Sequence is shown as algorithm state state changes. The numbered steps follow the code path used to maintain the main invariant.",
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
    "time": "O(n) average.",
    "space": "O(n)."
  },
  "quiz": {
    "question": "Which state choice keeps Longest Consecutive Sequence correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Longest Consecutive Sequence's transition.",
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
    "correctText": "Correct. Longest Consecutive Sequence stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Longest Consecutive Sequence needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "array-patterns",
  "algorithmSlug": "longest-consecutive-sequence",
  "runnerInput": [
    [
      100,
      4,
      200,
      1,
      3,
      2
    ]
  ],
  "animation": {
    "type": "string-flow",
    "title": "Longest Consecutive Sequence character scan",
    "ruleLabel": "String invariant",
    "rule": "Each step changes only the part of the algorithm state required to preserve the invariant.",
    "text": "longestconse",
    "pattern": "lon",
    "steps": [
      {
        "phase": "Algorithm State",
        "title": "Read algorithm state action",
        "note": "The code receives the next value or command.",
        "ruleLabel": "Longest Consecutive Sequence invariant",
        "rule": "The code receives the next value or command.",
        "activeRange": [
          0,
          2
        ],
        "matchedRange": []
      },
      {
        "phase": "Invariant",
        "title": "Inspect algorithm state",
        "note": "The active state must still satisfy page-specific invariant.",
        "ruleLabel": "Longest Consecutive Sequence invariant",
        "rule": "The active state must still satisfy page-specific invariant.",
        "activeRange": [
          1,
          3
        ],
        "matchedRange": []
      },
      {
        "phase": "State change",
        "title": "Update the state described by this algorithm",
        "note": "Only the necessary algorithm state fields are changed.",
        "ruleLabel": "Longest Consecutive Sequence invariant",
        "rule": "Only the necessary algorithm state fields are changed.",
        "activeRange": [
          2,
          4
        ],
        "matchedRange": []
      },
      {
        "phase": "Result",
        "title": "Return visible result",
        "note": "The return value or printed state confirms the operation.",
        "ruleLabel": "Longest Consecutive Sequence invariant",
        "rule": "The return value or printed state confirms the operation.",
        "activeRange": [
          3,
          5
        ],
        "matchedRange": [
          0,
          2
        ]
      }
    ]
  }
};
