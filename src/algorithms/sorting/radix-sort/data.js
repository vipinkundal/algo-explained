// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "radix-sort",
  "title": "Radix Sort",
  "category": "Sorting",
  "route": "/algorithms/sorting/radix-sort",
  "phase": 3,
  "priority": "medium",
  "visualizerType": "digit-buckets",
  "icon": "sort",
  "codePath": "./src/algorithms/sorting/radix-sort/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Sort non-negative integers digit by digit from least significant to most significant.",
  "problem": "Sort non-negative integers digit by digit from least significant to most significant.",
  "concept": "Radix Sort uses stable digit buckets so lower-place ordering is preserved while higher places are processed.",
  "logicSummary": "Find the max digit length, bucket values by the current place, flatten buckets, and move to the next place.",
  "transitionSummary": "For each digit place, every value enters bucket digit(value, place), then buckets are flattened from 0 to 9.",
  "codeInsight": "Stability is essential: flattening buckets in insertion order preserves previous digit work.",
  "realLifeExample": "Use it for fixed-width integer-like keys such as IDs when digits are bounded.",
  "whenToUse": "Use Radix Sort for non-negative integers with manageable digit length.",
  "memoryTrick": "Ones, tens, hundreds: stable buckets each round.",
  "visualizerCaption": "Explore Radix Sort through a sample teaching model, then compare it with the runnable result.",
  "logicSteps": [
    {
      "title": "Find largest value",
      "text": "The largest value tells how many digit passes are needed."
    },
    {
      "title": "Bucket by ones digit",
      "text": "Every value enters bucket 0 through 9."
    },
    {
      "title": "Preserve bucket order",
      "text": "Buckets flatten from 0 to 9 while preserving order inside each bucket."
    },
    {
      "title": "Repeat for tens",
      "text": "The same distribution runs for the next digit place."
    }
  ],
  "variables": [
    {
      "name": "place",
      "purpose": "Current digit place: 1, 10, 100, ..."
    },
    {
      "name": "buckets",
      "purpose": "Ten digit buckets for current place."
    },
    {
      "name": "max",
      "purpose": "Largest value, used to know when digits are finished."
    },
    {
      "name": "values",
      "purpose": "Current stable order after each digit pass."
    }
  ],
  "dryRun": [
    {
      "label": "max",
      "title": "Find largest value",
      "note": "The largest value tells how many digit passes are needed.",
      "activeLine": 3,
      "codeInsight": "The loop stops when max / place becomes 0."
    },
    {
      "label": "ones",
      "title": "Bucket by ones digit",
      "note": "Every value enters bucket 0 through 9.",
      "activeLine": 6,
      "codeInsight": "Digit extraction uses Math.floor(value / place) % 10."
    },
    {
      "label": "flatten",
      "title": "Preserve bucket order",
      "note": "Buckets flatten from 0 to 9 while preserving order inside each bucket.",
      "activeLine": 7,
      "codeInsight": "Stable flattening carries previous digit sorting forward."
    },
    {
      "label": "next place",
      "title": "Repeat for tens",
      "note": "The same distribution runs for the next digit place.",
      "activeLine": 4,
      "codeInsight": "place *= 10 moves to the next digit."
    }
  ],
  "complexity": {
    "time": "O(d(n + b)) for d digits and b = 10 buckets.",
    "space": "O(n + b)."
  },
  "quiz": {
    "question": "Which explanation best describes Radix Sort?",
    "options": [
      {
        "key": "A",
        "text": "Sort non-negative integers digit by digit from least significant to most significant.",
        "correct": true
      },
      {
        "key": "B",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "C",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      }
    ],
    "correctText": "Correct. Sort non-negative integers digit by digit from least significant to most significant.",
    "incorrectText": "Try again. Sort non-negative integers digit by digit from least significant to most significant. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "sorting",
  "algorithmSlug": "radix-sort",
  "runnerInput": [
    [
      170,
      45,
      75,
      90,
      802,
      24
    ]
  ],
  "animation": {
    "type": "array-flow",
    "static": true,
    "title": "Radix Sort trace",
    "ruleLabel": "Sorting invariant",
    "rule": "For each digit place, every value enters bucket digit(value, place), then buckets are flattened from 0 to 9.",
    "values": [
      170,
      45,
      75,
      90,
      802,
      24
    ],
    "steps": [
      {
        "phase": "place 1",
        "title": "Bucket ones digits",
        "note": "170 goes to bucket 0, 45 to bucket 5.",
        "ruleLabel": "Sorting invariant",
        "rule": "For each digit place, every value enters bucket digit(value, place), then buckets are flattened from 0 to 9.",
        "activeIndices": [
          0,
          1
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          5
        ],
        "primaryLabel": "place 1",
        "secondaryLabel": "For each digit place, every value enters bucket digit(value, place), then buckets are flattened from 0 to 9."
      },
      {
        "phase": "flatten",
        "title": "Ones pass order",
        "note": "Buckets flatten in digit order.",
        "ruleLabel": "Sorting invariant",
        "rule": "For each digit place, every value enters bucket digit(value, place), then buckets are flattened from 0 to 9.",
        "activeIndices": [
          0,
          3,
          5
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          5
        ],
        "primaryLabel": "flatten",
        "secondaryLabel": "For each digit place, every value enters bucket digit(value, place), then buckets are flattened from 0 to 9."
      },
      {
        "phase": "place 10",
        "title": "Bucket tens digits",
        "note": "Now tens digits decide order.",
        "ruleLabel": "Sorting invariant",
        "rule": "For each digit place, every value enters bucket digit(value, place), then buckets are flattened from 0 to 9.",
        "activeIndices": [
          2,
          4
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          5
        ],
        "primaryLabel": "place 10",
        "secondaryLabel": "For each digit place, every value enters bucket digit(value, place), then buckets are flattened from 0 to 9."
      },
      {
        "phase": "place 100",
        "title": "Final digit pass",
        "note": "Hundreds digit finishes the sorted order.",
        "ruleLabel": "Sorting invariant",
        "rule": "For each digit place, every value enters bucket digit(value, place), then buckets are flattened from 0 to 9.",
        "activeIndices": [
          0,
          4
        ],
        "sortedIndices": [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        "mutedIndices": [],
        "window": [
          0,
          5
        ],
        "primaryLabel": "place 100",
        "secondaryLabel": "For each digit place, every value enters bucket digit(value, place), then buckets are flattened from 0 to 9."
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "An array is a row of numbered slots. An index tells you where a value is; it is not the value itself.",
    "family": "Arrays and indexes",
    "example": "Find largest value: The largest value tells how many digit passes are needed. Bucket by ones digit: Every value enters bucket 0 through 9. Preserve bucket order: Buckets flatten from 0 to 9 while preserving order inside each bucket. Repeat for tens: The same distribution runs for the next digit place.",
    "sampleInput": [
      [
        170,
        45,
        75,
        90,
        802,
        24
      ]
    ],
    "sampleResult": [
      24,
      45,
      75,
      90,
      170,
      802
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
    "checkpoint": "Explain this in your own words: Sort non-negative integers digit by digit from least significant to most significant."
  },
  "relatedLinks": []
};
