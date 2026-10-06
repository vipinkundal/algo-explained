// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-essential-c-and-cpp-functions",
  "title": "C/C++ Functions",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "C/C++ Essentials",
  "sourceFolder": "01_Essential_c_and_cpp",
  "sourceFile": "06_functions.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/essential-c-and-cpp-functions",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "cpp-memory-model",
  "icon": "data_object",
  "codePath": "./src/algorithms/data-structures/essential-c-and-cpp-functions/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/essential-c-and-cpp-functions/code/original.cpp",
  "originalCodeFilename": "06_functions.cpp",
  "originalActiveLine": 4,
  "meaning": "A function groups a named computation, receives parameters, and may return a result.",
  "problem": "A function groups a named computation, receives parameters, and may return a result.",
  "concept": "A function groups a named computation, receives parameters, and may return a result.",
  "logicSummary": "A function groups a named computation, receives parameters, and may return a result.",
  "transitionSummary": "area(3, 4) can multiply its two parameters and return 12.",
  "codeInsight": "A function groups a named computation, receives parameters, and may return a result.",
  "originalCodeInsight": "The C/C++ reference C/C++ Functions source shows the C/C++ memory model and operation order used by this lesson.",
  "realLifeExample": "area(3, 4) can multiply its two parameters and return 12.",
  "whenToUse": "A function groups a named computation, receives parameters, and may return a result.",
  "memoryTrick": "A function groups a named computation, receives parameters, and may return a result.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "A function groups a named computation, receives parameters, and may return a result."
    },
    {
      "title": "Work through a small case",
      "text": "area(3, 4) can multiply its two parameters and return 12."
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
      "note": "A function groups a named computation, receives parameters, and may return a result.",
      "activeLine": 2,
      "codeInsight": "A function groups a named computation, receives parameters, and may return a result."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "area(3, 4) can multiply its two parameters and return 12.",
      "activeLine": 3,
      "codeInsight": "A function groups a named computation, receives parameters, and may return a result."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying C/C++ Functions?",
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
  "algorithmSlug": "essential-c-and-cpp-functions",
  "animation": {
    "type": "state-flow",
    "title": "C/C++ Functions state transitions",
    "ruleLabel": "State rule",
    "rule": "Each step changes a value, address, member, or object boundary according to C/C++ memory rules.",
    "states": [
      "Declaration",
      "Storage",
      "C/C++ rule",
      "Result"
    ],
    "steps": [
      {
        "phase": "Declaration",
        "title": "Create program value",
        "note": "The code introduces the variable, pointer, structure, or object.",
        "ruleLabel": "C/C++ Functions invariant",
        "rule": "Defines essentialCAndCppFunctions as the runnable entry point for this lesson.",
        "activeState": 0
      },
      {
        "phase": "Storage",
        "title": "Track address or copy",
        "note": "Passing by value, pointer, or reference controls what can change.",
        "ruleLabel": "C/C++ Functions invariant",
        "rule": "Sets the returned topic field to \"C/C++ Functions\", which is one of the named values rendered in the visual summary.",
        "activeState": 1
      },
      {
        "phase": "C/C++ rule",
        "title": "Apply C/C++ rule",
        "note": "Assignment, dereference, member access, or method call changes the state.",
        "ruleLabel": "C/C++ Functions invariant",
        "rule": "Returns the final state object {, exposing the exact fields the visualizer has been tracking.",
        "activeState": 2
      },
      {
        "phase": "Result",
        "title": "Read final value",
        "note": "The visible output follows from the memory model.",
        "ruleLabel": "C/C++ Functions invariant",
        "rule": "Returns the final state object {, exposing the exact fields the visualizer has been tracking.",
        "activeState": 3
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "C/C++ separates a value from the memory that stores it. Pointers and references explain how a function can access an existing object.",
    "family": "Storage and ownership",
    "example": "area(3, 4) can multiply its two parameters and return 12.",
    "sampleInput": [],
    "sampleResult": {
      "topic": "C/C++ Functions",
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
    "checkpoint": "Explain this in your own words: A function groups a named computation, receives parameters, and may return a result."
  }
};
