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
  "meaning": "Lower Bound is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Lower Bound finds the first sorted position whose value is greater than or equal to the target.",
  "concept": "Lower Bound is useful when sorted order lets you discard a whole half of the search space. Use this when the input is sorted or the answer predicate changes only once.",
  "logicSummary": "Maintain low/high boundaries, test the middle, and keep only the half that can still contain the answer.",
  "transitionSummary": "Each comparison must shrink the boundary range; equality returns immediately, otherwise low or high moves past mid.",
  "codeInsight": "Using high = mid keeps a valid candidate in the range until low is the answer.",
  "realLifeExample": "Use it for insertion positions, frequency ranges, and first-true binary-search predicates.",
  "whenToUse": "Use Lower Bound when you need the first position that can hold target without breaking order.",
  "memoryTrick": "Lower Bound: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Lower Bound is shown as a shrinking boundary search. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Read sorted input",
      "text": "Confirm the array or predicate has monotonic order."
    },
    {
      "title": "Set boundaries",
      "text": "Place low and high around every candidate."
    },
    {
      "title": "Compare middle",
      "text": "Use mid to decide which half is impossible."
    },
    {
      "title": "Return boundary",
      "text": "Return the found index or final insertion boundary."
    }
  ],
  "variables": [
    {
      "name": "array, target",
      "purpose": "A sorted array and boundary value."
    },
    {
      "name": "low, high",
      "purpose": "A half-open candidate range."
    },
    {
      "name": "insertion index",
      "purpose": "The first index with value >= target."
    },
    {
      "name": "low < high",
      "purpose": "The loop continues until the candidate range collapses."
    }
  ],
  "dryRun": [
    {
      "label": "Sorted input",
      "title": "Read the ordered search space",
      "note": "The code starts from a range where binary decisions are valid.",
      "activeLine": 6,
      "codeInsight": "Initializes low as mutable state; later branches update it as the search window or traversal changes."
    },
    {
      "label": "low / high",
      "title": "Open the candidate window",
      "note": "low and high mark every position that may still answer.",
      "activeLine": 6,
      "codeInsight": "Initializes low as mutable state; later branches update it as the search window or traversal changes."
    },
    {
      "label": "mid check",
      "title": "Compare the midpoint",
      "note": "The midpoint decides which half is removed.",
      "activeLine": 10,
      "codeInsight": "Checks array[mid] < target; only the branch that preserves Lower Bound's invariant is allowed to change state."
    },
    {
      "label": "Return",
      "title": "Emit index or boundary",
      "note": "The loop ends with a match or the collapsed boundary.",
      "activeLine": 13,
      "codeInsight": "Returns low, the value produced after Lower Bound's state changes are complete."
    }
  ],
  "complexity": {
    "time": "O(log n).",
    "space": "O(1)."
  },
  "quiz": {
    "question": "Which state choice keeps Lower Bound correct?",
    "options": [
      {
        "key": "A",
        "text": "Track search window and update it only through Lower Bound's transition.",
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
    "correctText": "Correct. Lower Bound stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Lower Bound needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "searching",
  "algorithmSlug": "lower-bound",
  "runnerInput": [
    [
      1,
      3,
      3,
      5
    ],
    3
  ],
  "animation": {
    "type": "array-flow",
    "title": "Lower Bound array state",
    "ruleLabel": "Array invariant",
    "rule": "Each comparison must shrink the boundary range; equality returns immediately, otherwise low or high moves past mid.",
    "values": [
      1,
      3,
      3,
      5
    ],
    "steps": [
      {
        "phase": "Sorted input",
        "title": "Read the ordered search space",
        "note": "The code starts from a range where binary decisions are valid.",
        "ruleLabel": "Lower Bound invariant",
        "rule": "Initializes low as mutable state; later branches update it as the search window or traversal changes.",
        "activeIndices": [
          0
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          1
        ],
        "primaryLabel": "Sorted input",
        "secondaryLabel": "Each comparison must shrink the boundary range; equality returns immediately, otherwise low or high moves past mid."
      },
      {
        "phase": "low / high",
        "title": "Open the candidate window",
        "note": "low and high mark every position that may still answer.",
        "ruleLabel": "Lower Bound invariant",
        "rule": "Initializes low as mutable state; later branches update it as the search window or traversal changes.",
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
        "primaryLabel": "low / high",
        "secondaryLabel": "Each comparison must shrink the boundary range; equality returns immediately, otherwise low or high moves past mid."
      },
      {
        "phase": "mid check",
        "title": "Compare the midpoint",
        "note": "The midpoint decides which half is removed.",
        "ruleLabel": "Lower Bound invariant",
        "rule": "Checks array[mid] < target; only the branch that preserves Lower Bound's invariant is allowed to change state.",
        "activeIndices": [
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          1,
          3
        ],
        "primaryLabel": "mid check",
        "secondaryLabel": "Each comparison must shrink the boundary range; equality returns immediately, otherwise low or high moves past mid."
      },
      {
        "phase": "Return",
        "title": "Emit index or boundary",
        "note": "The loop ends with a match or the collapsed boundary.",
        "ruleLabel": "Lower Bound invariant",
        "rule": "Returns low, the value produced after Lower Bound's state changes are complete.",
        "activeIndices": [
          3,
          3
        ],
        "sortedIndices": [],
        "mutedIndices": [
          0
        ],
        "window": [
          2,
          3
        ],
        "primaryLabel": "Return",
        "secondaryLabel": "Each comparison must shrink the boundary range; equality returns immediately, otherwise low or high moves past mid."
      }
    ]
  }
};
