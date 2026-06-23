// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "stack-basics",
  "title": "Stack Basics",
  "category": "Stack",
  "route": "/algorithms/stack/stack-basics",
  "phase": 1,
  "priority": "high",
  "visualizerType": "stack-push-pop",
  "icon": "layers",
  "codePath": "./src/algorithms/stack/stack-basics/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Stack Basics is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Stack Basics follows last-in, first-out order with push and pop operations.",
  "concept": "Stack Basics is useful when stack behavior is the clearest model for the data changes. Use this when the problem is naturally described by last-in, first-out state.",
  "logicSummary": "Read the next value or operation, maintain last-in, first-out state, then push, pop, peek, or resolve stack entries.",
  "transitionSummary": "Each step changes only the part of the stack required to preserve the invariant.",
  "codeInsight": "The implementation names the backing state directly, so the code trace matches the visual data structure on the page.",
  "realLifeExample": "Stack Basics appears when the problem is defined by the behavior of this exact data structure.",
  "whenToUse": "Use Stack Basics when its state transition is the natural way to model the problem.",
  "memoryTrick": "Stack Basics: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Stack Basics is shown as stack state changes. The numbered steps follow the code path used to maintain the main invariant.",
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
      "activeLine": 6,
      "codeInsight": "Creates the monotonic stack. It stores indexes that are still waiting for a greater value to appear."
    },
    {
      "label": "Stack top",
      "title": "Inspect stack",
      "note": "The active state must still satisfy last-in, first-out state.",
      "activeLine": 6,
      "codeInsight": "Creates the monotonic stack. It stores indexes that are still waiting for a greater value to appear."
    },
    {
      "label": "Push / pop",
      "title": "Push, pop, peek, or resolve stack entries",
      "note": "Only the necessary stack fields are changed.",
      "activeLine": 9,
      "codeInsight": "Checks operation.type === \"push\") stack.push(operation.value; only the branch that preserves Stack Basics's invariant is allowed to change state."
    },
    {
      "label": "Result",
      "title": "Return visible result",
      "note": "The return value or printed state confirms the operation.",
      "activeLine": 13,
      "codeInsight": "Returns output, the final value maintained by Stack Basics's code path."
    }
  ],
  "complexity": {
    "time": "O(m) for m operations.",
    "space": "O(m)."
  },
  "quiz": {
    "question": "Which state choice keeps Stack Basics correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Stack Basics' transition.",
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
    "correctText": "Correct. Stack Basics stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Stack Basics needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "stack",
  "algorithmSlug": "stack-basics",
  "runnerInput": [
    [
      {
        "type": "push",
        "value": 1
      },
      {
        "type": "push",
        "value": 2
      },
      {
        "type": "peek"
      },
      {
        "type": "pop"
      },
      {
        "type": "pop"
      }
    ]
  ],
  "relatedLinks": [
    {
      "id": "ds-stack-using-array",
      "title": "Stack Using Array",
      "label": "C/C++ stack source"
    },
    {
      "id": "ds-stack-stack-using-ll",
      "title": "Stack Using Linked List",
      "label": "C/C++ stack source"
    },
    {
      "id": "ds-stack-parenthesis-is-balanced",
      "title": "Balanced Parentheses with Stack",
      "label": "C/C++ stack source"
    },
    {
      "id": "ds-stack-parenthesis-is-balanced-extended",
      "title": "Balanced Parentheses Extended",
      "label": "C/C++ stack source"
    }
  ],
  "animation": {
    "type": "stack-queue-flow",
    "title": "Stack Basics stack state",
    "ruleLabel": "stack rule",
    "rule": "Each step changes only the part of the stack required to preserve the invariant.",
    "orientation": "stack",
    "items": [
      {
        "type": "push",
        "value": 1
      },
      {
        "type": "push",
        "value": 2
      },
      {
        "type": "peek"
      },
      {
        "type": "pop"
      },
      {
        "type": "pop"
      }
    ],
    "steps": [
      {
        "phase": "Stack",
        "title": "Read stack action",
        "note": "The code receives the next value or command.",
        "ruleLabel": "Stack Basics invariant",
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
        "ruleLabel": "Stack Basics invariant",
        "rule": "Creates the monotonic stack. It stores indexes that are still waiting for a greater value to appear.",
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
        "ruleLabel": "Stack Basics invariant",
        "rule": "Checks operation.type === \"push\") stack.push(operation.value; only the branch that preserves Stack Basics's invariant is allowed to change state.",
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
        "ruleLabel": "Stack Basics invariant",
        "rule": "Returns output, the final value maintained by Stack Basics's code path.",
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
