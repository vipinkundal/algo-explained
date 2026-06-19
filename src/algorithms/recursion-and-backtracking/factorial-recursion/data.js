// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "factorial-recursion",
  "title": "Factorial Recursion",
  "category": "Recursion and Backtracking",
  "route": "/algorithms/recursion/factorial-recursion",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "call-stack",
  "icon": "school",
  "codePath": "./src/algorithms/recursion-and-backtracking/factorial-recursion/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Factorial Recursion is a Recursion and Backtracking technique focused on solutions.",
  "problem": "Factorial Recursion explores a decision tree by choosing, recursing, and undoing the choice before trying the next option.",
  "concept": "Factorial Recursion explores a decision tree by choosing, recursing, and undoing the choice before trying the next option.",
  "logicSummary": "Handle the base case, loop through valid choices, add one choice, recurse, then remove that choice.",
  "transitionSummary": "The transition is choose -> explore -> unchoose, which keeps sibling branches isolated.",
  "codeInsight": "The backtrack step is what keeps the state correct: every push must have a matching pop.",
  "realLifeExample": "Factorial Recursion appears when the input is choices and the required result is solutions.",
  "whenToUse": "Use Factorial Recursion when a problem matches the Recursion and Backtracking pattern and the expected state changes match a call stack dry run.",
  "memoryTrick": "Factorial Recursion: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A call stack walkthrough showing Factorial Recursion's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data Factorial Recursion receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by Factorial Recursion."
    },
    {
      "title": "Apply the transition",
      "text": "Run the call stack transition and update the algorithm-specific state."
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
      "purpose": "The partial choice path plus the current recursive frame before backtracking restores it. This page visualizes it as call stack."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by factorialRecursion after the maintained state reaches the stop rule."
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
      "note": "Read the Factorial Recursion input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that Factorial Recursion changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one call stack transition for Factorial Recursion.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final Factorial Recursion answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "O(n) for the educational reference implementation.",
    "space": "O(n) for tracked state when needed."
  },
  "quiz": {
    "question": "Which state choice keeps Factorial Recursion correct?",
    "options": [
      {
        "key": "A",
        "text": "Track path and update it only through Factorial Recursion's transition.",
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
    "correctText": "Correct. Factorial Recursion stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Factorial Recursion needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "recursion-and-backtracking",
  "algorithmSlug": "factorial-recursion",
  "runnerInput": [
    5
  ]
};
