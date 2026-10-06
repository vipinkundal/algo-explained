// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "sliding-window",
  "title": "Sliding Window",
  "category": "Array Patterns",
  "route": "/algorithms/array-patterns/sliding-window",
  "phase": 1,
  "priority": "high",
  "visualizerType": "moving-window",
  "icon": "view_week",
  "codePath": "./src/algorithms/array-patterns/sliding-window/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Sliding Window reuses a contiguous range instead of recomputing it after every move.",
  "problem": "Sliding Window reuses a contiguous range instead of recomputing it after every move.",
  "concept": "Sliding-window logic is useful when the answer depends on a contiguous range that changes one edge at a time. Use this when recomputing every range would repeat work.",
  "logicSummary": "Expand or slide the window, remove expired items, and keep the answer from the current valid range.",
  "transitionSummary": "Each step adds the right item and removes or ignores items that no longer belong.",
  "codeInsight": "The code is written around the array invariant, not a generic scan: each variable explains what future positions can still change.",
  "realLifeExample": "Sliding Window appears when contiguous ranges, ordering, or repeated array state can be reused across positions.",
  "whenToUse": "Use Sliding Window when the problem statement matches its array invariant.",
  "memoryTrick": "Sliding Window: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Explore Sliding Window through a sample teaching model, then compare it with the runnable result.",
  "logicSteps": [
    {
      "title": "Open window",
      "text": "Start with an empty or first valid range."
    },
    {
      "title": "Add right edge",
      "text": "Include the next value."
    },
    {
      "title": "Remove stale edge",
      "text": "Shrink or pop values that no longer belong."
    },
    {
      "title": "Record answer",
      "text": "Emit the best value for the current window."
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
      "label": "Window rule",
      "title": "Read array and window rule",
      "note": "The code knows the range size or condition.",
      "activeLine": 5,
      "codeInsight": "Defines slidingWindow and names the input array, size; edits to those inputs change the visual state and output."
    },
    {
      "label": "Right edge",
      "title": "Consume next value",
      "note": "The window grows by one new item.",
      "activeLine": 5,
      "codeInsight": "Defines slidingWindow and names the input array, size; edits to those inputs change the visual state and output."
    },
    {
      "label": "Left edge",
      "title": "Drop expired state",
      "note": "Values outside the range are removed.",
      "activeLine": 7,
      "codeInsight": "Seeds sums with the sample values shown in the visualizer, giving the trace concrete cells to inspect."
    },
    {
      "label": "Window answer",
      "title": "Record current result",
      "note": "The current valid window updates the output.",
      "activeLine": 14,
      "codeInsight": "Returns sums, the final value maintained by Sliding Window's code path."
    }
  ],
  "complexity": {
    "time": "O(n).",
    "space": "O(number of windows)."
  },
  "quiz": {
    "question": "Which explanation best describes Sliding Window?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "Sliding Window reuses a contiguous range instead of recomputing it after every move.",
        "correct": true
      },
      {
        "key": "C",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      }
    ],
    "correctText": "Correct. Sliding Window reuses a contiguous range instead of recomputing it after every move.",
    "incorrectText": "Try again. Sliding Window reuses a contiguous range instead of recomputing it after every move. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "array-patterns",
  "algorithmSlug": "sliding-window",
  "runnerInput": [
    [
      1,
      2,
      3,
      4,
      5
    ],
    3
  ],
  "animation": {
    "type": "array-flow",
    "title": "Sliding Window array state",
    "ruleLabel": "Array invariant",
    "rule": "Each step adds the right item and removes or ignores items that no longer belong.",
    "values": [
      1,
      2,
      3,
      4,
      5
    ],
    "steps": [
      {
        "phase": "Window rule",
        "title": "Read array and window rule",
        "note": "The code knows the range size or condition.",
        "ruleLabel": "Sliding Window invariant",
        "rule": "Defines slidingWindow and names the input array, size; edits to those inputs change the visual state and output.",
        "activeIndices": [
          0
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          1
        ],
        "primaryLabel": "Window rule",
        "secondaryLabel": "Each step adds the right item and removes or ignores items that no longer belong."
      },
      {
        "phase": "Right edge",
        "title": "Consume next value",
        "note": "The window grows by one new item.",
        "ruleLabel": "Sliding Window invariant",
        "rule": "Defines slidingWindow and names the input array, size; edits to those inputs change the visual state and output.",
        "activeIndices": [
          1,
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [
          4
        ],
        "window": [
          0,
          2
        ],
        "primaryLabel": "Right edge",
        "secondaryLabel": "Each step adds the right item and removes or ignores items that no longer belong."
      },
      {
        "phase": "Left edge",
        "title": "Drop expired state",
        "note": "Values outside the range are removed.",
        "ruleLabel": "Sliding Window invariant",
        "rule": "Seeds sums with the sample values shown in the visualizer, giving the trace concrete cells to inspect.",
        "activeIndices": [
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          1,
          3
        ],
        "primaryLabel": "Left edge",
        "secondaryLabel": "Each step adds the right item and removes or ignores items that no longer belong."
      },
      {
        "phase": "Window answer",
        "title": "Record current result",
        "note": "The current valid window updates the output.",
        "ruleLabel": "Sliding Window invariant",
        "rule": "Returns sums, the final value maintained by Sliding Window's code path.",
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
        "primaryLabel": "Window answer",
        "secondaryLabel": "Each step adds the right item and removes or ignores items that no longer belong."
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "An array is a row of numbered slots. An index tells you where a value is; it is not the value itself.",
    "family": "Arrays and indexes",
    "example": "Open window: Start with an empty or first valid range. Add right edge: Include the next value. Remove stale edge: Shrink or pop values that no longer belong. Record answer: Emit the best value for the current window.",
    "sampleInput": [
      [
        1,
        2,
        3,
        4,
        5
      ],
      3
    ],
    "sampleResult": [
      6,
      9,
      12
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
    "checkpoint": "Explain this in your own words: Sliding Window reuses a contiguous range instead of recomputing it after every move."
  },
  "relatedLinks": []
};
