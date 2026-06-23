// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "previous-greater-element",
  "title": "Previous Greater Element",
  "category": "Stack",
  "route": "/algorithms/stack/previous-greater-element",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "monotonic-stack",
  "icon": "layers",
  "codePath": "./src/algorithms/stack/previous-greater-element/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Previous Greater Element is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Previous Greater Element keeps a decreasing stack of candidates to the left.",
  "concept": "Previous Greater Element is useful when stack behavior is the clearest model for the data changes. Use this when the problem is naturally described by last-in, first-out state.",
  "logicSummary": "Read the next value or operation, maintain last-in, first-out state, then push, pop, peek, or resolve stack entries.",
  "transitionSummary": "Each step changes only the part of the stack required to preserve the invariant.",
  "codeInsight": "The implementation names the backing state directly, so the code trace matches the visual data structure on the page.",
  "realLifeExample": "Previous Greater Element appears when the problem is defined by the behavior of this exact data structure.",
  "whenToUse": "Use Previous Greater Element when its state transition is the natural way to model the problem.",
  "memoryTrick": "Previous Greater Element: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Previous Greater Element is shown as stack state changes. The numbered steps follow the code path used to maintain the main invariant.",
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
      "activeLine": 7,
      "codeInsight": "Creates the monotonic stack. It stores indexes that are still waiting for a greater value to appear."
    },
    {
      "label": "Stack top",
      "title": "Inspect stack",
      "note": "The active state must still satisfy last-in, first-out state.",
      "activeLine": 9,
      "codeInsight": "Peeks at the stack top and keeps popping while the current value is greater, resolving every smaller value that was waiting."
    },
    {
      "label": "Push / pop",
      "title": "Push, pop, peek, or resolve stack entries",
      "note": "Only the necessary stack fields are changed.",
      "activeLine": 9,
      "codeInsight": "Peeks at the stack top and keeps popping while the current value is greater, resolving every smaller value that was waiting."
    },
    {
      "label": "Result",
      "title": "Return visible result",
      "note": "The return value or printed state confirms the operation.",
      "activeLine": 13,
      "codeInsight": "Returns result, the final value maintained by Previous Greater Element's code path."
    }
  ],
  "complexity": {
    "time": "O(n).",
    "space": "O(n)."
  },
  "quiz": {
    "question": "Which state choice keeps Previous Greater Element correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Previous Greater Element's transition.",
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
    "correctText": "Correct. Previous Greater Element stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Previous Greater Element needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "stack",
  "algorithmSlug": "previous-greater-element",
  "runnerInput": [
    [
      2,
      1,
      2,
      4,
      3
    ]
  ],
  "animation": {
    "type": "stack-queue-flow",
    "title": "Previous Greater Element stack state",
    "ruleLabel": "stack rule",
    "rule": "Each step changes only the part of the stack required to preserve the invariant.",
    "orientation": "stack",
    "items": [
      2,
      1,
      2,
      4,
      3
    ],
    "steps": [
      {
        "phase": "Stack",
        "title": "Read stack action",
        "note": "The code receives the next value or command.",
        "ruleLabel": "Previous Greater Element invariant",
        "rule": "Creates the monotonic stack. It stores indexes that are still waiting for a greater value to appear.",
        "activeItems": [
          0
        ],
        "topIndex": 0,
        "queueWindow": [
          0,
          4
        ]
      },
      {
        "phase": "Stack top",
        "title": "Inspect stack",
        "note": "The active state must still satisfy last-in, first-out state.",
        "ruleLabel": "Previous Greater Element invariant",
        "rule": "Peeks at the stack top and keeps popping while the current value is greater, resolving every smaller value that was waiting.",
        "activeItems": [
          1
        ],
        "topIndex": 1,
        "queueWindow": [
          1,
          4
        ]
      },
      {
        "phase": "Push / pop",
        "title": "Push, pop, peek, or resolve stack entries",
        "note": "Only the necessary stack fields are changed.",
        "ruleLabel": "Previous Greater Element invariant",
        "rule": "Peeks at the stack top and keeps popping while the current value is greater, resolving every smaller value that was waiting.",
        "activeItems": [
          2
        ],
        "topIndex": 2,
        "queueWindow": [
          2,
          4
        ]
      },
      {
        "phase": "Result",
        "title": "Return visible result",
        "note": "The return value or printed state confirms the operation.",
        "ruleLabel": "Previous Greater Element invariant",
        "rule": "Returns result, the final value maintained by Previous Greater Element's code path.",
        "activeItems": [
          3
        ],
        "topIndex": 3,
        "queueWindow": [
          3,
          4
        ]
      }
    ]
  }
};
