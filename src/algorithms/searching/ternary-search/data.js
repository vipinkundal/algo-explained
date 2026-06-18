// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ternary-search",
  "title": "Ternary Search",
  "category": "Searching",
  "route": "/algorithms/searching/ternary-search",
  "phase": 2,
  "priority": "low",
  "visualizerType": "divided-range",
  "icon": "search",
  "codePath": "./src/algorithms/searching/ternary-search/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Ternary Search is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Ternary Search narrows a unimodal range by comparing two interior points.",
  "concept": "Ternary Search narrows a unimodal range by comparing two interior points.",
  "logicSummary": "Split the interval into thirds and discard the side that cannot contain the optimum.",
  "transitionSummary": "For a maximum, if f(mid1) < f(mid2), discard the left third; otherwise discard the right third.",
  "codeInsight": "Ternary search belongs to unimodal functions, not ordinary sorted-array lookup.",
  "realLifeExample": "Use it for discrete or continuous optimization where the function rises then falls.",
  "whenToUse": "Use Ternary Search only when the objective is unimodal.",
  "memoryTrick": "Two mids reveal which third cannot hold the peak.",
  "visualizerCaption": "A divided range walkthrough showing Ternary Search's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Create thirds",
      "text": "Compute mid1 and mid2."
    },
    {
      "title": "Evaluate both",
      "text": "Compare objective values."
    },
    {
      "title": "Discard one third",
      "text": "Remove the side that cannot contain the optimum."
    },
    {
      "title": "Return midpoint",
      "text": "The final range center approximates the answer."
    }
  ],
  "variables": [
    {
      "name": "low, high, evaluate",
      "purpose": "The search bounds and objective function."
    },
    {
      "name": "mid1, mid2",
      "purpose": "Two interior probes."
    },
    {
      "name": "best position",
      "purpose": "The remaining optimum candidate."
    },
    {
      "name": "high - low > precision",
      "purpose": "Stop when the range is small enough."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read inputs",
      "note": "Ternary Search starts by reading the exact input shape it owns.",
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
      "note": "For a maximum, if f(mid1) < f(mid2), discard the left third; otherwise discard the right third.",
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
    "time": "O(log range / precision).",
    "space": "O(1)."
  },
  "quiz": {
    "question": "Which state choice keeps Ternary Search correct?",
    "options": [
      {
        "key": "A",
        "text": "Track search window and update it only through Ternary Search's transition.",
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
    "correctText": "Correct. Ternary Search stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Ternary Search needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "searching",
  "algorithmSlug": "ternary-search"
};
