// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "prefix-sum-matrix",
  "title": "Prefix Sum Matrix",
  "category": "Matrix and Grid",
  "route": "/algorithms/matrix/prefix-sum-matrix",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "grid-prefix",
  "icon": "grid_on",
  "codePath": "./src/algorithms/matrix-and-grid/prefix-sum-matrix/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "A two-dimensional prefix sum stores rectangle totals so later rectangle queries can reuse them.",
  "problem": "A two-dimensional prefix sum stores rectangle totals so later rectangle queries can reuse them.",
  "concept": "A two-dimensional prefix sum stores rectangle totals so later rectangle queries can reuse them.",
  "logicSummary": "A two-dimensional prefix sum stores rectangle totals so later rectangle queries can reuse them.",
  "transitionSummary": "For [[1, 2], [3, 4]], the full rectangle totals 10. A subrectangle is found by subtracting the strips above and left, then adding back their overlap.",
  "codeInsight": "A two-dimensional prefix sum stores rectangle totals so later rectangle queries can reuse them.",
  "realLifeExample": "For [[1, 2], [3, 4]], the full rectangle totals 10. A subrectangle is found by subtracting the strips above and left, then adding back their overlap.",
  "whenToUse": "A two-dimensional prefix sum stores rectangle totals so later rectangle queries can reuse them.",
  "memoryTrick": "A two-dimensional prefix sum stores rectangle totals so later rectangle queries can reuse them.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "A two-dimensional prefix sum stores rectangle totals so later rectangle queries can reuse them."
    },
    {
      "title": "Work through a small case",
      "text": "For [[1, 2], [3, 4]], the full rectangle totals 10. A subrectangle is found by subtracting the strips above and left, then adding back their overlap."
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
      "name": "rows",
      "purpose": "Remembers how many items are present; this supports bounds, size reporting, or the stopping rule."
    },
    {
      "name": "cols",
      "purpose": "Remembers how many items are present; this supports bounds, size reporting, or the stopping rule."
    },
    {
      "name": "prefix",
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
      "note": "A two-dimensional prefix sum stores rectangle totals so later rectangle queries can reuse them.",
      "activeLine": 5,
      "codeInsight": "A two-dimensional prefix sum stores rectangle totals so later rectangle queries can reuse them."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "For [[1, 2], [3, 4]], the full rectangle totals 10. A subrectangle is found by subtracting the strips above and left, then adding back their overlap.",
      "activeLine": 14,
      "codeInsight": "A two-dimensional prefix sum stores rectangle totals so later rectangle queries can reuse them."
    }
  ],
  "complexity": {
    "time": "O(R × C) preprocessing, then O(1) per rectangle-sum query.",
    "space": "O(R × C) prefix table."
  },
  "quiz": {
    "question": "Which explanation best describes Prefix Sum Matrix?",
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
        "text": "A two-dimensional prefix sum stores rectangle totals so later rectangle queries can reuse them.",
        "correct": true
      }
    ],
    "correctText": "Correct. A two-dimensional prefix sum stores rectangle totals so later rectangle queries can reuse them.",
    "incorrectText": "Try again. A two-dimensional prefix sum stores rectangle totals so later rectangle queries can reuse them. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "matrix-and-grid",
  "algorithmSlug": "prefix-sum-matrix",
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
    "title": "Prefix Sum Matrix matrix state",
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
        "ruleLabel": "Prefix Sum Matrix invariant",
        "rule": "Defines prefixSumMatrix and names the input matrix; edits to those inputs change the visual state and output.",
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
        "ruleLabel": "Prefix Sum Matrix invariant",
        "rule": "Defines prefixSumMatrix and names the input matrix; edits to those inputs change the visual state and output.",
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
        "ruleLabel": "Prefix Sum Matrix invariant",
        "rule": "Runs the counted loop (let row = 1; row <= rows; row += 1) so each visual step follows one code-controlled iteration.",
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
        "ruleLabel": "Prefix Sum Matrix invariant",
        "rule": "Returns prefix, the final value maintained by Prefix Sum Matrix's code path.",
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
    "example": "For [[1, 2], [3, 4]], the full rectangle totals 10. A subrectangle is found by subtracting the strips above and left, then adding back their overlap.",
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
        0,
        0,
        0
      ],
      [
        0,
        1,
        3
      ],
      [
        0,
        4,
        10
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
    "checkpoint": "Explain this in your own words: A two-dimensional prefix sum stores rectangle totals so later rectangle queries can reuse them."
  },
  "relatedLinks": []
};
