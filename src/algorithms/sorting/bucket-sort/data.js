// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "bucket-sort",
  "title": "Bucket Sort",
  "category": "Sorting",
  "route": "/algorithms/sorting/bucket-sort",
  "phase": 3,
  "priority": "low",
  "visualizerType": "bucket-groups",
  "icon": "sort",
  "codePath": "./src/algorithms/sorting/bucket-sort/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Bucket Sort is taught here with its own input shape, state, transition, code trace, and stop condition.",
  "problem": "Sort values by distributing them into value-range buckets, sorting each bucket, and concatenating buckets.",
  "concept": "Bucket Sort uses distribution: values with similar ranges go into the same bucket, and bucket order determines global order.",
  "logicSummary": "Find min/max, compute bucket width, place each value into a bucket, sort buckets, and flatten them.",
  "transitionSummary": "Each value maps to exactly one bucket based on its numeric range.",
  "codeInsight": "Bucket width controls the distribution; bad distribution can make one bucket do most of the work.",
  "realLifeExample": "Use it for roughly uniform numeric values such as scores or normalized measurements.",
  "whenToUse": "Use Bucket Sort when values are numeric and spread reasonably across known ranges.",
  "memoryTrick": "Put values in range bins, sort inside bins, read bins left to right.",
  "visualizerCaption": "Bucket Sort is shown with the actual sorted/unsorted state that its code maintains.",
  "logicSteps": [
    {
      "title": "Find min and max",
      "text": "The range determines bucket width."
    },
    {
      "title": "Map values to buckets",
      "text": "Each value enters the bucket for its range."
    },
    {
      "title": "Order inside each bucket",
      "text": "Small buckets are sorted individually."
    },
    {
      "title": "Concatenate bucket order",
      "text": "Lower-range buckets come before higher-range buckets."
    }
  ],
  "variables": [
    {
      "name": "bucketCount",
      "purpose": "Number of buckets to distribute into."
    },
    {
      "name": "min, max, width",
      "purpose": "Range mapping details."
    },
    {
      "name": "buckets",
      "purpose": "Grouped values by range."
    },
    {
      "name": "bucketIndex",
      "purpose": "Destination bucket for the current value."
    }
  ],
  "dryRun": [
    {
      "label": "Range",
      "title": "Find min and max",
      "note": "The range determines bucket width.",
      "activeLine": 3,
      "codeInsight": "A value range is required before assigning buckets."
    },
    {
      "label": "Distribute",
      "title": "Map values to buckets",
      "note": "Each value enters the bucket for its range.",
      "activeLine": 8,
      "codeInsight": "Math.min protects the max value from overflowing the final bucket."
    },
    {
      "label": "Sort buckets",
      "title": "Order inside each bucket",
      "note": "Small buckets are sorted individually.",
      "activeLine": 11,
      "codeInsight": "The educational implementation uses built-in sort inside buckets."
    },
    {
      "label": "Flatten",
      "title": "Concatenate bucket order",
      "note": "Lower-range buckets come before higher-range buckets.",
      "activeLine": 11,
      "codeInsight": "Bucket order creates global ordering."
    }
  ],
  "complexity": {
    "time": "Average O(n + k), plus cost to sort bucket contents.",
    "space": "O(n + k)."
  },
  "quiz": {
    "question": "Which state keeps Bucket Sort correct?",
    "options": [
      {
        "key": "A",
        "text": "Track the algorithm's own sorted region, partition, bucket, count, heap, or digit state.",
        "correct": true
      },
      {
        "key": "B",
        "text": "Use one generic sorted-array story for every sorting algorithm.",
        "correct": false
      },
      {
        "key": "C",
        "text": "Move values without preserving the algorithm's stated invariant.",
        "correct": false
      }
    ],
    "correctText": "Correct. Bucket Sort works because that state and transition match the algorithm.",
    "incorrectText": "Not quite. Bucket Sort needs its own state and stop condition instead of borrowed page logic."
  },
  "categorySlug": "sorting",
  "algorithmSlug": "bucket-sort",
  "runnerInput": [
    [
      29,
      25,
      3,
      49,
      9,
      37,
      21,
      43
    ],
    4
  ],
  "animation": {
    "type": "array-flow",
    "static": true,
    "title": "Bucket Sort trace",
    "ruleLabel": "Sorting invariant",
    "rule": "Each value maps to exactly one bucket based on its numeric range.",
    "values": [
      29,
      25,
      3,
      49,
      9,
      37,
      21,
      43
    ],
    "steps": [
      {
        "phase": "range",
        "title": "Compute buckets",
        "note": "min = 3, max = 49.",
        "ruleLabel": "Sorting invariant",
        "rule": "Each value maps to exactly one bucket based on its numeric range.",
        "activeIndices": [
          2,
          3
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          7
        ],
        "primaryLabel": "range",
        "secondaryLabel": "Each value maps to exactly one bucket based on its numeric range."
      },
      {
        "phase": "bucket",
        "title": "Place 29",
        "note": "29 maps to a middle bucket.",
        "ruleLabel": "Sorting invariant",
        "rule": "Each value maps to exactly one bucket based on its numeric range.",
        "activeIndices": [
          0
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          7
        ],
        "primaryLabel": "bucket",
        "secondaryLabel": "Each value maps to exactly one bucket based on its numeric range."
      },
      {
        "phase": "sort buckets",
        "title": "Sort inside groups",
        "note": "Each bucket is ordered locally.",
        "ruleLabel": "Sorting invariant",
        "rule": "Each value maps to exactly one bucket based on its numeric range.",
        "activeIndices": [
          1,
          6
        ],
        "sortedIndices": [
          2,
          4
        ],
        "mutedIndices": [],
        "window": [
          0,
          7
        ],
        "primaryLabel": "sort buckets",
        "secondaryLabel": "Each value maps to exactly one bucket based on its numeric range."
      },
      {
        "phase": "flatten",
        "title": "Read buckets in order",
        "note": "Concatenation gives sorted output.",
        "ruleLabel": "Sorting invariant",
        "rule": "Each value maps to exactly one bucket based on its numeric range.",
        "activeIndices": [
          0,
          1,
          2,
          3
        ],
        "sortedIndices": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7
        ],
        "mutedIndices": [],
        "window": [
          0,
          7
        ],
        "primaryLabel": "flatten",
        "secondaryLabel": "Each value maps to exactly one bucket based on its numeric range."
      }
    ]
  }
};
