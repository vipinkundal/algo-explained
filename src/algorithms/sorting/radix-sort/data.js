// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "radix-sort",
  "title": "Radix Sort",
  "category": "Sorting",
  "route": "/algorithms/sorting/radix-sort",
  "phase": 3,
  "priority": "medium",
  "visualizerType": "digit-buckets",
  "icon": "sort",
  "codePath": "./src/algorithms/sorting/radix-sort/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Radix Sort is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Sort integers digit by digit from least significant to most significant.",
  "concept": "Radix Sort is useful when values distribute naturally into ranges that can be sorted independently. Use this when inputs are spread across buckets and per-bucket sorting is cheaper.",
  "logicSummary": "Create buckets, place each value by range, sort each bucket, and concatenate the buckets.",
  "transitionSummary": "Each value moves into its bucket, then each bucket is locally sorted before concatenation.",
  "codeInsight": "The implementation copies the input array, then mutates only the working copy so callers keep their original data.",
  "realLifeExample": "Radix Sort appears when values must be ordered and the chosen invariant matches the input size or stability needs.",
  "whenToUse": "Use Radix Sort when its ordering invariant and complexity tradeoff match the dataset.",
  "memoryTrick": "Radix Sort: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Radix Sort is shown as values moving toward sorted order. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Create buckets",
      "text": "Divide the value range into buckets."
    },
    {
      "title": "Place values",
      "text": "Map each value to its bucket."
    },
    {
      "title": "Sort buckets",
      "text": "Order values inside each bucket."
    },
    {
      "title": "Concatenate",
      "text": "Join buckets from low to high."
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
      "label": "Buckets",
      "title": "Create bucket ranges",
      "note": "The code creates containers for value ranges.",
      "activeLine": 9,
      "codeInsight": "Creates buckets as empty working state; later lines add and remove values from it."
    },
    {
      "label": "Value",
      "title": "Assign to bucket",
      "note": "Each input value lands in one bucket.",
      "activeLine": 9,
      "codeInsight": "Creates buckets as empty working state; later lines add and remove values from it."
    },
    {
      "label": "Inside bucket",
      "title": "Sort local values",
      "note": "Small bucket lists are ordered independently.",
      "activeLine": 9,
      "codeInsight": "Creates buckets as empty working state; later lines add and remove values from it."
    },
    {
      "label": "Concatenate",
      "title": "Concatenate buckets",
      "note": "Buckets are joined in range order.",
      "activeLine": 12,
      "codeInsight": "Executes this Radix Sort line as part of the highlighted code path, linking the visual step to the implementation."
    }
  ],
  "complexity": {
    "time": "O(d(n + b)) for d digits and b buckets.",
    "space": "O(n + b)."
  },
  "quiz": {
    "question": "Which state choice keeps Radix Sort correct?",
    "options": [
      {
        "key": "A",
        "text": "Track indices and working array and update it only through Radix Sort's transition.",
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
    "correctText": "Correct. Radix Sort stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Radix Sort needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "sorting",
  "algorithmSlug": "radix-sort",
  "runnerInput": [
    [
      4,
      1,
      3,
      2
    ]
  ],
  "animation": {
    "type": "bucket-flow",
    "title": "Radix Sort bucket movement",
    "ruleLabel": "Bucket rule",
    "rule": "Each value moves into its bucket, then each bucket is locally sorted before concatenation.",
    "values": [
      4,
      1,
      3,
      2
    ],
    "buckets": [
      {
        "label": "low range"
      },
      {
        "label": "middle range"
      },
      {
        "label": "high range"
      }
    ],
    "steps": [
      {
        "phase": "Buckets",
        "title": "Create bucket ranges",
        "note": "The code creates containers for value ranges.",
        "ruleLabel": "Radix Sort invariant",
        "rule": "Creates buckets as empty working state; later lines add and remove values from it.",
        "activeValue": 4,
        "bucketIndex": 1,
        "bucketValues": [
          [],
          [
            4
          ],
          []
        ]
      },
      {
        "phase": "Value",
        "title": "Assign to bucket",
        "note": "Each input value lands in one bucket.",
        "ruleLabel": "Radix Sort invariant",
        "rule": "Creates buckets as empty working state; later lines add and remove values from it.",
        "activeValue": 1,
        "bucketIndex": 1,
        "bucketValues": [
          [],
          [
            4,
            1
          ],
          []
        ]
      },
      {
        "phase": "Inside bucket",
        "title": "Sort local values",
        "note": "Small bucket lists are ordered independently.",
        "ruleLabel": "Radix Sort invariant",
        "rule": "Creates buckets as empty working state; later lines add and remove values from it.",
        "activeValue": 3,
        "bucketIndex": 0,
        "bucketValues": [
          [
            3
          ],
          [
            4,
            1
          ],
          []
        ]
      },
      {
        "phase": "Concatenate",
        "title": "Concatenate buckets",
        "note": "Buckets are joined in range order.",
        "ruleLabel": "Radix Sort invariant",
        "rule": "Executes this Radix Sort line as part of the highlighted code path, linking the visual step to the implementation.",
        "activeValue": 2,
        "bucketIndex": 2,
        "bucketValues": [
          [
            3
          ],
          [
            4,
            1
          ],
          [
            2
          ]
        ]
      }
    ]
  }
};
