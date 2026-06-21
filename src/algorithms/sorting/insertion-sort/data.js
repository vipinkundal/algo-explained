// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "insertion-sort",
  "title": "Insertion Sort",
  "category": "Sorting",
  "route": "/algorithms/sorting/insertion-sort",
  "phase": 1,
  "priority": "high",
  "visualizerType": "card-insertion",
  "icon": "sort",
  "codePath": "./src/algorithms/sorting/insertion-sort/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Insertion Sort is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Grow a sorted prefix by inserting each next value into its correct position.",
  "concept": "Insertion Sort is useful when a sorted prefix can absorb one new value at a time. Use this when the input is small, nearly sorted, or you want stable insertion behavior.",
  "logicSummary": "Take the next unsorted value, shift larger prefix values right, and insert the value into its sorted position.",
  "transitionSummary": "Each step expands the sorted prefix by inserting one value without disturbing earlier order.",
  "codeInsight": "The implementation copies the input array, then mutates only the working copy so callers keep their original data.",
  "realLifeExample": "Insertion Sort appears when values must be ordered and the chosen invariant matches the input size or stability needs.",
  "whenToUse": "Use Insertion Sort when its ordering invariant and complexity tradeoff match the dataset.",
  "memoryTrick": "Insertion Sort: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Insertion Sort is shown as values moving toward sorted order. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Start prefix",
      "text": "Treat the first value as sorted."
    },
    {
      "title": "Pick key",
      "text": "Take the next unsorted value."
    },
    {
      "title": "Shift larger values",
      "text": "Move larger prefix values right."
    },
    {
      "title": "Insert key",
      "text": "Place the key in the open slot."
    }
  ],
  "variables": [
    {
      "name": "array",
      "purpose": "The values to sort."
    },
    {
      "name": "working array",
      "purpose": "A copy that is rearranged during sorting."
    },
    {
      "name": "sorted array",
      "purpose": "The final ordered result."
    },
    {
      "name": "unsorted work remains",
      "purpose": "Continue until every value is in final order."
    }
  ],
  "dryRun": [
    {
      "label": "Prefix",
      "title": "Start sorted area",
      "note": "The left side is maintained in order.",
      "activeLine": 6,
      "codeInsight": "Initializes values, the local state that the next highlighted lines will update."
    },
    {
      "label": "Key",
      "title": "Read next value",
      "note": "One value is removed from the unsorted side.",
      "activeLine": 6,
      "codeInsight": "Initializes values, the local state that the next highlighted lines will update."
    },
    {
      "label": "Shift",
      "title": "Move larger values",
      "note": "Larger prefix values slide right to create room.",
      "activeLine": 6,
      "codeInsight": "Initializes values, the local state that the next highlighted lines will update."
    },
    {
      "label": "Insert",
      "title": "Place key",
      "note": "The sorted prefix grows by one.",
      "activeLine": 9,
      "codeInsight": "Initializes scan as mutable state; later branches update it as the search window or traversal changes."
    }
  ],
  "complexity": {
    "time": "O(n^2) worst case, O(n) nearly sorted.",
    "space": "O(1)."
  },
  "quiz": {
    "question": "Which state choice keeps Insertion Sort correct?",
    "options": [
      {
        "key": "A",
        "text": "Track indices and working array and update it only through Insertion Sort's transition.",
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
    "correctText": "Correct. Insertion Sort stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Insertion Sort needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "sorting",
  "algorithmSlug": "insertion-sort",
  "runnerInput": [
    [
      4,
      1,
      3,
      2
    ]
  ],
  "animation": {
    "type": "array-flow",
    "title": "Insertion Sort array state",
    "ruleLabel": "Array invariant",
    "rule": "Each step expands the sorted prefix by inserting one value without disturbing earlier order.",
    "values": [
      4,
      1,
      3,
      2
    ],
    "steps": [
      {
        "phase": "Prefix",
        "title": "Start sorted area",
        "note": "The left side is maintained in order.",
        "ruleLabel": "Insertion Sort invariant",
        "rule": "Initializes values, the local state that the next highlighted lines will update.",
        "activeIndices": [
          0
        ],
        "sortedIndices": [
          0
        ],
        "mutedIndices": [],
        "window": [
          0,
          1
        ],
        "primaryLabel": "Prefix",
        "secondaryLabel": "Each step expands the sorted prefix by inserting one value without disturbing earlier order."
      },
      {
        "phase": "Key",
        "title": "Read next value",
        "note": "One value is removed from the unsorted side.",
        "ruleLabel": "Insertion Sort invariant",
        "rule": "Initializes values, the local state that the next highlighted lines will update.",
        "activeIndices": [
          1,
          2
        ],
        "sortedIndices": [
          0
        ],
        "mutedIndices": [],
        "window": [
          0,
          2
        ],
        "primaryLabel": "Key",
        "secondaryLabel": "Each step expands the sorted prefix by inserting one value without disturbing earlier order."
      },
      {
        "phase": "Shift",
        "title": "Move larger values",
        "note": "Larger prefix values slide right to create room.",
        "ruleLabel": "Insertion Sort invariant",
        "rule": "Initializes values, the local state that the next highlighted lines will update.",
        "activeIndices": [
          2
        ],
        "sortedIndices": [
          0,
          1
        ],
        "mutedIndices": [],
        "window": [
          1,
          3
        ],
        "primaryLabel": "Shift",
        "secondaryLabel": "Each step expands the sorted prefix by inserting one value without disturbing earlier order."
      },
      {
        "phase": "Insert",
        "title": "Place key",
        "note": "The sorted prefix grows by one.",
        "ruleLabel": "Insertion Sort invariant",
        "rule": "Initializes scan as mutable state; later branches update it as the search window or traversal changes.",
        "activeIndices": [
          3,
          3
        ],
        "sortedIndices": [
          0,
          1,
          2
        ],
        "mutedIndices": [
          0
        ],
        "window": [
          2,
          3
        ],
        "primaryLabel": "Insert",
        "secondaryLabel": "Each step expands the sorted prefix by inserting one value without disturbing earlier order."
      }
    ]
  }
};
