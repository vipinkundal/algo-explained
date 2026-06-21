// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-array-adt-finding-missing-element",
  "title": "Find Missing Element in Array",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Arrays / Array ADT",
  "sourceFolder": "05_Array_ADT",
  "sourceFile": "10_01_finding_mising_element.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/array-adt-finding-missing-element",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "array-adt",
  "icon": "view_week",
  "codePath": "./src/algorithms/data-structures/array-adt-finding-missing-element/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/array-adt-finding-missing-element/code/original.cpp",
  "originalCodeFilename": "10_01_finding_mising_element.cpp",
  "originalActiveLine": 3,
  "meaning": "Find Missing Element in Array shows how data is organized, changed, and inspected through a small browser demo with a C/C++ reference available beside it.",
  "problem": "Find Missing Element in Array explains the array state model and how one focused change updates it.",
  "concept": "Find Missing Element in Array is useful when contiguous storage, indexes, length, or capacity explain the operation. Use this when an array operation depends on slot position, bounds, or shifting values.",
  "logicSummary": "Read the index or value, check the active length and capacity, update the affected slots, and return the visible array result.",
  "transitionSummary": "Each step changes one index, length, capacity, or shifted range while preserving the array representation.",
  "codeInsight": "Use the Runnable JS tab to edit inputs and see browser-safe output. Use the C/C++ Reference tab to study the source implementation.",
  "originalCodeInsight": "The loop is the transition: it repeatedly visits elements or nodes and updates the structure state.",
  "realLifeExample": "Find Missing Element in Array is useful when you need to understand the mechanics behind library-level data structures.",
  "whenToUse": "Use this page when learning Arrays / Array ADT behavior through state changes instead of memorized code.",
  "memoryTrick": "Find Missing Element in Array: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Find Missing Element in Array is shown as indexed array state changes. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Read request",
      "text": "Identify the index, value, length, or capacity involved."
    },
    {
      "title": "Check bounds",
      "text": "Confirm the operation is valid for the active array size."
    },
    {
      "title": "Update slots",
      "text": "Set, shift, scan, or resize the affected cells."
    },
    {
      "title": "Return array result",
      "text": "Return the found value, status, or updated array view."
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
      "purpose": "Shows the slots after Find Missing Element in Array applies its operation."
    }
  ],
  "dryRun": [
    {
      "label": "Array",
      "title": "Read array request",
      "note": "The code receives an array plus an index, value, or command.",
      "activeLine": 3,
      "codeInsight": "Initializes values, the local state that the next highlighted lines will update."
    },
    {
      "label": "Index / length",
      "title": "Check active range",
      "note": "Bounds and current length decide whether the operation is valid.",
      "activeLine": 4,
      "codeInsight": "Stores sum so the algorithm can reuse this value without recomputing it."
    },
    {
      "label": "Slots",
      "title": "Update affected cells",
      "note": "The operation sets, shifts, scans, or resizes array slots.",
      "activeLine": 6,
      "codeInsight": "Executes this Find Missing Element in Array line as part of the highlighted code path, linking the visual step to the implementation."
    },
    {
      "label": "Result",
      "title": "Return array state",
      "note": "The visible value or updated array confirms the operation.",
      "activeLine": 5,
      "codeInsight": "Returns { structure: \"array\", values, length: values.length, max: Math.max(...values), sum }, the value produced after Find Missing Element in Array's state changes are complete."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying Find Missing Element in Array?",
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
  "algorithmSlug": "array-adt-finding-missing-element",
  "animation": {
    "type": "array-flow",
    "title": "Find Missing Element in Array array state",
    "ruleLabel": "Array invariant",
    "rule": "Each step changes one index, length, capacity, or shifted range while preserving the array representation.",
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
        "phase": "Array",
        "title": "Read array request",
        "note": "The code receives an array plus an index, value, or command.",
        "ruleLabel": "Find Missing Element in Array invariant",
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
        "primaryLabel": "Array",
        "secondaryLabel": "Each step changes one index, length, capacity, or shifted range while preserving the array representation."
      },
      {
        "phase": "Index / length",
        "title": "Check active range",
        "note": "Bounds and current length decide whether the operation is valid.",
        "ruleLabel": "Find Missing Element in Array invariant",
        "rule": "Stores sum so the algorithm can reuse this value without recomputing it.",
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
        "primaryLabel": "Index / length",
        "secondaryLabel": "Each step changes one index, length, capacity, or shifted range while preserving the array representation."
      },
      {
        "phase": "Slots",
        "title": "Update affected cells",
        "note": "The operation sets, shifts, scans, or resizes array slots.",
        "ruleLabel": "Find Missing Element in Array invariant",
        "rule": "Executes this Find Missing Element in Array line as part of the highlighted code path, linking the visual step to the implementation.",
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
        "primaryLabel": "Slots",
        "secondaryLabel": "Each step changes one index, length, capacity, or shifted range while preserving the array representation."
      },
      {
        "phase": "Result",
        "title": "Return array state",
        "note": "The visible value or updated array confirms the operation.",
        "ruleLabel": "Find Missing Element in Array invariant",
        "rule": "Returns { structure: \"array\", values, length: values.length, max: Math.max(...values), sum }, the value produced after Find Missing Element in Array's state changes are complete.",
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
        "secondaryLabel": "Each step changes one index, length, capacity, or shifted range while preserving the array representation."
      }
    ]
  }
};
