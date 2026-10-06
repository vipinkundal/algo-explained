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
  "meaning": "Spiral traversal visits the outside edges of a matrix, then moves inward to the next ring.",
  "problem": "Spiral traversal visits the outside edges of a matrix, then moves inward to the next ring.",
  "concept": "Spiral traversal visits the outside edges of a matrix, then moves inward to the next ring.",
  "logicSummary": "Spiral traversal visits the outside edges of a matrix, then moves inward to the next ring.",
  "transitionSummary": "For [[1, 2, 3], [4, 5, 6], [7, 8, 9]], visit 1 → 2 → 3 → 6 → 9 → 8 → 7 → 4 → 5.",
  "codeInsight": "Spiral traversal visits the outside edges of a matrix, then moves inward to the next ring.",
  "realLifeExample": "For [[1, 2, 3], [4, 5, 6], [7, 8, 9]], visit 1 → 2 → 3 → 6 → 9 → 8 → 7 → 4 → 5.",
  "whenToUse": "Spiral traversal visits the outside edges of a matrix, then moves inward to the next ring.",
  "memoryTrick": "Spiral traversal visits the outside edges of a matrix, then moves inward to the next ring.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Spiral traversal visits the outside edges of a matrix, then moves inward to the next ring."
    },
    {
      "title": "Work through a small case",
      "text": "For [[1, 2, 3], [4, 5, 6], [7, 8, 9]], visit 1 → 2 → 3 → 6 → 9 → 8 → 7 → 4 → 5."
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
      "name": "result",
      "purpose": "Stores completed answers or computed states so they can be returned and, where needed, reused."
    },
    {
      "name": "top",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
    },
    {
      "name": "bottom",
      "purpose": "Remembers how many items are present; this supports bounds, size reporting, or the stopping rule."
    },
    {
      "name": "left",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
    },
    {
      "name": "right",
      "purpose": "Remembers how many items are present; this supports bounds, size reporting, or the stopping rule."
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
      "note": "Spiral traversal visits the outside edges of a matrix, then moves inward to the next ring.",
      "activeLine": 5,
      "codeInsight": "Spiral traversal visits the outside edges of a matrix, then moves inward to the next ring."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "For [[1, 2, 3], [4, 5, 6], [7, 8, 9]], visit 1 → 2 → 3 → 6 → 9 → 8 → 7 → 4 → 5.",
      "activeLine": 25,
      "codeInsight": "Spiral traversal visits the outside edges of a matrix, then moves inward to the next ring."
    }
  ],
  "complexity": {
    "time": "O(R × C) to visit each cell once.",
    "space": "O(1) boundary state, plus O(R × C) if storing the traversal output."
  },
  "quiz": {
    "question": "Which explanation best describes Spiral Matrix?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "All grid problems allow diagonal movement without checking bounds.",
        "correct": false
      },
      {
        "key": "C",
        "text": "Spiral traversal visits the outside edges of a matrix, then moves inward to the next ring.",
        "correct": true
      }
    ],
    "correctText": "Correct. Spiral traversal visits the outside edges of a matrix, then moves inward to the next ring.",
    "incorrectText": "Try again. Spiral traversal visits the outside edges of a matrix, then moves inward to the next ring. Compare the small example in the lesson with your choice."
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
        "rule": "Defines spiralMatrix and names the input matrix; edits to those inputs change the visual state and output.",
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
        "rule": "Initializes left as mutable state; later branches update it as the search window or traversal changes.",
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
        "rule": "Returns result, the final value maintained by Spiral Matrix's code path.",
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
  },
  "learningGuide": {
    "mentalModel": "A matrix is a grid. Identify a cell by its row first, then its column.",
    "family": "Rows and columns",
    "example": "For [[1, 2, 3], [4, 5, 6], [7, 8, 9]], visit 1 → 2 → 3 → 6 → 9 → 8 → 7 → 4 → 5.",
    "sampleInput": [
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
    "sampleResult": [
      1,
      2,
      3,
      6,
      9,
      8,
      7,
      4,
      5
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
    "checkpoint": "Explain this in your own words: Spiral traversal visits the outside edges of a matrix, then moves inward to the next ring."
  },
  "relatedLinks": []
};
