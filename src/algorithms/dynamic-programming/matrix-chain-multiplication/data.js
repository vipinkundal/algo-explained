// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "matrix-chain-multiplication",
  "title": "Matrix Chain Multiplication",
  "category": "Dynamic Programming",
  "route": "/algorithms/dynamic-programming/matrix-chain-multiplication",
  "phase": 4,
  "priority": "medium",
  "visualizerType": "interval-dp",
  "icon": "table_chart",
  "codePath": "./src/algorithms/dynamic-programming/matrix-chain-multiplication/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Matrix Chain Multiplication is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Matrix Chain Multiplication chooses split points that minimize multiplication cost for every interval.",
  "concept": "Matrix Chain Multiplication chooses split points that minimize multiplication cost for every interval.",
  "logicSummary": "Matrix Chain Multiplication defines subproblems, initializes base cases, fills states in dependency order, and reads the requested state as the answer.",
  "transitionSummary": "Compute one DP state from already-solved smaller states.",
  "codeInsight": "The DP table shape is the algorithm: every index in the code corresponds to a named subproblem.",
  "realLifeExample": "Matrix Chain Multiplication appears when overlapping subproblems would otherwise be recomputed.",
  "whenToUse": "Use Matrix Chain Multiplication when the recurrence and base cases match the problem statement.",
  "memoryTrick": "Matrix Chain Multiplication: state definition first, recurrence second, loops third.",
  "visualizerCaption": "A interval dp walkthrough showing Matrix Chain Multiplication's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Define state",
      "text": "Name what one DP cell means."
    },
    {
      "title": "Set base cases",
      "text": "Fill states that do not depend on others."
    },
    {
      "title": "Apply recurrence",
      "text": "Fill each state from solved states."
    },
    {
      "title": "Return target",
      "text": "Read the requested final state."
    }
  ],
  "variables": [
    {
      "name": "input parameters",
      "purpose": "The values that define the DP problem."
    },
    {
      "name": "dp table",
      "purpose": "Stored answers for subproblems."
    },
    {
      "name": "target state",
      "purpose": "The final state returned as the answer."
    },
    {
      "name": "states remain",
      "purpose": "Continue until every dependency needed by the answer is filled."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read inputs",
      "note": "Matrix Chain Multiplication starts by reading the exact input shape it owns.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize state",
      "note": "Create only the state needed for this algorithm's invariant.",
      "activeLine": 3
    },
    {
      "label": "Loop",
      "title": "Run transition",
      "note": "Compute one DP state from already-solved smaller states.",
      "activeLine": 8
    },
    {
      "label": "Answer",
      "title": "Return answer",
      "note": "Return the value produced by the maintained invariant.",
      "activeLine": 12
    }
  ],
  "complexity": {
    "time": "O(n^3).",
    "space": "O(n^2)."
  },
  "quiz": {
    "question": "Which state choice keeps Matrix Chain Multiplication correct?",
    "options": [
      {
        "key": "A",
        "text": "Track dp table and update it only through Matrix Chain Multiplication's transition.",
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
    "correctText": "Correct. Matrix Chain Multiplication stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Matrix Chain Multiplication needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "dynamic-programming",
  "algorithmSlug": "matrix-chain-multiplication"
};
