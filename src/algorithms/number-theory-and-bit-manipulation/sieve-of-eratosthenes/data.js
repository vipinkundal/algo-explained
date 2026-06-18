// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "sieve-of-eratosthenes",
  "title": "Sieve of Eratosthenes",
  "category": "Number Theory and Bit Manipulation",
  "route": "/algorithms/number-theory/sieve-of-eratosthenes",
  "phase": 3,
  "priority": "high",
  "visualizerType": "number-grid",
  "icon": "memory",
  "codePath": "./src/algorithms/number-theory-and-bit-manipulation/sieve-of-eratosthenes/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Sieve of Eratosthenes is a Number Theory and Bit Manipulation technique focused on answer.",
  "problem": "Sieve of Eratosthenes solves a Number Theory and Bit Manipulation problem by maintaining only the state needed for its number grid transition.",
  "concept": "Sieve of Eratosthenes solves a Number Theory and Bit Manipulation problem by maintaining only the state needed for its number grid transition.",
  "logicSummary": "Sieve of Eratosthenes reads the input, initializes its working state, applies the core transition, and returns the tracked answer.",
  "transitionSummary": "Repeat the number grid transition until the stop condition for Sieve of Eratosthenes is reached.",
  "codeInsight": "The implementation keeps Sieve of Eratosthenes' state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "Sieve of Eratosthenes appears when the input is input and the required result is answer.",
  "whenToUse": "Use Sieve of Eratosthenes when a problem matches the Number Theory and Bit Manipulation pattern and the expected state changes match a number grid dry run.",
  "memoryTrick": "Sieve of Eratosthenes: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A number grid walkthrough showing Sieve of Eratosthenes' input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data Sieve of Eratosthenes receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by Sieve of Eratosthenes."
    },
    {
      "title": "Apply the transition",
      "text": "Run the number grid transition and update the algorithm-specific state."
    },
    {
      "title": "Return the answer",
      "text": "Stop at the correct condition and return the tracked result."
    }
  ],
  "variables": [
    {
      "name": "input",
      "purpose": "The concrete data Sieve of Eratosthenes receives before any state changes begin."
    },
    {
      "name": "state",
      "purpose": "The working information Sieve of Eratosthenes updates while it runs."
    },
    {
      "name": "answer",
      "purpose": "The final value Sieve of Eratosthenes returns after the stop condition is met."
    },
    {
      "name": "condition",
      "purpose": "The rule that decides whether Sieve of Eratosthenes continues, branches, or stops."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the Sieve of Eratosthenes input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that Sieve of Eratosthenes changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one number grid transition for Sieve of Eratosthenes.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final Sieve of Eratosthenes answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps Sieve of Eratosthenes correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Sieve of Eratosthenes' transition.",
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
    "correctText": "Correct. Sieve of Eratosthenes stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Sieve of Eratosthenes needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "number-theory-and-bit-manipulation",
  "algorithmSlug": "sieve-of-eratosthenes"
};
