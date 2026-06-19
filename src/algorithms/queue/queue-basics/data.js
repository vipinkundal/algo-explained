// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "queue-basics",
  "title": "Queue Basics",
  "category": "Queue",
  "route": "/algorithms/queue/queue-basics",
  "phase": 1,
  "priority": "high",
  "visualizerType": "queue-enqueue-dequeue",
  "icon": "queue",
  "codePath": "./src/algorithms/queue/queue-basics/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Queue Basics is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Queue Basics follows first-in, first-out order with enqueue and dequeue operations.",
  "concept": "Queue Basics follows first-in, first-out order with enqueue and dequeue operations.",
  "logicSummary": "Queue Basics maintains a dedicated data-structure invariant and changes it through one clear push, pop, enqueue, dequeue, heap, or cache transition.",
  "transitionSummary": "Read the next operation or value, update the owned data structure, and emit the current answer if needed.",
  "codeInsight": "The implementation names the backing state directly, so the code trace matches the visual data structure on the page.",
  "realLifeExample": "Queue Basics appears when the problem is defined by the behavior of this exact data structure.",
  "whenToUse": "Use Queue Basics when its state transition is the natural way to model the problem.",
  "memoryTrick": "Queue Basics: the data structure is the algorithm state.",
  "visualizerCaption": "A queue enqueue dequeue walkthrough showing Queue Basics' input, state, transition, and answer.",
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
      "name": "operations",
      "purpose": "The sequence of commands applied to the data structure state."
    },
    {
      "name": "queue / deque / cache state",
      "purpose": "The front, back, capacity, and cached entries affected by each operation. This page visualizes it as queue enqueue dequeue."
    },
    {
      "name": "operation output",
      "purpose": "The value produced by queueBasics after the maintained state reaches the stop rule."
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
      "note": "Queue Basics starts by reading the exact input shape it owns.",
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
    "time": "O(m).",
    "space": "O(m)."
  },
  "quiz": {
    "question": "Which state choice keeps Queue Basics correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Queue Basics' transition.",
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
    "correctText": "Correct. Queue Basics stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Queue Basics needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "queue",
  "algorithmSlug": "queue-basics",
  "runnerInput": [
    [
      {
        "type": "enqueue",
        "value": 1
      },
      {
        "type": "enqueue",
        "value": 2
      },
      {
        "type": "front"
      },
      {
        "type": "dequeue"
      },
      {
        "type": "dequeue"
      }
    ]
  ]
};
