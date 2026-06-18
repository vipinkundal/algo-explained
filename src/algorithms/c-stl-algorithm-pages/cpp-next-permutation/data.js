// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "cpp-next-permutation",
  "title": "C++ next_permutation()",
  "category": "C++ STL Algorithm Pages",
  "route": "/algorithms/cpp-stl/next-permutation",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "permutation-step",
  "icon": "school",
  "codePath": "./src/algorithms/c-stl-algorithm-pages/cpp-next-permutation/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "C++ next_permutation() is a C++ STL Algorithm Pages technique focused on answer.",
  "problem": "C++ next_permutation() solves a C++ STL Algorithm Pages problem by maintaining only the state needed for its permutation step transition.",
  "concept": "C++ next_permutation() solves a C++ STL Algorithm Pages problem by maintaining only the state needed for its permutation step transition.",
  "logicSummary": "C++ next_permutation() reads the input, initializes its working state, applies the core transition, and returns the tracked answer.",
  "transitionSummary": "Repeat the permutation step transition until the stop condition for C++ next_permutation() is reached.",
  "codeInsight": "The implementation keeps C++ next_permutation()'s state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "C++ next_permutation() appears when the input is input and the required result is answer.",
  "whenToUse": "Use C++ next_permutation() when a problem matches the C++ STL Algorithm Pages pattern and the expected state changes match a permutation step dry run.",
  "memoryTrick": "C++ next_permutation(): name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A permutation step walkthrough showing C++ next_permutation()'s input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data C++ next_permutation() receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by C++ next_permutation()."
    },
    {
      "title": "Apply the transition",
      "text": "Run the permutation step transition and update the algorithm-specific state."
    },
    {
      "title": "Return the answer",
      "text": "Stop at the correct condition and return the tracked result."
    }
  ],
  "variables": [
    {
      "name": "input",
      "purpose": "The concrete data C++ next_permutation() receives before any state changes begin."
    },
    {
      "name": "state",
      "purpose": "The working information C++ next_permutation() updates while it runs."
    },
    {
      "name": "answer",
      "purpose": "The final value C++ next_permutation() returns after the stop condition is met."
    },
    {
      "name": "condition",
      "purpose": "The rule that decides whether C++ next_permutation() continues, branches, or stops."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the C++ next_permutation() input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that C++ next_permutation() changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one permutation step transition for C++ next_permutation().",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final C++ next_permutation() answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps C++ next_permutation() correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through C++ next_permutation()'s transition.",
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
    "correctText": "Correct. C++ next_permutation() stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. C++ next_permutation() needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "c-stl-algorithm-pages",
  "algorithmSlug": "cpp-next-permutation"
};
