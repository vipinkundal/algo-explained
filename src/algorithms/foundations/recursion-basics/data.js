// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this data-structure page without touching app.js.

export const algorithmPage = {
  "id": "recursion-basics",
  "title": "Recursion Basics",
  "category": "Foundations",
  "route": "/algorithms/foundations/recursion-basics",
  "phase": 1,
  "priority": "high",
  "visualizerType": "call-stack",
  "icon": "school",
  "codePath": "./src/algorithms/foundations/recursion-basics/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Recursion Basics is a Foundations technique focused on solutions.",
  "problem": "Recursion Basics explores a decision tree by choosing, recursing, and undoing the choice before trying the next option.",
  "concept": "Recursion Basics explores a decision tree by choosing, recursing, and undoing the choice before trying the next option.",
  "logicSummary": "Handle the base case, loop through valid choices, add one choice, recurse, then remove that choice.",
  "transitionSummary": "The transition is choose -> explore -> unchoose, which keeps sibling branches isolated.",
  "codeInsight": "The backtrack step is what keeps the state correct: every push must have a matching pop.",
  "realLifeExample": "Recursion Basics appears when the input is choices and the required result is solutions.",
  "whenToUse": "Use Recursion Basics when a problem matches the Foundations pattern and the expected state changes match a call stack dry run.",
  "memoryTrick": "Recursion Basics: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A call stack walkthrough showing Recursion Basics' input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data Recursion Basics receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by Recursion Basics."
    },
    {
      "title": "Apply the transition",
      "text": "Run the call stack transition and update the algorithm-specific state."
    },
    {
      "title": "Return the answer",
      "text": "Stop at the correct condition and return the tracked result."
    }
  ],
  "variables": [
    {
      "name": "choices",
      "purpose": "The candidate values that drive the heap, recursion, subset, or frequency process."
    },
    {
      "name": "working state",
      "purpose": "The local state updated by the algorithm transition. This page visualizes it as call stack."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by recursionBasics after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "The transition is choose -> explore -> unchoose, which keeps sibling branches isolated. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the Recursion Basics input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that Recursion Basics changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one call stack transition for Recursion Basics.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final Recursion Basics answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "O(n) for the educational reference implementation.",
    "space": "O(n) for tracked state when needed."
  },
  "quiz": {
    "question": "Which state choice keeps Recursion Basics correct?",
    "options": [
      {
        "key": "A",
        "text": "Track path and update it only through Recursion Basics' transition.",
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
    "correctText": "Correct. Recursion Basics stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Recursion Basics needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "foundations",
  "algorithmSlug": "recursion-basics",
  "runnerInput": [
    [
      1,
      2
    ]
  ],
  "relatedLinks": [
    {
      "id": "ds-recursion-first-recursion-program",
      "title": "First Recursion Program",
      "label": "C/C++ recursion source"
    },
    {
      "id": "ds-recursion-static-variable-in-recursion",
      "title": "Static Variable In Recursion",
      "label": "C/C++ recursion source"
    },
    {
      "id": "ds-recursion-tree-recursion",
      "title": "Tree Recursion",
      "label": "C/C++ recursion source"
    },
    {
      "id": "ds-recursion-indirect-recursion",
      "title": "Indirect Recursion",
      "label": "C/C++ recursion source"
    }
  ]
};
