// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "greedy-basics",
  "title": "Greedy Basics",
  "category": "Foundations",
  "route": "/algorithms/foundations/greedy-basics",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "decision-timeline",
  "icon": "school",
  "codePath": "./src/algorithms/foundations/greedy-basics/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Greedy Basics is a Foundations technique focused on answer.",
  "problem": "Greedy Basics solves a Foundations problem by maintaining only the state needed for its decision timeline transition.",
  "concept": "Recursion and backtracking are useful when a problem branches into smaller choices that share the same rule. Use this when the answer is built by choosing, recursing, and sometimes undoing choices.",
  "logicSummary": "Handle the base case, choose the next option, recurse into smaller state, then combine or undo state.",
  "transitionSummary": "Each step either reaches a base case or moves one level deeper with a smaller decision state.",
  "codeInsight": "The implementation keeps Greedy Basics' state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "Greedy Basics appears when the input is input and the required result is answer.",
  "whenToUse": "Use Greedy Basics when a problem matches the Foundations pattern and the expected state changes match a decision timeline dry run.",
  "memoryTrick": "Greedy Basics: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Greedy Basics is shown as call/choice state changes. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Base case",
      "text": "Stop when the current state is complete or invalid."
    },
    {
      "title": "Choose option",
      "text": "Pick the next valid branch."
    },
    {
      "title": "Recurse",
      "text": "Solve the smaller state."
    },
    {
      "title": "Return or undo",
      "text": "Collect the result or backtrack before the next choice."
    }
  ],
  "variables": [
    {
      "name": "input",
      "purpose": "The numeric or collection input used by the bit, math, or foundation routine."
    },
    {
      "name": "working state",
      "purpose": "The local state updated by the algorithm transition. This page visualizes it as decision timeline."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by greedyBasics after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Repeat the decision timeline transition until the stop condition for Greedy Basics is reached. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Base",
      "title": "Check stop condition",
      "note": "The code first asks whether the current state is complete.",
      "activeLine": 1,
      "codeInsight": "The code first asks whether the current state is complete."
    },
    {
      "label": "Choice",
      "title": "Select next option",
      "note": "One valid move is added to the state.",
      "activeLine": 4,
      "codeInsight": "One valid move is added to the state."
    },
    {
      "label": "Call",
      "title": "Recurse deeper",
      "note": "The same rule runs on a smaller or extended state.",
      "activeLine": 6,
      "codeInsight": "The same rule runs on a smaller or extended state."
    },
    {
      "label": "Unwind",
      "title": "Return or backtrack",
      "note": "The result is combined or the choice is removed.",
      "activeLine": 9,
      "codeInsight": "The result is combined or the choice is removed."
    }
  ],
  "complexity": {
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps Greedy Basics correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Greedy Basics' transition.",
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
    "correctText": "Correct. Greedy Basics stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Greedy Basics needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "foundations",
  "algorithmSlug": "greedy-basics",
  "runnerInput": [
    [
      4,
      2,
      7,
      1
    ]
  ],
  "animation": {
    "type": "recursion-flow",
    "title": "Greedy Basics call stack",
    "ruleLabel": "Recursive contract",
    "rule": "Each step either reaches a base case or moves one level deeper with a smaller decision state.",
    "calls": [
      "greedy-basics(3)",
      "greedy-basics(2)",
      "greedy-basics(1)",
      "base case"
    ],
    "steps": [
      {
        "phase": "Base",
        "title": "Check stop condition",
        "note": "The code first asks whether the current state is complete.",
        "ruleLabel": "Greedy Basics invariant",
        "rule": "The code first asks whether the current state is complete.",
        "activeCall": 0,
        "returningCalls": []
      },
      {
        "phase": "Choice",
        "title": "Select next option",
        "note": "One valid move is added to the state.",
        "ruleLabel": "Greedy Basics invariant",
        "rule": "One valid move is added to the state.",
        "activeCall": 1,
        "returningCalls": []
      },
      {
        "phase": "Call",
        "title": "Recurse deeper",
        "note": "The same rule runs on a smaller or extended state.",
        "ruleLabel": "Greedy Basics invariant",
        "rule": "The same rule runs on a smaller or extended state.",
        "activeCall": 2,
        "returningCalls": []
      },
      {
        "phase": "Unwind",
        "title": "Return or backtrack",
        "note": "The result is combined or the choice is removed.",
        "ruleLabel": "Greedy Basics invariant",
        "rule": "The result is combined or the choice is removed.",
        "activeCall": 3,
        "returningCalls": [
          0,
          1,
          2,
          3
        ]
      }
    ]
  }
};
