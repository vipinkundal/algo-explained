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
  "meaning": "Inserting In Sorted Linked List shows how data is organized, changed, and inspected through a small browser demo with a C/C++ reference available beside it.",
  "problem": "Inserting In Sorted Linked List explains the linked-list state model and how one focused change updates it.",
  "concept": "Inserting In Sorted Linked List is useful when values must be placed into a reliable order before later work can be simple. Use this when the algorithm's ordering invariant and cost fit the input size and stability needs.",
  "logicSummary": "Protect the algorithm's ordering invariant until every value reaches final order.",
  "transitionSummary": "Each step compares or moves values so the unsorted region gets smaller.",
  "codeInsight": "Use the Runnable JS tab to edit inputs and see browser-safe output. Use the C/C++ Reference tab to study the source implementation.",
  "originalCodeInsight": "The C/C++ Node struct is the memory layout: data stores the value and next/child pointers connect the structure.",
  "realLifeExample": "Inserting In Sorted Linked List is useful when you need to understand the mechanics behind library-level data structures.",
  "whenToUse": "Use this page when learning Linked List behavior through state changes instead of memorized code.",
  "memoryTrick": "Inserting In Sorted Linked List: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Inserting In Sorted Linked List is shown as values moving toward sorted order. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Copy values",
      "text": "Work on a mutable array without changing the original input."
    },
    {
      "title": "Choose invariant",
      "text": "Track the sorted or partitioned region."
    },
    {
      "title": "Move values",
      "text": "Perform the comparison, swap, merge, or placement."
    },
    {
      "title": "Return order",
      "text": "Return the fully sorted array."
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
      "purpose": "Represents the node created or examined in Inserting In Sorted Linked List."
    },
    {
      "name": "chain view",
      "purpose": "Shows the visible node order after pointer updates."
    }
  ],
  "dryRun": [
    {
      "label": "Input array",
      "title": "Copy values",
      "note": "The code starts with the values to reorder.",
      "activeLine": 1,
      "codeInsight": "The code starts with the values to reorder."
    },
    {
      "label": "Invariant",
      "title": "Track ordered work",
      "note": "The algorithm marks what part is already safe.",
      "activeLine": 3,
      "codeInsight": "The algorithm marks what part is already safe."
    },
    {
      "label": "Move",
      "title": "Apply ordering step",
      "note": "The current operation reduces disorder.",
      "activeLine": 6,
      "codeInsight": "The current operation reduces disorder."
    },
    {
      "label": "Sorted output",
      "title": "Return final order",
      "note": "The result is returned when no unsorted work remains.",
      "activeLine": 10,
      "codeInsight": "The result is returned when no unsorted work remains."
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
        "rule": "The code starts with the values to reorder.",
        "activeNode": "head",
        "previousNode": "head",
        "nextNode": "n2"
      },
      {
        "phase": "Invariant",
        "title": "Track ordered work",
        "note": "The algorithm marks what part is already safe.",
        "ruleLabel": "Inserting In Sorted Linked List invariant",
        "rule": "The algorithm marks what part is already safe.",
        "activeNode": "n2",
        "previousNode": "head",
        "nextNode": "n3"
      },
      {
        "phase": "Move",
        "title": "Apply ordering step",
        "note": "The current operation reduces disorder.",
        "ruleLabel": "Inserting In Sorted Linked List invariant",
        "rule": "The current operation reduces disorder.",
        "activeNode": "n3",
        "previousNode": "n2",
        "nextNode": "tail"
      },
      {
        "phase": "Sorted output",
        "title": "Return final order",
        "note": "The result is returned when no unsorted work remains.",
        "ruleLabel": "Inserting In Sorted Linked List invariant",
        "rule": "The result is returned when no unsorted work remains.",
        "activeNode": "tail",
        "previousNode": "n3",
        "nextNode": "tail"
      }
    ]
  }
};
