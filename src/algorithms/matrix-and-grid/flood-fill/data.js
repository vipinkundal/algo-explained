// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "flood-fill",
  "title": "Flood Fill",
  "category": "Matrix and Grid",
  "route": "/algorithms/matrix/flood-fill",
  "phase": 2,
  "priority": "high",
  "visualizerType": "grid-bfs-dfs",
  "icon": "grid_on",
  "codePath": "./src/algorithms/matrix-and-grid/flood-fill/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Flood Fill is a Matrix and Grid technique focused on answer.",
  "problem": "Flood Fill solves a Matrix and Grid problem by maintaining only the state needed for its grid bfs dfs transition.",
  "concept": "Grid algorithms are useful when positions, neighbors, boundaries, or cell states define the problem. Use this when the answer depends on moving through rows, columns, or regions.",
  "logicSummary": "Read dimensions, choose the active cell or boundary, update neighbors or accumulated state, and return the grid result.",
  "transitionSummary": "Each step moves to a valid cell, changes a boundary, or updates a matrix state.",
  "codeInsight": "The implementation keeps Flood Fill's state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "Flood Fill appears when the input is input and the required result is answer.",
  "whenToUse": "Use Flood Fill when a problem matches the Matrix and Grid pattern and the expected state changes match a grid bfs dfs dry run.",
  "memoryTrick": "Flood Fill: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Flood Fill is shown as row/column state changes. The numbered steps follow the code path used to maintain the main invariant.",
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
      "purpose": "Cell coordinates and visited or transformed values used by the grid transition. This page visualizes it as grid bfs dfs."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by floodFill after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Repeat the grid bfs dfs transition until the stop condition for Flood Fill is reached. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Grid",
      "title": "Read rows and columns",
      "note": "The code starts from the matrix shape.",
      "activeLine": 5,
      "codeInsight": "Defines floodFill and names the input image, startRow, startCol, newColor; edits to those inputs change the visual state and output."
    },
    {
      "label": "Position",
      "title": "Choose active cell",
      "note": "The current row/column controls the next update.",
      "activeLine": 5,
      "codeInsight": "Defines floodFill and names the input image, startRow, startCol, newColor; edits to those inputs change the visual state and output."
    },
    {
      "label": "Move/update",
      "title": "Apply neighbor or boundary rule",
      "note": "The transition changes reachable cells, boundaries, or accumulated values.",
      "activeLine": 8,
      "codeInsight": "Checks original === undefined || original === newColor; only the branch that preserves Flood Fill's invariant is allowed to change state."
    },
    {
      "label": "Result",
      "title": "Return grid output",
      "note": "The final matrix, count, or query answer is returned.",
      "activeLine": 18,
      "codeInsight": "Returns grid, the final value maintained by Flood Fill's code path."
    }
  ],
  "complexity": {
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps Flood Fill correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Flood Fill's transition.",
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
    "correctText": "Correct. Flood Fill stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Flood Fill needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "matrix-and-grid",
  "algorithmSlug": "flood-fill",
  "runnerInput": [
    [
      [
        1,
        1,
        0
      ],
      [
        1,
        0,
        0
      ]
    ],
    0,
    0,
    2
  ],
  "animation": {
    "type": "matrix-flow",
    "title": "Flood Fill matrix state",
    "ruleLabel": "Grid rule",
    "rule": "Each step moves to a valid cell, changes a boundary, or updates a matrix state.",
    "matrix": [
      [
        1,
        1,
        0
      ],
      [
        1,
        0,
        0
      ]
    ],
    "steps": [
      {
        "phase": "Grid",
        "title": "Read rows and columns",
        "note": "The code starts from the matrix shape.",
        "ruleLabel": "Flood Fill invariant",
        "rule": "Defines floodFill and names the input image, startRow, startCol, newColor; edits to those inputs change the visual state and output.",
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
        "ruleLabel": "Flood Fill invariant",
        "rule": "Defines floodFill and names the input image, startRow, startCol, newColor; edits to those inputs change the visual state and output.",
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
        "ruleLabel": "Flood Fill invariant",
        "rule": "Checks original === undefined || original === newColor; only the branch that preserves Flood Fill's invariant is allowed to change state.",
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
        "ruleLabel": "Flood Fill invariant",
        "rule": "Returns grid, the final value maintained by Flood Fill's code path.",
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
