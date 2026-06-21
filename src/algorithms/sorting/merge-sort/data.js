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
  "meaning": "Merge Sort is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Divide the array into halves, sort each half, then merge two sorted halves.",
  "concept": "Merge Sort is useful when splitting into sorted halves makes merging predictable. Use this when stable n log n sorting is preferred and extra merge space is acceptable.",
  "logicSummary": "Divide the array into halves, sort each half recursively, then merge the two sorted halves.",
  "transitionSummary": "Each merge step chooses the smaller front value from two already-sorted halves.",
  "codeInsight": "The implementation copies the input array, then mutates only the working copy so callers keep their original data.",
  "realLifeExample": "Merge Sort appears when values must be ordered and the chosen invariant matches the input size or stability needs.",
  "whenToUse": "Use Merge Sort when its ordering invariant and complexity tradeoff match the dataset.",
  "memoryTrick": "Merge Sort: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Merge Sort is shown as values moving toward sorted order. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Split range",
      "text": "Divide the current array section."
    },
    {
      "title": "Sort halves",
      "text": "Recursively sort left and right sections."
    },
    {
      "title": "Merge fronts",
      "text": "Choose the smaller front value."
    },
    {
      "title": "Return merged array",
      "text": "Produce one sorted section."
    }
  ],
  "variables": [
    {
      "name": "array",
      "purpose": "The values to sort."
    },
    {
      "name": "working array",
      "purpose": "A copy that is rearranged during sorting."
    },
    {
      "name": "sorted array",
      "purpose": "The final ordered result."
    },
    {
      "name": "unsorted work remains",
      "purpose": "Continue until every value is in final order."
    }
  ],
  "dryRun": [
    {
      "label": "Range",
      "title": "Split array",
      "note": "The code divides work into smaller ranges.",
      "activeLine": 1,
      "codeInsight": "The code divides work into smaller ranges."
    },
    {
      "label": "Halves",
      "title": "Sort recursively",
      "note": "Each half is solved before merge.",
      "activeLine": 4,
      "codeInsight": "Each half is solved before merge."
    },
    {
      "label": "Merge",
      "title": "Choose smaller front",
      "note": "The next output value comes from one sorted half.",
      "activeLine": 8,
      "codeInsight": "The next output value comes from one sorted half."
    },
    {
      "label": "Sorted",
      "title": "Return merged result",
      "note": "The merged section is fully ordered.",
      "activeLine": 12,
      "codeInsight": "The merged section is fully ordered."
    }
  ],
  "complexity": {
    "time": "O(n log n).",
    "space": "O(n)."
  },
  "quiz": {
    "question": "Which state choice keeps Merge Sort correct?",
    "options": [
      {
        "key": "A",
        "text": "Track indices and working array and update it only through Merge Sort's transition.",
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
    "correctText": "Correct. Merge Sort stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Merge Sort needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "sorting",
  "algorithmSlug": "merge-sort",
  "runnerInput": [
    [
      4,
      1,
      3,
      2
    ]
  ],
  "animation": {
    "type": "array-flow",
    "title": "Merge Sort array state",
    "ruleLabel": "Array invariant",
    "rule": "Each merge step chooses the smaller front value from two already-sorted halves.",
    "values": [
      4,
      1,
      3,
      2
    ],
    "steps": [
      {
        "phase": "Range",
        "title": "Split array",
        "note": "The code divides work into smaller ranges.",
        "ruleLabel": "Merge Sort invariant",
        "rule": "The code divides work into smaller ranges.",
        "activeIndices": [
          0
        ],
        "sortedIndices": [
          0
        ],
        "mutedIndices": [],
        "window": [
          0,
          1
        ],
        "primaryLabel": "Range",
        "secondaryLabel": "Each merge step chooses the smaller front value from two already-sorted halves."
      },
      {
        "phase": "Halves",
        "title": "Sort recursively",
        "note": "Each half is solved before merge.",
        "ruleLabel": "Merge Sort invariant",
        "rule": "Each half is solved before merge.",
        "activeIndices": [
          1,
          2
        ],
        "sortedIndices": [
          0
        ],
        "mutedIndices": [],
        "window": [
          0,
          2
        ],
        "primaryLabel": "Halves",
        "secondaryLabel": "Each merge step chooses the smaller front value from two already-sorted halves."
      },
      {
        "phase": "Merge",
        "title": "Choose smaller front",
        "note": "The next output value comes from one sorted half.",
        "ruleLabel": "Merge Sort invariant",
        "rule": "The next output value comes from one sorted half.",
        "activeIndices": [
          2
        ],
        "sortedIndices": [
          0,
          1
        ],
        "mutedIndices": [],
        "window": [
          1,
          3
        ],
        "primaryLabel": "Merge",
        "secondaryLabel": "Each merge step chooses the smaller front value from two already-sorted halves."
      },
      {
        "phase": "Sorted",
        "title": "Return merged result",
        "note": "The merged section is fully ordered.",
        "ruleLabel": "Merge Sort invariant",
        "rule": "The merged section is fully ordered.",
        "activeIndices": [
          3,
          3
        ],
        "sortedIndices": [
          0,
          1,
          2
        ],
        "mutedIndices": [
          0
        ],
        "window": [
          2,
          3
        ],
        "primaryLabel": "Sorted",
        "secondaryLabel": "Each merge step chooses the smaller front value from two already-sorted halves."
      }
    ]
  }
};
