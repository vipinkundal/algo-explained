// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "lower-bound",
  "title": "Lower Bound",
  "category": "Searching",
  "route": "/algorithms/searching/lower-bound",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "array-boundaries",
  "icon": "search",
  "codePath": "./src/algorithms/searching/lower-bound/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Lower Bound is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Lower Bound finds the first sorted position whose value is greater than or equal to the target.",
  "concept": "Lower Bound finds the first sorted position whose value is greater than or equal to the target.",
  "logicSummary": "Keep a half-open range [low, high), test the middle, and preserve the first possible answer.",
  "transitionSummary": "If array[mid] is too small, move low right; otherwise keep mid by moving high to mid.",
  "codeInsight": "Using high = mid keeps a valid candidate in the range until low is the answer.",
  "realLifeExample": "Use it for insertion positions, frequency ranges, and first-true binary-search predicates.",
  "whenToUse": "Use Lower Bound when you need the first position that can hold target without breaking order.",
  "memoryTrick": "Lower Bound: first value not less than target.",
  "visualizerCaption": "A array boundaries walkthrough showing Lower Bound's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Use a half-open range",
      "text": "Start with [0, array.length)."
    },
    {
      "title": "Check mid",
      "text": "Compare array[mid] with target."
    },
    {
      "title": "Keep or discard mid",
      "text": "Discard mid only when it is too small."
    },
    {
      "title": "Return low",
      "text": "low is the first valid insertion index."
    }
  ],
  "variables": [
    {
      "name": "array, target",
      "purpose": "array: The ordered or unsorted list the algorithm scans, partitions, sorts, or transforms. target: The value or condition each comparison is trying to locate."
    },
    {
      "name": "low, high, mid",
      "purpose": "The shrinking search window and midpoint used to discard impossible positions."
    },
    {
      "name": "found index or boundary",
      "purpose": "The value produced by lowerBound after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "If array[mid] is too small, move low right; otherwise keep mid by moving high to mid. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read inputs",
      "note": "Lower Bound starts by reading the exact input shape it owns.",
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
      "note": "If array[mid] is too small, move low right; otherwise keep mid by moving high to mid.",
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
    "question": "Which state choice keeps Lower Bound correct?",
    "options": [
      {
        "key": "A",
        "text": "Track search window and update it only through Lower Bound's transition.",
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
    "correctText": "Correct. Lower Bound stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Lower Bound needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "searching",
  "algorithmSlug": "lower-bound",
  "runnerInput": [
    [
      1,
      3,
      3,
      5
    ],
    3
  ]
};
