// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "bst-search",
  "title": "BST Search",
  "category": "Trees",
  "route": "/algorithms/trees/bst-search",
  "phase": 2,
  "priority": "high",
  "visualizerType": "bst-path",
  "icon": "account_tree",
  "codePath": "./src/algorithms/trees/bst-search/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "BST Search is a Trees technique focused on index or insertion point.",
  "problem": "BST Search narrows where a target can be by scanning or shrinking a candidate interval.",
  "concept": "BST Search is useful when tree structure lets each node decide the next smaller piece of work. Use this when the answer depends on ordered branch.",
  "logicSummary": "Start at the root, maintain ordered branch, compare with the current node and move left or right, and return the tree-specific result.",
  "transitionSummary": "Each step focuses on one node and uses ordered branch to decide the next child, rotation, or returned value.",
  "codeInsight": "The boundary variables are the important state; every branch must make the remaining search interval smaller.",
  "realLifeExample": "BST Search appears when the input is array, target and the required result is index or insertion point.",
  "whenToUse": "Use BST Search when a problem matches the Trees pattern and the expected state changes match a bst path dry run.",
  "memoryTrick": "BST Search: name the invariant, then trace the exact state change.",
  "visualizerCaption": "BST Search is shown as node-by-node tree state. The numbered steps follow the code path used to maintain the main invariant.",
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
      "name": "array, target",
      "purpose": "array: The ordered or unsorted list the algorithm scans, partitions, sorts, or transforms. target: The value or condition each comparison is trying to locate."
    },
    {
      "name": "current node and recursion state",
      "purpose": "The traversal, search, or balancing state attached to the current tree node. This page visualizes it as bst path."
    },
    {
      "name": "tree result",
      "purpose": "The value produced by bstSearch after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Each transition either advances one position or moves a boundary inward. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Root",
      "title": "Check current node",
      "note": "The code starts by handling missing nodes or the current root.",
      "activeLine": 5,
      "codeInsight": "Defines bstSearch and names the input root, target; edits to those inputs change the visual state and output."
    },
    {
      "label": "Node state",
      "title": "Read ordered branch",
      "note": "The current node controls the next step.",
      "activeLine": 10,
      "codeInsight": "Computes mid from the current values before the algorithm decides the next move."
    },
    {
      "label": "Child step",
      "title": "Compare with the current node and move left or right",
      "note": "The algorithm moves to a child, combines a value, or repairs structure.",
      "activeLine": 6,
      "codeInsight": "Checks Array.isArray(root); only the branch that preserves BST Search's invariant is allowed to change state."
    },
    {
      "label": "Tree result",
      "title": "Return result",
      "note": "The final traversal, path, measurement, or tree state is returned.",
      "activeLine": 15,
      "codeInsight": "Returns -1, the final value maintained by BST Search's code path."
    }
  ],
  "complexity": {
    "time": "O(n) for the educational reference implementation.",
    "space": "O(n) for tracked state when needed."
  },
  "quiz": {
    "question": "Which state choice keeps BST Search correct?",
    "options": [
      {
        "key": "A",
        "text": "Track search window and update it only through BST Search's transition.",
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
    "correctText": "Correct. BST Search stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. BST Search needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "trees",
  "algorithmSlug": "bst-search",
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
    },
    5
  ],
  "relatedLinks": [
    {
      "id": "ds-bst-basics",
      "title": "BST Basics",
      "label": "C/C++ BST source"
    }
  ],
  "animation": {
    "type": "tree-operation",
    "title": "BST Search tree state",
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
        "ruleLabel": "BST Search invariant",
        "rule": "Defines bstSearch and names the input root, target; edits to those inputs change the visual state and output.",
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
        "ruleLabel": "BST Search invariant",
        "rule": "Computes mid from the current values before the algorithm decides the next move.",
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
        "ruleLabel": "BST Search invariant",
        "rule": "Checks Array.isArray(root); only the branch that preserves BST Search's invariant is allowed to change state.",
        "activeNode": "12",
        "targetNode": "2",
        "replacementNode": "2",
        "mutedNodes": []
      },
      {
        "phase": "Tree result",
        "title": "Return result",
        "note": "The final traversal, path, measurement, or tree state is returned.",
        "ruleLabel": "BST Search invariant",
        "rule": "Returns -1, the final value maintained by BST Search's code path.",
        "activeNode": "2",
        "targetNode": "6",
        "replacementNode": "6",
        "mutedNodes": []
      }
    ]
  }
};
