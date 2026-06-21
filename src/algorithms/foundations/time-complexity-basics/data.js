// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "time-complexity-basics",
  "title": "Time Complexity Basics",
  "category": "Foundations",
  "route": "/algorithms/foundations/time-complexity-basics",
  "phase": 1,
  "priority": "high",
  "visualizerType": "growth-chart",
  "icon": "school",
  "codePath": "./src/algorithms/foundations/time-complexity-basics/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Time Complexity Basics is a Foundations technique focused on answer.",
  "problem": "Time Complexity Basics solves a Foundations problem by maintaining only the state needed for its growth chart transition.",
  "concept": "Time Complexity Basics is useful when algorithm state behavior is the clearest model for the data changes. Use this when the problem is naturally described by page-specific invariant.",
  "logicSummary": "Read the next value or operation, maintain page-specific invariant, then update the state described by this algorithm.",
  "transitionSummary": "Each step changes only the part of the algorithm state required to preserve the invariant.",
  "codeInsight": "The implementation keeps Time Complexity Basics' state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "Time Complexity Basics appears when the input is input and the required result is answer.",
  "whenToUse": "Use Time Complexity Basics when a problem matches the Foundations pattern and the expected state changes match a growth chart dry run.",
  "memoryTrick": "Time Complexity Basics: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Time Complexity Basics is shown as algorithm state state changes. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Read algorithm state",
      "text": "Identify the next command, value, node, or library call."
    },
    {
      "title": "Inspect invariant",
      "text": "Look at the active algorithm state fields."
    },
    {
      "title": "State change",
      "text": "update the state described by this algorithm."
    },
    {
      "title": "Read result",
      "text": "Return the emitted value or updated structure."
    }
  ],
  "variables": [
    {
      "name": "input",
      "purpose": "The numeric or collection input used by the bit, math, or foundation routine."
    },
    {
      "name": "working state",
      "purpose": "The local state updated by the algorithm transition. This page visualizes it as growth chart."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by timeComplexityBasics after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Repeat the growth chart transition until the stop condition for Time Complexity Basics is reached. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Algorithm State",
      "title": "Read algorithm state action",
      "note": "The code receives the next value or command.",
      "activeLine": 1,
      "codeInsight": "The code receives the next value or command."
    },
    {
      "label": "Invariant",
      "title": "Inspect algorithm state",
      "note": "The active state must still satisfy page-specific invariant.",
      "activeLine": 3,
      "codeInsight": "The active state must still satisfy page-specific invariant."
    },
    {
      "label": "State change",
      "title": "Update the state described by this algorithm",
      "note": "Only the necessary algorithm state fields are changed.",
      "activeLine": 6,
      "codeInsight": "Only the necessary algorithm state fields are changed."
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
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps Time Complexity Basics correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Time Complexity Basics' transition.",
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
    "correctText": "Correct. Time Complexity Basics stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Time Complexity Basics needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "foundations",
  "algorithmSlug": "time-complexity-basics",
  "runnerInput": [
    [
      1,
      2,
      3
    ]
  ]
};
