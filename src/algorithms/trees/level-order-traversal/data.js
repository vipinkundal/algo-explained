// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "level-order-traversal",
  "title": "Level Order Traversal",
  "category": "Trees",
  "route": "/algorithms/trees/level-order-traversal",
  "phase": 2,
  "priority": "high",
  "visualizerType": "tree-levels",
  "icon": "account_tree",
  "codePath": "./src/algorithms/trees/level-order-traversal/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Level Order Traversal visits a tree breadth-first, reading every node on one level before moving to the next.",
  "problem": "Level Order Traversal uses a queue so nodes are processed in the same order their parents discover them.",
  "concept": "Level-order traversal is useful when tree nodes must be processed by depth from top to bottom. Use this when closer-to-root nodes must be handled before deeper nodes.",
  "logicSummary": "Start with the root in a queue, visit the front node, append its value, then enqueue children.",
  "transitionSummary": "Each step removes the next queued node and appends its children to the back.",
  "codeInsight": "The queue is the invariant: it always holds the nodes that have been discovered but not visited yet.",
  "realLifeExample": "Use it when rendering a family tree by rows, scanning a folder tree by depth, or finding nodes closest to the root first.",
  "whenToUse": "Use Level Order Traversal when tree nodes must be processed by depth from top to bottom.",
  "memoryTrick": "Level Order Traversal: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Level Order Traversal is shown as breadth-first queue traversal. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Check root",
      "text": "Return an empty result for an empty tree."
    },
    {
      "title": "Seed queue",
      "text": "Put the root in the BFS queue."
    },
    {
      "title": "Visit front",
      "text": "Append the next queued node value."
    },
    {
      "title": "Enqueue children",
      "text": "Push left and right children for the next levels."
    }
  ],
  "variables": [
    {
      "name": "root",
      "purpose": "The first node to visit. If it is missing, the traversal returns an empty list."
    },
    {
      "name": "queue",
      "purpose": "Nodes discovered but not visited yet. Its first-in, first-out order preserves tree levels."
    },
    {
      "name": "node",
      "purpose": "The current queue item being visited; its value is copied into the output."
    },
    {
      "name": "order",
      "purpose": "The final list of node values in breadth-first order."
    }
  ],
  "dryRun": [
    {
      "label": "Root",
      "title": "Check for empty tree",
      "note": "If root is missing, there are no levels to visit.",
      "activeLine": 6,
      "codeInsight": "Checks !root; an empty tree returns [] before the queue is created."
    },
    {
      "label": "Queue",
      "title": "Seed traversal queue",
      "note": "The root becomes the first discovered node.",
      "activeLine": 8,
      "codeInsight": "Creates queue = [root], so node 4 is the first node waiting to be visited."
    },
    {
      "label": "Visit",
      "title": "Process queue front",
      "note": "The front node is appended to output.",
      "activeLine": 11,
      "codeInsight": "Pushes node.value into order; visiting root 4 starts the breadth-first output."
    },
    {
      "label": "Children",
      "title": "Discover next level",
      "note": "Children are pushed to the queue for later visits.",
      "activeLine": 12,
      "codeInsight": "Enqueues node.left and then node.right, so children 2 and 6 wait behind the visited root."
    }
  ],
  "complexity": {
    "time": "O(n) over tree nodes.",
    "space": "O(w) for the queue, where w is the maximum tree width."
  },
  "quiz": {
    "question": "Which state choice keeps Level Order Traversal correct?",
    "options": [
      {
        "key": "A",
        "text": "Track a queue of discovered nodes and visit them in first-in, first-out order.",
        "correct": true
      },
      {
        "key": "B",
        "text": "Use recursive return values from children to decide the next node.",
        "correct": false
      },
      {
        "key": "C",
        "text": "Use a stack so the deepest node is always visited first.",
        "correct": false
      }
    ],
    "correctText": "Correct. The queue is what keeps the traversal breadth-first.",
    "incorrectText": "Not quite. Level Order Traversal depends on FIFO queue order, not recursion order or stack order."
  },
  "categorySlug": "trees",
  "algorithmSlug": "level-order-traversal",
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
      "id": "ds-binary-tree-creation",
      "title": "Binary Tree Creation",
      "label": "C/C++ tree source"
    },
    {
      "id": "ds-binary-tree-traversal",
      "title": "Binary Tree Traversal",
      "label": "C/C++ tree source"
    },
    {
      "id": "ds-binary-tree-level-order",
      "title": "Binary Tree Level Order Traversal",
      "label": "C/C++ tree source"
    },
    {
      "id": "ds-trees-height-and-count",
      "title": "Binary Tree Height and Node Count",
      "label": "C/C++ tree source"
    }
  ],
  "animation": {
    "type": "tree-operation",
    "title": "Level Order Traversal tree state",
    "legend": [
      {
        "className": "current",
        "label": "Visiting"
      },
      {
        "className": "target",
        "label": "Queued next"
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
        "title": "Check for empty tree",
        "note": "If root is missing, there are no levels to visit.",
        "ruleLabel": "Level Order Traversal invariant",
        "rule": "The sample root is 4, so traversal continues instead of returning [].",
        "activeNode": "4",
        "targetNode": "",
        "replacementNode": "",
        "mutedNodes": [
          "1",
          "2",
          "3",
          "5",
          "6",
          "7"
        ],
        "nodeLabels": {
          "4": "4 root"
        }
      },
      {
        "phase": "Queue",
        "title": "Seed traversal queue",
        "note": "The root becomes the first discovered node.",
        "ruleLabel": "Level Order Traversal invariant",
        "rule": "queue = [4], so the root is first in line for breadth-first processing.",
        "activeNode": "4",
        "targetNode": "4",
        "replacementNode": "",
        "mutedNodes": [
          "1",
          "2",
          "3",
          "5",
          "6",
          "7"
        ],
        "nodeLabels": {
          "4": "4 q1"
        }
      },
      {
        "phase": "Visit",
        "title": "Process queue front",
        "note": "The front node is appended to output.",
        "ruleLabel": "Level Order Traversal invariant",
        "rule": "order.push(node.value) appends 4 before any child values are visited.",
        "activeNode": "4",
        "targetNode": "2",
        "replacementNode": "4",
        "mutedNodes": [
          "1",
          "3",
          "5",
          "7"
        ],
        "nodeLabels": {
          "4": "4 #1",
          "2": "2 next",
          "6": "6 next"
        }
      },
      {
        "phase": "Children",
        "title": "Discover next level",
        "note": "Children are pushed to the queue for later visits.",
        "ruleLabel": "Level Order Traversal invariant",
        "rule": "After processing all queued nodes level by level, order is [4, 2, 6, 1, 3, 5, 7].",
        "activeNode": "2",
        "targetNode": "6",
        "replacementNode": "4",
        "mutedNodes": [],
        "nodeLabels": {
          "4": "4 #1",
          "2": "2 #2",
          "6": "6 #3",
          "1": "1 #4",
          "3": "3 #5",
          "5": "5 #6",
          "7": "7 #7"
        }
      }
    ]
  }
};
