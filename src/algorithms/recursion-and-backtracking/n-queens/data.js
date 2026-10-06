// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "n-queens",
  "title": "N-Queens",
  "category": "Recursion and Backtracking",
  "route": "/algorithms/backtracking/n-queens",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "chessboard",
  "icon": "school",
  "codePath": "./src/algorithms/recursion-and-backtracking/n-queens/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "N-Queens places one queen per row so that no two queens share a column or diagonal.",
  "problem": "N-Queens places one queen per row so that no two queens share a column or diagonal.",
  "concept": "N-Queens places one queen per row so that no two queens share a column or diagonal.",
  "logicSummary": "N-Queens places one queen per row so that no two queens share a column or diagonal.",
  "transitionSummary": "On a 4 × 4 board, columns [1, 3, 0, 2] for rows [0, 1, 2, 3] form one valid placement, using zero-based positions.",
  "codeInsight": "N-Queens places one queen per row so that no two queens share a column or diagonal.",
  "realLifeExample": "On a 4 × 4 board, columns [1, 3, 0, 2] for rows [0, 1, 2, 3] form one valid placement, using zero-based positions.",
  "whenToUse": "N-Queens places one queen per row so that no two queens share a column or diagonal.",
  "memoryTrick": "N-Queens places one queen per row so that no two queens share a column or diagonal.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "N-Queens places one queen per row so that no two queens share a column or diagonal."
    },
    {
      "title": "Work through a small case",
      "text": "On a 4 × 4 board, columns [1, 3, 0, 2] for rows [0, 1, 2, 3] form one valid placement, using zero-based positions."
    },
    {
      "title": "Check the boundary cases",
      "text": "Check row and column bounds separately. State whether diagonal neighbors are allowed."
    }
  ],
  "variables": [
    {
      "name": "size",
      "purpose": "An input to the computation. Compare its position in the function signature with the corresponding sample argument."
    },
    {
      "name": "result",
      "purpose": "Stores completed answers or computed states so they can be returned and, where needed, reused."
    },
    {
      "name": "columns",
      "purpose": "Records keys or membership so later steps can look them up without scanning the original collection again."
    },
    {
      "name": "diagA",
      "purpose": "Records keys or membership so later steps can look them up without scanning the original collection again."
    },
    {
      "name": "diagB",
      "purpose": "Records keys or membership so later steps can look them up without scanning the original collection again."
    },
    {
      "name": "board",
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
      "note": "N-Queens places one queen per row so that no two queens share a column or diagonal.",
      "activeLine": 5,
      "codeInsight": "N-Queens places one queen per row so that no two queens share a column or diagonal."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "On a 4 × 4 board, columns [1, 3, 0, 2] for rows [0, 1, 2, 3] form one valid placement, using zero-based positions.",
      "activeLine": 30,
      "codeInsight": "N-Queens places one queen per row so that no two queens share a column or diagonal."
    }
  ],
  "complexity": {
    "time": "O(n) for the educational reference implementation.",
    "space": "O(n) for tracked state when needed."
  },
  "quiz": {
    "question": "Which explanation best describes N-Queens?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "N-Queens places one queen per row so that no two queens share a column or diagonal.",
        "correct": true
      },
      {
        "key": "C",
        "text": "All grid problems allow diagonal movement without checking bounds.",
        "correct": false
      }
    ],
    "correctText": "Correct. N-Queens places one queen per row so that no two queens share a column or diagonal.",
    "incorrectText": "Try again. N-Queens places one queen per row so that no two queens share a column or diagonal. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "recursion-and-backtracking",
  "algorithmSlug": "n-queens",
  "runnerInput": [
    4
  ],
  "animation": {
    "type": "matrix-flow",
    "title": "N-Queens matrix state",
    "ruleLabel": "Grid rule",
    "rule": "Each step either reaches a base case or moves one level deeper with a smaller decision state.",
    "matrix": [
      [
        1,
        0,
        1
      ],
      [
        0,
        1,
        0
      ],
      [
        1,
        1,
        1
      ]
    ],
    "steps": [
      {
        "phase": "Base",
        "title": "Check stop condition",
        "note": "The entry step names the function inputs before the trace checks base cases or expands choices.",
        "ruleLabel": "N-Queens invariant",
        "rule": "Defines nQueens and names the input size; edits to those inputs change the visual state and output.",
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
        "ruleLabel": "N-Queens invariant",
        "rule": "Defines nQueens and names the input size; edits to those inputs change the visual state and output.",
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
        "ruleLabel": "N-Queens invariant",
        "rule": "Seeds result with the sample values shown in the visualizer, giving the trace concrete cells to inspect.",
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
        "ruleLabel": "N-Queens invariant",
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
    "example": "On a 4 × 4 board, columns [1, 3, 0, 2] for rows [0, 1, 2, 3] form one valid placement, using zero-based positions.",
    "sampleInput": [
      4
    ],
    "sampleResult": [
      [
        ".Q..",
        "...Q",
        "Q...",
        "..Q."
      ],
      [
        "..Q.",
        "Q...",
        "...Q",
        ".Q.."
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
    "checkpoint": "Explain this in your own words: N-Queens places one queen per row so that no two queens share a column or diagonal."
  },
  "relatedLinks": []
};
