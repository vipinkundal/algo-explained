// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-bst-basics",
  "title": "BST Basics",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Trees / BST / AVL / Heap",
  "sourceFolder": "14_BST",
  "sourceFile": "01_bst.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/bst-basics",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "bst-operations",
  "icon": "account_tree",
  "codePath": "./src/algorithms/data-structures/bst-basics/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/bst-basics/code/original.cpp",
  "originalCodeFilename": "01_bst.cpp",
  "originalActiveLine": 7,
  "meaning": "BST Basics shows how data is organized, changed, and inspected through a small browser demo with a C/C++ reference available beside it.",
  "problem": "BST Basics explains the search-tree state model and how one focused change updates it.",
  "concept": "BST Basics is useful when tree structure lets each node decide the next smaller piece of work. Use this when the answer depends on ordered branch.",
  "logicSummary": "Start at the root, maintain ordered branch, compare with the current node and move left or right, and return the tree-specific result.",
  "transitionSummary": "Each step focuses on one node and uses ordered branch to decide the next child, rotation, or returned value.",
  "codeInsight": "Use the Runnable JS tab to edit inputs and see browser-safe output. Use the C/C++ Reference tab to study the source implementation.",
  "originalCodeInsight": "The C/C++ Node struct is the memory layout: data stores the value and next/child pointers connect the structure.",
  "realLifeExample": "BST Basics is useful when you need to understand the mechanics behind library-level data structures.",
  "whenToUse": "Use this page when learning Trees / BST / AVL / Heap behavior through state changes instead of memorized code.",
  "memoryTrick": "BST Basics: name the invariant, then trace the exact state change.",
  "visualizerCaption": "BST Basics is shown as node-by-node tree state. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Check node",
      "text": "Handle an empty root or finished subtree."
    },
    {
      "title": "Read node state",
      "text": "Inspect ordered branch."
    },
    {
      "title": "Move/combine",
      "text": "compare with the current node and move left or right."
    },
    {
      "title": "Return tree result",
      "text": "Return traversal output, path result, or updated tree state."
    }
  ],
  "variables": [
    {
      "name": "root key",
      "purpose": "Starts every comparison path in the search tree."
    },
    {
      "name": "branch choice",
      "purpose": "Records whether the next move goes left or right."
    },
    {
      "name": "matched node",
      "purpose": "Holds the node found by the comparison path."
    },
    {
      "name": "ordered keys",
      "purpose": "Shows the tree values while preserving sorted order."
    }
  ],
  "dryRun": [
    {
      "label": "Root",
      "title": "Check current node",
      "note": "The code starts by handling missing nodes or the current root.",
      "activeLine": 2,
      "codeInsight": "Defines bstBasics as the runnable entry point for this lesson."
    },
    {
      "label": "Node state",
      "title": "Read ordered branch",
      "note": "The current node controls the next step.",
      "activeLine": 3,
      "codeInsight": "Seeds values with the sample values shown in the visualizer, giving the trace concrete cells to inspect."
    },
    {
      "label": "Child step",
      "title": "Compare with the current node and move left or right",
      "note": "The algorithm moves to a child, combines a value, or repairs structure.",
      "activeLine": 6,
      "codeInsight": "Returns the final state object { structure: \"binary search tree\", values, search, path, found: true }, exposing the exact fields the visualizer has been tracking."
    },
    {
      "label": "Tree result",
      "title": "Return result",
      "note": "The final traversal, path, measurement, or tree state is returned.",
      "activeLine": 6,
      "codeInsight": "Returns the final state object { structure: \"binary search tree\", values, search, path, found: true }, exposing the exact fields the visualizer has been tracking."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying BST Basics?",
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
    "bst-search",
    "bst-insert",
    "bst-delete"
  ],
  "relatedLinks": [
    {
      "id": "bst-search",
      "title": "BST Search",
      "label": "Existing algorithm lesson"
    },
    {
      "id": "bst-insert",
      "title": "BST Insert",
      "label": "Existing algorithm lesson"
    },
    {
      "id": "bst-delete",
      "title": "BST Delete",
      "label": "Existing algorithm lesson"
    }
  ],
  "runnerInput": [],
  "categorySlug": "data-structures",
  "algorithmSlug": "bst-basics",
  "animation": {
    "type": "tree-operation",
    "title": "BST Basics tree state",
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
        "ruleLabel": "BST Basics invariant",
        "rule": "Defines bstBasics as the runnable entry point for this lesson.",
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
        "title": "Read ordered branch",
        "note": "The current node controls the next step.",
        "ruleLabel": "BST Basics invariant",
        "rule": "Seeds values with the sample values shown in the visualizer, giving the trace concrete cells to inspect.",
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
        "title": "Compare with the current node and move left or right",
        "note": "The algorithm moves to a child, combines a value, or repairs structure.",
        "ruleLabel": "BST Basics invariant",
        "rule": "Returns the final state object { structure: \"binary search tree\", values, search, path, found: true }, exposing the exact fields the visualizer has been tracking.",
        "activeNode": "12",
        "targetNode": "2",
        "replacementNode": "2",
        "mutedNodes": []
      },
      {
        "phase": "Tree result",
        "title": "Return result",
        "note": "The final traversal, path, measurement, or tree state is returned.",
        "ruleLabel": "BST Basics invariant",
        "rule": "Returns the final state object { structure: \"binary search tree\", values, search, path, found: true }, exposing the exact fields the visualizer has been tracking.",
        "activeNode": "2",
        "targetNode": "6",
        "replacementNode": "6",
        "mutedNodes": []
      }
    ]
  }
};
