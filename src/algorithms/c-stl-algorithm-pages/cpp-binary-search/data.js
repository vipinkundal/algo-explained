// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "cpp-binary-search",
  "title": "C++ binary_search()",
  "category": "C++ STL Algorithm Pages",
  "route": "/algorithms/cpp-stl/binary-search",
  "phase": 1,
  "priority": "high",
  "visualizerType": "array-boundaries",
  "icon": "school",
  "codePath": "./src/algorithms/c-stl-algorithm-pages/cpp-binary-search/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "C++ binary_search() is a C++ STL Algorithm Pages technique focused on index or insertion point.",
  "problem": "C++ binary_search() narrows where a target can be by scanning or shrinking a candidate interval.",
  "concept": "C++ binary_search() narrows where a target can be by scanning or shrinking a candidate interval.",
  "logicSummary": "Compare the current value with the target, discard impossible positions, and keep the best candidate when needed.",
  "transitionSummary": "Each transition either advances one position or moves a boundary inward.",
  "codeInsight": "The boundary variables are the important state; every branch must make the remaining search interval smaller.",
  "realLifeExample": "C++ binary_search() appears when the input is array, target and the required result is index or insertion point.",
  "whenToUse": "Use C++ binary_search() when a problem matches the C++ STL Algorithm Pages pattern and the expected state changes match a array boundaries dry run.",
  "memoryTrick": "C++ binary_search(): name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A array boundaries walkthrough showing C++ binary_search()'s input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data C++ binary_search() receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by C++ binary_search()."
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
      "purpose": "A searchable list plus the value or boundary condition being requested."
    },
    {
      "name": "search window",
      "purpose": "Current indices or scan position that define where the answer can still be."
    },
    {
      "name": "index or insertion point",
      "purpose": "The found position, boundary position, or -1 when no valid item exists."
    },
    {
      "name": "window still valid",
      "purpose": "Continue while the current index or low/high window can still contain the answer."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the C++ binary_search() input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that C++ binary_search() changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one array boundaries transition for C++ binary_search().",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final C++ binary_search() answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "O(log n) on sorted or searchable ranges.",
    "space": "O(1) auxiliary space."
  },
  "quiz": {
    "question": "Which state choice keeps C++ binary_search() correct?",
    "options": [
      {
        "key": "A",
        "text": "Track search window and update it only through C++ binary_search()'s transition.",
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
    "correctText": "Correct. C++ binary_search() stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. C++ binary_search() needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "c-stl-algorithm-pages",
  "algorithmSlug": "cpp-binary-search"
};
