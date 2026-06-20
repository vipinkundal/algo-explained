// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this data-structure page without touching app.js.

export const algorithmPage = {
  "id": "ds-linked-list-cdoublell",
  "title": "Circular Doubly Linked List",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Linked List",
  "sourceFolder": "09_Linked_list",
  "sourceFile": "19_CDoubleLL.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/linked-list-cdoublell",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "linked-list",
  "icon": "link",
  "codePath": "./src/algorithms/data-structures/linked-list-cdoublell/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/linked-list-cdoublell/code/original.cpp",
  "originalCodeFilename": "19_CDoubleLL.cpp",
  "originalActiveLine": 4,
  "meaning": "Circular Doubly Linked List shows how data is organized, changed, and inspected through a small browser demo with the original C/C++ reference available beside it.",
  "problem": "Circular Doubly Linked List explains the linked-list state model and how one focused change updates it.",
  "concept": "Data structures are easier to learn when each value has a clear place and every change preserves a rule.",
  "logicSummary": "Track the active state, connect, insert, remove, or scan nodes, and inspect the updated view.",
  "transitionSummary": "Move one step forward by changing only the slots, links, cursors, or nodes required by this operation.",
  "codeInsight": "Use the Runnable JS tab to edit inputs and see browser-safe output. Use the Original C/C++ tab to study the source implementation.",
  "originalCodeInsight": "The C++ class groups data members with operations, so the structure controls how outside code can mutate state.",
  "realLifeExample": "Circular Doubly Linked List is useful when you need to understand the mechanics behind library-level data structures.",
  "whenToUse": "Use this page when learning Linked List behavior through state changes instead of memorized code.",
  "memoryTrick": "Name the moving part first, then ask which invariant must still be true.",
  "visualizerCaption": "A linked list walkthrough for Circular Doubly Linked List.",
  "logicSteps": [
    {
      "title": "Map the state",
      "text": "Identify the values Circular Doubly Linked List needs before any operation starts."
    },
    {
      "title": "Set the rule",
      "text": "Name the linked-list invariant that should remain true after the step."
    },
    {
      "title": "Apply one change",
      "text": "Run the next action: connect, insert, remove, or scan nodes."
    },
    {
      "title": "Read the view",
      "text": "Compare the before and after state to confirm the transition."
    }
  ],
  "variables": [
    {
      "name": "head link",
      "purpose": "References the first node in the chain."
    },
    {
      "name": "walk pointer",
      "purpose": "Moves through links one node at a time."
    },
    {
      "name": "new node",
      "purpose": "Represents the node created or examined in Circular Doubly Linked List."
    },
    {
      "name": "chain view",
      "purpose": "Shows the visible node order after pointer updates."
    }
  ],
  "dryRun": [
    {
      "label": "State map",
      "title": "Prepare the working view",
      "note": "Start with the values that Circular Doubly Linked List needs to inspect or change.",
      "activeLine": 1,
      "codeInsight": "The JS companion builds a compact state you can edit safely in the browser.",
      "originalCodeInsight": "The C++ class groups data members with operations, so the structure controls how outside code can mutate state."
    },
    {
      "label": "Cursor move",
      "title": "Choose the active part",
      "note": "Focus on the head link before changing anything else.",
      "activeLine": 4,
      "codeInsight": "Keeping the active part explicit makes the output easier to debug.",
      "originalCodeInsight": "Initialization lines define the valid memory shape before mutation begins."
    },
    {
      "label": "State change",
      "title": "Apply the rule",
      "note": "Perform one linked-list update and keep the invariant intact.",
      "activeLine": 7,
      "codeInsight": "This line group performs the browser-safe version of the same data-structure transition.",
      "originalCodeInsight": "The important lines update the pointer, index, child link, cursor, or stored value."
    },
    {
      "label": "Visible result",
      "title": "Inspect the answer",
      "note": "Read the chain view after the update.",
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
    "question": "What should you identify first when studying Circular Doubly Linked List?",
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
  "algorithmSlug": "linked-list-cdoublell"
};
