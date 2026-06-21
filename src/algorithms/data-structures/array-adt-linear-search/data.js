// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-array-adt-linear-search",
  "title": "Linear Search in Array ADT",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Arrays / Array ADT",
  "sourceFolder": "05_Array_ADT",
  "sourceFile": "03_01_linear_search.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/array-adt-linear-search",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "array-adt",
  "icon": "view_week",
  "codePath": "./src/algorithms/data-structures/array-adt-linear-search/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/array-adt-linear-search/code/original.cpp",
  "originalCodeFilename": "03_01_linear_search.cpp",
  "originalActiveLine": 3,
  "meaning": "Linear Search in Array ADT shows how data is organized, changed, and inspected through a small browser demo with the original C/C++ reference available beside it.",
  "problem": "Linear Search in Array ADT explains the array state model and how one focused change updates it.",
  "concept": "Linear Search in Array ADT is useful when every item may matter and the input has no stronger ordering to exploit. Use this when a simple pass is clearer or cheaper than preprocessing.",
  "logicSummary": "Move one index through the array, update the running state, and stop when the required condition is met.",
  "transitionSummary": "Each loop consumes the current item exactly once and advances the index.",
  "codeInsight": "Use the Runnable JS tab to edit inputs and see browser-safe output. Use the Original C/C++ tab to study the source implementation.",
  "originalCodeInsight": "The loop is the transition: it repeatedly visits elements or nodes and updates the structure state.",
  "realLifeExample": "Linear Search in Array ADT is useful when you need to understand the mechanics behind library-level data structures.",
  "whenToUse": "Use this page when learning Arrays / Array ADT behavior through state changes instead of memorized code.",
  "memoryTrick": "Linear Search in Array ADT: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Linear Search in Array ADT is shown as a left-to-right scan. The numbered steps follow the code path used to maintain the main invariant.",
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
      "name": "slot index",
      "purpose": "Selects the current array position."
    },
    {
      "name": "active value",
      "purpose": "The value currently being read or moved."
    },
    {
      "name": "write slot",
      "purpose": "Marks where an updated value is stored."
    },
    {
      "name": "array view",
      "purpose": "Shows the slots after Linear Search in Array ADT applies its operation."
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
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying Linear Search in Array ADT?",
    "options": [
      {
        "key": "A",
        "text": "The memory/state representation and invariant.",
        "correct": true
      },
      {
        "key": "B",
        "text": "Only the final cout output.",
        "correct": false
      },
      {
        "key": "C",
        "text": "A different algorithm with the same name.",
        "correct": false
      }
    ],
    "correctKey": "A",
    "correctText": "Correct. Data-structure code is easiest to understand when the state representation is clear first.",
    "incorrectText": "Not quite. Start with the structure state, then follow the operation that mutates or reads it."
  },
  "relatedAlgorithmIds": [
    "array-patterns",
    "linear-search"
  ],
  "relatedLinks": [
    {
      "id": "array-patterns",
      "title": "Array Patterns",
      "label": "Existing algorithm lesson"
    },
    {
      "id": "linear-search",
      "title": "Linear Search",
      "label": "Existing algorithm lesson"
    }
  ],
  "runnerInput": [],
  "categorySlug": "data-structures",
  "algorithmSlug": "array-adt-linear-search",
  "animation": {
    "type": "array-flow",
    "title": "Linear Search in Array ADT array state",
    "ruleLabel": "Array invariant",
    "rule": "Each loop consumes the current item exactly once and advances the index.",
    "values": [
      4,
      1,
      7,
      3,
      6,
      2
    ],
    "steps": [
      {
        "phase": "Input array",
        "title": "Read values",
        "note": "The code receives the list and any target condition.",
        "ruleLabel": "Linear Search in Array ADT invariant",
        "rule": "The code receives the list and any target condition.",
        "activeIndices": [
          0
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          1
        ],
        "primaryLabel": "Input array",
        "secondaryLabel": "Each loop consumes the current item exactly once and advances the index."
      },
      {
        "phase": "Index",
        "title": "Select current item",
        "note": "The loop focuses on one position at a time.",
        "ruleLabel": "Linear Search in Array ADT invariant",
        "rule": "The loop focuses on one position at a time.",
        "activeIndices": [
          1,
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [
          4,
          5
        ],
        "window": [
          0,
          2
        ],
        "primaryLabel": "Index",
        "secondaryLabel": "Each loop consumes the current item exactly once and advances the index."
      },
      {
        "phase": "Update",
        "title": "Apply comparison or count",
        "note": "The current value changes the running state only if the rule says so.",
        "ruleLabel": "Linear Search in Array ADT invariant",
        "rule": "The current value changes the running state only if the rule says so.",
        "activeIndices": [
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [
          5
        ],
        "window": [
          1,
          3
        ],
        "primaryLabel": "Update",
        "secondaryLabel": "Each loop consumes the current item exactly once and advances the index."
      },
      {
        "phase": "Result",
        "title": "Return scan output",
        "note": "When the scan ends, the tracked result is returned.",
        "ruleLabel": "Linear Search in Array ADT invariant",
        "rule": "When the scan ends, the tracked result is returned.",
        "activeIndices": [
          3,
          4
        ],
        "sortedIndices": [],
        "mutedIndices": [
          0
        ],
        "window": [
          2,
          4
        ],
        "primaryLabel": "Result",
        "secondaryLabel": "Each loop consumes the current item exactly once and advances the index."
      }
    ]
  }
};
