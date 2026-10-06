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
  "meaning": "Matrix traversal visits cells using both a row index and a column index.",
  "problem": "Matrix traversal visits cells using both a row index and a column index.",
  "concept": "Matrix traversal visits cells using both a row index and a column index.",
  "logicSummary": "Matrix traversal visits cells using both a row index and a column index.",
  "transitionSummary": "For [[1, 2], [3, 4]], row-by-row traversal visits 1 → 2 → 3 → 4; column-by-column traversal visits 1 → 3 → 2 → 4.",
  "codeInsight": "Matrix traversal visits cells using both a row index and a column index.",
  "realLifeExample": "For [[1, 2], [3, 4]], row-by-row traversal visits 1 → 2 → 3 → 4; column-by-column traversal visits 1 → 3 → 2 → 4.",
  "whenToUse": "Matrix traversal visits cells using both a row index and a column index.",
  "memoryTrick": "Matrix traversal visits cells using both a row index and a column index.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Matrix traversal visits cells using both a row index and a column index."
    },
    {
      "title": "Work through a small case",
      "text": "For [[1, 2], [3, 4]], row-by-row traversal visits 1 → 2 → 3 → 4; column-by-column traversal visits 1 → 3 → 2 → 4."
    },
    {
      "title": "Check the boundary cases",
      "text": "Check row and column bounds separately. State whether diagonal neighbors are allowed."
    }
  ],
  "variables": [
    {
      "name": "matrix",
      "purpose": "The input grid, addressed by row and column."
    },
    {
      "name": "order",
      "purpose": "Keeps a sequence of sample or working values for the following operations."
    },
    {
      "name": "row",
      "purpose": "Remembers how many items are present; this supports bounds, size reporting, or the stopping rule."
    },
    {
      "name": "col",
      "purpose": "Remembers how many items are present; this supports bounds, size reporting, or the stopping rule."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "Matrix traversal visits cells using both a row index and a column index.",
      "activeLine": 5,
      "codeInsight": "Matrix traversal visits cells using both a row index and a column index."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "For [[1, 2], [3, 4]], row-by-row traversal visits 1 → 2 → 3 → 4; column-by-column traversal visits 1 → 3 → 2 → 4.",
      "activeLine": 10,
      "codeInsight": "Matrix traversal visits cells using both a row index and a column index."
    }
  ],
  "complexity": {
    "time": "O(R × C) for R rows and C columns.",
    "space": "O(1) traversal state; collecting all cells uses O(R × C) output space."
  },
  "quiz": {
    "question": "Which explanation best describes Matrix Traversal?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "Matrix traversal visits cells using both a row index and a column index.",
        "correct": true
      },
      {
        "key": "C",
        "text": "All grid problems allow diagonal movement without checking bounds.",
        "correct": false
      }
    ],
    "correctText": "Correct. Matrix traversal visits cells using both a row index and a column index.",
    "incorrectText": "Try again. Matrix traversal visits cells using both a row index and a column index. Compare the small example in the lesson with your choice."
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
        "rule": "Defines matrixTraversal and names the input matrix; edits to those inputs change the visual state and output.",
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
        "rule": "Defines matrixTraversal and names the input matrix; edits to those inputs change the visual state and output.",
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
        "rule": "Runs the counted loop (let row = 0; row < matrix.length; row += 1) so each visual step follows one code-controlled iteration.",
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
        "rule": "Returns order, the final value maintained by Matrix Traversal's code path.",
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
  },
  "learningGuide": {
    "mentalModel": "A matrix is a grid. Identify a cell by its row first, then its column.",
    "family": "Rows and columns",
    "example": "For [[1, 2], [3, 4]], row-by-row traversal visits 1 → 2 → 3 → 4; column-by-column traversal visits 1 → 3 → 2 → 4.",
    "sampleInput": [
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
    "sampleResult": [
      1,
      2,
      3,
      4
    ],
    "sampleScope": "This is the result of the unedited JavaScript function with the sample arguments. Changing the input or code can change the result.",
    "terms": [
      [
        "Row",
        "A horizontal sequence of cells."
      ],
      [
        "Column",
        "A vertical sequence of cells."
      ],
      [
        "Neighbor",
        "A cell reachable under the chosen adjacency rule."
      ]
    ],
    "pitfall": "Check row and column bounds separately. State whether diagonal neighbors are allowed.",
    "checkpoint": "Explain this in your own words: Matrix traversal visits cells using both a row index and a column index."
  }
};
