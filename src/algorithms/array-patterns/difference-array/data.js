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
  "meaning": "Difference Array stores only changes at range boundaries, then reconstructs final values with a prefix scan.",
  "problem": "Difference Array stores only changes at range boundaries, then reconstructs final values with a prefix scan.",
  "concept": "Prefix-style state is useful when a running total or boundary delta lets future queries reuse past work. Use this when range answers or cumulative changes appear repeatedly.",
  "logicSummary": "Build a running state once, then answer each range or final value by combining saved boundaries.",
  "transitionSummary": "Each item updates the running total, difference, or accumulator exactly once.",
  "codeInsight": "The code is written around the array invariant, not a generic scan: each variable explains what future positions can still change.",
  "realLifeExample": "Difference Array appears when contiguous ranges, ordering, or repeated array state can be reused across positions.",
  "whenToUse": "Use Difference Array when the problem statement matches its array invariant.",
  "memoryTrick": "Difference Array: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Explore Difference Array through a sample teaching model, then compare it with the runnable result.",
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
      "codeInsight": "Defines differenceArray and names the input length, updates; edits to those inputs change the visual state and output."
    },
    {
      "label": "Accumulator",
      "title": "Start running state",
      "note": "A neutral starting value makes every update consistent.",
      "activeLine": 6,
      "codeInsight": "Prepares diff with a default value so unresolved positions already have the correct fallback answer."
    },
    {
      "label": "Prefix step",
      "title": "Apply current contribution",
      "note": "The running state changes by the current value or boundary delta.",
      "activeLine": 5,
      "codeInsight": "Defines differenceArray and names the input length, updates; edits to those inputs change the visual state and output."
    },
    {
      "label": "Range result",
      "title": "Read saved state",
      "note": "The stored state gives the final or range answer.",
      "activeLine": 17,
      "codeInsight": "Returns result, the final value maintained by Difference Array's code path."
    }
  ],
  "complexity": {
    "time": "O(n + q) for n length and q updates.",
    "space": "O(n)."
  },
  "quiz": {
    "question": "Which explanation best describes Difference Array?",
    "options": [
      {
        "key": "A",
        "text": "Difference Array stores only changes at range boundaries, then reconstructs final values with a prefix scan.",
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
    "correctText": "Correct. Difference Array stores only changes at range boundaries, then reconstructs final values with a prefix scan.",
    "incorrectText": "Try again. Difference Array stores only changes at range boundaries, then reconstructs final values with a prefix scan. Compare the small example in the lesson with your choice."
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
        "rule": "Defines differenceArray and names the input length, updates; edits to those inputs change the visual state and output.",
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
        "rule": "Prepares diff with a default value so unresolved positions already have the correct fallback answer.",
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
        "rule": "Defines differenceArray and names the input length, updates; edits to those inputs change the visual state and output.",
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
        "rule": "Returns result, the final value maintained by Difference Array's code path.",
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
  },
  "learningGuide": {
    "mentalModel": "An array is a row of numbered slots. An index tells you where a value is; it is not the value itself.",
    "family": "Arrays and indexes",
    "example": "Initialize accumulator: Start with zero or the neutral value. Consume value: Add the current contribution. Store boundary: Save the cumulative state for later lookup. Answer range: Use stored boundaries to produce the result.",
    "sampleInput": [
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
    "sampleResult": [
      3,
      5,
      5,
      2,
      2
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
    "checkpoint": "Explain this in your own words: Difference Array stores only changes at range boundaries, then reconstructs final values with a prefix scan."
  },
  "relatedLinks": []
};
