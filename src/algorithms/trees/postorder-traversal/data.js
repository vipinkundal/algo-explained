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
  "meaning": "Postorder Traversal is a Trees technique focused on tree result.",
  "problem": "Postorder Traversal relies on the recursive structure of a tree: solve the current node and combine child results.",
  "concept": "Postorder Traversal relies on the recursive structure of a tree: solve the current node and combine child results.",
  "logicSummary": "Check the base case, process the current node, recurse into children, and combine the returned values.",
  "transitionSummary": "Move from a node to its child or back from a child to its parent with updated state.",
  "codeInsight": "Tree code stays clean when every recursive call returns exactly the information the parent needs.",
  "realLifeExample": "Postorder Traversal appears when the input is root and the required result is tree result.",
  "whenToUse": "Use Postorder Traversal when a problem matches the Trees pattern and the expected state changes match a tree traversal dry run.",
  "memoryTrick": "Postorder Traversal: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A tree traversal walkthrough showing Postorder Traversal's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data Postorder Traversal receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by Postorder Traversal."
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
      "purpose": "The concrete data Postorder Traversal receives before any state changes begin."
    },
    {
      "name": "current node and traversal state",
      "purpose": "The working information Postorder Traversal updates while it runs."
    },
    {
      "name": "tree result",
      "purpose": "The final value Postorder Traversal returns after the stop condition is met."
    },
    {
      "name": "node exists",
      "purpose": "The rule that decides whether Postorder Traversal continues, branches, or stops."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the Postorder Traversal input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that Postorder Traversal changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one tree traversal transition for Postorder Traversal.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final Postorder Traversal answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "O(n) over tree nodes.",
    "space": "O(h) recursion or traversal state."
  },
  "quiz": {
    "question": "Which state choice keeps Postorder Traversal correct?",
    "options": [
      {
        "key": "A",
        "text": "Track current node and traversal state and update it only through Postorder Traversal's transition.",
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
    "correctText": "Correct. Postorder Traversal stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Postorder Traversal needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "trees",
  "algorithmSlug": "postorder-traversal"
};
