// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-array-adt-set",
  "title": "Array ADT Set",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Arrays / Array ADT",
  "sourceFolder": "05_Array_ADT",
  "sourceFile": "08_set.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/array-adt-set",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "array-adt",
  "icon": "view_week",
  "codePath": "./src/algorithms/data-structures/array-adt-set/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/array-adt-set/code/original.cpp",
  "originalCodeFilename": "08_set.cpp",
  "originalActiveLine": 3,
  "meaning": "Set operations combine collections by membership: union, intersection, and difference.",
  "problem": "Set operations combine collections by membership: union, intersection, and difference.",
  "concept": "Set operations combine collections by membership: union, intersection, and difference.",
  "logicSummary": "Set operations combine collections by membership: union, intersection, and difference.",
  "transitionSummary": "For {1, 2} and {2, 3}, union is {1, 2, 3}, intersection is {2}, and the first set minus the second is {1}.",
  "codeInsight": "Set operations combine collections by membership: union, intersection, and difference.",
  "originalCodeInsight": "The loop is the transition: it repeatedly visits elements or nodes and updates the structure state.",
  "realLifeExample": "For {1, 2} and {2, 3}, union is {1, 2, 3}, intersection is {2}, and the first set minus the second is {1}.",
  "whenToUse": "Set operations combine collections by membership: union, intersection, and difference.",
  "memoryTrick": "Set operations combine collections by membership: union, intersection, and difference.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Set operations combine collections by membership: union, intersection, and difference."
    },
    {
      "title": "Work through a small case",
      "text": "For {1, 2} and {2, 3}, union is {1, 2, 3}, intersection is {2}, and the first set minus the second is {1}."
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
      "note": "Set operations combine collections by membership: union, intersection, and difference.",
      "activeLine": 2,
      "codeInsight": "Set operations combine collections by membership: union, intersection, and difference."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "For {1, 2} and {2, 3}, union is {1, 2, 3}, intersection is {2}, and the first set minus the second is {1}.",
      "activeLine": 5,
      "codeInsight": "Set operations combine collections by membership: union, intersection, and difference."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying Array ADT Set?",
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
  "algorithmSlug": "array-adt-set",
  "animation": {
    "type": "array-flow",
    "title": "Array ADT Set array state",
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
        "ruleLabel": "Array ADT Set invariant",
        "rule": "Defines arrayAdtSet as the runnable entry point for this lesson.",
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
        "ruleLabel": "Array ADT Set invariant",
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
        "ruleLabel": "Array ADT Set invariant",
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
        "ruleLabel": "Array ADT Set invariant",
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
    "example": "For {1, 2} and {2, 3}, union is {1, 2, 3}, intersection is {2}, and the first set minus the second is {1}.",
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
    "checkpoint": "Explain this in your own words: Set operations combine collections by membership: union, intersection, and difference."
  }
};
