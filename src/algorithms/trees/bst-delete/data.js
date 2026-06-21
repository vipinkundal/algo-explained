// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "bst-delete",
  "title": "BST Delete",
  "category": "Trees",
  "route": "/algorithms/trees/bst-delete",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "bst-restructure",
  "icon": "account_tree",
  "codePath": "./src/algorithms/trees/bst-delete/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "BST Delete is a Trees technique focused on tree result.",
  "problem": "BST Delete relies on the recursive structure of a tree: solve the current node and combine child results.",
  "concept": "BST Delete is useful when tree structure lets each node decide the next smaller piece of work. Use this when the answer depends on ordered branch.",
  "logicSummary": "Start at the root, maintain ordered branch, compare with the current node and move left or right, and return the tree-specific result.",
  "transitionSummary": "Each step focuses on one node and uses ordered branch to decide the next child, rotation, or returned value.",
  "codeInsight": "Tree code stays clean when every recursive call returns exactly the information the parent needs.",
  "realLifeExample": "BST Delete appears when the input is root and the required result is tree result.",
  "whenToUse": "Use BST Delete when a problem matches the Trees pattern and the expected state changes match a bst restructure dry run.",
  "memoryTrick": "BST Delete: name the invariant, then trace the exact state change.",
  "visualizerCaption": "BST Delete is shown as node-by-node tree state. The numbered steps follow the code path used to maintain the main invariant.",
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
      "name": "root, value",
      "purpose": "The BST root and the value that should be removed."
    },
    {
      "name": "node",
      "purpose": "The current subtree root being inspected by the recursive delete call."
    },
    {
      "name": "successor",
      "purpose": "The smallest value in the right subtree used when deleting a node with two children."
    },
    {
      "name": "returned subtree",
      "purpose": "Every recursive call returns the updated subtree to reconnect with its parent."
    }
  ],
  "dryRun": [
    {
      "label": "Root",
      "title": "Start at root 4",
      "note": "The delete value is 2, so begin by comparing 2 with the root value 4.",
      "activeLine": 6,
      "codeInsight": "Stores fromArray so the algorithm can reuse this value without recomputing it."
    },
    {
      "label": "Go left",
      "title": "2 is smaller than 4",
      "note": "Because 2 < 4, the target can only be in the left subtree.",
      "activeLine": 15,
      "codeInsight": "Executes this BST Delete line as part of the highlighted code path, linking the visual step to the implementation."
    },
    {
      "label": "Found 2",
      "title": "Target node found",
      "note": "The current node value equals the delete value, so restructuring starts here.",
      "activeLine": 17,
      "codeInsight": "Checks target < node.value) node.left = remove(node.left, target; only the branch that preserves BST Delete's invariant is allowed to change state."
    },
    {
      "label": "Two children",
      "title": "Node 2 has two children",
      "note": "Node 2 has both left child 1 and right child 3, so we cannot just drop it.",
      "activeLine": 20,
      "codeInsight": "Checks !node.left; only the branch that preserves BST Delete's invariant is allowed to change state."
    },
    {
      "label": "Successor",
      "title": "Choose successor 3",
      "note": "The smallest value in the right subtree is 3, so it can replace 2 without breaking order.",
      "activeLine": 21,
      "codeInsight": "Checks !node.right; only the branch that preserves BST Delete's invariant is allowed to change state."
    },
    {
      "label": "Remove old 3",
      "title": "Delete duplicate successor",
      "note": "After copying 3 into node 2's position, remove the old 3 from the right subtree.",
      "activeLine": 22,
      "codeInsight": "Updates node.value with minValue(node.right); this is the state change the animation should reflect."
    },
    {
      "label": "Reconnect",
      "title": "Return updated subtree",
      "note": "The updated subtree reconnects to root 4 as its left child.",
      "activeLine": 11,
      "codeInsight": "Returns node, the value produced after BST Delete's state changes are complete."
    }
  ],
  "animation": {
    "type": "tree-operation",
    "title": "BST delete restructuring",
    "nodes": [
      {
        "id": "4",
        "label": "4",
        "x": 340,
        "y": 58
      },
      {
        "id": "2",
        "label": "2",
        "x": 190,
        "y": 150
      },
      {
        "id": "6",
        "label": "6",
        "x": 490,
        "y": 150
      },
      {
        "id": "1",
        "label": "1",
        "x": 110,
        "y": 255
      },
      {
        "id": "3",
        "label": "3",
        "x": 270,
        "y": 255
      },
      {
        "id": "5",
        "label": "5",
        "x": 420,
        "y": 255
      },
      {
        "id": "7",
        "label": "7",
        "x": 570,
        "y": 255
      }
    ],
    "edges": [
      {
        "from": "4",
        "to": "2"
      },
      {
        "from": "4",
        "to": "6"
      },
      {
        "from": "2",
        "to": "1"
      },
      {
        "from": "2",
        "to": "3"
      },
      {
        "from": "6",
        "to": "5"
      },
      {
        "from": "6",
        "to": "7"
      }
    ],
    "steps": [
      {
        "phase": "Search",
        "title": "Compare target 2 with root 4",
        "note": "The target is smaller than 4, so deletion must continue in the left subtree.",
        "activeNode": "4",
        "targetNode": "2",
        "mutedNodes": [
          "6",
          "5",
          "7"
        ],
        "ruleLabel": "BST direction",
        "rule": "Stores fromArray so the algorithm can reuse this value without recomputing it."
      },
      {
        "phase": "Search",
        "title": "Move into the left subtree",
        "note": "The recursive call focuses on node 2 while root 4 waits for the updated subtree to return.",
        "activeNode": "2",
        "targetNode": "2",
        "mutedNodes": [
          "6",
          "5",
          "7"
        ],
        "ruleLabel": "Recursive contract",
        "rule": "Executes this BST Delete line as part of the highlighted code path, linking the visual step to the implementation."
      },
      {
        "phase": "Match",
        "title": "Node 2 is the delete target",
        "note": "The current value matches the requested delete value.",
        "activeNode": "2",
        "targetNode": "2",
        "ruleLabel": "Target found",
        "rule": "Checks target < node.value) node.left = remove(node.left, target; only the branch that preserves BST Delete's invariant is allowed to change state."
      },
      {
        "phase": "Case check",
        "title": "Two-child delete case",
        "note": "Node 2 has left child 1 and right child 3, so the tree needs a replacement value.",
        "activeNode": "2",
        "targetNode": "2",
        "ruleLabel": "Why not remove directly?",
        "rule": "Checks !node.left; only the branch that preserves BST Delete's invariant is allowed to change state."
      },
      {
        "phase": "Replace",
        "title": "Use successor 3",
        "note": "3 is the smallest value in node 2's right subtree, so it safely replaces 2.",
        "activeNode": "2",
        "targetNode": "2",
        "replacementNode": "3",
        "ruleLabel": "Inorder successor",
        "rule": "Checks !node.right; only the branch that preserves BST Delete's invariant is allowed to change state."
      },
      {
        "phase": "Cleanup",
        "title": "Remove old successor node",
        "note": "After copying 3 upward, the original leaf node 3 is removed from its old position.",
        "activeNode": "2",
        "replacementNode": "2",
        "nodeLabels": {
          "2": "3"
        },
        "removedNodes": [
          "3"
        ],
        "ruleLabel": "Avoid duplicate values",
        "rule": "Updates node.value with minValue(node.right); this is the state change the animation should reflect."
      },
      {
        "phase": "Return",
        "title": "Reconnect repaired subtree",
        "note": "Root 4 now points left to the repaired subtree, where 3 replaced 2 and 1 remains left.",
        "activeNode": "4",
        "replacementNode": "2",
        "nodeLabels": {
          "2": "3"
        },
        "removedNodes": [
          "3"
        ],
        "ruleLabel": "Final order",
        "rule": "Returns node, the value produced after BST Delete's state changes are complete."
      }
    ]
  },
  "complexity": {
    "time": "O(n) for the educational reference implementation.",
    "space": "O(n) for tracked state when needed."
  },
  "quiz": {
    "question": "Which state choice keeps BST Delete correct?",
    "options": [
      {
        "key": "A",
        "text": "Track current node and traversal state and update it only through BST Delete's transition.",
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
    "correctText": "Correct. BST Delete stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. BST Delete needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "trees",
  "algorithmSlug": "bst-delete",
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
    2
  ],
  "relatedLinks": [
    {
      "id": "ds-bst-basics",
      "title": "BST Basics",
      "label": "C/C++ BST source"
    }
  ]
};
