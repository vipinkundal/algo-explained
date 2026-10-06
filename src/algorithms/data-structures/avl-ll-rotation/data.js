// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-avl-ll-rotation",
  "title": "AVL LL Rotation",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Trees / BST / AVL / Heap",
  "sourceFolder": "15_AVL_Tree",
  "sourceFile": "01_LL_Rotation.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/avl-ll-rotation",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "tree-rotation",
  "icon": "account_tree",
  "codePath": "./src/algorithms/data-structures/avl-ll-rotation/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/avl-ll-rotation/code/original.cpp",
  "originalCodeFilename": "01_LL_Rotation.cpp",
  "originalActiveLine": 7,
  "meaning": "An AVL left-left imbalance is repaired by rotating the unbalanced node right.",
  "problem": "An AVL left-left imbalance is repaired by rotating the unbalanced node right.",
  "concept": "An AVL left-left imbalance is repaired by rotating the unbalanced node right.",
  "logicSummary": "An AVL left-left imbalance is repaired by rotating the unbalanced node right.",
  "transitionSummary": "Insert 30, 20, 10: rotating right at 30 makes 20 the root with children 10 and 30.",
  "codeInsight": "An AVL left-left imbalance is repaired by rotating the unbalanced node right.",
  "originalCodeInsight": "The C/C++ Node struct is the memory layout: data stores the value and next/child pointers connect the structure.",
  "realLifeExample": "Insert 30, 20, 10: rotating right at 30 makes 20 the root with children 10 and 30.",
  "whenToUse": "An AVL left-left imbalance is repaired by rotating the unbalanced node right.",
  "memoryTrick": "An AVL left-left imbalance is repaired by rotating the unbalanced node right.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "An AVL left-left imbalance is repaired by rotating the unbalanced node right."
    },
    {
      "title": "Work through a small case",
      "text": "Insert 30, 20, 10: rotating right at 30 makes 20 the root with children 10 and 30."
    },
    {
      "title": "Check the boundary cases",
      "text": "Do not assume a tree is a binary search tree or balanced unless the problem guarantees it."
    }
  ],
  "variables": [
    {
      "name": "return",
      "purpose": "The function returns a value or snapshot. Open the JavaScript source to inspect the fixed sample."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "An AVL left-left imbalance is repaired by rotating the unbalanced node right.",
      "activeLine": 2,
      "codeInsight": "An AVL left-left imbalance is repaired by rotating the unbalanced node right."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "Insert 30, 20, 10: rotating right at 30 makes 20 the root with children 10 and 30.",
      "activeLine": 3,
      "codeInsight": "An AVL left-left imbalance is repaired by rotating the unbalanced node right."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying AVL LL Rotation?",
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
    "avl-tree-basics"
  ],
  "relatedLinks": [
    {
      "id": "level-order-traversal",
      "title": "Level Order Traversal",
      "label": "Existing algorithm lesson"
    },
    {
      "id": "avl-tree-basics",
      "title": "AVL Tree Basics",
      "label": "Existing algorithm lesson"
    }
  ],
  "runnerInput": [],
  "categorySlug": "data-structures",
  "algorithmSlug": "avl-ll-rotation",
  "animation": {
    "type": "tree-operation",
    "title": "AVL LL Rotation tree state",
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
        "ruleLabel": "AVL LL Rotation invariant",
        "rule": "Defines avlLlRotation as the runnable entry point for this lesson.",
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
        "ruleLabel": "AVL LL Rotation invariant",
        "rule": "Defines avlLlRotation as the runnable entry point for this lesson.",
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
        "ruleLabel": "AVL LL Rotation invariant",
        "rule": "Sets the returned rotation field to \"right rotation\", which is one of the named values rendered in the visual summary.",
        "activeNode": "12",
        "targetNode": "2",
        "replacementNode": "2",
        "mutedNodes": []
      },
      {
        "phase": "Tree result",
        "title": "Return result",
        "note": "The final traversal, path, measurement, or tree state is returned.",
        "ruleLabel": "AVL LL Rotation invariant",
        "rule": "Returns the final state object {, exposing the exact fields the visualizer has been tracking.",
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
    "example": "Insert 30, 20, 10: rotating right at 30 makes 20 the root with children 10 and 30.",
    "sampleInput": [],
    "sampleResult": {
      "structure": "AVL tree",
      "imbalance": "left-left",
      "rotation": "right rotation",
      "before": [
        30,
        20,
        10
      ],
      "after": [
        20,
        10,
        30
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
    "checkpoint": "Explain this in your own words: An AVL left-left imbalance is repaired by rotating the unbalanced node right."
  }
};
