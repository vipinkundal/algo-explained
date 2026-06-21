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
  "meaning": "Longest Common Subsequence is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "LCS compares prefixes of two strings and keeps the best subsequence length for every prefix pair.",
  "concept": "Longest Common Subsequence is useful when the same subproblems appear again and storing answers prevents repeated work. Use this when you can define a state, base cases, and a recurrence.",
  "logicSummary": "Define what one DP state means, initialize base cases, fill dependent states, and read the target state.",
  "transitionSummary": "Each step computes one state from already-solved smaller or earlier states.",
  "codeInsight": "The DP table shape is the algorithm: every index in the code corresponds to a named subproblem.",
  "realLifeExample": "Longest Common Subsequence appears when overlapping subproblems would otherwise be recomputed.",
  "whenToUse": "Use Longest Common Subsequence when the recurrence and base cases match the problem statement.",
  "memoryTrick": "Longest Common Subsequence: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Longest Common Subsequence is shown as a dependency-ordered DP fill. The numbered steps follow the code path used to maintain the main invariant.",
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
      "activeLine": 3,
      "codeInsight": "Executes this Longest Common Subsequence line as part of the highlighted code path, linking the visual step to the implementation."
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
      "codeInsight": "Returns dp[a.length][b.length], the value produced after Longest Common Subsequence's state changes are complete."
    }
  ],
  "complexity": {
    "time": "O(nm).",
    "space": "O(nm)."
  },
  "quiz": {
    "question": "Which state choice keeps Longest Common Subsequence correct?",
    "options": [
      {
        "key": "A",
        "text": "Track dp table and update it only through Longest Common Subsequence's transition.",
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
    "correctText": "Correct. Longest Common Subsequence stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Longest Common Subsequence needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "dynamic-programming",
  "algorithmSlug": "longest-common-subsequence",
  "runnerInput": [
    "abcde",
    "ace"
  ],
  "animation": {
    "type": "matrix-flow",
    "title": "Longest Common Subsequence matrix state",
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
        "ruleLabel": "Longest Common Subsequence invariant",
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
        "ruleLabel": "Longest Common Subsequence invariant",
        "rule": "Executes this Longest Common Subsequence line as part of the highlighted code path, linking the visual step to the implementation.",
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
        "ruleLabel": "Longest Common Subsequence invariant",
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
        "ruleLabel": "Longest Common Subsequence invariant",
        "rule": "Returns dp[a.length][b.length], the value produced after Longest Common Subsequence's state changes are complete.",
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
