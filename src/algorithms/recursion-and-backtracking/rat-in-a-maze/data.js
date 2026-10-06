// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "rat-in-a-maze",
  "title": "Rat in a Maze",
  "category": "Recursion and Backtracking",
  "route": "/algorithms/backtracking/rat-in-a-maze",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "grid-path",
  "icon": "school",
  "codePath": "./src/algorithms/recursion-and-backtracking/rat-in-a-maze/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "A maze search tries open neighboring cells, marking the current path so it does not loop through the same cells.",
  "problem": "A maze search tries open neighboring cells, marking the current path so it does not loop through the same cells.",
  "concept": "A maze search tries open neighboring cells, marking the current path so it does not loop through the same cells.",
  "logicSummary": "A maze search tries open neighboring cells, marking the current path so it does not loop through the same cells.",
  "transitionSummary": "In a grid, 1 can mean open and 0 blocked. If a branch reaches a dead end, undo that move and try another open neighbor.",
  "codeInsight": "A maze search tries open neighboring cells, marking the current path so it does not loop through the same cells.",
  "realLifeExample": "In a grid, 1 can mean open and 0 blocked. If a branch reaches a dead end, undo that move and try another open neighbor.",
  "whenToUse": "A maze search tries open neighboring cells, marking the current path so it does not loop through the same cells.",
  "memoryTrick": "A maze search tries open neighboring cells, marking the current path so it does not loop through the same cells.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "A maze search tries open neighboring cells, marking the current path so it does not loop through the same cells."
    },
    {
      "title": "Work through a small case",
      "text": "In a grid, 1 can mean open and 0 blocked. If a branch reaches a dead end, undo that move and try another open neighbor."
    },
    {
      "title": "Check the boundary cases",
      "text": "Check row and column bounds separately. State whether diagonal neighbors are allowed."
    }
  ],
  "variables": [
    {
      "name": "maze",
      "purpose": "An input to the computation. Compare its position in the function signature with the corresponding sample argument."
    },
    {
      "name": "n",
      "purpose": "Remembers how many items are present; this supports bounds, size reporting, or the stopping rule."
    },
    {
      "name": "result",
      "purpose": "Stores completed answers or computed states so they can be returned and, where needed, reused."
    },
    {
      "name": "seen",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
    },
    {
      "name": "moves",
      "purpose": "Keeps a sequence of sample or working values for the following operations."
    },
    {
      "name": "nextRow",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
    },
    {
      "name": "nextCol",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "A maze search tries open neighboring cells, marking the current path so it does not loop through the same cells.",
      "activeLine": 5,
      "codeInsight": "A maze search tries open neighboring cells, marking the current path so it does not loop through the same cells."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "In a grid, 1 can mean open and 0 blocked. If a branch reaches a dead end, undo that move and try another open neighbor.",
      "activeLine": 26,
      "codeInsight": "A maze search tries open neighboring cells, marking the current path so it does not loop through the same cells."
    }
  ],
  "complexity": {
    "time": "O(n) for the educational reference implementation.",
    "space": "O(n) for tracked state when needed."
  },
  "quiz": {
    "question": "Which explanation best describes Rat in a Maze?",
    "options": [
      {
        "key": "A",
        "text": "A maze search tries open neighboring cells, marking the current path so it does not loop through the same cells.",
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
    "correctText": "Correct. A maze search tries open neighboring cells, marking the current path so it does not loop through the same cells.",
    "incorrectText": "Try again. A maze search tries open neighboring cells, marking the current path so it does not loop through the same cells. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "recursion-and-backtracking",
  "algorithmSlug": "rat-in-a-maze",
  "runnerInput": [
    [
      [
        1,
        0,
        0
      ],
      [
        1,
        1,
        0
      ],
      [
        0,
        1,
        1
      ]
    ]
  ],
  "animation": {
    "type": "matrix-flow",
    "title": "Rat in a Maze matrix state",
    "ruleLabel": "Grid rule",
    "rule": "Each step moves to a valid cell, changes a boundary, or updates a matrix state.",
    "matrix": [
      [
        1,
        0,
        0
      ],
      [
        1,
        1,
        0
      ],
      [
        0,
        1,
        1
      ]
    ],
    "steps": [
      {
        "phase": "Grid",
        "title": "Read rows and columns",
        "note": "The code starts from the matrix shape.",
        "ruleLabel": "Rat in a Maze invariant",
        "rule": "Defines ratInAMaze and names the input maze; edits to those inputs change the visual state and output.",
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
        "ruleLabel": "Rat in a Maze invariant",
        "rule": "Defines ratInAMaze and names the input maze; edits to those inputs change the visual state and output.",
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
        "ruleLabel": "Rat in a Maze invariant",
        "rule": "Checks row === n - 1 && col === n - 1; only the branch that preserves Rat in a Maze's invariant is allowed to change state.",
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
        "ruleLabel": "Rat in a Maze invariant",
        "rule": "Returns from this branch immediately because the current recursive or conditional state is complete.",
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
    "example": "In a grid, 1 can mean open and 0 blocked. If a branch reaches a dead end, undo that move and try another open neighbor.",
    "sampleInput": [
      [
        [
          1,
          0,
          0
        ],
        [
          1,
          1,
          0
        ],
        [
          0,
          1,
          1
        ]
      ]
    ],
    "sampleResult": [
      "DRDR"
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
    "checkpoint": "Explain this in your own words: A maze search tries open neighboring cells, marking the current path so it does not loop through the same cells."
  },
  "relatedLinks": []
};
