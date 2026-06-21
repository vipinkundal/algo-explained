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
      "activeLine": 6,
      "codeInsight": "Initializes values, the local state that the next highlighted lines will update."
    },
    {
      "label": "Pair",
      "title": "Compare neighbors",
      "note": "Only adjacent values are inspected.",
      "activeLine": 10,
      "codeInsight": "Checks values[index] > values[index + 1]; only the branch that preserves Bubble Sort's invariant is allowed to change state."
    },
    {
      "label": "Swap",
      "title": "Move larger right",
      "note": "Out-of-order neighbors exchange positions.",
      "activeLine": 7,
      "codeInsight": "Scans the input from left to right so each value gets one chance to resolve earlier pending values."
    },
    {
      "label": "Sorted",
      "title": "Return final order",
      "note": "The last pass confirms every pair is ordered.",
      "activeLine": 17,
      "codeInsight": "Returns values, the value produced after Bubble Sort's state changes are complete."
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
  ],
  "animation": {
    "type": "array-flow",
    "title": "Bubble Sort array state",
    "ruleLabel": "Array invariant",
    "rule": "Each comparison either keeps a pair or swaps it, shrinking disorder near the end of the array.",
    "values": [
      4,
      1,
      3,
      2
    ],
    "steps": [
      {
        "phase": "Array",
        "title": "Copy values",
        "note": "The code starts with the list to reorder.",
        "ruleLabel": "Bubble Sort invariant",
        "rule": "Initializes values, the local state that the next highlighted lines will update.",
        "activeIndices": [
          0
        ],
        "sortedIndices": [
          0
        ],
        "mutedIndices": [],
        "window": [
          0,
          1
        ],
        "primaryLabel": "Array",
        "secondaryLabel": "Each comparison either keeps a pair or swaps it, shrinking disorder near the end of the array."
      },
      {
        "phase": "Pair",
        "title": "Compare neighbors",
        "note": "Only adjacent values are inspected.",
        "ruleLabel": "Bubble Sort invariant",
        "rule": "Checks values[index] > values[index + 1]; only the branch that preserves Bubble Sort's invariant is allowed to change state.",
        "activeIndices": [
          1,
          2
        ],
        "sortedIndices": [
          0
        ],
        "mutedIndices": [],
        "window": [
          0,
          2
        ],
        "primaryLabel": "Pair",
        "secondaryLabel": "Each comparison either keeps a pair or swaps it, shrinking disorder near the end of the array."
      },
      {
        "phase": "Swap",
        "title": "Move larger right",
        "note": "Out-of-order neighbors exchange positions.",
        "ruleLabel": "Bubble Sort invariant",
        "rule": "Scans the input from left to right so each value gets one chance to resolve earlier pending values.",
        "activeIndices": [
          2
        ],
        "sortedIndices": [
          0,
          1
        ],
        "mutedIndices": [],
        "window": [
          1,
          3
        ],
        "primaryLabel": "Swap",
        "secondaryLabel": "Each comparison either keeps a pair or swaps it, shrinking disorder near the end of the array."
      },
      {
        "phase": "Sorted",
        "title": "Return final order",
        "note": "The last pass confirms every pair is ordered.",
        "ruleLabel": "Bubble Sort invariant",
        "rule": "Returns values, the value produced after Bubble Sort's state changes are complete.",
        "activeIndices": [
          3,
          3
        ],
        "sortedIndices": [
          0,
          1,
          2
        ],
        "mutedIndices": [
          0
        ],
        "window": [
          2,
          3
        ],
        "primaryLabel": "Sorted",
        "secondaryLabel": "Each comparison either keeps a pair or swaps it, shrinking disorder near the end of the array."
      }
    ]
  }
};
