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
  "meaning": "Tree height measures the longest root-to-leaf route; node count totals the nodes.",
  "problem": "Tree height measures the longest root-to-leaf route; node count totals the nodes.",
  "concept": "Tree height measures the longest root-to-leaf route; node count totals the nodes.",
  "logicSummary": "Tree height measures the longest root-to-leaf route; node count totals the nodes.",
  "transitionSummary": "A root with two leaf children has 3 nodes and height 1 when height counts edges, or 2 when it counts nodes.",
  "codeInsight": "Tree height measures the longest root-to-leaf route; node count totals the nodes.",
  "originalCodeInsight": "The C++ class groups data members with operations, so the structure controls how outside code can mutate state.",
  "realLifeExample": "A root with two leaf children has 3 nodes and height 1 when height counts edges, or 2 when it counts nodes.",
  "whenToUse": "Tree height measures the longest root-to-leaf route; node count totals the nodes.",
  "memoryTrick": "Tree height measures the longest root-to-leaf route; node count totals the nodes.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Tree height measures the longest root-to-leaf route; node count totals the nodes."
    },
    {
      "title": "Work through a small case",
      "text": "A root with two leaf children has 3 nodes and height 1 when height counts edges, or 2 when it counts nodes."
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
      "note": "Tree height measures the longest root-to-leaf route; node count totals the nodes.",
      "activeLine": 2,
      "codeInsight": "Tree height measures the longest root-to-leaf route; node count totals the nodes."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "A root with two leaf children has 3 nodes and height 1 when height counts edges, or 2 when it counts nodes.",
      "activeLine": 4,
      "codeInsight": "Tree height measures the longest root-to-leaf route; node count totals the nodes."
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
        "rule": "Returns the final state object { structure: \"binary tree\", traversal: \"level order\", result: [tree.value, tree.left.value, tree.right.value] }, exposing the exact fields the visualizer has been tracking.",
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
        "rule": "Returns the final state object { structure: \"binary tree\", traversal: \"level order\", result: [tree.value, tree.left.value, tree.right.value] }, exposing the exact fields the visualizer has been tracking.",
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
    "example": "A root with two leaf children has 3 nodes and height 1 when height counts edges, or 2 when it counts nodes.",
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
    "checkpoint": "Explain this in your own words: Tree height measures the longest root-to-leaf route; node count totals the nodes."
  }
};
