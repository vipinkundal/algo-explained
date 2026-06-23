// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "height-depth-of-tree",
  "title": "Height / Depth of Tree",
  "category": "Trees",
  "route": "/algorithms/trees/height-depth-of-tree",
  "phase": 3,
  "priority": "high",
  "visualizerType": "tree-height",
  "icon": "account_tree",
  "codePath": "./src/algorithms/trees/height-depth-of-tree/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Tree height is the number of nodes on the longest path from the current node down to a leaf. Depth is the distance from the root down to a node.",
  "problem": "Height / Depth of Tree computes how tall a tree is by asking each child for its height and returning one plus the taller child.",
  "concept": "A null child has height 0. A real node returns 1 + Math.max(left height, right height), so each parent only needs the two child results.",
  "logicSummary": "Start at the root, recursively measure the left and right subtrees, then return one plus the larger child height.",
  "transitionSummary": "Each visual step shows which subtree height is being returned to the parent.",
  "codeInsight": "The recursive return value is the important state; every call returns the height that its parent combines.",
  "realLifeExample": "Height is like measuring an org chart by asking each manager for the longest reporting chain below them, then adding the manager.",
  "whenToUse": "Use this pattern when a tree answer can be computed from left-subtree and right-subtree results.",
  "memoryTrick": "Tree height: null is 0, node is 1 plus the taller child.",
  "visualizerCaption": "The animation shows child heights rolling up from subtrees to the root.",
  "logicSteps": [
    {
      "title": "Check node",
      "text": "Treat null children as height 0."
    },
    {
      "title": "Read node state",
      "text": "Recursively measure the left subtree."
    },
    {
      "title": "Move/combine",
      "text": "Recursively measure the right subtree."
    },
    {
      "title": "Return tree result",
      "text": "Return 1 plus the taller child height."
    }
  ],
  "variables": [
    {
      "name": "root",
      "purpose": "The tree node where recursion or traversal begins."
    },
    {
      "name": "left height",
      "purpose": "The height returned by heightDepthOfTree(root.left)."
    },
    {
      "name": "right height",
      "purpose": "The height returned by heightDepthOfTree(root.right)."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Return 0 for null; otherwise return 1 + Math.max(left height, right height)."
    }
  ],
  "dryRun": [
    {
      "label": "Root",
      "title": "Root needs both child heights",
      "note": "Node 4 cannot return until the left and right subtree heights are known.",
      "activeLine": 7,
      "codeInsight": "Returns 1 + Math.max(left height, right height), so the root waits for both recursive calls."
    },
    {
      "label": "Left height",
      "title": "Measure the left subtree",
      "note": "Node 2 has leaf children 1 and 3, so its subtree height is 2.",
      "activeLine": 7,
      "codeInsight": "heightDepthOfTree(root.left) returns 2 for the subtree rooted at node 2."
    },
    {
      "label": "Right height",
      "title": "Measure the right subtree",
      "note": "Node 6 has leaf children 5 and 7, so its subtree height is 2.",
      "activeLine": 7,
      "codeInsight": "heightDepthOfTree(root.right) returns 2 for the subtree rooted at node 6."
    },
    {
      "label": "Return height",
      "title": "Return one plus the taller child",
      "note": "Both child subtrees have height 2, so the root returns 1 + 2 = 3.",
      "activeLine": 7,
      "codeInsight": "Returns 1 + Math.max(left height, right height), which is the height shown at the root."
    }
  ],
  "complexity": {
    "time": "O(n) over tree nodes.",
    "space": "O(h) recursion or traversal state."
  },
  "quiz": {
    "question": "Which state choice keeps Height / Depth of Tree correct?",
    "options": [
      {
        "key": "A",
        "text": "Return 0 for null children, then return 1 plus the larger child height for each real node.",
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
    "correctText": "Correct. Each parent can compute its height from only the two child heights.",
    "incorrectText": "Not quite. Height needs the null base case and the max of the left and right subtree heights."
  },
  "categorySlug": "trees",
  "algorithmSlug": "height-depth-of-tree",
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
      "id": "ds-trees-height-and-count",
      "title": "Binary Tree Height and Node Count",
      "label": "C/C++ tree source"
    }
  ],
  "animation": {
    "type": "tree-operation",
    "title": "Height / Depth of Tree tree state",
    "legend": [
      {
        "className": "current",
        "label": "Combining node"
      },
      {
        "className": "target",
        "label": "Left height"
      },
      {
        "className": "replacement",
        "label": "Right height"
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
        "phase": "Root",
        "title": "Root waits for child heights",
        "note": "Node 4 must combine the heights returned by its left child 2 and right child 6.",
        "ruleLabel": "Height / Depth of Tree invariant",
        "rule": "A real node returns 1 + Math.max(left height, right height); null children return 0 inside the recursive calls.",
        "activeNode": "4",
        "targetNode": "2",
        "replacementNode": "6",
        "mutedNodes": [
          "1",
          "3",
          "5",
          "7"
        ],
        "nodeLabels": {
          "4": "4 ?",
          "2": "2 ?",
          "6": "6 ?"
        }
      },
      {
        "phase": "Left height",
        "title": "Measure the left subtree",
        "note": "Leaves 1 and 3 each return height 1, so node 2 returns 1 + Math.max(1, 1) = 2.",
        "ruleLabel": "Height / Depth of Tree invariant",
        "rule": "heightDepthOfTree(root.left) gives the root a left subtree height of 2.",
        "activeNode": "2",
        "targetNode": "1",
        "replacementNode": "3",
        "mutedNodes": [
          "6",
          "5",
          "7"
        ],
        "nodeLabels": {
          "2": "2 h=2",
          "1": "1 h=1",
          "3": "3 h=1"
        }
      },
      {
        "phase": "Right height",
        "title": "Measure the right subtree",
        "note": "Leaves 5 and 7 each return height 1, so node 6 returns 1 + Math.max(1, 1) = 2.",
        "ruleLabel": "Height / Depth of Tree invariant",
        "rule": "heightDepthOfTree(root.right) gives the root a right subtree height of 2.",
        "activeNode": "6",
        "targetNode": "5",
        "replacementNode": "7",
        "mutedNodes": [
          "2",
          "1",
          "3"
        ],
        "nodeLabels": {
          "6": "6 h=2",
          "5": "5 h=1",
          "7": "7 h=1"
        }
      },
      {
        "phase": "Return height",
        "title": "Return one plus the taller child",
        "note": "Both child subtrees have height 2, so the root returns 1 + 2 = 3.",
        "ruleLabel": "Height / Depth of Tree invariant",
        "rule": "Returns 1 + Math.max(2, 2), so the tree height shown at the root is 3.",
        "activeNode": "4",
        "targetNode": "2",
        "replacementNode": "6",
        "mutedNodes": [],
        "nodeLabels": {
          "4": "4 h=3",
          "2": "2 h=2",
          "6": "6 h=2"
        }
      }
    ]
  }
};
