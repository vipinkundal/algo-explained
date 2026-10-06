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
  "meaning": "Count paths from the top-left to bottom-right of a grid while blocked cells cannot be used.",
  "problem": "Count paths from the top-left to bottom-right of a grid while blocked cells cannot be used.",
  "concept": "Grid DP defines dp[row][col] as the number of ways to reach that cell from allowed top and left predecessors.",
  "logicSummary": "Scan cells in row-major order, skip obstacles, seed the start cell, and add ways from top plus left.",
  "transitionSummary": "For each open cell, dp[row][col] = ways from above + ways from left.",
  "codeInsight": "Row-major order is valid because the top and left dependencies have already been computed.",
  "realLifeExample": "Use it for path counting, robot movement, grid scoring, and blocked-map route planning.",
  "whenToUse": "Use DP on Grids when each cell depends on nearby previously solved cells.",
  "memoryTrick": "A grid cell inherits ways from top and left.",
  "visualizerCaption": "Explore DP on Grids through a sample teaching model, then compare it with the runnable result.",
  "logicSteps": [
    {
      "title": "Define dp[row][col]",
      "text": "Number of valid paths to that cell."
    },
    {
      "title": "Seed start",
      "text": "The start cell has one path if it is open."
    },
    {
      "title": "Skip blockers",
      "text": "Blocked cells contribute zero paths."
    },
    {
      "title": "Add dependencies",
      "text": "Open cells add top and left path counts."
    }
  ],
  "variables": [
    {
      "name": "grid",
      "purpose": "0 means open, 1 means blocked."
    },
    {
      "name": "row, col",
      "purpose": "Current cell being filled."
    },
    {
      "name": "dp[row][col]",
      "purpose": "Number of paths to current cell."
    },
    {
      "name": "top, left",
      "purpose": "Already-computed predecessor cells."
    }
  ],
  "dryRun": [
    {
      "label": "Start",
      "title": "dp[0][0] = 1",
      "note": "There is one way to stand at the open start.",
      "activeLine": 8,
      "codeInsight": "The start cell is the base case."
    },
    {
      "label": "First row",
      "title": "Carry paths right",
      "note": "Open cells in the first row inherit from the left.",
      "activeLine": 9,
      "codeInsight": "Missing top values contribute 0."
    },
    {
      "label": "Block",
      "title": "Obstacle at center",
      "note": "A blocked cell is skipped and stays 0.",
      "activeLine": 7,
      "codeInsight": "continue prevents blocked cells from receiving paths."
    },
    {
      "label": "Target",
      "title": "Bottom-right gets 2",
      "note": "The target combines paths from top and left.",
      "activeLine": 11,
      "codeInsight": "The final cell is the answer."
    }
  ],
  "complexity": {
    "time": "O(rows * cols).",
    "space": "O(rows * cols)."
  },
  "quiz": {
    "question": "Which explanation best describes DP on Grids?",
    "options": [
      {
        "key": "A",
        "text": "Count paths from the top-left to bottom-right of a grid while blocked cells cannot be used.",
        "correct": true
      },
      {
        "key": "B",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "C",
        "text": "All grid problems allow diagonal movement without checking bounds.",
        "correct": false
      }
    ],
    "correctText": "Correct. Count paths from the top-left to bottom-right of a grid while blocked cells cannot be used.",
    "incorrectText": "Try again. Count paths from the top-left to bottom-right of a grid while blocked cells cannot be used. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "dynamic-programming",
  "algorithmSlug": "dp-on-grids",
  "runnerInput": [
    [
      [
        0,
        0,
        0
      ],
      [
        0,
        1,
        0
      ],
      [
        0,
        0,
        0
      ]
    ]
  ],
  "animation": {
    "type": "matrix-flow",
    "static": true,
    "title": "DP on Grids DP table",
    "ruleLabel": "DP recurrence",
    "rule": "For each open cell, dp[row][col] = ways from above + ways from left.",
    "matrix": [
      [
        1,
        1,
        1
      ],
      [
        1,
        0,
        1
      ],
      [
        1,
        1,
        2
      ]
    ],
    "steps": [
      {
        "phase": "start",
        "title": "Seed start cell",
        "note": "dp[0][0] = 1.",
        "ruleLabel": "DP recurrence",
        "rule": "For each open cell, dp[row][col] = ways from above + ways from left.",
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
        "phase": "first row",
        "title": "Fill right from left",
        "note": "Each open first-row cell has one path.",
        "ruleLabel": "DP recurrence",
        "rule": "For each open cell, dp[row][col] = ways from above + ways from left.",
        "activeCells": [
          [
            0,
            1
          ],
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
        "phase": "obstacle",
        "title": "Center is blocked",
        "note": "The blocked center stays 0.",
        "ruleLabel": "DP recurrence",
        "rule": "For each open cell, dp[row][col] = ways from above + ways from left.",
        "activeCells": [
          [
            1,
            1
          ]
        ],
        "visitedCells": [
          [
            0,
            1
          ],
          [
            1,
            0
          ],
          [
            1,
            1
          ]
        ]
      },
      {
        "phase": "target",
        "title": "Target combines top and left",
        "note": "dp[2][2] = 1 + 1 = 2.",
        "ruleLabel": "DP recurrence",
        "rule": "For each open cell, dp[row][col] = ways from above + ways from left.",
        "activeCells": [
          [
            2,
            2
          ]
        ],
        "visitedCells": [
          [
            0,
            2
          ],
          [
            1,
            2
          ],
          [
            2,
            1
          ],
          [
            2,
            2
          ]
        ]
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "A dynamic-programming state names a smaller question. A recurrence explains how its answer uses answers you already know.",
    "family": "Saved subproblems",
    "example": "Define dp[row][col]: Number of valid paths to that cell. Seed start: The start cell has one path if it is open. Skip blockers: Blocked cells contribute zero paths. Add dependencies: Open cells add top and left path counts.",
    "sampleInput": [
      [
        [
          0,
          0,
          0
        ],
        [
          0,
          1,
          0
        ],
        [
          0,
          0,
          0
        ]
      ]
    ],
    "sampleResult": 2,
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
    "checkpoint": "Explain this in your own words: Count paths from the top-left to bottom-right of a grid while blocked cells cannot be used."
  },
  "relatedLinks": []
};
