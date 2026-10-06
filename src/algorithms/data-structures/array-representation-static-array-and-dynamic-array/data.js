// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-array-representation-static-array-and-dynamic-array",
  "title": "Static Array And Dynamic Array",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Arrays / Array ADT",
  "sourceFolder": "04_Array_representation",
  "sourceFile": "01_static_array_and_dynamic_array.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/array-representation-static-array-and-dynamic-array",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "array-memory",
  "icon": "view_week",
  "codePath": "./src/algorithms/data-structures/array-representation-static-array-and-dynamic-array/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/array-representation-static-array-and-dynamic-array/code/original.cpp",
  "originalCodeFilename": "01_static_array_and_dynamic_array.cpp",
  "originalActiveLine": 3,
  "meaning": "A fixed-size array reserves a set number of slots; dynamic storage can be resized by allocating and copying.",
  "problem": "A fixed-size array reserves a set number of slots; dynamic storage can be resized by allocating and copying.",
  "concept": "A fixed-size array reserves a set number of slots; dynamic storage can be resized by allocating and copying.",
  "logicSummary": "A fixed-size array reserves a set number of slots; dynamic storage can be resized by allocating and copying.",
  "transitionSummary": "A fixed block of 3 slots cannot hold a fourth item without changing its storage.",
  "codeInsight": "A fixed-size array reserves a set number of slots; dynamic storage can be resized by allocating and copying.",
  "originalCodeInsight": "Dynamic allocation creates storage at runtime; every pointer assignment changes how nodes or arrays are connected.",
  "realLifeExample": "A fixed block of 3 slots cannot hold a fourth item without changing its storage.",
  "whenToUse": "A fixed-size array reserves a set number of slots; dynamic storage can be resized by allocating and copying.",
  "memoryTrick": "A fixed-size array reserves a set number of slots; dynamic storage can be resized by allocating and copying.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "A fixed-size array reserves a set number of slots; dynamic storage can be resized by allocating and copying."
    },
    {
      "title": "Work through a small case",
      "text": "A fixed block of 3 slots cannot hold a fourth item without changing its storage."
    },
    {
      "title": "Check the boundary cases",
      "text": "Keep positions and values separate. Check whether the right boundary is included before changing an index."
    }
  ],
  "variables": [
    {
      "name": "values",
      "purpose": "Keeps a sequence of sample or working values for the following operations."
    },
    {
      "name": "sum",
      "purpose": "Combines input items into one accumulated answer, so the result can be returned or reused."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "A fixed-size array reserves a set number of slots; dynamic storage can be resized by allocating and copying.",
      "activeLine": 2,
      "codeInsight": "A fixed-size array reserves a set number of slots; dynamic storage can be resized by allocating and copying."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "A fixed block of 3 slots cannot hold a fourth item without changing its storage.",
      "activeLine": 5,
      "codeInsight": "A fixed-size array reserves a set number of slots; dynamic storage can be resized by allocating and copying."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying Static Array And Dynamic Array?",
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
      "id": "linear-search",
      "title": "Linear Search",
      "label": "Start with indexed array values"
    }
  ],
  "runnerInput": [],
  "categorySlug": "data-structures",
  "algorithmSlug": "array-representation-static-array-and-dynamic-array",
  "animation": {
    "type": "array-flow",
    "title": "Static Array And Dynamic Array array state",
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
        "ruleLabel": "Static Array And Dynamic Array invariant",
        "rule": "Defines arrayRepresentationStaticArrayAndDynamicArray as the runnable entry point for this lesson.",
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
        "ruleLabel": "Static Array And Dynamic Array invariant",
        "rule": "Computes sum by reducing the current values, matching the aggregate shown in the result state.",
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
        "ruleLabel": "Static Array And Dynamic Array invariant",
        "rule": "Returns the final state object { structure: \"array\", values, length: values.length, max: Math.max(...values), sum }, exposing the exact fields the visualizer has been tracking.",
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
        "ruleLabel": "Static Array And Dynamic Array invariant",
        "rule": "Returns the final state object { structure: \"array\", values, length: values.length, max: Math.max(...values), sum }, exposing the exact fields the visualizer has been tracking.",
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
  },
  "learningGuide": {
    "mentalModel": "An array is a row of numbered slots. An index tells you where a value is; it is not the value itself.",
    "family": "Arrays and indexes",
    "example": "A fixed block of 3 slots cannot hold a fourth item without changing its storage.",
    "sampleInput": [],
    "sampleResult": {
      "structure": "array",
      "values": [
        3,
        1,
        4,
        1,
        5
      ],
      "length": 5,
      "max": 5,
      "sum": 14
    },
    "sampleScope": "This runnable JavaScript companion illustrates the data structure. Its returned snapshot may cover fewer operations than the C/C++ reference. The topic example above explains the named operation.",
    "terms": [
      [
        "Index",
        "A position in a sequence, usually starting at 0."
      ],
      [
        "Boundary",
        "The first or last position still being considered."
      ],
      [
        "Invariant",
        "A rule that remains true after each step."
      ]
    ],
    "pitfall": "Keep positions and values separate. Check whether the right boundary is included before changing an index.",
    "checkpoint": "Explain this in your own words: A fixed-size array reserves a set number of slots; dynamic storage can be resized by allocating and copying."
  }
};
