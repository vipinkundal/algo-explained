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
  "meaning": "Flood Fill changes the connected region of cells that share the starting cell’s color.",
  "problem": "Flood Fill changes the connected region of cells that share the starting cell’s color.",
  "concept": "Flood Fill changes the connected region of cells that share the starting cell’s color.",
  "logicSummary": "Flood Fill changes the connected region of cells that share the starting cell’s color.",
  "transitionSummary": "Starting in one blue cell, recolor blue neighbors and their blue neighbors. A red cell blocks that region.",
  "codeInsight": "Flood Fill changes the connected region of cells that share the starting cell’s color.",
  "realLifeExample": "Starting in one blue cell, recolor blue neighbors and their blue neighbors. A red cell blocks that region.",
  "whenToUse": "Flood Fill changes the connected region of cells that share the starting cell’s color.",
  "memoryTrick": "Flood Fill changes the connected region of cells that share the starting cell’s color.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Flood Fill changes the connected region of cells that share the starting cell’s color."
    },
    {
      "title": "Work through a small case",
      "text": "Starting in one blue cell, recolor blue neighbors and their blue neighbors. A red cell blocks that region."
    },
    {
      "title": "Check the boundary cases",
      "text": "Check row and column bounds separately. State whether diagonal neighbors are allowed."
    }
  ],
  "variables": [
    {
      "name": "image",
      "purpose": "An input to the computation. Compare its position in the function signature with the corresponding sample argument."
    },
    {
      "name": "startRow",
      "purpose": "An input to the computation. Compare its position in the function signature with the corresponding sample argument."
    },
    {
      "name": "startCol",
      "purpose": "An input to the computation. Compare its position in the function signature with the corresponding sample argument."
    },
    {
      "name": "newColor",
      "purpose": "An input to the computation. Compare its position in the function signature with the corresponding sample argument."
    },
    {
      "name": "grid",
      "purpose": "Holds a separate copy of the values so working changes do not overwrite the caller’s array."
    },
    {
      "name": "original",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "Flood Fill changes the connected region of cells that share the starting cell’s color.",
      "activeLine": 5,
      "codeInsight": "Flood Fill changes the connected region of cells that share the starting cell’s color."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "Starting in one blue cell, recolor blue neighbors and their blue neighbors. A red cell blocks that region.",
      "activeLine": 8,
      "codeInsight": "Flood Fill changes the connected region of cells that share the starting cell’s color."
    }
  ],
  "complexity": {
    "time": "O(R × C) in the worst case for a rectangular R-by-C grid.",
    "space": "O(R × C) for a queue, visited set, or recursion stack in the worst case."
  },
  "quiz": {
    "question": "Which explanation best describes Flood Fill?",
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
        "text": "Flood Fill changes the connected region of cells that share the starting cell’s color.",
        "correct": true
      }
    ],
    "correctText": "Correct. Flood Fill changes the connected region of cells that share the starting cell’s color.",
    "incorrectText": "Try again. Flood Fill changes the connected region of cells that share the starting cell’s color. Compare the small example in the lesson with your choice."
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
  },
  "learningGuide": {
    "mentalModel": "A matrix is a grid. Identify a cell by its row first, then its column.",
    "family": "Rows and columns",
    "example": "Starting in one blue cell, recolor blue neighbors and their blue neighbors. A red cell blocks that region.",
    "sampleInput": [
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
    "sampleResult": [
      [
        2,
        2,
        0
      ],
      [
        2,
        0,
        0
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
    "checkpoint": "Explain this in your own words: Flood Fill changes the connected region of cells that share the starting cell’s color."
  },
  "relatedLinks": []
};
