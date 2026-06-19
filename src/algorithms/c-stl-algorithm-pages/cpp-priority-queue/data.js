// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "cpp-priority-queue",
  "title": "C++ priority_queue",
  "category": "C++ STL Algorithm Pages",
  "route": "/algorithms/cpp-stl/priority-queue",
  "phase": 1,
  "priority": "high",
  "visualizerType": "heap-tree",
  "icon": "school",
  "codePath": "./src/algorithms/c-stl-algorithm-pages/cpp-priority-queue/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "C++ priority_queue is a C++ STL Algorithm Pages technique focused on answer.",
  "problem": "C++ priority_queue solves a C++ STL Algorithm Pages problem by maintaining only the state needed for its heap tree transition.",
  "concept": "C++ priority_queue solves a C++ STL Algorithm Pages problem by maintaining only the state needed for its heap tree transition.",
  "logicSummary": "C++ priority_queue reads the input, initializes its working state, applies the core transition, and returns the tracked answer.",
  "transitionSummary": "Repeat the heap tree transition until the stop condition for C++ priority_queue is reached.",
  "codeInsight": "The implementation keeps C++ priority_queue's state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "C++ priority_queue appears when the input is input and the required result is answer.",
  "whenToUse": "Use C++ priority_queue when a problem matches the C++ STL Algorithm Pages pattern and the expected state changes match a heap tree dry run.",
  "memoryTrick": "C++ priority_queue: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A heap tree walkthrough showing C++ priority_queue's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data C++ priority_queue receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by C++ priority_queue."
    },
    {
      "title": "Apply the transition",
      "text": "Run the heap tree transition and update the algorithm-specific state."
    },
    {
      "title": "Return the answer",
      "text": "Stop at the correct condition and return the tracked result."
    }
  ],
  "variables": [
    {
      "name": "values, window Size",
      "purpose": "values: The candidate values that drive the heap, recursion, subset, or frequency process. window Size: The window Size input used by the algorithm."
    },
    {
      "name": "heap array",
      "purpose": "The array-backed heap after each sift, push, or pop operation."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by cppPriorityQueue after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Repeat the heap tree transition until the stop condition for C++ priority_queue is reached. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the C++ priority_queue input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that C++ priority_queue changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one heap tree transition for C++ priority_queue.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final C++ priority_queue answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps C++ priority_queue correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through C++ priority_queue's transition.",
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
    "correctText": "Correct. C++ priority_queue stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. C++ priority_queue needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "c-stl-algorithm-pages",
  "algorithmSlug": "cpp-priority-queue",
  "runnerInput": [
    [
      4,
      1,
      5,
      2
    ],
    2
  ]
};
