// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "coin-change",
  "title": "Coin Change",
  "category": "Dynamic Programming",
  "route": "/algorithms/dynamic-programming/coin-change",
  "phase": 3,
  "priority": "high",
  "visualizerType": "dp-array",
  "icon": "table_chart",
  "codePath": "./src/algorithms/dynamic-programming/coin-change/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Coin Change is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Coin Change stores the fewest coins needed for every amount up to the target.",
  "concept": "Coin Change is useful when the same subproblems appear again and storing answers prevents repeated work. Use this when you can define a state, base cases, and a recurrence.",
  "logicSummary": "Define what one DP state means, initialize base cases, fill dependent states, and read the target state.",
  "transitionSummary": "Each step computes one state from already-solved smaller or earlier states.",
  "codeInsight": "The DP table shape is the algorithm: every index in the code corresponds to a named subproblem.",
  "realLifeExample": "Coin Change appears when overlapping subproblems would otherwise be recomputed.",
  "whenToUse": "Use Coin Change when the recurrence and base cases match the problem statement.",
  "memoryTrick": "Coin Change: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Coin Change is shown as a dependency-ordered DP fill. The numbered steps follow the code path used to maintain the main invariant.",
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
    "time": "O(coins * amount).",
    "space": "O(amount)."
  },
  "quiz": {
    "question": "Which state choice keeps Coin Change correct?",
    "options": [
      {
        "key": "A",
        "text": "Track dp table and update it only through Coin Change's transition.",
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
    "correctText": "Correct. Coin Change stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Coin Change needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "dynamic-programming",
  "algorithmSlug": "coin-change",
  "runnerInput": [
    [
      1,
      3,
      4
    ],
    6
  ],
  "animation": {
    "type": "array-flow",
    "title": "Coin Change array state",
    "ruleLabel": "Array invariant",
    "rule": "Each step computes one state from already-solved smaller or earlier states.",
    "values": [
      1,
      3,
      4
    ],
    "steps": [
      {
        "phase": "State meaning",
        "title": "Define DP cell",
        "note": "The code first needs a precise subproblem meaning.",
        "ruleLabel": "Coin Change invariant",
        "rule": "The code first needs a precise subproblem meaning.",
        "activeIndices": [
          0
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          1
        ],
        "primaryLabel": "State meaning",
        "secondaryLabel": "Each step computes one state from already-solved smaller or earlier states."
      },
      {
        "phase": "Base case",
        "title": "Seed known answers",
        "note": "Base values stop the recurrence from falling through.",
        "ruleLabel": "Coin Change invariant",
        "rule": "Base values stop the recurrence from falling through.",
        "activeIndices": [
          1,
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          2
        ],
        "primaryLabel": "Base case",
        "secondaryLabel": "Each step computes one state from already-solved smaller or earlier states."
      },
      {
        "phase": "Recurrence",
        "title": "Fill next state",
        "note": "The transition combines previously solved states.",
        "ruleLabel": "Coin Change invariant",
        "rule": "The transition combines previously solved states.",
        "activeIndices": [
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          1,
          2
        ],
        "primaryLabel": "Recurrence",
        "secondaryLabel": "Each step computes one state from already-solved smaller or earlier states."
      },
      {
        "phase": "Target",
        "title": "Return requested state",
        "note": "The answer is read from the final DP state.",
        "ruleLabel": "Coin Change invariant",
        "rule": "The answer is read from the final DP state.",
        "activeIndices": [
          2,
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          1,
          2
        ],
        "primaryLabel": "Target",
        "secondaryLabel": "Each step computes one state from already-solved smaller or earlier states."
      }
    ]
  }
};
