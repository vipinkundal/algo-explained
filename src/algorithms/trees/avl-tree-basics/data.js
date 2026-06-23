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
  "meaning": "An AVL tree keeps every node height-balanced: the left and right subtree heights differ by at most 1.",
  "problem": "This page checks whether the sample tree satisfies the AVL balance invariant and reports its height.",
  "concept": "The helper computes height, then balanced(node) verifies the height difference at every node and recurses into both children.",
  "logicSummary": "Compute subtree heights, compare the height difference at each node, recurse through the tree, and return { height, balanced }.",
  "transitionSummary": "Each step shows a height or balance check that proves the sample tree is balanced.",
  "codeInsight": "The key AVL condition is Math.abs(height(node.left) - height(node.right)) <= 1.",
  "realLifeExample": "AVL balancing keeps lookup paths short in a sorted in-memory index.",
  "whenToUse": "Use AVL trees when search, insert, and delete should stay logarithmic through strict height balance.",
  "memoryTrick": "AVL: every node's balance factor is -1, 0, or 1.",
  "visualizerCaption": "The animation checks subtree heights and confirms the sample tree has height 3 and balanced: true.",
  "logicSteps": [
    {
      "title": "Check node",
      "text": "Compute subtree heights."
    },
    {
      "title": "Read node state",
      "text": "Compare left and right heights at each node."
    },
    {
      "title": "Move/combine",
      "text": "Recurse into both child subtrees."
    },
    {
      "title": "Return tree result",
      "text": "Return the tree height and boolean balance result."
    }
  ],
  "variables": [
    {
      "name": "root",
      "purpose": "The tree node where recursion or traversal begins."
    },
    {
      "name": "height(node)",
      "purpose": "Computes the height returned by each subtree."
    },
    {
      "name": "balanced(node)",
      "purpose": "Checks the AVL height difference at the current node and both child subtrees."
    },
    {
      "name": "transition / stop rule",
      "purpose": "A null subtree is balanced with height 0; a real node must have child-height difference at most 1."
    }
  ],
  "dryRun": [
    {
      "label": "Root",
      "title": "Measure tree height",
      "note": "The complete sample tree has three node levels, so height(root) returns 3.",
      "activeLine": 14,
      "codeInsight": "Calls height(root) for the height field in the returned object."
    },
    {
      "label": "Node state",
      "title": "Read balance invariant",
      "note": "At root 4, left height and right height are both 2, so the balance factor is 0.",
      "activeLine": 12,
      "codeInsight": "Checks Math.abs(height(node.left) - height(node.right)) <= 1."
    },
    {
      "label": "Child step",
      "title": "Check child subtrees",
      "note": "Nodes 2 and 6 each have two leaf children, so both subtrees are balanced.",
      "activeLine": 12,
      "codeInsight": "Requires balanced(node.left) && balanced(node.right), so every subtree must pass."
    },
    {
      "label": "Tree result",
      "title": "Return AVL summary",
      "note": "The function returns { height: 3, balanced: true }.",
      "activeLine": 14,
      "codeInsight": "Returns both height(root) and balanced(root)."
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
        "text": "Check that every node has left and right subtree heights differing by at most 1.",
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
    "correctText": "Correct. AVL balance is a height-difference invariant checked at every node.",
    "incorrectText": "Not quite. AVL balance is not just a root check; every subtree must also be balanced."
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
    "legend": [
      {
        "className": "current",
        "label": "Checked node"
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
        "title": "Measure tree height",
        "note": "Leaves return height 1, nodes 2 and 6 return height 2, and root 4 returns height 3.",
        "ruleLabel": "AVL Tree Basics invariant",
        "rule": "height(root) is 1 + Math.max(2, 2) = 3.",
        "activeNode": "4",
        "targetNode": "2",
        "replacementNode": "6",
        "mutedNodes": [],
        "nodeLabels": {
          "4": "4 h=3",
          "2": "2 h=2",
          "6": "6 h=2",
          "1": "1 h=1",
          "3": "3 h=1",
          "5": "5 h=1",
          "7": "7 h=1"
        }
      },
      {
        "phase": "Node state",
        "title": "Read balance invariant",
        "note": "At root 4, left height 2 and right height 2 give balance factor 0.",
        "ruleLabel": "AVL Tree Basics invariant",
        "rule": "Math.abs(2 - 2) <= 1, so root 4 satisfies the AVL condition.",
        "activeNode": "4",
        "targetNode": "2",
        "replacementNode": "6",
        "mutedNodes": [],
        "nodeLabels": {
          "4": "4 bf=0",
          "2": "L h=2",
          "6": "R h=2"
        }
      },
      {
        "phase": "Child step",
        "title": "Check child subtrees",
        "note": "Nodes 2 and 6 also have balance factor 0, so no rotation is needed.",
        "ruleLabel": "AVL Tree Basics invariant",
        "rule": "balanced(node.left) && balanced(node.right) keeps the invariant true through every subtree.",
        "activeNode": "2",
        "targetNode": "1",
        "replacementNode": "3",
        "mutedNodes": [
          "5",
          "7"
        ],
        "nodeLabels": {
          "2": "2 bf=0",
          "6": "6 bf=0",
          "1": "1 h=1",
          "3": "3 h=1"
        }
      },
      {
        "phase": "Tree result",
        "title": "Return AVL summary",
        "note": "The sample tree is height 3 and balanced at every node.",
        "ruleLabel": "AVL Tree Basics invariant",
        "rule": "The function returns { height: 3, balanced: true }.",
        "activeNode": "4",
        "targetNode": "2",
        "replacementNode": "6",
        "mutedNodes": [],
        "nodeLabels": {
          "4": "height 3",
          "2": "ok",
          "6": "ok"
        }
      }
    ]
  }
};
