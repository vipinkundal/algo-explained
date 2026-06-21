// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-linked-list-remove-duplicate-data",
  "title": "Linked List Remove Duplicate Data",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Linked List",
  "sourceFolder": "09_Linked_list",
  "sourceFile": "10_REmove_duplicate_data.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/linked-list-remove-duplicate-data",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "linked-list",
  "icon": "link",
  "codePath": "./src/algorithms/data-structures/linked-list-remove-duplicate-data/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/linked-list-remove-duplicate-data/code/original.cpp",
  "originalCodeFilename": "10_REmove_duplicate_data.cpp",
  "originalActiveLine": 5,
  "meaning": "Linked List Remove Duplicate Data shows how data is organized, changed, and inspected through a small browser demo with a C/C++ reference available beside it.",
  "problem": "Linked List Remove Duplicate Data explains the linked-list state model and how one focused change updates it.",
  "concept": "Linked List Remove Duplicate Data is useful when linked list behavior is the clearest model for the data changes. Use this when the problem is naturally described by node-link structure.",
  "logicSummary": "Read the next value or operation, maintain node-link structure, then move pointers without losing the rest of the chain.",
  "transitionSummary": "Each step changes only the part of the linked list required to preserve the invariant.",
  "codeInsight": "Use the Runnable JS tab to edit inputs and see browser-safe output. Use the C/C++ Reference tab to study the source implementation.",
  "originalCodeInsight": "The C/C++ Node struct is the memory layout: data stores the value and next/child pointers connect the structure.",
  "realLifeExample": "Linked List Remove Duplicate Data is useful when you need to understand the mechanics behind library-level data structures.",
  "whenToUse": "Use this page when learning Linked List behavior through state changes instead of memorized code.",
  "memoryTrick": "Linked List Remove Duplicate Data: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Linked List Remove Duplicate Data is shown as linked list state changes. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Read linked list",
      "text": "Identify the next command, value, node, or library call."
    },
    {
      "title": "Inspect node links",
      "text": "Look at the active linked list fields."
    },
    {
      "title": "Pointer update",
      "text": "move pointers without losing the rest of the chain."
    },
    {
      "title": "Read result",
      "text": "Return the emitted value or updated structure."
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
      "purpose": "Represents the node created or examined in Linked List Remove Duplicate Data."
    },
    {
      "name": "chain view",
      "purpose": "Shows the visible node order after pointer updates."
    }
  ],
  "dryRun": [
    {
      "label": "Linked List",
      "title": "Read linked list action",
      "note": "The code receives the next value or command.",
      "activeLine": 3,
      "codeInsight": "Initializes nodes, the local state that the next highlighted lines will update."
    },
    {
      "label": "Node links",
      "title": "Inspect linked list",
      "note": "The active state must still satisfy node-link structure.",
      "activeLine": 3,
      "codeInsight": "Initializes nodes, the local state that the next highlighted lines will update."
    },
    {
      "label": "Pointer update",
      "title": "Move pointers without losing the rest of the chain",
      "note": "Only the necessary linked list fields are changed.",
      "activeLine": 5,
      "codeInsight": "Returns { structure: \"linked list\", operation: \"insert at position 1\", values: nodes.map((node) => node.value) }, the value produced after Linked List Remove Duplicate Data's state changes are complete."
    },
    {
      "label": "Result",
      "title": "Return visible result",
      "note": "The return value or printed state confirms the operation.",
      "activeLine": 5,
      "codeInsight": "Returns { structure: \"linked list\", operation: \"insert at position 1\", values: nodes.map((node) => node.value) }, the value produced after Linked List Remove Duplicate Data's state changes are complete."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying Linked List Remove Duplicate Data?",
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
  "algorithmSlug": "linked-list-remove-duplicate-data",
  "animation": {
    "type": "linked-list-flow",
    "title": "Linked List Remove Duplicate Data pointer state",
    "ruleLabel": "Pointer rule",
    "rule": "Each step changes only the part of the linked list required to preserve the invariant.",
    "nodes": [
      {
        "id": "head",
        "label": "head",
        "role": "head"
      },
      {
        "id": "n2",
        "label": "12",
        "role": "node 2"
      },
      {
        "id": "n3",
        "label": "18",
        "role": "node 3"
      },
      {
        "id": "tail",
        "label": "tail",
        "role": "tail"
      }
    ],
    "steps": [
      {
        "phase": "Linked List",
        "title": "Read linked list action",
        "note": "The code receives the next value or command.",
        "ruleLabel": "Linked List Remove Duplicate Data invariant",
        "rule": "Initializes nodes, the local state that the next highlighted lines will update.",
        "activeNode": "head",
        "previousNode": "head",
        "nextNode": "n2"
      },
      {
        "phase": "Node links",
        "title": "Inspect linked list",
        "note": "The active state must still satisfy node-link structure.",
        "ruleLabel": "Linked List Remove Duplicate Data invariant",
        "rule": "Initializes nodes, the local state that the next highlighted lines will update.",
        "activeNode": "n2",
        "previousNode": "head",
        "nextNode": "n3"
      },
      {
        "phase": "Pointer update",
        "title": "Move pointers without losing the rest of the chain",
        "note": "Only the necessary linked list fields are changed.",
        "ruleLabel": "Linked List Remove Duplicate Data invariant",
        "rule": "Returns { structure: \"linked list\", operation: \"insert at position 1\", values: nodes.map((node) => node.value) }, the value produced after Linked List Remove Duplicate Data's state changes are complete.",
        "activeNode": "n3",
        "previousNode": "n2",
        "nextNode": "tail"
      },
      {
        "phase": "Result",
        "title": "Return visible result",
        "note": "The return value or printed state confirms the operation.",
        "ruleLabel": "Linked List Remove Duplicate Data invariant",
        "rule": "Returns { structure: \"linked list\", operation: \"insert at position 1\", values: nodes.map((node) => node.value) }, the value produced after Linked List Remove Duplicate Data's state changes are complete.",
        "activeNode": "tail",
        "previousNode": "n3",
        "nextNode": "tail"
      }
    ]
  }
};
