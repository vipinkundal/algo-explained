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
  "concept": "Rotated search is useful when sorted data has been shifted but one side of any midpoint is still ordered. Use this when the array is rotated and you still need logarithmic search.",
  "logicSummary": "Pick mid, identify which side is sorted, then keep the side whose value range can contain the target.",
  "transitionSummary": "Move low or high after checking whether target fits inside the sorted half.",
  "codeInsight": "The rotation is handled by the sorted-half test; no full pivot search is required.",
  "realLifeExample": "Use it when a sorted array has been rotated at an unknown pivot.",
  "whenToUse": "Use this when values are unique or duplicate handling is explicitly designed.",
  "memoryTrick": "Search in Rotated Sorted Array: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Search in Rotated Sorted Array is shown as sorted-half detection inside a rotated array. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Pick mid",
      "text": "Probe the current rotated range."
    },
    {
      "title": "Find sorted side",
      "text": "Check whether left or right half is ordered."
    },
    {
      "title": "Keep fitting half",
      "text": "Keep the half whose boundary values include the target."
    },
    {
      "title": "Return match",
      "text": "Stop when mid equals target or the range empties."
    }
  ],
  "variables": [
    {
      "name": "array, target",
      "purpose": "A rotated sorted array and target."
    },
    {
      "name": "low, high, mid",
      "purpose": "Current candidate window."
    },
    {
      "name": "index",
      "purpose": "The target index or -1."
    },
    {
      "name": "low <= high",
      "purpose": "Continue while the window can contain target."
    }
  ],
  "dryRun": [
    {
      "label": "Rotated range",
      "title": "Read array and target",
      "note": "The code starts with a sorted array shifted around a pivot.",
      "activeLine": 5,
      "codeInsight": "Defines searchInRotatedSortedArray and names the input array, target; edits to those inputs change the visual state and output."
    },
    {
      "label": "mid probe",
      "title": "Choose the middle",
      "note": "mid divides the current candidate window.",
      "activeLine": 5,
      "codeInsight": "Defines searchInRotatedSortedArray and names the input array, target; edits to those inputs change the visual state and output."
    },
    {
      "label": "sorted half",
      "title": "Detect ordered side",
      "note": "One side of mid must still be sorted.",
      "activeLine": 6,
      "codeInsight": "Initializes low as mutable state; later branches update it as the search window or traversal changes."
    },
    {
      "label": "Move bounds",
      "title": "Keep possible side",
      "note": "Bounds move toward the only half that can contain target.",
      "activeLine": 8,
      "codeInsight": "Repeats while low <= high is true, so the algorithm keeps resolving current work before moving on."
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
  ],
  "animation": {
    "type": "array-flow",
    "title": "Search in Rotated Sorted Array array state",
    "ruleLabel": "Array invariant",
    "rule": "Move low or high after checking whether target fits inside the sorted half.",
    "values": [
      4,
      5,
      6,
      7,
      0,
      1,
      2
    ],
    "steps": [
      {
        "phase": "Rotated range",
        "title": "Read array and target",
        "note": "The code starts with a sorted array shifted around a pivot.",
        "ruleLabel": "Search in Rotated Sorted Array invariant",
        "rule": "Defines searchInRotatedSortedArray and names the input array, target; edits to those inputs change the visual state and output.",
        "activeIndices": [
          0
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          1
        ],
        "primaryLabel": "Rotated range",
        "secondaryLabel": "Move low or high after checking whether target fits inside the sorted half."
      },
      {
        "phase": "mid probe",
        "title": "Choose the middle",
        "note": "mid divides the current candidate window.",
        "ruleLabel": "Search in Rotated Sorted Array invariant",
        "rule": "Defines searchInRotatedSortedArray and names the input array, target; edits to those inputs change the visual state and output.",
        "activeIndices": [
          1,
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [
          4,
          5,
          6
        ],
        "window": [
          0,
          2
        ],
        "primaryLabel": "mid probe",
        "secondaryLabel": "Move low or high after checking whether target fits inside the sorted half."
      },
      {
        "phase": "sorted half",
        "title": "Detect ordered side",
        "note": "One side of mid must still be sorted.",
        "ruleLabel": "Search in Rotated Sorted Array invariant",
        "rule": "Initializes low as mutable state; later branches update it as the search window or traversal changes.",
        "activeIndices": [
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [
          5,
          6
        ],
        "window": [
          1,
          3
        ],
        "primaryLabel": "sorted half",
        "secondaryLabel": "Move low or high after checking whether target fits inside the sorted half."
      },
      {
        "phase": "Move bounds",
        "title": "Keep possible side",
        "note": "Bounds move toward the only half that can contain target.",
        "ruleLabel": "Search in Rotated Sorted Array invariant",
        "rule": "Repeats while low <= high is true, so the algorithm keeps resolving current work before moving on.",
        "activeIndices": [
          3,
          4
        ],
        "sortedIndices": [],
        "mutedIndices": [
          0,
          6
        ],
        "window": [
          2,
          4
        ],
        "primaryLabel": "Move bounds",
        "secondaryLabel": "Move low or high after checking whether target fits inside the sorted half."
      }
    ]
  }
};
