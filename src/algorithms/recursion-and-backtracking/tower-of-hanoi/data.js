// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "tower-of-hanoi",
  "title": "Tower of Hanoi",
  "category": "Recursion and Backtracking",
  "route": "/algorithms/recursion/tower-of-hanoi",
  "phase": 1,
  "priority": "low",
  "visualizerType": "disk-moves",
  "icon": "school",
  "codePath": "./src/algorithms/recursion-and-backtracking/tower-of-hanoi/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Tower of Hanoi is a Recursion and Backtracking technique focused on solutions.",
  "problem": "Tower of Hanoi explores a decision tree by choosing, recursing, and undoing the choice before trying the next option.",
  "concept": "Recursion and backtracking are useful when a problem branches into smaller choices that share the same rule. Use this when the answer is built by choosing, recursing, and sometimes undoing choices.",
  "logicSummary": "Handle the base case, choose the next option, recurse into smaller state, then combine or undo state.",
  "transitionSummary": "Each step either reaches a base case or moves one level deeper with a smaller decision state.",
  "codeInsight": "The backtrack step is what keeps the state correct: every push must have a matching pop.",
  "realLifeExample": "Tower of Hanoi appears when the input is choices and the required result is solutions.",
  "whenToUse": "Use Tower of Hanoi when a problem matches the Recursion and Backtracking pattern and the expected state changes match a disk moves dry run.",
  "memoryTrick": "Tower of Hanoi: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Tower of Hanoi is shown as call/choice state changes. The numbered steps follow the code path used to maintain the main invariant.",
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
      "name": "path and recursion frame",
      "purpose": "The partial choice path plus the current recursive frame before backtracking restores it. This page visualizes it as disk moves."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by towerOfHanoi after the maintained state reaches the stop rule."
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
    "question": "Which state choice keeps Tower of Hanoi correct?",
    "options": [
      {
        "key": "A",
        "text": "Track path and update it only through Tower of Hanoi's transition.",
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
    "correctText": "Correct. Tower of Hanoi stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Tower of Hanoi needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "recursion-and-backtracking",
  "algorithmSlug": "tower-of-hanoi",
  "runnerInput": [
    3
  ],
  "relatedLinks": [
    {
      "id": "ds-recursion-toh",
      "title": "Recursion Tower of Hanoi",
      "label": "C/C++ recursion source"
    }
  ]
};
