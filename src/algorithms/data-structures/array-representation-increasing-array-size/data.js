// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this data-structure page without touching app.js.

export const algorithmPage = {
  "id": "ds-array-representation-increasing-array-size",
  "title": "Increasing Array Size",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Arrays / Array ADT",
  "sourceFolder": "04_Array_representation",
  "sourceFile": "02_increasing_array_size.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/array-representation-increasing-array-size",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "array-memory",
  "icon": "view_week",
  "codePath": "./src/algorithms/data-structures/array-representation-increasing-array-size/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/array-representation-increasing-array-size/code/original.cpp",
  "originalCodeFilename": "02_increasing_array_size.cpp",
  "originalActiveLine": 2,
  "meaning": "Increasing Array Size shows how data is organized, changed, and inspected through a small browser demo with the original C/C++ reference available beside it.",
  "problem": "Increasing Array Size explains the array state model and how one focused change updates it.",
  "concept": "Increasing Array Size is useful when contiguous storage, indexes, length, or capacity explain the operation. Use this when an array operation depends on slot position, bounds, or shifting values.",
  "logicSummary": "Read the index or value, check the active length and capacity, update the affected slots, and return the visible array result.",
  "transitionSummary": "Each step changes one index, length, capacity, or shifted range while preserving the array representation.",
  "codeInsight": "Use the Runnable JS tab to edit inputs and see browser-safe output. Use the Original C/C++ tab to study the source implementation.",
  "originalCodeInsight": "Dynamic allocation creates storage at runtime; every pointer assignment changes how nodes or arrays are connected.",
  "realLifeExample": "Increasing Array Size is useful when you need to understand the mechanics behind library-level data structures.",
  "whenToUse": "Use this page when learning Arrays / Array ADT behavior through state changes instead of memorized code.",
  "memoryTrick": "Increasing Array Size: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Increasing Array Size is shown as indexed array state changes. The numbered steps follow the code path used to maintain the main invariant.",
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
      "purpose": "Shows the slots after Increasing Array Size applies its operation."
    }
  ],
  "dryRun": [
    {
      "label": "Array",
      "title": "Read array request",
      "note": "The code receives an array plus an index, value, or command.",
      "activeLine": 1,
      "codeInsight": "The code receives an array plus an index, value, or command."
    },
    {
      "label": "Index / length",
      "title": "Check active range",
      "note": "Bounds and current length decide whether the operation is valid.",
      "activeLine": 4,
      "codeInsight": "Bounds and current length decide whether the operation is valid."
    },
    {
      "label": "Slots",
      "title": "Update affected cells",
      "note": "The operation sets, shifts, scans, or resizes array slots.",
      "activeLine": 7,
      "codeInsight": "The operation sets, shifts, scans, or resizes array slots."
    },
    {
      "label": "Result",
      "title": "Return array state",
      "note": "The visible value or updated array confirms the operation.",
      "activeLine": 10,
      "codeInsight": "The visible value or updated array confirms the operation."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying Increasing Array Size?",
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
  "algorithmSlug": "array-representation-increasing-array-size"
};
