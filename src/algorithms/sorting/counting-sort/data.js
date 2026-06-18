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
  "meaning": "Counting Sort is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Count occurrences of each integer key, then write values back in key order.",
  "concept": "Count occurrences of each integer key, then write values back in key order.",
  "logicSummary": "Counting Sort keeps a clear sorted/unsorted invariant and makes one transition that places values closer to final order.",
  "transitionSummary": "Compare and move values according to the algorithm's invariant until no unsorted work remains.",
  "codeInsight": "The implementation copies the input array, then mutates only the working copy so callers keep their original data.",
  "realLifeExample": "Counting Sort appears when values must be ordered and the chosen invariant matches the input size or stability needs.",
  "whenToUse": "Use Counting Sort when its ordering invariant and complexity tradeoff match the dataset.",
  "memoryTrick": "Counting Sort: protect the invariant after every comparison or move.",
  "visualizerCaption": "A frequency array walkthrough showing Counting Sort's input, state, transition, and answer.",
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
      "note": "Counting Sort starts by reading the exact input shape it owns.",
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
    "time": "O(n + k), where k is the key range.",
    "space": "O(k)."
  },
  "quiz": {
    "question": "Which state choice keeps Counting Sort correct?",
    "options": [
      {
        "key": "A",
        "text": "Track indices and working array and update it only through Counting Sort's transition.",
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
    "correctText": "Correct. Counting Sort stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Counting Sort needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "sorting",
  "algorithmSlug": "counting-sort"
};
