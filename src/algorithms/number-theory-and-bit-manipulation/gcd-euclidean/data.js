// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "gcd-euclidean",
  "title": "GCD / Euclidean Algorithm",
  "category": "Number Theory and Bit Manipulation",
  "route": "/algorithms/number-theory/gcd-euclidean",
  "phase": 1,
  "priority": "high",
  "visualizerType": "remainder-steps",
  "icon": "memory",
  "codePath": "./src/algorithms/number-theory-and-bit-manipulation/gcd-euclidean/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "GCD / Euclidean Algorithm is a Number Theory and Bit Manipulation technique focused on answer.",
  "problem": "GCD / Euclidean Algorithm solves a Number Theory and Bit Manipulation problem by maintaining only the state needed for its remainder steps transition.",
  "concept": "GCD / Euclidean Algorithm solves a Number Theory and Bit Manipulation problem by maintaining only the state needed for its remainder steps transition.",
  "logicSummary": "GCD / Euclidean Algorithm reads the input, initializes its working state, applies the core transition, and returns the tracked answer.",
  "transitionSummary": "Repeat the remainder steps transition until the stop condition for GCD / Euclidean Algorithm is reached.",
  "codeInsight": "The implementation keeps GCD / Euclidean Algorithm's state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "GCD / Euclidean Algorithm appears when the input is input and the required result is answer.",
  "whenToUse": "Use GCD / Euclidean Algorithm when a problem matches the Number Theory and Bit Manipulation pattern and the expected state changes match a remainder steps dry run.",
  "memoryTrick": "GCD / Euclidean Algorithm: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A remainder steps walkthrough showing GCD / Euclidean Algorithm's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data GCD / Euclidean Algorithm receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by GCD / Euclidean Algorithm."
    },
    {
      "title": "Apply the transition",
      "text": "Run the remainder steps transition and update the algorithm-specific state."
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
      "name": "current remainder pair",
      "purpose": "The pair of numbers updated until the remainder reaches zero."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by gcdEuclidean after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Repeat the remainder steps transition until the stop condition for GCD / Euclidean Algorithm is reached. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the GCD / Euclidean Algorithm input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that GCD / Euclidean Algorithm changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one remainder steps transition for GCD / Euclidean Algorithm.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final GCD / Euclidean Algorithm answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps GCD / Euclidean Algorithm correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through GCD / Euclidean Algorithm's transition.",
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
    "correctText": "Correct. GCD / Euclidean Algorithm stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. GCD / Euclidean Algorithm needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "number-theory-and-bit-manipulation",
  "algorithmSlug": "gcd-euclidean",
  "runnerInput": [
    48,
    18
  ]
};
