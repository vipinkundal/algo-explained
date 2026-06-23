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
  "meaning": "Word Search is a Recursion and Backtracking technique focused on solutions.",
  "problem": "Word Search explores a decision tree by choosing, recursing, and undoing the choice before trying the next option.",
  "concept": "Grid algorithms are useful when positions, neighbors, boundaries, or cell states define the problem. Use this when the answer depends on moving through rows, columns, or regions.",
  "logicSummary": "Read dimensions, choose the active cell or boundary, update neighbors or accumulated state, and return the grid result.",
  "transitionSummary": "Each step moves to a valid cell, changes a boundary, or updates a matrix state.",
  "codeInsight": "The backtrack step is what keeps the state correct: every push must have a matching pop.",
  "realLifeExample": "Word Search appears when the input is choices and the required result is solutions.",
  "whenToUse": "Use Word Search when a problem matches the Recursion and Backtracking pattern and the expected state changes match a grid dfs dry run.",
  "memoryTrick": "Word Search: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Word Search is shown as row/column state changes. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Read grid",
      "text": "Identify dimensions and valid cells."
    },
    {
      "title": "Choose position",
      "text": "Select the current row/column or boundary."
    },
    {
      "title": "Update neighbors",
      "text": "Move, fill, rotate, or accumulate according to the rule."
    },
    {
      "title": "Return grid result",
      "text": "Return count, transformed grid, or lookup answer."
    }
  ],
  "variables": [
    {
      "name": "choices",
      "purpose": "The candidate values that drive the heap, recursion, subset, or frequency process."
    },
    {
      "name": "path and recursion frame",
      "purpose": "The partial choice path plus the current recursive frame before backtracking restores it. This page visualizes it as grid dfs."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by wordSearch after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "The transition is choose -> explore -> unchoose, which keeps sibling branches isolated. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Grid",
      "title": "Read rows and columns",
      "note": "The code starts from the matrix shape.",
      "activeLine": 5,
      "codeInsight": "Defines wordSearch and names the input board, word; edits to those inputs change the visual state and output."
    },
    {
      "label": "Position",
      "title": "Choose active cell",
      "note": "The current row/column controls the next update.",
      "activeLine": 10,
      "codeInsight": "Checks index === word.length; only the branch that preserves Word Search's invariant is allowed to change state."
    },
    {
      "label": "Move/update",
      "title": "Apply neighbor or boundary rule",
      "note": "The transition changes reachable cells, boundaries, or accumulated values.",
      "activeLine": 10,
      "codeInsight": "Checks index === word.length; only the branch that preserves Word Search's invariant is allowed to change state."
    },
    {
      "label": "Result",
      "title": "Return grid output",
      "note": "The final matrix, count, or query answer is returned.",
      "activeLine": 16,
      "codeInsight": "Returns found, the final value maintained by Word Search's code path."
    }
  ],
  "complexity": {
    "time": "O(n) for the educational reference implementation.",
    "space": "O(n) for tracked state when needed."
  },
  "quiz": {
    "question": "Which state choice keeps Word Search correct?",
    "options": [
      {
        "key": "A",
        "text": "Track path and update it only through Word Search's transition.",
        "correct": true
      },
      {
        "key": "B",
        "text": "Reuse a different algorithm's state names even when the transition is different.",
        "correct": false
      },
      {
        "key": "C",
        "text": "Return before checking the algorithm-specific stop condition.",
        "correct": false
      }
    ],
    "correctText": "Correct. Word Search stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Word Search needs its own input, state, answer, and condition rather than another algorithm's page structure."
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
  }
};
