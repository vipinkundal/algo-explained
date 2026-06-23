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
  "concept": "Two pointers are useful when moving one side changes the condition predictably. Use this when order lets you skip many pairs or positions.",
  "logicSummary": "Place two indices, inspect their combined state, and move the pointer that can still improve the condition.",
  "transitionSummary": "Each step moves left or right inward instead of trying all combinations.",
  "codeInsight": "The implementation keeps C++ reverse()'s state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "C++ reverse() appears when the input is input and the required result is answer.",
  "whenToUse": "Use C++ reverse() when a problem matches the C++ STL Algorithm Pages pattern and the expected state changes match a two pointer swap dry run.",
  "memoryTrick": "C++ reverse(): name the invariant, then trace the exact state change.",
  "visualizerCaption": "C++ reverse() is shown as two coordinated indices. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Place pointers",
      "text": "Start left and right at meaningful boundaries."
    },
    {
      "title": "Inspect pair",
      "text": "Read the values or state between them."
    },
    {
      "title": "Move one side",
      "text": "Advance the pointer that cannot produce the answer."
    },
    {
      "title": "Return match",
      "text": "Return the pair, range, or transformed array."
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
      "label": "Range",
      "title": "Read ordered range",
      "note": "The code receives values where pointer movement has meaning.",
      "activeLine": 5,
      "codeInsight": "Defines cppReverse and names the input values; edits to those inputs change the visual state and output."
    },
    {
      "label": "Pointers",
      "title": "Set left and right",
      "note": "Both indices define the current candidate state.",
      "activeLine": 5,
      "codeInsight": "Defines cppReverse and names the input values; edits to those inputs change the visual state and output."
    },
    {
      "label": "Compare",
      "title": "Choose pointer movement",
      "note": "The condition decides which pointer moves.",
      "activeLine": 5,
      "codeInsight": "Defines cppReverse and names the input values; edits to those inputs change the visual state and output."
    },
    {
      "label": "Pair result",
      "title": "Return pair or state",
      "note": "The loop stops when the target condition is met or exhausted.",
      "activeLine": 6,
      "codeInsight": "Returns the final array-style answer [...values].reverse(), so the last frame should show the chosen positions or sequence."
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
  ],
  "animation": {
    "type": "array-flow",
    "title": "C++ reverse() array state",
    "ruleLabel": "Array invariant",
    "rule": "Each step moves left or right inward instead of trying all combinations.",
    "values": [
      1,
      2,
      3
    ],
    "steps": [
      {
        "phase": "Range",
        "title": "Read ordered range",
        "note": "The code receives values where pointer movement has meaning.",
        "ruleLabel": "C++ reverse() invariant",
        "rule": "Defines cppReverse and names the input values; edits to those inputs change the visual state and output.",
        "activeIndices": [
          0
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          1
        ],
        "primaryLabel": "Range",
        "secondaryLabel": "Each step moves left or right inward instead of trying all combinations."
      },
      {
        "phase": "Pointers",
        "title": "Set left and right",
        "note": "Both indices define the current candidate state.",
        "ruleLabel": "C++ reverse() invariant",
        "rule": "Defines cppReverse and names the input values; edits to those inputs change the visual state and output.",
        "activeIndices": [
          1,
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          2
        ],
        "primaryLabel": "Pointers",
        "secondaryLabel": "Each step moves left or right inward instead of trying all combinations."
      },
      {
        "phase": "Compare",
        "title": "Choose pointer movement",
        "note": "The condition decides which pointer moves.",
        "ruleLabel": "C++ reverse() invariant",
        "rule": "Defines cppReverse and names the input values; edits to those inputs change the visual state and output.",
        "activeIndices": [
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          1,
          2
        ],
        "primaryLabel": "Compare",
        "secondaryLabel": "Each step moves left or right inward instead of trying all combinations."
      },
      {
        "phase": "Pair result",
        "title": "Return pair or state",
        "note": "The loop stops when the target condition is met or exhausted.",
        "ruleLabel": "C++ reverse() invariant",
        "rule": "Returns the final array-style answer [...values].reverse(), so the last frame should show the chosen positions or sequence.",
        "activeIndices": [
          2,
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          1,
          2
        ],
        "primaryLabel": "Pair result",
        "secondaryLabel": "Each step moves left or right inward instead of trying all combinations."
      }
    ]
  }
};
