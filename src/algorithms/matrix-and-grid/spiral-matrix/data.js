// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "spiral-matrix",
  "title": "Spiral Matrix",
  "category": "Matrix and Grid",
  "route": "/algorithms/matrix/spiral-matrix",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "boundary-grid",
  "icon": "grid_on",
  "codePath": "./src/algorithms/matrix-and-grid/spiral-matrix/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Spiral Matrix is a Matrix and Grid technique focused on answer.",
  "problem": "Spiral Matrix solves a Matrix and Grid problem by maintaining only the state needed for its boundary grid transition.",
  "concept": "Grid algorithms are useful when positions, neighbors, boundaries, or cell states define the problem. Use this when the answer depends on moving through rows, columns, or regions.",
  "logicSummary": "Read dimensions, choose the active cell or boundary, update neighbors or accumulated state, and return the grid result.",
  "transitionSummary": "Each step moves to a valid cell, changes a boundary, or updates a matrix state.",
  "codeInsight": "The implementation keeps Spiral Matrix's state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "Spiral Matrix appears when the input is input and the required result is answer.",
  "whenToUse": "Use Spiral Matrix when a problem matches the Matrix and Grid pattern and the expected state changes match a boundary grid dry run.",
  "memoryTrick": "Spiral Matrix: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Spiral Matrix is shown as row/column state changes. The numbered steps follow the code path used to maintain the main invariant.",
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
      "name": "matrix",
      "purpose": "The two-dimensional structure whose cells are visited or updated."
    },
    {
      "name": "row, column, and visited state",
      "purpose": "Cell coordinates and visited or transformed values used by the grid transition. This page visualizes it as boundary grid."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by spiralMatrix after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Repeat the boundary grid transition until the stop condition for Spiral Matrix is reached. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Grid",
      "title": "Read rows and columns",
      "note": "The code starts from the matrix shape.",
      "activeLine": 6,
      "codeInsight": "Creates result as empty working state; later lines add and remove values from it."
    },
    {
      "label": "Position",
      "title": "Choose active cell",
      "note": "The current row/column controls the next update.",
      "activeLine": 3,
      "codeInsight": "Executes this Spiral Matrix line as part of the highlighted code path, linking the visual step to the implementation."
    },
    {
      "label": "Move/update",
      "title": "Apply neighbor or boundary rule",
      "note": "The transition changes reachable cells, boundaries, or accumulated values.",
      "activeLine": 11,
      "codeInsight": "Repeats while top <= bottom && left <= right is true, so the algorithm keeps resolving current work before moving on."
    },
    {
      "label": "Result",
      "title": "Return grid output",
      "note": "The final matrix, count, or query answer is returned.",
      "activeLine": 25,
      "codeInsight": "Returns result, the value produced after Spiral Matrix's state changes are complete."
    }
  ],
  "complexity": {
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps Spiral Matrix correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Spiral Matrix's transition.",
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
    "correctText": "Correct. Spiral Matrix stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Spiral Matrix needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "matrix-and-grid",
  "algorithmSlug": "spiral-matrix",
  "runnerInput": [
    [
      [
        1,
        2,
        3
      ],
      [
        4,
        5,
        6
      ],
      [
        7,
        8,
        9
      ]
    ]
  ],
  "animation": {
    "type": "matrix-flow",
    "title": "Spiral Matrix matrix state",
    "ruleLabel": "Grid rule",
    "rule": "Each step moves to a valid cell, changes a boundary, or updates a matrix state.",
    "matrix": [
      [
        1,
        2,
        3
      ],
      [
        4,
        5,
        6
      ],
      [
        7,
        8,
        9
      ]
    ],
    "steps": [
      {
        "phase": "Grid",
        "title": "Read rows and columns",
        "note": "The code starts from the matrix shape.",
        "ruleLabel": "Spiral Matrix invariant",
        "rule": "Creates result as empty working state; later lines add and remove values from it.",
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
        "ruleLabel": "Spiral Matrix invariant",
        "rule": "Executes this Spiral Matrix line as part of the highlighted code path, linking the visual step to the implementation.",
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
        "ruleLabel": "Spiral Matrix invariant",
        "rule": "Repeats while top <= bottom && left <= right is true, so the algorithm keeps resolving current work before moving on.",
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
        "phase": "Result",
        "title": "Return grid output",
        "note": "The final matrix, count, or query answer is returned.",
        "ruleLabel": "Spiral Matrix invariant",
        "rule": "Returns result, the value produced after Spiral Matrix's state changes are complete.",
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
