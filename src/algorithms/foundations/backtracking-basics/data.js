// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "backtracking-basics",
  "title": "Backtracking Basics",
  "category": "Foundations",
  "route": "/algorithms/foundations/backtracking-basics",
  "phase": 2,
  "priority": "high",
  "visualizerType": "recursion-tree",
  "icon": "school",
  "codePath": "./src/algorithms/foundations/backtracking-basics/code/solution.js",
  "codeFilename": "solution.js",
  "runnerInput": [
    [
      1,
      2
    ]
  ],
  "meaning": "Backtracking Basics is a Foundations technique focused on solutions.",
  "problem": "Backtracking Basics explores a decision tree by choosing, recursing, and undoing the choice before trying the next option.",
  "concept": "Backtracking Basics explores a decision tree by choosing, recursing, and undoing the choice before trying the next option.",
  "logicSummary": "Handle the base case, loop through valid choices, add one choice, recurse, then remove that choice.",
  "transitionSummary": "The transition is choose -> explore -> unchoose, which keeps sibling branches isolated.",
  "codeInsight": "The backtrack step is what keeps the state correct: every push must have a matching pop.",
  "realLifeExample": "Backtracking Basics appears when the input is choices and the required result is solutions.",
  "whenToUse": "Use Backtracking Basics when a problem matches the Foundations pattern and the expected state changes match a recursion tree dry run.",
  "memoryTrick": "Backtracking Basics: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A recursion tree walkthrough showing Backtracking Basics' input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data Backtracking Basics receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by Backtracking Basics."
    },
    {
      "title": "Apply the transition",
      "text": "Run the recursion tree transition and update the algorithm-specific state."
    },
    {
      "title": "Return the answer",
      "text": "Stop at the correct condition and return the tracked result."
    }
  ],
  "variables": [
    {
      "name": "choices",
      "purpose": "The candidate values that drive the heap, recursion, subset, or frequency process."
    },
    {
      "name": "call frame and path",
      "purpose": "The current recursive call plus the partial answer built so far."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by backtrackingBasics after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "The transition is choose -> explore -> unchoose, which keeps sibling branches isolated. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the Backtracking Basics input and decide what result must be produced.",
      "codeInsight": "Line 7 normalizes the input. If choices is not an array, the function uses an empty list so the rest of the code can iterate safely.",
      "activeLine": 7
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that Backtracking Basics changes during the dry run.",
      "codeInsight": "Lines 8 and 9 create separate state: result stores completed paths, while path tracks the current recursive choice trail.",
      "activeLine": 8
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one recursion tree transition for Backtracking Basics.",
      "codeInsight": "Lines 17-19 are the choose, explore, unchoose cycle: push the current value, recurse with it included, then pop to restore the path.",
      "activeLine": 17
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final Backtracking Basics answer from the tracked state.",
      "codeInsight": "Line 23 returns the collected result after backtrack(0) has explored every include and exclude branch.",
      "activeLine": 23
    }
  ],
  "complexity": {
    "time": "O(n) for the educational reference implementation.",
    "space": "O(n) for tracked state when needed."
  },
  "quiz": {
    "question": "Which state choice keeps Backtracking Basics correct?",
    "options": [
      {
        "key": "A",
        "text": "Track path and update it only through Backtracking Basics' transition.",
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
    "correctText": "Correct. Backtracking Basics stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Backtracking Basics needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "foundations",
  "algorithmSlug": "backtracking-basics"
};
