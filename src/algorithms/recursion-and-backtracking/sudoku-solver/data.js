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
  "meaning": "Sudoku Solver is a Recursion and Backtracking technique focused on solutions.",
  "problem": "Sudoku Solver explores a decision tree by choosing, recursing, and undoing the choice before trying the next option.",
  "concept": "Recursion and backtracking are useful when a problem branches into smaller choices that share the same rule. Use this when the answer is built by choosing, recursing, and sometimes undoing choices.",
  "logicSummary": "Handle the base case, choose the next option, recurse into smaller state, then combine or undo state.",
  "transitionSummary": "Each step either reaches a base case or moves one level deeper with a smaller decision state.",
  "codeInsight": "The backtrack step is what keeps the state correct: every push must have a matching pop.",
  "realLifeExample": "Sudoku Solver appears when the input is choices and the required result is solutions.",
  "whenToUse": "Use Sudoku Solver when a problem matches the Recursion and Backtracking pattern and the expected state changes match a board state dry run.",
  "memoryTrick": "Sudoku Solver: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Sudoku Solver is shown as call/choice state changes. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Base case",
      "text": "Stop when the current state is complete or invalid."
    },
    {
      "title": "Choose option",
      "text": "Pick the next valid branch."
    },
    {
      "title": "Recurse",
      "text": "Solve the smaller state."
    },
    {
      "title": "Return or undo",
      "text": "Collect the result or backtrack before the next choice."
    }
  ],
  "variables": [
    {
      "name": "choices",
      "purpose": "The candidate values that drive the heap, recursion, subset, or frequency process."
    },
    {
      "name": "path and recursion frame",
      "purpose": "The partial choice path plus the current recursive frame before backtracking restores it. This page visualizes it as board state."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by sudokuSolver after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "The transition is choose -> explore -> unchoose, which keeps sibling branches isolated. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Base",
      "title": "Check stop condition",
      "note": "The entry step names the function inputs before the trace checks base cases or expands choices.",
      "activeLine": 5,
      "codeInsight": "Defines sudokuSolver and names the input board; edits to those inputs change the visual state and output."
    },
    {
      "label": "Choice",
      "title": "Select next option",
      "note": "One valid move is added to the state.",
      "activeLine": 5,
      "codeInsight": "Defines sudokuSolver and names the input board; edits to those inputs change the visual state and output."
    },
    {
      "label": "Call",
      "title": "Recurse deeper",
      "note": "The same rule runs on a smaller or extended state.",
      "activeLine": 6,
      "codeInsight": "Prepares grid from the sample collection that the next visual step inspects."
    },
    {
      "label": "Unwind",
      "title": "Return or backtrack",
      "note": "The result is combined or the choice is removed.",
      "activeLine": 14,
      "codeInsight": "Returns true, the boolean result reached by the highlighted checks."
    }
  ],
  "complexity": {
    "time": "O(n) for the educational reference implementation.",
    "space": "O(n) for tracked state when needed."
  },
  "quiz": {
    "question": "Which state choice keeps Sudoku Solver correct?",
    "options": [
      {
        "key": "A",
        "text": "Track path and update it only through Sudoku Solver's transition.",
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
    "correctText": "Correct. Sudoku Solver stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Sudoku Solver needs its own input, state, answer, and condition rather than another algorithm's page structure."
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
  }
};
