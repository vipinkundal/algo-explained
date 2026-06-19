// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "cpp-sort",
  "title": "C++ sort()",
  "category": "C++ STL Algorithm Pages",
  "route": "/algorithms/cpp-stl/sort",
  "phase": 1,
  "priority": "high",
  "visualizerType": "comparator-sort",
  "icon": "school",
  "codePath": "./src/algorithms/c-stl-algorithm-pages/cpp-sort/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "C++ sort() is a C++ STL Algorithm Pages technique focused on sorted array.",
  "problem": "C++ sort() is a sorting strategy that repeatedly narrows unsorted work until every value is in order.",
  "concept": "C++ sort() is a sorting strategy that repeatedly narrows unsorted work until every value is in order.",
  "logicSummary": "Keep the sorted invariant for C++ sort(): each transition makes a pass, partition, merge, heap step, or bucket placement that reduces disorder.",
  "transitionSummary": "Compare, move, swap, merge, or bucket values according to this sorter until no unsorted work remains.",
  "codeInsight": "The implementation copies the input first, then mutates only that working array so the original caller data is not changed.",
  "realLifeExample": "C++ sort() appears when the input is array and the required result is sorted array.",
  "whenToUse": "Use C++ sort() when a problem matches the C++ STL Algorithm Pages pattern and the expected state changes match a comparator sort dry run.",
  "memoryTrick": "C++ sort(): name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A comparator sort walkthrough showing C++ sort()'s input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data C++ sort() receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by C++ sort()."
    },
    {
      "title": "Apply the transition",
      "text": "Run the comparator sort transition and update the algorithm-specific state."
    },
    {
      "title": "Return the answer",
      "text": "Stop at the correct condition and return the tracked result."
    }
  ],
  "variables": [
    {
      "name": "array",
      "purpose": "The ordered or unsorted list the algorithm scans, partitions, sorts, or transforms."
    },
    {
      "name": "working state",
      "purpose": "The local state updated by the algorithm transition. This page visualizes it as comparator sort."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by cppSort after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Compare, move, swap, merge, or bucket values according to this sorter until no unsorted work remains. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the C++ sort() input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that C++ sort() changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one comparator sort transition for C++ sort().",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final C++ sort() answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "O(n) for the educational reference implementation.",
    "space": "O(n) for tracked state when needed."
  },
  "quiz": {
    "question": "Which state choice keeps C++ sort() correct?",
    "options": [
      {
        "key": "A",
        "text": "Track indices and working array and update it only through C++ sort()'s transition.",
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
    "correctText": "Correct. C++ sort() stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. C++ sort() needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "c-stl-algorithm-pages",
  "algorithmSlug": "cpp-sort",
  "runnerInput": [
    [
      3,
      1,
      2
    ]
  ]
};
