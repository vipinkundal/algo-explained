// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "dutch-national-flag",
  "title": "Dutch National Flag",
  "category": "Array Patterns",
  "route": "/algorithms/array-patterns/dutch-national-flag",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "three-partition",
  "icon": "view_week",
  "codePath": "./src/algorithms/array-patterns/dutch-national-flag/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Dutch National Flag is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Dutch National Flag partitions values into low, middle, and high regions in one pass.",
  "concept": "Dutch National Flag is useful when a pivot can partition values into smaller and larger sides. Use this when in-place average-case n log n sorting fits the dataset.",
  "logicSummary": "Choose a pivot, partition values around it, then recursively sort the left and right partitions.",
  "transitionSummary": "Each partition step moves values to the correct side of the pivot and fixes the pivot position.",
  "codeInsight": "The code is written around the array invariant, not a generic scan: each variable explains what future positions can still change.",
  "realLifeExample": "Dutch National Flag appears when contiguous ranges, ordering, or repeated array state can be reused across positions.",
  "whenToUse": "Use Dutch National Flag when the problem statement matches its array invariant.",
  "memoryTrick": "Dutch National Flag: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Dutch National Flag is shown as values moving toward sorted order. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Choose pivot",
      "text": "Select the value that splits the range."
    },
    {
      "title": "Partition range",
      "text": "Move smaller values left and larger values right."
    },
    {
      "title": "Fix pivot",
      "text": "Place pivot at its final index."
    },
    {
      "title": "Sort partitions",
      "text": "Recurse on both sides."
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
      "label": "Pivot",
      "title": "Choose pivot value",
      "note": "The pivot defines the partition rule.",
      "activeLine": 1,
      "codeInsight": "Executes this Dutch National Flag line as part of the highlighted code path, linking the visual step to the implementation."
    },
    {
      "label": "Scan",
      "title": "Move values by pivot",
      "note": "Values are compared with the pivot.",
      "activeLine": 4,
      "codeInsight": "This blank line separates Dutch National Flag's setup from the next code block."
    },
    {
      "label": "Place",
      "title": "Fix pivot index",
      "note": "The pivot lands between smaller and larger values.",
      "activeLine": 8,
      "codeInsight": "Initializes mid as mutable state; later branches update it as the search window or traversal changes."
    },
    {
      "label": "Recurse",
      "title": "Sort both sides",
      "note": "The same partition rule handles each side.",
      "activeLine": 11,
      "codeInsight": "Checks values[mid] === 0; only the branch that preserves Dutch National Flag's invariant is allowed to change state."
    }
  ],
  "complexity": {
    "time": "O(n).",
    "space": "O(1)."
  },
  "quiz": {
    "question": "Which state choice keeps Dutch National Flag correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Dutch National Flag's transition.",
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
    "correctText": "Correct. Dutch National Flag stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Dutch National Flag needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "array-patterns",
  "algorithmSlug": "dutch-national-flag",
  "runnerInput": [
    [
      2,
      0,
      2,
      1,
      1,
      0
    ]
  ],
  "animation": {
    "type": "array-flow",
    "title": "Dutch National Flag array state",
    "ruleLabel": "Array invariant",
    "rule": "Each partition step moves values to the correct side of the pivot and fixes the pivot position.",
    "values": [
      2,
      0,
      2,
      1,
      1,
      0
    ],
    "steps": [
      {
        "phase": "Pivot",
        "title": "Choose pivot value",
        "note": "The pivot defines the partition rule.",
        "ruleLabel": "Dutch National Flag invariant",
        "rule": "Executes this Dutch National Flag line as part of the highlighted code path, linking the visual step to the implementation.",
        "activeIndices": [
          0
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          1
        ],
        "primaryLabel": "Pivot",
        "secondaryLabel": "Each partition step moves values to the correct side of the pivot and fixes the pivot position."
      },
      {
        "phase": "Scan",
        "title": "Move values by pivot",
        "note": "Values are compared with the pivot.",
        "ruleLabel": "Dutch National Flag invariant",
        "rule": "This blank line separates Dutch National Flag's setup from the next code block.",
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
        "primaryLabel": "Scan",
        "secondaryLabel": "Each partition step moves values to the correct side of the pivot and fixes the pivot position."
      },
      {
        "phase": "Place",
        "title": "Fix pivot index",
        "note": "The pivot lands between smaller and larger values.",
        "ruleLabel": "Dutch National Flag invariant",
        "rule": "Initializes mid as mutable state; later branches update it as the search window or traversal changes.",
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
        "primaryLabel": "Place",
        "secondaryLabel": "Each partition step moves values to the correct side of the pivot and fixes the pivot position."
      },
      {
        "phase": "Recurse",
        "title": "Sort both sides",
        "note": "The same partition rule handles each side.",
        "ruleLabel": "Dutch National Flag invariant",
        "rule": "Checks values[mid] === 0; only the branch that preserves Dutch National Flag's invariant is allowed to change state.",
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
        "primaryLabel": "Recurse",
        "secondaryLabel": "Each partition step moves values to the correct side of the pivot and fixes the pivot position."
      }
    ]
  }
};
