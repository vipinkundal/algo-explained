// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "cpp-max-min-element",
  "title": "C++ max_element() / min_element()",
  "category": "C++ STL Algorithm Pages",
  "route": "/algorithms/cpp-stl/max-min-element",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "array-scan",
  "icon": "school",
  "codePath": "./src/algorithms/c-stl-algorithm-pages/cpp-max-min-element/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "C++ max_element() / min_element() is a C++ STL Algorithm Pages technique focused on answer.",
  "problem": "C++ max_element() / min_element() solves a C++ STL Algorithm Pages problem by maintaining only the state needed for its array scan transition.",
  "concept": "C++ max_element() / min_element() solves a C++ STL Algorithm Pages problem by maintaining only the state needed for its array scan transition.",
  "logicSummary": "C++ max_element() / min_element() reads the input, initializes its working state, applies the core transition, and returns the tracked answer.",
  "transitionSummary": "Repeat the array scan transition until the stop condition for C++ max_element() / min_element() is reached.",
  "codeInsight": "The implementation keeps C++ max_element() / min_element()'s state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "C++ max_element() / min_element() appears when the input is input and the required result is answer.",
  "whenToUse": "Use C++ max_element() / min_element() when a problem matches the C++ STL Algorithm Pages pattern and the expected state changes match a array scan dry run.",
  "memoryTrick": "C++ max_element() / min_element(): name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A array scan walkthrough showing C++ max_element() / min_element()'s input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data C++ max_element() / min_element() receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by C++ max_element() / min_element()."
    },
    {
      "title": "Apply the transition",
      "text": "Run the array scan transition and update the algorithm-specific state."
    },
    {
      "title": "Return the answer",
      "text": "Stop at the correct condition and return the tracked result."
    }
  ],
  "variables": [
    {
      "name": "input",
      "purpose": "The concrete data C++ max_element() / min_element() receives before any state changes begin."
    },
    {
      "name": "state",
      "purpose": "The working information C++ max_element() / min_element() updates while it runs."
    },
    {
      "name": "answer",
      "purpose": "The final value C++ max_element() / min_element() returns after the stop condition is met."
    },
    {
      "name": "condition",
      "purpose": "The rule that decides whether C++ max_element() / min_element() continues, branches, or stops."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the C++ max_element() / min_element() input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that C++ max_element() / min_element() changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one array scan transition for C++ max_element() / min_element().",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final C++ max_element() / min_element() answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps C++ max_element() / min_element() correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through C++ max_element() / min_element()'s transition.",
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
    "correctText": "Correct. C++ max_element() / min_element() stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. C++ max_element() / min_element() needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "c-stl-algorithm-pages",
  "algorithmSlug": "cpp-max-min-element"
};
