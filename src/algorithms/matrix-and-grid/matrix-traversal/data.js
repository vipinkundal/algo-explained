// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "matrix-traversal",
  "title": "Matrix Traversal",
  "category": "Matrix and Grid",
  "route": "/algorithms/matrix/matrix-traversal",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "grid-walk",
  "icon": "grid_on",
  "codePath": "./src/algorithms/matrix-and-grid/matrix-traversal/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Matrix Traversal is a Matrix and Grid technique focused on answer.",
  "problem": "Matrix Traversal solves a Matrix and Grid problem by maintaining only the state needed for its grid walk transition.",
  "concept": "Matrix Traversal solves a Matrix and Grid problem by maintaining only the state needed for its grid walk transition.",
  "logicSummary": "Matrix Traversal reads the input, initializes its working state, applies the core transition, and returns the tracked answer.",
  "transitionSummary": "Repeat the grid walk transition until the stop condition for Matrix Traversal is reached.",
  "codeInsight": "The implementation keeps Matrix Traversal's state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "Matrix Traversal appears when the input is input and the required result is answer.",
  "whenToUse": "Use Matrix Traversal when a problem matches the Matrix and Grid pattern and the expected state changes match a grid walk dry run.",
  "memoryTrick": "Matrix Traversal: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A grid walk walkthrough showing Matrix Traversal's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data Matrix Traversal receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by Matrix Traversal."
    },
    {
      "title": "Apply the transition",
      "text": "Run the grid walk transition and update the algorithm-specific state."
    },
    {
      "title": "Return the answer",
      "text": "Stop at the correct condition and return the tracked result."
    }
  ],
  "variables": [
    {
      "name": "root",
      "purpose": "The tree node where recursion or traversal begins."
    },
    {
      "name": "row, column, and visited state",
      "purpose": "Cell coordinates and visited or transformed values used by the grid transition. This page visualizes it as grid walk."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by matrixTraversal after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Repeat the grid walk transition until the stop condition for Matrix Traversal is reached. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the Matrix Traversal input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that Matrix Traversal changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one grid walk transition for Matrix Traversal.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final Matrix Traversal answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps Matrix Traversal correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Matrix Traversal's transition.",
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
    "correctText": "Correct. Matrix Traversal stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Matrix Traversal needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "matrix-and-grid",
  "algorithmSlug": "matrix-traversal",
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
