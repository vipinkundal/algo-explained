// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-linked-list-reverse-linked-list",
  "title": "Reverse Linked List",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Linked List",
  "sourceFolder": "09_Linked_list",
  "sourceFile": "11_Reverse_Linked_list.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/linked-list-reverse-linked-list",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "linked-list",
  "icon": "link",
  "codePath": "./src/algorithms/data-structures/linked-list-reverse-linked-list/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/linked-list-reverse-linked-list/code/original.cpp",
  "originalCodeFilename": "11_Reverse_Linked_list.cpp",
  "originalActiveLine": 5,
  "meaning": "Reverse a linked list by redirecting each next link toward the previous node.",
  "problem": "Reverse a linked list by redirecting each next link toward the previous node.",
  "concept": "Reverse a linked list by redirecting each next link toward the previous node.",
  "logicSummary": "Reverse a linked list by redirecting each next link toward the previous node.",
  "transitionSummary": "A → B → C → null becomes C → B → A → null; retain the next node before changing a link.",
  "codeInsight": "Reverse a linked list by redirecting each next link toward the previous node.",
  "originalCodeInsight": "The C/C++ Node struct is the memory layout: data stores the value and next/child pointers connect the structure.",
  "realLifeExample": "A → B → C → null becomes C → B → A → null; retain the next node before changing a link.",
  "whenToUse": "Reverse a linked list by redirecting each next link toward the previous node.",
  "memoryTrick": "Reverse a linked list by redirecting each next link toward the previous node.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Reverse a linked list by redirecting each next link toward the previous node."
    },
    {
      "title": "Work through a small case",
      "text": "A → B → C → null becomes C → B → A → null; retain the next node before changing a link."
    },
    {
      "title": "Check the boundary cases",
      "text": "Save the next link before changing it. Handle an empty list and a change to the head; circular lists need a different stop rule."
    }
  ],
  "variables": [
    {
      "name": "nodes",
      "purpose": "Remembers how many items are present; this supports bounds, size reporting, or the stopping rule."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "Reverse a linked list by redirecting each next link toward the previous node.",
      "activeLine": 2,
      "codeInsight": "Reverse a linked list by redirecting each next link toward the previous node."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "A → B → C → null becomes C → B → A → null; retain the next node before changing a link.",
      "activeLine": 5,
      "codeInsight": "Reverse a linked list by redirecting each next link toward the previous node."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying Reverse Linked List?",
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
  "algorithmSlug": "linked-list-reverse-linked-list",
  "animation": {
    "type": "linked-list-flow",
    "title": "Reverse Linked List pointer state",
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
        "ruleLabel": "Reverse Linked List invariant",
        "rule": "Defines linkedListReverseLinkedList as the runnable entry point for this lesson.",
        "activeNode": "head",
        "previousNode": "head",
        "nextNode": "n2"
      },
      {
        "phase": "Node links",
        "title": "Inspect linked list",
        "note": "The active state must still satisfy node-link structure.",
        "ruleLabel": "Reverse Linked List invariant",
        "rule": "Stores nodes from the current length, making the loop boundary explicit for the visual trace.",
        "activeNode": "n2",
        "previousNode": "head",
        "nextNode": "n3"
      },
      {
        "phase": "Pointer update",
        "title": "Move pointers without losing the rest of the chain",
        "note": "Only the necessary linked list fields are changed.",
        "ruleLabel": "Reverse Linked List invariant",
        "rule": "Returns the final state object { structure: \"linked list\", operation: \"insert at position 1\", values: nodes.map((node) => node.value) }, exposing the exact fields the visualizer has been tracking.",
        "activeNode": "n3",
        "previousNode": "n2",
        "nextNode": "tail"
      },
      {
        "phase": "Result",
        "title": "Return visible result",
        "note": "The return value or printed state confirms the operation.",
        "ruleLabel": "Reverse Linked List invariant",
        "rule": "Returns the final state object { structure: \"linked list\", operation: \"insert at position 1\", values: nodes.map((node) => node.value) }, exposing the exact fields the visualizer has been tracking.",
        "activeNode": "tail",
        "previousNode": "n3",
        "nextNode": "tail"
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "A linked list follows arrows from node to node. Unlike an array, its nodes do not need neighboring memory slots.",
    "family": "Linked nodes",
    "example": "A → B → C → null becomes C → B → A → null; retain the next node before changing a link.",
    "sampleInput": [],
    "sampleResult": {
      "structure": "linked list",
      "operation": "insert at position 1",
      "values": [
        10,
        15,
        20,
        30
      ]
    },
    "sampleScope": "This runnable JavaScript companion illustrates the data structure. Its returned snapshot may cover fewer operations than the C/C++ reference. The topic example above explains the named operation.",
    "terms": [
      [
        "Head",
        "The first node in a list."
      ],
      [
        "Next",
        "The link leading to another node."
      ],
      [
        "Null",
        "No object or next node is present."
      ]
    ],
    "pitfall": "Save the next link before changing it. Handle an empty list and a change to the head; circular lists need a different stop rule.",
    "checkpoint": "Explain this in your own words: Reverse a linked list by redirecting each next link toward the previous node."
  }
};
