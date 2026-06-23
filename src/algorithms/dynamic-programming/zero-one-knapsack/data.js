// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "zero-one-knapsack",
  "title": "0/1 Knapsack",
  "category": "Dynamic Programming",
  "route": "/algorithms/dynamic-programming/zero-one-knapsack",
  "phase": 3,
  "priority": "high",
  "visualizerType": "dp-grid",
  "icon": "table_chart",
  "codePath": "./src/algorithms/dynamic-programming/zero-one-knapsack/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "0/1 Knapsack is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "0/1 Knapsack decides for each item whether taking it improves capacity-limited value.",
  "concept": "0/1 Knapsack is useful when the same subproblems appear again and storing answers prevents repeated work. Use this when you can define a state, base cases, and a recurrence.",
  "logicSummary": "Define what one DP state means, initialize base cases, fill dependent states, and read the target state.",
  "transitionSummary": "Each step computes one state from already-solved smaller or earlier states.",
  "codeInsight": "The DP table shape is the algorithm: every index in the code corresponds to a named subproblem.",
  "realLifeExample": "0/1 Knapsack appears when overlapping subproblems would otherwise be recomputed.",
  "whenToUse": "Use 0/1 Knapsack when the recurrence and base cases match the problem statement.",
  "memoryTrick": "0/1 Knapsack: name the invariant, then trace the exact state change.",
  "visualizerCaption": "0/1 Knapsack is shown as a dependency-ordered DP fill. The numbered steps follow the code path used to maintain the main invariant.",
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
      "activeLine": 6,
      "codeInsight": "Prepares dp with a default value so unresolved positions already have the correct fallback answer."
    },
    {
      "label": "Base case",
      "title": "Seed known answers",
      "note": "Base values stop the recurrence from falling through.",
      "activeLine": 5,
      "codeInsight": "Defines zeroOneKnapsack and names the input weights, values, capacity; edits to those inputs change the visual state and output."
    },
    {
      "label": "Recurrence",
      "title": "Fill next state",
      "note": "The transition combines previously solved states.",
      "activeLine": 6,
      "codeInsight": "Prepares dp with a default value so unresolved positions already have the correct fallback answer."
    },
    {
      "label": "Target",
      "title": "Return requested state",
      "note": "The answer is read from the final DP state.",
      "activeLine": 12,
      "codeInsight": "Returns dp[capacity], the final value maintained by 0/1 Knapsack's code path."
    }
  ],
  "complexity": {
    "time": "O(n * capacity).",
    "space": "O(capacity)."
  },
  "quiz": {
    "question": "Which state choice keeps 0/1 Knapsack correct?",
    "options": [
      {
        "key": "A",
        "text": "Track dp table and update it only through 0/1 Knapsack's transition.",
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
    "correctText": "Correct. 0/1 Knapsack stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. 0/1 Knapsack needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "dynamic-programming",
  "algorithmSlug": "zero-one-knapsack",
  "runnerInput": [
    [
      2,
      3,
      4
    ],
    [
      3,
      4,
      5
    ],
    5
  ],
  "animation": {
    "type": "matrix-flow",
    "title": "0/1 Knapsack matrix state",
    "ruleLabel": "Grid rule",
    "rule": "Each step computes one state from already-solved smaller or earlier states.",
    "matrix": [
      [
        1,
        0,
        1
      ],
      [
        0,
        1,
        0
      ],
      [
        1,
        1,
        1
      ]
    ],
    "steps": [
      {
        "phase": "State meaning",
        "title": "Define DP cell",
        "note": "The code first needs a precise subproblem meaning.",
        "ruleLabel": "0/1 Knapsack invariant",
        "rule": "Prepares dp with a default value so unresolved positions already have the correct fallback answer.",
        "activeCells": [
          [
            0,
            0
          ]
        ],
        "visitedCells": [
          [
            0,
            0
          ]
        ]
      },
      {
        "phase": "Base case",
        "title": "Seed known answers",
        "note": "Base values stop the recurrence from falling through.",
        "ruleLabel": "0/1 Knapsack invariant",
        "rule": "Defines zeroOneKnapsack and names the input weights, values, capacity; edits to those inputs change the visual state and output.",
        "activeCells": [
          [
            0,
            1
          ]
        ],
        "visitedCells": [
          [
            0,
            0
          ],
          [
            0,
            1
          ]
        ]
      },
      {
        "phase": "Recurrence",
        "title": "Fill next state",
        "note": "The transition combines previously solved states.",
        "ruleLabel": "0/1 Knapsack invariant",
        "rule": "Prepares dp with a default value so unresolved positions already have the correct fallback answer.",
        "activeCells": [
          [
            0,
            2
          ]
        ],
        "visitedCells": [
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ]
        ]
      },
      {
        "phase": "Target",
        "title": "Return requested state",
        "note": "The answer is read from the final DP state.",
        "ruleLabel": "0/1 Knapsack invariant",
        "rule": "Returns dp[capacity], the final value maintained by 0/1 Knapsack's code path.",
        "activeCells": [
          [
            1,
            0
          ]
        ],
        "visitedCells": [
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ],
          [
            1,
            0
          ]
        ]
      }
    ]
  }
};
