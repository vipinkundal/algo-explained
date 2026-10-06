// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "binary-search",
  "title": "Binary Search",
  "category": "Searching",
  "route": "/algorithms/searching/binary-search",
  "phase": 1,
  "priority": "high",
  "visualizerType": "array-boundaries",
  "icon": "search",
  "codePath": "./src/algorithms/searching/binary-search/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Find a target inside a sorted array by repeatedly halving the candidate range.",
  "problem": "Find a target inside a sorted array by repeatedly halving the candidate range.",
  "concept": "Binary Search relies on sorted order: one midpoint comparison proves an entire half impossible.",
  "logicSummary": "Keep low and high around the remaining range, test mid, and discard the half that cannot contain target.",
  "transitionSummary": "If array[mid] is too small move low to mid + 1; if too large move high to mid - 1; equality returns mid.",
  "codeInsight": "Every branch shrinks the window, so the loop cannot repeat the same mid forever.",
  "realLifeExample": "Use it for sorted lookup tables, dictionary pages, IDs, timestamps, and monotonic predicates.",
  "whenToUse": "Use Binary Search only when the array is sorted or the predicate changes direction once.",
  "memoryTrick": "Middle decides which half survives.",
  "visualizerCaption": "Explore Binary Search through a sample teaching model, then compare it with the runnable result.",
  "logicSteps": [
    {
      "title": "low = 0, high = 6",
      "text": "The target 13 can be anywhere in the sorted range."
    },
    {
      "title": "Compare 7",
      "text": "7 is smaller than 13, so the left half cannot contain 13."
    },
    {
      "title": "Move low to 4",
      "text": "Only indices 4 through 6 remain."
    },
    {
      "title": "Compare 13",
      "text": "The new midpoint equals target, so return its index."
    }
  ],
  "variables": [
    {
      "name": "array, target",
      "purpose": "Sorted values and the value to locate."
    },
    {
      "name": "low, high",
      "purpose": "Inclusive candidate range."
    },
    {
      "name": "mid",
      "purpose": "Probe index in the current range."
    },
    {
      "name": "low <= high",
      "purpose": "The loop runs while candidates remain."
    }
  ],
  "dryRun": [
    {
      "label": "Full range",
      "title": "low = 0, high = 6",
      "note": "The target 13 can be anywhere in the sorted range.",
      "activeLine": 2,
      "codeInsight": "low and high define the inclusive search window."
    },
    {
      "label": "mid = 3",
      "title": "Compare 7",
      "note": "7 is smaller than 13, so the left half cannot contain 13.",
      "activeLine": 5,
      "codeInsight": "mid is computed from the current window."
    },
    {
      "label": "Right half",
      "title": "Move low to 4",
      "note": "Only indices 4 through 6 remain.",
      "activeLine": 7,
      "codeInsight": "low = mid + 1 discards mid and everything left of it."
    },
    {
      "label": "Found",
      "title": "Compare 13",
      "note": "The new midpoint equals target, so return its index.",
      "activeLine": 6,
      "codeInsight": "Equality is the only successful stop condition."
    }
  ],
  "complexity": {
    "time": "O(log n).",
    "space": "O(1)."
  },
  "quiz": {
    "question": "Which explanation best describes Binary Search?",
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
        "text": "Find a target inside a sorted array by repeatedly halving the candidate range.",
        "correct": true
      }
    ],
    "correctText": "Correct. Find a target inside a sorted array by repeatedly halving the candidate range.",
    "incorrectText": "Try again. Find a target inside a sorted array by repeatedly halving the candidate range. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "searching",
  "algorithmSlug": "binary-search",
  "runnerInput": [
    [
      1,
      3,
      5,
      7,
      9,
      13,
      15
    ],
    13
  ],
  "relatedLinks": [
    {
      "id": "ds-array-adt-binary-search",
      "title": "Binary Search in Array ADT",
      "label": "C/C++ array source"
    }
  ],
  "animation": {
    "type": "array-flow",
    "static": true,
    "title": "Binary Search trace",
    "ruleLabel": "Search invariant",
    "rule": "If array[mid] is too small move low to mid + 1; if too large move high to mid - 1; equality returns mid.",
    "values": [
      1,
      3,
      5,
      7,
      9,
      13,
      15
    ],
    "steps": [
      {
        "phase": "[0, 6]",
        "title": "Start full range",
        "note": "Every index is a candidate.",
        "ruleLabel": "Search invariant",
        "rule": "If array[mid] is too small move low to mid + 1; if too large move high to mid - 1; equality returns mid.",
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
        "secondaryLabel": "If array[mid] is too small move low to mid + 1; if too large move high to mid - 1; equality returns mid."
      },
      {
        "phase": "mid = 3",
        "title": "7 is too small",
        "note": "Discard indices 0 through 3.",
        "ruleLabel": "Search invariant",
        "rule": "If array[mid] is too small move low to mid + 1; if too large move high to mid - 1; equality returns mid.",
        "activeIndices": [
          3
        ],
        "sortedIndices": [],
        "mutedIndices": [
          0,
          1,
          2,
          3
        ],
        "window": [
          0,
          6
        ],
        "primaryLabel": "mid = 3",
        "secondaryLabel": "If array[mid] is too small move low to mid + 1; if too large move high to mid - 1; equality returns mid."
      },
      {
        "phase": "[4, 6]",
        "title": "Search right half",
        "note": "The next midpoint is index 5.",
        "ruleLabel": "Search invariant",
        "rule": "If array[mid] is too small move low to mid + 1; if too large move high to mid - 1; equality returns mid.",
        "activeIndices": [
          5
        ],
        "sortedIndices": [],
        "mutedIndices": [
          0,
          1,
          2,
          3
        ],
        "window": [
          4,
          6
        ],
        "primaryLabel": "[4, 6]",
        "secondaryLabel": "If array[mid] is too small move low to mid + 1; if too large move high to mid - 1; equality returns mid."
      },
      {
        "phase": "return 5",
        "title": "13 found",
        "note": "array[5] equals the target.",
        "ruleLabel": "Search invariant",
        "rule": "If array[mid] is too small move low to mid + 1; if too large move high to mid - 1; equality returns mid.",
        "activeIndices": [
          5
        ],
        "sortedIndices": [
          5
        ],
        "mutedIndices": [
          0,
          1,
          2,
          3,
          4,
          6
        ],
        "window": [
          5,
          5
        ],
        "primaryLabel": "return 5",
        "secondaryLabel": "If array[mid] is too small move low to mid + 1; if too large move high to mid - 1; equality returns mid."
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "An array is a row of numbered slots. An index tells you where a value is; it is not the value itself.",
    "family": "Arrays and indexes",
    "example": "low = 0, high = 6: The target 13 can be anywhere in the sorted range. Compare 7: 7 is smaller than 13, so the left half cannot contain 13. Move low to 4: Only indices 4 through 6 remain. Compare 13: The new midpoint equals target, so return its index.",
    "sampleInput": [
      [
        1,
        3,
        5,
        7,
        9,
        13,
        15
      ],
      13
    ],
    "sampleResult": 5,
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
    "checkpoint": "Explain this in your own words: Find a target inside a sorted array by repeatedly halving the candidate range."
  }
};
