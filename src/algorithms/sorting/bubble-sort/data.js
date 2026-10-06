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
  "meaning": "Sort an array by repeatedly swapping adjacent out-of-order values.",
  "problem": "Sort an array by repeatedly swapping adjacent out-of-order values.",
  "concept": "Bubble Sort pushes the largest unsorted value to the end of the unsorted range on every pass.",
  "logicSummary": "Scan adjacent pairs, swap when left is greater than right, then shrink the unsorted suffix boundary.",
  "transitionSummary": "Each adjacent comparison either swaps a local inversion or leaves the pair as-is; the pass ends with one more final value.",
  "codeInsight": "The swapped flag is an early-stop check: a full pass with no swaps proves the array is sorted.",
  "realLifeExample": "Use it for teaching adjacent swaps and inversion removal, not for large production sorting.",
  "whenToUse": "Use Bubble Sort only for small or educational cases where adjacent-swap behavior matters.",
  "memoryTrick": "Big values bubble right one pass at a time.",
  "visualizerCaption": "Explore Bubble Sort through a sample teaching model, then compare it with the runnable result.",
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
    "question": "Which explanation best describes Bubble Sort?",
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
        "text": "Sort an array by repeatedly swapping adjacent out-of-order values.",
        "correct": true
      }
    ],
    "correctText": "Correct. Sort an array by repeatedly swapping adjacent out-of-order values.",
    "incorrectText": "Try again. Sort an array by repeatedly swapping adjacent out-of-order values. Compare the small example in the lesson with your choice."
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
  },
  "learningGuide": {
    "mentalModel": "An array is a row of numbered slots. An index tells you where a value is; it is not the value itself.",
    "family": "Arrays and indexes",
    "example": "Compare 5 and 1: 5 > 1, so swap the adjacent pair. Bubble 5 right: 5 continues moving until it reaches the end of the pass. Lock final value: The last slot is sorted and excluded from the next pass. Stop early: A pass without swaps means every adjacent pair is ordered.",
    "sampleInput": [
      [
        5,
        1,
        4,
        2,
        8
      ]
    ],
    "sampleResult": [
      1,
      2,
      4,
      5,
      8
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
    "checkpoint": "Explain this in your own words: Sort an array by repeatedly swapping adjacent out-of-order values."
  },
  "relatedLinks": []
};
