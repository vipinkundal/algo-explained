// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "upper-bound",
  "title": "Upper Bound",
  "category": "Searching",
  "route": "/algorithms/searching/upper-bound",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "array-boundaries",
  "icon": "search",
  "codePath": "./src/algorithms/searching/upper-bound/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Find the first sorted position whose value is strictly greater than target.",
  "problem": "Find the first sorted position whose value is strictly greater than target.",
  "concept": "Upper Bound discards every value less than or equal to target, including duplicates equal to target.",
  "logicSummary": "Search [low, high), move past mid when array[mid] <= target, and keep mid only when it is greater.",
  "transitionSummary": "array[mid] <= target moves low to mid + 1; otherwise high becomes mid.",
  "codeInsight": "The comparison is <=, which is why upper bound returns the slot after the final duplicate.",
  "realLifeExample": "Use it to count equal values: upperBound(x) - lowerBound(x).",
  "whenToUse": "Use Upper Bound when you need the first value after all target-equal values.",
  "memoryTrick": "Upper bound skips equals.",
  "visualizerCaption": "Explore Upper Bound through a sample teaching model, then compare it with the runnable result.",
  "logicSteps": [
    {
      "title": "Open half range",
      "text": "Search for the first value greater than 5."
    },
    {
      "title": "Value 5 is skipped",
      "text": "5 <= target, so move low to 4."
    },
    {
      "title": "Value 12 is greater",
      "text": "Keep index 5 by setting high to 5."
    },
    {
      "title": "First greater index",
      "text": "Index 4 holds 9, the first value greater than 5."
    }
  ],
  "variables": [
    {
      "name": "array, target",
      "purpose": "Sorted values and boundary target."
    },
    {
      "name": "low, high",
      "purpose": "Half-open candidate range [low, high)."
    },
    {
      "name": "mid",
      "purpose": "Index being tested for first greater value."
    },
    {
      "name": "low < high",
      "purpose": "Stop when one boundary remains."
    }
  ],
  "dryRun": [
    {
      "label": "[0, 6)",
      "title": "Open half range",
      "note": "Search for the first value greater than 5.",
      "activeLine": 2,
      "codeInsight": "high allows insertion after the last element."
    },
    {
      "label": "mid = 3",
      "title": "Value 5 is skipped",
      "note": "5 <= target, so move low to 4.",
      "activeLine": 6,
      "codeInsight": "Equals are not valid upper-bound answers."
    },
    {
      "label": "mid = 5",
      "title": "Value 12 is greater",
      "note": "Keep index 5 by setting high to 5.",
      "activeLine": 7,
      "codeInsight": "A greater value may be the first greater value."
    },
    {
      "label": "return 4",
      "title": "First greater index",
      "note": "Index 4 holds 9, the first value greater than 5.",
      "activeLine": 9,
      "codeInsight": "low is the upper-bound insertion point."
    }
  ],
  "complexity": {
    "time": "O(log n).",
    "space": "O(1)."
  },
  "quiz": {
    "question": "Which explanation best describes Upper Bound?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "Find the first sorted position whose value is strictly greater than target.",
        "correct": true
      },
      {
        "key": "C",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      }
    ],
    "correctText": "Correct. Find the first sorted position whose value is strictly greater than target.",
    "incorrectText": "Try again. Find the first sorted position whose value is strictly greater than target. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "searching",
  "algorithmSlug": "upper-bound",
  "runnerInput": [
    [
      1,
      2,
      5,
      5,
      9,
      12
    ],
    5
  ],
  "animation": {
    "type": "array-flow",
    "static": true,
    "title": "Upper Bound trace",
    "ruleLabel": "Search invariant",
    "rule": "array[mid] <= target moves low to mid + 1; otherwise high becomes mid.",
    "values": [
      1,
      2,
      5,
      5,
      9,
      12
    ],
    "steps": [
      {
        "phase": "[0, 6)",
        "title": "Start full insertion range",
        "note": "The answer is after the target duplicates.",
        "ruleLabel": "Search invariant",
        "rule": "array[mid] <= target moves low to mid + 1; otherwise high becomes mid.",
        "activeIndices": [
          3
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          5
        ],
        "primaryLabel": "[0, 6)",
        "secondaryLabel": "array[mid] <= target moves low to mid + 1; otherwise high becomes mid."
      },
      {
        "phase": "low = 4",
        "title": "Skip equal 5",
        "note": "Index 3 cannot be the first greater value.",
        "ruleLabel": "Search invariant",
        "rule": "array[mid] <= target moves low to mid + 1; otherwise high becomes mid.",
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
          4,
          5
        ],
        "primaryLabel": "low = 4",
        "secondaryLabel": "array[mid] <= target moves low to mid + 1; otherwise high becomes mid."
      },
      {
        "phase": "high = 5",
        "title": "12 is greater",
        "note": "Keep index 5 as a candidate.",
        "ruleLabel": "Search invariant",
        "rule": "array[mid] <= target moves low to mid + 1; otherwise high becomes mid.",
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
          5
        ],
        "primaryLabel": "high = 5",
        "secondaryLabel": "array[mid] <= target moves low to mid + 1; otherwise high becomes mid."
      },
      {
        "phase": "return 4",
        "title": "9 is first greater",
        "note": "Index 4 is the upper bound.",
        "ruleLabel": "Search invariant",
        "rule": "array[mid] <= target moves low to mid + 1; otherwise high becomes mid.",
        "activeIndices": [
          4
        ],
        "sortedIndices": [
          4
        ],
        "mutedIndices": [
          0,
          1,
          2,
          3,
          5
        ],
        "window": [
          4,
          4
        ],
        "primaryLabel": "return 4",
        "secondaryLabel": "array[mid] <= target moves low to mid + 1; otherwise high becomes mid."
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "An array is a row of numbered slots. An index tells you where a value is; it is not the value itself.",
    "family": "Arrays and indexes",
    "example": "Open half range: Search for the first value greater than 5. Value 5 is skipped: 5 <= target, so move low to 4. Value 12 is greater: Keep index 5 by setting high to 5. First greater index: Index 4 holds 9, the first value greater than 5.",
    "sampleInput": [
      [
        1,
        2,
        5,
        5,
        9,
        12
      ],
      5
    ],
    "sampleResult": 4,
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
    "checkpoint": "Explain this in your own words: Find the first sorted position whose value is strictly greater than target."
  },
  "relatedLinks": []
};
