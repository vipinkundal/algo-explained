// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "linear-search",
  "title": "Linear Search",
  "category": "Searching",
  "route": "/algorithms/searching/linear-search",
  "phase": 1,
  "priority": "high",
  "visualizerType": "array-scan",
  "icon": "search",
  "codePath": "./src/algorithms/searching/linear-search/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Linear Search is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Linear Search scans items one by one and stops as soon as the target is found.",
  "concept": "Linear Search scans items one by one and stops as soon as the target is found.",
  "logicSummary": "Start at index 0, compare each value with the target, and return the first matching index.",
  "transitionSummary": "Advance the index by one after every failed comparison.",
  "codeInsight": "The loop has no hidden structure: correctness comes from checking every earlier item before moving forward.",
  "realLifeExample": "Use it for unsorted lists, small inputs, or cases where sorting first would cost more than scanning.",
  "whenToUse": "Use Linear Search when the data is unsorted or a single sequential pass is acceptable.",
  "memoryTrick": "Linear Search: current item either answers now or the scan moves right.",
  "visualizerCaption": "A array scan walkthrough showing Linear Search's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Start at the first element",
      "text": "Initialize index to 0."
    },
    {
      "title": "Compare current value",
      "text": "Check whether array[index] equals target."
    },
    {
      "title": "Move right",
      "text": "Increment index after a miss."
    },
    {
      "title": "Return result",
      "text": "Return the match or -1 after the scan finishes."
    }
  ],
  "variables": [
    {
      "name": "array, target",
      "purpose": "array: The ordered or unsorted list the algorithm scans, partitions, sorts, or transforms. target: The value or condition each comparison is trying to locate."
    },
    {
      "name": "index and comparison",
      "purpose": "The current array position and comparison that decide whether Linear Search returns now or moves on."
    },
    {
      "name": "found index or boundary",
      "purpose": "The value produced by linearSearch after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Advance the index by one after every failed comparison. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read inputs",
      "note": "Linear Search starts by reading the exact input shape it owns.",
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
      "note": "Advance the index by one after every failed comparison.",
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
    "time": "O(n) worst case.",
    "space": "O(1)."
  },
  "quiz": {
    "question": "Which state choice keeps Linear Search correct?",
    "options": [
      {
        "key": "A",
        "text": "Track search window and update it only through Linear Search's transition.",
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
    "correctText": "Correct. Linear Search stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Linear Search needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "searching",
  "algorithmSlug": "linear-search",
  "runnerInput": [
    [
      4,
      2,
      7
    ],
    7
  ]
};
