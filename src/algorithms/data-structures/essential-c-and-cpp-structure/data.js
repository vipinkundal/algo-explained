// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-essential-c-and-cpp-structure",
  "title": "C/C++ Structure",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "C/C++ Essentials",
  "sourceFolder": "01_Essential_c_and_cpp",
  "sourceFile": "02_structure.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/essential-c-and-cpp-structure",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "cpp-memory-model",
  "icon": "data_object",
  "codePath": "./src/algorithms/data-structures/essential-c-and-cpp-structure/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/essential-c-and-cpp-structure/code/original.cpp",
  "originalCodeFilename": "02_structure.cpp",
  "originalActiveLine": 3,
  "meaning": "A structure groups named fields into one record.",
  "problem": "A structure groups named fields into one record.",
  "concept": "A structure groups named fields into one record.",
  "logicSummary": "A structure groups named fields into one record.",
  "transitionSummary": "A Rectangle record with length 3 and width 4 keeps both measurements together.",
  "codeInsight": "A structure groups named fields into one record.",
  "originalCodeInsight": "The loop is the transition: it repeatedly visits elements or nodes and updates the structure state.",
  "realLifeExample": "A Rectangle record with length 3 and width 4 keeps both measurements together.",
  "whenToUse": "A structure groups named fields into one record.",
  "memoryTrick": "A structure groups named fields into one record.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "A structure groups named fields into one record."
    },
    {
      "title": "Work through a small case",
      "text": "A Rectangle record with length 3 and width 4 keeps both measurements together."
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
      "note": "A structure groups named fields into one record.",
      "activeLine": 2,
      "codeInsight": "A structure groups named fields into one record."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "A Rectangle record with length 3 and width 4 keeps both measurements together.",
      "activeLine": 3,
      "codeInsight": "A structure groups named fields into one record."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying C/C++ Structure?",
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
  "algorithmSlug": "essential-c-and-cpp-structure",
  "animation": {
    "type": "state-flow",
    "title": "C/C++ Structure state transitions",
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
        "ruleLabel": "C/C++ Structure invariant",
        "rule": "Defines essentialCAndCppStructure as the runnable entry point for this lesson.",
        "activeState": 0
      },
      {
        "phase": "Storage",
        "title": "Track address or copy",
        "note": "Passing by value, pointer, or reference controls what can change.",
        "ruleLabel": "C/C++ Structure invariant",
        "rule": "Sets the returned topic field to \"C/C++ Structure\", which is one of the named values rendered in the visual summary.",
        "activeState": 1
      },
      {
        "phase": "C/C++ rule",
        "title": "Apply C/C++ rule",
        "note": "Assignment, dereference, member access, or method call changes the state.",
        "ruleLabel": "C/C++ Structure invariant",
        "rule": "Returns the final state object {, exposing the exact fields the visualizer has been tracking.",
        "activeState": 2
      },
      {
        "phase": "Result",
        "title": "Read final value",
        "note": "The visible output follows from the memory model.",
        "ruleLabel": "C/C++ Structure invariant",
        "rule": "Returns the final state object {, exposing the exact fields the visualizer has been tracking.",
        "activeState": 3
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "C/C++ separates a value from the memory that stores it. Pointers and references explain how a function can access an existing object.",
    "family": "Storage and ownership",
    "example": "A Rectangle record with length 3 and width 4 keeps both measurements together.",
    "sampleInput": [],
    "sampleResult": {
      "topic": "C/C++ Structure",
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
    "checkpoint": "Explain this in your own words: A structure groups named fields into one record."
  }
};
