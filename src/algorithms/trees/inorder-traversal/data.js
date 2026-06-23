// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "inorder-traversal",
  "title": "Inorder Traversal",
  "category": "Trees",
  "route": "/algorithms/trees/inorder-traversal",
  "phase": 2,
  "priority": "high",
  "visualizerType": "tree-traversal",
  "icon": "account_tree",
  "codePath": "./src/algorithms/trees/inorder-traversal/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Inorder Traversal visits a binary tree in left subtree, current node, then right subtree order.",
  "problem": "Inorder Traversal collects every node value while preserving the left-node-right traversal rule.",
  "concept": "The recursive helper first walks node.left, then pushes node.value, then walks node.right.",
  "logicSummary": "Start at root, recurse into the left subtree, visit the current node, recurse into the right subtree, and return the collected result.",
  "transitionSummary": "Each step shows how values enter the result only after the left subtree of that node is finished.",
  "codeInsight": "The output order is controlled by the position of result.push(node.value) between the left and right recursive calls.",
  "realLifeExample": "In a binary search tree, inorder traversal lists values in sorted order.",
  "whenToUse": "Use Inorder Traversal when you need left-to-right tree order, especially sorted output from a BST.",
  "memoryTrick": "Inorder means LNR: Left, Node, Right.",
  "visualizerCaption": "The animation shows values entering result in inorder sequence: 1, 2, 3, 4, 5, 6, 7.",
  "logicSteps": [
    {
      "title": "Check node",
      "text": "Call walk(root) to begin the recursive traversal."
    },
    {
      "title": "Read node state",
      "text": "Recurse into the left subtree first."
    },
    {
      "title": "Move/combine",
      "text": "Push the current node after its left subtree is done."
    },
    {
      "title": "Return tree result",
      "text": "Traverse the right subtree and return the final result."
    }
  ],
  "variables": [
    {
      "name": "root",
      "purpose": "The tree node where recursion or traversal begins."
    },
    {
      "name": "walk(node)",
      "purpose": "The recursive helper that applies left-node-right order."
    },
    {
      "name": "result",
      "purpose": "The output array that receives node values exactly when they are visited."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Stop on null nodes; otherwise walk left, push current value, then walk right."
    }
  ],
  "dryRun": [
    {
      "label": "Root",
      "title": "Start traversal at root 4",
      "note": "The helper walk(root) starts at node 4, but 4 is not output until its left subtree is done.",
      "activeLine": 13,
      "codeInsight": "Calls walk(root), which starts the left-node-right traversal at value 4."
    },
    {
      "label": "Node state",
      "title": "Walk the left subtree first",
      "note": "The traversal enters node 2, then visits 1, 2, and 3 before returning to root 4.",
      "activeLine": 9,
      "codeInsight": "Runs walk(node.left), so every node in the left subtree is visited before the current node is pushed."
    },
    {
      "label": "Child step",
      "title": "Push the current node",
      "note": "After the left subtree returns [1, 2, 3], result.push adds root value 4.",
      "activeLine": 10,
      "codeInsight": "Pushes node.value only after walk(node.left), which is why 4 appears after 1, 2, and 3."
    },
    {
      "label": "Tree result",
      "title": "Return inorder output",
      "note": "The right subtree contributes 5, 6, and 7, producing [1, 2, 3, 4, 5, 6, 7].",
      "activeLine": 14,
      "codeInsight": "Returns result after the traversal has pushed values in left-node-right order."
    }
  ],
  "complexity": {
    "time": "O(n) over tree nodes.",
    "space": "O(h) recursion or traversal state."
  },
  "quiz": {
    "question": "Which state choice keeps Inorder Traversal correct?",
    "options": [
      {
        "key": "A",
        "text": "Visit left subtree first, then push the current node, then visit the right subtree.",
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
    "correctText": "Correct. Inorder Traversal is exactly left, node, right.",
    "incorrectText": "Not quite. Moving result.push before or after both recursive calls changes the traversal order."
  },
  "categorySlug": "trees",
  "algorithmSlug": "inorder-traversal",
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
      "id": "ds-binary-tree-traversal",
      "title": "Binary Tree Traversal",
      "label": "C/C++ tree source"
    },
    {
      "id": "ds-binary-tree-level-order",
      "title": "Binary Tree Level Order Traversal",
      "label": "C/C++ tree source"
    }
  ],
  "animation": {
    "type": "tree-operation",
    "title": "Inorder Traversal tree state",
    "legend": [
      {
        "className": "current",
        "label": "Current call"
      },
      {
        "className": "target",
        "label": "Next visit"
      },
      {
        "className": "replacement",
        "label": "Output so far"
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
        "title": "Start traversal at root 4",
        "note": "walk(root) starts at node 4, then immediately prepares to traverse the left subtree.",
        "ruleLabel": "Inorder Traversal invariant",
        "rule": "Inorder order is left, node, right; root 4 waits until nodes 1, 2, and 3 are output.",
        "activeNode": "4",
        "targetNode": "2",
        "replacementNode": "",
        "mutedNodes": [
          "6",
          "5",
          "7"
        ],
        "nodeLabels": {
          "4": "4 wait",
          "2": "2 left"
        }
      },
      {
        "phase": "Left subtree",
        "title": "Output 1, 2, 3 from the left side",
        "note": "walk(node.left) visits the left subtree before root 4, producing [1, 2, 3].",
        "ruleLabel": "Inorder Traversal invariant",
        "rule": "Node 2 follows the same left-node-right rule: visit 1, then 2, then 3.",
        "activeNode": "2",
        "targetNode": "1",
        "replacementNode": "3",
        "mutedNodes": [
          "6",
          "5",
          "7"
        ],
        "nodeLabels": {
          "1": "1 #1",
          "2": "2 #2",
          "3": "3 #3",
          "4": "4 wait"
        }
      },
      {
        "phase": "Visit root",
        "title": "Push root 4 after the left subtree",
        "note": "result.push(node.value) adds 4 only after [1, 2, 3] is already in result.",
        "ruleLabel": "Inorder Traversal invariant",
        "rule": "The push line sits between walk(node.left) and walk(node.right), so 4 becomes the fourth output value.",
        "activeNode": "4",
        "targetNode": "6",
        "replacementNode": "4",
        "mutedNodes": [
          "5",
          "7"
        ],
        "nodeLabels": {
          "1": "1 #1",
          "2": "2 #2",
          "3": "3 #3",
          "4": "4 #4",
          "6": "6 right"
        }
      },
      {
        "phase": "Return result",
        "title": "Finish with the right subtree",
        "note": "The right subtree contributes 5, 6, and 7, so the final inorder result is [1, 2, 3, 4, 5, 6, 7].",
        "ruleLabel": "Inorder Traversal invariant",
        "rule": "After walk(node.right) finishes, return result exposes the completed left-node-right order.",
        "activeNode": "6",
        "targetNode": "5",
        "replacementNode": "6",
        "mutedNodes": [],
        "nodeLabels": {
          "1": "1 #1",
          "2": "2 #2",
          "3": "3 #3",
          "4": "4 #4",
          "5": "5 #5",
          "6": "6 #6",
          "7": "7 #7"
        }
      }
    ]
  }
};
