// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "rotate-matrix",
  "title": "Rotate Matrix",
  "category": "Matrix and Grid",
  "route": "/algorithms/matrix/rotate-matrix",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "grid-transform",
  "icon": "grid_on",
  "codePath": "./src/algorithms/matrix-and-grid/rotate-matrix/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Rotating a square matrix by 90 degrees moves each cell into a new row and column.",
  "problem": "Rotating a square matrix by 90 degrees moves each cell into a new row and column.",
  "concept": "Rotating a square matrix by 90 degrees moves each cell into a new row and column.",
  "logicSummary": "Rotating a square matrix by 90 degrees moves each cell into a new row and column.",
  "transitionSummary": "A clockwise rotation turns [[1, 2], [3, 4]] into [[3, 1], [4, 2]]. Transpose, then reverse each row.",
  "codeInsight": "Rotating a square matrix by 90 degrees moves each cell into a new row and column.",
  "realLifeExample": "A clockwise rotation turns [[1, 2], [3, 4]] into [[3, 1], [4, 2]]. Transpose, then reverse each row.",
  "whenToUse": "Rotating a square matrix by 90 degrees moves each cell into a new row and column.",
  "memoryTrick": "Rotating a square matrix by 90 degrees moves each cell into a new row and column.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Rotating a square matrix by 90 degrees moves each cell into a new row and column."
    },
    {
      "title": "Work through a small case",
      "text": "A clockwise rotation turns [[1, 2], [3, 4]] into [[3, 1], [4, 2]]. Transpose, then reverse each row."
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
      "name": "n",
      "purpose": "Remembers how many items are present; this supports bounds, size reporting, or the stopping rule."
    },
    {
      "name": "rotated",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
    },
    {
      "name": "row",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
    },
    {
      "name": "col",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "Rotating a square matrix by 90 degrees moves each cell into a new row and column.",
      "activeLine": 5,
      "codeInsight": "Rotating a square matrix by 90 degrees moves each cell into a new row and column."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "A clockwise rotation turns [[1, 2], [3, 4]] into [[3, 1], [4, 2]]. Transpose, then reverse each row.",
      "activeLine": 11,
      "codeInsight": "Rotating a square matrix by 90 degrees moves each cell into a new row and column."
    }
  ],
  "complexity": {
    "time": "O(n²) to rotate an n-by-n matrix.",
    "space": "O(1) auxiliary state for in-place rotation, or O(n²) for a separate output matrix."
  },
  "quiz": {
    "question": "Which explanation best describes Rotate Matrix?",
    "options": [
      {
        "key": "A",
        "text": "Rotating a square matrix by 90 degrees moves each cell into a new row and column.",
        "correct": true
      },
      {
        "key": "B",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "C",
        "text": "All grid problems allow diagonal movement without checking bounds.",
        "correct": false
      }
    ],
    "correctText": "Correct. Rotating a square matrix by 90 degrees moves each cell into a new row and column.",
    "incorrectText": "Try again. Rotating a square matrix by 90 degrees moves each cell into a new row and column. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "matrix-and-grid",
  "algorithmSlug": "rotate-matrix",
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
  "animation": {
    "type": "matrix-flow",
    "title": "Rotate Matrix matrix state",
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
        "ruleLabel": "Rotate Matrix invariant",
        "rule": "Defines rotateMatrix and names the input matrix; edits to those inputs change the visual state and output.",
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
        "ruleLabel": "Rotate Matrix invariant",
        "rule": "Defines rotateMatrix and names the input matrix; edits to those inputs change the visual state and output.",
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
        "ruleLabel": "Rotate Matrix invariant",
        "rule": "Runs the counted loop (let row = 0; row < n; row += 1) so each visual step follows one code-controlled iteration.",
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
        "ruleLabel": "Rotate Matrix invariant",
        "rule": "Returns rotated, the final value maintained by Rotate Matrix's code path.",
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
    "example": "A clockwise rotation turns [[1, 2], [3, 4]] into [[3, 1], [4, 2]]. Transpose, then reverse each row.",
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
      [
        3,
        1
      ],
      [
        4,
        2
      ]
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
    "checkpoint": "Explain this in your own words: Rotating a square matrix by 90 degrees moves each cell into a new row and column."
  },
  "relatedLinks": []
};
