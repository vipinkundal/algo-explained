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
  "concept": "Word Search explores a decision tree by choosing, recursing, and undoing the choice before trying the next option.",
  "logicSummary": "Handle the base case, loop through valid choices, add one choice, recurse, then remove that choice.",
  "transitionSummary": "The transition is choose -> explore -> unchoose, which keeps sibling branches isolated.",
  "codeInsight": "The backtrack step is what keeps the state correct: every push must have a matching pop.",
  "realLifeExample": "Word Search appears when the input is choices and the required result is solutions.",
  "whenToUse": "Use Word Search when a problem matches the Recursion and Backtracking pattern and the expected state changes match a grid dfs dry run.",
  "memoryTrick": "Word Search: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A grid dfs walkthrough showing Word Search's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data Word Search receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by Word Search."
    },
    {
      "title": "Apply the transition",
      "text": "Run the grid dfs transition and update the algorithm-specific state."
    },
    {
      "title": "Return the answer",
      "text": "Stop at the correct condition and return the tracked result."
    }
  ],
  "variables": [
    {
      "name": "choices",
      "purpose": "The concrete data Word Search receives before any state changes begin."
    },
    {
      "name": "path",
      "purpose": "The partial decision path being built by the recursive search."
    },
    {
      "name": "solutions",
      "purpose": "All valid paths or the final recursive value requested by the problem."
    },
    {
      "name": "base case or invalid choice",
      "purpose": "Stop when the path is complete, invalid, or ready to be recorded."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the Word Search input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that Word Search changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one grid dfs transition for Word Search.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final Word Search answer from the tracked state.",
      "activeLine": 8
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
  "algorithmSlug": "word-search"
};
