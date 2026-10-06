// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "island-counting",
  "title": "Island Counting",
  "category": "Matrix and Grid",
  "route": "/algorithms/matrix/island-counting",
  "phase": 2,
  "priority": "high",
  "visualizerType": "grid-bfs-dfs",
  "icon": "grid_on",
  "codePath": "./src/algorithms/matrix-and-grid/island-counting/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Island Counting counts separate connected groups of land cells, marking a whole group before counting another.",
  "problem": "Island Counting counts separate connected groups of land cells, marking a whole group before counting another.",
  "concept": "Island Counting counts separate connected groups of land cells, marking a whole group before counting another.",
  "logicSummary": "Island Counting counts separate connected groups of land cells, marking a whole group before counting another.",
  "transitionSummary": "With four-direction adjacency, [[1, 0], [0, 1]] has 2 islands because the land cells touch only diagonally.",
  "codeInsight": "Island Counting counts separate connected groups of land cells, marking a whole group before counting another.",
  "realLifeExample": "With four-direction adjacency, [[1, 0], [0, 1]] has 2 islands because the land cells touch only diagonally.",
  "whenToUse": "Island Counting counts separate connected groups of land cells, marking a whole group before counting another.",
  "memoryTrick": "Island Counting counts separate connected groups of land cells, marking a whole group before counting another.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Island Counting counts separate connected groups of land cells, marking a whole group before counting another."
    },
    {
      "title": "Work through a small case",
      "text": "With four-direction adjacency, [[1, 0], [0, 1]] has 2 islands because the land cells touch only diagonally."
    },
    {
      "title": "Check the boundary cases",
      "text": "Check row and column bounds separately. State whether diagonal neighbors are allowed."
    }
  ],
  "variables": [
    {
      "name": "grid",
      "purpose": "The cells and their values; the routine decides which neighbors to follow."
    },
    {
      "name": "seen",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
    },
    {
      "name": "count",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
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
      "note": "Island Counting counts separate connected groups of land cells, marking a whole group before counting another.",
      "activeLine": 5,
      "codeInsight": "Island Counting counts separate connected groups of land cells, marking a whole group before counting another."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "With four-direction adjacency, [[1, 0], [0, 1]] has 2 islands because the land cells touch only diagonally.",
      "activeLine": 25,
      "codeInsight": "Island Counting counts separate connected groups of land cells, marking a whole group before counting another."
    }
  ],
  "complexity": {
    "time": "O(R × C) for a rectangular grid.",
    "space": "O(R × C) for traversal state in the worst case."
  },
  "quiz": {
    "question": "Which explanation best describes Island Counting?",
    "options": [
      {
        "key": "A",
        "text": "Island Counting counts separate connected groups of land cells, marking a whole group before counting another.",
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
    "correctText": "Correct. Island Counting counts separate connected groups of land cells, marking a whole group before counting another.",
    "incorrectText": "Try again. Island Counting counts separate connected groups of land cells, marking a whole group before counting another. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "matrix-and-grid",
  "algorithmSlug": "island-counting",
  "runnerInput": [
    [
      [
        1,
        1,
        0
      ],
      [
        0,
        1,
        0
      ],
      [
        1,
        0,
        1
      ]
    ]
  ],
  "animation": {
    "type": "matrix-flow",
    "title": "Island Counting matrix state",
    "ruleLabel": "Grid rule",
    "rule": "Each step moves to a valid cell, changes a boundary, or updates a matrix state.",
    "matrix": [
      [
        1,
        1,
        0
      ],
      [
        0,
        1,
        0
      ],
      [
        1,
        0,
        1
      ]
    ],
    "steps": [
      {
        "phase": "Grid",
        "title": "Read rows and columns",
        "note": "The code starts from the matrix shape.",
        "ruleLabel": "Island Counting invariant",
        "rule": "Defines islandCounting and names the input grid; edits to those inputs change the visual state and output.",
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
        "ruleLabel": "Island Counting invariant",
        "rule": "Defines islandCounting and names the input grid; edits to those inputs change the visual state and output.",
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
        "ruleLabel": "Island Counting invariant",
        "rule": "Checks row < 0 || col < 0 || row >= grid.length || col >= grid[0].length; only the branch that preserves Island Counting's invariant is allowed to change state.",
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
        "ruleLabel": "Island Counting invariant",
        "rule": "Returns count, the final value maintained by Island Counting's code path.",
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
    "example": "With four-direction adjacency, [[1, 0], [0, 1]] has 2 islands because the land cells touch only diagonally.",
    "sampleInput": [
      [
        [
          1,
          1,
          0
        ],
        [
          0,
          1,
          0
        ],
        [
          1,
          0,
          1
        ]
      ]
    ],
    "sampleResult": 3,
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
    "checkpoint": "Explain this in your own words: Island Counting counts separate connected groups of land cells, marking a whole group before counting another."
  },
  "relatedLinks": []
};
