// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "sliding-window-maximum",
  "title": "Sliding Window Maximum",
  "category": "Queue",
  "route": "/algorithms/queue/sliding-window-maximum",
  "phase": 2,
  "priority": "high",
  "visualizerType": "monotonic-deque",
  "icon": "queue",
  "codePath": "./src/algorithms/queue/sliding-window-maximum/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Sliding Window Maximum is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Sliding Window Maximum keeps a deque of indices whose values are decreasing.",
  "concept": "Sliding-window logic is useful when the answer depends on a contiguous range that changes one edge at a time. Use this when recomputing every range would repeat work.",
  "logicSummary": "Expand or slide the window, remove expired items, and keep the answer from the current valid range.",
  "transitionSummary": "Each step adds the right item and removes or ignores items that no longer belong.",
  "codeInsight": "The implementation names the backing state directly, so the code trace matches the visual data structure on the page.",
  "realLifeExample": "Sliding Window Maximum appears when the problem is defined by the behavior of this exact data structure.",
  "whenToUse": "Use Sliding Window Maximum when its state transition is the natural way to model the problem.",
  "memoryTrick": "Sliding Window Maximum: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Sliding Window Maximum is shown as a moving range over an array. The numbered steps follow the code path used to maintain the main invariant.",
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
      "name": "input",
      "purpose": "Values or operations to process."
    },
    {
      "name": "data structure state",
      "purpose": "The stack, queue, heap, deque, or cache state."
    },
    {
      "name": "answer",
      "purpose": "The output after all operations or after each step."
    },
    {
      "name": "operations remain",
      "purpose": "Continue while input values or operations remain."
    }
  ],
  "dryRun": [
    {
      "label": "Window rule",
      "title": "Read array and window rule",
      "note": "The code knows the range size or condition.",
      "activeLine": 5,
      "codeInsight": "Defines slidingWindowMaximum and names the input values, size; edits to those inputs change the visual state and output."
    },
    {
      "label": "Right edge",
      "title": "Consume next value",
      "note": "The window grows by one new item.",
      "activeLine": 5,
      "codeInsight": "Defines slidingWindowMaximum and names the input values, size; edits to those inputs change the visual state and output."
    },
    {
      "label": "Left edge",
      "title": "Drop expired state",
      "note": "Values outside the range are removed.",
      "activeLine": 6,
      "codeInsight": "Seeds deque with the sample values shown in the visualizer, giving the trace concrete cells to inspect."
    },
    {
      "label": "Window answer",
      "title": "Record current result",
      "note": "The current valid window updates the output.",
      "activeLine": 14,
      "codeInsight": "Returns result, the final value maintained by Sliding Window Maximum's code path."
    }
  ],
  "complexity": {
    "time": "O(n).",
    "space": "O(k)."
  },
  "quiz": {
    "question": "Which state choice keeps Sliding Window Maximum correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Sliding Window Maximum's transition.",
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
    "correctText": "Correct. Sliding Window Maximum stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Sliding Window Maximum needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "queue",
  "algorithmSlug": "sliding-window-maximum",
  "runnerInput": [
    [
      1,
      3,
      -1,
      -3,
      5,
      3,
      6,
      7
    ],
    3
  ],
  "animation": {
    "type": "stack-queue-flow",
    "title": "Sliding Window Maximum queue state",
    "ruleLabel": "queue rule",
    "rule": "Each step adds the right item and removes or ignores items that no longer belong.",
    "orientation": "queue",
    "items": [
      1,
      3,
      -1,
      -3,
      5
    ],
    "steps": [
      {
        "phase": "Window rule",
        "title": "Read array and window rule",
        "note": "The code knows the range size or condition.",
        "ruleLabel": "Sliding Window Maximum invariant",
        "rule": "Defines slidingWindowMaximum and names the input values, size; edits to those inputs change the visual state and output.",
        "activeItems": [
          0
        ],
        "topIndex": 0,
        "queueWindow": [
          0,
          0
        ]
      },
      {
        "phase": "Right edge",
        "title": "Consume next value",
        "note": "The window grows by one new item.",
        "ruleLabel": "Sliding Window Maximum invariant",
        "rule": "Defines slidingWindowMaximum and names the input values, size; edits to those inputs change the visual state and output.",
        "activeItems": [
          1
        ],
        "topIndex": 0,
        "queueWindow": [
          0,
          1
        ]
      },
      {
        "phase": "Left edge",
        "title": "Drop expired state",
        "note": "Values outside the range are removed.",
        "ruleLabel": "Sliding Window Maximum invariant",
        "rule": "Seeds deque with the sample values shown in the visualizer, giving the trace concrete cells to inspect.",
        "activeItems": [
          2
        ],
        "topIndex": 0,
        "queueWindow": [
          0,
          2
        ]
      },
      {
        "phase": "Window answer",
        "title": "Record current result",
        "note": "The current valid window updates the output.",
        "ruleLabel": "Sliding Window Maximum invariant",
        "rule": "Returns result, the final value maintained by Sliding Window Maximum's code path.",
        "activeItems": [
          3
        ],
        "topIndex": 0,
        "queueWindow": [
          0,
          3
        ]
      }
    ]
  }
};
