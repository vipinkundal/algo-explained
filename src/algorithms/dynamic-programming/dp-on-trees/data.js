// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "dp-on-trees",
  "title": "DP on Trees",
  "category": "Dynamic Programming",
  "route": "/algorithms/dynamic-programming/dp-on-trees",
  "phase": 4,
  "priority": "medium",
  "visualizerType": "tree-dp",
  "icon": "table_chart",
  "codePath": "./src/algorithms/dynamic-programming/dp-on-trees/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "DP on Trees is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "DP on Trees combines child states into a parent state during DFS.",
  "concept": "DP on Trees combines child states into a parent state during DFS.",
  "logicSummary": "DP on Trees defines subproblems, initializes base cases, fills states in dependency order, and reads the requested state as the answer.",
  "transitionSummary": "Compute one DP state from already-solved smaller states.",
  "codeInsight": "The DP table shape is the algorithm: every index in the code corresponds to a named subproblem.",
  "realLifeExample": "DP on Trees appears when overlapping subproblems would otherwise be recomputed.",
  "whenToUse": "Use DP on Trees when the recurrence and base cases match the problem statement.",
  "memoryTrick": "DP on Trees: state definition first, recurrence second, loops third.",
  "visualizerCaption": "A tree dp walkthrough showing DP on Trees' input, state, transition, and answer.",
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
      "name": "root",
      "purpose": "The tree node where recursion or traversal begins."
    },
    {
      "name": "dp table and dependencies",
      "purpose": "Stored subproblem answers plus the dependency order needed to fill them. This page visualizes it as tree dp."
    },
    {
      "name": "target dp answer",
      "purpose": "The value produced by dpOnTrees after the maintained state reaches the stop rule."
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
      "note": "DP on Trees starts by reading the exact input shape it owns.",
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
    "time": "O(n).",
    "space": "O(h) recursion stack."
  },
  "quiz": {
    "question": "Which state choice keeps DP on Trees correct?",
    "options": [
      {
        "key": "A",
        "text": "Track dp table and update it only through DP on Trees' transition.",
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
    "correctText": "Correct. DP on Trees stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. DP on Trees needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "dynamic-programming",
  "algorithmSlug": "dp-on-trees",
  "runnerInput": [
    {
      "value": 3,
      "left": {
        "value": 2,
        "right": {
          "value": 3
        }
      },
      "right": {
        "value": 3,
        "right": {
          "value": 1
        }
      }
    }
  ]
};
