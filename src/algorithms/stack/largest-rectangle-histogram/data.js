// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "largest-rectangle-histogram",
  "title": "Largest Rectangle in Histogram",
  "category": "Stack",
  "route": "/algorithms/stack/largest-rectangle-histogram",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "monotonic-stack-bars",
  "icon": "layers",
  "codePath": "./src/algorithms/stack/largest-rectangle-histogram/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Largest Rectangle in Histogram is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Largest Rectangle in Histogram uses an increasing stack to find each bar's maximal width.",
  "concept": "Largest Rectangle in Histogram uses an increasing stack to find each bar's maximal width.",
  "logicSummary": "Largest Rectangle in Histogram maintains a dedicated data-structure invariant and changes it through one clear push, pop, enqueue, dequeue, heap, or cache transition.",
  "transitionSummary": "Read the next operation or value, update the owned data structure, and emit the current answer if needed.",
  "codeInsight": "The implementation names the backing state directly, so the code trace matches the visual data structure on the page.",
  "realLifeExample": "Largest Rectangle in Histogram appears when the problem is defined by the behavior of this exact data structure.",
  "whenToUse": "Use Largest Rectangle in Histogram when its state transition is the natural way to model the problem.",
  "memoryTrick": "Largest Rectangle in Histogram: the data structure is the algorithm state.",
  "visualizerCaption": "A monotonic stack bars walkthrough showing Largest Rectangle in Histogram's input, state, transition, and answer.",
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
      "name": "heights",
      "purpose": "A numeric sequence scanned with stack or span state."
    },
    {
      "name": "stack state",
      "purpose": "The monotonic stack, helper stack, or pushed values that maintain the invariant. This page visualizes it as monotonic stack bars."
    },
    {
      "name": "operation output",
      "purpose": "The value produced by largestRectangleHistogram after the maintained state reaches the stop rule."
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
      "note": "Largest Rectangle in Histogram starts by reading the exact input shape it owns.",
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
    "space": "O(n)."
  },
  "quiz": {
    "question": "Which state choice keeps Largest Rectangle in Histogram correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Largest Rectangle in Histogram's transition.",
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
    "correctText": "Correct. Largest Rectangle in Histogram stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Largest Rectangle in Histogram needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "stack",
  "algorithmSlug": "largest-rectangle-histogram",
  "runnerInput": [
    [
      2,
      1,
      5,
      6,
      2,
      3
    ]
  ]
};
