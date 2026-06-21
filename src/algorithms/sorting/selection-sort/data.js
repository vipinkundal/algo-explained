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
  "meaning": "Selection Sort is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Select the smallest item from the unsorted suffix and swap it into the next output slot.",
  "concept": "Selection Sort is useful when you can choose the next smallest value and lock one final position at a time. Use this when clear minimum-selection behavior matters more than minimizing swaps.",
  "logicSummary": "Scan the unsorted suffix for the minimum value, swap it into the next fixed slot, and advance the boundary.",
  "transitionSummary": "Each pass selects one minimum and grows the sorted prefix by one position.",
  "codeInsight": "The implementation copies the input array, then mutates only the working copy so callers keep their original data.",
  "realLifeExample": "Selection Sort appears when values must be ordered and the chosen invariant matches the input size or stability needs.",
  "whenToUse": "Use Selection Sort when its ordering invariant and complexity tradeoff match the dataset.",
  "memoryTrick": "Selection Sort: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Selection Sort is shown as values moving toward sorted order. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Set boundary",
      "text": "Mark the first unsorted slot."
    },
    {
      "title": "Find minimum",
      "text": "Scan the remaining values."
    },
    {
      "title": "Place minimum",
      "text": "Swap the minimum into the boundary slot."
    },
    {
      "title": "Return sorted array",
      "text": "Finish after every slot is fixed."
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
      "label": "Boundary",
      "title": "Choose next fixed slot",
      "note": "The left side is already sorted.",
      "activeLine": 1,
      "codeInsight": "The left side is already sorted."
    },
    {
      "label": "Minimum",
      "title": "Scan unsorted suffix",
      "note": "The code tracks the smallest remaining value.",
      "activeLine": 4,
      "codeInsight": "The code tracks the smallest remaining value."
    },
    {
      "label": "Swap",
      "title": "Place selected value",
      "note": "The minimum moves into its final position.",
      "activeLine": 7,
      "codeInsight": "The minimum moves into its final position."
    },
    {
      "label": "Sorted",
      "title": "Return final order",
      "note": "All positions are fixed after the last pass.",
      "activeLine": 11,
      "codeInsight": "All positions are fixed after the last pass."
    }
  ],
  "complexity": {
    "time": "O(n^2).",
    "space": "O(1)."
  },
  "quiz": {
    "question": "Which state choice keeps Selection Sort correct?",
    "options": [
      {
        "key": "A",
        "text": "Track indices and working array and update it only through Selection Sort's transition.",
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
    "correctText": "Correct. Selection Sort stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Selection Sort needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "sorting",
  "algorithmSlug": "selection-sort",
  "runnerInput": [
    [
      4,
      1,
      3,
      2
    ]
  ]
};
