// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "bst-delete",
  "title": "BST Delete",
  "category": "Trees",
  "route": "/algorithms/trees/bst-delete",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "bst-restructure",
  "icon": "account_tree",
  "codePath": "./src/algorithms/trees/bst-delete/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "BST Delete is a Trees technique focused on tree result.",
  "problem": "BST Delete relies on the recursive structure of a tree: solve the current node and combine child results.",
  "concept": "BST Delete relies on the recursive structure of a tree: solve the current node and combine child results.",
  "logicSummary": "Check the base case, process the current node, recurse into children, and combine the returned values.",
  "transitionSummary": "Move from a node to its child or back from a child to its parent with updated state.",
  "codeInsight": "Tree code stays clean when every recursive call returns exactly the information the parent needs.",
  "realLifeExample": "BST Delete appears when the input is root and the required result is tree result.",
  "whenToUse": "Use BST Delete when a problem matches the Trees pattern and the expected state changes match a bst restructure dry run.",
  "memoryTrick": "BST Delete: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A bst restructure walkthrough showing BST Delete's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data BST Delete receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by BST Delete."
    },
    {
      "title": "Apply the transition",
      "text": "Run the bst restructure transition and update the algorithm-specific state."
    },
    {
      "title": "Return the answer",
      "text": "Stop at the correct condition and return the tracked result."
    }
  ],
  "variables": [
    {
      "name": "root",
      "purpose": "The concrete data BST Delete receives before any state changes begin."
    },
    {
      "name": "current node and traversal state",
      "purpose": "The working information BST Delete updates while it runs."
    },
    {
      "name": "tree result",
      "purpose": "The final value BST Delete returns after the stop condition is met."
    },
    {
      "name": "node exists",
      "purpose": "The rule that decides whether BST Delete continues, branches, or stops."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the BST Delete input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that BST Delete changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one bst restructure transition for BST Delete.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final BST Delete answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "O(n) for the educational reference implementation.",
    "space": "O(n) for tracked state when needed."
  },
  "quiz": {
    "question": "Which state choice keeps BST Delete correct?",
    "options": [
      {
        "key": "A",
        "text": "Track current node and traversal state and update it only through BST Delete's transition.",
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
    "correctText": "Correct. BST Delete stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. BST Delete needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "trees",
  "algorithmSlug": "bst-delete"
};
