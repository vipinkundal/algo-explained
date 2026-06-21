// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "bubble-sort",
  "title": "Bubble Sort",
  "category": "Sorting",
  "route": "/algorithms/sorting/bubble-sort",
  "phase": 1,
  "priority": "high",
  "visualizerType": "bar-swap",
  "icon": "sort",
  "codePath": "./src/algorithms/sorting/bubble-sort/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Bubble Sort is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Repeatedly swap adjacent out-of-order pairs so the largest remaining value bubbles to the end.",
  "concept": "Bubble Sort is useful when local adjacent swaps can repeatedly move large values toward the end. Use this when you want the simplest comparison-sort trace for learning adjacent swaps.",
  "logicSummary": "Sweep across adjacent pairs, swap out-of-order neighbors, and repeat until no unsorted pair remains.",
  "transitionSummary": "Each comparison either keeps a pair or swaps it, shrinking disorder near the end of the array.",
  "codeInsight": "The implementation copies the input array, then mutates only the working copy so callers keep their original data.",
  "realLifeExample": "Bubble Sort appears when values must be ordered and the chosen invariant matches the input size or stability needs.",
  "whenToUse": "Use Bubble Sort when its ordering invariant and complexity tradeoff match the dataset.",
  "memoryTrick": "Bubble Sort: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Bubble Sort is shown as values moving toward sorted order. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Copy values",
      "text": "Work on a mutable array."
    },
    {
      "title": "Compare neighbors",
      "text": "Inspect the current adjacent pair."
    },
    {
      "title": "Swap if needed",
      "text": "Move the larger value one position right."
    },
    {
      "title": "Return sorted array",
      "text": "Stop when a pass leaves the order stable."
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
      "label": "Array",
      "title": "Copy values",
      "note": "The code starts with the list to reorder.",
      "activeLine": 1,
      "codeInsight": "The code starts with the list to reorder."
    },
    {
      "label": "Pair",
      "title": "Compare neighbors",
      "note": "Only adjacent values are inspected.",
      "activeLine": 4,
      "codeInsight": "Only adjacent values are inspected."
    },
    {
      "label": "Swap",
      "title": "Move larger right",
      "note": "Out-of-order neighbors exchange positions.",
      "activeLine": 6,
      "codeInsight": "Out-of-order neighbors exchange positions."
    },
    {
      "label": "Sorted",
      "title": "Return final order",
      "note": "The last pass confirms every pair is ordered.",
      "activeLine": 10,
      "codeInsight": "The last pass confirms every pair is ordered."
    }
  ],
  "complexity": {
    "time": "O(n^2) worst case, O(n) best case when already sorted.",
    "space": "O(1)."
  },
  "quiz": {
    "question": "Which state choice keeps Bubble Sort correct?",
    "options": [
      {
        "key": "A",
        "text": "Track indices and working array and update it only through Bubble Sort's transition.",
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
    "correctText": "Correct. Bubble Sort stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Bubble Sort needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "sorting",
  "algorithmSlug": "bubble-sort",
  "runnerInput": [
    [
      4,
      1,
      3,
      2
    ]
  ]
};
