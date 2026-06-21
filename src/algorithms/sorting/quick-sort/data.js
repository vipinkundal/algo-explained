// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "quick-sort",
  "title": "Quick Sort",
  "category": "Sorting",
  "route": "/algorithms/sorting/quick-sort",
  "phase": 2,
  "priority": "high",
  "visualizerType": "partition",
  "icon": "sort",
  "codePath": "./src/algorithms/sorting/quick-sort/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Quick Sort is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Partition values around a pivot, then recursively sort values smaller and greater than the pivot.",
  "concept": "Quick Sort is useful when a pivot can partition values into smaller and larger sides. Use this when in-place average-case n log n sorting fits the dataset.",
  "logicSummary": "Choose a pivot, partition values around it, then recursively sort the left and right partitions.",
  "transitionSummary": "Each partition step moves values to the correct side of the pivot and fixes the pivot position.",
  "codeInsight": "The implementation copies the input array, then mutates only the working copy so callers keep their original data.",
  "realLifeExample": "Quick Sort appears when values must be ordered and the chosen invariant matches the input size or stability needs.",
  "whenToUse": "Use Quick Sort when its ordering invariant and complexity tradeoff match the dataset.",
  "memoryTrick": "Quick Sort: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Quick Sort is shown as values moving toward sorted order. The numbered steps follow the code path used to maintain the main invariant.",
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
    "time": "Average O(n log n), worst-case O(n^2).",
    "space": "O(log n) average recursion stack."
  },
  "quiz": {
    "question": "Which state choice keeps Quick Sort correct?",
    "options": [
      {
        "key": "A",
        "text": "Track indices and working array and update it only through Quick Sort's transition.",
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
    "correctText": "Correct. Quick Sort stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Quick Sort needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "sorting",
  "algorithmSlug": "quick-sort",
  "runnerInput": [
    [
      4,
      1,
      3,
      2
    ]
  ]
};
