// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this data-structure page without touching app.js.

export const algorithmPage = {
  "id": "ds-stack-parenthesis-is-balanced-extended",
  "title": "Balanced Parentheses Extended",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Stack",
  "sourceFolder": "11_Stack",
  "sourceFile": "04_parenthesis_is_balanced_extended.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/stack-parenthesis-is-balanced-extended",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "stack-operations",
  "icon": "layers",
  "codePath": "./src/algorithms/data-structures/stack-parenthesis-is-balanced-extended/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/stack-parenthesis-is-balanced-extended/code/original.cpp",
  "originalCodeFilename": "04_parenthesis_is_balanced_extended.cpp",
  "originalActiveLine": 5,
  "meaning": "Balanced Parentheses Extended shows how data is organized, changed, and inspected through a small browser demo with the original C/C++ reference available beside it.",
  "problem": "Balanced Parentheses Extended explains the stack state model and how one focused change updates it.",
  "concept": "Data structures are easier to learn when each value has a clear place and every change preserves a rule.",
  "logicSummary": "Track the active state, push, pop, or inspect the top item, and inspect the updated view.",
  "transitionSummary": "Move one step forward by changing only the slots, links, cursors, or nodes required by this operation.",
  "codeInsight": "Use the Runnable JS tab to edit inputs and see browser-safe output. Use the Original C/C++ tab to study the source implementation.",
  "originalCodeInsight": "Dynamic allocation creates storage at runtime; every pointer assignment changes how nodes or arrays are connected.",
  "realLifeExample": "Balanced Parentheses Extended is useful when you need to understand the mechanics behind library-level data structures.",
  "whenToUse": "Use this page when learning Stack behavior through state changes instead of memorized code.",
  "memoryTrick": "Name the moving part first, then ask which invariant must still be true.",
  "visualizerCaption": "A stack operations walkthrough for Balanced Parentheses Extended.",
  "logicSteps": [
    {
      "title": "Map the state",
      "text": "Identify the values Balanced Parentheses Extended needs before any operation starts."
    },
    {
      "title": "Set the rule",
      "text": "Name the stack invariant that should remain true after the step."
    },
    {
      "title": "Apply one change",
      "text": "Run the next action: push, pop, or inspect the top item."
    },
    {
      "title": "Read the view",
      "text": "Compare the before and after state to confirm the transition."
    }
  ],
  "variables": [
    {
      "name": "top marker",
      "purpose": "Points at the most recent item in the stack."
    },
    {
      "name": "stack slots",
      "purpose": "The ordered storage used by Balanced Parentheses Extended."
    },
    {
      "name": "popped item",
      "purpose": "The value removed when the top marker moves down."
    },
    {
      "name": "balance flag",
      "purpose": "Shows whether the stack invariant still holds."
    }
  ],
  "dryRun": [
    {
      "label": "State map",
      "title": "Prepare the working view",
      "note": "Start with the values that Balanced Parentheses Extended needs to inspect or change.",
      "activeLine": 1,
      "codeInsight": "The JS companion builds a compact state you can edit safely in the browser.",
      "originalCodeInsight": "Dynamic allocation creates storage at runtime; every pointer assignment changes how nodes or arrays are connected."
    },
    {
      "label": "Cursor move",
      "title": "Choose the active part",
      "note": "Focus on the top marker before changing anything else.",
      "activeLine": 4,
      "codeInsight": "Keeping the active part explicit makes the output easier to debug.",
      "originalCodeInsight": "Initialization lines define the valid memory shape before mutation begins."
    },
    {
      "label": "State change",
      "title": "Apply the rule",
      "note": "Perform one stack update and keep the invariant intact.",
      "activeLine": 7,
      "codeInsight": "This line group performs the browser-safe version of the same data-structure transition.",
      "originalCodeInsight": "The important lines update the pointer, index, child link, cursor, or stored value."
    },
    {
      "label": "Visible result",
      "title": "Inspect the answer",
      "note": "Read the balance flag after the update.",
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
    "question": "What should you identify first when studying Balanced Parentheses Extended?",
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
    "stack-basics",
    "valid-parentheses"
  ],
  "relatedLinks": [
    {
      "id": "stack-basics",
      "title": "Stack Basics",
      "label": "Existing algorithm lesson"
    },
    {
      "id": "valid-parentheses",
      "title": "Valid Parentheses",
      "label": "Existing algorithm lesson"
    }
  ],
  "runnerInput": [],
  "categorySlug": "data-structures",
  "algorithmSlug": "stack-parenthesis-is-balanced-extended"
};
