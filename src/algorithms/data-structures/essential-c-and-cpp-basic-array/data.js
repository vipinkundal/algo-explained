// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this data-structure page without touching app.js.

export const algorithmPage = {
  "id": "ds-essential-c-and-cpp-basic-array",
  "title": "C/C++ Basic Array",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "C/C++ Essentials",
  "sourceFolder": "01_Essential_c_and_cpp",
  "sourceFile": "01_basic_array.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/essential-c-and-cpp-basic-array",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "cpp-memory-model",
  "icon": "data_object",
  "codePath": "./src/algorithms/data-structures/essential-c-and-cpp-basic-array/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/essential-c-and-cpp-basic-array/code/original.cpp",
  "originalCodeFilename": "01_basic_array.cpp",
  "originalActiveLine": 3,
  "meaning": "C/C++ Basic Array shows how data is organized, changed, and inspected through a small browser demo with the original C/C++ reference available beside it.",
  "problem": "C/C++ Basic Array explains the array state model and how one focused change updates it.",
  "concept": "C/C++ Basic Array is useful when C/C++ storage, addresses, structures, or object ownership affect the program result. Use this when the lesson depends on stack memory, heap memory, references, pointers, structs, or classes.",
  "logicSummary": "Create the C/C++ value, inspect how it is passed or referenced, apply the operation, and read the final memory-visible result.",
  "transitionSummary": "Each step changes a value, address, member, or object boundary according to C/C++ memory rules.",
  "codeInsight": "Use the Runnable JS tab to edit inputs and see browser-safe output. Use the Original C/C++ tab to study the source implementation.",
  "originalCodeInsight": "The loop is the transition: it repeatedly visits elements or nodes and updates the structure state.",
  "realLifeExample": "C/C++ Basic Array is useful when you need to understand the mechanics behind library-level data structures.",
  "whenToUse": "Use this page when learning C/C++ Essentials behavior through state changes instead of memorized code.",
  "memoryTrick": "C/C++ Basic Array: name the invariant, then trace the exact state change.",
  "visualizerCaption": "C/C++ Basic Array is shown as C/C++ memory and value flow. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Declare value",
      "text": "Create the variable, pointer, structure, or object."
    },
    {
      "title": "Inspect storage",
      "text": "Notice whether the code uses value, address, reference, or member access."
    },
    {
      "title": "Apply operation",
      "text": "Run the function, assignment, dereference, or method call."
    },
    {
      "title": "Read result",
      "text": "Read the changed value, member, pointer target, or object output."
    }
  ],
  "variables": [
    {
      "name": "slot index",
      "purpose": "Selects the current array position."
    },
    {
      "name": "active value",
      "purpose": "The value currently being read or moved."
    },
    {
      "name": "write slot",
      "purpose": "Marks where an updated value is stored."
    },
    {
      "name": "array view",
      "purpose": "Shows the slots after C/C++ Basic Array applies its operation."
    }
  ],
  "dryRun": [
    {
      "label": "Declaration",
      "title": "Create program value",
      "note": "The code introduces the variable, pointer, structure, or object.",
      "activeLine": 1,
      "codeInsight": "The code introduces the variable, pointer, structure, or object."
    },
    {
      "label": "Storage",
      "title": "Track address or copy",
      "note": "Passing by value, pointer, or reference controls what can change.",
      "activeLine": 4,
      "codeInsight": "Passing by value, pointer, or reference controls what can change."
    },
    {
      "label": "C/C++ rule",
      "title": "Apply C/C++ rule",
      "note": "Assignment, dereference, member access, or method call changes the state.",
      "activeLine": 7,
      "codeInsight": "Assignment, dereference, member access, or method call changes the state."
    },
    {
      "label": "Result",
      "title": "Read final value",
      "note": "The visible output follows from the memory model.",
      "activeLine": 10,
      "codeInsight": "The visible output follows from the memory model."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying C/C++ Basic Array?",
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
      "id": "array-patterns",
      "title": "Array Patterns",
      "label": "Existing algorithm lesson"
    }
  ],
  "runnerInput": [],
  "categorySlug": "data-structures",
  "algorithmSlug": "essential-c-and-cpp-basic-array"
};
