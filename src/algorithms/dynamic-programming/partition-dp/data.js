// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "partition-dp",
  "title": "Partition DP",
  "category": "Dynamic Programming",
  "route": "/algorithms/dynamic-programming/partition-dp",
  "phase": 4,
  "priority": "medium",
  "visualizerType": "partition-table",
  "icon": "table_chart",
  "codePath": "./src/algorithms/dynamic-programming/partition-dp/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Partition DP is taught with its own DP state definition, transition, code trace, and answer state.",
  "problem": "Decide whether an array can be split into two subsets with equal sum.",
  "concept": "Partition DP reduces equal partition to subset sum: can any subset reach total / 2?",
  "logicSummary": "Reject odd totals, set possible[0] = true, then scan sums backward for each value so each number is used once.",
  "transitionSummary": "For each value and target sum, possible[sum] becomes possible[sum] OR possible[sum - value].",
  "codeInsight": "Backward sum scanning keeps the problem 0/1; forward scanning would let one value be reused in the same pass.",
  "realLifeExample": "Use it for equal load balancing, package splitting, and subset feasibility checks.",
  "whenToUse": "Use partition DP when the objective is whether a subset can hit a target sum exactly.",
  "memoryTrick": "Equal partition asks for half the total.",
  "visualizerCaption": "The trace shows reachable subset sums expanding toward target 11.",
  "logicSteps": [
    {
      "title": "Check total",
      "text": "An odd total can never be split evenly."
    },
    {
      "title": "Set target",
      "text": "The subset target is total / 2."
    },
    {
      "title": "Seed zero sum",
      "text": "Sum 0 is always reachable by picking nothing."
    },
    {
      "title": "Scan sums backward",
      "text": "Each value updates reachable sums without being reused."
    }
  ],
  "variables": [
    {
      "name": "array",
      "purpose": "Input values."
    },
    {
      "name": "target",
      "purpose": "Half of the total sum."
    },
    {
      "name": "possible[sum]",
      "purpose": "Whether some processed subset reaches sum."
    },
    {
      "name": "value",
      "purpose": "Current number being considered once."
    }
  ],
  "dryRun": [
    {
      "label": "Total",
      "title": "Total is 22, target is 11",
      "note": "[1,5,11,5] can only partition if some subset reaches 11.",
      "activeLine": 2,
      "codeInsight": "The odd-total guard avoids impossible tables."
    },
    {
      "label": "Seed",
      "title": "possible[0] = true",
      "note": "The empty subset starts the recurrence.",
      "activeLine": 5,
      "codeInsight": "Every reachable sum grows from the zero-sum base."
    },
    {
      "label": "Value 5",
      "title": "Sums 1, 5, and 6 become reachable",
      "note": "Backward scanning combines 5 with earlier reachable sums.",
      "activeLine": 8,
      "codeInsight": "The loop direction prevents using the same value twice."
    },
    {
      "label": "Answer",
      "title": "possible[11] is true",
      "note": "The value 11 alone reaches the half-total target.",
      "activeLine": 10,
      "codeInsight": "The target boolean is the final answer."
    }
  ],
  "complexity": {
    "time": "O(n * target).",
    "space": "O(target)."
  },
  "quiz": {
    "question": "Which state keeps Partition DP correct?",
    "options": [
      {
        "key": "A",
        "text": "Define possible[sum] as subset reachability and scan sums backward for each value.",
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
    "correctText": "Correct. Partition DP works when the state meaning, transition, and answer state stay aligned.",
    "incorrectText": "Not quite. Partition DP needs its own state, dependencies, and stop condition."
  },
  "categorySlug": "dynamic-programming",
  "algorithmSlug": "partition-dp",
  "runnerInput": [
    [
      1,
      5,
      11,
      5
    ]
  ],
  "animation": {
    "type": "array-flow",
    "static": true,
    "title": "Partition DP DP trace",
    "ruleLabel": "DP invariant",
    "rule": "For each value and target sum, possible[sum] becomes possible[sum] OR possible[sum - value].",
    "values": [
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      1
    ],
    "steps": [
      {
        "phase": "target",
        "title": "Target is 11",
        "note": "The total is 22, so a subset must hit 11.",
        "ruleLabel": "DP invariant",
        "rule": "For each value and target sum, possible[sum] becomes possible[sum] OR possible[sum - value].",
        "activeIndices": [
          11
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          11
        ],
        "primaryLabel": "target",
        "secondaryLabel": "For each value and target sum, possible[sum] becomes possible[sum] OR possible[sum - value]."
      },
      {
        "phase": "seed",
        "title": "Sum 0 is reachable",
        "note": "possible[0] = true before reading values.",
        "ruleLabel": "DP invariant",
        "rule": "For each value and target sum, possible[sum] becomes possible[sum] OR possible[sum - value].",
        "activeIndices": [
          0
        ],
        "sortedIndices": [
          0
        ],
        "mutedIndices": [],
        "window": [
          0,
          11
        ],
        "primaryLabel": "seed",
        "secondaryLabel": "For each value and target sum, possible[sum] becomes possible[sum] OR possible[sum - value]."
      },
      {
        "phase": "value 5",
        "title": "Reach 5 and 6",
        "note": "After values 1 and 5, sums 1, 5, and 6 are reachable.",
        "ruleLabel": "DP invariant",
        "rule": "For each value and target sum, possible[sum] becomes possible[sum] OR possible[sum - value].",
        "activeIndices": [
          5,
          6
        ],
        "sortedIndices": [
          0,
          1,
          5,
          6
        ],
        "mutedIndices": [],
        "window": [
          0,
          11
        ],
        "primaryLabel": "value 5",
        "secondaryLabel": "For each value and target sum, possible[sum] becomes possible[sum] OR possible[sum - value]."
      },
      {
        "phase": "answer",
        "title": "Target sum 11 is reachable",
        "note": "The value 11 turns possible[11] true.",
        "ruleLabel": "DP invariant",
        "rule": "For each value and target sum, possible[sum] becomes possible[sum] OR possible[sum - value].",
        "activeIndices": [
          11
        ],
        "sortedIndices": [
          0,
          1,
          5,
          6,
          11
        ],
        "mutedIndices": [],
        "window": [
          0,
          11
        ],
        "primaryLabel": "answer",
        "secondaryLabel": "For each value and target sum, possible[sum] becomes possible[sum] OR possible[sum - value]."
      }
    ]
  }
};
