// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this data-structure page without touching app.js.

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
  "meaning": "BST Insert is a Trees technique focused on tree result.",
  "problem": "BST Insert relies on the recursive structure of a tree: solve the current node and combine child results.",
  "concept": "BST Insert relies on the recursive structure of a tree: solve the current node and combine child results.",
  "logicSummary": "Check the base case, process the current node, recurse into children, and combine the returned values.",
  "transitionSummary": "Move from a node to its child or back from a child to its parent with updated state.",
  "codeInsight": "Tree code stays clean when every recursive call returns exactly the information the parent needs.",
  "realLifeExample": "BST Insert appears when the input is root and the required result is tree result.",
  "whenToUse": "Use BST Insert when a problem matches the Trees pattern and the expected state changes match a bst path dry run.",
  "memoryTrick": "BST Insert: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A bst path walkthrough showing BST Insert's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data BST Insert receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by BST Insert."
    },
    {
      "title": "Apply the transition",
      "text": "Run the bst path transition and update the algorithm-specific state."
    },
    {
      "title": "Return the answer",
      "text": "Stop at the correct condition and return the tracked result."
    }
  ],
  "variables": [
    {
      "name": "input",
      "purpose": "The numeric or collection input used by the bit, math, or foundation routine."
    },
    {
      "name": "current node and recursion state",
      "purpose": "The traversal, search, or balancing state attached to the current tree node. This page visualizes it as bst path."
    },
    {
      "name": "tree result",
      "purpose": "The value produced by bstInsert after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Move from a node to its child or back from a child to its parent with updated state. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the BST Insert input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that BST Insert changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one bst path transition for BST Insert.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final BST Insert answer from the tracked state.",
      "activeLine": 8
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
        "text": "Track current node and traversal state and update it only through BST Insert's transition.",
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
    "correctText": "Correct. BST Insert stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. BST Insert needs its own input, state, answer, and condition rather than another algorithm's page structure."
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
  ]
};
