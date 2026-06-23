// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "diameter-of-tree",
  "title": "Diameter of Tree",
  "category": "Trees",
  "route": "/algorithms/trees/diameter-of-tree",
  "phase": 3,
  "priority": "medium",
  "visualizerType": "tree-height",
  "icon": "account_tree",
  "codePath": "./src/algorithms/trees/diameter-of-tree/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Tree diameter is the longest path between any two nodes, measured here as the number of edges on that path.",
  "problem": "Compute the longest path in the sample tree while each recursive call also returns subtree height to its parent.",
  "concept": "At each node, left + right is the best diameter passing through that node, and 1 + Math.max(left, right) is the height returned upward.",
  "logicSummary": "Compute left height, compute right height, update diameter with left + right, and return the node height.",
  "transitionSummary": "Each step shows subtree heights rolling up until root 4 updates diameter to 4.",
  "codeInsight": "The shared diameter variable records the best left-height plus right-height seen anywhere in the tree.",
  "realLifeExample": "Diameter is like finding the longest route between two endpoints in a branching road map.",
  "whenToUse": "Use this pattern when each node must return height while also updating a global best path.",
  "memoryTrick": "Diameter at a node is left height plus right height; height returned is one plus the taller side.",
  "visualizerCaption": "The animation shows diameter becoming 4 for path 1 -> 2 -> 4 -> 6 -> 7.",
  "logicSteps": [
    {
      "title": "Check node",
      "text": "Return height 0 for null children."
    },
    {
      "title": "Read node state",
      "text": "Compute left and right subtree heights."
    },
    {
      "title": "Move/combine",
      "text": "Update diameter with left + right."
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
      "name": "left, right",
      "purpose": "The subtree heights returned by the recursive calls."
    },
    {
      "name": "diameter",
      "purpose": "The best left + right path length seen so far."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Update diameter at each node, then return that node's height to its parent."
    }
  ],
  "dryRun": [
    {
      "label": "Root",
      "title": "Initialize best diameter",
      "note": "diameter starts at 0 before the height helper scans the tree.",
      "activeLine": 6,
      "codeInsight": "Initializes diameter, the best path length found so far."
    },
    {
      "label": "Node state",
      "title": "Compute child heights",
      "note": "Subtrees rooted at 2 and 6 each return height 2.",
      "activeLine": 9,
      "codeInsight": "Computes left = height(node.left), then right = height(node.right) on the next line."
    },
    {
      "label": "Child step",
      "title": "Combine child measurements into the parent answer",
      "note": "At root 4, left + right is 2 + 2 = 4, which is the longest path.",
      "activeLine": 11,
      "codeInsight": "Updates diameter with Math.max(diameter, left + right)."
    },
    {
      "label": "Tree result",
      "title": "Return diameter 4",
      "note": "After height(root) finishes, return diameter gives the longest path length 4.",
      "activeLine": 15,
      "codeInsight": "Returns diameter after every node has updated the best path."
    }
  ],
  "complexity": {
    "time": "O(n) over tree nodes.",
    "space": "O(h) recursion or traversal state."
  },
  "quiz": {
    "question": "Which state choice keeps Diameter of Tree correct?",
    "options": [
      {
        "key": "A",
        "text": "Update diameter with left + right at every node while returning height upward.",
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
    "correctText": "Correct. The longest path through a node uses the heights of both child subtrees.",
    "incorrectText": "Not quite. Returning height and updating diameter are related but different values."
  },
  "categorySlug": "trees",
  "algorithmSlug": "diameter-of-tree",
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
  "animation": {
    "type": "tree-operation",
    "title": "Diameter of Tree tree state",
    "legend": [
      {
        "className": "current",
        "label": "Combining node"
      },
      {
        "className": "target",
        "label": "Path endpoint"
      },
      {
        "className": "replacement",
        "label": "Best path"
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
        "title": "Initialize best diameter",
        "note": "Before recursion, the best known path length is 0.",
        "ruleLabel": "Diameter of Tree invariant",
        "rule": "height(root) will update diameter as subtree heights return.",
        "activeNode": "4",
        "targetNode": "",
        "replacementNode": "",
        "mutedNodes": [
          "1",
          "2",
          "3",
          "6",
          "5",
          "7"
        ],
        "nodeLabels": {
          "4": "4 start"
        }
      },
      {
        "phase": "Node state",
        "title": "Subtrees each return height 2",
        "note": "Node 2 returns height 2 from leaves 1 and 3; node 6 returns height 2 from leaves 5 and 7.",
        "ruleLabel": "Diameter of Tree invariant",
        "rule": "The parent root receives left = 2 and right = 2.",
        "activeNode": "4",
        "targetNode": "2",
        "replacementNode": "6",
        "mutedNodes": [],
        "nodeLabels": {
          "2": "2 h=2",
          "6": "6 h=2",
          "1": "1 h=1",
          "3": "3 h=1",
          "5": "5 h=1",
          "7": "7 h=1"
        }
      },
      {
        "phase": "Child step",
        "title": "Combine child measurements into the parent answer",
        "note": "At root 4, left + right is 4, forming path 1 -> 2 -> 4 -> 6 -> 7.",
        "ruleLabel": "Diameter of Tree invariant",
        "rule": "diameter = Math.max(diameter, 2 + 2) updates the best path length to 4.",
        "activeNode": "4",
        "targetNode": "1",
        "replacementNode": "7",
        "mutedNodes": [
          "3",
          "5"
        ],
        "nodeLabels": {
          "1": "1 end",
          "2": "2",
          "4": "4 join",
          "6": "6",
          "7": "7 end"
        }
      },
      {
        "phase": "Tree result",
        "title": "Return diameter 4",
        "note": "The longest path has 4 edges, so the function returns 4.",
        "ruleLabel": "Diameter of Tree invariant",
        "rule": "return diameter exposes the best left + right value seen during height(root).",
        "activeNode": "4",
        "targetNode": "1",
        "replacementNode": "7",
        "mutedNodes": [
          "3",
          "5"
        ],
        "nodeLabels": {
          "1": "1",
          "2": "2",
          "4": "4 d=4",
          "6": "6",
          "7": "7"
        }
      }
    ]
  }
};
