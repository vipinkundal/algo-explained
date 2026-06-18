// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "upper-bound",
  "title": "Upper Bound",
  "category": "Searching",
  "route": "/algorithms/searching/upper-bound",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "array-boundaries",
  "icon": "search",
  "codePath": "./src/algorithms/searching/upper-bound/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Upper Bound is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Upper Bound finds the first sorted position whose value is strictly greater than the target.",
  "concept": "Upper Bound finds the first sorted position whose value is strictly greater than the target.",
  "logicSummary": "Keep [low, high), skip values <= target, and keep values that may be the first greater item.",
  "transitionSummary": "If array[mid] <= target, move low right; otherwise move high to mid.",
  "codeInsight": "The only difference from lower bound is the comparison: <= target is discarded.",
  "realLifeExample": "Use it to count duplicates with upperBound - lowerBound.",
  "whenToUse": "Use Upper Bound when you need the first item after all target-equal values.",
  "memoryTrick": "Upper Bound: first value greater than target.",
  "visualizerCaption": "A array boundaries walkthrough showing Upper Bound's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Open full range",
      "text": "Search [0, array.length)."
    },
    {
      "title": "Compare middle",
      "text": "Check whether mid still belongs to <= target."
    },
    {
      "title": "Discard equal values",
      "text": "Move low past mid when array[mid] <= target."
    },
    {
      "title": "Return boundary",
      "text": "low is the first greater position."
    }
  ],
  "variables": [
    {
      "name": "array, target",
      "purpose": "A sorted array and boundary value."
    },
    {
      "name": "low, high",
      "purpose": "A half-open search range."
    },
    {
      "name": "upper index",
      "purpose": "The first index with value > target."
    },
    {
      "name": "low < high",
      "purpose": "Stop when one insertion point remains."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read inputs",
      "note": "Upper Bound starts by reading the exact input shape it owns.",
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
      "note": "If array[mid] <= target, move low right; otherwise move high to mid.",
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
    "time": "O(log n).",
    "space": "O(1)."
  },
  "quiz": {
    "question": "Which state choice keeps Upper Bound correct?",
    "options": [
      {
        "key": "A",
        "text": "Track search window and update it only through Upper Bound's transition.",
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
    "correctText": "Correct. Upper Bound stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Upper Bound needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "searching",
  "algorithmSlug": "upper-bound"
};
