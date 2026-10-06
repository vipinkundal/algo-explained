// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-trees-queue",
  "title": "Binary Tree Queue",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Trees / BST / AVL / Heap",
  "sourceFolder": "13_Trees",
  "sourceFile": "Queue.h",
  "sourceLanguage": "header",
  "route": "/algorithms/data-structures/trees-queue",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "tree-structure",
  "icon": "account_tree",
  "codePath": "./src/algorithms/data-structures/trees-queue/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/trees-queue/code/original.h",
  "originalCodeFilename": "Queue.h",
  "originalActiveLine": 1,
  "meaning": "A queue remembers tree nodes waiting to be visited in level order.",
  "problem": "A queue remembers tree nodes waiting to be visited in level order.",
  "concept": "A queue remembers tree nodes waiting to be visited in level order.",
  "logicSummary": "A queue remembers tree nodes waiting to be visited in level order.",
  "transitionSummary": "After processing root 4, enqueue children 2 and 6 so they are visited before their children.",
  "codeInsight": "A queue remembers tree nodes waiting to be visited in level order.",
  "originalCodeInsight": "The C++ class groups data members with operations, so the structure controls how outside code can mutate state.",
  "realLifeExample": "After processing root 4, enqueue children 2 and 6 so they are visited before their children.",
  "whenToUse": "A queue remembers tree nodes waiting to be visited in level order.",
  "memoryTrick": "A queue remembers tree nodes waiting to be visited in level order.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "A queue remembers tree nodes waiting to be visited in level order."
    },
    {
      "title": "Work through a small case",
      "text": "After processing root 4, enqueue children 2 and 6 so they are visited before their children."
    },
    {
      "title": "Check the boundary cases",
      "text": "Do not assume a tree is a binary search tree or balanced unless the problem guarantees it."
    }
  ],
  "variables": [
    {
      "name": "queue",
      "purpose": "Keeps a sequence of sample or working values for the following operations."
    },
    {
      "name": "output",
      "purpose": "Keeps a sequence of sample or working values for the following operations."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "A queue remembers tree nodes waiting to be visited in level order.",
      "activeLine": 2,
      "codeInsight": "A queue remembers tree nodes waiting to be visited in level order."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "After processing root 4, enqueue children 2 and 6 so they are visited before their children.",
      "activeLine": 7,
      "codeInsight": "A queue remembers tree nodes waiting to be visited in level order."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying Binary Tree Queue?",
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
    "queue-basics",
    "level-order-traversal"
  ],
  "relatedLinks": [
    {
      "id": "queue-basics",
      "title": "Queue Basics",
      "label": "Existing algorithm lesson"
    },
    {
      "id": "level-order-traversal",
      "title": "Level Order Traversal",
      "label": "Existing algorithm lesson"
    }
  ],
  "runnerInput": [],
  "categorySlug": "data-structures",
  "algorithmSlug": "trees-queue",
  "animation": {
    "type": "tree-operation",
    "title": "Binary Tree Queue tree state",
    "nodes": [
      {
        "id": "8",
        "label": "8",
        "x": 340,
        "y": 58
      },
      {
        "id": "4",
        "label": "4",
        "x": 190,
        "y": 150
      },
      {
        "id": "12",
        "label": "12",
        "x": 490,
        "y": 150
      },
      {
        "id": "2",
        "label": "2",
        "x": 110,
        "y": 255
      },
      {
        "id": "6",
        "label": "6",
        "x": 270,
        "y": 255
      },
      {
        "id": "10",
        "label": "10",
        "x": 420,
        "y": 255
      },
      {
        "id": "14",
        "label": "14",
        "x": 570,
        "y": 255
      }
    ],
    "edges": [
      {
        "from": "8",
        "to": "4"
      },
      {
        "from": "8",
        "to": "12"
      },
      {
        "from": "4",
        "to": "2"
      },
      {
        "from": "4",
        "to": "6"
      },
      {
        "from": "12",
        "to": "10"
      },
      {
        "from": "12",
        "to": "14"
      }
    ],
    "steps": [
      {
        "phase": "Root",
        "title": "Check current node",
        "note": "The code starts by handling missing nodes or the current root.",
        "ruleLabel": "Binary Tree Queue invariant",
        "rule": "Defines treesQueue as the runnable entry point for this lesson.",
        "activeNode": "8",
        "targetNode": "4",
        "replacementNode": "",
        "mutedNodes": [
          "6",
          "10",
          "14"
        ]
      },
      {
        "phase": "Node state",
        "title": "Read balance invariant",
        "note": "The current node controls the next step.",
        "ruleLabel": "Binary Tree Queue invariant",
        "rule": "Seeds queue with the sample values shown in the visualizer, giving the trace concrete cells to inspect.",
        "activeNode": "4",
        "targetNode": "12",
        "replacementNode": "",
        "mutedNodes": [
          "6",
          "10",
          "14"
        ]
      },
      {
        "phase": "Child step",
        "title": "Rotate or recolor when height/color rules are violated",
        "note": "The algorithm moves to a child, combines a value, or repairs structure.",
        "ruleLabel": "Binary Tree Queue invariant",
        "rule": "Adds the current value to output, keeping it available for later comparisons or traversal.",
        "activeNode": "12",
        "targetNode": "2",
        "replacementNode": "2",
        "mutedNodes": []
      },
      {
        "phase": "Tree result",
        "title": "Return result",
        "note": "The final traversal, path, measurement, or tree state is returned.",
        "ruleLabel": "Binary Tree Queue invariant",
        "rule": "Returns the final state object { structure: \"queue\", invariant: \"first in, first out\", state: queue, dequeued: output }, exposing the exact fields the visualizer has been tracking.",
        "activeNode": "2",
        "targetNode": "6",
        "replacementNode": "6",
        "mutedNodes": []
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "A tree branches from a root. A child is one level below its parent; a leaf has no children.",
    "family": "Trees and links",
    "example": "After processing root 4, enqueue children 2 and 6 so they are visited before their children.",
    "sampleInput": [],
    "sampleResult": {
      "structure": "queue",
      "invariant": "first in, first out",
      "state": [
        2,
        3,
        4
      ],
      "dequeued": [
        1
      ]
    },
    "sampleScope": "This runnable JavaScript companion illustrates the data structure. Its returned snapshot may cover fewer operations than the C/C++ reference. The topic example above explains the named operation.",
    "terms": [
      [
        "Root",
        "The starting node of a tree."
      ],
      [
        "Subtree",
        "A node together with all of its descendants."
      ],
      [
        "Height",
        "The longest downward path; check whether the code counts nodes or edges."
      ]
    ],
    "pitfall": "Do not assume a tree is a binary search tree or balanced unless the problem guarantees it.",
    "checkpoint": "Explain this in your own words: A queue remembers tree nodes waiting to be visited in level order."
  }
};
