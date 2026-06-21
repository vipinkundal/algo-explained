// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "longest-increasing-subsequence",
  "title": "Longest Increasing Subsequence",
  "category": "Dynamic Programming",
  "route": "/algorithms/dynamic-programming/longest-increasing-subsequence",
  "phase": 3,
  "priority": "high",
  "visualizerType": "sequence-dp",
  "icon": "table_chart",
  "codePath": "./src/algorithms/dynamic-programming/longest-increasing-subsequence/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Longest Increasing Subsequence is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "LIS keeps minimal tail values for increasing subsequences of each length.",
  "concept": "Longest Increasing Subsequence is useful when the same subproblems appear again and storing answers prevents repeated work. Use this when you can define a state, base cases, and a recurrence.",
  "logicSummary": "Define what one DP state means, initialize base cases, fill dependent states, and read the target state.",
  "transitionSummary": "Each step computes one state from already-solved smaller or earlier states.",
  "codeInsight": "The DP table shape is the algorithm: every index in the code corresponds to a named subproblem.",
  "realLifeExample": "Longest Increasing Subsequence appears when overlapping subproblems would otherwise be recomputed.",
  "whenToUse": "Use Longest Increasing Subsequence when the recurrence and base cases match the problem statement.",
  "memoryTrick": "Longest Increasing Subsequence: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Longest Increasing Subsequence is shown as a dependency-ordered DP fill. The numbered steps follow the code path used to maintain the main invariant.",
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
      "activeLine": 1,
      "codeInsight": "The code first needs a precise subproblem meaning."
    },
    {
      "label": "Base case",
      "title": "Seed known answers",
      "note": "Base values stop the recurrence from falling through.",
      "activeLine": 3,
      "codeInsight": "Base values stop the recurrence from falling through."
    },
    {
      "label": "Recurrence",
      "title": "Fill next state",
      "note": "The transition combines previously solved states.",
      "activeLine": 6,
      "codeInsight": "The transition combines previously solved states."
    },
    {
      "label": "Target",
      "title": "Return requested state",
      "note": "The answer is read from the final DP state.",
      "activeLine": 10,
      "codeInsight": "The answer is read from the final DP state."
    }
  ],
  "complexity": {
    "time": "O(n log n).",
    "space": "O(n)."
  },
  "quiz": {
    "question": "Which state choice keeps Longest Increasing Subsequence correct?",
    "options": [
      {
        "key": "A",
        "text": "Track dp table and update it only through Longest Increasing Subsequence's transition.",
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
    "correctText": "Correct. Longest Increasing Subsequence stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Longest Increasing Subsequence needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "dynamic-programming",
  "algorithmSlug": "longest-increasing-subsequence",
  "runnerInput": [
    [
      10,
      9,
      2,
      5,
      3,
      7,
      101,
      18
    ]
  ],
  "animation": {
    "type": "state-flow",
    "title": "Longest Increasing Subsequence state transitions",
    "ruleLabel": "State rule",
    "rule": "Each step computes one state from already-solved smaller or earlier states.",
    "states": [
      "State meaning",
      "Base case",
      "Recurrence",
      "Target"
    ],
    "steps": [
      {
        "phase": "State meaning",
        "title": "Define DP cell",
        "note": "The code first needs a precise subproblem meaning.",
        "ruleLabel": "Longest Increasing Subsequence invariant",
        "rule": "The code first needs a precise subproblem meaning.",
        "activeState": 0
      },
      {
        "phase": "Base case",
        "title": "Seed known answers",
        "note": "Base values stop the recurrence from falling through.",
        "ruleLabel": "Longest Increasing Subsequence invariant",
        "rule": "Base values stop the recurrence from falling through.",
        "activeState": 1
      },
      {
        "phase": "Recurrence",
        "title": "Fill next state",
        "note": "The transition combines previously solved states.",
        "ruleLabel": "Longest Increasing Subsequence invariant",
        "rule": "The transition combines previously solved states.",
        "activeState": 2
      },
      {
        "phase": "Target",
        "title": "Return requested state",
        "note": "The answer is read from the final DP state.",
        "ruleLabel": "Longest Increasing Subsequence invariant",
        "rule": "The answer is read from the final DP state.",
        "activeState": 3
      }
    ]
  }
};
