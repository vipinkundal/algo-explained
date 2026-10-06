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
  "meaning": "Sort values by distributing them into value-range buckets, sorting each bucket, and concatenating buckets.",
  "problem": "Sort values by distributing them into value-range buckets, sorting each bucket, and concatenating buckets.",
  "concept": "Bucket Sort uses distribution: values with similar ranges go into the same bucket, and bucket order determines global order.",
  "logicSummary": "Find min/max, compute bucket width, place each value into a bucket, sort buckets, and flatten them.",
  "transitionSummary": "Each value maps to exactly one bucket based on its numeric range.",
  "codeInsight": "Bucket width controls the distribution; bad distribution can make one bucket do most of the work.",
  "realLifeExample": "Use it for roughly uniform numeric values such as scores or normalized measurements.",
  "whenToUse": "Use Bucket Sort when values are numeric and spread reasonably across known ranges.",
  "memoryTrick": "Put values in range bins, sort inside bins, read bins left to right.",
  "visualizerCaption": "Explore Bucket Sort through a sample teaching model, then compare it with the runnable result.",
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
    "question": "Which explanation best describes Bucket Sort?",
    "options": [
      {
        "key": "A",
        "text": "Sort values by distributing them into value-range buckets, sorting each bucket, and concatenating buckets.",
        "correct": true
      },
      {
        "key": "B",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "C",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      }
    ],
    "correctText": "Correct. Sort values by distributing them into value-range buckets, sorting each bucket, and concatenating buckets.",
    "incorrectText": "Try again. Sort values by distributing them into value-range buckets, sorting each bucket, and concatenating buckets. Compare the small example in the lesson with your choice."
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
  },
  "learningGuide": {
    "mentalModel": "An array is a row of numbered slots. An index tells you where a value is; it is not the value itself.",
    "family": "Arrays and indexes",
    "example": "Find min and max: The range determines bucket width. Map values to buckets: Each value enters the bucket for its range. Order inside each bucket: Small buckets are sorted individually. Concatenate bucket order: Lower-range buckets come before higher-range buckets.",
    "sampleInput": [
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
    "sampleResult": [
      3,
      9,
      21,
      25,
      29,
      37,
      43,
      49
    ],
    "sampleScope": "This is the result of the unedited JavaScript function with the sample arguments. Changing the input or code can change the result.",
    "terms": [
      [
        "Index",
        "A position in a sequence, usually starting at 0."
      ],
      [
        "Boundary",
        "The first or last position still being considered."
      ],
      [
        "Invariant",
        "A rule that remains true after each step."
      ]
    ],
    "pitfall": "Keep positions and values separate. Check whether the right boundary is included before changing an index.",
    "checkpoint": "Explain this in your own words: Sort values by distributing them into value-range buckets, sorting each bucket, and concatenating buckets."
  },
  "relatedLinks": []
};
