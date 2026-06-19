// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "height-depth-of-tree",
  "title": "Height / Depth of Tree",
  "category": "Trees",
  "route": "/algorithms/trees/height-depth-of-tree",
  "phase": 3,
  "priority": "high",
  "visualizerType": "tree-height",
  "icon": "account_tree",
  "codePath": "./src/algorithms/trees/height-depth-of-tree/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Height / Depth of Tree is a Trees technique focused on tree result.",
  "problem": "Height / Depth of Tree relies on the recursive structure of a tree: solve the current node and combine child results.",
  "concept": "Height / Depth of Tree relies on the recursive structure of a tree: solve the current node and combine child results.",
  "logicSummary": "Check the base case, process the current node, recurse into children, and combine the returned values.",
  "transitionSummary": "Move from a node to its child or back from a child to its parent with updated state.",
  "codeInsight": "Tree code stays clean when every recursive call returns exactly the information the parent needs.",
  "realLifeExample": "Height / Depth of Tree appears when the input is root and the required result is tree result.",
  "whenToUse": "Use Height / Depth of Tree when a problem matches the Trees pattern and the expected state changes match a tree height dry run.",
  "memoryTrick": "Height / Depth of Tree: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A tree height walkthrough showing Height / Depth of Tree's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data Height / Depth of Tree receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by Height / Depth of Tree."
    },
    {
      "title": "Apply the transition",
      "text": "Run the tree height transition and update the algorithm-specific state."
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
      "purpose": "The traversal, search, or balancing state attached to the current tree node. This page visualizes it as tree height."
    },
    {
      "name": "tree result",
      "purpose": "The value produced by heightDepthOfTree after the maintained state reaches the stop rule."
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
      "note": "Read the Height / Depth of Tree input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that Height / Depth of Tree changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one tree height transition for Height / Depth of Tree.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final Height / Depth of Tree answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "O(n) over tree nodes.",
    "space": "O(h) recursion or traversal state."
  },
  "quiz": {
    "question": "Which state choice keeps Height / Depth of Tree correct?",
    "options": [
      {
        "key": "A",
        "text": "Track current node and traversal state and update it only through Height / Depth of Tree's transition.",
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
    "correctText": "Correct. Height / Depth of Tree stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Height / Depth of Tree needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "trees",
  "algorithmSlug": "height-depth-of-tree",
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
  ]
};
