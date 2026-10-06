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
  "meaning": "Sort an array by recursively sorting halves and merging two sorted lists.",
  "problem": "Sort an array by recursively sorting halves and merging two sorted lists.",
  "concept": "Merge Sort divides until single-item arrays, then merges sorted halves by repeatedly taking the smaller front value.",
  "logicSummary": "Split the array around mid, recursively sort both halves, then merge the two sorted results.",
  "transitionSummary": "During merge, compare the left and right front values and append the smaller one to output.",
  "codeInsight": "The merge function is where ordering happens; recursion only creates sorted halves for merge to combine.",
  "realLifeExample": "Use it for stable sorting and linked-list sorting where predictable O(n log n) matters.",
  "whenToUse": "Use Merge Sort when stable O(n log n) sorting is preferred and O(n) extra space is acceptable.",
  "memoryTrick": "Split down, merge up.",
  "visualizerCaption": "Explore Merge Sort through a sample teaching model, then compare it with the runnable result.",
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
    "question": "Which explanation best describes Merge Sort?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "Sort an array by recursively sorting halves and merging two sorted lists.",
        "correct": true
      },
      {
        "key": "C",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      }
    ],
    "correctText": "Correct. Sort an array by recursively sorting halves and merging two sorted lists.",
    "incorrectText": "Try again. Sort an array by recursively sorting halves and merging two sorted lists. Compare the small example in the lesson with your choice."
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
  },
  "learningGuide": {
    "mentalModel": "An array is a row of numbered slots. An index tells you where a value is; it is not the value itself.",
    "family": "Arrays and indexes",
    "example": "Divide at mid: Break [5,1,4,2] into [5,1] and [4,2]. Single items are sorted: Arrays of length 1 return immediately. Compare fronts: Take the smaller front from left or right. Merged result: Concatenate leftovers after one half is empty.",
    "sampleInput": [
      [
        5,
        1,
        4,
        2
      ]
    ],
    "sampleResult": [
      1,
      2,
      4,
      5
    ],
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
    "checkpoint": "Explain this in your own words: Sort an array by recursively sorting halves and merging two sorted lists."
  },
  "relatedLinks": []
};
