// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-array-adt-linear-search-transposition",
  "title": "Linear Search in Array ADT with Transposition",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Arrays / Array ADT",
  "sourceFolder": "05_Array_ADT",
  "sourceFile": "03_02_linerar_search.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/array-adt-linear-search-transposition",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "array-adt",
  "icon": "view_week",
  "codePath": "./src/algorithms/data-structures/array-adt-linear-search-transposition/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/array-adt-linear-search-transposition/code/original.cpp",
  "originalCodeFilename": "03_02_linerar_search.cpp",
  "originalActiveLine": 4,
  "meaning": "Linear Search in Array ADT with Transposition shows how data is organized, changed, and inspected through a small browser demo with a C/C++ reference available beside it.",
  "problem": "Linear Search in Array ADT with Transposition explains the array state model and how one focused change updates it.",
  "concept": "Linear Search in Array ADT with Transposition is useful when every item may matter and the input has no stronger ordering to exploit. Use this when a simple pass is clearer or cheaper than preprocessing.",
  "logicSummary": "Move one index through the array, update the running state, and stop when the required condition is met.",
  "transitionSummary": "Each loop consumes the current item exactly once and advances the index.",
  "codeInsight": "Use the Runnable JS tab to edit inputs and see browser-safe output. Use the C/C++ Reference tab to study the source implementation.",
  "originalCodeInsight": "The C++ class groups data members with operations, so the structure controls how outside code can mutate state.",
  "realLifeExample": "Linear Search in Array ADT with Transposition is useful when you need to understand the mechanics behind library-level data structures.",
  "whenToUse": "Use this page when learning Arrays / Array ADT behavior through state changes instead of memorized code.",
  "memoryTrick": "Linear Search in Array ADT with Transposition: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Linear Search in Array ADT with Transposition is shown as a left-to-right scan. The numbered steps follow the code path used to maintain the main invariant.",
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
      "purpose": "Shows the slots after Linear Search in Array ADT with Transposition applies its operation."
    }
  ],
  "dryRun": [
    {
      "label": "Input array",
      "title": "Read values",
      "note": "The code receives the list and any target condition.",
      "activeLine": 3,
      "codeInsight": "Initializes values, the local state that the next highlighted lines will update."
    },
    {
      "label": "Index",
      "title": "Select current item",
      "note": "The loop focuses on one position at a time.",
      "activeLine": 3,
      "codeInsight": "Initializes values, the local state that the next highlighted lines will update."
    },
    {
      "label": "Update",
      "title": "Apply comparison or count",
      "note": "The current value changes the running state only if the rule says so.",
      "activeLine": 5,
      "codeInsight": "Returns { structure: \"array\", values, length: values.length, max: Math.max(...values), sum }, the value produced after Linear Search in Array ADT with Transposition's state changes are complete."
    },
    {
      "label": "Result",
      "title": "Return scan output",
      "note": "When the scan ends, the tracked result is returned.",
      "activeLine": 5,
      "codeInsight": "Returns { structure: \"array\", values, length: values.length, max: Math.max(...values), sum }, the value produced after Linear Search in Array ADT with Transposition's state changes are complete."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying Linear Search in Array ADT with Transposition?",
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
  "algorithmSlug": "array-adt-linear-search-transposition",
  "animation": {
    "type": "array-flow",
    "title": "Linear Search in Array ADT with Transposition array state",
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
        "ruleLabel": "Linear Search in Array ADT with Transposition invariant",
        "rule": "Initializes values, the local state that the next highlighted lines will update.",
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
        "ruleLabel": "Linear Search in Array ADT with Transposition invariant",
        "rule": "Initializes values, the local state that the next highlighted lines will update.",
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
        "ruleLabel": "Linear Search in Array ADT with Transposition invariant",
        "rule": "Returns { structure: \"array\", values, length: values.length, max: Math.max(...values), sum }, the value produced after Linear Search in Array ADT with Transposition's state changes are complete.",
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
        "ruleLabel": "Linear Search in Array ADT with Transposition invariant",
        "rule": "Returns { structure: \"array\", values, length: values.length, max: Math.max(...values), sum }, the value produced after Linear Search in Array ADT with Transposition's state changes are complete.",
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
