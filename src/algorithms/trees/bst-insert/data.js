// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "bst-insert",
  "title": "BST Insert",
  "category": "Trees",
  "route": "/algorithms/trees/bst-insert",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "bst-path",
  "icon": "account_tree",
  "codePath": "./src/algorithms/trees/bst-insert/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "BST Insert adds a value by following the binary-search-tree ordering rule until it reaches an empty child slot.",
  "problem": "Insert value 8 into the sample BST without breaking the left-smaller/right-larger invariant.",
  "concept": "Compare the value with each current node: smaller moves left, larger moves right, and a null child becomes the new node.",
  "logicSummary": "Start at root 4, move right to 6, move right to 7, then create 8 as the right child of 7.",
  "transitionSummary": "Each step narrows the only valid insertion path for value 8.",
  "codeInsight": "The recursive insert returns a copied node with one child replaced by the updated subtree.",
  "realLifeExample": "BST Insert is like placing a number into a sorted decision tree by following comparison signs until an empty slot appears.",
  "whenToUse": "Use BST Insert when values must remain searchable by the BST ordering rule.",
  "memoryTrick": "BST Insert: compare, descend, create at null.",
  "visualizerCaption": "The animation inserts 8 along path 4 -> 6 -> 7 -> right child.",
  "logicSteps": [
    {
      "title": "Check node",
      "text": "Start insertion from the current tree root."
    },
    {
      "title": "Read node state",
      "text": "Compare the inserted value with the current node."
    },
    {
      "title": "Move/combine",
      "text": "Move to the child that can contain the new value."
    },
    {
      "title": "Return tree result",
      "text": "Create the new node when the recursive call reaches null."
    }
  ],
  "variables": [
    {
      "name": "root, value",
      "purpose": "root is the current BST, and value is the new value to insert."
    },
    {
      "name": "copy",
      "purpose": "A shallow copy of the current node whose left or right child can be replaced."
    },
    {
      "name": "inserted node",
      "purpose": "The new { value: 8, left: null, right: null } node created at the empty slot."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Move left for smaller values, right for larger values, and return a new node for null."
    }
  ],
  "dryRun": [
    {
      "label": "Root",
      "title": "Start at root 4",
      "note": "Value 8 is larger than root 4, so insertion must move right.",
      "activeLine": 14,
      "codeInsight": "Calls insert(tree, value), starting the recursive insert for value 8."
    },
    {
      "label": "Node state",
      "title": "Move right from 4 and 6",
      "note": "8 is greater than 4 and greater than 6, so both comparisons take the right branch.",
      "activeLine": 10,
      "codeInsight": "Updates copy.right because nextValue is greater than the current copy.value."
    },
    {
      "label": "Child step",
      "title": "Move right from 7",
      "note": "8 is greater than 7, and 7 has no right child yet.",
      "activeLine": 7,
      "codeInsight": "When insert receives null, it returns a new node for value 8."
    },
    {
      "label": "Tree result",
      "title": "Return updated BST",
      "note": "The new node 8 is connected as the right child of 7.",
      "activeLine": 11,
      "codeInsight": "Returns copy so the updated child link reconnects back up the recursive path."
    }
  ],
  "complexity": {
    "time": "O(n) for the educational reference implementation.",
    "space": "O(n) for tracked state when needed."
  },
  "quiz": {
    "question": "Which state choice keeps BST Insert correct?",
    "options": [
      {
        "key": "A",
        "text": "Follow the ordered path and create the new value only at the null child slot.",
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
    "correctText": "Correct. The BST order is preserved because every comparison chooses the only valid child.",
    "incorrectText": "Not quite. Inserting at the wrong child would break the left-smaller/right-larger invariant."
  },
  "categorySlug": "trees",
  "algorithmSlug": "bst-insert",
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
    8
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
    "title": "BST Insert tree state",
    "legend": [
      {
        "className": "current",
        "label": "Current node"
      },
      {
        "className": "target",
        "label": "Insert value"
      },
      {
        "className": "replacement",
        "label": "New link"
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
      },
      {
        "id": "8",
        "label": "8",
        "x": 625,
        "y": 335
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
      },
      {
        "from": "7",
        "to": "8"
      }
    ],
    "steps": [
      {
        "phase": "Root",
        "title": "Start at root 4",
        "note": "Value 8 is greater than 4, so the insert path goes right.",
        "ruleLabel": "BST Insert invariant",
        "rule": "The new value must stay in the right subtree of every smaller node on the path.",
        "activeNode": "4",
        "targetNode": "8",
        "replacementNode": "",
        "mutedNodes": [
          "1",
          "2",
          "3",
          "5",
          "7"
        ],
        "nodeLabels": {
          "4": "4 < 8",
          "8": "8 new"
        }
      },
      {
        "phase": "Descend",
        "title": "Move right through 6",
        "note": "8 is greater than 6, so insertion continues to 6.right.",
        "ruleLabel": "BST Insert invariant",
        "rule": "nextValue > copy.value updates copy.right with the recursive insert result.",
        "activeNode": "6",
        "targetNode": "8",
        "replacementNode": "",
        "mutedNodes": [
          "1",
          "2",
          "3",
          "5"
        ],
        "nodeLabels": {
          "4": "4 path",
          "6": "6 < 8",
          "8": "8 new"
        }
      },
      {
        "phase": "Create",
        "title": "Create 8 after node 7",
        "note": "8 is greater than 7, and the right child is null, so the base case creates node 8.",
        "ruleLabel": "BST Insert invariant",
        "rule": "if (!node) returns { value: 8, left: null, right: null }.",
        "activeNode": "7",
        "targetNode": "8",
        "replacementNode": "8",
        "mutedNodes": [
          "1",
          "2",
          "3",
          "5"
        ],
        "nodeLabels": {
          "7": "7 < 8",
          "8": "8 inserted"
        }
      },
      {
        "phase": "Return",
        "title": "Return updated BST",
        "note": "The recursive copies reconnect so 8 becomes the right child of 7.",
        "ruleLabel": "BST Insert invariant",
        "rule": "Returning copy preserves the original order while carrying the new right-child link upward.",
        "activeNode": "4",
        "targetNode": "8",
        "replacementNode": "8",
        "mutedNodes": [],
        "nodeLabels": {
          "4": "4",
          "6": "6",
          "7": "7",
          "8": "8 new"
        }
      }
    ]
  }
};
