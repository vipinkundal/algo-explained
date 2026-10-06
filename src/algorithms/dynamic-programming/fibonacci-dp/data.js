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
  "meaning": "Compute the nth Fibonacci number by storing each smaller Fibonacci value once.",
  "problem": "Compute the nth Fibonacci number by storing each smaller Fibonacci value once.",
  "concept": "Fibonacci DP defines dp[i] as Fibonacci(i), so every later value depends only on dp[i - 1] and dp[i - 2].",
  "logicSummary": "Seed dp[0] and dp[1], then fill each index as the sum of the previous two states.",
  "transitionSummary": "For each index >= 2, dp[index] = dp[index - 1] + dp[index - 2].",
  "codeInsight": "The table removes the exponential repeated calls from naive recursion.",
  "realLifeExample": "Use it to teach overlapping subproblems and bottom-up tabulation.",
  "whenToUse": "Use Fibonacci DP when the recurrence is linear and smaller states can be reused.",
  "memoryTrick": "Each Fibonacci cell reads the two cells behind it.",
  "visualizerCaption": "Explore Fibonacci DP through a sample teaching model, then compare it with the runnable result.",
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
    "question": "Which explanation best describes Fibonacci DP?",
    "options": [
      {
        "key": "A",
        "text": "Compute the nth Fibonacci number by storing each smaller Fibonacci value once.",
        "correct": true
      },
      {
        "key": "B",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "C",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      }
    ],
    "correctText": "Correct. Compute the nth Fibonacci number by storing each smaller Fibonacci value once.",
    "incorrectText": "Try again. Compute the nth Fibonacci number by storing each smaller Fibonacci value once. Compare the small example in the lesson with your choice."
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
  },
  "learningGuide": {
    "mentalModel": "A dynamic-programming state names a smaller question. A recurrence explains how its answer uses answers you already know.",
    "family": "Saved subproblems",
    "example": "Define dp[i]: The ith Fibonacci number. Seed base values: dp[0] = 0 and dp[1] = 1. Add previous two: Each next state is the sum of the two previous states. Return dp[n]: The requested index stores the answer.",
    "sampleInput": [
      7
    ],
    "sampleResult": 13,
    "sampleScope": "This is the result of the unedited JavaScript function with the sample arguments. Changing the input or code can change the result.",
    "terms": [
      [
        "State",
        "One precisely defined subproblem."
      ],
      [
        "Recurrence",
        "A rule for computing a state from smaller states."
      ],
      [
        "Base case",
        "A known answer that starts the table or recursion."
      ]
    ],
    "pitfall": "Define what each table entry means before filling it. Check base cases, evaluation order, and whether a choice can be reused.",
    "checkpoint": "Explain this in your own words: Compute the nth Fibonacci number by storing each smaller Fibonacci value once."
  },
  "relatedLinks": []
};
