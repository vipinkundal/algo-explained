// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "dynamic-programming-basics",
  "title": "Dynamic Programming Basics",
  "category": "Foundations",
  "route": "/algorithms/foundations/dynamic-programming-basics",
  "phase": 3,
  "priority": "high",
  "visualizerType": "dp-table",
  "icon": "school",
  "codePath": "./src/algorithms/foundations/dynamic-programming-basics/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Dynamic Programming Basics is a Foundations technique focused on answer.",
  "problem": "Dynamic Programming Basics solves a Foundations problem by maintaining only the state needed for its dp table transition.",
  "concept": "Dynamic Programming Basics is useful when the same subproblems appear again and storing answers prevents repeated work. Use this when you can define a state, base cases, and a recurrence.",
  "logicSummary": "Define what one DP state means, initialize base cases, fill dependent states, and read the target state.",
  "transitionSummary": "Each step computes one state from already-solved smaller or earlier states.",
  "codeInsight": "The implementation keeps Dynamic Programming Basics' state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "Dynamic Programming Basics appears when the input is input and the required result is answer.",
  "whenToUse": "Use Dynamic Programming Basics when a problem matches the Foundations pattern and the expected state changes match a dp table dry run.",
  "memoryTrick": "Dynamic Programming Basics: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Dynamic Programming Basics is shown as a dependency-ordered DP fill. The numbered steps follow the code path used to maintain the main invariant.",
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
      "name": "input",
      "purpose": "The numeric or collection input used by the bit, math, or foundation routine."
    },
    {
      "name": "dp table",
      "purpose": "A table of subproblem answers filled in dependency order."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by dynamicProgrammingBasics after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Repeat the dp table transition until the stop condition for Dynamic Programming Basics is reached. Stop when no valid work remains or the answer is known."
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
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps Dynamic Programming Basics correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Dynamic Programming Basics' transition.",
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
    "correctText": "Correct. Dynamic Programming Basics stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Dynamic Programming Basics needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "foundations",
  "algorithmSlug": "dynamic-programming-basics",
  "runnerInput": [
    [
      1,
      2,
      3
    ]
  ],
  "animation": {
    "type": "state-flow",
    "title": "Dynamic Programming Basics state transitions",
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
        "ruleLabel": "Dynamic Programming Basics invariant",
        "rule": "The code first needs a precise subproblem meaning.",
        "activeState": 0
      },
      {
        "phase": "Base case",
        "title": "Seed known answers",
        "note": "Base values stop the recurrence from falling through.",
        "ruleLabel": "Dynamic Programming Basics invariant",
        "rule": "Base values stop the recurrence from falling through.",
        "activeState": 1
      },
      {
        "phase": "Recurrence",
        "title": "Fill next state",
        "note": "The transition combines previously solved states.",
        "ruleLabel": "Dynamic Programming Basics invariant",
        "rule": "The transition combines previously solved states.",
        "activeState": 2
      },
      {
        "phase": "Target",
        "title": "Return requested state",
        "note": "The answer is read from the final DP state.",
        "ruleLabel": "Dynamic Programming Basics invariant",
        "rule": "The answer is read from the final DP state.",
        "activeState": 3
      }
    ]
  }
};
