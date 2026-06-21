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
  "concept": "Recursion and backtracking are useful when a problem branches into smaller choices that share the same rule. Use this when the answer is built by choosing, recursing, and sometimes undoing choices.",
  "logicSummary": "Handle the base case, choose the next option, recurse into smaller state, then combine or undo state.",
  "transitionSummary": "Each step either reaches a base case or moves one level deeper with a smaller decision state.",
  "codeInsight": "The backtrack step is what keeps the state correct: every push must have a matching pop.",
  "realLifeExample": "Backtracking Basics appears when the input is choices and the required result is solutions.",
  "whenToUse": "Use Backtracking Basics when a problem matches the Foundations pattern and the expected state changes match a recursion tree dry run.",
  "memoryTrick": "Backtracking Basics: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Backtracking Basics is shown as call/choice state changes. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Base case",
      "text": "Stop when the current state is complete or invalid."
    },
    {
      "title": "Choose option",
      "text": "Pick the next valid branch."
    },
    {
      "title": "Recurse",
      "text": "Solve the smaller state."
    },
    {
      "title": "Return or undo",
      "text": "Collect the result or backtrack before the next choice."
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
      "label": "Base",
      "title": "Check stop condition",
      "note": "The code first asks whether the current state is complete.",
      "activeLine": 1,
      "codeInsight": "The code first asks whether the current state is complete."
    },
    {
      "label": "Choice",
      "title": "Select next option",
      "note": "One valid move is added to the state.",
      "activeLine": 4,
      "codeInsight": "One valid move is added to the state."
    },
    {
      "label": "Call",
      "title": "Recurse deeper",
      "note": "The same rule runs on a smaller or extended state.",
      "activeLine": 6,
      "codeInsight": "The same rule runs on a smaller or extended state."
    },
    {
      "label": "Unwind",
      "title": "Return or backtrack",
      "note": "The result is combined or the choice is removed.",
      "activeLine": 9,
      "codeInsight": "The result is combined or the choice is removed."
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
