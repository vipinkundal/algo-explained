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
  "concept": "Greedy Basics solves a Foundations problem by maintaining only the state needed for its decision timeline transition.",
  "logicSummary": "Greedy Basics reads the input, initializes its working state, applies the core transition, and returns the tracked answer.",
  "transitionSummary": "Repeat the decision timeline transition until the stop condition for Greedy Basics is reached.",
  "codeInsight": "The implementation keeps Greedy Basics' state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "Greedy Basics appears when the input is input and the required result is answer.",
  "whenToUse": "Use Greedy Basics when a problem matches the Foundations pattern and the expected state changes match a decision timeline dry run.",
  "memoryTrick": "Greedy Basics: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A decision timeline walkthrough showing Greedy Basics' input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data Greedy Basics receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by Greedy Basics."
    },
    {
      "title": "Apply the transition",
      "text": "Run the decision timeline transition and update the algorithm-specific state."
    },
    {
      "title": "Return the answer",
      "text": "Stop at the correct condition and return the tracked result."
    }
  ],
  "variables": [
    {
      "name": "input",
      "purpose": "The concrete data Greedy Basics receives before any state changes begin."
    },
    {
      "name": "state",
      "purpose": "The working information Greedy Basics updates while it runs."
    },
    {
      "name": "answer",
      "purpose": "The final value Greedy Basics returns after the stop condition is met."
    },
    {
      "name": "condition",
      "purpose": "The rule that decides whether Greedy Basics continues, branches, or stops."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the Greedy Basics input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that Greedy Basics changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one decision timeline transition for Greedy Basics.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final Greedy Basics answer from the tracked state.",
      "activeLine": 8
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
  "algorithmSlug": "greedy-basics"
};
