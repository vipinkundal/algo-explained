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
  "concept": "Lowest Common Ancestor relies on the recursive structure of a tree: solve the current node and combine child results.",
  "logicSummary": "Check the base case, process the current node, recurse into children, and combine the returned values.",
  "transitionSummary": "Move from a node to its child or back from a child to its parent with updated state.",
  "codeInsight": "Tree code stays clean when every recursive call returns exactly the information the parent needs.",
  "realLifeExample": "Lowest Common Ancestor appears when the input is root and the required result is tree result.",
  "whenToUse": "Use Lowest Common Ancestor when a problem matches the Trees pattern and the expected state changes match a tree paths dry run.",
  "memoryTrick": "Lowest Common Ancestor: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A tree paths walkthrough showing Lowest Common Ancestor's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data Lowest Common Ancestor receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by Lowest Common Ancestor."
    },
    {
      "title": "Apply the transition",
      "text": "Run the tree paths transition and update the algorithm-specific state."
    },
    {
      "title": "Return the answer",
      "text": "Stop at the correct condition and return the tracked result."
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
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the Lowest Common Ancestor input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that Lowest Common Ancestor changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one tree paths transition for Lowest Common Ancestor.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final Lowest Common Ancestor answer from the tracked state.",
      "activeLine": 8
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
  ]
};
