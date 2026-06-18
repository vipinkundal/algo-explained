// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "binary-search",
  "title": "Binary Search",
  "category": "Searching",
  "route": "/algorithms/searching/binary-search",
  "phase": 1,
  "priority": "high",
  "visualizerType": "array-boundaries",
  "icon": "search",
  "codePath": "./src/algorithms/searching/binary-search/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Binary Search is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Binary Search repeatedly halves a sorted search range using the middle value.",
  "concept": "Binary Search repeatedly halves a sorted search range using the middle value.",
  "logicSummary": "Keep low and high boundaries, compare the middle item, then discard the half that cannot contain the target.",
  "transitionSummary": "Move low to mid + 1 when the middle is too small; move high to mid - 1 when it is too large.",
  "codeInsight": "Every branch must shrink the search window, otherwise binary search can loop forever.",
  "realLifeExample": "Use it for sorted arrays, lookup tables, and monotonic answer spaces.",
  "whenToUse": "Use Binary Search when the range is sorted or the predicate is monotonic.",
  "memoryTrick": "Binary Search: compare middle, keep only the possible half.",
  "visualizerCaption": "A array boundaries walkthrough showing Binary Search's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Set boundaries",
      "text": "low starts at 0 and high at the last index."
    },
    {
      "title": "Pick middle",
      "text": "Compute mid inside the current window."
    },
    {
      "title": "Discard half",
      "text": "Use the comparison to move low or high."
    },
    {
      "title": "Return index",
      "text": "Return mid on equality or -1 after the window closes."
    }
  ],
  "variables": [
    {
      "name": "array, target",
      "purpose": "A sorted array and the value to find."
    },
    {
      "name": "low, high, mid",
      "purpose": "The current search window and its midpoint."
    },
    {
      "name": "index",
      "purpose": "The target index, or -1 when absent."
    },
    {
      "name": "low <= high",
      "purpose": "The loop runs while the window is non-empty."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read inputs",
      "note": "Binary Search starts by reading the exact input shape it owns.",
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
      "note": "Move low to mid + 1 when the middle is too small; move high to mid - 1 when it is too large.",
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
    "question": "Which state choice keeps Binary Search correct?",
    "options": [
      {
        "key": "A",
        "text": "Track search window and update it only through Binary Search's transition.",
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
    "correctText": "Correct. Binary Search stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Binary Search needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "searching",
  "algorithmSlug": "binary-search"
};
