// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "prefix-sum",
  "title": "Prefix Sum",
  "category": "Array Patterns",
  "route": "/algorithms/array-patterns/prefix-sum",
  "phase": 1,
  "priority": "high",
  "visualizerType": "cumulative-array",
  "icon": "view_week",
  "codePath": "./src/algorithms/array-patterns/prefix-sum/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Prefix Sum is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Prefix Sum stores cumulative totals so any range sum can be answered by subtracting two saved totals.",
  "concept": "Prefix-style state is useful when a running total or boundary delta lets future queries reuse past work. Use this when range answers or cumulative changes appear repeatedly.",
  "logicSummary": "Build a running state once, then answer each range or final value by combining saved boundaries.",
  "transitionSummary": "Each item updates the running total, difference, or accumulator exactly once.",
  "codeInsight": "The code is written around the array invariant, not a generic scan: each variable explains what future positions can still change.",
  "realLifeExample": "Prefix Sum appears when contiguous ranges, ordering, or repeated array state can be reused across positions.",
  "whenToUse": "Use Prefix Sum when the problem statement matches its array invariant.",
  "memoryTrick": "Prefix Sum: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Prefix Sum is shown as cumulative state over positions. The numbered steps follow the code path used to maintain the main invariant.",
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
      "activeLine": 5,
      "codeInsight": "Defines prefixSum and names the input array; edits to those inputs change the visual state and output."
    },
    {
      "label": "Accumulator",
      "title": "Start running state",
      "note": "A neutral starting value makes every update consistent.",
      "activeLine": 6,
      "codeInsight": "Seeds prefix with the sample values shown in the visualizer, giving the trace concrete cells to inspect."
    },
    {
      "label": "Prefix step",
      "title": "Apply current contribution",
      "note": "The running state changes by the current value or boundary delta.",
      "activeLine": 5,
      "codeInsight": "Defines prefixSum and names the input array; edits to those inputs change the visual state and output."
    },
    {
      "label": "Range result",
      "title": "Read saved state",
      "note": "The stored state gives the final or range answer.",
      "activeLine": 8,
      "codeInsight": "Returns prefix, the final value maintained by Prefix Sum's code path."
    }
  ],
  "complexity": {
    "time": "O(n) to build, O(1) per range query.",
    "space": "O(n)."
  },
  "quiz": {
    "question": "Which state choice keeps Prefix Sum correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Prefix Sum's transition.",
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
    "correctText": "Correct. Prefix Sum stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Prefix Sum needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "array-patterns",
  "algorithmSlug": "prefix-sum",
  "runnerInput": [
    [
      1,
      2,
      3
    ]
  ],
  "animation": {
    "type": "array-flow",
    "title": "Prefix Sum array state",
    "ruleLabel": "Array invariant",
    "rule": "Each item updates the running total, difference, or accumulator exactly once.",
    "values": [
      1,
      2,
      3
    ],
    "steps": [
      {
        "phase": "Values",
        "title": "Read values or updates",
        "note": "The code receives the array, ranges, or deltas.",
        "ruleLabel": "Prefix Sum invariant",
        "rule": "Defines prefixSum and names the input array; edits to those inputs change the visual state and output.",
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
        "ruleLabel": "Prefix Sum invariant",
        "rule": "Seeds prefix with the sample values shown in the visualizer, giving the trace concrete cells to inspect.",
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
        "primaryLabel": "Accumulator",
        "secondaryLabel": "Each item updates the running total, difference, or accumulator exactly once."
      },
      {
        "phase": "Prefix step",
        "title": "Apply current contribution",
        "note": "The running state changes by the current value or boundary delta.",
        "ruleLabel": "Prefix Sum invariant",
        "rule": "Defines prefixSum and names the input array; edits to those inputs change the visual state and output.",
        "activeIndices": [
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          1,
          2
        ],
        "primaryLabel": "Prefix step",
        "secondaryLabel": "Each item updates the running total, difference, or accumulator exactly once."
      },
      {
        "phase": "Range result",
        "title": "Read saved state",
        "note": "The stored state gives the final or range answer.",
        "ruleLabel": "Prefix Sum invariant",
        "rule": "Returns prefix, the final value maintained by Prefix Sum's code path.",
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
        "primaryLabel": "Range result",
        "secondaryLabel": "Each item updates the running total, difference, or accumulator exactly once."
      }
    ]
  }
};
