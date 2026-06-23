// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "fibonacci-dp",
  "title": "Fibonacci DP",
  "category": "Dynamic Programming",
  "route": "/algorithms/dynamic-programming/fibonacci-dp",
  "phase": 3,
  "priority": "high",
  "visualizerType": "dp-table",
  "icon": "table_chart",
  "codePath": "./src/algorithms/dynamic-programming/fibonacci-dp/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Fibonacci DP is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Fibonacci DP stores previous Fibonacci states so each number is computed once.",
  "concept": "Fibonacci DP is useful when the same subproblems appear again and storing answers prevents repeated work. Use this when you can define a state, base cases, and a recurrence.",
  "logicSummary": "Define what one DP state means, initialize base cases, fill dependent states, and read the target state.",
  "transitionSummary": "Each step computes one state from already-solved smaller or earlier states.",
  "codeInsight": "The DP table shape is the algorithm: every index in the code corresponds to a named subproblem.",
  "realLifeExample": "Fibonacci DP appears when overlapping subproblems would otherwise be recomputed.",
  "whenToUse": "Use Fibonacci DP when the recurrence and base cases match the problem statement.",
  "memoryTrick": "Fibonacci DP: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Fibonacci DP is shown as a dependency-ordered DP fill. The numbered steps follow the code path used to maintain the main invariant.",
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
      "activeLine": 7,
      "codeInsight": "Prepares dp with a default value so unresolved positions already have the correct fallback answer."
    },
    {
      "label": "Base case",
      "title": "Seed known answers",
      "note": "Base values stop the recurrence from falling through.",
      "activeLine": 5,
      "codeInsight": "Defines fibonacciDp and names the input n; edits to those inputs change the visual state and output."
    },
    {
      "label": "Recurrence",
      "title": "Fill next state",
      "note": "The transition combines previously solved states.",
      "activeLine": 7,
      "codeInsight": "Prepares dp with a default value so unresolved positions already have the correct fallback answer."
    },
    {
      "label": "Target",
      "title": "Return requested state",
      "note": "The answer is read from the final DP state.",
      "activeLine": 10,
      "codeInsight": "Returns dp[n], the final value maintained by Fibonacci DP's code path."
    }
  ],
  "complexity": {
    "time": "O(n).",
    "space": "O(n), reducible to O(1)."
  },
  "quiz": {
    "question": "Which state choice keeps Fibonacci DP correct?",
    "options": [
      {
        "key": "A",
        "text": "Track dp table and update it only through Fibonacci DP's transition.",
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
    "correctText": "Correct. Fibonacci DP stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Fibonacci DP needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "dynamic-programming",
  "algorithmSlug": "fibonacci-dp",
  "runnerInput": [
    7
  ],
  "animation": {
    "type": "state-flow",
    "title": "Fibonacci DP state transitions",
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
        "ruleLabel": "Fibonacci DP invariant",
        "rule": "Prepares dp with a default value so unresolved positions already have the correct fallback answer.",
        "activeState": 0
      },
      {
        "phase": "Base case",
        "title": "Seed known answers",
        "note": "Base values stop the recurrence from falling through.",
        "ruleLabel": "Fibonacci DP invariant",
        "rule": "Defines fibonacciDp and names the input n; edits to those inputs change the visual state and output.",
        "activeState": 1
      },
      {
        "phase": "Recurrence",
        "title": "Fill next state",
        "note": "The transition combines previously solved states.",
        "ruleLabel": "Fibonacci DP invariant",
        "rule": "Prepares dp with a default value so unresolved positions already have the correct fallback answer.",
        "activeState": 2
      },
      {
        "phase": "Target",
        "title": "Return requested state",
        "note": "The answer is read from the final DP state.",
        "ruleLabel": "Fibonacci DP invariant",
        "rule": "Returns dp[n], the final value maintained by Fibonacci DP's code path.",
        "activeState": 3
      }
    ]
  }
};
