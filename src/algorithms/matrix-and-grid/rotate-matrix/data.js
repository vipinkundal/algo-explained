// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "rotate-matrix",
  "title": "Rotate Matrix",
  "category": "Matrix and Grid",
  "route": "/algorithms/matrix/rotate-matrix",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "grid-transform",
  "icon": "grid_on",
  "codePath": "./src/algorithms/matrix-and-grid/rotate-matrix/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Rotate Matrix is a Matrix and Grid technique focused on answer.",
  "problem": "Rotate Matrix solves a Matrix and Grid problem by maintaining only the state needed for its grid transform transition.",
  "concept": "Rotate Matrix solves a Matrix and Grid problem by maintaining only the state needed for its grid transform transition.",
  "logicSummary": "Rotate Matrix reads the input, initializes its working state, applies the core transition, and returns the tracked answer.",
  "transitionSummary": "Repeat the grid transform transition until the stop condition for Rotate Matrix is reached.",
  "codeInsight": "The implementation keeps Rotate Matrix's state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "Rotate Matrix appears when the input is input and the required result is answer.",
  "whenToUse": "Use Rotate Matrix when a problem matches the Matrix and Grid pattern and the expected state changes match a grid transform dry run.",
  "memoryTrick": "Rotate Matrix: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A grid transform walkthrough showing Rotate Matrix's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data Rotate Matrix receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by Rotate Matrix."
    },
    {
      "title": "Apply the transition",
      "text": "Run the grid transform transition and update the algorithm-specific state."
    },
    {
      "title": "Return the answer",
      "text": "Stop at the correct condition and return the tracked result."
    }
  ],
  "variables": [
    {
      "name": "matrix",
      "purpose": "The two-dimensional structure whose cells are visited or updated."
    },
    {
      "name": "row, column, and visited state",
      "purpose": "Cell coordinates and visited or transformed values used by the grid transition. This page visualizes it as grid transform."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by rotateMatrix after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Repeat the grid transform transition until the stop condition for Rotate Matrix is reached. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the Rotate Matrix input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that Rotate Matrix changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one grid transform transition for Rotate Matrix.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final Rotate Matrix answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps Rotate Matrix correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Rotate Matrix's transition.",
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
    "correctText": "Correct. Rotate Matrix stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Rotate Matrix needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "matrix-and-grid",
  "algorithmSlug": "rotate-matrix",
  "runnerInput": [
    [
      [
        1,
        2
      ],
      [
        3,
        4
      ]
    ]
  ]
};
