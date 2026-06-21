// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "matrix-traversal",
  "title": "Matrix Traversal",
  "category": "Matrix and Grid",
  "route": "/algorithms/matrix/matrix-traversal",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "grid-walk",
  "icon": "grid_on",
  "codePath": "./src/algorithms/matrix-and-grid/matrix-traversal/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Matrix Traversal is a Matrix and Grid technique focused on answer.",
  "problem": "Matrix Traversal solves a Matrix and Grid problem by maintaining only the state needed for its grid walk transition.",
  "concept": "Grid algorithms are useful when positions, neighbors, boundaries, or cell states define the problem. Use this when the answer depends on moving through rows, columns, or regions.",
  "logicSummary": "Read dimensions, choose the active cell or boundary, update neighbors or accumulated state, and return the grid result.",
  "transitionSummary": "Each step moves to a valid cell, changes a boundary, or updates a matrix state.",
  "codeInsight": "The implementation keeps Matrix Traversal's state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "Matrix Traversal appears when the input is input and the required result is answer.",
  "whenToUse": "Use Matrix Traversal when a problem matches the Matrix and Grid pattern and the expected state changes match a grid walk dry run.",
  "memoryTrick": "Matrix Traversal: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Matrix Traversal is shown as row/column state changes. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Read grid",
      "text": "Identify dimensions and valid cells."
    },
    {
      "title": "Choose position",
      "text": "Select the current row/column or boundary."
    },
    {
      "title": "Update neighbors",
      "text": "Move, fill, rotate, or accumulate according to the rule."
    },
    {
      "title": "Return grid result",
      "text": "Return count, transformed grid, or lookup answer."
    }
  ],
  "variables": [
    {
      "name": "root",
      "purpose": "The tree node where recursion or traversal begins."
    },
    {
      "name": "row, column, and visited state",
      "purpose": "Cell coordinates and visited or transformed values used by the grid transition. This page visualizes it as grid walk."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by matrixTraversal after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Repeat the grid walk transition until the stop condition for Matrix Traversal is reached. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Grid",
      "title": "Read rows and columns",
      "note": "The code starts from the matrix shape.",
      "activeLine": 1,
      "codeInsight": "The code starts from the matrix shape."
    },
    {
      "label": "Position",
      "title": "Choose active cell",
      "note": "The current row/column controls the next update.",
      "activeLine": 3,
      "codeInsight": "The current row/column controls the next update."
    },
    {
      "label": "Move/update",
      "title": "Apply neighbor or boundary rule",
      "note": "The transition changes reachable cells, boundaries, or accumulated values.",
      "activeLine": 6,
      "codeInsight": "The transition changes reachable cells, boundaries, or accumulated values."
    },
    {
      "label": "Result",
      "title": "Return grid output",
      "note": "The final matrix, count, or query answer is returned.",
      "activeLine": 9,
      "codeInsight": "The final matrix, count, or query answer is returned."
    }
  ],
  "complexity": {
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps Matrix Traversal correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Matrix Traversal's transition.",
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
    "correctText": "Correct. Matrix Traversal stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Matrix Traversal needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "matrix-and-grid",
  "algorithmSlug": "matrix-traversal",
  "runnerInput": [
    [
      [
        1,
        2
      ],
      [
        3,
        4
      ]
    ]
  ],
  "relatedLinks": [
    {
      "id": "ds-matrix-diagonal-matrix",
      "title": "Diagonal Matrix",
      "label": "C/C++ matrix source"
    },
    {
      "id": "ds-matrix-diagonal-matrix-with-c-cpp-class",
      "title": "Diagonal Matrix With C++ Class",
      "label": "C/C++ matrix source"
    },
    {
      "id": "ds-matrix-lower-triangular-matrix",
      "title": "Lower Triangular Matrix",
      "label": "C/C++ matrix source"
    },
    {
      "id": "ds-matrix-c-cpp-lower-triangular-matrix",
      "title": "C++ Lower Triangular Matrix",
      "label": "C/C++ matrix source"
    }
  ],
  "animation": {
    "type": "matrix-flow",
    "title": "Matrix Traversal matrix state",
    "ruleLabel": "Grid rule",
    "rule": "Each step moves to a valid cell, changes a boundary, or updates a matrix state.",
    "matrix": [
      [
        1,
        2
      ],
      [
        3,
        4
      ]
    ],
    "steps": [
      {
        "phase": "Grid",
        "title": "Read rows and columns",
        "note": "The code starts from the matrix shape.",
        "ruleLabel": "Matrix Traversal invariant",
        "rule": "The code starts from the matrix shape.",
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
        "phase": "Position",
        "title": "Choose active cell",
        "note": "The current row/column controls the next update.",
        "ruleLabel": "Matrix Traversal invariant",
        "rule": "The current row/column controls the next update.",
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
        "phase": "Move/update",
        "title": "Apply neighbor or boundary rule",
        "note": "The transition changes reachable cells, boundaries, or accumulated values.",
        "ruleLabel": "Matrix Traversal invariant",
        "rule": "The transition changes reachable cells, boundaries, or accumulated values.",
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
            1,
            0
          ]
        ]
      },
      {
        "phase": "Result",
        "title": "Return grid output",
        "note": "The final matrix, count, or query answer is returned.",
        "ruleLabel": "Matrix Traversal invariant",
        "rule": "The final matrix, count, or query answer is returned.",
        "activeCells": [
          [
            1,
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
          ],
          [
            1,
            0
          ],
          [
            1,
            1
          ]
        ]
      }
    ]
  }
};
