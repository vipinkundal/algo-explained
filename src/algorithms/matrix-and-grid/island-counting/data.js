// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "island-counting",
  "title": "Island Counting",
  "category": "Matrix and Grid",
  "route": "/algorithms/matrix/island-counting",
  "phase": 2,
  "priority": "high",
  "visualizerType": "grid-bfs-dfs",
  "icon": "grid_on",
  "codePath": "./src/algorithms/matrix-and-grid/island-counting/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Island Counting is a Matrix and Grid technique focused on answer.",
  "problem": "Island Counting solves a Matrix and Grid problem by maintaining only the state needed for its grid bfs dfs transition.",
  "concept": "Island Counting solves a Matrix and Grid problem by maintaining only the state needed for its grid bfs dfs transition.",
  "logicSummary": "Island Counting reads the input, initializes its working state, applies the core transition, and returns the tracked answer.",
  "transitionSummary": "Repeat the grid bfs dfs transition until the stop condition for Island Counting is reached.",
  "codeInsight": "The implementation keeps Island Counting's state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "Island Counting appears when the input is input and the required result is answer.",
  "whenToUse": "Use Island Counting when a problem matches the Matrix and Grid pattern and the expected state changes match a grid bfs dfs dry run.",
  "memoryTrick": "Island Counting: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A grid bfs dfs walkthrough showing Island Counting's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data Island Counting receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by Island Counting."
    },
    {
      "title": "Apply the transition",
      "text": "Run the grid bfs dfs transition and update the algorithm-specific state."
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
      "purpose": "Cell coordinates and visited or transformed values used by the grid transition. This page visualizes it as grid bfs dfs."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by islandCounting after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Repeat the grid bfs dfs transition until the stop condition for Island Counting is reached. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the Island Counting input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that Island Counting changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one grid bfs dfs transition for Island Counting.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final Island Counting answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps Island Counting correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Island Counting's transition.",
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
    "correctText": "Correct. Island Counting stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Island Counting needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "matrix-and-grid",
  "algorithmSlug": "island-counting",
  "runnerInput": [
    [
      [
        1,
        1,
        0
      ],
      [
        0,
        1,
        0
      ],
      [
        1,
        0,
        1
      ]
    ]
  ]
};
