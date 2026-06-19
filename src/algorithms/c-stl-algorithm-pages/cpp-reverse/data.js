// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "cpp-reverse",
  "title": "C++ reverse()",
  "category": "C++ STL Algorithm Pages",
  "route": "/algorithms/cpp-stl/reverse",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "two-pointer-swap",
  "icon": "school",
  "codePath": "./src/algorithms/c-stl-algorithm-pages/cpp-reverse/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "C++ reverse() is a C++ STL Algorithm Pages technique focused on answer.",
  "problem": "C++ reverse() solves a C++ STL Algorithm Pages problem by maintaining only the state needed for its two pointer swap transition.",
  "concept": "C++ reverse() solves a C++ STL Algorithm Pages problem by maintaining only the state needed for its two pointer swap transition.",
  "logicSummary": "C++ reverse() reads the input, initializes its working state, applies the core transition, and returns the tracked answer.",
  "transitionSummary": "Repeat the two pointer swap transition until the stop condition for C++ reverse() is reached.",
  "codeInsight": "The implementation keeps C++ reverse()'s state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "C++ reverse() appears when the input is input and the required result is answer.",
  "whenToUse": "Use C++ reverse() when a problem matches the C++ STL Algorithm Pages pattern and the expected state changes match a two pointer swap dry run.",
  "memoryTrick": "C++ reverse(): name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A two pointer swap walkthrough showing C++ reverse()'s input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data C++ reverse() receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by C++ reverse()."
    },
    {
      "title": "Apply the transition",
      "text": "Run the two pointer swap transition and update the algorithm-specific state."
    },
    {
      "title": "Return the answer",
      "text": "Stop at the correct condition and return the tracked result."
    }
  ],
  "variables": [
    {
      "name": "array",
      "purpose": "The ordered or unsorted list the algorithm scans, partitions, sorts, or transforms."
    },
    {
      "name": "left and right swap pointers",
      "purpose": "The two endpoints that move inward after each swap."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by cppReverse after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Repeat the two pointer swap transition until the stop condition for C++ reverse() is reached. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the C++ reverse() input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that C++ reverse() changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one two pointer swap transition for C++ reverse().",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final C++ reverse() answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps C++ reverse() correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through C++ reverse()'s transition.",
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
    "correctText": "Correct. C++ reverse() stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. C++ reverse() needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "c-stl-algorithm-pages",
  "algorithmSlug": "cpp-reverse",
  "runnerInput": [
    [
      1,
      2,
      3
    ]
  ]
};
