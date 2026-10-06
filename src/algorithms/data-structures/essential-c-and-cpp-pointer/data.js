// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-essential-c-and-cpp-pointer",
  "title": "C/C++ Pointer",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "C/C++ Essentials",
  "sourceFolder": "01_Essential_c_and_cpp",
  "sourceFile": "03_pointer.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/essential-c-and-cpp-pointer",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "cpp-memory-model",
  "icon": "data_object",
  "codePath": "./src/algorithms/data-structures/essential-c-and-cpp-pointer/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/essential-c-and-cpp-pointer/code/original.cpp",
  "originalCodeFilename": "03_pointer.cpp",
  "originalActiveLine": 4,
  "meaning": "A pointer stores a memory address; dereferencing it accesses the object at that address.",
  "problem": "A pointer stores a memory address; dereferencing it accesses the object at that address.",
  "concept": "A pointer stores a memory address; dereferencing it accesses the object at that address.",
  "logicSummary": "A pointer stores a memory address; dereferencing it accesses the object at that address.",
  "transitionSummary": "If p = &value, then *p refers to value. Check that the pointer is valid before using it.",
  "codeInsight": "A pointer stores a memory address; dereferencing it accesses the object at that address.",
  "originalCodeInsight": "Dynamic allocation creates storage at runtime; every pointer assignment changes how nodes or arrays are connected.",
  "realLifeExample": "If p = &value, then *p refers to value. Check that the pointer is valid before using it.",
  "whenToUse": "A pointer stores a memory address; dereferencing it accesses the object at that address.",
  "memoryTrick": "A pointer stores a memory address; dereferencing it accesses the object at that address.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "A pointer stores a memory address; dereferencing it accesses the object at that address."
    },
    {
      "title": "Work through a small case",
      "text": "If p = &value, then *p refers to value. Check that the pointer is valid before using it."
    },
    {
      "title": "Check the boundary cases",
      "text": "Do not use a pointer after its object’s lifetime ends. Passing by value copies an object; passing by pointer or reference can access the original."
    }
  ],
  "variables": [
    {
      "name": "return",
      "purpose": "The function returns a value or snapshot. Open the JavaScript source to inspect the fixed sample."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "A pointer stores a memory address; dereferencing it accesses the object at that address.",
      "activeLine": 2,
      "codeInsight": "A pointer stores a memory address; dereferencing it accesses the object at that address."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "If p = &value, then *p refers to value. Check that the pointer is valid before using it.",
      "activeLine": 3,
      "codeInsight": "A pointer stores a memory address; dereferencing it accesses the object at that address."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying C/C++ Pointer?",
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
  "relatedAlgorithmIds": [],
  "relatedLinks": [],
  "runnerInput": [],
  "categorySlug": "data-structures",
  "algorithmSlug": "essential-c-and-cpp-pointer",
  "animation": {
    "type": "array-flow",
    "title": "C/C++ Pointer array state",
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
        "ruleLabel": "C/C++ Pointer invariant",
        "rule": "Defines essentialCAndCppPointer as the runnable entry point for this lesson.",
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
        "ruleLabel": "C/C++ Pointer invariant",
        "rule": "Sets the returned topic field to \"C/C++ Pointer\", which is one of the named values rendered in the visual summary.",
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
        "ruleLabel": "C/C++ Pointer invariant",
        "rule": "Returns the final state object {, exposing the exact fields the visualizer has been tracking.",
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
        "ruleLabel": "C/C++ Pointer invariant",
        "rule": "Returns the final state object {, exposing the exact fields the visualizer has been tracking.",
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
    "example": "If p = &value, then *p refers to value. Check that the pointer is valid before using it.",
    "sampleInput": [],
    "sampleResult": {
      "topic": "C/C++ Pointer",
      "idea": "This runnable JS companion mirrors the state-first C/C++ lesson in browser-safe JavaScript.",
      "state": [
        "input",
        "working memory",
        "result"
      ]
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
    "checkpoint": "Explain this in your own words: A pointer stores a memory address; dereferencing it accesses the object at that address."
  }
};
