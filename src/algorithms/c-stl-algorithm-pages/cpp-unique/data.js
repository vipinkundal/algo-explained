// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "cpp-unique",
  "title": "C++ unique()",
  "category": "C++ STL Algorithm Pages",
  "route": "/algorithms/cpp-stl/unique",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "duplicate-shift",
  "icon": "school",
  "codePath": "./src/algorithms/c-stl-algorithm-pages/cpp-unique/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "C++ unique() is a C++ STL Algorithm Pages technique focused on answer.",
  "problem": "C++ unique() solves a C++ STL Algorithm Pages problem by maintaining only the state needed for its duplicate shift transition.",
  "concept": "C++ unique() solves a C++ STL Algorithm Pages problem by maintaining only the state needed for its duplicate shift transition.",
  "logicSummary": "C++ unique() reads the input, initializes its working state, applies the core transition, and returns the tracked answer.",
  "transitionSummary": "Repeat the duplicate shift transition until the stop condition for C++ unique() is reached.",
  "codeInsight": "The implementation keeps C++ unique()'s state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "C++ unique() appears when the input is input and the required result is answer.",
  "whenToUse": "Use C++ unique() when a problem matches the C++ STL Algorithm Pages pattern and the expected state changes match a duplicate shift dry run.",
  "memoryTrick": "C++ unique(): name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A duplicate shift walkthrough showing C++ unique()'s input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data C++ unique() receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by C++ unique()."
    },
    {
      "title": "Apply the transition",
      "text": "Run the duplicate shift transition and update the algorithm-specific state."
    },
    {
      "title": "Return the answer",
      "text": "Stop at the correct condition and return the tracked result."
    }
  ],
  "variables": [
    {
      "name": "input",
      "purpose": "The concrete data C++ unique() receives before any state changes begin."
    },
    {
      "name": "state",
      "purpose": "The working information C++ unique() updates while it runs."
    },
    {
      "name": "answer",
      "purpose": "The final value C++ unique() returns after the stop condition is met."
    },
    {
      "name": "condition",
      "purpose": "The rule that decides whether C++ unique() continues, branches, or stops."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the C++ unique() input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that C++ unique() changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one duplicate shift transition for C++ unique().",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final C++ unique() answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps C++ unique() correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through C++ unique()'s transition.",
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
    "correctText": "Correct. C++ unique() stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. C++ unique() needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "c-stl-algorithm-pages",
  "algorithmSlug": "cpp-unique"
};
