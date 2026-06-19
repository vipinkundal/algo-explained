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
  "concept": "Sliding Window Maximum keeps a deque of indices whose values are decreasing.",
  "logicSummary": "Sliding Window Maximum maintains a dedicated data-structure invariant and changes it through one clear push, pop, enqueue, dequeue, heap, or cache transition.",
  "transitionSummary": "Read the next operation or value, update the owned data structure, and emit the current answer if needed.",
  "codeInsight": "The implementation names the backing state directly, so the code trace matches the visual data structure on the page.",
  "realLifeExample": "Sliding Window Maximum appears when the problem is defined by the behavior of this exact data structure.",
  "whenToUse": "Use Sliding Window Maximum when its state transition is the natural way to model the problem.",
  "memoryTrick": "Sliding Window Maximum: the data structure is the algorithm state.",
  "visualizerCaption": "A monotonic deque walkthrough showing Sliding Window Maximum's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read operation",
      "text": "Identify the next value or command."
    },
    {
      "title": "Update structure",
      "text": "Push, pop, enqueue, dequeue, rebalance, or evict as required."
    },
    {
      "title": "Preserve invariant",
      "text": "Keep the structure valid after the update."
    },
    {
      "title": "Return output",
      "text": "Return the accumulated answers or final structure."
    }
  ],
  "variables": [
    {
      "name": "values, size",
      "purpose": "values: The candidate values that drive the heap, recursion, subset, or frequency process. size: A numeric limit that controls the window, heap, bucket, or selected result size."
    },
    {
      "name": "queue / deque / cache state",
      "purpose": "The front, back, capacity, and cached entries affected by each operation. This page visualizes it as monotonic deque."
    },
    {
      "name": "operation output",
      "purpose": "The value produced by slidingWindowMaximum after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Read the next operation or value, update the owned data structure, and emit the current answer if needed. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read inputs",
      "note": "Sliding Window Maximum starts by reading the exact input shape it owns.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize state",
      "note": "Create only the state needed for this algorithm's invariant.",
      "activeLine": 3
    },
    {
      "label": "Loop",
      "title": "Run transition",
      "note": "Read the next operation or value, update the owned data structure, and emit the current answer if needed.",
      "activeLine": 8
    },
    {
      "label": "Answer",
      "title": "Return answer",
      "note": "Return the value produced by the maintained invariant.",
      "activeLine": 12
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
  ]
};
