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
      "activeLine": 6,
      "codeInsight": "Initializes left as mutable state; later branches update it as the search window or traversal changes."
    },
    {
      "label": "Pointers",
      "title": "Set left and right",
      "note": "Both indices define the current candidate state.",
      "activeLine": 9,
      "codeInsight": "Initializes sum, the local state that the next highlighted lines will update."
    },
    {
      "label": "Compare",
      "title": "Choose pointer movement",
      "note": "The condition decides which pointer moves.",
      "activeLine": 10,
      "codeInsight": "Checks sum === target; only the branch that preserves Two Pointers's invariant is allowed to change state."
    },
    {
      "label": "Pair result",
      "title": "Return pair or state",
      "note": "The loop stops when the target condition is met or exhausted.",
      "activeLine": 14,
      "codeInsight": "Returns [-1, -1], the value produced after Two Pointers's state changes are complete."
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
  ],
  "animation": {
    "type": "array-flow",
    "title": "Two Pointers array state",
    "ruleLabel": "Array invariant",
    "rule": "Each step moves left or right inward instead of trying all combinations.",
    "values": [
      1,
      2,
      4,
      6,
      8
    ],
    "steps": [
      {
        "phase": "Range",
        "title": "Read ordered range",
        "note": "The code receives values where pointer movement has meaning.",
        "ruleLabel": "Two Pointers invariant",
        "rule": "Initializes left as mutable state; later branches update it as the search window or traversal changes.",
        "activeIndices": [
          0
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          1
        ],
        "primaryLabel": "Range",
        "secondaryLabel": "Each step moves left or right inward instead of trying all combinations."
      },
      {
        "phase": "Pointers",
        "title": "Set left and right",
        "note": "Both indices define the current candidate state.",
        "ruleLabel": "Two Pointers invariant",
        "rule": "Initializes sum, the local state that the next highlighted lines will update.",
        "activeIndices": [
          1,
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [
          4
        ],
        "window": [
          0,
          2
        ],
        "primaryLabel": "Pointers",
        "secondaryLabel": "Each step moves left or right inward instead of trying all combinations."
      },
      {
        "phase": "Compare",
        "title": "Choose pointer movement",
        "note": "The condition decides which pointer moves.",
        "ruleLabel": "Two Pointers invariant",
        "rule": "Checks sum === target; only the branch that preserves Two Pointers's invariant is allowed to change state.",
        "activeIndices": [
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          1,
          3
        ],
        "primaryLabel": "Compare",
        "secondaryLabel": "Each step moves left or right inward instead of trying all combinations."
      },
      {
        "phase": "Pair result",
        "title": "Return pair or state",
        "note": "The loop stops when the target condition is met or exhausted.",
        "ruleLabel": "Two Pointers invariant",
        "rule": "Returns [-1, -1], the value produced after Two Pointers's state changes are complete.",
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
        "primaryLabel": "Pair result",
        "secondaryLabel": "Each step moves left or right inward instead of trying all combinations."
      }
    ]
  }
};
