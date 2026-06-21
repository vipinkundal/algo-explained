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
  "meaning": "Binary Tree Queue shows how data is organized, changed, and inspected through a small browser demo with the original C/C++ reference available beside it.",
  "problem": "Binary Tree Queue explains the queue state model and how one focused change updates it.",
  "concept": "Binary Tree Queue is useful when tree structure lets each node decide the next smaller piece of work. Use this when the answer depends on balance invariant.",
  "logicSummary": "Start at the root, maintain balance invariant, rotate or recolor when height/color rules are violated, and return the tree-specific result.",
  "transitionSummary": "Each step focuses on one node and uses balance invariant to decide the next child, rotation, or returned value.",
  "codeInsight": "Use the Runnable JS tab to edit inputs and see browser-safe output. Use the Original C/C++ tab to study the source implementation.",
  "originalCodeInsight": "The C++ class groups data members with operations, so the structure controls how outside code can mutate state.",
  "realLifeExample": "Binary Tree Queue is useful when you need to understand the mechanics behind library-level data structures.",
  "whenToUse": "Use this page when learning Trees / BST / AVL / Heap behavior through state changes instead of memorized code.",
  "memoryTrick": "Binary Tree Queue: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Binary Tree Queue is shown as node-by-node tree state. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Check node",
      "text": "Handle an empty root or finished subtree."
    },
    {
      "title": "Read node state",
      "text": "Inspect balance invariant."
    },
    {
      "title": "Move/combine",
      "text": "rotate or recolor when height/color rules are violated."
    },
    {
      "title": "Return tree result",
      "text": "Return traversal output, path result, or updated tree state."
    }
  ],
  "variables": [
    {
      "name": "front cursor",
      "purpose": "Marks the next value that would leave the queue."
    },
    {
      "name": "rear cursor",
      "purpose": "Marks where the next incoming value is placed."
    },
    {
      "name": "waiting line",
      "purpose": "The ordered queue contents while Binary Tree Queue runs."
    },
    {
      "name": "served item",
      "purpose": "The value removed or inspected by the current queue operation."
    }
  ],
  "dryRun": [
    {
      "label": "Root",
      "title": "Check current node",
      "note": "The code starts by handling missing nodes or the current root.",
      "activeLine": 1,
      "codeInsight": "The code starts by handling missing nodes or the current root."
    },
    {
      "label": "Node state",
      "title": "Read balance invariant",
      "note": "The current node controls the next step.",
      "activeLine": 3,
      "codeInsight": "The current node controls the next step."
    },
    {
      "label": "Child step",
      "title": "Rotate or recolor when height/color rules are violated",
      "note": "The algorithm moves to a child, combines a value, or repairs structure.",
      "activeLine": 6,
      "codeInsight": "The algorithm moves to a child, combines a value, or repairs structure."
    },
    {
      "label": "Tree result",
      "title": "Return result",
      "note": "The final traversal, path, measurement, or tree state is returned.",
      "activeLine": 10,
      "codeInsight": "The final traversal, path, measurement, or tree state is returned."
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
        "rule": "The code starts by handling missing nodes or the current root.",
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
        "rule": "The current node controls the next step.",
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
        "rule": "The algorithm moves to a child, combines a value, or repairs structure.",
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
        "rule": "The final traversal, path, measurement, or tree state is returned.",
        "activeNode": "2",
        "targetNode": "6",
        "replacementNode": "6",
        "mutedNodes": []
      }
    ]
  }
};
