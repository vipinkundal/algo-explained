// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "largest-rectangle-histogram",
  "title": "Largest Rectangle in Histogram",
  "category": "Stack",
  "route": "/algorithms/stack/largest-rectangle-histogram",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "monotonic-stack-bars",
  "icon": "layers",
  "codePath": "./src/algorithms/stack/largest-rectangle-histogram/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Largest Rectangle in Histogram is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Largest Rectangle in Histogram uses an increasing stack to find each bar's maximal width.",
  "concept": "Largest Rectangle in Histogram is useful when stack behavior is the clearest model for the data changes. Use this when the problem is naturally described by last-in, first-out state.",
  "logicSummary": "Read the next value or operation, maintain last-in, first-out state, then push, pop, peek, or resolve stack entries.",
  "transitionSummary": "Each step changes only the part of the stack required to preserve the invariant.",
  "codeInsight": "The implementation names the backing state directly, so the code trace matches the visual data structure on the page.",
  "realLifeExample": "Largest Rectangle in Histogram appears when the problem is defined by the behavior of this exact data structure.",
  "whenToUse": "Use Largest Rectangle in Histogram when its state transition is the natural way to model the problem.",
  "memoryTrick": "Largest Rectangle in Histogram: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Largest Rectangle in Histogram is shown as stack state changes. The numbered steps follow the code path used to maintain the main invariant.",
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
    "question": "Which state choice keeps Largest Rectangle in Histogram correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Largest Rectangle in Histogram's transition.",
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
    "correctText": "Correct. Largest Rectangle in Histogram stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Largest Rectangle in Histogram needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "stack",
  "algorithmSlug": "largest-rectangle-histogram",
  "runnerInput": [
    [
      2,
      1,
      5,
      6,
      2,
      3
    ]
  ]
};
