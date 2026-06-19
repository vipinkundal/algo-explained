// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "generate-parentheses",
  "title": "Generate Parentheses",
  "category": "Recursion and Backtracking",
  "route": "/algorithms/backtracking/generate-parentheses",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "state-tree",
  "icon": "school",
  "codePath": "./src/algorithms/recursion-and-backtracking/generate-parentheses/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Generate Parentheses is a Recursion and Backtracking technique focused on solutions.",
  "problem": "Generate Parentheses explores a decision tree by choosing, recursing, and undoing the choice before trying the next option.",
  "concept": "Generate Parentheses explores a decision tree by choosing, recursing, and undoing the choice before trying the next option.",
  "logicSummary": "Handle the base case, loop through valid choices, add one choice, recurse, then remove that choice.",
  "transitionSummary": "The transition is choose -> explore -> unchoose, which keeps sibling branches isolated.",
  "codeInsight": "The backtrack step is what keeps the state correct: every push must have a matching pop.",
  "realLifeExample": "Generate Parentheses appears when the input is choices and the required result is solutions.",
  "whenToUse": "Use Generate Parentheses when a problem matches the Recursion and Backtracking pattern and the expected state changes match a state tree dry run.",
  "memoryTrick": "Generate Parentheses: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A state tree walkthrough showing Generate Parentheses' input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data Generate Parentheses receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by Generate Parentheses."
    },
    {
      "title": "Apply the transition",
      "text": "Run the state tree transition and update the algorithm-specific state."
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
      "purpose": "The partial choice path plus the current recursive frame before backtracking restores it. This page visualizes it as state tree."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by generateParentheses after the maintained state reaches the stop rule."
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
      "note": "Read the Generate Parentheses input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that Generate Parentheses changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one state tree transition for Generate Parentheses.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final Generate Parentheses answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "O(n) for the educational reference implementation.",
    "space": "O(n) for tracked state when needed."
  },
  "quiz": {
    "question": "Which state choice keeps Generate Parentheses correct?",
    "options": [
      {
        "key": "A",
        "text": "Track path and update it only through Generate Parentheses' transition.",
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
    "correctText": "Correct. Generate Parentheses stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Generate Parentheses needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "recursion-and-backtracking",
  "algorithmSlug": "generate-parentheses",
  "runnerInput": [
    3
  ]
};
