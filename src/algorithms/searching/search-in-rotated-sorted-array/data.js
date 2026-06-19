// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "search-in-rotated-sorted-array",
  "title": "Search in Rotated Sorted Array",
  "category": "Searching",
  "route": "/algorithms/searching/search-in-rotated-sorted-array",
  "phase": 2,
  "priority": "high",
  "visualizerType": "rotated-array",
  "icon": "search",
  "codePath": "./src/algorithms/searching/search-in-rotated-sorted-array/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Search in Rotated Sorted Array is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Rotated-array search uses binary search while first deciding which half is sorted.",
  "concept": "Rotated-array search uses binary search while first deciding which half is sorted.",
  "logicSummary": "Compare mid with target, identify the sorted half, then keep the half that can contain target.",
  "transitionSummary": "Move low/high according to whether target lies inside the sorted side.",
  "codeInsight": "The rotation is handled by the sorted-half test; no full pivot search is required.",
  "realLifeExample": "Use it when a sorted array has been rotated at an unknown pivot.",
  "whenToUse": "Use this when values are unique or duplicate handling is explicitly designed.",
  "memoryTrick": "Find the sorted half, then ask whether target fits there.",
  "visualizerCaption": "A rotated array walkthrough showing Search in Rotated Sorted Array's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Pick mid",
      "text": "Binary-search the rotated range."
    },
    {
      "title": "Find sorted side",
      "text": "Left side is sorted when array[low] <= array[mid]."
    },
    {
      "title": "Keep fitting side",
      "text": "Check whether target belongs inside that sorted range."
    },
    {
      "title": "Return or miss",
      "text": "Return mid on match or -1 after exhaustion."
    }
  ],
  "variables": [
    {
      "name": "array, target",
      "purpose": "array: The ordered or unsorted list the algorithm scans, partitions, sorts, or transforms. target: The value or condition each comparison is trying to locate."
    },
    {
      "name": "search window or scan index",
      "purpose": "The index, pointer, or boundary range that can still contain the answer. This page visualizes it as rotated array."
    },
    {
      "name": "found index or boundary",
      "purpose": "The value produced by searchInRotatedSortedArray after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Move low/high according to whether target lies inside the sorted side. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read inputs",
      "note": "Search in Rotated Sorted Array starts by reading the exact input shape it owns.",
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
      "note": "Move low/high according to whether target lies inside the sorted side.",
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
    "time": "O(log n) with distinct values.",
    "space": "O(1)."
  },
  "quiz": {
    "question": "Which state choice keeps Search in Rotated Sorted Array correct?",
    "options": [
      {
        "key": "A",
        "text": "Track search window and update it only through Search in Rotated Sorted Array's transition.",
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
    "correctText": "Correct. Search in Rotated Sorted Array stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Search in Rotated Sorted Array needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "searching",
  "algorithmSlug": "search-in-rotated-sorted-array",
  "runnerInput": [
    [
      4,
      5,
      6,
      7,
      0,
      1,
      2
    ],
    0
  ]
};
