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
  "concept": "C++ unordered_map / unordered_set is useful when algorithm state behavior is the clearest model for the data changes. Use this when the problem is naturally described by page-specific invariant.",
  "logicSummary": "Read the next value or operation, maintain page-specific invariant, then update the state described by this algorithm.",
  "transitionSummary": "Each step changes only the part of the algorithm state required to preserve the invariant.",
  "codeInsight": "The implementation keeps C++ unordered_map / unordered_set's state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "C++ unordered_map / unordered_set appears when the input is input and the required result is answer.",
  "whenToUse": "Use C++ unordered_map / unordered_set when a problem matches the C++ STL Algorithm Pages pattern and the expected state changes match a hash table dry run.",
  "memoryTrick": "C++ unordered_map / unordered_set: name the invariant, then trace the exact state change.",
  "visualizerCaption": "C++ unordered_map / unordered_set is shown as algorithm state state changes. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Read algorithm state",
      "text": "Identify the next command, value, node, or library call."
    },
    {
      "title": "Inspect invariant",
      "text": "Look at the active algorithm state fields."
    },
    {
      "title": "State change",
      "text": "update the state described by this algorithm."
    },
    {
      "title": "Read result",
      "text": "Return the emitted value or updated structure."
    }
  ],
  "variables": [
    {
      "name": "input",
      "purpose": "The numeric or collection input used by the bit, math, or foundation routine."
    },
    {
      "name": "working state",
      "purpose": "The local state updated by the algorithm transition. This page visualizes it as hash table."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by cppUnorderedMapSet after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Repeat the hash table transition until the stop condition for C++ unordered_map / unordered_set is reached. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Algorithm State",
      "title": "Read algorithm state action",
      "note": "The code receives the next value or command.",
      "activeLine": 1,
      "codeInsight": "The code receives the next value or command."
    },
    {
      "label": "Invariant",
      "title": "Inspect algorithm state",
      "note": "The active state must still satisfy page-specific invariant.",
      "activeLine": 3,
      "codeInsight": "The active state must still satisfy page-specific invariant."
    },
    {
      "label": "State change",
      "title": "Update the state described by this algorithm",
      "note": "Only the necessary algorithm state fields are changed.",
      "activeLine": 6,
      "codeInsight": "Only the necessary algorithm state fields are changed."
    },
    {
      "label": "Result",
      "title": "Return visible result",
      "note": "The return value or printed state confirms the operation.",
      "activeLine": 9,
      "codeInsight": "The return value or printed state confirms the operation."
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
  "algorithmSlug": "cpp-unordered-map-set",
  "runnerInput": [
    [
      1,
      2,
      2
    ]
  ],
  "animation": {
    "type": "string-flow",
    "title": "C++ unordered_map / unordered_set character scan",
    "ruleLabel": "String invariant",
    "rule": "Each step changes only the part of the algorithm state required to preserve the invariant.",
    "text": "cppunordered",
    "pattern": "cpp",
    "steps": [
      {
        "phase": "Algorithm State",
        "title": "Read algorithm state action",
        "note": "The code receives the next value or command.",
        "ruleLabel": "C++ unordered_map / unordered_set invariant",
        "rule": "The code receives the next value or command.",
        "activeRange": [
          0,
          2
        ],
        "matchedRange": []
      },
      {
        "phase": "Invariant",
        "title": "Inspect algorithm state",
        "note": "The active state must still satisfy page-specific invariant.",
        "ruleLabel": "C++ unordered_map / unordered_set invariant",
        "rule": "The active state must still satisfy page-specific invariant.",
        "activeRange": [
          1,
          3
        ],
        "matchedRange": []
      },
      {
        "phase": "State change",
        "title": "Update the state described by this algorithm",
        "note": "Only the necessary algorithm state fields are changed.",
        "ruleLabel": "C++ unordered_map / unordered_set invariant",
        "rule": "Only the necessary algorithm state fields are changed.",
        "activeRange": [
          2,
          4
        ],
        "matchedRange": []
      },
      {
        "phase": "Result",
        "title": "Return visible result",
        "note": "The return value or printed state confirms the operation.",
        "ruleLabel": "C++ unordered_map / unordered_set invariant",
        "rule": "The return value or printed state confirms the operation.",
        "activeRange": [
          3,
          5
        ],
        "matchedRange": [
          0,
          2
        ]
      }
    ]
  }
};
