// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "longest-common-subsequence",
  "title": "Longest Common Subsequence",
  "category": "Dynamic Programming",
  "route": "/algorithms/dynamic-programming/longest-common-subsequence",
  "phase": 3,
  "priority": "high",
  "visualizerType": "dp-grid",
  "icon": "table_chart",
  "codePath": "./src/algorithms/dynamic-programming/longest-common-subsequence/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Find the length of the longest sequence that appears in both strings without requiring contiguous positions.",
  "problem": "Find the length of the longest sequence that appears in both strings without requiring contiguous positions.",
  "concept": "LCS defines dp[i][j] as the best subsequence length using the first i characters of a and first j characters of b.",
  "logicSummary": "Build a prefix-pair table; matching characters extend the diagonal, while mismatches keep the better top or left answer.",
  "transitionSummary": "If a[i - 1] === b[j - 1], use dp[i - 1][j - 1] + 1; otherwise use max(dp[i - 1][j], dp[i][j - 1]).",
  "codeInsight": "Rows and columns include an empty-prefix base row and column, which makes boundary transitions simple.",
  "realLifeExample": "Use LCS for diff tools, similarity scoring, DNA sequence comparison, and edit-distance-style reasoning.",
  "whenToUse": "Use LCS when order matters but characters do not need to be adjacent.",
  "memoryTrick": "Match takes diagonal plus one; mismatch takes best of top or left.",
  "visualizerCaption": "Explore Longest Common Subsequence through a sample teaching model, then compare it with the runnable result.",
  "logicSteps": [
    {
      "title": "Define dp[i][j]",
      "text": "Best LCS length for prefixes a[0..i) and b[0..j)."
    },
    {
      "title": "Seed empty prefixes",
      "text": "Empty string against anything has LCS length 0."
    },
    {
      "title": "Match or mismatch",
      "text": "Use diagonal on match, otherwise best top/left."
    },
    {
      "title": "Read bottom-right",
      "text": "The final cell is the full-string LCS length."
    }
  ],
  "variables": [
    {
      "name": "a, b",
      "purpose": "Input strings."
    },
    {
      "name": "dp[i][j]",
      "purpose": "Best LCS length for two prefixes."
    },
    {
      "name": "i, j",
      "purpose": "Current prefix lengths."
    },
    {
      "name": "bottom-right cell",
      "purpose": "Answer for the full strings."
    }
  ],
  "dryRun": [
    {
      "label": "Base",
      "title": "Empty prefixes are zero",
      "note": "Row 0 and column 0 start as 0.",
      "activeLine": 2,
      "codeInsight": "The table has one extra row and column for empty prefixes."
    },
    {
      "label": "Match a",
      "title": "a matches a",
      "note": "dp[1][1] = dp[0][0] + 1.",
      "activeLine": 5,
      "codeInsight": "A match extends the diagonal result."
    },
    {
      "label": "Mismatch",
      "title": "b versus c",
      "note": "Keep max(top, left) when characters differ.",
      "activeLine": 5,
      "codeInsight": "Mismatch never decreases the best subsequence length."
    },
    {
      "label": "Answer",
      "title": "LCS length is 3",
      "note": "abcde and ace share ace.",
      "activeLine": 8,
      "codeInsight": "The bottom-right cell is returned."
    }
  ],
  "complexity": {
    "time": "O(nm).",
    "space": "O(nm)."
  },
  "quiz": {
    "question": "Which explanation best describes Longest Common Subsequence?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "Find the length of the longest sequence that appears in both strings without requiring contiguous positions.",
        "correct": true
      },
      {
        "key": "C",
        "text": "All grid problems allow diagonal movement without checking bounds.",
        "correct": false
      }
    ],
    "correctText": "Correct. Find the length of the longest sequence that appears in both strings without requiring contiguous positions.",
    "incorrectText": "Try again. Find the length of the longest sequence that appears in both strings without requiring contiguous positions. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "dynamic-programming",
  "algorithmSlug": "longest-common-subsequence",
  "runnerInput": [
    "abcde",
    "ace"
  ],
  "animation": {
    "type": "matrix-flow",
    "static": true,
    "title": "Longest Common Subsequence DP table",
    "ruleLabel": "DP recurrence",
    "rule": "If a[i - 1] === b[j - 1], use dp[i - 1][j - 1] + 1; otherwise use max(dp[i - 1][j], dp[i][j - 1]).",
    "matrix": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        1,
        1,
        1
      ],
      [
        0,
        1,
        1,
        1
      ],
      [
        0,
        1,
        2,
        2
      ],
      [
        0,
        1,
        2,
        2
      ],
      [
        0,
        1,
        2,
        3
      ]
    ],
    "steps": [
      {
        "phase": "base",
        "title": "Empty prefixes",
        "note": "Top row and left column are 0.",
        "ruleLabel": "DP recurrence",
        "rule": "If a[i - 1] === b[j - 1], use dp[i - 1][j - 1] + 1; otherwise use max(dp[i - 1][j], dp[i][j - 1]).",
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
          ]
        ]
      },
      {
        "phase": "match a",
        "title": "a == a",
        "note": "dp[1][1] becomes 1 from the diagonal.",
        "ruleLabel": "DP recurrence",
        "rule": "If a[i - 1] === b[j - 1], use dp[i - 1][j - 1] + 1; otherwise use max(dp[i - 1][j], dp[i][j - 1]).",
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
            1,
            1
          ]
        ]
      },
      {
        "phase": "match c",
        "title": "c == c",
        "note": "dp[3][2] becomes 2.",
        "ruleLabel": "DP recurrence",
        "rule": "If a[i - 1] === b[j - 1], use dp[i - 1][j - 1] + 1; otherwise use max(dp[i - 1][j], dp[i][j - 1]).",
        "activeCells": [
          [
            3,
            2
          ]
        ],
        "visitedCells": [
          [
            1,
            1
          ],
          [
            2,
            1
          ],
          [
            3,
            2
          ]
        ]
      },
      {
        "phase": "answer",
        "title": "ace has length 3",
        "note": "The bottom-right cell dp[5][3] is 3.",
        "ruleLabel": "DP recurrence",
        "rule": "If a[i - 1] === b[j - 1], use dp[i - 1][j - 1] + 1; otherwise use max(dp[i - 1][j], dp[i][j - 1]).",
        "activeCells": [
          [
            5,
            3
          ]
        ],
        "visitedCells": [
          [
            1,
            1
          ],
          [
            3,
            2
          ],
          [
            5,
            3
          ]
        ]
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "A dynamic-programming state names a smaller question. A recurrence explains how its answer uses answers you already know.",
    "family": "Saved subproblems",
    "example": "Define dp[i][j]: Best LCS length for prefixes a[0..i) and b[0..j). Seed empty prefixes: Empty string against anything has LCS length 0. Match or mismatch: Use diagonal on match, otherwise best top/left. Read bottom-right: The final cell is the full-string LCS length.",
    "sampleInput": [
      "abcde",
      "ace"
    ],
    "sampleResult": 3,
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
    "checkpoint": "Explain this in your own words: Find the length of the longest sequence that appears in both strings without requiring contiguous positions."
  },
  "relatedLinks": []
};
