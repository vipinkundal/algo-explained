// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this data-structure page without touching app.js.

export const algorithmPage = {
  "id": "ds-array-adt-linear-search",
  "title": "Linear Search in Array ADT",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Arrays / Array ADT",
  "sourceFolder": "05_Array_ADT",
  "sourceFile": "03_01_linear_search.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/array-adt-linear-search",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "array-adt",
  "icon": "view_week",
  "codePath": "./src/algorithms/data-structures/array-adt-linear-search/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/array-adt-linear-search/code/original.cpp",
  "originalCodeFilename": "03_01_linear_search.cpp",
  "originalActiveLine": 3,
  "meaning": "Linear Search in Array ADT shows how data is organized, changed, and inspected through a small browser demo with the original C/C++ reference available beside it.",
  "problem": "Linear Search in Array ADT explains the array state model and how one focused change updates it.",
  "concept": "Data structures are easier to learn when each value has a clear place and every change preserves a rule.",
  "logicSummary": "Track the active state, move, search, insert, remove, or summarize slots, and inspect the updated view.",
  "transitionSummary": "Move one step forward by changing only the slots, links, cursors, or nodes required by this operation.",
  "codeInsight": "Use the Runnable JS tab to edit inputs and see browser-safe output. Use the Original C/C++ tab to study the source implementation.",
  "originalCodeInsight": "The loop is the transition: it repeatedly visits elements or nodes and updates the structure state.",
  "realLifeExample": "Linear Search in Array ADT is useful when you need to understand the mechanics behind library-level data structures.",
  "whenToUse": "Use this page when learning Arrays / Array ADT behavior through state changes instead of memorized code.",
  "memoryTrick": "Name the moving part first, then ask which invariant must still be true.",
  "visualizerCaption": "An array adt walkthrough for Linear Search in Array ADT.",
  "logicSteps": [
    {
      "title": "Map the state",
      "text": "Identify the values Linear Search in Array ADT needs before any operation starts."
    },
    {
      "title": "Set the rule",
      "text": "Name the array invariant that should remain true after the step."
    },
    {
      "title": "Apply one change",
      "text": "Run the next action: move, search, insert, remove, or summarize slots."
    },
    {
      "title": "Read the view",
      "text": "Compare the before and after state to confirm the transition."
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
      "purpose": "Shows the slots after Linear Search in Array ADT applies its operation."
    }
  ],
  "dryRun": [
    {
      "label": "State map",
      "title": "Prepare the working view",
      "note": "Start with the values that Linear Search in Array ADT needs to inspect or change.",
      "activeLine": 1,
      "codeInsight": "The JS companion builds a compact state you can edit safely in the browser.",
      "originalCodeInsight": "The loop is the transition: it repeatedly visits elements or nodes and updates the structure state."
    },
    {
      "label": "Cursor move",
      "title": "Choose the active part",
      "note": "Focus on the slot index before changing anything else.",
      "activeLine": 4,
      "codeInsight": "Keeping the active part explicit makes the output easier to debug.",
      "originalCodeInsight": "Initialization lines define the valid memory shape before mutation begins."
    },
    {
      "label": "State change",
      "title": "Apply the rule",
      "note": "Perform one array update and keep the invariant intact.",
      "activeLine": 7,
      "codeInsight": "This line group performs the browser-safe version of the same data-structure transition.",
      "originalCodeInsight": "The important lines update the pointer, index, child link, cursor, or stored value."
    },
    {
      "label": "Visible result",
      "title": "Inspect the answer",
      "note": "Read the array view after the update.",
      "activeLine": 10,
      "codeInsight": "The return object exposes the updated state so edits have immediate feedback.",
      "originalCodeInsight": "Display, return, or cout lines reveal the observable result."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying Linear Search in Array ADT?",
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
      "id": "array-patterns",
      "title": "Array Patterns",
      "label": "Existing algorithm lesson"
    },
    {
      "id": "linear-search",
      "title": "Linear Search",
      "label": "Existing algorithm lesson"
    }
  ],
  "runnerInput": [],
  "categorySlug": "data-structures",
  "algorithmSlug": "array-adt-linear-search"
};
