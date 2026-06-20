// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this data-structure page without touching app.js.

export const algorithmPage = {
  "id": "circular-queue",
  "title": "Circular Queue",
  "category": "Queue",
  "route": "/algorithms/queue/circular-queue",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "circular-buffer",
  "icon": "queue",
  "codePath": "./src/algorithms/queue/circular-queue/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Circular Queue is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Circular Queue reuses fixed storage by wrapping front and rear indices.",
  "concept": "Circular Queue reuses fixed storage by wrapping front and rear indices.",
  "logicSummary": "Circular Queue maintains a dedicated data-structure invariant and changes it through one clear push, pop, enqueue, dequeue, heap, or cache transition.",
  "transitionSummary": "Read the next operation or value, update the owned data structure, and emit the current answer if needed.",
  "codeInsight": "The implementation names the backing state directly, so the code trace matches the visual data structure on the page.",
  "realLifeExample": "Circular Queue appears when the problem is defined by the behavior of this exact data structure.",
  "whenToUse": "Use Circular Queue when its state transition is the natural way to model the problem.",
  "memoryTrick": "Circular Queue: the data structure is the algorithm state.",
  "visualizerCaption": "A circular buffer walkthrough showing Circular Queue's input, state, transition, and answer.",
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
      "name": "capacity, operations",
      "purpose": "capacity: The maximum size allowed before eviction or rejection happens. operations: The sequence of commands applied to the data structure state."
    },
    {
      "name": "queue / deque / cache state",
      "purpose": "The front, back, capacity, and cached entries affected by each operation. This page visualizes it as circular buffer."
    },
    {
      "name": "operation output",
      "purpose": "The value produced by circularQueue after the maintained state reaches the stop rule."
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
      "note": "Circular Queue starts by reading the exact input shape it owns.",
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
    "space": "O(capacity)."
  },
  "quiz": {
    "question": "Which state choice keeps Circular Queue correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Circular Queue's transition.",
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
    "correctText": "Correct. Circular Queue stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Circular Queue needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "queue",
  "algorithmSlug": "circular-queue",
  "runnerInput": [
    2,
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
        "type": "enqueue",
        "value": 3
      },
      {
        "type": "dequeue"
      },
      {
        "type": "enqueue",
        "value": 4
      },
      {
        "type": "dequeue"
      },
      {
        "type": "dequeue"
      }
    ]
  ],
  "relatedLinks": [
    {
      "id": "ds-circular-queue",
      "title": "Circular Queue",
      "label": "C/C++ queue source"
    }
  ]
};
