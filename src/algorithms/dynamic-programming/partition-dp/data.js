// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "partition-dp",
  "title": "Partition DP",
  "category": "Dynamic Programming",
  "route": "/algorithms/dynamic-programming/partition-dp",
  "phase": 4,
  "priority": "medium",
  "visualizerType": "partition-table",
  "icon": "table_chart",
  "codePath": "./src/algorithms/dynamic-programming/partition-dp/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Partition DP is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Partition DP tracks which subset sums are reachable to decide whether equal partition is possible.",
  "concept": "Partition DP is useful when a pivot can partition values into smaller and larger sides. Use this when in-place average-case n log n sorting fits the dataset.",
  "logicSummary": "Choose a pivot, partition values around it, then recursively sort the left and right partitions.",
  "transitionSummary": "Each partition step moves values to the correct side of the pivot and fixes the pivot position.",
  "codeInsight": "The DP table shape is the algorithm: every index in the code corresponds to a named subproblem.",
  "realLifeExample": "Partition DP appears when overlapping subproblems would otherwise be recomputed.",
  "whenToUse": "Use Partition DP when the recurrence and base cases match the problem statement.",
  "memoryTrick": "Partition DP: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Partition DP is shown as values moving toward sorted order. The numbered steps follow the code path used to maintain the main invariant.",
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
      "name": "input parameters",
      "purpose": "The values that define the DP problem."
    },
    {
      "name": "dp table",
      "purpose": "Stored answers for subproblems."
    },
    {
      "name": "target state",
      "purpose": "The final state returned as the answer."
    },
    {
      "name": "states remain",
      "purpose": "Continue until every dependency needed by the answer is filled."
    }
  ],
  "dryRun": [
    {
      "label": "Pivot",
      "title": "Choose pivot value",
      "note": "The pivot defines the partition rule.",
      "activeLine": 1,
      "codeInsight": "The pivot defines the partition rule."
    },
    {
      "label": "Scan",
      "title": "Move values by pivot",
      "note": "Values are compared with the pivot.",
      "activeLine": 4,
      "codeInsight": "Values are compared with the pivot."
    },
    {
      "label": "Place",
      "title": "Fix pivot index",
      "note": "The pivot lands between smaller and larger values.",
      "activeLine": 8,
      "codeInsight": "The pivot lands between smaller and larger values."
    },
    {
      "label": "Recurse",
      "title": "Sort both sides",
      "note": "The same partition rule handles each side.",
      "activeLine": 11,
      "codeInsight": "The same partition rule handles each side."
    }
  ],
  "complexity": {
    "time": "O(n * target).",
    "space": "O(target)."
  },
  "quiz": {
    "question": "Which state choice keeps Partition DP correct?",
    "options": [
      {
        "key": "A",
        "text": "Track dp table and update it only through Partition DP's transition.",
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
    "correctText": "Correct. Partition DP stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Partition DP needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "dynamic-programming",
  "algorithmSlug": "partition-dp",
  "runnerInput": [
    [
      1,
      5,
      11,
      5
    ]
  ],
  "animation": {
    "type": "array-flow",
    "title": "Partition DP array state",
    "ruleLabel": "Array invariant",
    "rule": "Each partition step moves values to the correct side of the pivot and fixes the pivot position.",
    "values": [
      1,
      5,
      11,
      5
    ],
    "steps": [
      {
        "phase": "Pivot",
        "title": "Choose pivot value",
        "note": "The pivot defines the partition rule.",
        "ruleLabel": "Partition DP invariant",
        "rule": "The pivot defines the partition rule.",
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
        "ruleLabel": "Partition DP invariant",
        "rule": "Values are compared with the pivot.",
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
        "primaryLabel": "Scan",
        "secondaryLabel": "Each partition step moves values to the correct side of the pivot and fixes the pivot position."
      },
      {
        "phase": "Place",
        "title": "Fix pivot index",
        "note": "The pivot lands between smaller and larger values.",
        "ruleLabel": "Partition DP invariant",
        "rule": "The pivot lands between smaller and larger values.",
        "activeIndices": [
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [],
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
        "ruleLabel": "Partition DP invariant",
        "rule": "The same partition rule handles each side.",
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
        "primaryLabel": "Recurse",
        "secondaryLabel": "Each partition step moves values to the correct side of the pivot and fixes the pivot position."
      }
    ]
  }
};
