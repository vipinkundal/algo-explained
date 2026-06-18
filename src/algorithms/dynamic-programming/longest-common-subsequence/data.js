// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "longest-common-subsequence",
  "title": "Longest Common Subsequence",
  "category": "Dynamic Programming",
  "route": "/algorithms/dynamic-programming/longest-common-subsequence",
  "phase": 3,
  "priority": "high",
  "visualizerType": "dp-grid",
  "icon": "table_chart",
  "codePath": "./src/algorithms/dynamic-programming/longest-common-subsequence/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Longest Common Subsequence is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "LCS compares prefixes of two strings and keeps the best subsequence length for every prefix pair.",
  "concept": "LCS compares prefixes of two strings and keeps the best subsequence length for every prefix pair.",
  "logicSummary": "Longest Common Subsequence defines subproblems, initializes base cases, fills states in dependency order, and reads the requested state as the answer.",
  "transitionSummary": "Compute one DP state from already-solved smaller states.",
  "codeInsight": "The DP table shape is the algorithm: every index in the code corresponds to a named subproblem.",
  "realLifeExample": "Longest Common Subsequence appears when overlapping subproblems would otherwise be recomputed.",
  "whenToUse": "Use Longest Common Subsequence when the recurrence and base cases match the problem statement.",
  "memoryTrick": "Longest Common Subsequence: state definition first, recurrence second, loops third.",
  "visualizerCaption": "A dp grid walkthrough showing Longest Common Subsequence's input, state, transition, and answer.",
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
      "label": "Input",
      "title": "Read inputs",
      "note": "Longest Common Subsequence starts by reading the exact input shape it owns.",
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
    "question": "Which state choice keeps Longest Common Subsequence correct?",
    "options": [
      {
        "key": "A",
        "text": "Track dp table and update it only through Longest Common Subsequence's transition.",
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
    "correctText": "Correct. Longest Common Subsequence stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Longest Common Subsequence needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "dynamic-programming",
  "algorithmSlug": "longest-common-subsequence"
};
