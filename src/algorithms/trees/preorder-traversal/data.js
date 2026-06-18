// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "preorder-traversal",
  "title": "Preorder Traversal",
  "category": "Trees",
  "route": "/algorithms/trees/preorder-traversal",
  "phase": 2,
  "priority": "high",
  "visualizerType": "tree-traversal",
  "icon": "account_tree",
  "codePath": "./src/algorithms/trees/preorder-traversal/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Preorder Traversal is a Trees technique focused on tree result.",
  "problem": "Preorder Traversal relies on the recursive structure of a tree: solve the current node and combine child results.",
  "concept": "Preorder Traversal relies on the recursive structure of a tree: solve the current node and combine child results.",
  "logicSummary": "Check the base case, process the current node, recurse into children, and combine the returned values.",
  "transitionSummary": "Move from a node to its child or back from a child to its parent with updated state.",
  "codeInsight": "Tree code stays clean when every recursive call returns exactly the information the parent needs.",
  "realLifeExample": "Preorder Traversal appears when the input is root and the required result is tree result.",
  "whenToUse": "Use Preorder Traversal when a problem matches the Trees pattern and the expected state changes match a tree traversal dry run.",
  "memoryTrick": "Preorder Traversal: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A tree traversal walkthrough showing Preorder Traversal's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data Preorder Traversal receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by Preorder Traversal."
    },
    {
      "title": "Apply the transition",
      "text": "Run the tree traversal transition and update the algorithm-specific state."
    },
    {
      "title": "Return the answer",
      "text": "Stop at the correct condition and return the tracked result."
    }
  ],
  "variables": [
    {
      "name": "root",
      "purpose": "The concrete data Preorder Traversal receives before any state changes begin."
    },
    {
      "name": "current node and traversal state",
      "purpose": "The working information Preorder Traversal updates while it runs."
    },
    {
      "name": "tree result",
      "purpose": "The final value Preorder Traversal returns after the stop condition is met."
    },
    {
      "name": "node exists",
      "purpose": "The rule that decides whether Preorder Traversal continues, branches, or stops."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the Preorder Traversal input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that Preorder Traversal changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one tree traversal transition for Preorder Traversal.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final Preorder Traversal answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "O(n) over tree nodes.",
    "space": "O(h) recursion or traversal state."
  },
  "quiz": {
    "question": "Which state choice keeps Preorder Traversal correct?",
    "options": [
      {
        "key": "A",
        "text": "Track current node and traversal state and update it only through Preorder Traversal's transition.",
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
    "correctText": "Correct. Preorder Traversal stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Preorder Traversal needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "trees",
  "algorithmSlug": "preorder-traversal"
};
