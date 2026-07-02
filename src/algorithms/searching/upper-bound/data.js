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
  "meaning": "Upper Bound is taught here with its own input shape, state, transition, code trace, and stop condition.",
  "problem": "Find the first sorted position whose value is strictly greater than target.",
  "concept": "Upper Bound discards every value less than or equal to target, including duplicates equal to target.",
  "logicSummary": "Search [low, high), move past mid when array[mid] <= target, and keep mid only when it is greater.",
  "transitionSummary": "array[mid] <= target moves low to mid + 1; otherwise high becomes mid.",
  "codeInsight": "The comparison is <=, which is why upper bound returns the slot after the final duplicate.",
  "realLifeExample": "Use it to count equal values: upperBound(x) - lowerBound(x).",
  "whenToUse": "Use Upper Bound when you need the first value after all target-equal values.",
  "memoryTrick": "Upper bound skips equals.",
  "visualizerCaption": "Upper Bound is shown with the exact boundary, probe, or scan state used by the code.",
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
    "question": "Which state keeps Upper Bound correct?",
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
    "correctText": "Correct. Upper Bound works because that state and transition match the algorithm.",
    "incorrectText": "Not quite. Upper Bound needs its own state and stop condition instead of borrowed page logic."
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
  }
};
