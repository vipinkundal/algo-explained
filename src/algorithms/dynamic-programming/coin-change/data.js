// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "coin-change",
  "title": "Coin Change",
  "category": "Dynamic Programming",
  "route": "/algorithms/dynamic-programming/coin-change",
  "phase": 3,
  "priority": "high",
  "visualizerType": "dp-array",
  "icon": "table_chart",
  "codePath": "./src/algorithms/dynamic-programming/coin-change/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Coin Change is taught with its own DP state definition, recurrence, code trace, and answer cell.",
  "problem": "Find the fewest coins needed to make an amount when each coin denomination can be reused.",
  "concept": "Coin Change defines dp[value] as the minimum number of coins needed to form that value.",
  "logicSummary": "Set dp[0] = 0, initialize other amounts to Infinity, and relax every amount reachable by each coin.",
  "transitionSummary": "For each coin and amount, dp[value] becomes min(current, dp[value - coin] + 1).",
  "codeInsight": "The amount loop goes forward because coins are unlimited and the same coin may be reused.",
  "realLifeExample": "Use it for payment denominations, minimum token counts, or any unbounded item-count minimization.",
  "whenToUse": "Use Coin Change when each denomination can be used repeatedly and the goal is minimum count.",
  "memoryTrick": "Forward amount means unlimited coins.",
  "visualizerCaption": "The trace shows amounts improving as coin denominations relax the DP array.",
  "logicSteps": [
    {
      "title": "Define dp[value]",
      "text": "Fewest coins required to form value."
    },
    {
      "title": "Seed amount zero",
      "text": "Amount 0 needs 0 coins."
    },
    {
      "title": "Relax by coin",
      "text": "Use solved smaller amount value - coin."
    },
    {
      "title": "Return target",
      "text": "Return dp[amount], or -1 if it stayed unreachable."
    }
  ],
  "variables": [
    {
      "name": "coins",
      "purpose": "Reusable denominations."
    },
    {
      "name": "amount",
      "purpose": "Target value to form."
    },
    {
      "name": "dp[value]",
      "purpose": "Minimum coins for each amount."
    },
    {
      "name": "Infinity",
      "purpose": "Marker for amounts not yet reachable."
    }
  ],
  "dryRun": [
    {
      "label": "Base",
      "title": "dp[0] = 0",
      "note": "The empty amount needs no coins.",
      "activeLine": 3,
      "codeInsight": "Every reachable state grows from the base amount."
    },
    {
      "label": "Coin 1",
      "title": "Fill every amount with ones",
      "note": "Coin 1 makes all amounts reachable, but not optimal.",
      "activeLine": 6,
      "codeInsight": "Forward iteration allows unlimited reuse of coin 1."
    },
    {
      "label": "Coin 3",
      "title": "Improve amount 3 and 6",
      "note": "dp[3] becomes 1, and dp[6] can become 2.",
      "activeLine": 6,
      "codeInsight": "The recurrence uses the already-updated dp[value - coin]."
    },
    {
      "label": "Coin 4",
      "title": "Improve amount 4",
      "note": "dp[4] becomes 1 and dp[6] remains 2.",
      "activeLine": 6,
      "codeInsight": "Each coin tries to improve every reachable amount."
    }
  ],
  "complexity": {
    "time": "O(coins * amount).",
    "space": "O(amount)."
  },
  "quiz": {
    "question": "Which state keeps Coin Change correct?",
    "options": [
      {
        "key": "A",
        "text": "Define dp[value] as the fewest coins and scan amounts forward for reusable coins.",
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
    "correctText": "Correct. Coin Change works when its table meaning and recurrence stay aligned.",
    "incorrectText": "Not quite. Coin Change needs its own state, recurrence, and answer cell."
  },
  "categorySlug": "dynamic-programming",
  "algorithmSlug": "coin-change",
  "runnerInput": [
    [
      1,
      3,
      4
    ],
    6
  ],
  "animation": {
    "type": "array-flow",
    "static": true,
    "title": "Coin Change DP trace",
    "ruleLabel": "DP invariant",
    "rule": "For each coin and amount, dp[value] becomes min(current, dp[value - coin] + 1).",
    "values": [
      0,
      1,
      2,
      1,
      1,
      2,
      2
    ],
    "steps": [
      {
        "phase": "base",
        "title": "Amount 0 is solved",
        "note": "dp[0] = 0.",
        "ruleLabel": "DP invariant",
        "rule": "For each coin and amount, dp[value] becomes min(current, dp[value - coin] + 1).",
        "activeIndices": [
          0
        ],
        "sortedIndices": [
          0
        ],
        "mutedIndices": [],
        "window": [
          0,
          6
        ],
        "primaryLabel": "base",
        "secondaryLabel": "For each coin and amount, dp[value] becomes min(current, dp[value - coin] + 1)."
      },
      {
        "phase": "coin 1",
        "title": "One coin fills the table",
        "note": "Amounts 1 through 6 are reachable with repeated 1s.",
        "ruleLabel": "DP invariant",
        "rule": "For each coin and amount, dp[value] becomes min(current, dp[value - coin] + 1).",
        "activeIndices": [
          1,
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
        "primaryLabel": "coin 1",
        "secondaryLabel": "For each coin and amount, dp[value] becomes min(current, dp[value - coin] + 1)."
      },
      {
        "phase": "coin 3",
        "title": "Amount 3 improves to 1",
        "note": "dp[3] = min(3, dp[0] + 1).",
        "ruleLabel": "DP invariant",
        "rule": "For each coin and amount, dp[value] becomes min(current, dp[value - coin] + 1).",
        "activeIndices": [
          3
        ],
        "sortedIndices": [
          0,
          1,
          2,
          3
        ],
        "mutedIndices": [],
        "window": [
          0,
          6
        ],
        "primaryLabel": "coin 3",
        "secondaryLabel": "For each coin and amount, dp[value] becomes min(current, dp[value - coin] + 1)."
      },
      {
        "phase": "amount 6",
        "title": "Answer is 2 coins",
        "note": "6 can be made as 3 + 3.",
        "ruleLabel": "DP invariant",
        "rule": "For each coin and amount, dp[value] becomes min(current, dp[value - coin] + 1).",
        "activeIndices": [
          6
        ],
        "sortedIndices": [
          0,
          3,
          4,
          6
        ],
        "mutedIndices": [],
        "window": [
          0,
          6
        ],
        "primaryLabel": "amount 6",
        "secondaryLabel": "For each coin and amount, dp[value] becomes min(current, dp[value - coin] + 1)."
      }
    ]
  }
};
