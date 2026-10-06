// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "linear-search",
  "title": "Linear Search",
  "category": "Searching",
  "route": "/algorithms/searching/linear-search",
  "phase": 1,
  "priority": "high",
  "visualizerType": "array-scan",
  "icon": "search",
  "codePath": "./src/algorithms/searching/linear-search/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Find the first index whose value equals the target in an unsorted array.",
  "problem": "Find the first index whose value equals the target in an unsorted array.",
  "concept": "Linear Search checks each value from left to right because no ordering rule lets it skip positions.",
  "logicSummary": "Start at index 0, compare the current value with target, and advance one position after each miss.",
  "transitionSummary": "A failed comparison increments the index; a match returns immediately.",
  "codeInsight": "The loop is intentionally simple: every earlier value has been proven not equal before the index moves right.",
  "realLifeExample": "Use it for small or unsorted lists such as scanning recent actions, names, or command history.",
  "whenToUse": "Use Linear Search when the data is unsorted or sorting would cost more than one scan.",
  "memoryTrick": "Linear search asks one item at a time: are you the target?",
  "visualizerCaption": "Explore Linear Search through a sample teaching model, then compare it with the runnable result.",
  "logicSteps": [
    {
      "title": "Compare 4",
      "text": "4 is not the target 9, so the scan moves right."
    },
    {
      "title": "Compare 2",
      "text": "2 is also a miss."
    },
    {
      "title": "Compare 9",
      "text": "9 matches the target, so return index 2."
    },
    {
      "title": "Return result",
      "text": "No later positions are inspected after the first match."
    }
  ],
  "variables": [
    {
      "name": "array, target",
      "purpose": "Input values and the value to find."
    },
    {
      "name": "index",
      "purpose": "Current position being compared."
    },
    {
      "name": "answer",
      "purpose": "First matching index, or -1 if no value matches."
    },
    {
      "name": "index < array.length",
      "purpose": "The scan continues while unchecked items remain."
    }
  ],
  "dryRun": [
    {
      "label": "Index 0",
      "title": "Compare 4",
      "note": "4 is not the target 9, so the scan moves right.",
      "activeLine": 3,
      "codeInsight": "The for-loop owns the scan position."
    },
    {
      "label": "Index 1",
      "title": "Compare 2",
      "note": "2 is also a miss.",
      "activeLine": 4,
      "codeInsight": "Only equality can stop the loop early."
    },
    {
      "label": "Index 2",
      "title": "Compare 9",
      "note": "9 matches the target, so return index 2.",
      "activeLine": 4,
      "codeInsight": "The first match returns immediately."
    },
    {
      "label": "Done",
      "title": "Return result",
      "note": "No later positions are inspected after the first match.",
      "activeLine": 4,
      "codeInsight": "The answer is the first matching index."
    }
  ],
  "complexity": {
    "time": "O(n).",
    "space": "O(1)."
  },
  "quiz": {
    "question": "Which explanation best describes Linear Search?",
    "options": [
      {
        "key": "A",
        "text": "Find the first index whose value equals the target in an unsorted array.",
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
    "correctText": "Correct. Find the first index whose value equals the target in an unsorted array.",
    "incorrectText": "Try again. Find the first index whose value equals the target in an unsorted array. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "searching",
  "algorithmSlug": "linear-search",
  "runnerInput": [
    [
      4,
      2,
      9,
      7,
      9
    ],
    9
  ],
  "relatedLinks": [
    {
      "id": "ds-array-adt-linear-search",
      "title": "Linear Search in Array ADT",
      "label": "C/C++ array source"
    },
    {
      "id": "ds-array-adt-linear-search-transposition",
      "title": "Linear Search in Array ADT with Transposition",
      "label": "C/C++ array source"
    }
  ],
  "animation": {
    "type": "array-flow",
    "static": true,
    "title": "Linear Search trace",
    "ruleLabel": "Search invariant",
    "rule": "A failed comparison increments the index; a match returns immediately.",
    "values": [
      4,
      2,
      9,
      7,
      9
    ],
    "steps": [
      {
        "phase": "index = 0",
        "title": "Check 4",
        "note": "4 != 9.",
        "ruleLabel": "Search invariant",
        "rule": "A failed comparison increments the index; a match returns immediately.",
        "activeIndices": [
          0
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          4
        ],
        "primaryLabel": "index = 0",
        "secondaryLabel": "A failed comparison increments the index; a match returns immediately."
      },
      {
        "phase": "index = 1",
        "title": "Check 2",
        "note": "2 != 9.",
        "ruleLabel": "Search invariant",
        "rule": "A failed comparison increments the index; a match returns immediately.",
        "activeIndices": [
          1
        ],
        "sortedIndices": [],
        "mutedIndices": [
          0
        ],
        "window": [
          0,
          4
        ],
        "primaryLabel": "index = 1",
        "secondaryLabel": "A failed comparison increments the index; a match returns immediately."
      },
      {
        "phase": "index = 2",
        "title": "Found 9",
        "note": "Return the first matching index.",
        "ruleLabel": "Search invariant",
        "rule": "A failed comparison increments the index; a match returns immediately.",
        "activeIndices": [
          2
        ],
        "sortedIndices": [
          2
        ],
        "mutedIndices": [
          0,
          1
        ],
        "window": [
          0,
          4
        ],
        "primaryLabel": "index = 2",
        "secondaryLabel": "A failed comparison increments the index; a match returns immediately."
      },
      {
        "phase": "return 2",
        "title": "Stop at first match",
        "note": "Later values do not affect first occurrence.",
        "ruleLabel": "Search invariant",
        "rule": "A failed comparison increments the index; a match returns immediately.",
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
          4
        ],
        "window": [
          2,
          2
        ],
        "primaryLabel": "return 2",
        "secondaryLabel": "A failed comparison increments the index; a match returns immediately."
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "An array is a row of numbered slots. An index tells you where a value is; it is not the value itself.",
    "family": "Arrays and indexes",
    "example": "Compare 4: 4 is not the target 9, so the scan moves right. Compare 2: 2 is also a miss. Compare 9: 9 matches the target, so return index 2. Return result: No later positions are inspected after the first match.",
    "sampleInput": [
      [
        4,
        2,
        9,
        7,
        9
      ],
      9
    ],
    "sampleResult": 2,
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
    "checkpoint": "Explain this in your own words: Find the first index whose value equals the target in an unsorted array."
  }
};
