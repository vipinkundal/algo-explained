// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "min-stack",
  "title": "Min Stack",
  "category": "Stack",
  "route": "/algorithms/stack/min-stack",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "dual-stack",
  "icon": "layers",
  "codePath": "./src/algorithms/stack/min-stack/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Min Stack is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Min Stack keeps a normal stack plus a second stack of current minimum values.",
  "concept": "Min Stack is useful when stack behavior is the clearest model for the data changes. Use this when the problem is naturally described by last-in, first-out state.",
  "logicSummary": "Read the next value or operation, maintain last-in, first-out state, then push, pop, peek, or resolve stack entries.",
  "transitionSummary": "Each step changes only the part of the stack required to preserve the invariant.",
  "codeInsight": "The implementation names the backing state directly, so the code trace matches the visual data structure on the page.",
  "realLifeExample": "Min Stack appears when the problem is defined by the behavior of this exact data structure.",
  "whenToUse": "Use Min Stack when its state transition is the natural way to model the problem.",
  "memoryTrick": "Min Stack: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Min Stack is shown as stack state changes. The numbered steps follow the code path used to maintain the main invariant.",
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
      "activeLine": 11,
      "codeInsight": "Adds the current value to stack, keeping it available for later comparisons or traversal."
    },
    {
      "label": "Result",
      "title": "Return visible result",
      "note": "The return value or printed state confirms the operation.",
      "activeLine": 20,
      "codeInsight": "Returns output, the final value maintained by Min Stack's code path."
    }
  ],
  "complexity": {
    "time": "O(m).",
    "space": "O(m)."
  },
  "quiz": {
    "question": "Which state choice keeps Min Stack correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Min Stack's transition.",
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
    "correctText": "Correct. Min Stack stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Min Stack needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "stack",
  "algorithmSlug": "min-stack",
  "runnerInput": [
    [
      {
        "type": "push",
        "value": 3
      },
      {
        "type": "push",
        "value": 1
      },
      {
        "type": "min"
      },
      {
        "type": "pop"
      },
      {
        "type": "min"
      }
    ]
  ],
  "animation": {
    "type": "stack-queue-flow",
    "title": "Min Stack stack state",
    "ruleLabel": "stack rule",
    "rule": "Each step changes only the part of the stack required to preserve the invariant.",
    "orientation": "stack",
    "items": [
      {
        "type": "push",
        "value": 3
      },
      {
        "type": "push",
        "value": 1
      },
      {
        "type": "min"
      },
      {
        "type": "pop"
      },
      {
        "type": "min"
      }
    ],
    "steps": [
      {
        "phase": "Stack",
        "title": "Read stack action",
        "note": "The code receives the next value or command.",
        "ruleLabel": "Min Stack invariant",
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
        "ruleLabel": "Min Stack invariant",
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
        "ruleLabel": "Min Stack invariant",
        "rule": "Adds the current value to stack, keeping it available for later comparisons or traversal.",
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
        "ruleLabel": "Min Stack invariant",
        "rule": "Returns output, the final value maintained by Min Stack's code path.",
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
