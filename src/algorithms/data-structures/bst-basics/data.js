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
  "meaning": "A binary search tree keeps smaller keys in the left subtree and larger keys in the right subtree.",
  "problem": "A binary search tree keeps smaller keys in the left subtree and larger keys in the right subtree.",
  "concept": "A binary search tree keeps smaller keys in the left subtree and larger keys in the right subtree.",
  "logicSummary": "A binary search tree keeps smaller keys in the left subtree and larger keys in the right subtree.",
  "transitionSummary": "To find 6 under root 4, follow the right link; searching for 2 follows the left.",
  "codeInsight": "A binary search tree keeps smaller keys in the left subtree and larger keys in the right subtree.",
  "originalCodeInsight": "The C/C++ Node struct is the memory layout: data stores the value and next/child pointers connect the structure.",
  "realLifeExample": "To find 6 under root 4, follow the right link; searching for 2 follows the left.",
  "whenToUse": "A binary search tree keeps smaller keys in the left subtree and larger keys in the right subtree.",
  "memoryTrick": "A binary search tree keeps smaller keys in the left subtree and larger keys in the right subtree.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "A binary search tree keeps smaller keys in the left subtree and larger keys in the right subtree."
    },
    {
      "title": "Work through a small case",
      "text": "To find 6 under root 4, follow the right link; searching for 2 follows the left."
    },
    {
      "title": "Check the boundary cases",
      "text": "Do not assume a tree is a binary search tree or balanced unless the problem guarantees it."
    }
  ],
  "variables": [
    {
      "name": "values",
      "purpose": "Keeps a sequence of sample or working values for the following operations."
    },
    {
      "name": "search",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
    },
    {
      "name": "path",
      "purpose": "Remembers the current partial choice sequence; backtracking restores it before trying a sibling branch."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "A binary search tree keeps smaller keys in the left subtree and larger keys in the right subtree.",
      "activeLine": 2,
      "codeInsight": "A binary search tree keeps smaller keys in the left subtree and larger keys in the right subtree."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "To find 6 under root 4, follow the right link; searching for 2 follows the left.",
      "activeLine": 6,
      "codeInsight": "A binary search tree keeps smaller keys in the left subtree and larger keys in the right subtree."
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
  },
  "learningGuide": {
    "mentalModel": "A tree branches from a root. A child is one level below its parent; a leaf has no children.",
    "family": "Trees and links",
    "example": "To find 6 under root 4, follow the right link; searching for 2 follows the left.",
    "sampleInput": [],
    "sampleResult": {
      "structure": "binary search tree",
      "values": [
        40,
        20,
        60,
        10,
        30,
        50,
        70
      ],
      "search": 50,
      "path": [
        40,
        60,
        50
      ],
      "found": true
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
    "checkpoint": "Explain this in your own words: A binary search tree keeps smaller keys in the left subtree and larger keys in the right subtree."
  }
};
