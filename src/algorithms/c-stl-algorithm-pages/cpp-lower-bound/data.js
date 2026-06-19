// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "cpp-lower-bound",
  "title": "C++ lower_bound()",
  "category": "C++ STL Algorithm Pages",
  "route": "/algorithms/cpp-stl/lower-bound",
  "phase": 1,
  "priority": "high",
  "visualizerType": "array-boundaries",
  "icon": "school",
  "codePath": "./src/algorithms/c-stl-algorithm-pages/cpp-lower-bound/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "C++ lower_bound() is a C++ STL Algorithm Pages technique focused on index or insertion point.",
  "problem": "C++ lower_bound() narrows where a target can be by scanning or shrinking a candidate interval.",
  "concept": "C++ lower_bound() narrows where a target can be by scanning or shrinking a candidate interval.",
  "logicSummary": "Compare the current value with the target, discard impossible positions, and keep the best candidate when needed.",
  "transitionSummary": "Each transition either advances one position or moves a boundary inward.",
  "codeInsight": "The boundary variables are the important state; every branch must make the remaining search interval smaller.",
  "realLifeExample": "C++ lower_bound() appears when the input is array, target and the required result is index or insertion point.",
  "whenToUse": "Use C++ lower_bound() when a problem matches the C++ STL Algorithm Pages pattern and the expected state changes match a array boundaries dry run.",
  "memoryTrick": "C++ lower_bound(): name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A array boundaries walkthrough showing C++ lower_bound()'s input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data C++ lower_bound() receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by C++ lower_bound()."
    },
    {
      "title": "Apply the transition",
      "text": "Run the array boundaries transition and update the algorithm-specific state."
    },
    {
      "title": "Return the answer",
      "text": "Stop at the correct condition and return the tracked result."
    }
  ],
  "variables": [
    {
      "name": "array, target",
      "purpose": "array: The ordered or unsorted list the algorithm scans, partitions, sorts, or transforms. target: The value or condition each comparison is trying to locate."
    },
    {
      "name": "low, high, mid",
      "purpose": "The shrinking search window and midpoint used to discard impossible positions."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by cppLowerBound after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Each transition either advances one position or moves a boundary inward. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the C++ lower_bound() input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that C++ lower_bound() changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one array boundaries transition for C++ lower_bound().",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final C++ lower_bound() answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "O(log n) on sorted or searchable ranges.",
    "space": "O(1) auxiliary space."
  },
  "quiz": {
    "question": "Which state choice keeps C++ lower_bound() correct?",
    "options": [
      {
        "key": "A",
        "text": "Track search window and update it only through C++ lower_bound()'s transition.",
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
    "correctText": "Correct. C++ lower_bound() stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. C++ lower_bound() needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "c-stl-algorithm-pages",
  "algorithmSlug": "cpp-lower-bound",
  "runnerInput": [
    [
      1,
      3,
      3,
      5
    ],
    3
  ]
};
