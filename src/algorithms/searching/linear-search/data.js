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
  "meaning": "Linear Search is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Linear Search scans items one by one and stops as soon as the target is found.",
  "concept": "Linear Search is useful when every item may matter and the input has no stronger ordering to exploit. Use this when a simple pass is clearer or cheaper than preprocessing.",
  "logicSummary": "Move one index through the array, update the running state, and stop when the required condition is met.",
  "transitionSummary": "Each loop consumes the current item exactly once and advances the index.",
  "codeInsight": "The loop has no hidden structure: correctness comes from checking every earlier item before moving forward.",
  "realLifeExample": "Use it for unsorted lists, small inputs, or cases where sorting first would cost more than scanning.",
  "whenToUse": "Use Linear Search when the data is unsorted or a single sequential pass is acceptable.",
  "memoryTrick": "Linear Search: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Linear Search is shown as a left-to-right scan. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Start scan",
      "text": "Set the first index and initial result."
    },
    {
      "title": "Read value",
      "text": "Inspect the current array item."
    },
    {
      "title": "Update state",
      "text": "Change the answer, counter, or candidate."
    },
    {
      "title": "Finish pass",
      "text": "Return the maintained result after the scan."
    }
  ],
  "variables": [
    {
      "name": "array, target",
      "purpose": "The list to scan and the value to find."
    },
    {
      "name": "index",
      "purpose": "The current position being compared."
    },
    {
      "name": "matching index",
      "purpose": "The first index whose value equals the target, or -1."
    },
    {
      "name": "index < array.length",
      "purpose": "The loop continues while unchecked items remain."
    }
  ],
  "dryRun": [
    {
      "label": "Input array",
      "title": "Read values",
      "note": "The code receives the list and any target condition.",
      "activeLine": 6,
      "codeInsight": "Scans the input from left to right so each value gets one chance to resolve earlier pending values."
    },
    {
      "label": "Index",
      "title": "Select current item",
      "note": "The loop focuses on one position at a time.",
      "activeLine": 3,
      "codeInsight": "Executes this Linear Search line as part of the highlighted code path, linking the visual step to the implementation."
    },
    {
      "label": "Update",
      "title": "Apply comparison or count",
      "note": "The current value changes the running state only if the rule says so.",
      "activeLine": 6,
      "codeInsight": "Scans the input from left to right so each value gets one chance to resolve earlier pending values."
    },
    {
      "label": "Result",
      "title": "Return scan output",
      "note": "When the scan ends, the tracked result is returned.",
      "activeLine": 9,
      "codeInsight": "Returns -1, the value produced after Linear Search's state changes are complete."
    }
  ],
  "complexity": {
    "time": "O(n) worst case.",
    "space": "O(1)."
  },
  "quiz": {
    "question": "Which state choice keeps Linear Search correct?",
    "options": [
      {
        "key": "A",
        "text": "Track search window and update it only through Linear Search's transition.",
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
    "correctText": "Correct. Linear Search stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Linear Search needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "searching",
  "algorithmSlug": "linear-search",
  "runnerInput": [
    [
      4,
      2,
      7
    ],
    7
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
    "title": "Linear Search array state",
    "ruleLabel": "Array invariant",
    "rule": "Each loop consumes the current item exactly once and advances the index.",
    "values": [
      4,
      2,
      7
    ],
    "steps": [
      {
        "phase": "Input array",
        "title": "Read values",
        "note": "The code receives the list and any target condition.",
        "ruleLabel": "Linear Search invariant",
        "rule": "Scans the input from left to right so each value gets one chance to resolve earlier pending values.",
        "activeIndices": [
          0
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          1
        ],
        "primaryLabel": "Input array",
        "secondaryLabel": "Each loop consumes the current item exactly once and advances the index."
      },
      {
        "phase": "Index",
        "title": "Select current item",
        "note": "The loop focuses on one position at a time.",
        "ruleLabel": "Linear Search invariant",
        "rule": "Executes this Linear Search line as part of the highlighted code path, linking the visual step to the implementation.",
        "activeIndices": [
          1,
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          2
        ],
        "primaryLabel": "Index",
        "secondaryLabel": "Each loop consumes the current item exactly once and advances the index."
      },
      {
        "phase": "Update",
        "title": "Apply comparison or count",
        "note": "The current value changes the running state only if the rule says so.",
        "ruleLabel": "Linear Search invariant",
        "rule": "Scans the input from left to right so each value gets one chance to resolve earlier pending values.",
        "activeIndices": [
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          1,
          2
        ],
        "primaryLabel": "Update",
        "secondaryLabel": "Each loop consumes the current item exactly once and advances the index."
      },
      {
        "phase": "Result",
        "title": "Return scan output",
        "note": "When the scan ends, the tracked result is returned.",
        "ruleLabel": "Linear Search invariant",
        "rule": "Returns -1, the value produced after Linear Search's state changes are complete.",
        "activeIndices": [
          2,
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          1,
          2
        ],
        "primaryLabel": "Result",
        "secondaryLabel": "Each loop consumes the current item exactly once and advances the index."
      }
    ]
  }
};
