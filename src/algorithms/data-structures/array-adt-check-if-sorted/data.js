// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-array-adt-check-if-sorted",
  "title": "Check Sorted Array",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Arrays / Array ADT",
  "sourceFolder": "05_Array_ADT",
  "sourceFile": "06_02_check_if_soted.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/array-adt-check-if-sorted",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "array-adt",
  "icon": "view_week",
  "codePath": "./src/algorithms/data-structures/array-adt-check-if-sorted/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/array-adt-check-if-sorted/code/original.cpp",
  "originalCodeFilename": "06_02_check_if_soted.cpp",
  "originalActiveLine": 3,
  "meaning": "Check adjacent values to determine whether an array is in non-decreasing order.",
  "problem": "Check adjacent values to determine whether an array is in non-decreasing order.",
  "concept": "Check adjacent values to determine whether an array is in non-decreasing order.",
  "logicSummary": "Check adjacent values to determine whether an array is in non-decreasing order.",
  "transitionSummary": "[1, 3, 3] is sorted; [1, 4, 2] fails at 4 > 2.",
  "codeInsight": "Check adjacent values to determine whether an array is in non-decreasing order.",
  "originalCodeInsight": "The loop is the transition: it repeatedly visits elements or nodes and updates the structure state.",
  "realLifeExample": "[1, 3, 3] is sorted; [1, 4, 2] fails at 4 > 2.",
  "whenToUse": "Check adjacent values to determine whether an array is in non-decreasing order.",
  "memoryTrick": "Check adjacent values to determine whether an array is in non-decreasing order.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Check adjacent values to determine whether an array is in non-decreasing order."
    },
    {
      "title": "Work through a small case",
      "text": "[1, 3, 3] is sorted; [1, 4, 2] fails at 4 > 2."
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
      "note": "Check adjacent values to determine whether an array is in non-decreasing order.",
      "activeLine": 2,
      "codeInsight": "Check adjacent values to determine whether an array is in non-decreasing order."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "[1, 3, 3] is sorted; [1, 4, 2] fails at 4 > 2.",
      "activeLine": 5,
      "codeInsight": "Check adjacent values to determine whether an array is in non-decreasing order."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying Check Sorted Array?",
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
  "algorithmSlug": "array-adt-check-if-sorted",
  "animation": {
    "type": "array-flow",
    "title": "Check Sorted Array array state",
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
        "ruleLabel": "Check Sorted Array invariant",
        "rule": "Defines arrayAdtCheckIfSorted as the runnable entry point for this lesson.",
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
        "ruleLabel": "Check Sorted Array invariant",
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
        "ruleLabel": "Check Sorted Array invariant",
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
        "ruleLabel": "Check Sorted Array invariant",
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
    "example": "[1, 3, 3] is sorted; [1, 4, 2] fails at 4 > 2.",
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
    "checkpoint": "Explain this in your own words: Check adjacent values to determine whether an array is in non-decreasing order."
  }
};
