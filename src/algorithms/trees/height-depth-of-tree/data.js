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
  "meaning": "Height / Depth of Tree is a Trees technique focused on tree result.",
  "problem": "Height / Depth of Tree relies on the recursive structure of a tree: solve the current node and combine child results.",
  "concept": "Height / Depth of Tree is useful when tree structure lets each node decide the next smaller piece of work. Use this when the answer depends on child height/result.",
  "logicSummary": "Start at the root, maintain child height/result, combine child measurements into the parent answer, and return the tree-specific result.",
  "transitionSummary": "Each step focuses on one node and uses child height/result to decide the next child, rotation, or returned value.",
  "codeInsight": "Tree code stays clean when every recursive call returns exactly the information the parent needs.",
  "realLifeExample": "Height / Depth of Tree appears when the input is root and the required result is tree result.",
  "whenToUse": "Use Height / Depth of Tree when a problem matches the Trees pattern and the expected state changes match a tree height dry run.",
  "memoryTrick": "Height / Depth of Tree: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Height / Depth of Tree is shown as node-by-node tree state. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Check node",
      "text": "Handle an empty root or finished subtree."
    },
    {
      "title": "Read node state",
      "text": "Inspect child height/result."
    },
    {
      "title": "Move/combine",
      "text": "combine child measurements into the parent answer."
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
      "purpose": "The traversal, search, or balancing state attached to the current tree node. This page visualizes it as tree height."
    },
    {
      "name": "tree result",
      "purpose": "The value produced by heightDepthOfTree after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Move from a node to its child or back from a child to its parent with updated state. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Base case",
      "title": "Check for an empty subtree",
      "note": "Null children return height 0 before the parent combines subtree heights.",
      "activeLine": 6,
      "codeInsight": "Checks !root; a missing child contributes height 0 to its parent."
    },
    {
      "label": "Left height",
      "title": "Measure the left subtree",
      "note": "The recursive call on root.left returns the height of the left child subtree.",
      "activeLine": 7,
      "codeInsight": "Evaluates heightDepthOfTree(root.left), so the visual focus moves to the left child before the parent can return."
    },
    {
      "label": "Right height",
      "title": "Measure the right subtree",
      "note": "The recursive call on root.right returns the height of the right child subtree.",
      "activeLine": 7,
      "codeInsight": "Evaluates heightDepthOfTree(root.right), giving Math.max the second child height to compare."
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
        "text": "Track current node and traversal state and update it only through Height / Depth of Tree's transition.",
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
    "correctText": "Correct. Height / Depth of Tree stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Height / Depth of Tree needs its own input, state, answer, and condition rather than another algorithm's page structure."
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
        "phase": "Base case",
        "title": "Check for an empty subtree",
        "note": "Null children return height 0 before the parent combines subtree heights.",
        "ruleLabel": "Height / Depth of Tree invariant",
        "rule": "Checks !root; a missing child contributes height 0 to its parent.",
        "activeNode": "4",
        "targetNode": "2",
        "replacementNode": "",
        "mutedNodes": [
          "5",
          "7"
        ]
      },
      {
        "phase": "Left height",
        "title": "Measure the left subtree",
        "note": "The recursive call on root.left returns the height of the left child subtree.",
        "ruleLabel": "Height / Depth of Tree invariant",
        "rule": "Evaluates heightDepthOfTree(root.left), so the visual focus moves to node 2 and its children.",
        "activeNode": "2",
        "targetNode": "1",
        "replacementNode": "3",
        "mutedNodes": [
          "6",
          "5",
          "7"
        ]
      },
      {
        "phase": "Right height",
        "title": "Measure the right subtree",
        "note": "The recursive call on root.right returns the height of the right child subtree.",
        "ruleLabel": "Height / Depth of Tree invariant",
        "rule": "Evaluates heightDepthOfTree(root.right), so the visual focus moves to node 6 and its children.",
        "activeNode": "6",
        "targetNode": "5",
        "replacementNode": "7",
        "mutedNodes": [
          "2",
          "1",
          "3"
        ]
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
        "mutedNodes": []
      }
    ]
  }
};
