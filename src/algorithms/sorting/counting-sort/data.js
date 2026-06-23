// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "counting-sort",
  "title": "Counting Sort",
  "category": "Sorting",
  "route": "/algorithms/sorting/counting-sort",
  "phase": 3,
  "priority": "medium",
  "visualizerType": "frequency-array",
  "icon": "sort",
  "codePath": "./src/algorithms/sorting/counting-sort/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Counting Sort is taught here with its own input shape, state, transition, code trace, and stop condition.",
  "problem": "Sort integer values by counting how many times each key appears.",
  "concept": "Counting Sort replaces comparisons with frequency counts over a bounded integer range.",
  "logicSummary": "Find min/max, count each value by offset, then emit every value in increasing key order.",
  "transitionSummary": "Each input value increments exactly one count; output repeats each offset by its count.",
  "codeInsight": "The range width controls memory use, so counting sort is good only when the key range is reasonable.",
  "realLifeExample": "Use it for grades, ages, bytes, or other bounded integer keys.",
  "whenToUse": "Use Counting Sort when values are integers in a small known range.",
  "memoryTrick": "Count keys first, write values later.",
  "visualizerCaption": "Counting Sort is shown with the actual sorted/unsorted state that its code maintains.",
  "logicSteps": [
    {
      "title": "Find min and max",
      "text": "The count array covers every key from min to max."
    },
    {
      "title": "Increment frequencies",
      "text": "Every value updates one count slot."
    },
    {
      "title": "Write repeated keys",
      "text": "The output walks counts from low key to high key."
    },
    {
      "title": "Sorted by key order",
      "text": "No pairwise comparisons were needed."
    }
  ],
  "variables": [
    {
      "name": "min, max",
      "purpose": "Bounds of integer key range."
    },
    {
      "name": "counts",
      "purpose": "Frequency for each value offset."
    },
    {
      "name": "offset",
      "purpose": "Index mapped back to actual value."
    },
    {
      "name": "result",
      "purpose": "Sorted output array."
    }
  ],
  "dryRun": [
    {
      "label": "Bounds",
      "title": "Find min and max",
      "note": "The count array covers every key from min to max.",
      "activeLine": 3,
      "codeInsight": "Offsets let the code support negative values too."
    },
    {
      "label": "Count",
      "title": "Increment frequencies",
      "note": "Every value updates one count slot.",
      "activeLine": 6,
      "codeInsight": "Counting is the main transition."
    },
    {
      "label": "Emit",
      "title": "Write repeated keys",
      "note": "The output walks counts from low key to high key.",
      "activeLine": 9,
      "codeInsight": "Nested output loops reconstruct sorted order."
    },
    {
      "label": "Return",
      "title": "Sorted by key order",
      "note": "No pairwise comparisons were needed.",
      "activeLine": 11,
      "codeInsight": "The result is sorted because offsets are visited in order."
    }
  ],
  "complexity": {
    "time": "O(n + k), where k is max - min + 1.",
    "space": "O(k)."
  },
  "quiz": {
    "question": "Which state keeps Counting Sort correct?",
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
    "correctText": "Correct. Counting Sort works because that state and transition match the algorithm.",
    "incorrectText": "Not quite. Counting Sort needs its own state and stop condition instead of borrowed page logic."
  },
  "categorySlug": "sorting",
  "algorithmSlug": "counting-sort",
  "runnerInput": [
    [
      4,
      2,
      2,
      8,
      3,
      3,
      1
    ]
  ],
  "animation": {
    "type": "array-flow",
    "static": true,
    "title": "Counting Sort trace",
    "ruleLabel": "Sorting invariant",
    "rule": "Each input value increments exactly one count; output repeats each offset by its count.",
    "values": [
      4,
      2,
      2,
      8,
      3,
      3,
      1
    ],
    "steps": [
      {
        "phase": "range",
        "title": "Find key range",
        "note": "min = 1, max = 8.",
        "ruleLabel": "Sorting invariant",
        "rule": "Each input value increments exactly one count; output repeats each offset by its count.",
        "activeIndices": [
          0,
          6
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          6
        ],
        "primaryLabel": "range",
        "secondaryLabel": "Each input value increments exactly one count; output repeats each offset by its count."
      },
      {
        "phase": "count",
        "title": "Count frequencies",
        "note": "2 and 3 each appear twice.",
        "ruleLabel": "Sorting invariant",
        "rule": "Each input value increments exactly one count; output repeats each offset by its count.",
        "activeIndices": [
          1,
          2,
          4,
          5
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          6
        ],
        "primaryLabel": "count",
        "secondaryLabel": "Each input value increments exactly one count; output repeats each offset by its count."
      },
      {
        "phase": "emit",
        "title": "Write low to high",
        "note": "Output starts with 1, 2, 2, 3, 3.",
        "ruleLabel": "Sorting invariant",
        "rule": "Each input value increments exactly one count; output repeats each offset by its count.",
        "activeIndices": [
          6,
          1,
          2
        ],
        "sortedIndices": [
          6,
          1,
          2
        ],
        "mutedIndices": [],
        "window": [
          0,
          6
        ],
        "primaryLabel": "emit",
        "secondaryLabel": "Each input value increments exactly one count; output repeats each offset by its count."
      },
      {
        "phase": "sorted",
        "title": "All counts emitted",
        "note": "The sorted output is complete.",
        "ruleLabel": "Sorting invariant",
        "rule": "Each input value increments exactly one count; output repeats each offset by its count.",
        "activeIndices": [
          0,
          1,
          2,
          3,
          4,
          5,
          6
        ],
        "sortedIndices": [
          0,
          1,
          2,
          3,
          4,
          5,
          6
        ],
        "mutedIndices": [],
        "window": [
          0,
          6
        ],
        "primaryLabel": "sorted",
        "secondaryLabel": "Each input value increments exactly one count; output repeats each offset by its count."
      }
    ]
  }
};
