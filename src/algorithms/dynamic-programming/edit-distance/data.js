// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "edit-distance",
  "title": "Edit Distance",
  "category": "Dynamic Programming",
  "route": "/algorithms/dynamic-programming/edit-distance",
  "phase": 3,
  "priority": "medium",
  "visualizerType": "dp-grid",
  "icon": "table_chart",
  "codePath": "./src/algorithms/dynamic-programming/edit-distance/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Edit Distance is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Edit Distance stores the minimum insert/delete/replace operations for every prefix pair.",
  "concept": "Edit Distance stores the minimum insert/delete/replace operations for every prefix pair.",
  "logicSummary": "Edit Distance defines subproblems, initializes base cases, fills states in dependency order, and reads the requested state as the answer.",
  "transitionSummary": "Compute one DP state from already-solved smaller states.",
  "codeInsight": "The DP table shape is the algorithm: every index in the code corresponds to a named subproblem.",
  "realLifeExample": "Edit Distance appears when overlapping subproblems would otherwise be recomputed.",
  "whenToUse": "Use Edit Distance when the recurrence and base cases match the problem statement.",
  "memoryTrick": "Edit Distance: state definition first, recurrence second, loops third.",
  "visualizerCaption": "A dp grid walkthrough showing Edit Distance's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Define state",
      "text": "Name what one DP cell means."
    },
    {
      "title": "Set base cases",
      "text": "Fill states that do not depend on others."
    },
    {
      "title": "Apply recurrence",
      "text": "Fill each state from solved states."
    },
    {
      "title": "Return target",
      "text": "Read the requested final state."
    }
  ],
  "variables": [
    {
      "name": "a, b",
      "purpose": "a: The string data used for character comparisons, matching, or dynamic programming states. b: The string data used for character comparisons, matching, or dynamic programming states."
    },
    {
      "name": "dp table and dependencies",
      "purpose": "Stored subproblem answers plus the dependency order needed to fill them. This page visualizes it as dp grid."
    },
    {
      "name": "target dp answer",
      "purpose": "The value produced by editDistance after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Compute one DP state from already-solved smaller states. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read inputs",
      "note": "Edit Distance starts by reading the exact input shape it owns.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize state",
      "note": "Create only the state needed for this algorithm's invariant.",
      "activeLine": 3
    },
    {
      "label": "Loop",
      "title": "Run transition",
      "note": "Compute one DP state from already-solved smaller states.",
      "activeLine": 8
    },
    {
      "label": "Answer",
      "title": "Return answer",
      "note": "Return the value produced by the maintained invariant.",
      "activeLine": 12
    }
  ],
  "complexity": {
    "time": "O(nm).",
    "space": "O(nm)."
  },
  "quiz": {
    "question": "Which state choice keeps Edit Distance correct?",
    "options": [
      {
        "key": "A",
        "text": "Track dp table and update it only through Edit Distance's transition.",
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
    "correctText": "Correct. Edit Distance stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Edit Distance needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "dynamic-programming",
  "algorithmSlug": "edit-distance",
  "runnerInput": [
    "horse",
    "ros"
  ]
};
