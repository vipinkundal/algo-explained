// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "sudoku-solver",
  "title": "Sudoku Solver",
  "category": "Recursion and Backtracking",
  "route": "/algorithms/backtracking/sudoku-solver",
  "phase": 2,
  "priority": "low",
  "visualizerType": "board-state",
  "icon": "school",
  "codePath": "./src/algorithms/recursion-and-backtracking/sudoku-solver/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "A Sudoku solver fills an empty cell with a digit that is absent from its row, column, and box, then backtracks if later choices fail.",
  "problem": "A Sudoku solver fills an empty cell with a digit that is absent from its row, column, and box, then backtracks if later choices fail.",
  "concept": "A Sudoku solver fills an empty cell with a digit that is absent from its row, column, and box, then backtracks if later choices fail.",
  "logicSummary": "A Sudoku solver fills an empty cell with a digit that is absent from its row, column, and box, then backtracks if later choices fail.",
  "transitionSummary": "If a cell already has 1 in its row, trying 1 is rejected before exploring the next cell.",
  "codeInsight": "A Sudoku solver fills an empty cell with a digit that is absent from its row, column, and box, then backtracks if later choices fail.",
  "realLifeExample": "If a cell already has 1 in its row, trying 1 is rejected before exploring the next cell.",
  "whenToUse": "A Sudoku solver fills an empty cell with a digit that is absent from its row, column, and box, then backtracks if later choices fail.",
  "memoryTrick": "A Sudoku solver fills an empty cell with a digit that is absent from its row, column, and box, then backtracks if later choices fail.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "A Sudoku solver fills an empty cell with a digit that is absent from its row, column, and box, then backtracks if later choices fail."
    },
    {
      "title": "Work through a small case",
      "text": "If a cell already has 1 in its row, trying 1 is rejected before exploring the next cell."
    },
    {
      "title": "Check the boundary cases",
      "text": "Check row and column bounds separately. State whether diagonal neighbors are allowed."
    }
  ],
  "variables": [
    {
      "name": "board",
      "purpose": "An input to the computation. Compare its position in the function signature with the corresponding sample argument."
    },
    {
      "name": "grid",
      "purpose": "Holds a separate copy of the values so working changes do not overwrite the caller’s array."
    },
    {
      "name": "index",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
    },
    {
      "name": "boxRow",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
    },
    {
      "name": "boxCol",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
    },
    {
      "name": "r",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
    },
    {
      "name": "c",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "A Sudoku solver fills an empty cell with a digit that is absent from its row, column, and box, then backtracks if later choices fail.",
      "activeLine": 5,
      "codeInsight": "A Sudoku solver fills an empty cell with a digit that is absent from its row, column, and box, then backtracks if later choices fail."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "If a cell already has 1 in its row, trying 1 is rejected before exploring the next cell.",
      "activeLine": 9,
      "codeInsight": "A Sudoku solver fills an empty cell with a digit that is absent from its row, column, and box, then backtracks if later choices fail."
    }
  ],
  "complexity": {
    "time": "O(n) for the educational reference implementation.",
    "space": "O(n) for tracked state when needed."
  },
  "quiz": {
    "question": "Which explanation best describes Sudoku Solver?",
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
        "text": "A Sudoku solver fills an empty cell with a digit that is absent from its row, column, and box, then backtracks if later choices fail.",
        "correct": true
      }
    ],
    "correctText": "Correct. A Sudoku solver fills an empty cell with a digit that is absent from its row, column, and box, then backtracks if later choices fail.",
    "incorrectText": "Try again. A Sudoku solver fills an empty cell with a digit that is absent from its row, column, and box, then backtracks if later choices fail. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "recursion-and-backtracking",
  "algorithmSlug": "sudoku-solver",
  "runnerInput": [
    [
      [
        5,
        3,
        0,
        0,
        7,
        0,
        0,
        0,
        0
      ],
      [
        6,
        0,
        0,
        1,
        9,
        5,
        0,
        0,
        0
      ],
      [
        0,
        9,
        8,
        0,
        0,
        0,
        0,
        6,
        0
      ],
      [
        8,
        0,
        0,
        0,
        6,
        0,
        0,
        0,
        3
      ],
      [
        4,
        0,
        0,
        8,
        0,
        3,
        0,
        0,
        1
      ],
      [
        7,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        6
      ],
      [
        0,
        6,
        0,
        0,
        0,
        0,
        2,
        8,
        0
      ],
      [
        0,
        0,
        0,
        4,
        1,
        9,
        0,
        0,
        5
      ],
      [
        0,
        0,
        0,
        0,
        8,
        0,
        0,
        7,
        9
      ]
    ]
  ],
  "animation": {
    "type": "matrix-flow",
    "title": "Sudoku Solver matrix state",
    "ruleLabel": "Grid rule",
    "rule": "Each step either reaches a base case or moves one level deeper with a smaller decision state.",
    "matrix": [
      [
        5,
        3,
        0,
        0
      ],
      [
        6,
        0,
        0,
        1
      ],
      [
        0,
        9,
        8,
        0
      ],
      [
        8,
        0,
        0,
        0
      ]
    ],
    "steps": [
      {
        "phase": "Base",
        "title": "Check stop condition",
        "note": "The entry step names the function inputs before the trace checks base cases or expands choices.",
        "ruleLabel": "Sudoku Solver invariant",
        "rule": "Defines sudokuSolver and names the input board; edits to those inputs change the visual state and output.",
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
        "phase": "Choice",
        "title": "Select next option",
        "note": "One valid move is added to the state.",
        "ruleLabel": "Sudoku Solver invariant",
        "rule": "Defines sudokuSolver and names the input board; edits to those inputs change the visual state and output.",
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
        "phase": "Call",
        "title": "Recurse deeper",
        "note": "The same rule runs on a smaller or extended state.",
        "ruleLabel": "Sudoku Solver invariant",
        "rule": "Prepares grid from the sample collection that the next visual step inspects.",
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
        "phase": "Unwind",
        "title": "Return or backtrack",
        "note": "The result is combined or the choice is removed.",
        "ruleLabel": "Sudoku Solver invariant",
        "rule": "Returns true, the boolean result reached by the highlighted checks.",
        "activeCells": [
          [
            0,
            3
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
            0,
            3
          ]
        ]
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "A matrix is a grid. Identify a cell by its row first, then its column.",
    "family": "Rows and columns",
    "example": "If a cell already has 1 in its row, trying 1 is rejected before exploring the next cell.",
    "sampleInput": [
      [
        [
          5,
          3,
          0,
          0,
          7,
          0,
          0,
          0,
          0
        ],
        [
          6,
          0,
          0,
          1,
          9,
          5,
          0,
          0,
          0
        ],
        [
          0,
          9,
          8,
          0,
          0,
          0,
          0,
          6,
          0
        ],
        [
          8,
          0,
          0,
          0,
          6,
          0,
          0,
          0,
          3
        ],
        [
          4,
          0,
          0,
          8,
          0,
          3,
          0,
          0,
          1
        ],
        [
          7,
          0,
          0,
          0,
          2,
          0,
          0,
          0,
          6
        ],
        [
          0,
          6,
          0,
          0,
          0,
          0,
          2,
          8,
          0
        ],
        [
          0,
          0,
          0,
          4,
          1,
          9,
          0,
          0,
          5
        ],
        [
          0,
          0,
          0,
          0,
          8,
          0,
          0,
          7,
          9
        ]
      ]
    ],
    "sampleResult": [
      [
        5,
        3,
        4,
        6,
        7,
        8,
        9,
        1,
        2
      ],
      [
        6,
        7,
        2,
        1,
        9,
        5,
        3,
        4,
        8
      ],
      [
        1,
        9,
        8,
        3,
        4,
        2,
        5,
        6,
        7
      ],
      [
        8,
        5,
        9,
        7,
        6,
        1,
        4,
        2,
        3
      ],
      [
        4,
        2,
        6,
        8,
        5,
        3,
        7,
        9,
        1
      ],
      [
        7,
        1,
        3,
        9,
        2,
        4,
        8,
        5,
        6
      ],
      [
        9,
        6,
        1,
        5,
        3,
        7,
        2,
        8,
        4
      ],
      [
        2,
        8,
        7,
        4,
        1,
        9,
        6,
        3,
        5
      ],
      [
        3,
        4,
        5,
        2,
        8,
        6,
        1,
        7,
        9
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
    "checkpoint": "Explain this in your own words: A Sudoku solver fills an empty cell with a digit that is absent from its row, column, and box, then backtracks if later choices fail."
  },
  "relatedLinks": []
};
