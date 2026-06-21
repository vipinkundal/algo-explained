// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-array-adt-binary-search",
  "title": "Binary Search in Array ADT",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Arrays / Array ADT",
  "sourceFolder": "05_Array_ADT",
  "sourceFile": "04_binary_search.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/array-adt-binary-search",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "array-adt",
  "icon": "view_week",
  "codePath": "./src/algorithms/data-structures/array-adt-binary-search/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/array-adt-binary-search/code/original.cpp",
  "originalCodeFilename": "04_binary_search.cpp",
  "originalActiveLine": 3,
  "meaning": "Binary Search in Array ADT shows how data is organized, changed, and inspected through a small browser demo with a C/C++ reference available beside it.",
  "problem": "Binary Search in Array ADT explains the array state model and how one focused change updates it.",
  "concept": "Binary Search in Array ADT is useful when sorted order lets you discard a whole half of the search space. Use this when the input is sorted or the answer predicate changes only once.",
  "logicSummary": "Maintain low/high boundaries, test the middle, and keep only the half that can still contain the answer.",
  "transitionSummary": "Each comparison must shrink the boundary range; equality returns immediately, otherwise low or high moves past mid.",
  "codeInsight": "Use the Runnable JS tab to edit inputs and see browser-safe output. Use the C/C++ Reference tab to study the source implementation.",
  "originalCodeInsight": "The loop is the transition: it repeatedly visits elements or nodes and updates the structure state.",
  "realLifeExample": "Binary Search in Array ADT is useful when you need to understand the mechanics behind library-level data structures.",
  "whenToUse": "Use this page when learning Arrays / Array ADT behavior through state changes instead of memorized code.",
  "memoryTrick": "Binary Search in Array ADT: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Binary Search in Array ADT is shown as a shrinking boundary search. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Read sorted input",
      "text": "Confirm the array or predicate has monotonic order."
    },
    {
      "title": "Set boundaries",
      "text": "Place low and high around every candidate."
    },
    {
      "title": "Compare middle",
      "text": "Use mid to decide which half is impossible."
    },
    {
      "title": "Return boundary",
      "text": "Return the found index or final insertion boundary."
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
      "purpose": "Shows the slots after Binary Search in Array ADT applies its operation."
    }
  ],
  "dryRun": [
    {
      "label": "Sorted input",
      "title": "Read the ordered search space",
      "note": "The code starts from a range where binary decisions are valid.",
      "activeLine": 3,
      "codeInsight": "Initializes values, the local state that the next highlighted lines will update."
    },
    {
      "label": "low / high",
      "title": "Open the candidate window",
      "note": "low and high mark every position that may still answer.",
      "activeLine": 3,
      "codeInsight": "Initializes values, the local state that the next highlighted lines will update."
    },
    {
      "label": "mid check",
      "title": "Compare the midpoint",
      "note": "The midpoint decides which half is removed.",
      "activeLine": 5,
      "codeInsight": "Returns { structure: \"array\", values, length: values.length, max: Math.max(...values), sum }, the value produced after Binary Search in Array ADT's state changes are complete."
    },
    {
      "label": "Return",
      "title": "Emit index or boundary",
      "note": "The loop ends with a match or the collapsed boundary.",
      "activeLine": 5,
      "codeInsight": "Returns { structure: \"array\", values, length: values.length, max: Math.max(...values), sum }, the value produced after Binary Search in Array ADT's state changes are complete."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying Binary Search in Array ADT?",
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
    "binary-search"
  ],
  "relatedLinks": [
    {
      "id": "array-patterns",
      "title": "Array Patterns",
      "label": "Existing algorithm lesson"
    },
    {
      "id": "binary-search",
      "title": "Binary Search",
      "label": "Existing algorithm lesson"
    }
  ],
  "runnerInput": [],
  "categorySlug": "data-structures",
  "algorithmSlug": "array-adt-binary-search",
  "animation": {
    "type": "array-flow",
    "title": "Binary Search in Array ADT array state",
    "ruleLabel": "Array invariant",
    "rule": "Each comparison must shrink the boundary range; equality returns immediately, otherwise low or high moves past mid.",
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
        "phase": "Sorted input",
        "title": "Read the ordered search space",
        "note": "The code starts from a range where binary decisions are valid.",
        "ruleLabel": "Binary Search in Array ADT invariant",
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
        "primaryLabel": "Sorted input",
        "secondaryLabel": "Each comparison must shrink the boundary range; equality returns immediately, otherwise low or high moves past mid."
      },
      {
        "phase": "low / high",
        "title": "Open the candidate window",
        "note": "low and high mark every position that may still answer.",
        "ruleLabel": "Binary Search in Array ADT invariant",
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
        "primaryLabel": "low / high",
        "secondaryLabel": "Each comparison must shrink the boundary range; equality returns immediately, otherwise low or high moves past mid."
      },
      {
        "phase": "mid check",
        "title": "Compare the midpoint",
        "note": "The midpoint decides which half is removed.",
        "ruleLabel": "Binary Search in Array ADT invariant",
        "rule": "Returns { structure: \"array\", values, length: values.length, max: Math.max(...values), sum }, the value produced after Binary Search in Array ADT's state changes are complete.",
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
        "primaryLabel": "mid check",
        "secondaryLabel": "Each comparison must shrink the boundary range; equality returns immediately, otherwise low or high moves past mid."
      },
      {
        "phase": "Return",
        "title": "Emit index or boundary",
        "note": "The loop ends with a match or the collapsed boundary.",
        "ruleLabel": "Binary Search in Array ADT invariant",
        "rule": "Returns { structure: \"array\", values, length: values.length, max: Math.max(...values), sum }, the value produced after Binary Search in Array ADT's state changes are complete.",
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
        "primaryLabel": "Return",
        "secondaryLabel": "Each comparison must shrink the boundary range; equality returns immediately, otherwise low or high moves past mid."
      }
    ]
  }
};
