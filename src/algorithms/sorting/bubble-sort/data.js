// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "bubble-sort",
  "title": "Bubble Sort",
  "category": "Sorting",
  "route": "/algorithms/sorting/bubble-sort",
  "phase": 1,
  "priority": "high",
  "visualizerType": "bar-swap",
  "icon": "sort",
  "codePath": "./src/algorithms/sorting/bubble-sort/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Bubble Sort is taught here with its own input shape, state, transition, code trace, and stop condition.",
  "problem": "Sort an array by repeatedly swapping adjacent out-of-order values.",
  "concept": "Bubble Sort pushes the largest unsorted value to the end of the unsorted range on every pass.",
  "logicSummary": "Scan adjacent pairs, swap when left is greater than right, then shrink the unsorted suffix boundary.",
  "transitionSummary": "Each adjacent comparison either swaps a local inversion or leaves the pair as-is; the pass ends with one more final value.",
  "codeInsight": "The swapped flag is an early-stop check: a full pass with no swaps proves the array is sorted.",
  "realLifeExample": "Use it for teaching adjacent swaps and inversion removal, not for large production sorting.",
  "whenToUse": "Use Bubble Sort only for small or educational cases where adjacent-swap behavior matters.",
  "memoryTrick": "Big values bubble right one pass at a time.",
  "visualizerCaption": "Bubble Sort is shown with the actual sorted/unsorted state that its code maintains.",
  "logicSteps": [
    {
      "title": "Compare 5 and 1",
      "text": "5 > 1, so swap the adjacent pair."
    },
    {
      "title": "Bubble 5 right",
      "text": "5 continues moving until it reaches the end of the pass."
    },
    {
      "title": "Lock final value",
      "text": "The last slot is sorted and excluded from the next pass."
    },
    {
      "title": "Stop early",
      "text": "A pass without swaps means every adjacent pair is ordered."
    }
  ],
  "variables": [
    {
      "name": "values",
      "purpose": "Working copy being sorted."
    },
    {
      "name": "end",
      "purpose": "Last unsorted index in the current pass."
    },
    {
      "name": "index",
      "purpose": "Left index of the adjacent pair."
    },
    {
      "name": "swapped",
      "purpose": "Whether the current pass changed the array."
    }
  ],
  "dryRun": [
    {
      "label": "Pass 1",
      "title": "Compare 5 and 1",
      "note": "5 > 1, so swap the adjacent pair.",
      "activeLine": 6,
      "codeInsight": "Only adjacent inversions are swapped."
    },
    {
      "label": "Pass 1",
      "title": "Bubble 5 right",
      "note": "5 continues moving until it reaches the end of the pass.",
      "activeLine": 7,
      "codeInsight": "The largest remaining value lands at index end."
    },
    {
      "label": "Shrink end",
      "title": "Lock final value",
      "note": "The last slot is sorted and excluded from the next pass.",
      "activeLine": 3,
      "codeInsight": "end moves left after each outer pass."
    },
    {
      "label": "No swaps",
      "title": "Stop early",
      "note": "A pass without swaps means every adjacent pair is ordered.",
      "activeLine": 10,
      "codeInsight": "swapped prevents unnecessary extra passes."
    }
  ],
  "complexity": {
    "time": "O(n^2) worst case, O(n) if already sorted.",
    "space": "O(1)."
  },
  "quiz": {
    "question": "Which state keeps Bubble Sort correct?",
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
    "correctText": "Correct. Bubble Sort works because that state and transition match the algorithm.",
    "incorrectText": "Not quite. Bubble Sort needs its own state and stop condition instead of borrowed page logic."
  },
  "categorySlug": "sorting",
  "algorithmSlug": "bubble-sort",
  "runnerInput": [
    [
      5,
      1,
      4,
      2,
      8
    ]
  ],
  "animation": {
    "type": "array-flow",
    "static": true,
    "title": "Bubble Sort trace",
    "ruleLabel": "Sorting invariant",
    "rule": "Each adjacent comparison either swaps a local inversion or leaves the pair as-is; the pass ends with one more final value.",
    "values": [
      5,
      1,
      4,
      2,
      8
    ],
    "steps": [
      {
        "phase": "compare",
        "title": "5 and 1 are inverted",
        "note": "Swap the adjacent pair.",
        "ruleLabel": "Sorting invariant",
        "rule": "Each adjacent comparison either swaps a local inversion or leaves the pair as-is; the pass ends with one more final value.",
        "activeIndices": [
          0,
          1
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          4
        ],
        "primaryLabel": "compare",
        "secondaryLabel": "Each adjacent comparison either swaps a local inversion or leaves the pair as-is; the pass ends with one more final value."
      },
      {
        "phase": "bubble",
        "title": "5 moves right",
        "note": "Continue adjacent comparisons.",
        "ruleLabel": "Sorting invariant",
        "rule": "Each adjacent comparison either swaps a local inversion or leaves the pair as-is; the pass ends with one more final value.",
        "activeIndices": [
          1,
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          4
        ],
        "primaryLabel": "bubble",
        "secondaryLabel": "Each adjacent comparison either swaps a local inversion or leaves the pair as-is; the pass ends with one more final value."
      },
      {
        "phase": "lock end",
        "title": "8 is final",
        "note": "The largest value in the pass is fixed.",
        "ruleLabel": "Sorting invariant",
        "rule": "Each adjacent comparison either swaps a local inversion or leaves the pair as-is; the pass ends with one more final value.",
        "activeIndices": [
          4
        ],
        "sortedIndices": [
          4
        ],
        "mutedIndices": [],
        "window": [
          0,
          3
        ],
        "primaryLabel": "lock end",
        "secondaryLabel": "Each adjacent comparison either swaps a local inversion or leaves the pair as-is; the pass ends with one more final value."
      },
      {
        "phase": "finish",
        "title": "No inversions remain",
        "note": "The sorted suffix grows until all values are ordered.",
        "ruleLabel": "Sorting invariant",
        "rule": "Each adjacent comparison either swaps a local inversion or leaves the pair as-is; the pass ends with one more final value.",
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
          3,
          4
        ],
        "mutedIndices": [],
        "window": [
          0,
          4
        ],
        "primaryLabel": "finish",
        "secondaryLabel": "Each adjacent comparison either swaps a local inversion or leaves the pair as-is; the pass ends with one more final value."
      }
    ]
  }
};
