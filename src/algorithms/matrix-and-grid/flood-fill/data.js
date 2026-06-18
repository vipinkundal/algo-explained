// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "flood-fill",
  "title": "Flood Fill",
  "category": "Matrix and Grid",
  "route": "/algorithms/matrix/flood-fill",
  "phase": 2,
  "priority": "high",
  "visualizerType": "grid-bfs-dfs",
  "icon": "grid_on",
  "codePath": "./src/algorithms/matrix-and-grid/flood-fill/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Flood Fill is a Matrix and Grid technique focused on answer.",
  "problem": "Flood Fill solves a Matrix and Grid problem by maintaining only the state needed for its grid bfs dfs transition.",
  "concept": "Flood Fill solves a Matrix and Grid problem by maintaining only the state needed for its grid bfs dfs transition.",
  "logicSummary": "Flood Fill reads the input, initializes its working state, applies the core transition, and returns the tracked answer.",
  "transitionSummary": "Repeat the grid bfs dfs transition until the stop condition for Flood Fill is reached.",
  "codeInsight": "The implementation keeps Flood Fill's state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "Flood Fill appears when the input is input and the required result is answer.",
  "whenToUse": "Use Flood Fill when a problem matches the Matrix and Grid pattern and the expected state changes match a grid bfs dfs dry run.",
  "memoryTrick": "Flood Fill: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A grid bfs dfs walkthrough showing Flood Fill's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data Flood Fill receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by Flood Fill."
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
      "name": "input",
      "purpose": "The concrete data Flood Fill receives before any state changes begin."
    },
    {
      "name": "state",
      "purpose": "The working information Flood Fill updates while it runs."
    },
    {
      "name": "answer",
      "purpose": "The final value Flood Fill returns after the stop condition is met."
    },
    {
      "name": "condition",
      "purpose": "The rule that decides whether Flood Fill continues, branches, or stops."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the Flood Fill input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that Flood Fill changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one grid bfs dfs transition for Flood Fill.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final Flood Fill answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps Flood Fill correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Flood Fill's transition.",
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
    "correctText": "Correct. Flood Fill stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Flood Fill needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "matrix-and-grid",
  "algorithmSlug": "flood-fill"
};
