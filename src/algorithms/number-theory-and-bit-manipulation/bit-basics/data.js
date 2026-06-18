// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "bit-basics",
  "title": "Bit Basics",
  "category": "Number Theory and Bit Manipulation",
  "route": "/algorithms/bit-manipulation/bit-basics",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "bit-toggle",
  "icon": "memory",
  "codePath": "./src/algorithms/number-theory-and-bit-manipulation/bit-basics/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Bit Basics is a Number Theory and Bit Manipulation technique focused on answer.",
  "problem": "Bit Basics solves a Number Theory and Bit Manipulation problem by maintaining only the state needed for its bit toggle transition.",
  "concept": "Bit Basics solves a Number Theory and Bit Manipulation problem by maintaining only the state needed for its bit toggle transition.",
  "logicSummary": "Bit Basics reads the input, initializes its working state, applies the core transition, and returns the tracked answer.",
  "transitionSummary": "Repeat the bit toggle transition until the stop condition for Bit Basics is reached.",
  "codeInsight": "The implementation keeps Bit Basics' state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "Bit Basics appears when the input is input and the required result is answer.",
  "whenToUse": "Use Bit Basics when a problem matches the Number Theory and Bit Manipulation pattern and the expected state changes match a bit toggle dry run.",
  "memoryTrick": "Bit Basics: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A bit toggle walkthrough showing Bit Basics' input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data Bit Basics receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by Bit Basics."
    },
    {
      "title": "Apply the transition",
      "text": "Run the bit toggle transition and update the algorithm-specific state."
    },
    {
      "title": "Return the answer",
      "text": "Stop at the correct condition and return the tracked result."
    }
  ],
  "variables": [
    {
      "name": "input",
      "purpose": "The concrete data Bit Basics receives before any state changes begin."
    },
    {
      "name": "state",
      "purpose": "The working information Bit Basics updates while it runs."
    },
    {
      "name": "answer",
      "purpose": "The final value Bit Basics returns after the stop condition is met."
    },
    {
      "name": "condition",
      "purpose": "The rule that decides whether Bit Basics continues, branches, or stops."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the Bit Basics input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that Bit Basics changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one bit toggle transition for Bit Basics.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final Bit Basics answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps Bit Basics correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Bit Basics' transition.",
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
    "correctText": "Correct. Bit Basics stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Bit Basics needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "number-theory-and-bit-manipulation",
  "algorithmSlug": "bit-basics"
};
