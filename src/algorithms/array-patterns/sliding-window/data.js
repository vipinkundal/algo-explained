// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "sliding-window",
  "title": "Sliding Window",
  "category": "Array Patterns",
  "route": "/algorithms/array-patterns/sliding-window",
  "phase": 1,
  "priority": "high",
  "visualizerType": "moving-window",
  "icon": "view_week",
  "codePath": "./src/algorithms/array-patterns/sliding-window/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Sliding Window is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Sliding Window reuses a contiguous range instead of recomputing it after every move.",
  "concept": "Sliding-window logic is useful when the answer depends on a contiguous range that changes one edge at a time. Use this when recomputing every range would repeat work.",
  "logicSummary": "Expand or slide the window, remove expired items, and keep the answer from the current valid range.",
  "transitionSummary": "Each step adds the right item and removes or ignores items that no longer belong.",
  "codeInsight": "The code is written around the array invariant, not a generic scan: each variable explains what future positions can still change.",
  "realLifeExample": "Sliding Window appears when contiguous ranges, ordering, or repeated array state can be reused across positions.",
  "whenToUse": "Use Sliding Window when the problem statement matches its array invariant.",
  "memoryTrick": "Sliding Window: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Sliding Window is shown as a moving range over an array. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Open window",
      "text": "Start with an empty or first valid range."
    },
    {
      "title": "Add right edge",
      "text": "Include the next value."
    },
    {
      "title": "Remove stale edge",
      "text": "Shrink or pop values that no longer belong."
    },
    {
      "title": "Record answer",
      "text": "Emit the best value for the current window."
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
      "label": "Window rule",
      "title": "Read array and window rule",
      "note": "The code knows the range size or condition.",
      "activeLine": 1,
      "codeInsight": "The code knows the range size or condition."
    },
    {
      "label": "Right edge",
      "title": "Consume next value",
      "note": "The window grows by one new item.",
      "activeLine": 4,
      "codeInsight": "The window grows by one new item."
    },
    {
      "label": "Left edge",
      "title": "Drop expired state",
      "note": "Values outside the range are removed.",
      "activeLine": 6,
      "codeInsight": "Values outside the range are removed."
    },
    {
      "label": "Window answer",
      "title": "Record current result",
      "note": "The current valid window updates the output.",
      "activeLine": 8,
      "codeInsight": "The current valid window updates the output."
    }
  ],
  "complexity": {
    "time": "O(n).",
    "space": "O(number of windows)."
  },
  "quiz": {
    "question": "Which state choice keeps Sliding Window correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Sliding Window's transition.",
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
    "correctText": "Correct. Sliding Window stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Sliding Window needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "array-patterns",
  "algorithmSlug": "sliding-window",
  "runnerInput": [
    [
      1,
      2,
      3,
      4,
      5
    ],
    3
  ],
  "animation": {
    "type": "array-flow",
    "title": "Sliding Window array state",
    "ruleLabel": "Array invariant",
    "rule": "Each step adds the right item and removes or ignores items that no longer belong.",
    "values": [
      1,
      2,
      3,
      4,
      5
    ],
    "steps": [
      {
        "phase": "Window rule",
        "title": "Read array and window rule",
        "note": "The code knows the range size or condition.",
        "ruleLabel": "Sliding Window invariant",
        "rule": "The code knows the range size or condition.",
        "activeIndices": [
          0
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          1
        ],
        "primaryLabel": "Window rule",
        "secondaryLabel": "Each step adds the right item and removes or ignores items that no longer belong."
      },
      {
        "phase": "Right edge",
        "title": "Consume next value",
        "note": "The window grows by one new item.",
        "ruleLabel": "Sliding Window invariant",
        "rule": "The window grows by one new item.",
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
        "primaryLabel": "Right edge",
        "secondaryLabel": "Each step adds the right item and removes or ignores items that no longer belong."
      },
      {
        "phase": "Left edge",
        "title": "Drop expired state",
        "note": "Values outside the range are removed.",
        "ruleLabel": "Sliding Window invariant",
        "rule": "Values outside the range are removed.",
        "activeIndices": [
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          1,
          3
        ],
        "primaryLabel": "Left edge",
        "secondaryLabel": "Each step adds the right item and removes or ignores items that no longer belong."
      },
      {
        "phase": "Window answer",
        "title": "Record current result",
        "note": "The current valid window updates the output.",
        "ruleLabel": "Sliding Window invariant",
        "rule": "The current valid window updates the output.",
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
        "primaryLabel": "Window answer",
        "secondaryLabel": "Each step adds the right item and removes or ignores items that no longer belong."
      }
    ]
  }
};
