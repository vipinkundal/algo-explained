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
  "meaning": "Transposition moves a found item one slot toward the front to speed up some later searches.",
  "problem": "Transposition moves a found item one slot toward the front to speed up some later searches.",
  "concept": "Transposition moves a found item one slot toward the front to speed up some later searches.",
  "logicSummary": "Transposition moves a found item one slot toward the front to speed up some later searches.",
  "transitionSummary": "Find 6 in [8, 3, 6] and swap it with 3 to get [8, 6, 3].",
  "codeInsight": "Transposition moves a found item one slot toward the front to speed up some later searches.",
  "originalCodeInsight": "The C++ class groups data members with operations, so the structure controls how outside code can mutate state.",
  "realLifeExample": "Find 6 in [8, 3, 6] and swap it with 3 to get [8, 6, 3].",
  "whenToUse": "Transposition moves a found item one slot toward the front to speed up some later searches.",
  "memoryTrick": "Transposition moves a found item one slot toward the front to speed up some later searches.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Transposition moves a found item one slot toward the front to speed up some later searches."
    },
    {
      "title": "Work through a small case",
      "text": "Find 6 in [8, 3, 6] and swap it with 3 to get [8, 6, 3]."
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
      "note": "Transposition moves a found item one slot toward the front to speed up some later searches.",
      "activeLine": 2,
      "codeInsight": "Transposition moves a found item one slot toward the front to speed up some later searches."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "Find 6 in [8, 3, 6] and swap it with 3 to get [8, 6, 3].",
      "activeLine": 5,
      "codeInsight": "Transposition moves a found item one slot toward the front to speed up some later searches."
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
      "id": "linear-search",
      "title": "Linear Search",
      "label": "Start with indexed array values"
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
        "rule": "Defines arrayAdtLinearSearchTransposition as the runnable entry point for this lesson.",
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
        "primaryLabel": "Index",
        "secondaryLabel": "Each loop consumes the current item exactly once and advances the index."
      },
      {
        "phase": "Update",
        "title": "Apply comparison or count",
        "note": "The current value changes the running state only if the rule says so.",
        "ruleLabel": "Linear Search in Array ADT with Transposition invariant",
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
        "primaryLabel": "Update",
        "secondaryLabel": "Each loop consumes the current item exactly once and advances the index."
      },
      {
        "phase": "Result",
        "title": "Return scan output",
        "note": "When the scan ends, the tracked result is returned.",
        "ruleLabel": "Linear Search in Array ADT with Transposition invariant",
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
        "secondaryLabel": "Each loop consumes the current item exactly once and advances the index."
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "An array is a row of numbered slots. An index tells you where a value is; it is not the value itself.",
    "family": "Arrays and indexes",
    "example": "Find 6 in [8, 3, 6] and swap it with 3 to get [8, 6, 3].",
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
    "checkpoint": "Explain this in your own words: Transposition moves a found item one slot toward the front to speed up some later searches."
  }
};
