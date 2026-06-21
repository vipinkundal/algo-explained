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
      "activeLine": 1,
      "codeInsight": "If root is missing, there are no levels to visit."
    },
    {
      "label": "Queue",
      "title": "Seed traversal queue",
      "note": "The root becomes the first discovered node.",
      "activeLine": 3,
      "codeInsight": "The root becomes the first discovered node."
    },
    {
      "label": "Visit",
      "title": "Process queue front",
      "note": "The front node is appended to output.",
      "activeLine": 6,
      "codeInsight": "The front node is appended to output."
    },
    {
      "label": "Children",
      "title": "Discover next level",
      "note": "Children are pushed to the queue for later visits.",
      "activeLine": 8,
      "codeInsight": "Children are pushed to the queue for later visits."
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
    "nodes": [
      {
        "id": "8",
        "label": "8",
        "x": 340,
        "y": 58
      },
      {
        "id": "4",
        "label": "4",
        "x": 190,
        "y": 150
      },
      {
        "id": "12",
        "label": "12",
        "x": 490,
        "y": 150
      },
      {
        "id": "2",
        "label": "2",
        "x": 110,
        "y": 255
      },
      {
        "id": "6",
        "label": "6",
        "x": 270,
        "y": 255
      },
      {
        "id": "10",
        "label": "10",
        "x": 420,
        "y": 255
      },
      {
        "id": "14",
        "label": "14",
        "x": 570,
        "y": 255
      }
    ],
    "edges": [
      {
        "from": "8",
        "to": "4"
      },
      {
        "from": "8",
        "to": "12"
      },
      {
        "from": "4",
        "to": "2"
      },
      {
        "from": "4",
        "to": "6"
      },
      {
        "from": "12",
        "to": "10"
      },
      {
        "from": "12",
        "to": "14"
      }
    ],
    "steps": [
      {
        "phase": "Root",
        "title": "Check for empty tree",
        "note": "If root is missing, there are no levels to visit.",
        "ruleLabel": "Level Order Traversal invariant",
        "rule": "If root is missing, there are no levels to visit.",
        "activeNode": "8",
        "targetNode": "4",
        "replacementNode": "",
        "mutedNodes": [
          "6",
          "10",
          "14"
        ]
      },
      {
        "phase": "Queue",
        "title": "Seed traversal queue",
        "note": "The root becomes the first discovered node.",
        "ruleLabel": "Level Order Traversal invariant",
        "rule": "The root becomes the first discovered node.",
        "activeNode": "4",
        "targetNode": "12",
        "replacementNode": "",
        "mutedNodes": [
          "6",
          "10",
          "14"
        ]
      },
      {
        "phase": "Visit",
        "title": "Process queue front",
        "note": "The front node is appended to output.",
        "ruleLabel": "Level Order Traversal invariant",
        "rule": "The front node is appended to output.",
        "activeNode": "12",
        "targetNode": "2",
        "replacementNode": "2",
        "mutedNodes": []
      },
      {
        "phase": "Children",
        "title": "Discover next level",
        "note": "Children are pushed to the queue for later visits.",
        "ruleLabel": "Level Order Traversal invariant",
        "rule": "Children are pushed to the queue for later visits.",
        "activeNode": "2",
        "targetNode": "6",
        "replacementNode": "6",
        "mutedNodes": []
      }
    ]
  }
};
