// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "lower-bound",
  "title": "Lower Bound",
  "category": "Searching",
  "route": "/algorithms/searching/lower-bound",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "array-boundaries",
  "icon": "search",
  "codePath": "./src/algorithms/searching/lower-bound/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Lower Bound is taught here with its own input shape, state, transition, code trace, and stop condition.",
  "problem": "Find the first sorted position whose value is greater than or equal to target.",
  "concept": "Lower Bound keeps the first possible answer inside a half-open range until low and high meet.",
  "logicSummary": "Search [low, high), discard values strictly less than target, and keep mid when it may be the answer.",
  "transitionSummary": "array[mid] < target moves low to mid + 1; otherwise high becomes mid to preserve that candidate.",
  "codeInsight": "The key detail is high = mid, not mid - 1, because mid may already be the first valid index.",
  "realLifeExample": "Use it for insertion points, first true predicates, and counting duplicates with upper bound.",
  "whenToUse": "Use Lower Bound when you need the first value not less than target.",
  "memoryTrick": "Lower bound keeps equals; it only throws away values that are too small.",
  "visualizerCaption": "Lower Bound is shown with the exact boundary, probe, or scan state used by the code.",
  "logicSteps": [
    {
      "title": "Open half range",
      "text": "The answer is somewhere before high."
    },
    {
      "title": "Value 5 is not less than 5",
      "text": "Keep mid by moving high to 3."
    },
    {
      "title": "Value 2 is too small",
      "text": "Move low to 2."
    },
    {
      "title": "First 5",
      "text": "low and high meet at the first valid index."
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
      "purpose": "Candidate tested during each loop."
    },
    {
      "name": "low < high",
      "purpose": "Stop when one insertion point remains."
    }
  ],
  "dryRun": [
    {
      "label": "[0, 6)",
      "title": "Open half range",
      "note": "The answer is somewhere before high.",
      "activeLine": 2,
      "codeInsight": "high starts at array.length because insertion can be after the last value."
    },
    {
      "label": "mid = 3",
      "title": "Value 5 is not less than 5",
      "note": "Keep mid by moving high to 3.",
      "activeLine": 7,
      "codeInsight": "The candidate remains in the range."
    },
    {
      "label": "mid = 1",
      "title": "Value 2 is too small",
      "note": "Move low to 2.",
      "activeLine": 6,
      "codeInsight": "Everything at or before mid is too small."
    },
    {
      "label": "return 2",
      "title": "First 5",
      "note": "low and high meet at the first valid index.",
      "activeLine": 9,
      "codeInsight": "low is the lower-bound insertion point."
    }
  ],
  "complexity": {
    "time": "O(log n).",
    "space": "O(1)."
  },
  "quiz": {
    "question": "Which state keeps Lower Bound correct?",
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
    "correctText": "Correct. Lower Bound works because that state and transition match the algorithm.",
    "incorrectText": "Not quite. Lower Bound needs its own state and stop condition instead of borrowed page logic."
  },
  "categorySlug": "searching",
  "algorithmSlug": "lower-bound",
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
    "title": "Lower Bound trace",
    "ruleLabel": "Search invariant",
    "rule": "array[mid] < target moves low to mid + 1; otherwise high becomes mid to preserve that candidate.",
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
        "note": "Any position from 0 to 6 can be the boundary.",
        "ruleLabel": "Search invariant",
        "rule": "array[mid] < target moves low to mid + 1; otherwise high becomes mid to preserve that candidate.",
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
        "secondaryLabel": "array[mid] < target moves low to mid + 1; otherwise high becomes mid to preserve that candidate."
      },
      {
        "phase": "high = 3",
        "title": "5 can be the answer",
        "note": "Keep index 3 and all earlier possible answers.",
        "ruleLabel": "Search invariant",
        "rule": "array[mid] < target moves low to mid + 1; otherwise high becomes mid to preserve that candidate.",
        "activeIndices": [
          3
        ],
        "sortedIndices": [],
        "mutedIndices": [
          4,
          5
        ],
        "window": [
          0,
          3
        ],
        "primaryLabel": "high = 3",
        "secondaryLabel": "array[mid] < target moves low to mid + 1; otherwise high becomes mid to preserve that candidate."
      },
      {
        "phase": "low = 2",
        "title": "2 is too small",
        "note": "Discard indices 0 and 1.",
        "ruleLabel": "Search invariant",
        "rule": "array[mid] < target moves low to mid + 1; otherwise high becomes mid to preserve that candidate.",
        "activeIndices": [
          1
        ],
        "sortedIndices": [],
        "mutedIndices": [
          0,
          1,
          4,
          5
        ],
        "window": [
          2,
          3
        ],
        "primaryLabel": "low = 2",
        "secondaryLabel": "array[mid] < target moves low to mid + 1; otherwise high becomes mid to preserve that candidate."
      },
      {
        "phase": "return 2",
        "title": "First valid index",
        "note": "Index 2 is the first value >= 5.",
        "ruleLabel": "Search invariant",
        "rule": "array[mid] < target moves low to mid + 1; otherwise high becomes mid to preserve that candidate.",
        "activeIndices": [
          2
        ],
        "sortedIndices": [
          2
        ],
        "mutedIndices": [
          0,
          1,
          3,
          4,
          5
        ],
        "window": [
          2,
          2
        ],
        "primaryLabel": "return 2",
        "secondaryLabel": "array[mid] < target moves low to mid + 1; otherwise high becomes mid to preserve that candidate."
      }
    ]
  }
};
