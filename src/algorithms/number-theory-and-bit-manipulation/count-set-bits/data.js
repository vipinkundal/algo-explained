// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "count-set-bits",
  "title": "Count Set Bits",
  "category": "Number Theory and Bit Manipulation",
  "route": "/algorithms/bit-manipulation/count-set-bits",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "bit-count",
  "icon": "memory",
  "codePath": "./src/algorithms/number-theory-and-bit-manipulation/count-set-bits/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Count Set Bits is a Number Theory and Bit Manipulation technique focused on answer.",
  "problem": "Count Set Bits solves a Number Theory and Bit Manipulation problem by maintaining only the state needed for its bit count transition.",
  "concept": "Count Set Bits solves a Number Theory and Bit Manipulation problem by maintaining only the state needed for its bit count transition.",
  "logicSummary": "Count Set Bits reads the input, initializes its working state, applies the core transition, and returns the tracked answer.",
  "transitionSummary": "Repeat the bit count transition until the stop condition for Count Set Bits is reached.",
  "codeInsight": "The implementation keeps Count Set Bits' state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "Count Set Bits appears when the input is input and the required result is answer.",
  "whenToUse": "Use Count Set Bits when a problem matches the Number Theory and Bit Manipulation pattern and the expected state changes match a bit count dry run.",
  "memoryTrick": "Count Set Bits: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A bit count walkthrough showing Count Set Bits' input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data Count Set Bits receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by Count Set Bits."
    },
    {
      "title": "Apply the transition",
      "text": "Run the bit count transition and update the algorithm-specific state."
    },
    {
      "title": "Return the answer",
      "text": "Stop at the correct condition and return the tracked result."
    }
  ],
  "variables": [
    {
      "name": "input",
      "purpose": "The concrete data Count Set Bits receives before any state changes begin."
    },
    {
      "name": "state",
      "purpose": "The working information Count Set Bits updates while it runs."
    },
    {
      "name": "answer",
      "purpose": "The final value Count Set Bits returns after the stop condition is met."
    },
    {
      "name": "condition",
      "purpose": "The rule that decides whether Count Set Bits continues, branches, or stops."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the Count Set Bits input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that Count Set Bits changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one bit count transition for Count Set Bits.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final Count Set Bits answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps Count Set Bits correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Count Set Bits' transition.",
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
    "correctText": "Correct. Count Set Bits stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Count Set Bits needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "number-theory-and-bit-manipulation",
  "algorithmSlug": "count-set-bits"
};
