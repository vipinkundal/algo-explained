// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "factorial-recursion",
  "title": "Factorial Recursion",
  "category": "Recursion and Backtracking",
  "route": "/algorithms/recursion/factorial-recursion",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "call-stack",
  "icon": "school",
  "codePath": "./src/algorithms/recursion-and-backtracking/factorial-recursion/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Factorial Recursion is a Recursion and Backtracking technique focused on solutions.",
  "problem": "Factorial Recursion explores a decision tree by choosing, recursing, and undoing the choice before trying the next option.",
  "concept": "Factorial Recursion is useful when stack behavior is the clearest model for the data changes. Use this when the problem is naturally described by last-in, first-out state.",
  "logicSummary": "Read the next value or operation, maintain last-in, first-out state, then push, pop, peek, or resolve stack entries.",
  "transitionSummary": "Each step changes only the part of the stack required to preserve the invariant.",
  "codeInsight": "The backtrack step is what keeps the state correct: every push must have a matching pop.",
  "realLifeExample": "Factorial Recursion appears when the input is choices and the required result is solutions.",
  "whenToUse": "Use Factorial Recursion when a problem matches the Recursion and Backtracking pattern and the expected state changes match a call stack dry run.",
  "memoryTrick": "Factorial Recursion: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Factorial Recursion is shown as stack state changes. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Read stack",
      "text": "Identify the next command, value, node, or library call."
    },
    {
      "title": "Inspect stack top",
      "text": "Look at the active stack fields."
    },
    {
      "title": "Push / pop",
      "text": "push, pop, peek, or resolve stack entries."
    },
    {
      "title": "Read result",
      "text": "Return the emitted value or updated structure."
    }
  ],
  "variables": [
    {
      "name": "choices",
      "purpose": "The candidate values that drive the heap, recursion, subset, or frequency process."
    },
    {
      "name": "path and recursion frame",
      "purpose": "The partial choice path plus the current recursive frame before backtracking restores it. This page visualizes it as call stack."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by factorialRecursion after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "The transition is choose -> explore -> unchoose, which keeps sibling branches isolated. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Stack",
      "title": "Read stack action",
      "note": "The code receives the next value or command.",
      "activeLine": 1,
      "codeInsight": "The code receives the next value or command."
    },
    {
      "label": "Stack top",
      "title": "Inspect stack",
      "note": "The active state must still satisfy last-in, first-out state.",
      "activeLine": 3,
      "codeInsight": "The active state must still satisfy last-in, first-out state."
    },
    {
      "label": "Push / pop",
      "title": "Push, pop, peek, or resolve stack entries",
      "note": "Only the necessary stack fields are changed.",
      "activeLine": 6,
      "codeInsight": "Only the necessary stack fields are changed."
    },
    {
      "label": "Result",
      "title": "Return visible result",
      "note": "The return value or printed state confirms the operation.",
      "activeLine": 9,
      "codeInsight": "The return value or printed state confirms the operation."
    }
  ],
  "complexity": {
    "time": "O(n) for the educational reference implementation.",
    "space": "O(n) for tracked state when needed."
  },
  "quiz": {
    "question": "Which state choice keeps Factorial Recursion correct?",
    "options": [
      {
        "key": "A",
        "text": "Track path and update it only through Factorial Recursion's transition.",
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
    "correctText": "Correct. Factorial Recursion stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Factorial Recursion needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "recursion-and-backtracking",
  "algorithmSlug": "factorial-recursion",
  "runnerInput": [
    5
  ],
  "relatedLinks": [
    {
      "id": "ds-recursion-factorial",
      "title": "Recursion Factorial",
      "label": "C/C++ recursion source"
    }
  ],
  "animation": {
    "type": "recursion-flow",
    "title": "Factorial Recursion call stack",
    "ruleLabel": "Recursive contract",
    "rule": "Each step changes only the part of the stack required to preserve the invariant.",
    "calls": [
      "factorial-recursion(3)",
      "factorial-recursion(2)",
      "factorial-recursion(1)",
      "base case"
    ],
    "steps": [
      {
        "phase": "Stack",
        "title": "Read stack action",
        "note": "The code receives the next value or command.",
        "ruleLabel": "Factorial Recursion invariant",
        "rule": "The code receives the next value or command.",
        "activeCall": 0,
        "returningCalls": []
      },
      {
        "phase": "Stack top",
        "title": "Inspect stack",
        "note": "The active state must still satisfy last-in, first-out state.",
        "ruleLabel": "Factorial Recursion invariant",
        "rule": "The active state must still satisfy last-in, first-out state.",
        "activeCall": 1,
        "returningCalls": []
      },
      {
        "phase": "Push / pop",
        "title": "Push, pop, peek, or resolve stack entries",
        "note": "Only the necessary stack fields are changed.",
        "ruleLabel": "Factorial Recursion invariant",
        "rule": "Only the necessary stack fields are changed.",
        "activeCall": 2,
        "returningCalls": []
      },
      {
        "phase": "Result",
        "title": "Return visible result",
        "note": "The return value or printed state confirms the operation.",
        "ruleLabel": "Factorial Recursion invariant",
        "rule": "The return value or printed state confirms the operation.",
        "activeCall": 3,
        "returningCalls": [
          0,
          1,
          2,
          3
        ]
      }
    ]
  }
};
