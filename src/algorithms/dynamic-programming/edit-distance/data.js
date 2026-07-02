// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "edit-distance",
  "title": "Edit Distance",
  "category": "Dynamic Programming",
  "route": "/algorithms/dynamic-programming/edit-distance",
  "phase": 3,
  "priority": "medium",
  "visualizerType": "dp-grid",
  "icon": "table_chart",
  "codePath": "./src/algorithms/dynamic-programming/edit-distance/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Edit Distance is taught with its own DP state definition, transition, code trace, and answer state.",
  "problem": "Find the minimum number of insert, delete, or replace operations needed to transform one string into another.",
  "concept": "Edit Distance defines dp[i][j] as the fewest operations needed to convert the first i characters of a into the first j characters of b.",
  "logicSummary": "Initialize empty-prefix costs, then fill each prefix pair by matching characters or trying insert, delete, and replace.",
  "transitionSummary": "If characters match, use dp[i-1][j-1]; otherwise use 1 + min(delete, insert, replace).",
  "codeInsight": "The first row and column model converting from or to an empty string, so every later cell has valid neighbors.",
  "realLifeExample": "Use edit distance for spell checking, fuzzy search, DNA mutation distance, and text diff scoring.",
  "whenToUse": "Use it when the allowed operations are insert, delete, and replace with equal cost.",
  "memoryTrick": "Match takes diagonal; mismatch costs one plus the cheapest neighbor.",
  "visualizerCaption": "The trace fills a prefix-pair table for horse -> ros.",
  "logicSteps": [
    {
      "title": "Define dp[i][j]",
      "text": "Minimum edits to convert a[0..i) into b[0..j)."
    },
    {
      "title": "Seed empty prefixes",
      "text": "Deleting i characters or inserting j characters creates the first column and row."
    },
    {
      "title": "Compare characters",
      "text": "A match copies the diagonal; a mismatch tries the three edit operations."
    },
    {
      "title": "Read bottom-right",
      "text": "dp[a.length][b.length] is the full transformation cost."
    }
  ],
  "variables": [
    {
      "name": "a, b",
      "purpose": "Source and target strings."
    },
    {
      "name": "dp[i][j]",
      "purpose": "Best edit count for prefix pair."
    },
    {
      "name": "deleteCost",
      "purpose": "Cost after deleting a character from a."
    },
    {
      "name": "insertCost, replaceCost",
      "purpose": "Costs for inserting into a or replacing a character."
    }
  ],
  "dryRun": [
    {
      "label": "Base",
      "title": "Empty prefix costs",
      "note": "horse -> empty needs deletions, empty -> ros needs insertions.",
      "activeLine": 3,
      "codeInsight": "Boundary rows are real edit operations, not placeholders."
    },
    {
      "label": "h vs r",
      "title": "Replace h with r",
      "note": "The first real cell becomes 1.",
      "activeLine": 10,
      "codeInsight": "Mismatch takes one edit plus the cheapest dependency."
    },
    {
      "label": "o vs o",
      "title": "Copy diagonal on match",
      "note": "Matching o carries dp[1][1].",
      "activeLine": 9,
      "codeInsight": "A match adds no operation."
    },
    {
      "label": "Answer",
      "title": "horse -> ros costs 3",
      "note": "One optimal sequence is replace h, delete r, delete e.",
      "activeLine": 13,
      "codeInsight": "The bottom-right cell stores the minimum edit count."
    }
  ],
  "complexity": {
    "time": "O(nm).",
    "space": "O(nm)."
  },
  "quiz": {
    "question": "Which state keeps Edit Distance correct?",
    "options": [
      {
        "key": "A",
        "text": "Define dp[i][j] as the edit count for prefixes and use insert/delete/replace dependencies.",
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
    "correctText": "Correct. Edit Distance works when the state meaning, transition, and answer state stay aligned.",
    "incorrectText": "Not quite. Edit Distance needs its own state, dependencies, and stop condition."
  },
  "categorySlug": "dynamic-programming",
  "algorithmSlug": "edit-distance",
  "runnerInput": [
    "horse",
    "ros"
  ],
  "animation": {
    "type": "matrix-flow",
    "static": true,
    "title": "Edit Distance DP table",
    "ruleLabel": "DP recurrence",
    "rule": "If characters match, use dp[i-1][j-1]; otherwise use 1 + min(delete, insert, replace).",
    "matrix": [
      [
        0,
        1,
        2,
        3
      ],
      [
        1,
        1,
        2,
        3
      ],
      [
        2,
        2,
        1,
        2
      ],
      [
        3,
        2,
        2,
        2
      ],
      [
        4,
        3,
        3,
        2
      ],
      [
        5,
        4,
        4,
        3
      ]
    ],
    "steps": [
      {
        "phase": "base",
        "title": "Seed empty prefixes",
        "note": "First row and column count insertions/deletions.",
        "ruleLabel": "DP recurrence",
        "rule": "If characters match, use dp[i-1][j-1]; otherwise use 1 + min(delete, insert, replace).",
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
            1,
            0
          ]
        ]
      },
      {
        "phase": "replace",
        "title": "h vs r needs one replace",
        "note": "dp[1][1] = 1.",
        "ruleLabel": "DP recurrence",
        "rule": "If characters match, use dp[i-1][j-1]; otherwise use 1 + min(delete, insert, replace).",
        "activeCells": [
          [
            1,
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
        "phase": "match",
        "title": "o matches o",
        "note": "dp[2][2] copies the diagonal.",
        "ruleLabel": "DP recurrence",
        "rule": "If characters match, use dp[i-1][j-1]; otherwise use 1 + min(delete, insert, replace).",
        "activeCells": [
          [
            2,
            2
          ]
        ],
        "visitedCells": [
          [
            1,
            1
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
      },
      {
        "phase": "answer",
        "title": "horse -> ros costs 3",
        "note": "The answer is dp[5][3] = 3.",
        "ruleLabel": "DP recurrence",
        "rule": "If characters match, use dp[i-1][j-1]; otherwise use 1 + min(delete, insert, replace).",
        "activeCells": [
          [
            5,
            3
          ]
        ],
        "visitedCells": [
          [
            3,
            2
          ],
          [
            4,
            3
          ],
          [
            5,
            3
          ]
        ]
      }
    ]
  }
};
