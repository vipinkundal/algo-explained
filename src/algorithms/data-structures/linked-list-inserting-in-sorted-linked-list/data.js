// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-linked-list-inserting-in-sorted-linked-list",
  "title": "Inserting In Sorted Linked List",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Linked List",
  "sourceFolder": "09_Linked_list",
  "sourceFile": "07_Inserting_in_sorted_linked_list.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/linked-list-inserting-in-sorted-linked-list",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "linked-list",
  "icon": "link",
  "codePath": "./src/algorithms/data-structures/linked-list-inserting-in-sorted-linked-list/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/linked-list-inserting-in-sorted-linked-list/code/original.cpp",
  "originalCodeFilename": "07_Inserting_in_sorted_linked_list.cpp",
  "originalActiveLine": 5,
  "meaning": "Find the gap where a new value belongs and reconnect the list around a new node.",
  "problem": "Find the gap where a new value belongs and reconnect the list around a new node.",
  "concept": "Find the gap where a new value belongs and reconnect the list around a new node.",
  "logicSummary": "Find the gap where a new value belongs and reconnect the list around a new node.",
  "transitionSummary": "Inserting 3 into 1 → 4 → 7 gives 1 → 3 → 4 → 7.",
  "codeInsight": "Find the gap where a new value belongs and reconnect the list around a new node.",
  "originalCodeInsight": "The C/C++ Node struct is the memory layout: data stores the value and next/child pointers connect the structure.",
  "realLifeExample": "Inserting 3 into 1 → 4 → 7 gives 1 → 3 → 4 → 7.",
  "whenToUse": "Find the gap where a new value belongs and reconnect the list around a new node.",
  "memoryTrick": "Find the gap where a new value belongs and reconnect the list around a new node.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Find the gap where a new value belongs and reconnect the list around a new node."
    },
    {
      "title": "Work through a small case",
      "text": "Inserting 3 into 1 → 4 → 7 gives 1 → 3 → 4 → 7."
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
      "note": "Find the gap where a new value belongs and reconnect the list around a new node.",
      "activeLine": 2,
      "codeInsight": "Find the gap where a new value belongs and reconnect the list around a new node."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "Inserting 3 into 1 → 4 → 7 gives 1 → 3 → 4 → 7.",
      "activeLine": 5,
      "codeInsight": "Find the gap where a new value belongs and reconnect the list around a new node."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying Inserting In Sorted Linked List?",
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
  "algorithmSlug": "linked-list-inserting-in-sorted-linked-list",
  "animation": {
    "type": "linked-list-flow",
    "title": "Inserting In Sorted Linked List pointer state",
    "ruleLabel": "Pointer rule",
    "rule": "Each step compares or moves values so the unsorted region gets smaller.",
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
        "phase": "Input array",
        "title": "Copy values",
        "note": "The code starts with the values to reorder.",
        "ruleLabel": "Inserting In Sorted Linked List invariant",
        "rule": "Defines linkedListInsertingInSortedLinkedList as the runnable entry point for this lesson.",
        "activeNode": "head",
        "previousNode": "head",
        "nextNode": "n2"
      },
      {
        "phase": "Invariant",
        "title": "Track ordered work",
        "note": "The algorithm marks what part is already safe.",
        "ruleLabel": "Inserting In Sorted Linked List invariant",
        "rule": "Stores nodes from the current length, making the loop boundary explicit for the visual trace.",
        "activeNode": "n2",
        "previousNode": "head",
        "nextNode": "n3"
      },
      {
        "phase": "Move",
        "title": "Apply ordering step",
        "note": "The current operation reduces disorder.",
        "ruleLabel": "Inserting In Sorted Linked List invariant",
        "rule": "Returns the final state object { structure: \"linked list\", operation: \"insert at position 1\", values: nodes.map((node) => node.value) }, exposing the exact fields the visualizer has been tracking.",
        "activeNode": "n3",
        "previousNode": "n2",
        "nextNode": "tail"
      },
      {
        "phase": "Sorted output",
        "title": "Return final order",
        "note": "The result is returned when no unsorted work remains.",
        "ruleLabel": "Inserting In Sorted Linked List invariant",
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
    "example": "Inserting 3 into 1 → 4 → 7 gives 1 → 3 → 4 → 7.",
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
    "checkpoint": "Explain this in your own words: Find the gap where a new value belongs and reconnect the list around a new node."
  }
};
