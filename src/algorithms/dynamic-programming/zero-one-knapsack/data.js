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
  "meaning": "0/1 Knapsack is taught with its own DP state definition, recurrence, code trace, and answer cell.",
  "problem": "Given item weights and values, maximize value without exceeding capacity when each item can be taken at most once.",
  "concept": "0/1 Knapsack defines dp[cap] as the best value reachable for a capacity after processing some prefix of items.",
  "logicSummary": "Initialize dp with zeros, process each item once, scan capacities backward, and decide whether taking the item improves dp[cap].",
  "transitionSummary": "For each item and capacity, dp[cap] becomes max(skip item, dp[cap - weight] + value).",
  "codeInsight": "The capacity loop goes backward so the same item cannot be reused inside one item pass.",
  "realLifeExample": "Use it for budgeted selection, packing, feature choice, or any take/skip optimization with limited capacity.",
  "whenToUse": "Use 0/1 Knapsack when every item is either taken once or skipped.",
  "memoryTrick": "Backward capacity means one copy of the item.",
  "visualizerCaption": "The trace shows each item updating capacity cells from right to left.",
  "logicSteps": [
    {
      "title": "Define dp[cap]",
      "text": "Best value possible with the processed items and capacity cap."
    },
    {
      "title": "Start at zero",
      "text": "No items means value 0 for every capacity."
    },
    {
      "title": "Scan capacity backward",
      "text": "Update larger capacities first so the current item is used once."
    },
    {
      "title": "Read dp[capacity]",
      "text": "The final capacity cell is the best valid value."
    }
  ],
  "variables": [
    {
      "name": "weights, values",
      "purpose": "Parallel item arrays."
    },
    {
      "name": "capacity",
      "purpose": "Maximum allowed total weight."
    },
    {
      "name": "dp[cap]",
      "purpose": "Best value for capacity cap after processed items."
    },
    {
      "name": "item, cap",
      "purpose": "Current item and capacity cell being updated."
    }
  ],
  "dryRun": [
    {
      "label": "Initial",
      "title": "dp = [0,0,0,0,0,0]",
      "note": "With no items, every capacity has value 0.",
      "activeLine": 2,
      "codeInsight": "The one-dimensional table stores the best value for each capacity."
    },
    {
      "label": "Item 0",
      "title": "Weight 2, value 3",
      "note": "Capacities 5 down to 2 can take item 0.",
      "activeLine": 5,
      "codeInsight": "The backward loop protects the 0/1 restriction."
    },
    {
      "label": "Item 1",
      "title": "Weight 3, value 4",
      "note": "At capacity 5, taking item 1 plus dp[2] gives 7.",
      "activeLine": 6,
      "codeInsight": "The recurrence compares skip versus take."
    },
    {
      "label": "Answer",
      "title": "Return dp[5] = 7",
      "note": "Items with weights 2 and 3 fit exactly and give value 7.",
      "activeLine": 9,
      "codeInsight": "The requested capacity cell is the final answer."
    }
  ],
  "complexity": {
    "time": "O(n * capacity).",
    "space": "O(capacity)."
  },
  "quiz": {
    "question": "Which state keeps 0/1 Knapsack correct?",
    "options": [
      {
        "key": "A",
        "text": "Define dp[cap] as best value and scan capacity backward for each item.",
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
    "correctText": "Correct. 0/1 Knapsack works when its table meaning and recurrence stay aligned.",
    "incorrectText": "Not quite. 0/1 Knapsack needs its own state, recurrence, and answer cell."
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
    "static": true,
    "title": "0/1 Knapsack DP table",
    "ruleLabel": "DP recurrence",
    "rule": "For each item and capacity, dp[cap] becomes max(skip item, dp[cap - weight] + value).",
    "matrix": [
      [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        3,
        3,
        3,
        3
      ],
      [
        0,
        0,
        3,
        4,
        4,
        7
      ],
      [
        0,
        0,
        3,
        4,
        5,
        7
      ]
    ],
    "steps": [
      {
        "phase": "base row",
        "title": "No items processed",
        "note": "All capacities start at value 0.",
        "ruleLabel": "DP recurrence",
        "rule": "For each item and capacity, dp[cap] becomes max(skip item, dp[cap - weight] + value).",
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
            0,
            3
          ],
          [
            0,
            4
          ],
          [
            0,
            5
          ]
        ]
      },
      {
        "phase": "item 0",
        "title": "Take weight 2 at cap 2..5",
        "note": "Item 0 sets reachable value 3.",
        "ruleLabel": "DP recurrence",
        "rule": "For each item and capacity, dp[cap] becomes max(skip item, dp[cap - weight] + value).",
        "activeCells": [
          [
            1,
            2
          ],
          [
            1,
            5
          ]
        ],
        "visitedCells": [
          [
            0,
            0
          ],
          [
            1,
            2
          ],
          [
            1,
            3
          ],
          [
            1,
            4
          ],
          [
            1,
            5
          ]
        ]
      },
      {
        "phase": "item 1",
        "title": "Combine weights 2 and 3",
        "note": "dp[5] improves to 7 using value 3 + 4.",
        "ruleLabel": "DP recurrence",
        "rule": "For each item and capacity, dp[cap] becomes max(skip item, dp[cap - weight] + value).",
        "activeCells": [
          [
            2,
            5
          ]
        ],
        "visitedCells": [
          [
            1,
            2
          ],
          [
            2,
            3
          ],
          [
            2,
            5
          ]
        ]
      },
      {
        "phase": "answer",
        "title": "Best value at capacity 5",
        "note": "The final answer is 7.",
        "ruleLabel": "DP recurrence",
        "rule": "For each item and capacity, dp[cap] becomes max(skip item, dp[cap - weight] + value).",
        "activeCells": [
          [
            3,
            5
          ]
        ],
        "visitedCells": [
          [
            1,
            2
          ],
          [
            2,
            3
          ],
          [
            3,
            4
          ],
          [
            3,
            5
          ]
        ]
      }
    ]
  }
};
