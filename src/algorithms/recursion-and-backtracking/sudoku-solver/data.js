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
  "concept": "Sudoku Solver explores a decision tree by choosing, recursing, and undoing the choice before trying the next option.",
  "logicSummary": "Handle the base case, loop through valid choices, add one choice, recurse, then remove that choice.",
  "transitionSummary": "The transition is choose -> explore -> unchoose, which keeps sibling branches isolated.",
  "codeInsight": "The backtrack step is what keeps the state correct: every push must have a matching pop.",
  "realLifeExample": "Sudoku Solver appears when the input is choices and the required result is solutions.",
  "whenToUse": "Use Sudoku Solver when a problem matches the Recursion and Backtracking pattern and the expected state changes match a board state dry run.",
  "memoryTrick": "Sudoku Solver: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A board state walkthrough showing Sudoku Solver's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data Sudoku Solver receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by Sudoku Solver."
    },
    {
      "title": "Apply the transition",
      "text": "Run the board state transition and update the algorithm-specific state."
    },
    {
      "title": "Return the answer",
      "text": "Stop at the correct condition and return the tracked result."
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
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the Sudoku Solver input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that Sudoku Solver changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one board state transition for Sudoku Solver.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final Sudoku Solver answer from the tracked state.",
      "activeLine": 8
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
  ]
};
