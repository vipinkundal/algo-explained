// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-array-adt-get-set-max-sum",
  "title": "Array ADT Get Set Max Sum",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Arrays / Array ADT",
  "sourceFolder": "05_Array_ADT",
  "sourceFile": "05_get_set_max_sum.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/array-adt-get-set-max-sum",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "array-adt",
  "icon": "view_week",
  "codePath": "./src/algorithms/data-structures/array-adt-get-set-max-sum/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/array-adt-get-set-max-sum/code/original.cpp",
  "originalCodeFilename": "05_get_set_max_sum.cpp",
  "originalActiveLine": 3,
  "meaning": "Array access reads or writes a slot by index; aggregate operations scan values to find a maximum or total.",
  "problem": "Array access reads or writes a slot by index; aggregate operations scan values to find a maximum or total.",
  "concept": "Array access reads or writes a slot by index; aggregate operations scan values to find a maximum or total.",
  "logicSummary": "Array access reads or writes a slot by index; aggregate operations scan values to find a maximum or total.",
  "transitionSummary": "For [2, 4, 6], get(1) is 4, the maximum is 6, and the total is 12.",
  "codeInsight": "Array access reads or writes a slot by index; aggregate operations scan values to find a maximum or total.",
  "originalCodeInsight": "The loop is the transition: it repeatedly visits elements or nodes and updates the structure state.",
  "realLifeExample": "For [2, 4, 6], get(1) is 4, the maximum is 6, and the total is 12.",
  "whenToUse": "Array access reads or writes a slot by index; aggregate operations scan values to find a maximum or total.",
  "memoryTrick": "Array access reads or writes a slot by index; aggregate operations scan values to find a maximum or total.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Array access reads or writes a slot by index; aggregate operations scan values to find a maximum or total."
    },
    {
      "title": "Work through a small case",
      "text": "For [2, 4, 6], get(1) is 4, the maximum is 6, and the total is 12."
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
      "note": "Array access reads or writes a slot by index; aggregate operations scan values to find a maximum or total.",
      "activeLine": 2,
      "codeInsight": "Array access reads or writes a slot by index; aggregate operations scan values to find a maximum or total."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "For [2, 4, 6], get(1) is 4, the maximum is 6, and the total is 12.",
      "activeLine": 5,
      "codeInsight": "Array access reads or writes a slot by index; aggregate operations scan values to find a maximum or total."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying Array ADT Get Set Max Sum?",
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
  "algorithmSlug": "array-adt-get-set-max-sum",
  "animation": {
    "type": "array-flow",
    "title": "Array ADT Get Set Max Sum array state",
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
        "ruleLabel": "Array ADT Get Set Max Sum invariant",
        "rule": "Defines arrayAdtGetSetMaxSum as the runnable entry point for this lesson.",
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
        "ruleLabel": "Array ADT Get Set Max Sum invariant",
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
        "ruleLabel": "Array ADT Get Set Max Sum invariant",
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
        "ruleLabel": "Array ADT Get Set Max Sum invariant",
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
    "example": "For [2, 4, 6], get(1) is 4, the maximum is 6, and the total is 12.",
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
    "checkpoint": "Explain this in your own words: Array access reads or writes a slot by index; aggregate operations scan values to find a maximum or total."
  }
};
