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
  "concept": "C++ max_element() / min_element() is useful when every item may matter and the input has no stronger ordering to exploit. Use this when a simple pass is clearer or cheaper than preprocessing.",
  "logicSummary": "Move one index through the array, update the running state, and stop when the required condition is met.",
  "transitionSummary": "Each loop consumes the current item exactly once and advances the index.",
  "codeInsight": "The implementation keeps C++ max_element() / min_element()'s state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "C++ max_element() / min_element() appears when the input is input and the required result is answer.",
  "whenToUse": "Use C++ max_element() / min_element() when a problem matches the C++ STL Algorithm Pages pattern and the expected state changes match a array scan dry run.",
  "memoryTrick": "C++ max_element() / min_element(): name the invariant, then trace the exact state change.",
  "visualizerCaption": "C++ max_element() / min_element() is shown as a left-to-right scan. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Start scan",
      "text": "Set the first index and initial result."
    },
    {
      "title": "Read value",
      "text": "Inspect the current array item."
    },
    {
      "title": "Update state",
      "text": "Change the answer, counter, or candidate."
    },
    {
      "title": "Finish pass",
      "text": "Return the maintained result after the scan."
    }
  ],
  "variables": [
    {
      "name": "input",
      "purpose": "The numeric or collection input used by the bit, math, or foundation routine."
    },
    {
      "name": "index and comparison",
      "purpose": "The current array position and comparison that decide whether C++ max_element() / min_element() returns now or moves on."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by cppMaxMinElement after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Repeat the array scan transition until the stop condition for C++ max_element() / min_element() is reached. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Input array",
      "title": "Read values",
      "note": "The code receives the list and any target condition.",
      "activeLine": 1,
      "codeInsight": "The code receives the list and any target condition."
    },
    {
      "label": "Index",
      "title": "Select current item",
      "note": "The loop focuses on one position at a time.",
      "activeLine": 3,
      "codeInsight": "The loop focuses on one position at a time."
    },
    {
      "label": "Update",
      "title": "Apply comparison or count",
      "note": "The current value changes the running state only if the rule says so.",
      "activeLine": 5,
      "codeInsight": "The current value changes the running state only if the rule says so."
    },
    {
      "label": "Result",
      "title": "Return scan output",
      "note": "When the scan ends, the tracked result is returned.",
      "activeLine": 8,
      "codeInsight": "When the scan ends, the tracked result is returned."
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
  "algorithmSlug": "cpp-max-min-element",
  "runnerInput": [
    [
      3,
      1,
      4,
      2
    ]
  ]
};
