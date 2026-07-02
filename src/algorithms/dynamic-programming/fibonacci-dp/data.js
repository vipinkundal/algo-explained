// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "fibonacci-dp",
  "title": "Fibonacci DP",
  "category": "Dynamic Programming",
  "route": "/algorithms/dynamic-programming/fibonacci-dp",
  "phase": 3,
  "priority": "high",
  "visualizerType": "dp-table",
  "icon": "table_chart",
  "codePath": "./src/algorithms/dynamic-programming/fibonacci-dp/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Fibonacci DP is taught with its own DP state definition, recurrence, code trace, and answer cell.",
  "problem": "Compute the nth Fibonacci number by storing each smaller Fibonacci value once.",
  "concept": "Fibonacci DP defines dp[i] as Fibonacci(i), so every later value depends only on dp[i - 1] and dp[i - 2].",
  "logicSummary": "Seed dp[0] and dp[1], then fill each index as the sum of the previous two states.",
  "transitionSummary": "For each index >= 2, dp[index] = dp[index - 1] + dp[index - 2].",
  "codeInsight": "The table removes the exponential repeated calls from naive recursion.",
  "realLifeExample": "Use it to teach overlapping subproblems and bottom-up tabulation.",
  "whenToUse": "Use Fibonacci DP when the recurrence is linear and smaller states can be reused.",
  "memoryTrick": "Each Fibonacci cell reads the two cells behind it.",
  "visualizerCaption": "The trace fills Fibonacci values left to right until n is reached.",
  "logicSteps": [
    {
      "title": "Define dp[i]",
      "text": "The ith Fibonacci number."
    },
    {
      "title": "Seed base values",
      "text": "dp[0] = 0 and dp[1] = 1."
    },
    {
      "title": "Add previous two",
      "text": "Each next state is the sum of the two previous states."
    },
    {
      "title": "Return dp[n]",
      "text": "The requested index stores the answer."
    }
  ],
  "variables": [
    {
      "name": "n",
      "purpose": "Fibonacci index to compute."
    },
    {
      "name": "dp",
      "purpose": "Stored Fibonacci values."
    },
    {
      "name": "index",
      "purpose": "Current Fibonacci state being filled."
    },
    {
      "name": "dp[index - 1], dp[index - 2]",
      "purpose": "Dependencies for the current state."
    }
  ],
  "dryRun": [
    {
      "label": "Base",
      "title": "dp[0] = 0, dp[1] = 1",
      "note": "The recurrence starts from two known values.",
      "activeLine": 4,
      "codeInsight": "Base cases stop the table from reading negative indices."
    },
    {
      "label": "i = 2",
      "title": "dp[2] = 1",
      "note": "0 + 1 gives the next Fibonacci value.",
      "activeLine": 5,
      "codeInsight": "Every loop iteration fills exactly one new state."
    },
    {
      "label": "i = 6",
      "title": "dp[6] = 8",
      "note": "The table has reused all previous values once.",
      "activeLine": 5,
      "codeInsight": "No recursive branch recomputes the same state."
    },
    {
      "label": "Answer",
      "title": "Return dp[7] = 13",
      "note": "The requested cell stores the answer.",
      "activeLine": 6,
      "codeInsight": "The return reads the final table entry."
    }
  ],
  "complexity": {
    "time": "O(n).",
    "space": "O(n), reducible to O(1) by keeping two values."
  },
  "quiz": {
    "question": "Which state keeps Fibonacci DP correct?",
    "options": [
      {
        "key": "A",
        "text": "Define dp[i] as Fibonacci(i) and fill each cell from the previous two cells.",
        "correct": true
      },
      {
        "key": "B",
        "text": "Reuse another DP recurrence without matching the state definition.",
        "correct": false
      },
      {
        "key": "C",
        "text": "Read the answer before the required dependency cells have been filled.",
        "correct": false
      }
    ],
    "correctText": "Correct. Fibonacci DP works when its table meaning and recurrence stay aligned.",
    "incorrectText": "Not quite. Fibonacci DP needs its own state, recurrence, and answer cell."
  },
  "categorySlug": "dynamic-programming",
  "algorithmSlug": "fibonacci-dp",
  "runnerInput": [
    7
  ],
  "animation": {
    "type": "array-flow",
    "static": true,
    "title": "Fibonacci DP DP trace",
    "ruleLabel": "DP invariant",
    "rule": "For each index >= 2, dp[index] = dp[index - 1] + dp[index - 2].",
    "values": [
      0,
      1,
      1,
      2,
      3,
      5,
      8,
      13
    ],
    "steps": [
      {
        "phase": "base",
        "title": "Seed first two values",
        "note": "dp[0] and dp[1] are known.",
        "ruleLabel": "DP invariant",
        "rule": "For each index >= 2, dp[index] = dp[index - 1] + dp[index - 2].",
        "activeIndices": [
          0,
          1
        ],
        "sortedIndices": [
          0,
          1
        ],
        "mutedIndices": [],
        "window": [
          0,
          7
        ],
        "primaryLabel": "base",
        "secondaryLabel": "For each index >= 2, dp[index] = dp[index - 1] + dp[index - 2]."
      },
      {
        "phase": "i = 2",
        "title": "Compute 0 + 1",
        "note": "dp[2] becomes 1.",
        "ruleLabel": "DP invariant",
        "rule": "For each index >= 2, dp[index] = dp[index - 1] + dp[index - 2].",
        "activeIndices": [
          0,
          1,
          2
        ],
        "sortedIndices": [
          0,
          1,
          2
        ],
        "mutedIndices": [],
        "window": [
          0,
          2
        ],
        "primaryLabel": "i = 2",
        "secondaryLabel": "For each index >= 2, dp[index] = dp[index - 1] + dp[index - 2]."
      },
      {
        "phase": "i = 6",
        "title": "Compute 3 + 5",
        "note": "dp[6] becomes 8.",
        "ruleLabel": "DP invariant",
        "rule": "For each index >= 2, dp[index] = dp[index - 1] + dp[index - 2].",
        "activeIndices": [
          4,
          5,
          6
        ],
        "sortedIndices": [
          0,
          1,
          2,
          3,
          4,
          5,
          6
        ],
        "mutedIndices": [],
        "window": [
          0,
          6
        ],
        "primaryLabel": "i = 6",
        "secondaryLabel": "For each index >= 2, dp[index] = dp[index - 1] + dp[index - 2]."
      },
      {
        "phase": "answer",
        "title": "dp[7] is 13",
        "note": "The target index has been filled.",
        "ruleLabel": "DP invariant",
        "rule": "For each index >= 2, dp[index] = dp[index - 1] + dp[index - 2].",
        "activeIndices": [
          7
        ],
        "sortedIndices": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7
        ],
        "mutedIndices": [],
        "window": [
          0,
          7
        ],
        "primaryLabel": "answer",
        "secondaryLabel": "For each index >= 2, dp[index] = dp[index - 1] + dp[index - 2]."
      }
    ]
  }
};
