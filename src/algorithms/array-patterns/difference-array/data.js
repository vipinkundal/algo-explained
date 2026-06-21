// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "difference-array",
  "title": "Difference Array",
  "category": "Array Patterns",
  "route": "/algorithms/array-patterns/difference-array",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "range-update",
  "icon": "view_week",
  "codePath": "./src/algorithms/array-patterns/difference-array/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Difference Array is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Difference Array stores only changes at range boundaries, then reconstructs final values with a prefix scan.",
  "concept": "Prefix-style state is useful when a running total or boundary delta lets future queries reuse past work. Use this when range answers or cumulative changes appear repeatedly.",
  "logicSummary": "Build a running state once, then answer each range or final value by combining saved boundaries.",
  "transitionSummary": "Each item updates the running total, difference, or accumulator exactly once.",
  "codeInsight": "The code is written around the array invariant, not a generic scan: each variable explains what future positions can still change.",
  "realLifeExample": "Difference Array appears when contiguous ranges, ordering, or repeated array state can be reused across positions.",
  "whenToUse": "Use Difference Array when the problem statement matches its array invariant.",
  "memoryTrick": "Difference Array: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Difference Array is shown as cumulative state over positions. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Initialize accumulator",
      "text": "Start with zero or the neutral value."
    },
    {
      "title": "Consume value",
      "text": "Add the current contribution."
    },
    {
      "title": "Store boundary",
      "text": "Save the cumulative state for later lookup."
    },
    {
      "title": "Answer range",
      "text": "Use stored boundaries to produce the result."
    }
  ],
  "variables": [
    {
      "name": "array",
      "purpose": "The input values."
    },
    {
      "name": "invariant state",
      "purpose": "The running sum, window, pointer, candidate, or frequency state."
    },
    {
      "name": "answer",
      "purpose": "The best value, transformed array, or matching pair."
    },
    {
      "name": "scan remains",
      "purpose": "Continue while unchecked positions remain."
    }
  ],
  "dryRun": [
    {
      "label": "Values",
      "title": "Read values or updates",
      "note": "The code receives the array, ranges, or deltas.",
      "activeLine": 1,
      "codeInsight": "The code receives the array, ranges, or deltas."
    },
    {
      "label": "Accumulator",
      "title": "Start running state",
      "note": "A neutral starting value makes every update consistent.",
      "activeLine": 3,
      "codeInsight": "A neutral starting value makes every update consistent."
    },
    {
      "label": "Prefix step",
      "title": "Apply current contribution",
      "note": "The running state changes by the current value or boundary delta.",
      "activeLine": 5,
      "codeInsight": "The running state changes by the current value or boundary delta."
    },
    {
      "label": "Range result",
      "title": "Read saved state",
      "note": "The stored state gives the final or range answer.",
      "activeLine": 8,
      "codeInsight": "The stored state gives the final or range answer."
    }
  ],
  "complexity": {
    "time": "O(n + q) for n length and q updates.",
    "space": "O(n)."
  },
  "quiz": {
    "question": "Which state choice keeps Difference Array correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Difference Array's transition.",
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
    "correctText": "Correct. Difference Array stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Difference Array needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "array-patterns",
  "algorithmSlug": "difference-array",
  "runnerInput": [
    5,
    [
      [
        0,
        2,
        3
      ],
      [
        1,
        4,
        2
      ]
    ]
  ],
  "animation": {
    "type": "array-flow",
    "title": "Difference Array array state",
    "ruleLabel": "Array invariant",
    "rule": "Each item updates the running total, difference, or accumulator exactly once.",
    "values": [
      4,
      1,
      7,
      3,
      6,
      2
    ],
    "steps": [
      {
        "phase": "Values",
        "title": "Read values or updates",
        "note": "The code receives the array, ranges, or deltas.",
        "ruleLabel": "Difference Array invariant",
        "rule": "The code receives the array, ranges, or deltas.",
        "activeIndices": [
          0
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          1
        ],
        "primaryLabel": "Values",
        "secondaryLabel": "Each item updates the running total, difference, or accumulator exactly once."
      },
      {
        "phase": "Accumulator",
        "title": "Start running state",
        "note": "A neutral starting value makes every update consistent.",
        "ruleLabel": "Difference Array invariant",
        "rule": "A neutral starting value makes every update consistent.",
        "activeIndices": [
          1,
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [
          4,
          5
        ],
        "window": [
          0,
          2
        ],
        "primaryLabel": "Accumulator",
        "secondaryLabel": "Each item updates the running total, difference, or accumulator exactly once."
      },
      {
        "phase": "Prefix step",
        "title": "Apply current contribution",
        "note": "The running state changes by the current value or boundary delta.",
        "ruleLabel": "Difference Array invariant",
        "rule": "The running state changes by the current value or boundary delta.",
        "activeIndices": [
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [
          5
        ],
        "window": [
          1,
          3
        ],
        "primaryLabel": "Prefix step",
        "secondaryLabel": "Each item updates the running total, difference, or accumulator exactly once."
      },
      {
        "phase": "Range result",
        "title": "Read saved state",
        "note": "The stored state gives the final or range answer.",
        "ruleLabel": "Difference Array invariant",
        "rule": "The stored state gives the final or range answer.",
        "activeIndices": [
          3,
          4
        ],
        "sortedIndices": [],
        "mutedIndices": [
          0
        ],
        "window": [
          2,
          4
        ],
        "primaryLabel": "Range result",
        "secondaryLabel": "Each item updates the running total, difference, or accumulator exactly once."
      }
    ]
  }
};
