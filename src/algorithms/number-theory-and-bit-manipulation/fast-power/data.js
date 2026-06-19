// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "fast-power",
  "title": "Fast Power",
  "category": "Number Theory and Bit Manipulation",
  "route": "/algorithms/number-theory/fast-power",
  "phase": 3,
  "priority": "high",
  "visualizerType": "binary-power",
  "icon": "memory",
  "codePath": "./src/algorithms/number-theory-and-bit-manipulation/fast-power/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Fast Power is a Number Theory and Bit Manipulation technique focused on answer.",
  "problem": "Fast Power solves a Number Theory and Bit Manipulation problem by maintaining only the state needed for its binary power transition.",
  "concept": "Fast Power solves a Number Theory and Bit Manipulation problem by maintaining only the state needed for its binary power transition.",
  "logicSummary": "Fast Power reads the input, initializes its working state, applies the core transition, and returns the tracked answer.",
  "transitionSummary": "Repeat the binary power transition until the stop condition for Fast Power is reached.",
  "codeInsight": "The implementation keeps Fast Power's state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "Fast Power appears when the input is input and the required result is answer.",
  "whenToUse": "Use Fast Power when a problem matches the Number Theory and Bit Manipulation pattern and the expected state changes match a binary power dry run.",
  "memoryTrick": "Fast Power: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A binary power walkthrough showing Fast Power's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data Fast Power receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by Fast Power."
    },
    {
      "title": "Apply the transition",
      "text": "Run the binary power transition and update the algorithm-specific state."
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
      "purpose": "The remainder, bit mask, power, xor, or primality state updated each step. This page visualizes it as binary power."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by fastPower after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Repeat the binary power transition until the stop condition for Fast Power is reached. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the Fast Power input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that Fast Power changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one binary power transition for Fast Power.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final Fast Power answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps Fast Power correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Fast Power's transition.",
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
    "correctText": "Correct. Fast Power stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Fast Power needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "number-theory-and-bit-manipulation",
  "algorithmSlug": "fast-power",
  "runnerInput": [
    2,
    10
  ]
};
