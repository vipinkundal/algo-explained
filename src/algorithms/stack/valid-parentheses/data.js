// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "valid-parentheses",
  "title": "Valid Parentheses",
  "category": "Stack",
  "route": "/algorithms/stack/valid-parentheses",
  "phase": 1,
  "priority": "high",
  "visualizerType": "stack-match",
  "icon": "layers",
  "codePath": "./src/algorithms/stack/valid-parentheses/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Valid Parentheses is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Valid Parentheses uses a stack of expected closing brackets.",
  "concept": "Valid Parentheses is useful when stack behavior is the clearest model for the data changes. Use this when the problem is naturally described by last-in, first-out state.",
  "logicSummary": "Read the next value or operation, maintain last-in, first-out state, then push, pop, peek, or resolve stack entries.",
  "transitionSummary": "Each step changes only the part of the stack required to preserve the invariant.",
  "codeInsight": "The implementation names the backing state directly, so the code trace matches the visual data structure on the page.",
  "realLifeExample": "Valid Parentheses appears when the problem is defined by the behavior of this exact data structure.",
  "whenToUse": "Use Valid Parentheses when its state transition is the natural way to model the problem.",
  "memoryTrick": "Valid Parentheses: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Valid Parentheses is shown as stack state changes. The numbered steps follow the code path used to maintain the main invariant.",
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
      "name": "input",
      "purpose": "Values or operations to process."
    },
    {
      "name": "data structure state",
      "purpose": "The stack, queue, heap, deque, or cache state."
    },
    {
      "name": "answer",
      "purpose": "The output after all operations or after each step."
    },
    {
      "name": "operations remain",
      "purpose": "Continue while input values or operations remain."
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
    "time": "O(n).",
    "space": "O(n)."
  },
  "quiz": {
    "question": "Which state choice keeps Valid Parentheses correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Valid Parentheses' transition.",
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
    "correctText": "Correct. Valid Parentheses stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Valid Parentheses needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "stack",
  "algorithmSlug": "valid-parentheses",
  "runnerInput": [
    "({[]})"
  ],
  "relatedLinks": [
    {
      "id": "ds-stack-parenthesis-is-balanced",
      "title": "Stack Parenthesis Is Balanced",
      "label": "C/C++ stack source"
    },
    {
      "id": "ds-stack-parenthesis-is-balanced-extended",
      "title": "Stack Parenthesis Is Balanced Extended",
      "label": "C/C++ stack source"
    }
  ]
};
