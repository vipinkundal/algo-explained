// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "avl-tree-basics",
  "title": "AVL Tree Basics",
  "category": "Trees",
  "route": "/algorithms/trees/avl-tree-basics",
  "phase": 4,
  "priority": "low",
  "visualizerType": "rotations",
  "icon": "account_tree",
  "codePath": "./src/algorithms/trees/avl-tree-basics/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "AVL Tree Basics is a Trees technique focused on tree result.",
  "problem": "AVL Tree Basics relies on the recursive structure of a tree: solve the current node and combine child results.",
  "concept": "AVL Tree Basics is useful when tree structure lets each node decide the next smaller piece of work. Use this when the answer depends on balance invariant.",
  "logicSummary": "Start at the root, maintain balance invariant, rotate or recolor when height/color rules are violated, and return the tree-specific result.",
  "transitionSummary": "Each step focuses on one node and uses balance invariant to decide the next child, rotation, or returned value.",
  "codeInsight": "Tree code stays clean when every recursive call returns exactly the information the parent needs.",
  "realLifeExample": "AVL Tree Basics appears when the input is root and the required result is tree result.",
  "whenToUse": "Use AVL Tree Basics when a problem matches the Trees pattern and the expected state changes match a rotations dry run.",
  "memoryTrick": "AVL Tree Basics: name the invariant, then trace the exact state change.",
  "visualizerCaption": "AVL Tree Basics is shown as node-by-node tree state. The numbered steps follow the code path used to maintain the main invariant.",
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
      "name": "root",
      "purpose": "The tree node where recursion or traversal begins."
    },
    {
      "name": "current node and recursion state",
      "purpose": "The traversal, search, or balancing state attached to the current tree node. This page visualizes it as rotations."
    },
    {
      "name": "tree result",
      "purpose": "The value produced by avlTreeBasics after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Move from a node to its child or back from a child to its parent with updated state. Stop when no valid work remains or the answer is known."
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
    "time": "O(n) over tree nodes.",
    "space": "O(h) recursion or traversal state."
  },
  "quiz": {
    "question": "Which state choice keeps AVL Tree Basics correct?",
    "options": [
      {
        "key": "A",
        "text": "Track current node and traversal state and update it only through AVL Tree Basics' transition.",
        "correct": true
      },
      {
        "key": "B",
        "text": "Reuse a different algorithm's state names even when the transition is different.",
        "correct": false
      },
      {
        "key": "C",
        "text": "Return before checking the algorithm-specific stop condition.",
        "correct": false
      }
    ],
    "correctText": "Correct. AVL Tree Basics stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. AVL Tree Basics needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "trees",
  "algorithmSlug": "avl-tree-basics",
  "runnerInput": [
    {
      "value": 4,
      "left": {
        "value": 2,
        "left": {
          "value": 1
        },
        "right": {
          "value": 3
        }
      },
      "right": {
        "value": 6,
        "left": {
          "value": 5
        },
        "right": {
          "value": 7
        }
      }
    }
  ],
  "relatedLinks": [
    {
      "id": "ds-avl-ll-rotation",
      "title": "AVL LL Rotation",
      "label": "C/C++ AVL source"
    }
  ],
  "animation": {
    "type": "tree-operation",
    "title": "AVL Tree Basics tree state",
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
        "ruleLabel": "AVL Tree Basics invariant",
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
        "ruleLabel": "AVL Tree Basics invariant",
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
        "ruleLabel": "AVL Tree Basics invariant",
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
        "ruleLabel": "AVL Tree Basics invariant",
        "rule": "The final traversal, path, measurement, or tree state is returned.",
        "activeNode": "2",
        "targetNode": "6",
        "replacementNode": "6",
        "mutedNodes": []
      }
    ]
  }
};
