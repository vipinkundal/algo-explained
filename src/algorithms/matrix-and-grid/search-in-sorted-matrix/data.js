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
  "concept": "Search in Sorted Matrix is useful when values must be placed into a reliable order before later work can be simple. Use this when the algorithm's ordering invariant and cost fit the input size and stability needs.",
  "logicSummary": "Protect the algorithm's ordering invariant until every value reaches final order.",
  "transitionSummary": "Each step compares or moves values so the unsorted region gets smaller.",
  "codeInsight": "The implementation copies the input first, then mutates only that working array so the original caller data is not changed.",
  "realLifeExample": "Search in Sorted Matrix appears when the input is array and the required result is sorted array.",
  "whenToUse": "Use Search in Sorted Matrix when a problem matches the Matrix and Grid pattern and the expected state changes match a matrix staircase dry run.",
  "memoryTrick": "Search in Sorted Matrix: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Search in Sorted Matrix is shown as values moving toward sorted order. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Copy values",
      "text": "Work on a mutable array without changing the original input."
    },
    {
      "title": "Choose invariant",
      "text": "Track the sorted or partitioned region."
    },
    {
      "title": "Move values",
      "text": "Perform the comparison, swap, merge, or placement."
    },
    {
      "title": "Return order",
      "text": "Return the fully sorted array."
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
      "label": "Input array",
      "title": "Copy values",
      "note": "The code starts with the values to reorder.",
      "activeLine": 6,
      "codeInsight": "Checks !matrix.length || !matrix[0].length; only the branch that preserves Search in Sorted Matrix's invariant is allowed to change state."
    },
    {
      "label": "Invariant",
      "title": "Track ordered work",
      "note": "The algorithm marks what part is already safe.",
      "activeLine": 3,
      "codeInsight": "Executes this Search in Sorted Matrix line as part of the highlighted code path, linking the visual step to the implementation."
    },
    {
      "label": "Move",
      "title": "Apply ordering step",
      "note": "The current operation reduces disorder.",
      "activeLine": 6,
      "codeInsight": "Checks !matrix.length || !matrix[0].length; only the branch that preserves Search in Sorted Matrix's invariant is allowed to change state."
    },
    {
      "label": "Sorted output",
      "title": "Return final order",
      "note": "The result is returned when no unsorted work remains.",
      "activeLine": 14,
      "codeInsight": "Returns [-1, -1], the value produced after Search in Sorted Matrix's state changes are complete."
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
  ],
  "animation": {
    "type": "matrix-flow",
    "title": "Search in Sorted Matrix matrix state",
    "ruleLabel": "Grid rule",
    "rule": "Each step compares or moves values so the unsorted region gets smaller.",
    "matrix": [
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
    "steps": [
      {
        "phase": "Input array",
        "title": "Copy values",
        "note": "The code starts with the values to reorder.",
        "ruleLabel": "Search in Sorted Matrix invariant",
        "rule": "Checks !matrix.length || !matrix[0].length; only the branch that preserves Search in Sorted Matrix's invariant is allowed to change state.",
        "activeCells": [
          [
            0,
            0
          ]
        ],
        "visitedCells": [
          [
            0,
            0
          ]
        ]
      },
      {
        "phase": "Invariant",
        "title": "Track ordered work",
        "note": "The algorithm marks what part is already safe.",
        "ruleLabel": "Search in Sorted Matrix invariant",
        "rule": "Executes this Search in Sorted Matrix line as part of the highlighted code path, linking the visual step to the implementation.",
        "activeCells": [
          [
            0,
            1
          ]
        ],
        "visitedCells": [
          [
            0,
            0
          ],
          [
            0,
            1
          ]
        ]
      },
      {
        "phase": "Move",
        "title": "Apply ordering step",
        "note": "The current operation reduces disorder.",
        "ruleLabel": "Search in Sorted Matrix invariant",
        "rule": "Checks !matrix.length || !matrix[0].length; only the branch that preserves Search in Sorted Matrix's invariant is allowed to change state.",
        "activeCells": [
          [
            0,
            2
          ]
        ],
        "visitedCells": [
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ]
        ]
      },
      {
        "phase": "Sorted output",
        "title": "Return final order",
        "note": "The result is returned when no unsorted work remains.",
        "ruleLabel": "Search in Sorted Matrix invariant",
        "rule": "Returns [-1, -1], the value produced after Search in Sorted Matrix's state changes are complete.",
        "activeCells": [
          [
            1,
            0
          ]
        ],
        "visitedCells": [
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ],
          [
            1,
            0
          ]
        ]
      }
    ]
  }
};
