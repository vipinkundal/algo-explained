// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "longest-consecutive-sequence",
  "title": "Longest Consecutive Sequence",
  "category": "Array Patterns",
  "route": "/algorithms/array-patterns/longest-consecutive-sequence",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "hash-set-chain",
  "icon": "view_week",
  "codePath": "./src/algorithms/array-patterns/longest-consecutive-sequence/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Longest Consecutive Sequence is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Longest Consecutive Sequence starts only at numbers that have no predecessor and counts the chain forward.",
  "concept": "Longest Consecutive Sequence starts only at numbers that have no predecessor and counts the chain forward.",
  "logicSummary": "Longest Consecutive Sequence keeps an array-specific invariant and updates it as the scan moves through the input.",
  "transitionSummary": "Move the pointer, window, counter, or running value exactly once per step while preserving the invariant.",
  "codeInsight": "The code is written around the array invariant, not a generic scan: each variable explains what future positions can still change.",
  "realLifeExample": "Longest Consecutive Sequence appears when contiguous ranges, ordering, or repeated array state can be reused across positions.",
  "whenToUse": "Use Longest Consecutive Sequence when the problem statement matches its array invariant.",
  "memoryTrick": "Longest Consecutive Sequence: write down the invariant before moving the pointer.",
  "visualizerCaption": "A hash set chain walkthrough showing Longest Consecutive Sequence's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the array",
      "text": "Identify whether the problem is about a range, window, order, or frequency."
    },
    {
      "title": "Initialize invariant",
      "text": "Create only the pointer or running state this pattern needs."
    },
    {
      "title": "Advance scan",
      "text": "Update the invariant as each position is consumed."
    },
    {
      "title": "Return answer",
      "text": "Return the value maintained by the invariant."
    }
  ],
  "variables": [
    {
      "name": "array",
      "purpose": "The ordered or unsorted list the algorithm scans, partitions, sorts, or transforms."
    },
    {
      "name": "set and streak length",
      "purpose": "A membership set plus the current consecutive chain being measured."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by longestConsecutiveSequence after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Move the pointer, window, counter, or running value exactly once per step while preserving the invariant. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read inputs",
      "note": "Longest Consecutive Sequence starts by reading the exact input shape it owns.",
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
      "note": "Move the pointer, window, counter, or running value exactly once per step while preserving the invariant.",
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
    "time": "O(n) average.",
    "space": "O(n)."
  },
  "quiz": {
    "question": "Which state choice keeps Longest Consecutive Sequence correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Longest Consecutive Sequence's transition.",
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
    "correctText": "Correct. Longest Consecutive Sequence stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Longest Consecutive Sequence needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "array-patterns",
  "algorithmSlug": "longest-consecutive-sequence",
  "runnerInput": [
    [
      100,
      4,
      200,
      1,
      3,
      2
    ]
  ]
};
