// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "modular-exponentiation",
  "title": "Modular Exponentiation",
  "category": "Number Theory and Bit Manipulation",
  "route": "/algorithms/number-theory/modular-exponentiation",
  "phase": 3,
  "priority": "high",
  "visualizerType": "binary-power",
  "icon": "memory",
  "codePath": "./src/algorithms/number-theory-and-bit-manipulation/modular-exponentiation/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Modular Exponentiation is a Number Theory and Bit Manipulation technique focused on answer.",
  "problem": "Modular Exponentiation solves a Number Theory and Bit Manipulation problem by maintaining only the state needed for its binary power transition.",
  "concept": "Modular Exponentiation solves a Number Theory and Bit Manipulation problem by maintaining only the state needed for its binary power transition.",
  "logicSummary": "Modular Exponentiation reads the input, initializes its working state, applies the core transition, and returns the tracked answer.",
  "transitionSummary": "Repeat the binary power transition until the stop condition for Modular Exponentiation is reached.",
  "codeInsight": "The implementation keeps Modular Exponentiation's state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "Modular Exponentiation appears when the input is input and the required result is answer.",
  "whenToUse": "Use Modular Exponentiation when a problem matches the Number Theory and Bit Manipulation pattern and the expected state changes match a binary power dry run.",
  "memoryTrick": "Modular Exponentiation: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A binary power walkthrough showing Modular Exponentiation's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data Modular Exponentiation receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by Modular Exponentiation."
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
      "name": "input",
      "purpose": "The concrete data Modular Exponentiation receives before any state changes begin."
    },
    {
      "name": "state",
      "purpose": "The working information Modular Exponentiation updates while it runs."
    },
    {
      "name": "answer",
      "purpose": "The final value Modular Exponentiation returns after the stop condition is met."
    },
    {
      "name": "condition",
      "purpose": "The rule that decides whether Modular Exponentiation continues, branches, or stops."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the Modular Exponentiation input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that Modular Exponentiation changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one binary power transition for Modular Exponentiation.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final Modular Exponentiation answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps Modular Exponentiation correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Modular Exponentiation's transition.",
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
    "correctText": "Correct. Modular Exponentiation stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Modular Exponentiation needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "number-theory-and-bit-manipulation",
  "algorithmSlug": "modular-exponentiation"
};
