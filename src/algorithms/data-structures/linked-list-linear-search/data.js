// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-linked-list-linear-search",
  "title": "Linked List Linear Search",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Linked List",
  "sourceFolder": "09_Linked_list",
  "sourceFile": "05_linear_search.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/linked-list-linear-search",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "linked-list",
  "icon": "link",
  "codePath": "./src/algorithms/data-structures/linked-list-linear-search/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/linked-list-linear-search/code/original.cpp",
  "originalCodeFilename": "05_linear_search.cpp",
  "originalActiveLine": 5,
  "meaning": "Linked List Linear Search shows how data is organized, changed, and inspected through a small browser demo with a C/C++ reference available beside it.",
  "problem": "Linked List Linear Search explains the linked-list state model and how one focused change updates it.",
  "concept": "Linked List Linear Search is useful when every item may matter and the input has no stronger ordering to exploit. Use this when a simple pass is clearer or cheaper than preprocessing.",
  "logicSummary": "Move one index through the array, update the running state, and stop when the required condition is met.",
  "transitionSummary": "Each loop consumes the current item exactly once and advances the index.",
  "codeInsight": "Use the Runnable JS tab to edit inputs and see browser-safe output. Use the C/C++ Reference tab to study the source implementation.",
  "originalCodeInsight": "The C/C++ Node struct is the memory layout: data stores the value and next/child pointers connect the structure.",
  "realLifeExample": "Linked List Linear Search is useful when you need to understand the mechanics behind library-level data structures.",
  "whenToUse": "Use this page when learning Linked List behavior through state changes instead of memorized code.",
  "memoryTrick": "Linked List Linear Search: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Linked List Linear Search is shown as a left-to-right scan. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Start scan",
      "text": "Set the first index and initial result."
    },
    {
      "title": "Read value",
      "text": "Inspect the current array item."
    },
    {
      "title": "Update state",
      "text": "Change the answer, counter, or candidate."
    },
    {
      "title": "Finish pass",
      "text": "Return the maintained result after the scan."
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
      "purpose": "Represents the node created or examined in Linked List Linear Search."
    },
    {
      "name": "chain view",
      "purpose": "Shows the visible node order after pointer updates."
    }
  ],
  "dryRun": [
    {
      "label": "Input array",
      "title": "Read values",
      "note": "The code receives the list and any target condition.",
      "activeLine": 2,
      "codeInsight": "Defines linkedListLinearSearch as the runnable entry point for this lesson."
    },
    {
      "label": "Index",
      "title": "Select current item",
      "note": "The loop focuses on one position at a time.",
      "activeLine": 3,
      "codeInsight": "Stores nodes from the current length, making the loop boundary explicit for the visual trace."
    },
    {
      "label": "Update",
      "title": "Apply comparison or count",
      "note": "The current value changes the running state only if the rule says so.",
      "activeLine": 5,
      "codeInsight": "Returns the final state object { structure: \"linked list\", operation: \"insert at position 1\", values: nodes.map((node) => node.value) }, exposing the exact fields the visualizer has been tracking."
    },
    {
      "label": "Result",
      "title": "Return scan output",
      "note": "When the scan ends, the tracked result is returned.",
      "activeLine": 5,
      "codeInsight": "Returns the final state object { structure: \"linked list\", operation: \"insert at position 1\", values: nodes.map((node) => node.value) }, exposing the exact fields the visualizer has been tracking."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying Linked List Linear Search?",
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
    "linear-search"
  ],
  "relatedLinks": [
    {
      "id": "linear-search",
      "title": "Linear Search",
      "label": "Existing algorithm lesson"
    }
  ],
  "runnerInput": [],
  "categorySlug": "data-structures",
  "algorithmSlug": "linked-list-linear-search",
  "animation": {
    "type": "linked-list-flow",
    "title": "Linked List Linear Search pointer state",
    "ruleLabel": "Pointer rule",
    "rule": "Each loop consumes the current item exactly once and advances the index.",
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
        "title": "Read values",
        "note": "The code receives the list and any target condition.",
        "ruleLabel": "Linked List Linear Search invariant",
        "rule": "Defines linkedListLinearSearch as the runnable entry point for this lesson.",
        "activeNode": "head",
        "previousNode": "head",
        "nextNode": "n2"
      },
      {
        "phase": "Index",
        "title": "Select current item",
        "note": "The loop focuses on one position at a time.",
        "ruleLabel": "Linked List Linear Search invariant",
        "rule": "Stores nodes from the current length, making the loop boundary explicit for the visual trace.",
        "activeNode": "n2",
        "previousNode": "head",
        "nextNode": "n3"
      },
      {
        "phase": "Update",
        "title": "Apply comparison or count",
        "note": "The current value changes the running state only if the rule says so.",
        "ruleLabel": "Linked List Linear Search invariant",
        "rule": "Returns the final state object { structure: \"linked list\", operation: \"insert at position 1\", values: nodes.map((node) => node.value) }, exposing the exact fields the visualizer has been tracking.",
        "activeNode": "n3",
        "previousNode": "n2",
        "nextNode": "tail"
      },
      {
        "phase": "Result",
        "title": "Return scan output",
        "note": "When the scan ends, the tracked result is returned.",
        "ruleLabel": "Linked List Linear Search invariant",
        "rule": "Returns the final state object { structure: \"linked list\", operation: \"insert at position 1\", values: nodes.map((node) => node.value) }, exposing the exact fields the visualizer has been tracking.",
        "activeNode": "tail",
        "previousNode": "n3",
        "nextNode": "tail"
      }
    ]
  }
};
