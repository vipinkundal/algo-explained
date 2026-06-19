// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "power-of-two",
  "title": "Power of Two",
  "category": "Number Theory and Bit Manipulation",
  "route": "/algorithms/bit-manipulation/power-of-two",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "bit-check",
  "icon": "memory",
  "codePath": "./src/algorithms/number-theory-and-bit-manipulation/power-of-two/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Power of Two is a Number Theory and Bit Manipulation technique focused on answer.",
  "problem": "Power of Two solves a Number Theory and Bit Manipulation problem by maintaining only the state needed for its bit check transition.",
  "concept": "Power of Two solves a Number Theory and Bit Manipulation problem by maintaining only the state needed for its bit check transition.",
  "logicSummary": "Power of Two reads the input, initializes its working state, applies the core transition, and returns the tracked answer.",
  "transitionSummary": "Repeat the bit check transition until the stop condition for Power of Two is reached.",
  "codeInsight": "The implementation keeps Power of Two's state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "Power of Two appears when the input is input and the required result is answer.",
  "whenToUse": "Use Power of Two when a problem matches the Number Theory and Bit Manipulation pattern and the expected state changes match a bit check dry run.",
  "memoryTrick": "Power of Two: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A bit check walkthrough showing Power of Two's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data Power of Two receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by Power of Two."
    },
    {
      "title": "Apply the transition",
      "text": "Run the bit check transition and update the algorithm-specific state."
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
      "purpose": "The remainder, bit mask, power, xor, or primality state updated each step. This page visualizes it as bit check."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by powerOfTwo after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Repeat the bit check transition until the stop condition for Power of Two is reached. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the Power of Two input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that Power of Two changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one bit check transition for Power of Two.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final Power of Two answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps Power of Two correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Power of Two's transition.",
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
    "correctText": "Correct. Power of Two stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Power of Two needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "number-theory-and-bit-manipulation",
  "algorithmSlug": "power-of-two",
  "runnerInput": [
    16
  ]
};
