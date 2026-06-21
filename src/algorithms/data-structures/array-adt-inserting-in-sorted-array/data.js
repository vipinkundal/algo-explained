// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-array-adt-inserting-in-sorted-array",
  "title": "Array ADT Inserting In Sorted Array",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Arrays / Array ADT",
  "sourceFolder": "05_Array_ADT",
  "sourceFile": "06_01_inserting_in_sorted_array.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/array-adt-inserting-in-sorted-array",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "array-adt",
  "icon": "view_week",
  "codePath": "./src/algorithms/data-structures/array-adt-inserting-in-sorted-array/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/array-adt-inserting-in-sorted-array/code/original.cpp",
  "originalCodeFilename": "06_01_inserting_in_sorted_array.cpp",
  "originalActiveLine": 3,
  "meaning": "Array ADT Inserting In Sorted Array shows how data is organized, changed, and inspected through a small browser demo with the original C/C++ reference available beside it.",
  "problem": "Array ADT Inserting In Sorted Array explains the array state model and how one focused change updates it.",
  "concept": "Array ADT Inserting In Sorted Array is useful when values must be placed into a reliable order before later work can be simple. Use this when the algorithm's ordering invariant and cost fit the input size and stability needs.",
  "logicSummary": "Protect the algorithm's ordering invariant until every value reaches final order.",
  "transitionSummary": "Each step compares or moves values so the unsorted region gets smaller.",
  "codeInsight": "Use the Runnable JS tab to edit inputs and see browser-safe output. Use the Original C/C++ tab to study the source implementation.",
  "originalCodeInsight": "The loop is the transition: it repeatedly visits elements or nodes and updates the structure state.",
  "realLifeExample": "Array ADT Inserting In Sorted Array is useful when you need to understand the mechanics behind library-level data structures.",
  "whenToUse": "Use this page when learning Arrays / Array ADT behavior through state changes instead of memorized code.",
  "memoryTrick": "Array ADT Inserting In Sorted Array: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Array ADT Inserting In Sorted Array is shown as values moving toward sorted order. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Copy values",
      "text": "Work on a mutable array without changing the original input."
    },
    {
      "title": "Choose invariant",
      "text": "Track the sorted or partitioned region."
    },
    {
      "title": "Move values",
      "text": "Perform the comparison, swap, merge, or placement."
    },
    {
      "title": "Return order",
      "text": "Return the fully sorted array."
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
      "purpose": "Shows the slots after Array ADT Inserting In Sorted Array applies its operation."
    }
  ],
  "dryRun": [
    {
      "label": "Input array",
      "title": "Copy values",
      "note": "The code starts with the values to reorder.",
      "activeLine": 1,
      "codeInsight": "The code starts with the values to reorder."
    },
    {
      "label": "Invariant",
      "title": "Track ordered work",
      "note": "The algorithm marks what part is already safe.",
      "activeLine": 3,
      "codeInsight": "The algorithm marks what part is already safe."
    },
    {
      "label": "Move",
      "title": "Apply ordering step",
      "note": "The current operation reduces disorder.",
      "activeLine": 6,
      "codeInsight": "The current operation reduces disorder."
    },
    {
      "label": "Sorted output",
      "title": "Return final order",
      "note": "The result is returned when no unsorted work remains.",
      "activeLine": 10,
      "codeInsight": "The result is returned when no unsorted work remains."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying Array ADT Inserting In Sorted Array?",
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
    "array-patterns"
  ],
  "relatedLinks": [
    {
      "id": "array-patterns",
      "title": "Array Patterns",
      "label": "Existing algorithm lesson"
    }
  ],
  "runnerInput": [],
  "categorySlug": "data-structures",
  "algorithmSlug": "array-adt-inserting-in-sorted-array",
  "animation": {
    "type": "array-flow",
    "title": "Array ADT Inserting In Sorted Array array state",
    "ruleLabel": "Array invariant",
    "rule": "Each step compares or moves values so the unsorted region gets smaller.",
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
        "title": "Copy values",
        "note": "The code starts with the values to reorder.",
        "ruleLabel": "Array ADT Inserting In Sorted Array invariant",
        "rule": "The code starts with the values to reorder.",
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
        "secondaryLabel": "Each step compares or moves values so the unsorted region gets smaller."
      },
      {
        "phase": "Invariant",
        "title": "Track ordered work",
        "note": "The algorithm marks what part is already safe.",
        "ruleLabel": "Array ADT Inserting In Sorted Array invariant",
        "rule": "The algorithm marks what part is already safe.",
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
        "primaryLabel": "Invariant",
        "secondaryLabel": "Each step compares or moves values so the unsorted region gets smaller."
      },
      {
        "phase": "Move",
        "title": "Apply ordering step",
        "note": "The current operation reduces disorder.",
        "ruleLabel": "Array ADT Inserting In Sorted Array invariant",
        "rule": "The current operation reduces disorder.",
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
        "primaryLabel": "Move",
        "secondaryLabel": "Each step compares or moves values so the unsorted region gets smaller."
      },
      {
        "phase": "Sorted output",
        "title": "Return final order",
        "note": "The result is returned when no unsorted work remains.",
        "ruleLabel": "Array ADT Inserting In Sorted Array invariant",
        "rule": "The result is returned when no unsorted work remains.",
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
        "primaryLabel": "Sorted output",
        "secondaryLabel": "Each step compares or moves values so the unsorted region gets smaller."
      }
    ]
  }
};
