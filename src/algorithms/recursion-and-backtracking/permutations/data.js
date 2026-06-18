// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "permutations",
  "title": "Permutations",
  "category": "Recursion and Backtracking",
  "route": "/algorithms/backtracking/permutations",
  "phase": 2,
  "priority": "high",
  "visualizerType": "swap-tree",
  "icon": "school",
  "codePath": "./src/algorithms/recursion-and-backtracking/permutations/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Permutations is a Recursion and Backtracking technique focused on solutions.",
  "problem": "Permutations explores a decision tree by choosing, recursing, and undoing the choice before trying the next option.",
  "concept": "Permutations explores a decision tree by choosing, recursing, and undoing the choice before trying the next option.",
  "logicSummary": "Handle the base case, loop through valid choices, add one choice, recurse, then remove that choice.",
  "transitionSummary": "The transition is choose -> explore -> unchoose, which keeps sibling branches isolated.",
  "codeInsight": "The backtrack step is what keeps the state correct: every push must have a matching pop.",
  "realLifeExample": "Permutations appears when the input is choices and the required result is solutions.",
  "whenToUse": "Use Permutations when a problem matches the Recursion and Backtracking pattern and the expected state changes match a swap tree dry run.",
  "memoryTrick": "Permutations: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A swap tree walkthrough showing Permutations' input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data Permutations receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by Permutations."
    },
    {
      "title": "Apply the transition",
      "text": "Run the swap tree transition and update the algorithm-specific state."
    },
    {
      "title": "Return the answer",
      "text": "Stop at the correct condition and return the tracked result."
    }
  ],
  "variables": [
    {
      "name": "choices",
      "purpose": "The concrete data Permutations receives before any state changes begin."
    },
    {
      "name": "path",
      "purpose": "The partial decision path being built by the recursive search."
    },
    {
      "name": "solutions",
      "purpose": "All valid paths or the final recursive value requested by the problem."
    },
    {
      "name": "base case or invalid choice",
      "purpose": "Stop when the path is complete, invalid, or ready to be recorded."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the Permutations input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that Permutations changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one swap tree transition for Permutations.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final Permutations answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "O(n) for the educational reference implementation.",
    "space": "O(n) for tracked state when needed."
  },
  "quiz": {
    "question": "Which state choice keeps Permutations correct?",
    "options": [
      {
        "key": "A",
        "text": "Track path and update it only through Permutations' transition.",
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
    "correctText": "Correct. Permutations stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Permutations needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "recursion-and-backtracking",
  "algorithmSlug": "permutations"
};
