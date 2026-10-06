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
  "meaning": "Find a target in a sorted array that was rotated at an unknown pivot.",
  "problem": "Find a target in a sorted array that was rotated at an unknown pivot.",
  "concept": "The array is not globally sorted, but every step has at least one sorted half that can be tested.",
  "logicSummary": "Compare mid, identify the sorted side, and keep only the side where target can legally fit.",
  "transitionSummary": "If the left side is sorted, target either fits there and high moves left, or low moves right; the mirrored rule handles the right side.",
  "codeInsight": "The sorted-half check replaces a separate pivot search and keeps the algorithm logarithmic.",
  "realLifeExample": "Use it for circularly shifted sorted IDs, rotated logs, or ring-buffer snapshots.",
  "whenToUse": "Use this version when values are distinct or duplicate handling is added deliberately.",
  "memoryTrick": "One half is sorted; ask if target belongs there.",
  "visualizerCaption": "Explore Search in Rotated Sorted Array through a sample teaching model, then compare it with the runnable result.",
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
    "question": "Which explanation best describes Search in Rotated Sorted Array?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      },
      {
        "key": "C",
        "text": "Find a target in a sorted array that was rotated at an unknown pivot.",
        "correct": true
      }
    ],
    "correctText": "Correct. Find a target in a sorted array that was rotated at an unknown pivot.",
    "incorrectText": "Try again. Find a target in a sorted array that was rotated at an unknown pivot. Compare the small example in the lesson with your choice."
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
  },
  "learningGuide": {
    "mentalModel": "An array is a row of numbered slots. An index tells you where a value is; it is not the value itself.",
    "family": "Arrays and indexes",
    "example": "Probe rotated array: mid splits the current window even though the whole array is rotated. Identify sorted half: array[low] <= array[mid] means the left side is ordered. Choose the fitting half: If target is not inside the sorted half, discard that half. Return mid on equality: Equality stops the search regardless of rotation.",
    "sampleInput": [
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
    "sampleResult": 3,
    "sampleScope": "This is the result of the unedited JavaScript function with the sample arguments. Changing the input or code can change the result.",
    "terms": [
      [
        "Index",
        "A position in a sequence, usually starting at 0."
      ],
      [
        "Boundary",
        "The first or last position still being considered."
      ],
      [
        "Invariant",
        "A rule that remains true after each step."
      ]
    ],
    "pitfall": "Keep positions and values separate. Check whether the right boundary is included before changing an index.",
    "checkpoint": "Explain this in your own words: Find a target in a sorted array that was rotated at an unknown pivot."
  },
  "relatedLinks": []
};
