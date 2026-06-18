// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "cpp-map-set",
  "title": "C++ map / set",
  "category": "C++ STL Algorithm Pages",
  "route": "/algorithms/cpp-stl/map-set",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "balanced-tree",
  "icon": "school",
  "codePath": "./src/algorithms/c-stl-algorithm-pages/cpp-map-set/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "C++ map / set is a C++ STL Algorithm Pages technique focused on answer.",
  "problem": "C++ map / set solves a C++ STL Algorithm Pages problem by maintaining only the state needed for its balanced tree transition.",
  "concept": "C++ map / set solves a C++ STL Algorithm Pages problem by maintaining only the state needed for its balanced tree transition.",
  "logicSummary": "C++ map / set reads the input, initializes its working state, applies the core transition, and returns the tracked answer.",
  "transitionSummary": "Repeat the balanced tree transition until the stop condition for C++ map / set is reached.",
  "codeInsight": "The implementation keeps C++ map / set's state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "C++ map / set appears when the input is input and the required result is answer.",
  "whenToUse": "Use C++ map / set when a problem matches the C++ STL Algorithm Pages pattern and the expected state changes match a balanced tree dry run.",
  "memoryTrick": "C++ map / set: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A balanced tree walkthrough showing C++ map / set's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data C++ map / set receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by C++ map / set."
    },
    {
      "title": "Apply the transition",
      "text": "Run the balanced tree transition and update the algorithm-specific state."
    },
    {
      "title": "Return the answer",
      "text": "Stop at the correct condition and return the tracked result."
    }
  ],
  "variables": [
    {
      "name": "input",
      "purpose": "The concrete data C++ map / set receives before any state changes begin."
    },
    {
      "name": "state",
      "purpose": "The working information C++ map / set updates while it runs."
    },
    {
      "name": "answer",
      "purpose": "The final value C++ map / set returns after the stop condition is met."
    },
    {
      "name": "condition",
      "purpose": "The rule that decides whether C++ map / set continues, branches, or stops."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the C++ map / set input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that C++ map / set changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one balanced tree transition for C++ map / set.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final C++ map / set answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps C++ map / set correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through C++ map / set's transition.",
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
    "correctText": "Correct. C++ map / set stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. C++ map / set needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "c-stl-algorithm-pages",
  "algorithmSlug": "cpp-map-set"
};
