// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "modular-inverse",
  "title": "Modular Inverse",
  "category": "Number Theory and Bit Manipulation",
  "route": "/algorithms/number-theory/modular-inverse",
  "phase": 4,
  "priority": "medium",
  "visualizerType": "extended-gcd",
  "icon": "memory",
  "codePath": "./src/algorithms/number-theory-and-bit-manipulation/modular-inverse/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Modular Inverse is a Number Theory and Bit Manipulation technique focused on answer.",
  "problem": "Modular Inverse solves a Number Theory and Bit Manipulation problem by maintaining only the state needed for its extended gcd transition.",
  "concept": "Modular Inverse solves a Number Theory and Bit Manipulation problem by maintaining only the state needed for its extended gcd transition.",
  "logicSummary": "Modular Inverse reads the input, initializes its working state, applies the core transition, and returns the tracked answer.",
  "transitionSummary": "Repeat the extended gcd transition until the stop condition for Modular Inverse is reached.",
  "codeInsight": "The implementation keeps Modular Inverse's state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "Modular Inverse appears when the input is input and the required result is answer.",
  "whenToUse": "Use Modular Inverse when a problem matches the Number Theory and Bit Manipulation pattern and the expected state changes match a extended gcd dry run.",
  "memoryTrick": "Modular Inverse: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A extended gcd walkthrough showing Modular Inverse's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data Modular Inverse receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by Modular Inverse."
    },
    {
      "title": "Apply the transition",
      "text": "Run the extended gcd transition and update the algorithm-specific state."
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
      "purpose": "The remainder, bit mask, power, xor, or primality state updated each step. This page visualizes it as extended gcd."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by modularInverse after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Repeat the extended gcd transition until the stop condition for Modular Inverse is reached. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the Modular Inverse input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that Modular Inverse changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one extended gcd transition for Modular Inverse.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final Modular Inverse answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps Modular Inverse correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Modular Inverse's transition.",
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
    "correctText": "Correct. Modular Inverse stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Modular Inverse needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "number-theory-and-bit-manipulation",
  "algorithmSlug": "modular-inverse",
  "runnerInput": [
    3,
    11
  ]
};
