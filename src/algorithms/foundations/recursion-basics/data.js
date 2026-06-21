// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "recursion-basics",
  "title": "Recursion Basics",
  "category": "Foundations",
  "route": "/algorithms/foundations/recursion-basics",
  "phase": 1,
  "priority": "high",
  "visualizerType": "call-stack",
  "icon": "school",
  "codePath": "./src/algorithms/foundations/recursion-basics/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Recursion Basics is a Foundations technique focused on solutions.",
  "problem": "Recursion Basics explores a decision tree by choosing, recursing, and undoing the choice before trying the next option.",
  "concept": "Recursion Basics is useful when stack behavior is the clearest model for the data changes. Use this when the problem is naturally described by last-in, first-out state.",
  "logicSummary": "Read the next value or operation, maintain last-in, first-out state, then push, pop, peek, or resolve stack entries.",
  "transitionSummary": "Each step changes only the part of the stack required to preserve the invariant.",
  "codeInsight": "The backtrack step is what keeps the state correct: every push must have a matching pop.",
  "realLifeExample": "Recursion Basics appears when the input is choices and the required result is solutions.",
  "whenToUse": "Use Recursion Basics when a problem matches the Foundations pattern and the expected state changes match a call stack dry run.",
  "memoryTrick": "Recursion Basics: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Recursion Basics is shown as stack state changes. The numbered steps follow the code path used to maintain the main invariant.",
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
      "name": "working state",
      "purpose": "The local state updated by the algorithm transition. This page visualizes it as call stack."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by recursionBasics after the maintained state reaches the stop rule."
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
    "question": "Which state choice keeps Recursion Basics correct?",
    "options": [
      {
        "key": "A",
        "text": "Track path and update it only through Recursion Basics' transition.",
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
    "correctText": "Correct. Recursion Basics stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Recursion Basics needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "foundations",
  "algorithmSlug": "recursion-basics",
  "runnerInput": [
    [
      1,
      2
    ]
  ],
  "relatedLinks": [
    {
      "id": "ds-recursion-first-recursion-program",
      "title": "First Recursion Program",
      "label": "C/C++ recursion source"
    },
    {
      "id": "ds-recursion-static-variable-in-recursion",
      "title": "Static Variable In Recursion",
      "label": "C/C++ recursion source"
    },
    {
      "id": "ds-recursion-tree-recursion",
      "title": "Tree Recursion",
      "label": "C/C++ recursion source"
    },
    {
      "id": "ds-recursion-indirect-recursion",
      "title": "Indirect Recursion",
      "label": "C/C++ recursion source"
    }
  ]
};
