// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "prime-checking",
  "title": "Prime Checking",
  "category": "Number Theory and Bit Manipulation",
  "route": "/algorithms/number-theory/prime-checking",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "divisor-scan",
  "icon": "memory",
  "codePath": "./src/algorithms/number-theory-and-bit-manipulation/prime-checking/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Prime Checking is a Number Theory and Bit Manipulation technique focused on answer.",
  "problem": "Prime Checking solves a Number Theory and Bit Manipulation problem by maintaining only the state needed for its divisor scan transition.",
  "concept": "Prime Checking solves a Number Theory and Bit Manipulation problem by maintaining only the state needed for its divisor scan transition.",
  "logicSummary": "Prime Checking reads the input, initializes its working state, applies the core transition, and returns the tracked answer.",
  "transitionSummary": "Repeat the divisor scan transition until the stop condition for Prime Checking is reached.",
  "codeInsight": "The implementation keeps Prime Checking's state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "Prime Checking appears when the input is input and the required result is answer.",
  "whenToUse": "Use Prime Checking when a problem matches the Number Theory and Bit Manipulation pattern and the expected state changes match a divisor scan dry run.",
  "memoryTrick": "Prime Checking: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A divisor scan walkthrough showing Prime Checking's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data Prime Checking receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by Prime Checking."
    },
    {
      "title": "Apply the transition",
      "text": "Run the divisor scan transition and update the algorithm-specific state."
    },
    {
      "title": "Return the answer",
      "text": "Stop at the correct condition and return the tracked result."
    }
  ],
  "variables": [
    {
      "name": "input",
      "purpose": "The concrete data Prime Checking receives before any state changes begin."
    },
    {
      "name": "state",
      "purpose": "The working information Prime Checking updates while it runs."
    },
    {
      "name": "answer",
      "purpose": "The final value Prime Checking returns after the stop condition is met."
    },
    {
      "name": "condition",
      "purpose": "The rule that decides whether Prime Checking continues, branches, or stops."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the Prime Checking input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that Prime Checking changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one divisor scan transition for Prime Checking.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final Prime Checking answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps Prime Checking correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Prime Checking's transition.",
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
    "correctText": "Correct. Prime Checking stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Prime Checking needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "number-theory-and-bit-manipulation",
  "algorithmSlug": "prime-checking"
};
