// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "kadanes-algorithm",
  "title": "Kadane’s Algorithm",
  "category": "Array Patterns",
  "route": "/algorithms/array-patterns/kadanes-algorithm",
  "phase": 2,
  "priority": "high",
  "visualizerType": "running-sum",
  "icon": "view_week",
  "codePath": "./src/algorithms/array-patterns/kadanes-algorithm/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Kadane’s Algorithm keeps the best subarray ending here and the best subarray seen anywhere.",
  "problem": "Kadane’s Algorithm keeps the best subarray ending here and the best subarray seen anywhere.",
  "concept": "Prefix-style state is useful when a running total or boundary delta lets future queries reuse past work. Use this when range answers or cumulative changes appear repeatedly.",
  "logicSummary": "Build a running state once, then answer each range or final value by combining saved boundaries.",
  "transitionSummary": "Each item updates the running total, difference, or accumulator exactly once.",
  "codeInsight": "The code is written around the array invariant, not a generic scan: each variable explains what future positions can still change.",
  "realLifeExample": "Kadane’s Algorithm appears when contiguous ranges, ordering, or repeated array state can be reused across positions.",
  "whenToUse": "Use Kadane’s Algorithm when the problem statement matches its array invariant.",
  "memoryTrick": "Kadane’s Algorithm: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Explore Kadane’s Algorithm through a sample teaching model, then compare it with the runnable result.",
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
      "codeInsight": "Defines kadanesAlgorithm and names the input array; edits to those inputs change the visual state and output."
    },
    {
      "label": "Accumulator",
      "title": "Start running state",
      "note": "A neutral starting value makes every update consistent.",
      "activeLine": 5,
      "codeInsight": "Defines kadanesAlgorithm and names the input array; edits to those inputs change the visual state and output."
    },
    {
      "label": "Prefix step",
      "title": "Apply current contribution",
      "note": "The running state changes by the current value or boundary delta.",
      "activeLine": 5,
      "codeInsight": "Defines kadanesAlgorithm and names the input array; edits to those inputs change the visual state and output."
    },
    {
      "label": "Range result",
      "title": "Read saved state",
      "note": "The stored state gives the final or range answer.",
      "activeLine": 12,
      "codeInsight": "Returns best, the final value maintained by Kadane’s Algorithm's code path."
    }
  ],
  "complexity": {
    "time": "O(n).",
    "space": "O(1)."
  },
  "quiz": {
    "question": "Which explanation best describes Kadane’s Algorithm?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      },
      {
        "key": "C",
        "text": "Kadane’s Algorithm keeps the best subarray ending here and the best subarray seen anywhere.",
        "correct": true
      }
    ],
    "correctText": "Correct. Kadane’s Algorithm keeps the best subarray ending here and the best subarray seen anywhere.",
    "incorrectText": "Try again. Kadane’s Algorithm keeps the best subarray ending here and the best subarray seen anywhere. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "array-patterns",
  "algorithmSlug": "kadanes-algorithm",
  "runnerInput": [
    [
      -2,
      1,
      -3,
      4,
      -1,
      2,
      1,
      -5,
      4
    ]
  ],
  "animation": {
    "type": "array-flow",
    "title": "Kadane’s Algorithm array state",
    "ruleLabel": "Array invariant",
    "rule": "Each item updates the running total, difference, or accumulator exactly once.",
    "values": [
      -2,
      1,
      -3,
      4,
      -1,
      2,
      1,
      -5
    ],
    "steps": [
      {
        "phase": "Values",
        "title": "Read values or updates",
        "note": "The code receives the array, ranges, or deltas.",
        "ruleLabel": "Kadane’s Algorithm invariant",
        "rule": "Defines kadanesAlgorithm and names the input array; edits to those inputs change the visual state and output.",
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
        "ruleLabel": "Kadane’s Algorithm invariant",
        "rule": "Defines kadanesAlgorithm and names the input array; edits to those inputs change the visual state and output.",
        "activeIndices": [
          1,
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [
          4,
          5,
          6,
          7
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
        "ruleLabel": "Kadane’s Algorithm invariant",
        "rule": "Defines kadanesAlgorithm and names the input array; edits to those inputs change the visual state and output.",
        "activeIndices": [
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [
          5,
          6,
          7
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
        "ruleLabel": "Kadane’s Algorithm invariant",
        "rule": "Returns best, the final value maintained by Kadane’s Algorithm's code path.",
        "activeIndices": [
          3,
          4
        ],
        "sortedIndices": [],
        "mutedIndices": [
          0,
          6,
          7
        ],
        "window": [
          2,
          4
        ],
        "primaryLabel": "Range result",
        "secondaryLabel": "Each item updates the running total, difference, or accumulator exactly once."
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "An array is a row of numbered slots. An index tells you where a value is; it is not the value itself.",
    "family": "Arrays and indexes",
    "example": "Initialize accumulator: Start with zero or the neutral value. Consume value: Add the current contribution. Store boundary: Save the cumulative state for later lookup. Answer range: Use stored boundaries to produce the result.",
    "sampleInput": [
      [
        -2,
        1,
        -3,
        4,
        -1,
        2,
        1,
        -5,
        4
      ]
    ],
    "sampleResult": 6,
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
    "checkpoint": "Explain this in your own words: Kadane’s Algorithm keeps the best subarray ending here and the best subarray seen anywhere."
  },
  "relatedLinks": []
};
