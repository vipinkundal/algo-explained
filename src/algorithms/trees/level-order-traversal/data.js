// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this data-structure page without touching app.js.

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
  "concept": "Level Order Traversal is breadth-first traversal for trees: visit the root, then its children, then the next level.",
  "logicSummary": "Start with the root in a queue, visit the front node, append its value, then enqueue its left and right children.",
  "transitionSummary": "Each step removes the next queued node from the front position and adds its children to the back of the queue.",
  "codeInsight": "The queue is the invariant: it always holds the nodes that have been discovered but not visited yet.",
  "realLifeExample": "Use it when rendering a family tree by rows, scanning a folder tree by depth, or finding nodes closest to the root first.",
  "whenToUse": "Use Level Order Traversal when tree nodes must be processed by depth from top to bottom.",
  "memoryTrick": "Level Order Traversal: queue the root, visit front, push children, repeat.",
  "visualizerCaption": "A breadth-first tree walkthrough showing the queue, current node, child enqueue step, and output order.",
  "logicSteps": [
    {
      "title": "Start at root",
      "text": "If the root is missing, the traversal is empty; otherwise the root is the first queued node."
    },
    {
      "title": "Create queue",
      "text": "Keep discovered nodes in first-in, first-out order so earlier levels are visited first."
    },
    {
      "title": "Visit next node",
      "text": "Read the front queued node and append its value to the traversal output."
    },
    {
      "title": "Queue children",
      "text": "Add the current node's left and right children so the next level is visited after this one."
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
      "label": "Root check",
      "title": "Check for an empty tree",
      "note": "If root is missing, there are no levels to scan, so the function returns an empty list.",
      "activeLine": 6
    },
    {
      "label": "Queue setup",
      "title": "Seed the BFS queue",
      "note": "Put the root in the queue and create the output list that will receive visited values.",
      "activeLine": 8
    },
    {
      "label": "Visit front",
      "title": "Process the next queued node",
      "note": "Read the next queue item and append its value to the level-order output.",
      "activeLine": 11
    },
    {
      "label": "Enqueue kids",
      "title": "Discover the next level",
      "note": "Push the left and right children to the back of the queue, then continue until the queue is exhausted.",
      "activeLine": 12
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
  ]
};
