// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-essential-c-and-cpp-array-as-parameter",
  "title": "C/C++ Array As Parameter",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "C/C++ Essentials",
  "sourceFolder": "01_Essential_c_and_cpp",
  "sourceFile": "07_array_as_parameter.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/essential-c-and-cpp-array-as-parameter",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "cpp-memory-model",
  "icon": "data_object",
  "codePath": "./src/algorithms/data-structures/essential-c-and-cpp-array-as-parameter/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/essential-c-and-cpp-array-as-parameter/code/original.cpp",
  "originalCodeFilename": "07_array_as_parameter.cpp",
  "originalActiveLine": 4,
  "meaning": "An array parameter in C/C++ is commonly passed as a pointer to its first element, with its length supplied separately.",
  "problem": "An array parameter in C/C++ is commonly passed as a pointer to its first element, with its length supplied separately.",
  "concept": "An array parameter in C/C++ is commonly passed as a pointer to its first element, with its length supplied separately.",
  "logicSummary": "An array parameter in C/C++ is commonly passed as a pointer to its first element, with its length supplied separately.",
  "transitionSummary": "A function receiving an array of 5 values also needs the length 5 to scan it safely.",
  "codeInsight": "An array parameter in C/C++ is commonly passed as a pointer to its first element, with its length supplied separately.",
  "originalCodeInsight": "Dynamic allocation creates storage at runtime; every pointer assignment changes how nodes or arrays are connected.",
  "realLifeExample": "A function receiving an array of 5 values also needs the length 5 to scan it safely.",
  "whenToUse": "An array parameter in C/C++ is commonly passed as a pointer to its first element, with its length supplied separately.",
  "memoryTrick": "An array parameter in C/C++ is commonly passed as a pointer to its first element, with its length supplied separately.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "An array parameter in C/C++ is commonly passed as a pointer to its first element, with its length supplied separately."
    },
    {
      "title": "Work through a small case",
      "text": "A function receiving an array of 5 values also needs the length 5 to scan it safely."
    },
    {
      "title": "Check the boundary cases",
      "text": "Do not use a pointer after its object’s lifetime ends. Passing by value copies an object; passing by pointer or reference can access the original."
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
      "note": "An array parameter in C/C++ is commonly passed as a pointer to its first element, with its length supplied separately.",
      "activeLine": 2,
      "codeInsight": "An array parameter in C/C++ is commonly passed as a pointer to its first element, with its length supplied separately."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "A function receiving an array of 5 values also needs the length 5 to scan it safely.",
      "activeLine": 5,
      "codeInsight": "An array parameter in C/C++ is commonly passed as a pointer to its first element, with its length supplied separately."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying C/C++ Array As Parameter?",
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
  "algorithmSlug": "essential-c-and-cpp-array-as-parameter",
  "animation": {
    "type": "array-flow",
    "title": "C/C++ Array As Parameter array state",
    "ruleLabel": "Array invariant",
    "rule": "Each step changes a value, address, member, or object boundary according to C/C++ memory rules.",
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
        "phase": "Declaration",
        "title": "Create program value",
        "note": "The code introduces the variable, pointer, structure, or object.",
        "ruleLabel": "C/C++ Array As Parameter invariant",
        "rule": "Defines essentialCAndCppArrayAsParameter as the runnable entry point for this lesson.",
        "activeIndices": [
          0
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          1
        ],
        "primaryLabel": "Declaration",
        "secondaryLabel": "Each step changes a value, address, member, or object boundary according to C/C++ memory rules."
      },
      {
        "phase": "Storage",
        "title": "Track address or copy",
        "note": "Passing by value, pointer, or reference controls what can change.",
        "ruleLabel": "C/C++ Array As Parameter invariant",
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
        "primaryLabel": "Storage",
        "secondaryLabel": "Each step changes a value, address, member, or object boundary according to C/C++ memory rules."
      },
      {
        "phase": "C/C++ rule",
        "title": "Apply C/C++ rule",
        "note": "Assignment, dereference, member access, or method call changes the state.",
        "ruleLabel": "C/C++ Array As Parameter invariant",
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
        "primaryLabel": "C/C++ rule",
        "secondaryLabel": "Each step changes a value, address, member, or object boundary according to C/C++ memory rules."
      },
      {
        "phase": "Result",
        "title": "Read final value",
        "note": "The visible output follows from the memory model.",
        "ruleLabel": "C/C++ Array As Parameter invariant",
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
        "secondaryLabel": "Each step changes a value, address, member, or object boundary according to C/C++ memory rules."
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "C/C++ separates a value from the memory that stores it. Pointers and references explain how a function can access an existing object.",
    "family": "Storage and ownership",
    "example": "A function receiving an array of 5 values also needs the length 5 to scan it safely.",
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
        "Pointer",
        "A value representing a memory address."
      ],
      [
        "Reference",
        "A C++ alias for an existing object."
      ],
      [
        "Lifetime",
        "The interval during which an object exists and may be accessed."
      ]
    ],
    "pitfall": "Do not use a pointer after its object’s lifetime ends. Passing by value copies an object; passing by pointer or reference can access the original.",
    "checkpoint": "Explain this in your own words: An array parameter in C/C++ is commonly passed as a pointer to its first element, with its length supplied separately."
  }
};
