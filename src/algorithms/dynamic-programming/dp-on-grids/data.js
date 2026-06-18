// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "dp-on-grids",
  "title": "DP on Grids",
  "category": "Dynamic Programming",
  "route": "/algorithms/dynamic-programming/dp-on-grids",
  "phase": 4,
  "priority": "high",
  "visualizerType": "grid-path-dp",
  "icon": "table_chart",
  "codePath": "./src/algorithms/dynamic-programming/dp-on-grids/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "DP on Grids is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "DP on Grids fills each cell from previously reachable neighboring cells.",
  "concept": "DP on Grids fills each cell from previously reachable neighboring cells.",
  "logicSummary": "DP on Grids defines subproblems, initializes base cases, fills states in dependency order, and reads the requested state as the answer.",
  "transitionSummary": "Compute one DP state from already-solved smaller states.",
  "codeInsight": "The DP table shape is the algorithm: every index in the code corresponds to a named subproblem.",
  "realLifeExample": "DP on Grids appears when overlapping subproblems would otherwise be recomputed.",
  "whenToUse": "Use DP on Grids when the recurrence and base cases match the problem statement.",
  "memoryTrick": "DP on Grids: state definition first, recurrence second, loops third.",
  "visualizerCaption": "A grid path dp walkthrough showing DP on Grids' input, state, transition, and answer.",
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
      "note": "DP on Grids starts by reading the exact input shape it owns.",
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
    "time": "O(rows * cols).",
    "space": "O(rows * cols)."
  },
  "quiz": {
    "question": "Which state choice keeps DP on Grids correct?",
    "options": [
      {
        "key": "A",
        "text": "Track dp table and update it only through DP on Grids' transition.",
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
    "correctText": "Correct. DP on Grids stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. DP on Grids needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "dynamic-programming",
  "algorithmSlug": "dp-on-grids"
};
