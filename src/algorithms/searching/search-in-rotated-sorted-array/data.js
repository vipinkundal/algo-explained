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
  "meaning": "Search in Rotated Sorted Array is taught here with its own input shape, state, transition, code trace, and stop condition.",
  "problem": "Find a target in a sorted array that was rotated at an unknown pivot.",
  "concept": "The array is not globally sorted, but every step has at least one sorted half that can be tested.",
  "logicSummary": "Compare mid, identify the sorted side, and keep only the side where target can legally fit.",
  "transitionSummary": "If the left side is sorted, target either fits there and high moves left, or low moves right; the mirrored rule handles the right side.",
  "codeInsight": "The sorted-half check replaces a separate pivot search and keeps the algorithm logarithmic.",
  "realLifeExample": "Use it for circularly shifted sorted IDs, rotated logs, or ring-buffer snapshots.",
  "whenToUse": "Use this version when values are distinct or duplicate handling is added deliberately.",
  "memoryTrick": "One half is sorted; ask if target belongs there.",
  "visualizerCaption": "Search in Rotated Sorted Array is shown with the exact boundary, probe, or scan state used by the code.",
  "logicSteps": [
    {
      "title": "Probe rotated array",
      "text": "mid splits the current window even though the whole array is rotated."
    },
    {
      "title": "Identify sorted half",
      "text": "array[low] <= array[mid] means the left side is ordered."
    },
    {
      "title": "Choose the fitting half",
      "text": "If target is not inside the sorted half, discard that half."
    },
    {
      "title": "Return mid on equality",
      "text": "Equality stops the search regardless of rotation."
    }
  ],
  "variables": [
    {
      "name": "array, target",
      "purpose": "Rotated sorted values and search target."
    },
    {
      "name": "low, high, mid",
      "purpose": "Current candidate window and probe."
    },
    {
      "name": "sorted half",
      "purpose": "The half whose endpoints can be used for range testing."
    },
    {
      "name": "low <= high",
      "purpose": "Continue while candidate indices remain."
    }
  ],
  "dryRun": [
    {
      "label": "Window",
      "title": "Probe rotated array",
      "note": "mid splits the current window even though the whole array is rotated.",
      "activeLine": 5,
      "codeInsight": "The midpoint is still useful because one side is ordered."
    },
    {
      "label": "Left sorted",
      "title": "Identify sorted half",
      "note": "array[low] <= array[mid] means the left side is ordered.",
      "activeLine": 7,
      "codeInsight": "Endpoint comparisons are valid only on the sorted half."
    },
    {
      "label": "Target side",
      "title": "Choose the fitting half",
      "note": "If target is not inside the sorted half, discard that half.",
      "activeLine": 8,
      "codeInsight": "The range test decides low/high, not the rotation point."
    },
    {
      "label": "Found",
      "title": "Return mid on equality",
      "note": "Equality stops the search regardless of rotation.",
      "activeLine": 6,
      "codeInsight": "A found target has the same stop condition as normal binary search."
    }
  ],
  "complexity": {
    "time": "O(log n) for distinct values.",
    "space": "O(1)."
  },
  "quiz": {
    "question": "Which state keeps Search in Rotated Sorted Array correct?",
    "options": [
      {
        "key": "A",
        "text": "Use the page's own search boundary or scan state and update it only through the listed transition.",
        "correct": true
      },
      {
        "key": "B",
        "text": "Reuse another search algorithm's comparison rule without checking the invariant.",
        "correct": false
      },
      {
        "key": "C",
        "text": "Stop before the algorithm-specific boundary or scan condition is resolved.",
        "correct": false
      }
    ],
    "correctText": "Correct. Search in Rotated Sorted Array works because that state and transition match the algorithm.",
    "incorrectText": "Not quite. Search in Rotated Sorted Array needs its own state and stop condition instead of borrowed page logic."
  },
  "categorySlug": "searching",
  "algorithmSlug": "search-in-rotated-sorted-array",
  "runnerInput": [
    [
      6,
      7,
      0,
      1,
      2,
      4,
      5
    ],
    1
  ],
  "animation": {
    "type": "array-flow",
    "static": true,
    "title": "Search in Rotated Sorted Array trace",
    "ruleLabel": "Search invariant",
    "rule": "If the left side is sorted, target either fits there and high moves left, or low moves right; the mirrored rule handles the right side.",
    "values": [
      6,
      7,
      0,
      1,
      2,
      4,
      5
    ],
    "steps": [
      {
        "phase": "[0, 6]",
        "title": "Start at rotated window",
        "note": "The midpoint is index 3.",
        "ruleLabel": "Search invariant",
        "rule": "If the left side is sorted, target either fits there and high moves left, or low moves right; the mirrored rule handles the right side.",
        "activeIndices": [
          3
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          6
        ],
        "primaryLabel": "[0, 6]",
        "secondaryLabel": "If the left side is sorted, target either fits there and high moves left, or low moves right; the mirrored rule handles the right side."
      },
      {
        "phase": "mid = 1",
        "title": "Found target",
        "note": "array[3] is 1, so the search can return.",
        "ruleLabel": "Search invariant",
        "rule": "If the left side is sorted, target either fits there and high moves left, or low moves right; the mirrored rule handles the right side.",
        "activeIndices": [
          3
        ],
        "sortedIndices": [
          3
        ],
        "mutedIndices": [],
        "window": [
          0,
          6
        ],
        "primaryLabel": "mid = 1",
        "secondaryLabel": "If the left side is sorted, target either fits there and high moves left, or low moves right; the mirrored rule handles the right side."
      },
      {
        "phase": "sorted side",
        "title": "Left side example",
        "note": "When mid is not target, test which half is sorted.",
        "ruleLabel": "Search invariant",
        "rule": "If the left side is sorted, target either fits there and high moves left, or low moves right; the mirrored rule handles the right side.",
        "activeIndices": [
          0,
          1
        ],
        "sortedIndices": [],
        "mutedIndices": [
          2,
          3,
          4,
          5,
          6
        ],
        "window": [
          0,
          1
        ],
        "primaryLabel": "sorted side",
        "secondaryLabel": "If the left side is sorted, target either fits there and high moves left, or low moves right; the mirrored rule handles the right side."
      },
      {
        "phase": "return 3",
        "title": "Target index",
        "note": "The code returns index 3.",
        "ruleLabel": "Search invariant",
        "rule": "If the left side is sorted, target either fits there and high moves left, or low moves right; the mirrored rule handles the right side.",
        "activeIndices": [
          3
        ],
        "sortedIndices": [
          3
        ],
        "mutedIndices": [
          0,
          1,
          2,
          4,
          5,
          6
        ],
        "window": [
          3,
          3
        ],
        "primaryLabel": "return 3",
        "secondaryLabel": "If the left side is sorted, target either fits there and high moves left, or low moves right; the mirrored rule handles the right side."
      }
    ]
  }
};
