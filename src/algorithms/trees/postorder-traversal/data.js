// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "postorder-traversal",
  "title": "Postorder Traversal",
  "category": "Trees",
  "route": "/algorithms/trees/postorder-traversal",
  "phase": 2,
  "priority": "high",
  "visualizerType": "tree-traversal",
  "icon": "account_tree",
  "codePath": "./src/algorithms/trees/postorder-traversal/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Postorder Traversal collects children before parents, which is useful when parent work depends on completed subtrees.",
  "problem": "Postorder Traversal collects children before parents, which is useful when parent work depends on completed subtrees.",
  "concept": "The recursive helper first walks node.left, then node.right, then pushes node.value.",
  "logicSummary": "Start at root, finish the left subtree, finish the right subtree, then visit the current node and return the collected result.",
  "transitionSummary": "Each step shows values entering result only after both child subtrees of that node are complete.",
  "codeInsight": "The output order is controlled by result.push(node.value) coming after both recursive calls.",
  "realLifeExample": "Postorder is useful for deleting a folder tree because files and child folders are handled before the parent folder.",
  "whenToUse": "Use Postorder Traversal when a parent should be processed after all descendants.",
  "memoryTrick": "Postorder means LRN: Left, Right, Node.",
  "visualizerCaption": "Explore Postorder Traversal through a sample teaching model, then compare it with the runnable result.",
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
      "text": "Recurse into the right subtree before visiting the node."
    },
    {
      "title": "Return tree result",
      "text": "Push the current node after both children are done."
    }
  ],
  "variables": [
    {
      "name": "root",
      "purpose": "The tree node where recursion or traversal begins."
    },
    {
      "name": "walk(node)",
      "purpose": "The recursive helper that applies left-right-node order."
    },
    {
      "name": "result",
      "purpose": "The output array that receives node values after both child subtrees finish."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Stop on null nodes; otherwise walk left, walk right, then push current value."
    }
  ],
  "dryRun": [
    {
      "label": "Root",
      "title": "Start traversal at root 4",
      "note": "The helper walk(root) starts at node 4, but 4 is output last.",
      "activeLine": 13,
      "codeInsight": "Calls walk(root), which starts the left-right-node traversal at value 4."
    },
    {
      "label": "Node state",
      "title": "Finish the left subtree",
      "note": "The traversal visits 1, then 3, then parent 2.",
      "activeLine": 9,
      "codeInsight": "Runs walk(node.left), so the left subtree finishes before the current node can be pushed."
    },
    {
      "label": "Child step",
      "title": "Finish the right subtree",
      "note": "The traversal visits 5, then 7, then parent 6 before returning to root 4.",
      "activeLine": 10,
      "codeInsight": "Runs walk(node.right), so the right subtree finishes before result.push(node.value)."
    },
    {
      "label": "Tree result",
      "title": "Push root last and return",
      "note": "After both subtrees finish, result.push adds 4 and the function returns [1, 3, 2, 5, 7, 6, 4].",
      "activeLine": 11,
      "codeInsight": "Pushes node.value after both child traversals, which makes root 4 the last output."
    }
  ],
  "complexity": {
    "time": "O(n) over tree nodes.",
    "space": "O(h) recursion or traversal state."
  },
  "quiz": {
    "question": "Which explanation best describes Postorder Traversal?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "Postorder Traversal collects children before parents, which is useful when parent work depends on completed subtrees.",
        "correct": true
      },
      {
        "key": "C",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      }
    ],
    "correctText": "Correct. Postorder Traversal collects children before parents, which is useful when parent work depends on completed subtrees.",
    "incorrectText": "Try again. Postorder Traversal collects children before parents, which is useful when parent work depends on completed subtrees. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "trees",
  "algorithmSlug": "postorder-traversal",
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
    "title": "Postorder Traversal tree state",
    "legend": [
      {
        "className": "current",
        "label": "Current call"
      },
      {
        "className": "target",
        "label": "Next subtree"
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
        "note": "walk(root) starts at node 4, but postorder outputs 4 only after both subtrees.",
        "ruleLabel": "Postorder Traversal invariant",
        "rule": "Postorder order is left, right, node; root 4 waits until every descendant is output.",
        "activeNode": "4",
        "targetNode": "2",
        "replacementNode": "",
        "mutedNodes": [
          "6",
          "5",
          "7"
        ],
        "nodeLabels": {
          "2": "2 left",
          "4": "4 wait"
        }
      },
      {
        "phase": "Left subtree",
        "title": "Output 1, 3, 2 from the left side",
        "note": "Node 2 is pushed after both children 1 and 3.",
        "ruleLabel": "Postorder Traversal invariant",
        "rule": "Node 2 follows the same left-right-node rule: visit 1, then 3, then 2.",
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
          "2": "2 #3",
          "3": "3 #2",
          "4": "4 wait"
        }
      },
      {
        "phase": "Right subtree",
        "title": "Output 5, 7, 6 from the right side",
        "note": "Node 6 is pushed after both children 5 and 7.",
        "ruleLabel": "Postorder Traversal invariant",
        "rule": "walk(node.right) finishes the right subtree before root 4 can be pushed.",
        "activeNode": "6",
        "targetNode": "5",
        "replacementNode": "7",
        "mutedNodes": [],
        "nodeLabels": {
          "1": "1 #1",
          "2": "2 #3",
          "3": "3 #2",
          "4": "4 wait",
          "5": "5 #4",
          "6": "6 #6",
          "7": "7 #5"
        }
      },
      {
        "phase": "Return result",
        "title": "Push root 4 last",
        "note": "After both subtrees finish, result.push adds 4 and returns [1, 3, 2, 5, 7, 6, 4].",
        "ruleLabel": "Postorder Traversal invariant",
        "rule": "The push line comes after both recursive calls, so the root is the final output value.",
        "activeNode": "4",
        "targetNode": "",
        "replacementNode": "4",
        "mutedNodes": [],
        "nodeLabels": {
          "1": "1 #1",
          "2": "2 #3",
          "3": "3 #2",
          "4": "4 #7",
          "5": "5 #4",
          "6": "6 #6",
          "7": "7 #5"
        }
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "A tree branches from a root. A child is one level below its parent; a leaf has no children.",
    "family": "Trees and links",
    "example": "Check node: Call walk(root) to begin the recursive traversal. Read node state: Recurse into the left subtree first. Move/combine: Recurse into the right subtree before visiting the node. Return tree result: Push the current node after both children are done.",
    "sampleInput": [
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
    "sampleResult": [
      1,
      3,
      2,
      5,
      7,
      6,
      4
    ],
    "sampleScope": "This is the result of the unedited JavaScript function with the sample arguments. Changing the input or code can change the result.",
    "terms": [
      [
        "Root",
        "The starting node of a tree."
      ],
      [
        "Subtree",
        "A node together with all of its descendants."
      ],
      [
        "Height",
        "The longest downward path; check whether the code counts nodes or edges."
      ]
    ],
    "pitfall": "Do not assume a tree is a binary search tree or balanced unless the problem guarantees it.",
    "checkpoint": "Explain this in your own words: Postorder Traversal collects children before parents, which is useful when parent work depends on completed subtrees."
  }
};
