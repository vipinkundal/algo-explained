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
  "concept": "DP on Grids is useful when the same subproblems appear again and storing answers prevents repeated work. Use this when you can define a state, base cases, and a recurrence.",
  "logicSummary": "Define what one DP state means, initialize base cases, fill dependent states, and read the target state.",
  "transitionSummary": "Each step computes one state from already-solved smaller or earlier states.",
  "codeInsight": "The DP table shape is the algorithm: every index in the code corresponds to a named subproblem.",
  "realLifeExample": "DP on Grids appears when overlapping subproblems would otherwise be recomputed.",
  "whenToUse": "Use DP on Grids when the recurrence and base cases match the problem statement.",
  "memoryTrick": "DP on Grids: name the invariant, then trace the exact state change.",
  "visualizerCaption": "DP on Grids is shown as a dependency-ordered DP fill. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Define state",
      "text": "Name exactly what one cell or entry means."
    },
    {
      "title": "Set base cases",
      "text": "Fill answers that need no recurrence."
    },
    {
      "title": "Apply recurrence",
      "text": "Compute each state from solved dependencies."
    },
    {
      "title": "Read target",
      "text": "Return the state requested by the problem."
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
      "label": "State meaning",
      "title": "Define DP cell",
      "note": "The code first needs a precise subproblem meaning.",
      "activeLine": 1,
      "codeInsight": "The code first needs a precise subproblem meaning."
    },
    {
      "label": "Base case",
      "title": "Seed known answers",
      "note": "Base values stop the recurrence from falling through.",
      "activeLine": 3,
      "codeInsight": "Base values stop the recurrence from falling through."
    },
    {
      "label": "Recurrence",
      "title": "Fill next state",
      "note": "The transition combines previously solved states.",
      "activeLine": 6,
      "codeInsight": "The transition combines previously solved states."
    },
    {
      "label": "Target",
      "title": "Return requested state",
      "note": "The answer is read from the final DP state.",
      "activeLine": 10,
      "codeInsight": "The answer is read from the final DP state."
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
  "algorithmSlug": "dp-on-grids",
  "runnerInput": [
    [
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  ]
};
