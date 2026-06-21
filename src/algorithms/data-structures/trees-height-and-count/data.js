// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-trees-height-and-count",
  "title": "Binary Tree Height and Node Count",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Trees / BST / AVL / Heap",
  "sourceFolder": "13_Trees",
  "sourceFile": "04_Height_and_count.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/trees-height-and-count",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "tree-structure",
  "icon": "account_tree",
  "codePath": "./src/algorithms/data-structures/trees-height-and-count/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/trees-height-and-count/code/original.cpp",
  "originalCodeFilename": "04_Height_and_count.cpp",
  "originalActiveLine": 7,
  "meaning": "Binary Tree Height and Node Count shows how data is organized, changed, and inspected through a small browser demo with a C/C++ reference available beside it.",
  "problem": "Binary Tree Height and Node Count explains the tree state model and how one focused change updates it.",
  "concept": "Binary Tree Height and Node Count is useful when tree structure lets each node decide the next smaller piece of work. Use this when the answer depends on child height/result.",
  "logicSummary": "Start at the root, maintain child height/result, combine child measurements into the parent answer, and return the tree-specific result.",
  "transitionSummary": "Each step focuses on one node and uses child height/result to decide the next child, rotation, or returned value.",
  "codeInsight": "Use the Runnable JS tab to edit inputs and see browser-safe output. Use the C/C++ Reference tab to study the source implementation.",
  "originalCodeInsight": "The C++ class groups data members with operations, so the structure controls how outside code can mutate state.",
  "realLifeExample": "Binary Tree Height and Node Count is useful when you need to understand the mechanics behind library-level data structures.",
  "whenToUse": "Use this page when learning Trees / BST / AVL / Heap behavior through state changes instead of memorized code.",
  "memoryTrick": "Binary Tree Height and Node Count: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Binary Tree Height and Node Count is shown as node-by-node tree state. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Check node",
      "text": "Handle an empty root or finished subtree."
    },
    {
      "title": "Read node state",
      "text": "Inspect child height/result."
    },
    {
      "title": "Move/combine",
      "text": "combine child measurements into the parent answer."
    },
    {
      "title": "Return tree result",
      "text": "Return traversal output, path result, or updated tree state."
    }
  ],
  "variables": [
    {
      "name": "entry node",
      "purpose": "The node where the traversal or creation step begins."
    },
    {
      "name": "visit queue",
      "purpose": "Holds nodes waiting to be processed."
    },
    {
      "name": "current node",
      "purpose": "The node being handled by Binary Tree Height and Node Count."
    },
    {
      "name": "visit order",
      "purpose": "The visible order produced by the traversal."
    }
  ],
  "dryRun": [
    {
      "label": "Root",
      "title": "Check current node",
      "note": "The code starts by handling missing nodes or the current root.",
      "activeLine": 2,
      "codeInsight": "Defines treesHeightAndCount as the runnable entry point for this lesson."
    },
    {
      "label": "Node state",
      "title": "Read child height/result",
      "note": "The current node controls the next step.",
      "activeLine": 4,
      "codeInsight": "Returns { structure: \"binary tree\", traversal: \"level order\", result: [tree.value, tree.left.value, tree.right.value] }, the value produced after Binary Tree Height and Node Count's state changes are complete."
    },
    {
      "label": "Child step",
      "title": "Combine child measurements into the parent answer",
      "note": "The algorithm moves to a child, combines a value, or repairs structure.",
      "activeLine": 4,
      "codeInsight": "Returns { structure: \"binary tree\", traversal: \"level order\", result: [tree.value, tree.left.value, tree.right.value] }, the value produced after Binary Tree Height and Node Count's state changes are complete."
    },
    {
      "label": "Tree result",
      "title": "Return result",
      "note": "The final traversal, path, measurement, or tree state is returned.",
      "activeLine": 4,
      "codeInsight": "Returns { structure: \"binary tree\", traversal: \"level order\", result: [tree.value, tree.left.value, tree.right.value] }, the value produced after Binary Tree Height and Node Count's state changes are complete."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying Binary Tree Height and Node Count?",
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
    "level-order-traversal",
    "height-depth-of-tree"
  ],
  "relatedLinks": [
    {
      "id": "level-order-traversal",
      "title": "Level Order Traversal",
      "label": "Existing algorithm lesson"
    },
    {
      "id": "height-depth-of-tree",
      "title": "Height / Depth of Tree",
      "label": "Existing algorithm lesson"
    }
  ],
  "runnerInput": [],
  "categorySlug": "data-structures",
  "algorithmSlug": "trees-height-and-count",
  "animation": {
    "type": "tree-operation",
    "title": "Binary Tree Height and Node Count tree state",
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
        "ruleLabel": "Binary Tree Height and Node Count invariant",
        "rule": "Defines treesHeightAndCount as the runnable entry point for this lesson.",
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
        "title": "Read child height/result",
        "note": "The current node controls the next step.",
        "ruleLabel": "Binary Tree Height and Node Count invariant",
        "rule": "Returns { structure: \"binary tree\", traversal: \"level order\", result: [tree.value, tree.left.value, tree.right.value] }, the value produced after Binary Tree Height and Node Count's state changes are complete.",
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
        "title": "Combine child measurements into the parent answer",
        "note": "The algorithm moves to a child, combines a value, or repairs structure.",
        "ruleLabel": "Binary Tree Height and Node Count invariant",
        "rule": "Returns { structure: \"binary tree\", traversal: \"level order\", result: [tree.value, tree.left.value, tree.right.value] }, the value produced after Binary Tree Height and Node Count's state changes are complete.",
        "activeNode": "12",
        "targetNode": "2",
        "replacementNode": "2",
        "mutedNodes": []
      },
      {
        "phase": "Tree result",
        "title": "Return result",
        "note": "The final traversal, path, measurement, or tree state is returned.",
        "ruleLabel": "Binary Tree Height and Node Count invariant",
        "rule": "Returns { structure: \"binary tree\", traversal: \"level order\", result: [tree.value, tree.left.value, tree.right.value] }, the value produced after Binary Tree Height and Node Count's state changes are complete.",
        "activeNode": "2",
        "targetNode": "6",
        "replacementNode": "6",
        "mutedNodes": []
      }
    ]
  }
};
