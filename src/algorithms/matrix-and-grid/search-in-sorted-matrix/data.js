// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "search-in-sorted-matrix",
  "title": "Search in Sorted Matrix",
  "category": "Matrix and Grid",
  "route": "/algorithms/matrix/search-in-sorted-matrix",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "matrix-staircase",
  "icon": "grid_on",
  "codePath": "./src/algorithms/matrix-and-grid/search-in-sorted-matrix/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Search in Sorted Matrix is a Matrix and Grid technique focused on sorted array.",
  "problem": "Search in Sorted Matrix is a sorting strategy that repeatedly narrows unsorted work until every value is in order.",
  "concept": "Search in Sorted Matrix is a sorting strategy that repeatedly narrows unsorted work until every value is in order.",
  "logicSummary": "Keep the sorted invariant for Search in Sorted Matrix: each transition makes a pass, partition, merge, heap step, or bucket placement that reduces disorder.",
  "transitionSummary": "Compare, move, swap, merge, or bucket values according to this sorter until no unsorted work remains.",
  "codeInsight": "The implementation copies the input first, then mutates only that working array so the original caller data is not changed.",
  "realLifeExample": "Search in Sorted Matrix appears when the input is array and the required result is sorted array.",
  "whenToUse": "Use Search in Sorted Matrix when a problem matches the Matrix and Grid pattern and the expected state changes match a matrix staircase dry run.",
  "memoryTrick": "Search in Sorted Matrix: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A matrix staircase walkthrough showing Search in Sorted Matrix's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data Search in Sorted Matrix receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by Search in Sorted Matrix."
    },
    {
      "title": "Apply the transition",
      "text": "Run the matrix staircase transition and update the algorithm-specific state."
    },
    {
      "title": "Return the answer",
      "text": "Stop at the correct condition and return the tracked result."
    }
  ],
  "variables": [
    {
      "name": "array, target",
      "purpose": "array: The ordered or unsorted list the algorithm scans, partitions, sorts, or transforms. target: The value or condition each comparison is trying to locate."
    },
    {
      "name": "row, column, and visited state",
      "purpose": "Cell coordinates and visited or transformed values used by the grid transition. This page visualizes it as matrix staircase."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by searchInSortedMatrix after the maintained state reaches the stop rule."
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
      "note": "Read the Search in Sorted Matrix input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that Search in Sorted Matrix changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one matrix staircase transition for Search in Sorted Matrix.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final Search in Sorted Matrix answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "O(n) for the educational reference implementation.",
    "space": "O(n) for tracked state when needed."
  },
  "quiz": {
    "question": "Which state choice keeps Search in Sorted Matrix correct?",
    "options": [
      {
        "key": "A",
        "text": "Track indices and working array and update it only through Search in Sorted Matrix's transition.",
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
    "correctText": "Correct. Search in Sorted Matrix stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Search in Sorted Matrix needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "matrix-and-grid",
  "algorithmSlug": "search-in-sorted-matrix",
  "runnerInput": [
    [
      [
        1,
        3,
        5
      ],
      [
        7,
        9,
        11
      ]
    ],
    9
  ]
};
