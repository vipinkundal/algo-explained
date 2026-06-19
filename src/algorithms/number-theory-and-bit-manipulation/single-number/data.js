// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "single-number",
  "title": "Single Number",
  "category": "Number Theory and Bit Manipulation",
  "route": "/algorithms/bit-manipulation/single-number",
  "phase": 1,
  "priority": "high",
  "visualizerType": "xor-cancel",
  "icon": "memory",
  "codePath": "./src/algorithms/number-theory-and-bit-manipulation/single-number/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Single Number is a Number Theory and Bit Manipulation technique focused on answer.",
  "problem": "Single Number solves a Number Theory and Bit Manipulation problem by maintaining only the state needed for its xor cancel transition.",
  "concept": "Single Number solves a Number Theory and Bit Manipulation problem by maintaining only the state needed for its xor cancel transition.",
  "logicSummary": "Single Number reads the input, initializes its working state, applies the core transition, and returns the tracked answer.",
  "transitionSummary": "Repeat the xor cancel transition until the stop condition for Single Number is reached.",
  "codeInsight": "The implementation keeps Single Number's state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "Single Number appears when the input is input and the required result is answer.",
  "whenToUse": "Use Single Number when a problem matches the Number Theory and Bit Manipulation pattern and the expected state changes match a xor cancel dry run.",
  "memoryTrick": "Single Number: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A xor cancel walkthrough showing Single Number's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data Single Number receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by Single Number."
    },
    {
      "title": "Apply the transition",
      "text": "Run the xor cancel transition and update the algorithm-specific state."
    },
    {
      "title": "Return the answer",
      "text": "Stop at the correct condition and return the tracked result."
    }
  ],
  "variables": [
    {
      "name": "value, other",
      "purpose": "value: The numeric or collection input used by the bit, math, or foundation routine. other: The numeric or collection input used by the bit, math, or foundation routine."
    },
    {
      "name": "xor accumulator",
      "purpose": "The running xor value where duplicate bits cancel out."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by singleNumber after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Repeat the xor cancel transition until the stop condition for Single Number is reached. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the Single Number input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that Single Number changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one xor cancel transition for Single Number.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final Single Number answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps Single Number correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Single Number's transition.",
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
    "correctText": "Correct. Single Number stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Single Number needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "number-theory-and-bit-manipulation",
  "algorithmSlug": "single-number",
  "runnerInput": [
    [
      2,
      2,
      1
    ]
  ]
};
