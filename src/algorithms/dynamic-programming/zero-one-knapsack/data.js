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
  "meaning": "Given item weights and values, maximize value without exceeding capacity when each item can be taken at most once.",
  "problem": "Given item weights and values, maximize value without exceeding capacity when each item can be taken at most once.",
  "concept": "0/1 Knapsack defines dp[cap] as the best value reachable for a capacity after processing some prefix of items.",
  "logicSummary": "Initialize dp with zeros, process each item once, scan capacities backward, and decide whether taking the item improves dp[cap].",
  "transitionSummary": "For each item and capacity, dp[cap] becomes max(skip item, dp[cap - weight] + value).",
  "codeInsight": "The capacity loop goes backward so the same item cannot be reused inside one item pass.",
  "realLifeExample": "Use it for budgeted selection, packing, feature choice, or any take/skip optimization with limited capacity.",
  "whenToUse": "Use 0/1 Knapsack when every item is either taken once or skipped.",
  "memoryTrick": "Backward capacity means one copy of the item.",
  "visualizerCaption": "Explore 0/1 Knapsack through a sample teaching model, then compare it with the runnable result.",
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
    "question": "Which explanation best describes 0/1 Knapsack?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "All grid problems allow diagonal movement without checking bounds.",
        "correct": false
      },
      {
        "key": "C",
        "text": "Given item weights and values, maximize value without exceeding capacity when each item can be taken at most once.",
        "correct": true
      }
    ],
    "correctText": "Correct. Given item weights and values, maximize value without exceeding capacity when each item can be taken at most once.",
    "incorrectText": "Try again. Given item weights and values, maximize value without exceeding capacity when each item can be taken at most once. Compare the small example in the lesson with your choice."
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
  },
  "learningGuide": {
    "mentalModel": "A dynamic-programming state names a smaller question. A recurrence explains how its answer uses answers you already know.",
    "family": "Saved subproblems",
    "example": "Define dp[cap]: Best value possible with the processed items and capacity cap. Start at zero: No items means value 0 for every capacity. Scan capacity backward: Update larger capacities first so the current item is used once. Read dp[capacity]: The final capacity cell is the best valid value.",
    "sampleInput": [
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
    "sampleResult": 7,
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
    "checkpoint": "Explain this in your own words: Given item weights and values, maximize value without exceeding capacity when each item can be taken at most once."
  },
  "relatedLinks": []
};
