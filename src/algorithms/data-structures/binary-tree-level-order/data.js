// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-binary-tree-level-order",
  "title": "Binary Tree Level Order Traversal",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Trees / BST / AVL / Heap",
  "sourceFolder": "13_Trees",
  "sourceFile": "03_LevelOrder.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/binary-tree-level-order",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "tree-structure",
  "icon": "account_tree",
  "codePath": "./src/algorithms/data-structures/binary-tree-level-order/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/binary-tree-level-order/code/original.cpp",
  "originalCodeFilename": "03_LevelOrder.cpp",
  "originalActiveLine": 7,
  "meaning": "Binary Tree Level Order Traversal shows how data is organized, changed, and inspected through a small browser demo with a C/C++ reference available beside it.",
  "problem": "Binary Tree Level Order Traversal explains the tree state model and how one focused change updates it.",
  "concept": "Level-order traversal is useful when tree nodes must be processed by depth from top to bottom. Use this when closer-to-root nodes must be handled before deeper nodes.",
  "logicSummary": "Start with the root in a queue, visit the front node, append its value, then enqueue children.",
  "transitionSummary": "Each step removes the next queued node and appends its children to the back.",
  "codeInsight": "Use the Runnable JS tab to edit inputs and see browser-safe output. Use the C/C++ Reference tab to study the source implementation.",
  "originalCodeInsight": "The C++ class groups data members with operations, so the structure controls how outside code can mutate state.",
  "realLifeExample": "Binary Tree Level Order Traversal is useful when you need to understand the mechanics behind library-level data structures.",
  "whenToUse": "Use this page when learning Trees / BST / AVL / Heap behavior through state changes instead of memorized code.",
  "memoryTrick": "Binary Tree Level Order Traversal: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Binary Tree Level Order Traversal is shown as breadth-first queue traversal. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Check root",
      "text": "Return an empty result for an empty tree."
    },
    {
      "title": "Seed queue",
      "text": "Put the root in the BFS queue."
    },
    {
      "title": "Visit front",
      "text": "Append the next queued node value."
    },
    {
      "title": "Enqueue children",
      "text": "Push left and right children for the next levels."
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
      "purpose": "The node being handled by Binary Tree Level Order Traversal."
    },
    {
      "name": "visit order",
      "purpose": "The visible order produced by the traversal."
    }
  ],
  "dryRun": [
    {
      "label": "Root",
      "title": "Check for empty tree",
      "note": "If root is missing, there are no levels to visit.",
      "activeLine": 2,
      "codeInsight": "Defines binaryTreeLevelOrder as the runnable entry point for this lesson."
    },
    {
      "label": "Queue",
      "title": "Seed traversal queue",
      "note": "The root becomes the first discovered node.",
      "activeLine": 3,
      "codeInsight": "Builds tree as a structured sample object that the tree, graph, or map visualizer can render directly."
    },
    {
      "label": "Visit",
      "title": "Process queue front",
      "note": "The front node is appended to output.",
      "activeLine": 4,
      "codeInsight": "Returns the final state object { structure: \"binary tree\", traversal: \"level order\", result: [tree.value, tree.left.value, tree.right.value] }, exposing the exact fields the visualizer has been tracking."
    },
    {
      "label": "Children",
      "title": "Discover next level",
      "note": "Children are pushed to the queue for later visits.",
      "activeLine": 4,
      "codeInsight": "Returns the final state object { structure: \"binary tree\", traversal: \"level order\", result: [tree.value, tree.left.value, tree.right.value] }, exposing the exact fields the visualizer has been tracking."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying Binary Tree Level Order Traversal?",
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
    "preorder-traversal",
    "inorder-traversal",
    "postorder-traversal"
  ],
  "relatedLinks": [
    {
      "id": "level-order-traversal",
      "title": "Level Order Traversal",
      "label": "Existing algorithm lesson"
    },
    {
      "id": "preorder-traversal",
      "title": "Preorder Traversal",
      "label": "Existing algorithm lesson"
    },
    {
      "id": "inorder-traversal",
      "title": "Inorder Traversal",
      "label": "Existing algorithm lesson"
    },
    {
      "id": "postorder-traversal",
      "title": "Postorder Traversal",
      "label": "Existing algorithm lesson"
    }
  ],
  "runnerInput": [],
  "categorySlug": "data-structures",
  "algorithmSlug": "binary-tree-level-order",
  "animation": {
    "type": "tree-operation",
    "title": "Binary Tree Level Order Traversal tree state",
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
        "title": "Check for empty tree",
        "note": "If root is missing, there are no levels to visit.",
        "ruleLabel": "Binary Tree Level Order Traversal invariant",
        "rule": "Defines binaryTreeLevelOrder as the runnable entry point for this lesson.",
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
        "phase": "Queue",
        "title": "Seed traversal queue",
        "note": "The root becomes the first discovered node.",
        "ruleLabel": "Binary Tree Level Order Traversal invariant",
        "rule": "Builds tree as a structured sample object that the tree, graph, or map visualizer can render directly.",
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
        "phase": "Visit",
        "title": "Process queue front",
        "note": "The front node is appended to output.",
        "ruleLabel": "Binary Tree Level Order Traversal invariant",
        "rule": "Returns the final state object { structure: \"binary tree\", traversal: \"level order\", result: [tree.value, tree.left.value, tree.right.value] }, exposing the exact fields the visualizer has been tracking.",
        "activeNode": "12",
        "targetNode": "2",
        "replacementNode": "2",
        "mutedNodes": []
      },
      {
        "phase": "Children",
        "title": "Discover next level",
        "note": "Children are pushed to the queue for later visits.",
        "ruleLabel": "Binary Tree Level Order Traversal invariant",
        "rule": "Returns the final state object { structure: \"binary tree\", traversal: \"level order\", result: [tree.value, tree.left.value, tree.right.value] }, exposing the exact fields the visualizer has been tracking.",
        "activeNode": "2",
        "targetNode": "6",
        "replacementNode": "6",
        "mutedNodes": []
      }
    ]
  }
};
