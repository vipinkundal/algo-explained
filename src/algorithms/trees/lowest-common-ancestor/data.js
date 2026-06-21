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
  "meaning": "Lowest Common Ancestor is a Trees technique focused on tree result.",
  "problem": "Lowest Common Ancestor relies on the recursive structure of a tree: solve the current node and combine child results.",
  "concept": "Lowest Common Ancestor is useful when algorithm state behavior is the clearest model for the data changes. Use this when the problem is naturally described by page-specific invariant.",
  "logicSummary": "Read the next value or operation, maintain page-specific invariant, then update the state described by this algorithm.",
  "transitionSummary": "Each step changes only the part of the algorithm state required to preserve the invariant.",
  "codeInsight": "Tree code stays clean when every recursive call returns exactly the information the parent needs.",
  "realLifeExample": "Lowest Common Ancestor appears when the input is root and the required result is tree result.",
  "whenToUse": "Use Lowest Common Ancestor when a problem matches the Trees pattern and the expected state changes match a tree paths dry run.",
  "memoryTrick": "Lowest Common Ancestor: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Lowest Common Ancestor is shown as algorithm state state changes. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Read algorithm state",
      "text": "Identify the next command, value, node, or library call."
    },
    {
      "title": "Inspect invariant",
      "text": "Look at the active algorithm state fields."
    },
    {
      "title": "State change",
      "text": "update the state described by this algorithm."
    },
    {
      "title": "Read result",
      "text": "Return the emitted value or updated structure."
    }
  ],
  "variables": [
    {
      "name": "root",
      "purpose": "The tree node where recursion or traversal begins."
    },
    {
      "name": "current node and recursion state",
      "purpose": "The traversal, search, or balancing state attached to the current tree node. This page visualizes it as tree paths."
    },
    {
      "name": "tree result",
      "purpose": "The value produced by lowestCommonAncestor after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Move from a node to its child or back from a child to its parent with updated state. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Algorithm State",
      "title": "Read algorithm state action",
      "note": "The code receives the next value or command.",
      "activeLine": 7,
      "codeInsight": "Stores left so the algorithm can reuse this value without recomputing it."
    },
    {
      "label": "Invariant",
      "title": "Inspect algorithm state",
      "note": "The active state must still satisfy page-specific invariant.",
      "activeLine": 7,
      "codeInsight": "Stores left so the algorithm can reuse this value without recomputing it."
    },
    {
      "label": "State change",
      "title": "Update the state described by this algorithm",
      "note": "Only the necessary algorithm state fields are changed.",
      "activeLine": 6,
      "codeInsight": "Checks !root || root.value === first || root.value === second; only the branch that preserves Lowest Common Ancestor's invariant is allowed to change state."
    },
    {
      "label": "Result",
      "title": "Return visible result",
      "note": "The return value or printed state confirms the operation.",
      "activeLine": 10,
      "codeInsight": "Returns left !== null ? left : right, the value produced after Lowest Common Ancestor's state changes are complete."
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
        "text": "Track current node and traversal state and update it only through Lowest Common Ancestor's transition.",
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
    "correctText": "Correct. Lowest Common Ancestor stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Lowest Common Ancestor needs its own input, state, answer, and condition rather than another algorithm's page structure."
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
        "phase": "Algorithm State",
        "title": "Read algorithm state action",
        "note": "The code receives the next value or command.",
        "ruleLabel": "Lowest Common Ancestor invariant",
        "rule": "Stores left so the algorithm can reuse this value without recomputing it.",
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
        "phase": "Invariant",
        "title": "Inspect algorithm state",
        "note": "The active state must still satisfy page-specific invariant.",
        "ruleLabel": "Lowest Common Ancestor invariant",
        "rule": "Stores left so the algorithm can reuse this value without recomputing it.",
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
        "phase": "State change",
        "title": "Update the state described by this algorithm",
        "note": "Only the necessary algorithm state fields are changed.",
        "ruleLabel": "Lowest Common Ancestor invariant",
        "rule": "Checks !root || root.value === first || root.value === second; only the branch that preserves Lowest Common Ancestor's invariant is allowed to change state.",
        "activeNode": "12",
        "targetNode": "2",
        "replacementNode": "2",
        "mutedNodes": []
      },
      {
        "phase": "Result",
        "title": "Return visible result",
        "note": "The return value or printed state confirms the operation.",
        "ruleLabel": "Lowest Common Ancestor invariant",
        "rule": "Returns left !== null ? left : right, the value produced after Lowest Common Ancestor's state changes are complete.",
        "activeNode": "2",
        "targetNode": "6",
        "replacementNode": "6",
        "mutedNodes": []
      }
    ]
  }
};
