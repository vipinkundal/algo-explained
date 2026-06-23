// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "counting-sort",
  "title": "Counting Sort",
  "category": "Sorting",
  "route": "/algorithms/sorting/counting-sort",
  "phase": 3,
  "priority": "medium",
  "visualizerType": "frequency-array",
  "icon": "sort",
  "codePath": "./src/algorithms/sorting/counting-sort/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Counting Sort is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Count occurrences of each integer key, then write values back in key order.",
  "concept": "Counting Sort is useful when small integer ranges can be counted instead of compared pair by pair. Use this when keys are bounded integers and frequency memory is acceptable.",
  "logicSummary": "Count each value, compute output positions or repeated values, then rebuild the array in key order.",
  "transitionSummary": "Each value increments a count, and each count later emits ordered copies.",
  "codeInsight": "The implementation copies the input array, then mutates only the working copy so callers keep their original data.",
  "realLifeExample": "Counting Sort appears when values must be ordered and the chosen invariant matches the input size or stability needs.",
  "whenToUse": "Use Counting Sort when its ordering invariant and complexity tradeoff match the dataset.",
  "memoryTrick": "Counting Sort: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Counting Sort is shown as values moving toward sorted order. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Read range",
      "text": "Identify the integer key bounds."
    },
    {
      "title": "Count values",
      "text": "Increment the frequency bucket."
    },
    {
      "title": "Emit by count",
      "text": "Write values in key order."
    },
    {
      "title": "Return sorted array",
      "text": "Return the rebuilt ordered list."
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
      "title": "Read key bounds",
      "note": "Counting needs a finite integer range.",
      "activeLine": 7,
      "codeInsight": "Computes min from the current values before the algorithm decides the next move."
    },
    {
      "label": "Counts",
      "title": "Increment frequency",
      "note": "Each input value updates one bucket.",
      "activeLine": 5,
      "codeInsight": "Defines countingSort and names the input array; edits to those inputs change the visual state and output."
    },
    {
      "label": "Emit",
      "title": "Write repeated keys",
      "note": "Counts turn into ordered output values.",
      "activeLine": 8,
      "codeInsight": "Computes max from the current values before the algorithm decides the next move."
    },
    {
      "label": "Sorted",
      "title": "Return output",
      "note": "The rebuilt list is sorted by key.",
      "activeLine": 15,
      "codeInsight": "Returns result, the final value maintained by Counting Sort's code path."
    }
  ],
  "complexity": {
    "time": "O(n + k), where k is the key range.",
    "space": "O(k)."
  },
  "quiz": {
    "question": "Which state choice keeps Counting Sort correct?",
    "options": [
      {
        "key": "A",
        "text": "Track indices and working array and update it only through Counting Sort's transition.",
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
    "correctText": "Correct. Counting Sort stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Counting Sort needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "sorting",
  "algorithmSlug": "counting-sort",
  "runnerInput": [
    [
      4,
      1,
      3,
      2
    ]
  ],
  "animation": {
    "type": "bucket-flow",
    "title": "Counting Sort bucket movement",
    "ruleLabel": "Bucket rule",
    "rule": "Each value increments a count, and each count later emits ordered copies.",
    "values": [
      4,
      1,
      3,
      2
    ],
    "buckets": [
      {
        "label": "low range"
      },
      {
        "label": "middle range"
      },
      {
        "label": "high range"
      }
    ],
    "steps": [
      {
        "phase": "Range",
        "title": "Read key bounds",
        "note": "Counting needs a finite integer range.",
        "ruleLabel": "Counting Sort invariant",
        "rule": "Computes min from the current values before the algorithm decides the next move.",
        "activeValue": 4,
        "bucketIndex": 1,
        "bucketValues": [
          [],
          [
            4
          ],
          []
        ]
      },
      {
        "phase": "Counts",
        "title": "Increment frequency",
        "note": "Each input value updates one bucket.",
        "ruleLabel": "Counting Sort invariant",
        "rule": "Defines countingSort and names the input array; edits to those inputs change the visual state and output.",
        "activeValue": 1,
        "bucketIndex": 1,
        "bucketValues": [
          [],
          [
            4,
            1
          ],
          []
        ]
      },
      {
        "phase": "Emit",
        "title": "Write repeated keys",
        "note": "Counts turn into ordered output values.",
        "ruleLabel": "Counting Sort invariant",
        "rule": "Computes max from the current values before the algorithm decides the next move.",
        "activeValue": 3,
        "bucketIndex": 0,
        "bucketValues": [
          [
            3
          ],
          [
            4,
            1
          ],
          []
        ]
      },
      {
        "phase": "Sorted",
        "title": "Return output",
        "note": "The rebuilt list is sorted by key.",
        "ruleLabel": "Counting Sort invariant",
        "rule": "Returns result, the final value maintained by Counting Sort's code path.",
        "activeValue": 2,
        "bucketIndex": 2,
        "bucketValues": [
          [
            3
          ],
          [
            4,
            1
          ],
          [
            2
          ]
        ]
      }
    ]
  }
};
