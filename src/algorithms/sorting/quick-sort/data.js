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
  "meaning": "Quick Sort is taught here with its own input shape, state, transition, code trace, and stop condition.",
  "problem": "Sort an array by partitioning around a pivot and recursively sorting both sides.",
  "concept": "Quick Sort places one pivot in final position, with smaller-or-equal values on the left and larger values on the right.",
  "logicSummary": "Choose a pivot, partition the current range, then recursively sort the left and right partitions.",
  "transitionSummary": "During partition, each value <= pivot swaps into the smaller region; the final pivot swap fixes the pivot index.",
  "codeInsight": "partition returns the pivot's final index, which is excluded from both recursive calls.",
  "realLifeExample": "Use quick sort when average-case speed and in-place partitioning are more important than stability.",
  "whenToUse": "Use Quick Sort for general in-memory sorting with good pivot strategy.",
  "memoryTrick": "Partition first; recurse around the fixed pivot.",
  "visualizerCaption": "Quick Sort is shown with the actual sorted/unsorted state that its code maintains.",
  "logicSteps": [
    {
      "title": "Use last value as pivot",
      "text": "8 is the pivot for the first full range."
    },
    {
      "title": "Move smaller values left",
      "text": "Every value <= pivot joins the left partition."
    },
    {
      "title": "Swap pivot into place",
      "text": "The pivot lands between smaller and larger values."
    },
    {
      "title": "Sort both sides",
      "text": "The pivot is excluded from recursive ranges."
    }
  ],
  "variables": [
    {
      "name": "low, high",
      "purpose": "Current partition range."
    },
    {
      "name": "pivot",
      "purpose": "Value used to split the range."
    },
    {
      "name": "smaller",
      "purpose": "Boundary of values <= pivot."
    },
    {
      "name": "pivotIndex",
      "purpose": "Final pivot position."
    }
  ],
  "dryRun": [
    {
      "label": "Pivot",
      "title": "Use last value as pivot",
      "note": "8 is the pivot for the first full range.",
      "activeLine": 11,
      "codeInsight": "This implementation chooses values[high]."
    },
    {
      "label": "Partition",
      "title": "Move smaller values left",
      "note": "Every value <= pivot joins the left partition.",
      "activeLine": 15,
      "codeInsight": "smaller marks the next slot for a small value."
    },
    {
      "label": "Fix pivot",
      "title": "Swap pivot into place",
      "note": "The pivot lands between smaller and larger values.",
      "activeLine": 20,
      "codeInsight": "The pivot index is final after this swap."
    },
    {
      "label": "Recurse",
      "title": "Sort both sides",
      "note": "The pivot is excluded from recursive ranges.",
      "activeLine": 7,
      "codeInsight": "Recursive calls work on [low, pivot-1] and [pivot+1, high]."
    }
  ],
  "complexity": {
    "time": "Average O(n log n), worst case O(n^2).",
    "space": "O(log n) average recursion stack."
  },
  "quiz": {
    "question": "Which state keeps Quick Sort correct?",
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
    "correctText": "Correct. Quick Sort works because that state and transition match the algorithm.",
    "incorrectText": "Not quite. Quick Sort needs its own state and stop condition instead of borrowed page logic."
  },
  "categorySlug": "sorting",
  "algorithmSlug": "quick-sort",
  "runnerInput": [
    [
      5,
      1,
      4,
      2,
      8
    ]
  ],
  "animation": {
    "type": "array-flow",
    "static": true,
    "title": "Quick Sort trace",
    "ruleLabel": "Sorting invariant",
    "rule": "During partition, each value <= pivot swaps into the smaller region; the final pivot swap fixes the pivot index.",
    "values": [
      5,
      1,
      4,
      2,
      8
    ],
    "steps": [
      {
        "phase": "pivot 8",
        "title": "Choose pivot",
        "note": "The last value is pivot.",
        "ruleLabel": "Sorting invariant",
        "rule": "During partition, each value <= pivot swaps into the smaller region; the final pivot swap fixes the pivot index.",
        "activeIndices": [
          4
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          4
        ],
        "primaryLabel": "pivot 8",
        "secondaryLabel": "During partition, each value <= pivot swaps into the smaller region; the final pivot swap fixes the pivot index."
      },
      {
        "phase": "partition",
        "title": "Move <= pivot left",
        "note": "All values are <= 8 in this pass.",
        "ruleLabel": "Sorting invariant",
        "rule": "During partition, each value <= pivot swaps into the smaller region; the final pivot swap fixes the pivot index.",
        "activeIndices": [
          0,
          1,
          2,
          3
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          4
        ],
        "primaryLabel": "partition",
        "secondaryLabel": "During partition, each value <= pivot swaps into the smaller region; the final pivot swap fixes the pivot index."
      },
      {
        "phase": "pivot fixed",
        "title": "8 lands at end",
        "note": "The pivot is in final position.",
        "ruleLabel": "Sorting invariant",
        "rule": "During partition, each value <= pivot swaps into the smaller region; the final pivot swap fixes the pivot index.",
        "activeIndices": [
          4
        ],
        "sortedIndices": [
          4
        ],
        "mutedIndices": [],
        "window": [
          0,
          3
        ],
        "primaryLabel": "pivot fixed",
        "secondaryLabel": "During partition, each value <= pivot swaps into the smaller region; the final pivot swap fixes the pivot index."
      },
      {
        "phase": "recurse",
        "title": "Sort left side",
        "note": "Repeat partitioning for the left range.",
        "ruleLabel": "Sorting invariant",
        "rule": "During partition, each value <= pivot swaps into the smaller region; the final pivot swap fixes the pivot index.",
        "activeIndices": [
          0,
          3
        ],
        "sortedIndices": [
          4
        ],
        "mutedIndices": [],
        "window": [
          0,
          3
        ],
        "primaryLabel": "recurse",
        "secondaryLabel": "During partition, each value <= pivot swaps into the smaller region; the final pivot swap fixes the pivot index."
      }
    ]
  }
};
