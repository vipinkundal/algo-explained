// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "lcm",
  "title": "LCM",
  "category": "Number Theory and Bit Manipulation",
  "route": "/algorithms/number-theory/lcm",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "formula-card",
  "icon": "memory",
  "codePath": "./src/algorithms/number-theory-and-bit-manipulation/lcm/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "LCM is a Number Theory and Bit Manipulation technique focused on answer.",
  "problem": "LCM solves a Number Theory and Bit Manipulation problem by maintaining only the state needed for its formula card transition.",
  "concept": "LCM solves a Number Theory and Bit Manipulation problem by maintaining only the state needed for its formula card transition.",
  "logicSummary": "LCM reads the input, initializes its working state, applies the core transition, and returns the tracked answer.",
  "transitionSummary": "Repeat the formula card transition until the stop condition for LCM is reached.",
  "codeInsight": "The implementation keeps LCM's state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "LCM appears when the input is input and the required result is answer.",
  "whenToUse": "Use LCM when a problem matches the Number Theory and Bit Manipulation pattern and the expected state changes match a formula card dry run.",
  "memoryTrick": "LCM: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A formula card walkthrough showing LCM's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data LCM receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by LCM."
    },
    {
      "title": "Apply the transition",
      "text": "Run the formula card transition and update the algorithm-specific state."
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
      "name": "numeric invariant",
      "purpose": "The remainder, bit mask, power, xor, or primality state updated each step. This page visualizes it as formula card."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by lcm after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Repeat the formula card transition until the stop condition for LCM is reached. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the LCM input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that LCM changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one formula card transition for LCM.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final LCM answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps LCM correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through LCM's transition.",
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
    "correctText": "Correct. LCM stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. LCM needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "number-theory-and-bit-manipulation",
  "algorithmSlug": "lcm",
  "runnerInput": [
    4,
    6
  ]
};
