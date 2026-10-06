// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "word-search",
  "title": "Word Search",
  "category": "Recursion and Backtracking",
  "route": "/algorithms/backtracking/word-search",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "grid-dfs",
  "icon": "school",
  "codePath": "./src/algorithms/recursion-and-backtracking/word-search/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Word Search follows neighboring board cells to spell a word, using each cell at most once in that path.",
  "problem": "Word Search follows neighboring board cells to spell a word, using each cell at most once in that path.",
  "concept": "Word Search follows neighboring board cells to spell a word, using each cell at most once in that path.",
  "logicSummary": "Word Search follows neighboring board cells to spell a word, using each cell at most once in that path.",
  "transitionSummary": "For the word CAT, find C, then an adjacent A, then an adjacent T. A matching letter elsewhere on the board is not enough.",
  "codeInsight": "Word Search follows neighboring board cells to spell a word, using each cell at most once in that path.",
  "realLifeExample": "For the word CAT, find C, then an adjacent A, then an adjacent T. A matching letter elsewhere on the board is not enough.",
  "whenToUse": "Word Search follows neighboring board cells to spell a word, using each cell at most once in that path.",
  "memoryTrick": "Word Search follows neighboring board cells to spell a word, using each cell at most once in that path.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Word Search follows neighboring board cells to spell a word, using each cell at most once in that path."
    },
    {
      "title": "Work through a small case",
      "text": "For the word CAT, find C, then an adjacent A, then an adjacent T. A matching letter elsewhere on the board is not enough."
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
      "name": "word",
      "purpose": "An input to the computation. Compare its position in the function signature with the corresponding sample argument."
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
      "name": "seen",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
    },
    {
      "name": "found",
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
      "note": "Word Search follows neighboring board cells to spell a word, using each cell at most once in that path.",
      "activeLine": 5,
      "codeInsight": "Word Search follows neighboring board cells to spell a word, using each cell at most once in that path."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "For the word CAT, find C, then an adjacent A, then an adjacent T. A matching letter elsewhere on the board is not enough.",
      "activeLine": 10,
      "codeInsight": "Word Search follows neighboring board cells to spell a word, using each cell at most once in that path."
    }
  ],
  "complexity": {
    "time": "O(n) for the educational reference implementation.",
    "space": "O(n) for tracked state when needed."
  },
  "quiz": {
    "question": "Which explanation best describes Word Search?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "Word Search follows neighboring board cells to spell a word, using each cell at most once in that path.",
        "correct": true
      },
      {
        "key": "C",
        "text": "All grid problems allow diagonal movement without checking bounds.",
        "correct": false
      }
    ],
    "correctText": "Correct. Word Search follows neighboring board cells to spell a word, using each cell at most once in that path.",
    "incorrectText": "Try again. Word Search follows neighboring board cells to spell a word, using each cell at most once in that path. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "recursion-and-backtracking",
  "algorithmSlug": "word-search",
  "runnerInput": [
    [
      [
        "A",
        "B",
        "C",
        "E"
      ],
      [
        "S",
        "F",
        "C",
        "S"
      ],
      [
        "A",
        "D",
        "E",
        "E"
      ]
    ],
    "ABCCED"
  ],
  "animation": {
    "type": "matrix-flow",
    "title": "Word Search matrix state",
    "ruleLabel": "Grid rule",
    "rule": "Each step moves to a valid cell, changes a boundary, or updates a matrix state.",
    "matrix": [
      [
        "A",
        "B",
        "C",
        "E"
      ],
      [
        "S",
        "F",
        "C",
        "S"
      ],
      [
        "A",
        "D",
        "E",
        "E"
      ]
    ],
    "steps": [
      {
        "phase": "Grid",
        "title": "Read rows and columns",
        "note": "The code starts from the matrix shape.",
        "ruleLabel": "Word Search invariant",
        "rule": "Defines wordSearch and names the input board, word; edits to those inputs change the visual state and output.",
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
        "ruleLabel": "Word Search invariant",
        "rule": "Checks index === word.length; only the branch that preserves Word Search's invariant is allowed to change state.",
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
        "ruleLabel": "Word Search invariant",
        "rule": "Checks index === word.length; only the branch that preserves Word Search's invariant is allowed to change state.",
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
        "ruleLabel": "Word Search invariant",
        "rule": "Returns found, the final value maintained by Word Search's code path.",
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
    "example": "For the word CAT, find C, then an adjacent A, then an adjacent T. A matching letter elsewhere on the board is not enough.",
    "sampleInput": [
      [
        [
          "A",
          "B",
          "C",
          "E"
        ],
        [
          "S",
          "F",
          "C",
          "S"
        ],
        [
          "A",
          "D",
          "E",
          "E"
        ]
      ],
      "ABCCED"
    ],
    "sampleResult": true,
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
    "checkpoint": "Explain this in your own words: Word Search follows neighboring board cells to spell a word, using each cell at most once in that path."
  },
  "relatedLinks": []
};
