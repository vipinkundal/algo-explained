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
  "meaning": "Insert into a sorted array by shifting larger values right before placing the new value.",
  "problem": "Insert into a sorted array by shifting larger values right before placing the new value.",
  "concept": "Insert into a sorted array by shifting larger values right before placing the new value.",
  "logicSummary": "Insert into a sorted array by shifting larger values right before placing the new value.",
  "transitionSummary": "Insert 3 into [1, 4, 7] to obtain [1, 3, 4, 7].",
  "codeInsight": "Insert into a sorted array by shifting larger values right before placing the new value.",
  "originalCodeInsight": "The loop is the transition: it repeatedly visits elements or nodes and updates the structure state.",
  "realLifeExample": "Insert 3 into [1, 4, 7] to obtain [1, 3, 4, 7].",
  "whenToUse": "Insert into a sorted array by shifting larger values right before placing the new value.",
  "memoryTrick": "Insert into a sorted array by shifting larger values right before placing the new value.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Insert into a sorted array by shifting larger values right before placing the new value."
    },
    {
      "title": "Work through a small case",
      "text": "Insert 3 into [1, 4, 7] to obtain [1, 3, 4, 7]."
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
      "note": "Insert into a sorted array by shifting larger values right before placing the new value.",
      "activeLine": 2,
      "codeInsight": "Insert into a sorted array by shifting larger values right before placing the new value."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "Insert 3 into [1, 4, 7] to obtain [1, 3, 4, 7].",
      "activeLine": 5,
      "codeInsight": "Insert into a sorted array by shifting larger values right before placing the new value."
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
      "id": "linear-search",
      "title": "Linear Search",
      "label": "Start with indexed array values"
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
        "rule": "Defines arrayAdtInsertingInSortedArray as the runnable entry point for this lesson.",
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
        "rule": "Seeds values with the sample values shown in the visualizer, giving the trace concrete cells to inspect.",
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
        "primaryLabel": "Move",
        "secondaryLabel": "Each step compares or moves values so the unsorted region gets smaller."
      },
      {
        "phase": "Sorted output",
        "title": "Return final order",
        "note": "The result is returned when no unsorted work remains.",
        "ruleLabel": "Array ADT Inserting In Sorted Array invariant",
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
        "primaryLabel": "Sorted output",
        "secondaryLabel": "Each step compares or moves values so the unsorted region gets smaller."
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "An array is a row of numbered slots. An index tells you where a value is; it is not the value itself.",
    "family": "Arrays and indexes",
    "example": "Insert 3 into [1, 4, 7] to obtain [1, 3, 4, 7].",
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
    "checkpoint": "Explain this in your own words: Insert into a sorted array by shifting larger values right before placing the new value."
  }
};
