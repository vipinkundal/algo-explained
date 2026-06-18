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
  "concept": "Partition values around a pivot, then recursively sort values smaller and greater than the pivot.",
  "logicSummary": "Quick Sort keeps a clear sorted/unsorted invariant and makes one transition that places values closer to final order.",
  "transitionSummary": "Compare and move values according to the algorithm's invariant until no unsorted work remains.",
  "codeInsight": "The implementation copies the input array, then mutates only the working copy so callers keep their original data.",
  "realLifeExample": "Quick Sort appears when values must be ordered and the chosen invariant matches the input size or stability needs.",
  "whenToUse": "Use Quick Sort when its ordering invariant and complexity tradeoff match the dataset.",
  "memoryTrick": "Quick Sort: protect the invariant after every comparison or move.",
  "visualizerCaption": "A partition walkthrough showing Quick Sort's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Copy input",
      "text": "Avoid mutating the caller's original array."
    },
    {
      "title": "Maintain invariant",
      "text": "Track which part is sorted or partitioned."
    },
    {
      "title": "Move values",
      "text": "Swap, insert, merge, or bucket according to the algorithm."
    },
    {
      "title": "Return sorted result",
      "text": "Return the fully ordered working array."
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
      "label": "Input",
      "title": "Read inputs",
      "note": "Quick Sort starts by reading the exact input shape it owns.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize state",
      "note": "Create only the state needed for this algorithm's invariant.",
      "activeLine": 3
    },
    {
      "label": "Loop",
      "title": "Run transition",
      "note": "Compare and move values according to the algorithm's invariant until no unsorted work remains.",
      "activeLine": 8
    },
    {
      "label": "Answer",
      "title": "Return answer",
      "note": "Return the value produced by the maintained invariant.",
      "activeLine": 12
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
  "algorithmSlug": "quick-sort"
};
