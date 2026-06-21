// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

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
  "concept": "Circular Queue is useful when queue behavior is the clearest model for the data changes. Use this when the problem is naturally described by first-in, first-out state.",
  "logicSummary": "Read the next value or operation, maintain first-in, first-out state, then enqueue, dequeue, peek, or evict entries.",
  "transitionSummary": "Each step changes only the part of the queue required to preserve the invariant.",
  "codeInsight": "The implementation names the backing state directly, so the code trace matches the visual data structure on the page.",
  "realLifeExample": "Circular Queue appears when the problem is defined by the behavior of this exact data structure.",
  "whenToUse": "Use Circular Queue when its state transition is the natural way to model the problem.",
  "memoryTrick": "Circular Queue: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Circular Queue is shown as queue state changes. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Read queue",
      "text": "Identify the next command, value, node, or library call."
    },
    {
      "title": "Inspect queue front",
      "text": "Look at the active queue fields."
    },
    {
      "title": "Enqueue / dequeue",
      "text": "enqueue, dequeue, peek, or evict entries."
    },
    {
      "title": "Read result",
      "text": "Return the emitted value or updated structure."
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
      "label": "Queue",
      "title": "Read queue action",
      "note": "The code receives the next value or command.",
      "activeLine": 5,
      "codeInsight": "Defines circularQueue and names the input capacity, operations; edits to those inputs change the visual state and output."
    },
    {
      "label": "Queue front",
      "title": "Inspect queue",
      "note": "The active state must still satisfy first-in, first-out state.",
      "activeLine": 6,
      "codeInsight": "Stores data so the algorithm can reuse this value without recomputing it."
    },
    {
      "label": "Enqueue / dequeue",
      "title": "Enqueue, dequeue, peek, or evict entries",
      "note": "Only the necessary queue fields are changed.",
      "activeLine": 6,
      "codeInsight": "Stores data so the algorithm can reuse this value without recomputing it."
    },
    {
      "label": "Result",
      "title": "Return visible result",
      "note": "The return value or printed state confirms the operation.",
      "activeLine": 21,
      "codeInsight": "Returns output, the value produced after Circular Queue's state changes are complete."
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
  ],
  "animation": {
    "type": "stack-queue-flow",
    "title": "Circular Queue queue state",
    "ruleLabel": "queue rule",
    "rule": "Each step changes only the part of the queue required to preserve the invariant.",
    "orientation": "queue",
    "items": [
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
      }
    ],
    "steps": [
      {
        "phase": "Queue",
        "title": "Read queue action",
        "note": "The code receives the next value or command.",
        "ruleLabel": "Circular Queue invariant",
        "rule": "Defines circularQueue and names the input capacity, operations; edits to those inputs change the visual state and output.",
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
        "phase": "Queue front",
        "title": "Inspect queue",
        "note": "The active state must still satisfy first-in, first-out state.",
        "ruleLabel": "Circular Queue invariant",
        "rule": "Stores data so the algorithm can reuse this value without recomputing it.",
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
        "phase": "Enqueue / dequeue",
        "title": "Enqueue, dequeue, peek, or evict entries",
        "note": "Only the necessary queue fields are changed.",
        "ruleLabel": "Circular Queue invariant",
        "rule": "Stores data so the algorithm can reuse this value without recomputing it.",
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
        "phase": "Result",
        "title": "Return visible result",
        "note": "The return value or printed state confirms the operation.",
        "ruleLabel": "Circular Queue invariant",
        "rule": "Returns output, the value produced after Circular Queue's state changes are complete.",
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
