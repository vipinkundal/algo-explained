// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "selection-sort",
  "title": "Selection Sort",
  "category": "Sorting",
  "route": "/algorithms/sorting/selection-sort",
  "phase": 1,
  "priority": "high",
  "visualizerType": "min-selection",
  "icon": "sort",
  "codePath": "./src/algorithms/sorting/selection-sort/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Sort an array by repeatedly selecting the smallest value from the unsorted suffix.",
  "problem": "Sort an array by repeatedly selecting the smallest value from the unsorted suffix.",
  "concept": "Selection Sort grows a sorted prefix; each pass chooses the smallest remaining item and swaps it into the next prefix slot.",
  "logicSummary": "For each start index, scan the suffix for the minimum value, then swap it into start.",
  "transitionSummary": "The minimum candidate changes during the suffix scan; after the scan one swap extends the sorted prefix.",
  "codeInsight": "Unlike bubble sort, selection sort performs at most one swap per outer pass.",
  "realLifeExample": "Use it when swaps are expensive but comparisons are acceptable, or when teaching prefix invariants.",
  "whenToUse": "Use Selection Sort for small arrays or educational traces of minimum selection.",
  "memoryTrick": "Pick the smallest remaining card and place it next.",
  "visualizerCaption": "Explore Selection Sort through a sample teaching model, then compare it with the runnable result.",
  "logicSteps": [
    {
      "title": "Scan suffix",
      "text": "Find the smallest value among all positions."
    },
    {
      "title": "Swap into prefix",
      "text": "Move 1 into index 0."
    },
    {
      "title": "Find next minimum",
      "text": "The sorted prefix is protected while the suffix is scanned."
    },
    {
      "title": "Prefix covers array",
      "text": "Every position has received the smallest remaining value."
    }
  ],
  "variables": [
    {
      "name": "start",
      "purpose": "Next sorted-prefix position."
    },
    {
      "name": "minIndex",
      "purpose": "Smallest value seen in the suffix scan."
    },
    {
      "name": "index",
      "purpose": "Current suffix scanner."
    },
    {
      "name": "values",
      "purpose": "Working array."
    }
  ],
  "dryRun": [
    {
      "label": "start = 0",
      "title": "Scan suffix",
      "note": "Find the smallest value among all positions.",
      "activeLine": 4,
      "codeInsight": "minIndex stores the best candidate, not the final answer yet."
    },
    {
      "label": "min = 1",
      "title": "Swap into prefix",
      "note": "Move 1 into index 0.",
      "activeLine": 8,
      "codeInsight": "Only one swap happens after the full scan."
    },
    {
      "label": "start = 1",
      "title": "Find next minimum",
      "note": "The sorted prefix is protected while the suffix is scanned.",
      "activeLine": 4,
      "codeInsight": "start separates sorted and unsorted regions."
    },
    {
      "label": "Done",
      "title": "Prefix covers array",
      "note": "Every position has received the smallest remaining value.",
      "activeLine": 10,
      "codeInsight": "The invariant is sorted prefix plus unsorted suffix."
    }
  ],
  "complexity": {
    "time": "O(n^2).",
    "space": "O(1)."
  },
  "quiz": {
    "question": "Which explanation best describes Selection Sort?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "Sort an array by repeatedly selecting the smallest value from the unsorted suffix.",
        "correct": true
      },
      {
        "key": "C",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      }
    ],
    "correctText": "Correct. Sort an array by repeatedly selecting the smallest value from the unsorted suffix.",
    "incorrectText": "Try again. Sort an array by repeatedly selecting the smallest value from the unsorted suffix. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "sorting",
  "algorithmSlug": "selection-sort",
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
    "title": "Selection Sort trace",
    "ruleLabel": "Sorting invariant",
    "rule": "The minimum candidate changes during the suffix scan; after the scan one swap extends the sorted prefix.",
    "values": [
      5,
      1,
      4,
      2,
      8
    ],
    "steps": [
      {
        "phase": "start 0",
        "title": "Scan for minimum",
        "note": "1 is the minimum candidate.",
        "ruleLabel": "Sorting invariant",
        "rule": "The minimum candidate changes during the suffix scan; after the scan one swap extends the sorted prefix.",
        "activeIndices": [
          0,
          1
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          4
        ],
        "primaryLabel": "start 0",
        "secondaryLabel": "The minimum candidate changes during the suffix scan; after the scan one swap extends the sorted prefix."
      },
      {
        "phase": "swap",
        "title": "Place 1 first",
        "note": "The sorted prefix now has one value.",
        "ruleLabel": "Sorting invariant",
        "rule": "The minimum candidate changes during the suffix scan; after the scan one swap extends the sorted prefix.",
        "activeIndices": [
          0,
          1
        ],
        "sortedIndices": [
          0
        ],
        "mutedIndices": [],
        "window": [
          1,
          4
        ],
        "primaryLabel": "swap",
        "secondaryLabel": "The minimum candidate changes during the suffix scan; after the scan one swap extends the sorted prefix."
      },
      {
        "phase": "start 1",
        "title": "Find 2",
        "note": "Scan the remaining suffix.",
        "ruleLabel": "Sorting invariant",
        "rule": "The minimum candidate changes during the suffix scan; after the scan one swap extends the sorted prefix.",
        "activeIndices": [
          1,
          3
        ],
        "sortedIndices": [
          0
        ],
        "mutedIndices": [],
        "window": [
          1,
          4
        ],
        "primaryLabel": "start 1",
        "secondaryLabel": "The minimum candidate changes during the suffix scan; after the scan one swap extends the sorted prefix."
      },
      {
        "phase": "sorted",
        "title": "Prefix complete",
        "note": "Each pass fixes exactly one position.",
        "ruleLabel": "Sorting invariant",
        "rule": "The minimum candidate changes during the suffix scan; after the scan one swap extends the sorted prefix.",
        "activeIndices": [
          4
        ],
        "sortedIndices": [
          0,
          1,
          2,
          3,
          4
        ],
        "mutedIndices": [],
        "window": [
          0,
          4
        ],
        "primaryLabel": "sorted",
        "secondaryLabel": "The minimum candidate changes during the suffix scan; after the scan one swap extends the sorted prefix."
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "An array is a row of numbered slots. An index tells you where a value is; it is not the value itself.",
    "family": "Arrays and indexes",
    "example": "Scan suffix: Find the smallest value among all positions. Swap into prefix: Move 1 into index 0. Find next minimum: The sorted prefix is protected while the suffix is scanned. Prefix covers array: Every position has received the smallest remaining value.",
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
    "checkpoint": "Explain this in your own words: Sort an array by repeatedly selecting the smallest value from the unsorted suffix."
  },
  "relatedLinks": []
};
