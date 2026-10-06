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
  "meaning": "Sort an array by partitioning around a pivot and recursively sorting both sides.",
  "problem": "Sort an array by partitioning around a pivot and recursively sorting both sides.",
  "concept": "Quick Sort places one pivot in final position, with smaller-or-equal values on the left and larger values on the right.",
  "logicSummary": "Choose a pivot, partition the current range, then recursively sort the left and right partitions.",
  "transitionSummary": "During partition, each value <= pivot swaps into the smaller region; the final pivot swap fixes the pivot index.",
  "codeInsight": "partition returns the pivot's final index, which is excluded from both recursive calls.",
  "realLifeExample": "Use quick sort when average-case speed and in-place partitioning are more important than stability.",
  "whenToUse": "Use Quick Sort for general in-memory sorting with good pivot strategy.",
  "memoryTrick": "Partition first; recurse around the fixed pivot.",
  "visualizerCaption": "Explore Quick Sort through a sample teaching model, then compare it with the runnable result.",
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
    "question": "Which explanation best describes Quick Sort?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      },
      {
        "key": "C",
        "text": "Sort an array by partitioning around a pivot and recursively sorting both sides.",
        "correct": true
      }
    ],
    "correctText": "Correct. Sort an array by partitioning around a pivot and recursively sorting both sides.",
    "incorrectText": "Try again. Sort an array by partitioning around a pivot and recursively sorting both sides. Compare the small example in the lesson with your choice."
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
  },
  "learningGuide": {
    "mentalModel": "An array is a row of numbered slots. An index tells you where a value is; it is not the value itself.",
    "family": "Arrays and indexes",
    "example": "Use last value as pivot: 8 is the pivot for the first full range. Move smaller values left: Every value <= pivot joins the left partition. Swap pivot into place: The pivot lands between smaller and larger values. Sort both sides: The pivot is excluded from recursive ranges.",
    "sampleInput": [
      [
        5,
        1,
        4,
        2,
        8
      ]
    ],
    "sampleResult": [
      1,
      2,
      4,
      5,
      8
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
    "checkpoint": "Explain this in your own words: Sort an array by partitioning around a pivot and recursively sorting both sides."
  },
  "relatedLinks": []
};
