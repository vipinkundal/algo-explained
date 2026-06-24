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
  "meaning": "Matrix Chain Multiplication is taught with its own DP state definition, transition, code trace, and answer state.",
  "problem": "Find the minimum scalar multiplication cost for multiplying a chain of matrices without changing their order.",
  "concept": "Matrix Chain DP defines dp[left][right] as the minimum cost to multiply matrices left through right.",
  "logicSummary": "Solve short intervals first, then try every split point for larger intervals and keep the cheapest split.",
  "transitionSummary": "dp[l][r] = min over split k of dp[l][k] + dp[k+1][r] + dims[l] * dims[k+1] * dims[r+1].",
  "codeInsight": "The outer interval-length loop guarantees both subchains around each split are already solved.",
  "realLifeExample": "Use it for optimizing matrix expression evaluation and any ordered interval split optimization.",
  "whenToUse": "Use matrix-chain DP when the problem asks for the best way to parenthesize an ordered sequence.",
  "memoryTrick": "Every interval tries every final split.",
  "visualizerCaption": "The trace fills interval costs by increasing chain length.",
  "logicSteps": [
    {
      "title": "Define interval state",
      "text": "dp[left][right] is the minimum cost for matrices left through right."
    },
    {
      "title": "Set single matrix cost",
      "text": "A single matrix needs no multiplication, so diagonal cells are 0."
    },
    {
      "title": "Grow intervals",
      "text": "Fill length 2, then length 3, and so on."
    },
    {
      "title": "Try splits",
      "text": "Each interval tests every possible final split point."
    }
  ],
  "variables": [
    {
      "name": "dimensions",
      "purpose": "Matrix i has size dimensions[i] x dimensions[i + 1]."
    },
    {
      "name": "dp[left][right]",
      "purpose": "Minimum cost for an interval of matrices."
    },
    {
      "name": "length",
      "purpose": "Current interval size."
    },
    {
      "name": "split",
      "purpose": "Final multiplication boundary tested inside an interval."
    }
  ],
  "dryRun": [
    {
      "label": "Base",
      "title": "Diagonal costs are zero",
      "note": "A single matrix has no multiplication cost.",
      "activeLine": 3,
      "codeInsight": "The DP table is indexed by matrix interval."
    },
    {
      "label": "Length 2",
      "title": "Compute adjacent products",
      "note": "A1*A2 costs 10*30*5 = 1500.",
      "activeLine": 9,
      "codeInsight": "Length 2 intervals have one possible split."
    },
    {
      "label": "Length 3",
      "title": "Try both split points",
      "note": "The interval [0,2] chooses the cheaper of two parenthesizations.",
      "activeLine": 10,
      "codeInsight": "The split loop is the core optimization."
    },
    {
      "label": "Answer",
      "title": "Minimum cost is 4500",
      "note": "For dimensions [10,30,5,60], the best order costs 4500.",
      "activeLine": 14,
      "codeInsight": "dp[0][n-1] covers the whole matrix chain."
    }
  ],
  "complexity": {
    "time": "O(n^3).",
    "space": "O(n^2)."
  },
  "quiz": {
    "question": "Which state keeps Matrix Chain Multiplication correct?",
    "options": [
      {
        "key": "A",
        "text": "Define dp[left][right] for intervals and try every split after shorter intervals are solved.",
        "correct": true
      },
      {
        "key": "B",
        "text": "Reuse another DP recurrence without matching this algorithm's state.",
        "correct": false
      },
      {
        "key": "C",
        "text": "Read the final answer before the required dependency states are solved.",
        "correct": false
      }
    ],
    "correctText": "Correct. Matrix Chain Multiplication works when the state meaning, transition, and answer state stay aligned.",
    "incorrectText": "Not quite. Matrix Chain Multiplication needs its own state, dependencies, and stop condition."
  },
  "categorySlug": "dynamic-programming",
  "algorithmSlug": "matrix-chain-multiplication",
  "runnerInput": [
    [
      10,
      30,
      5,
      60
    ]
  ],
  "animation": {
    "type": "matrix-flow",
    "static": true,
    "title": "Matrix Chain Multiplication DP table",
    "ruleLabel": "DP recurrence",
    "rule": "dp[l][r] = min over split k of dp[l][k] + dp[k+1][r] + dims[l] * dims[k+1] * dims[r+1].",
    "matrix": [
      [
        0,
        1500,
        4500
      ],
      [
        0,
        0,
        9000
      ],
      [
        0,
        0,
        0
      ]
    ],
    "steps": [
      {
        "phase": "base",
        "title": "Single matrices cost 0",
        "note": "The diagonal is the base case.",
        "ruleLabel": "DP recurrence",
        "rule": "dp[l][r] = min over split k of dp[l][k] + dp[k+1][r] + dims[l] * dims[k+1] * dims[r+1].",
        "activeCells": [
          [
            0,
            0
          ],
          [
            1,
            1
          ],
          [
            2,
            2
          ]
        ],
        "visitedCells": [
          [
            0,
            0
          ],
          [
            1,
            1
          ],
          [
            2,
            2
          ]
        ]
      },
      {
        "phase": "length 2",
        "title": "Fill adjacent intervals",
        "note": "dp[0][1] = 1500 and dp[1][2] = 9000.",
        "ruleLabel": "DP recurrence",
        "rule": "dp[l][r] = min over split k of dp[l][k] + dp[k+1][r] + dims[l] * dims[k+1] * dims[r+1].",
        "activeCells": [
          [
            0,
            1
          ],
          [
            1,
            2
          ]
        ],
        "visitedCells": [
          [
            0,
            0
          ],
          [
            1,
            1
          ],
          [
            2,
            2
          ],
          [
            0,
            1
          ],
          [
            1,
            2
          ]
        ]
      },
      {
        "phase": "split",
        "title": "Try splits for [0,2]",
        "note": "Split at 1 gives 1500 + 10*5*60 = 4500.",
        "ruleLabel": "DP recurrence",
        "rule": "dp[l][r] = min over split k of dp[l][k] + dp[k+1][r] + dims[l] * dims[k+1] * dims[r+1].",
        "activeCells": [
          [
            0,
            2
          ]
        ],
        "visitedCells": [
          [
            0,
            1
          ],
          [
            1,
            2
          ],
          [
            0,
            2
          ]
        ]
      },
      {
        "phase": "answer",
        "title": "Minimum cost is 4500",
        "note": "The full-chain answer is dp[0][2].",
        "ruleLabel": "DP recurrence",
        "rule": "dp[l][r] = min over split k of dp[l][k] + dp[k+1][r] + dims[l] * dims[k+1] * dims[r+1].",
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
            1,
            2
          ],
          [
            0,
            2
          ]
        ]
      }
    ]
  }
};
