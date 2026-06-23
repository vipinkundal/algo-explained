// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "merge-sort",
  "title": "Merge Sort",
  "category": "Sorting",
  "route": "/algorithms/sorting/merge-sort",
  "phase": 2,
  "priority": "high",
  "visualizerType": "divide-merge",
  "icon": "sort",
  "codePath": "./src/algorithms/sorting/merge-sort/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Merge Sort is taught here with its own input shape, state, transition, code trace, and stop condition.",
  "problem": "Sort an array by recursively sorting halves and merging two sorted lists.",
  "concept": "Merge Sort divides until single-item arrays, then merges sorted halves by repeatedly taking the smaller front value.",
  "logicSummary": "Split the array around mid, recursively sort both halves, then merge the two sorted results.",
  "transitionSummary": "During merge, compare the left and right front values and append the smaller one to output.",
  "codeInsight": "The merge function is where ordering happens; recursion only creates sorted halves for merge to combine.",
  "realLifeExample": "Use it for stable sorting and linked-list sorting where predictable O(n log n) matters.",
  "whenToUse": "Use Merge Sort when stable O(n log n) sorting is preferred and O(n) extra space is acceptable.",
  "memoryTrick": "Split down, merge up.",
  "visualizerCaption": "Merge Sort is shown with the actual sorted/unsorted state that its code maintains.",
  "logicSteps": [
    {
      "title": "Divide at mid",
      "text": "Break [5,1,4,2] into [5,1] and [4,2]."
    },
    {
      "title": "Single items are sorted",
      "text": "Arrays of length 1 return immediately."
    },
    {
      "title": "Compare fronts",
      "text": "Take the smaller front from left or right."
    },
    {
      "title": "Merged result",
      "text": "Concatenate leftovers after one half is empty."
    }
  ],
  "variables": [
    {
      "name": "array",
      "purpose": "Current range being sorted."
    },
    {
      "name": "mid",
      "purpose": "Split point between halves."
    },
    {
      "name": "left, right",
      "purpose": "Sorted halves waiting to merge."
    },
    {
      "name": "result",
      "purpose": "Merged sorted output."
    }
  ],
  "dryRun": [
    {
      "label": "Split",
      "title": "Divide at mid",
      "note": "Break [5,1,4,2] into [5,1] and [4,2].",
      "activeLine": 3,
      "codeInsight": "mid defines the two recursive subproblems."
    },
    {
      "label": "Base",
      "title": "Single items are sorted",
      "note": "Arrays of length 1 return immediately.",
      "activeLine": 2,
      "codeInsight": "The base case stops recursion."
    },
    {
      "label": "Merge",
      "title": "Compare fronts",
      "note": "Take the smaller front from left or right.",
      "activeLine": 11,
      "codeInsight": "Only sorted halves make the front comparison valid."
    },
    {
      "label": "Return",
      "title": "Merged result",
      "note": "Concatenate leftovers after one half is empty.",
      "activeLine": 13,
      "codeInsight": "Remaining values are already ordered inside their half."
    }
  ],
  "complexity": {
    "time": "O(n log n).",
    "space": "O(n)."
  },
  "quiz": {
    "question": "Which state keeps Merge Sort correct?",
    "options": [
      {
        "key": "A",
        "text": "Track the algorithm's own sorted region, partition, bucket, count, heap, or digit state.",
        "correct": true
      },
      {
        "key": "B",
        "text": "Use one generic sorted-array story for every sorting algorithm.",
        "correct": false
      },
      {
        "key": "C",
        "text": "Move values without preserving the algorithm's stated invariant.",
        "correct": false
      }
    ],
    "correctText": "Correct. Merge Sort works because that state and transition match the algorithm.",
    "incorrectText": "Not quite. Merge Sort needs its own state and stop condition instead of borrowed page logic."
  },
  "categorySlug": "sorting",
  "algorithmSlug": "merge-sort",
  "runnerInput": [
    [
      5,
      1,
      4,
      2
    ]
  ],
  "animation": {
    "type": "array-flow",
    "static": true,
    "title": "Merge Sort trace",
    "ruleLabel": "Sorting invariant",
    "rule": "During merge, compare the left and right front values and append the smaller one to output.",
    "values": [
      5,
      1,
      4,
      2
    ],
    "steps": [
      {
        "phase": "split",
        "title": "Divide into halves",
        "note": "[5,1] and [4,2].",
        "ruleLabel": "Sorting invariant",
        "rule": "During merge, compare the left and right front values and append the smaller one to output.",
        "activeIndices": [
          1,
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          3
        ],
        "primaryLabel": "split",
        "secondaryLabel": "During merge, compare the left and right front values and append the smaller one to output."
      },
      {
        "phase": "base",
        "title": "Sort tiny halves",
        "note": "Single values are sorted by definition.",
        "ruleLabel": "Sorting invariant",
        "rule": "During merge, compare the left and right front values and append the smaller one to output.",
        "activeIndices": [
          0,
          1,
          2,
          3
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          3
        ],
        "primaryLabel": "base",
        "secondaryLabel": "During merge, compare the left and right front values and append the smaller one to output."
      },
      {
        "phase": "merge",
        "title": "Compare front values",
        "note": "Choose the smaller front for output.",
        "ruleLabel": "Sorting invariant",
        "rule": "During merge, compare the left and right front values and append the smaller one to output.",
        "activeIndices": [
          0,
          2
        ],
        "sortedIndices": [
          1,
          3
        ],
        "mutedIndices": [],
        "window": [
          0,
          3
        ],
        "primaryLabel": "merge",
        "secondaryLabel": "During merge, compare the left and right front values and append the smaller one to output."
      },
      {
        "phase": "return",
        "title": "Merged order",
        "note": "The final array is [1,2,4,5].",
        "ruleLabel": "Sorting invariant",
        "rule": "During merge, compare the left and right front values and append the smaller one to output.",
        "activeIndices": [
          0,
          1,
          2,
          3
        ],
        "sortedIndices": [
          0,
          1,
          2,
          3
        ],
        "mutedIndices": [],
        "window": [
          0,
          3
        ],
        "primaryLabel": "return",
        "secondaryLabel": "During merge, compare the left and right front values and append the smaller one to output."
      }
    ]
  }
};
