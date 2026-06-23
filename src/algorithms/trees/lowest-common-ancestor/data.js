// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "lowest-common-ancestor",
  "title": "Lowest Common Ancestor",
  "category": "Trees",
  "route": "/algorithms/trees/lowest-common-ancestor",
  "phase": 3,
  "priority": "high",
  "visualizerType": "tree-paths",
  "icon": "account_tree",
  "codePath": "./src/algorithms/trees/lowest-common-ancestor/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Lowest Common Ancestor finds the deepest node that has both requested values in its subtree.",
  "problem": "Given a tree and two target values, return the lowest node where the two search paths meet.",
  "concept": "Each recursive call returns null, one found target, or the ancestor value when both sides find a target.",
  "logicSummary": "Search left and right subtrees; if both return non-null at a node, that node is the LCA.",
  "transitionSummary": "Each step shows one target bubbling up from a child subtree until node 2 receives both 1 and 3.",
  "codeInsight": "The key state is left and right: when both are non-null, the current root is the lowest common ancestor.",
  "realLifeExample": "In an org chart, LCA is the closest manager shared by two employees.",
  "whenToUse": "Use Lowest Common Ancestor when you need the deepest shared ancestor of two nodes in a tree.",
  "memoryTrick": "LCA: one target on the left and one on the right means return the current node.",
  "visualizerCaption": "The animation searches for 1 and 3, then returns 2 as their lowest common ancestor.",
  "logicSteps": [
    {
      "title": "Check current node",
      "text": "Return immediately if the current node is null or matches either target."
    },
    {
      "title": "Search left subtree",
      "text": "Ask the left child whether it contains either target."
    },
    {
      "title": "Search right subtree",
      "text": "Ask the right child whether it contains either target."
    },
    {
      "title": "Return ancestor",
      "text": "If both sides return values, return the current node value."
    }
  ],
  "variables": [
    {
      "name": "root",
      "purpose": "The tree node where recursion or traversal begins."
    },
    {
      "name": "left",
      "purpose": "The value returned by the left recursive search, or null when no target is found."
    },
    {
      "name": "right",
      "purpose": "The value returned by the right recursive search, or null when no target is found."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Return root.value when both left and right are non-null; otherwise bubble up the non-null side."
    }
  ],
  "dryRun": [
    {
      "label": "Root",
      "title": "Search from root 4",
      "note": "The current root 4 is not 1 or 3, so the function searches both subtrees.",
      "activeLine": 7,
      "codeInsight": "Computes left = lowestCommonAncestor(root.left, first, second), so the search enters node 2."
    },
    {
      "label": "First target",
      "title": "Find target 1",
      "note": "Node 1 matches first, so that recursive branch returns 1.",
      "activeLine": 6,
      "codeInsight": "Returns root.value when root.value equals first."
    },
    {
      "label": "Second target",
      "title": "Find target 3",
      "note": "Node 3 matches second, so the other branch under node 2 returns 3.",
      "activeLine": 6,
      "codeInsight": "Returns root.value when root.value equals second."
    },
    {
      "label": "Result",
      "title": "Return LCA 2",
      "note": "At node 2, left is 1 and right is 3, so node 2 is the lowest common ancestor.",
      "activeLine": 9,
      "codeInsight": "Returns root.value because left and right are both non-null."
    }
  ],
  "complexity": {
    "time": "O(n) over tree nodes.",
    "space": "O(h) recursion or traversal state."
  },
  "quiz": {
    "question": "Which state choice keeps Lowest Common Ancestor correct?",
    "options": [
      {
        "key": "A",
        "text": "Return the current node when one target is found in each child subtree.",
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
    "correctText": "Correct. The LCA is the first node where both target paths meet.",
    "incorrectText": "Not quite. LCA depends on the two recursive return values from the left and right subtrees."
  },
  "categorySlug": "trees",
  "algorithmSlug": "lowest-common-ancestor",
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
    1,
    3
  ],
  "animation": {
    "type": "tree-operation",
    "title": "Lowest Common Ancestor tree state",
    "legend": [
      {
        "className": "current",
        "label": "Current root"
      },
      {
        "className": "target",
        "label": "Target found"
      },
      {
        "className": "replacement",
        "label": "Ancestor"
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
        "title": "Search from root 4",
        "note": "Root 4 is not target 1 or 3, so the algorithm searches left and right.",
        "ruleLabel": "Lowest Common Ancestor invariant",
        "rule": "The target pair is 1 and 3; both can only meet below root 4 if they are in the same subtree.",
        "activeNode": "4",
        "targetNode": "2",
        "replacementNode": "",
        "mutedNodes": [
          "6",
          "5",
          "7"
        ],
        "nodeLabels": {
          "4": "4 search",
          "2": "2 left"
        }
      },
      {
        "phase": "First target",
        "title": "Left branch returns 1",
        "note": "Node 1 matches first, so that recursive call returns 1 to node 2.",
        "ruleLabel": "Lowest Common Ancestor invariant",
        "rule": "The base condition returns the current value when root.value equals first.",
        "activeNode": "1",
        "targetNode": "1",
        "replacementNode": "",
        "mutedNodes": [
          "6",
          "5",
          "7"
        ],
        "nodeLabels": {
          "1": "1 found",
          "2": "2 waits",
          "3": "3 target"
        }
      },
      {
        "phase": "Second target",
        "title": "Right branch returns 3",
        "note": "Node 3 matches second, so node 2 receives one target from each side.",
        "ruleLabel": "Lowest Common Ancestor invariant",
        "rule": "The base condition returns the current value when root.value equals second.",
        "activeNode": "3",
        "targetNode": "3",
        "replacementNode": "1",
        "mutedNodes": [
          "6",
          "5",
          "7"
        ],
        "nodeLabels": {
          "1": "1 left",
          "2": "2 waits",
          "3": "3 right"
        }
      },
      {
        "phase": "Result",
        "title": "Return LCA 2",
        "note": "At node 2, left is 1 and right is 3, so the current node is the lowest common ancestor.",
        "ruleLabel": "Lowest Common Ancestor invariant",
        "rule": "left !== null && right !== null, so return root.value, which is 2.",
        "activeNode": "2",
        "targetNode": "1",
        "replacementNode": "2",
        "mutedNodes": [
          "6",
          "5",
          "7"
        ],
        "nodeLabels": {
          "1": "1 found",
          "2": "2 LCA",
          "3": "3 found"
        }
      }
    ]
  }
};
