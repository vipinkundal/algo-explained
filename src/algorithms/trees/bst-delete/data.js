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
  "meaning": "BST Delete removes a value while preserving the binary-search-tree ordering rule.",
  "problem": "Deleting node 2 from the sample BST requires the two-child case: replace it with its inorder successor 3.",
  "concept": "Search by comparing the target with each node; when the target has two children, copy the minimum value from its right subtree and delete the duplicate.",
  "logicSummary": "Start at the root, maintain ordered branch, compare with the current node and move left or right, and return the tree-specific result.",
  "transitionSummary": "Each step follows the search path to node 2, chooses successor 3, and reconnects the repaired subtree.",
  "codeInsight": "Every recursive delete call returns the updated subtree so the parent can reconnect the correct child pointer.",
  "realLifeExample": "Deleting a key from an ordered index uses the same idea: replace a removed internal key with its next sorted value.",
  "whenToUse": "Use BST Delete when a value must be removed without losing sorted-search behavior.",
  "memoryTrick": "BST Delete: leaf, one child, or two children with successor.",
  "visualizerCaption": "The animation deletes 2 by replacing it with successor 3 and removing the old 3 leaf.",
  "logicSteps": [
    {
      "title": "Check node",
      "text": "Search for the delete target using BST comparisons."
    },
    {
      "title": "Read node state",
      "text": "When the target is found, choose the delete case."
    },
    {
      "title": "Move/combine",
      "text": "For two children, copy the inorder successor."
    },
    {
      "title": "Return tree result",
      "text": "Delete the duplicate successor and reconnect the subtree."
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
      "activeLine": 27,
      "codeInsight": "Calls remove on a cloned tree, so deletion can reconnect the updated subtree without mutating the caller's tree."
    },
    {
      "label": "Go left",
      "title": "2 is smaller than 4",
      "note": "Because 2 < 4, the target can only be in the left subtree.",
      "activeLine": 17,
      "codeInsight": "Updates node.left with remove(node.left, target) because 2 is smaller than 4."
    },
    {
      "label": "Found 2",
      "title": "Target node found",
      "note": "The current node value equals the delete value, so restructuring starts here.",
      "activeLine": 19,
      "codeInsight": "Falls into the delete case because target equals node.value at node 2."
    },
    {
      "label": "Two children",
      "title": "Node 2 has two children",
      "note": "Node 2 has both left child 1 and right child 3, so we cannot just drop it.",
      "activeLine": 20,
      "codeInsight": "The !node.left shortcut is false because node 2 has left child 1."
    },
    {
      "label": "Successor",
      "title": "Choose successor 3",
      "note": "The smallest value in the right subtree is 3, so it can replace 2 without breaking order.",
      "activeLine": 22,
      "codeInsight": "Sets node.value to minValue(node.right), which is successor 3."
    },
    {
      "label": "Remove old 3",
      "title": "Delete duplicate successor",
      "note": "After copying 3 into node 2's position, remove the old 3 from the right subtree.",
      "activeLine": 23,
      "codeInsight": "Deletes the old successor from node.right so value 3 appears only once."
    },
    {
      "label": "Reconnect",
      "title": "Return updated subtree",
      "note": "The updated subtree reconnects to root 4 as its left child.",
      "activeLine": 25,
      "codeInsight": "Returns the repaired subtree to reconnect it to its parent."
    }
  ],
  "animation": {
    "type": "tree-operation",
    "title": "BST delete restructuring",
    "legend": [
      {
        "className": "current",
        "label": "Current node"
      },
      {
        "className": "target",
        "label": "Delete target"
      },
      {
        "className": "replacement",
        "label": "Successor"
      }
    ],
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
        "note": "The delete value is 2, so begin by comparing 2 with the root value 4.",
        "activeNode": "4",
        "targetNode": "2",
        "mutedNodes": [
          "6",
          "5",
          "7"
        ],
        "ruleLabel": "BST direction",
        "rule": "2 < 4, so the delete target must be in the left subtree."
      },
      {
        "phase": "Search",
        "title": "Move into the left subtree",
        "note": "Because 2 < 4, the target can only be in the left subtree.",
        "activeNode": "2",
        "targetNode": "2",
        "mutedNodes": [
          "6",
          "5",
          "7"
        ],
        "ruleLabel": "Recursive contract",
        "rule": "remove(node.left, 2) searches the subtree rooted at 2."
      },
      {
        "phase": "Match",
        "title": "Node 2 is the delete target",
        "note": "The current node value equals the delete value, so restructuring starts here.",
        "activeNode": "2",
        "targetNode": "2",
        "ruleLabel": "Target found",
        "rule": "target is neither smaller nor larger than node.value, so the else delete case runs."
      },
      {
        "phase": "Case check",
        "title": "Two-child delete case",
        "note": "Node 2 has both left child 1 and right child 3, so we cannot just drop it.",
        "activeNode": "2",
        "targetNode": "2",
        "ruleLabel": "Why not remove directly?",
        "rule": "Node 2 has both left child 1 and right child 3, so it needs the two-child successor case."
      },
      {
        "phase": "Replace",
        "title": "Use successor 3",
        "note": "The smallest value in the right subtree is 3, so it can replace 2 without breaking order.",
        "activeNode": "2",
        "targetNode": "2",
        "replacementNode": "3",
        "ruleLabel": "Inorder successor",
        "rule": "minValue(node.right) returns 3, the next sorted value after 2."
      },
      {
        "phase": "Cleanup",
        "title": "Remove old successor node",
        "note": "After copying 3 into node 2's position, remove the old 3 from the right subtree.",
        "activeNode": "2",
        "replacementNode": "2",
        "nodeLabels": {
          "2": "3"
        },
        "removedNodes": [
          "3"
        ],
        "ruleLabel": "Avoid duplicate values",
        "rule": "After node.value becomes 3, remove(node.right, 3) deletes the old successor node."
      },
      {
        "phase": "Return",
        "title": "Reconnect repaired subtree",
        "note": "The updated subtree reconnects to root 4 as its left child.",
        "activeNode": "4",
        "replacementNode": "2",
        "nodeLabels": {
          "2": "3"
        },
        "removedNodes": [
          "3"
        ],
        "ruleLabel": "Final order",
        "rule": "The repaired left subtree now has root 3 with child 1, and it reconnects under root 4."
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
