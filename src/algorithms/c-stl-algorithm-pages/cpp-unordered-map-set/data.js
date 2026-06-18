// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "cpp-unordered-map-set",
  "title": "C++ unordered_map / unordered_set",
  "category": "C++ STL Algorithm Pages",
  "route": "/algorithms/cpp-stl/unordered-map-set",
  "phase": 1,
  "priority": "high",
  "visualizerType": "hash-table",
  "icon": "school",
  "codePath": "./src/algorithms/c-stl-algorithm-pages/cpp-unordered-map-set/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "C++ unordered_map / unordered_set is a C++ STL Algorithm Pages technique focused on answer.",
  "problem": "C++ unordered_map / unordered_set solves a C++ STL Algorithm Pages problem by maintaining only the state needed for its hash table transition.",
  "concept": "C++ unordered_map / unordered_set solves a C++ STL Algorithm Pages problem by maintaining only the state needed for its hash table transition.",
  "logicSummary": "C++ unordered_map / unordered_set reads the input, initializes its working state, applies the core transition, and returns the tracked answer.",
  "transitionSummary": "Repeat the hash table transition until the stop condition for C++ unordered_map / unordered_set is reached.",
  "codeInsight": "The implementation keeps C++ unordered_map / unordered_set's state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "C++ unordered_map / unordered_set appears when the input is input and the required result is answer.",
  "whenToUse": "Use C++ unordered_map / unordered_set when a problem matches the C++ STL Algorithm Pages pattern and the expected state changes match a hash table dry run.",
  "memoryTrick": "C++ unordered_map / unordered_set: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A hash table walkthrough showing C++ unordered_map / unordered_set's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data C++ unordered_map / unordered_set receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by C++ unordered_map / unordered_set."
    },
    {
      "title": "Apply the transition",
      "text": "Run the hash table transition and update the algorithm-specific state."
    },
    {
      "title": "Return the answer",
      "text": "Stop at the correct condition and return the tracked result."
    }
  ],
  "variables": [
    {
      "name": "input",
      "purpose": "The concrete data C++ unordered_map / unordered_set receives before any state changes begin."
    },
    {
      "name": "state",
      "purpose": "The working information C++ unordered_map / unordered_set updates while it runs."
    },
    {
      "name": "answer",
      "purpose": "The final value C++ unordered_map / unordered_set returns after the stop condition is met."
    },
    {
      "name": "condition",
      "purpose": "The rule that decides whether C++ unordered_map / unordered_set continues, branches, or stops."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the C++ unordered_map / unordered_set input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that C++ unordered_map / unordered_set changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one hash table transition for C++ unordered_map / unordered_set.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final C++ unordered_map / unordered_set answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps C++ unordered_map / unordered_set correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through C++ unordered_map / unordered_set's transition.",
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
    "correctText": "Correct. C++ unordered_map / unordered_set stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. C++ unordered_map / unordered_set needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "c-stl-algorithm-pages",
  "algorithmSlug": "cpp-unordered-map-set"
};
