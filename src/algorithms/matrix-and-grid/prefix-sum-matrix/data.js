// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "prefix-sum-matrix",
  "title": "Prefix Sum Matrix",
  "category": "Matrix and Grid",
  "route": "/algorithms/matrix/prefix-sum-matrix",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "grid-prefix",
  "icon": "grid_on",
  "codePath": "./src/algorithms/matrix-and-grid/prefix-sum-matrix/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Prefix Sum Matrix is a Matrix and Grid technique focused on answer.",
  "problem": "Prefix Sum Matrix solves a Matrix and Grid problem by maintaining only the state needed for its grid prefix transition.",
  "concept": "Prefix Sum Matrix solves a Matrix and Grid problem by maintaining only the state needed for its grid prefix transition.",
  "logicSummary": "Prefix Sum Matrix reads the input, initializes its working state, applies the core transition, and returns the tracked answer.",
  "transitionSummary": "Repeat the grid prefix transition until the stop condition for Prefix Sum Matrix is reached.",
  "codeInsight": "The implementation keeps Prefix Sum Matrix's state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "Prefix Sum Matrix appears when the input is input and the required result is answer.",
  "whenToUse": "Use Prefix Sum Matrix when a problem matches the Matrix and Grid pattern and the expected state changes match a grid prefix dry run.",
  "memoryTrick": "Prefix Sum Matrix: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A grid prefix walkthrough showing Prefix Sum Matrix's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data Prefix Sum Matrix receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by Prefix Sum Matrix."
    },
    {
      "title": "Apply the transition",
      "text": "Run the grid prefix transition and update the algorithm-specific state."
    },
    {
      "title": "Return the answer",
      "text": "Stop at the correct condition and return the tracked result."
    }
  ],
  "variables": [
    {
      "name": "input",
      "purpose": "The concrete data Prefix Sum Matrix receives before any state changes begin."
    },
    {
      "name": "state",
      "purpose": "The working information Prefix Sum Matrix updates while it runs."
    },
    {
      "name": "answer",
      "purpose": "The final value Prefix Sum Matrix returns after the stop condition is met."
    },
    {
      "name": "condition",
      "purpose": "The rule that decides whether Prefix Sum Matrix continues, branches, or stops."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the Prefix Sum Matrix input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that Prefix Sum Matrix changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one grid prefix transition for Prefix Sum Matrix.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final Prefix Sum Matrix answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps Prefix Sum Matrix correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Prefix Sum Matrix's transition.",
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
    "correctText": "Correct. Prefix Sum Matrix stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Prefix Sum Matrix needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "matrix-and-grid",
  "algorithmSlug": "prefix-sum-matrix"
};
