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
  "meaning": "Level-order traversal visits a binary tree one depth at a time using a queue.",
  "problem": "Level-order traversal visits a binary tree one depth at a time using a queue.",
  "concept": "Level-order traversal visits a binary tree one depth at a time using a queue.",
  "logicSummary": "Level-order traversal visits a binary tree one depth at a time using a queue.",
  "transitionSummary": "Root 4 with children 2 and 6 is visited as 4 → 2 → 6.",
  "codeInsight": "Level-order traversal visits a binary tree one depth at a time using a queue.",
  "originalCodeInsight": "The C++ class groups data members with operations, so the structure controls how outside code can mutate state.",
  "realLifeExample": "Root 4 with children 2 and 6 is visited as 4 → 2 → 6.",
  "whenToUse": "Level-order traversal visits a binary tree one depth at a time using a queue.",
  "memoryTrick": "Level-order traversal visits a binary tree one depth at a time using a queue.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Level-order traversal visits a binary tree one depth at a time using a queue."
    },
    {
      "title": "Work through a small case",
      "text": "Root 4 with children 2 and 6 is visited as 4 → 2 → 6."
    },
    {
      "title": "Check the boundary cases",
      "text": "Do not assume a tree is a binary search tree or balanced unless the problem guarantees it."
    }
  ],
  "variables": [
    {
      "name": "tree",
      "purpose": "Groups named values and relationships into a record that the companion can inspect and report."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "Level-order traversal visits a binary tree one depth at a time using a queue.",
      "activeLine": 2,
      "codeInsight": "Level-order traversal visits a binary tree one depth at a time using a queue."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "Root 4 with children 2 and 6 is visited as 4 → 2 → 6.",
      "activeLine": 4,
      "codeInsight": "Level-order traversal visits a binary tree one depth at a time using a queue."
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
  },
  "learningGuide": {
    "mentalModel": "A tree branches from a root. A child is one level below its parent; a leaf has no children.",
    "family": "Trees and links",
    "example": "Root 4 with children 2 and 6 is visited as 4 → 2 → 6.",
    "sampleInput": [],
    "sampleResult": {
      "structure": "binary tree",
      "traversal": "level order",
      "result": [
        1,
        2,
        3
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
    "checkpoint": "Explain this in your own words: Level-order traversal visits a binary tree one depth at a time using a queue."
  }
};
