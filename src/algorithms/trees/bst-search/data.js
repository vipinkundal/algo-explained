// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "bst-search",
  "title": "BST Search",
  "category": "Trees",
  "route": "/algorithms/trees/bst-search",
  "phase": 2,
  "priority": "high",
  "visualizerType": "bst-path",
  "icon": "account_tree",
  "codePath": "./src/algorithms/trees/bst-search/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "BST Search is a Trees technique focused on index or insertion point.",
  "problem": "BST Search narrows where a target can be by scanning or shrinking a candidate interval.",
  "concept": "BST Search narrows where a target can be by scanning or shrinking a candidate interval.",
  "logicSummary": "Compare the current value with the target, discard impossible positions, and keep the best candidate when needed.",
  "transitionSummary": "Each transition either advances one position or moves a boundary inward.",
  "codeInsight": "The boundary variables are the important state; every branch must make the remaining search interval smaller.",
  "realLifeExample": "BST Search appears when the input is array, target and the required result is index or insertion point.",
  "whenToUse": "Use BST Search when a problem matches the Trees pattern and the expected state changes match a bst path dry run.",
  "memoryTrick": "BST Search: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A bst path walkthrough showing BST Search's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data BST Search receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by BST Search."
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
      "name": "array, target",
      "purpose": "array: The ordered or unsorted list the algorithm scans, partitions, sorts, or transforms. target: The value or condition each comparison is trying to locate."
    },
    {
      "name": "current node and recursion state",
      "purpose": "The traversal, search, or balancing state attached to the current tree node. This page visualizes it as bst path."
    },
    {
      "name": "tree result",
      "purpose": "The value produced by bstSearch after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Each transition either advances one position or moves a boundary inward. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the BST Search input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that BST Search changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one bst path transition for BST Search.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final BST Search answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "O(n) for the educational reference implementation.",
    "space": "O(n) for tracked state when needed."
  },
  "quiz": {
    "question": "Which state choice keeps BST Search correct?",
    "options": [
      {
        "key": "A",
        "text": "Track search window and update it only through BST Search's transition.",
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
    "correctText": "Correct. BST Search stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. BST Search needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "trees",
  "algorithmSlug": "bst-search",
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
    5
  ]
};
