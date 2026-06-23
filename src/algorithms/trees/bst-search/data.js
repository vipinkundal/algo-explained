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
  "meaning": "BST Search uses the binary-search-tree ordering rule to find a target by following one root-to-leaf path.",
  "problem": "BST Search decides whether a target exists in a tree where every left subtree value is smaller and every right subtree value is larger.",
  "concept": "At each node, compare target with node.value. Equal means found, a smaller target moves left, and a larger target moves right.",
  "logicSummary": "Start at the root, compare the target with the current node, move to the only child that can still contain the target, and return whether the target is found.",
  "transitionSummary": "Each step visits one node and discards the opposite subtree using the BST ordering invariant.",
  "codeInsight": "The current node is the important state; every comparison either returns true or moves to exactly one child.",
  "realLifeExample": "BST Search is like looking up a word in a sorted decision tree: each comparison tells you which half of the remaining choices can still contain the answer.",
  "whenToUse": "Use BST Search when values are organized in a binary search tree and you only need to follow the ordered path to a target.",
  "memoryTrick": "BST Search: equal returns, smaller goes left, larger goes right.",
  "visualizerCaption": "BST Search is shown as a root-to-target path. The numbered steps follow the exact comparisons used by the code.",
  "logicSteps": [
    {
      "title": "Check node",
      "text": "Start with node pointing at the root."
    },
    {
      "title": "Read node state",
      "text": "Compare target with the current node value."
    },
    {
      "title": "Move/combine",
      "text": "Move left or right based on the BST ordering rule."
    },
    {
      "title": "Return tree result",
      "text": "Return true when the target node is reached, or false if the path ends."
    }
  ],
  "variables": [
    {
      "name": "root, target",
      "purpose": "root is the tree entry point, and target is the value the search is trying to find."
    },
    {
      "name": "node",
      "purpose": "The current BST node being compared with target."
    },
    {
      "name": "node.value",
      "purpose": "The ordered value that decides whether the search stops, moves left, or moves right."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Return true on an equal value; otherwise follow left for smaller targets or right for larger targets."
    }
  ],
  "dryRun": [
    {
      "label": "Root",
      "title": "Start at root 4",
      "note": "The tree search begins by assigning node to the root.",
      "activeLine": 17,
      "codeInsight": "Initializes node to root, so the search starts at value 4."
    },
    {
      "label": "Node state",
      "title": "Compare target 5 with node 4",
      "note": "Target 5 is larger than 4, so the left subtree cannot contain it.",
      "activeLine": 20,
      "codeInsight": "Updates node to node.right because target 5 is greater than the current value 4."
    },
    {
      "label": "Child step",
      "title": "Compare target 5 with node 6",
      "note": "Target 5 is smaller than 6, so the right subtree cannot contain it.",
      "activeLine": 20,
      "codeInsight": "Updates node to node.left because target 5 is less than the current value 6."
    },
    {
      "label": "Tree result",
      "title": "Found target 5",
      "note": "The current node matches the target, so the search succeeds.",
      "activeLine": 19,
      "codeInsight": "Returns true because node.value equals target at value 5."
    }
  ],
  "complexity": {
    "time": "O(h), where h is the tree height; O(log n) for a balanced BST and O(n) for a skewed BST.",
    "space": "O(1) for the iterative tree search."
  },
  "quiz": {
    "question": "Which state choice keeps BST Search correct?",
    "options": [
      {
        "key": "A",
        "text": "Track the current node and move only to the child allowed by the BST ordering rule.",
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
    "correctText": "Correct. BST Search stays efficient because each comparison discards one entire subtree.",
    "incorrectText": "Not quite. BST Search must use the node value and the left-smaller/right-larger invariant."
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
        "title": "Start at root 4",
        "note": "Set node to the root before the loop begins.",
        "ruleLabel": "BST Search invariant",
        "rule": "The target is 5; the only possible path begins at root value 4.",
        "activeNode": "4",
        "targetNode": "5",
        "replacementNode": "",
        "mutedNodes": [
          "1",
          "2",
          "3",
          "7"
        ]
      },
      {
        "phase": "Compare",
        "title": "5 is greater than 4",
        "note": "Because target 5 is greater than node 4, BST Search moves right to node 6.",
        "ruleLabel": "BST Search invariant",
        "rule": "All values in the left subtree of 4 are smaller than 4, so they cannot be 5.",
        "activeNode": "4",
        "targetNode": "5",
        "replacementNode": "6",
        "mutedNodes": [
          "1",
          "2",
          "3",
          "7"
        ]
      },
      {
        "phase": "Compare",
        "title": "5 is less than 6",
        "note": "Because target 5 is less than node 6, BST Search moves left to node 5.",
        "ruleLabel": "BST Search invariant",
        "rule": "All values in the right subtree of 6 are larger than 6, so they cannot be 5.",
        "activeNode": "6",
        "targetNode": "5",
        "replacementNode": "5",
        "mutedNodes": [
          "1",
          "2",
          "3",
          "7"
        ]
      },
      {
        "phase": "Found",
        "title": "Node value equals target",
        "note": "The current node is 5, so node.value === target and the function returns true.",
        "ruleLabel": "BST Search invariant",
        "rule": "A matching node ends the search immediately; no other subtree needs to be visited.",
        "activeNode": "5",
        "targetNode": "5",
        "replacementNode": "",
        "mutedNodes": [
          "1",
          "2",
          "3",
          "7"
        ]
      }
    ]
  }
};
