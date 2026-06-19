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
  "meaning": "N-Queens is a Recursion and Backtracking technique focused on solutions.",
  "problem": "N-Queens explores a decision tree by choosing, recursing, and undoing the choice before trying the next option.",
  "concept": "N-Queens explores a decision tree by choosing, recursing, and undoing the choice before trying the next option.",
  "logicSummary": "Handle the base case, loop through valid choices, add one choice, recurse, then remove that choice.",
  "transitionSummary": "The transition is choose -> explore -> unchoose, which keeps sibling branches isolated.",
  "codeInsight": "The backtrack step is what keeps the state correct: every push must have a matching pop.",
  "realLifeExample": "N-Queens appears when the input is choices and the required result is solutions.",
  "whenToUse": "Use N-Queens when a problem matches the Recursion and Backtracking pattern and the expected state changes match a chessboard dry run.",
  "memoryTrick": "N-Queens: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A chessboard walkthrough showing N-Queens' input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data N-Queens receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by N-Queens."
    },
    {
      "title": "Apply the transition",
      "text": "Run the chessboard transition and update the algorithm-specific state."
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
      "purpose": "The partial choice path plus the current recursive frame before backtracking restores it. This page visualizes it as chessboard."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by nQueens after the maintained state reaches the stop rule."
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
      "note": "Read the N-Queens input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that N-Queens changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one chessboard transition for N-Queens.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final N-Queens answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "O(n) for the educational reference implementation.",
    "space": "O(n) for tracked state when needed."
  },
  "quiz": {
    "question": "Which state choice keeps N-Queens correct?",
    "options": [
      {
        "key": "A",
        "text": "Track path and update it only through N-Queens' transition.",
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
    "correctText": "Correct. N-Queens stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. N-Queens needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "recursion-and-backtracking",
  "algorithmSlug": "n-queens",
  "runnerInput": [
    4
  ]
};
