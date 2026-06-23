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
  "meaning": "Upper Bound is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Upper Bound finds the first sorted position whose value is strictly greater than the target.",
  "concept": "Upper Bound is useful when sorted order lets you discard a whole half of the search space. Use this when the input is sorted or the answer predicate changes only once.",
  "logicSummary": "Maintain low/high boundaries, test the middle, and keep only the half that can still contain the answer.",
  "transitionSummary": "Each comparison must shrink the boundary range; equality returns immediately, otherwise low or high moves past mid.",
  "codeInsight": "The only difference from lower bound is the comparison: <= target is discarded.",
  "realLifeExample": "Use it to count duplicates with upperBound - lowerBound.",
  "whenToUse": "Use Upper Bound when you need the first item after all target-equal values.",
  "memoryTrick": "Upper Bound: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Upper Bound is shown as a shrinking boundary search. The numbered steps follow the code path used to maintain the main invariant.",
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
      "purpose": "A half-open search range."
    },
    {
      "name": "upper index",
      "purpose": "The first index with value > target."
    },
    {
      "name": "low < high",
      "purpose": "Stop when one insertion point remains."
    }
  ],
  "dryRun": [
    {
      "label": "Sorted input",
      "title": "Read the ordered search space",
      "note": "The code starts from a range where binary decisions are valid.",
      "activeLine": 5,
      "codeInsight": "Defines upperBound and names the input array, target; edits to those inputs change the visual state and output."
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
      "codeInsight": "When array[mid] <= target is true, low = mid + 1; the animation should show that branch's state update immediately."
    },
    {
      "label": "Return",
      "title": "Emit index or boundary",
      "note": "The loop ends with a match or the collapsed boundary.",
      "activeLine": 13,
      "codeInsight": "Returns low, the final value maintained by Upper Bound's code path."
    }
  ],
  "complexity": {
    "time": "O(log n).",
    "space": "O(1)."
  },
  "quiz": {
    "question": "Which state choice keeps Upper Bound correct?",
    "options": [
      {
        "key": "A",
        "text": "Track search window and update it only through Upper Bound's transition.",
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
    "correctText": "Correct. Upper Bound stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Upper Bound needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "searching",
  "algorithmSlug": "upper-bound",
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
    "title": "Upper Bound array state",
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
        "ruleLabel": "Upper Bound invariant",
        "rule": "Defines upperBound and names the input array, target; edits to those inputs change the visual state and output.",
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
        "ruleLabel": "Upper Bound invariant",
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
        "ruleLabel": "Upper Bound invariant",
        "rule": "When array[mid] <= target is true, low = mid + 1; the animation should show that branch's state update immediately.",
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
        "ruleLabel": "Upper Bound invariant",
        "rule": "Returns low, the final value maintained by Upper Bound's code path.",
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
