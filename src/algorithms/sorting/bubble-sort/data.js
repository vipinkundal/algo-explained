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
  "concept": "Repeatedly swap adjacent out-of-order pairs so the largest remaining value bubbles to the end.",
  "logicSummary": "Bubble Sort keeps a clear sorted/unsorted invariant and makes one transition that places values closer to final order.",
  "transitionSummary": "Compare and move values according to the algorithm's invariant until no unsorted work remains.",
  "codeInsight": "The implementation copies the input array, then mutates only the working copy so callers keep their original data.",
  "realLifeExample": "Bubble Sort appears when values must be ordered and the chosen invariant matches the input size or stability needs.",
  "whenToUse": "Use Bubble Sort when its ordering invariant and complexity tradeoff match the dataset.",
  "memoryTrick": "Bubble Sort: protect the invariant after every comparison or move.",
  "visualizerCaption": "A bar swap walkthrough showing Bubble Sort's input, state, transition, and answer.",
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
      "purpose": "The ordered or unsorted list the algorithm scans, partitions, sorts, or transforms."
    },
    {
      "name": "working array and boundaries",
      "purpose": "The in-progress array plus pass, partition, bucket, or merge boundaries. This page visualizes it as bar swap."
    },
    {
      "name": "sorted result",
      "purpose": "The value produced by bubbleSort after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Compare and move values according to the algorithm's invariant until no unsorted work remains. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read inputs",
      "note": "Bubble Sort starts by reading the exact input shape it owns.",
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
