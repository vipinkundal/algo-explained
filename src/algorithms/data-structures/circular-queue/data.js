// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-circular-queue",
  "title": "Circular Queue",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Queue",
  "sourceFolder": "12_Queue",
  "sourceFile": "02_circular_queue.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/circular-queue",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "queue-operations",
  "icon": "queue",
  "codePath": "./src/algorithms/data-structures/circular-queue/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/circular-queue/code/original.cpp",
  "originalCodeFilename": "02_circular_queue.cpp",
  "originalActiveLine": 5,
  "meaning": "Circular Queue shows how data is organized, changed, and inspected through a small browser demo with a C/C++ reference available beside it.",
  "problem": "Circular Queue explains the queue state model and how one focused change updates it.",
  "concept": "Circular Queue is useful when queue behavior is the clearest model for the data changes. Use this when the problem is naturally described by first-in, first-out state.",
  "logicSummary": "Read the next value or operation, maintain first-in, first-out state, then enqueue, dequeue, peek, or evict entries.",
  "transitionSummary": "Each step changes only the part of the queue required to preserve the invariant.",
  "codeInsight": "Use the Runnable JS tab to edit inputs and see browser-safe output. Use the C/C++ Reference tab to study the source implementation.",
  "originalCodeInsight": "The C++ class groups data members with operations, so the structure controls how outside code can mutate state.",
  "realLifeExample": "Circular Queue is useful when you need to understand the mechanics behind library-level data structures.",
  "whenToUse": "Use this page when learning Queue behavior through state changes instead of memorized code.",
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
      "name": "front cursor",
      "purpose": "Marks the next value that would leave the queue."
    },
    {
      "name": "rear cursor",
      "purpose": "Marks where the next incoming value is placed."
    },
    {
      "name": "waiting line",
      "purpose": "The ordered queue contents while Circular Queue runs."
    },
    {
      "name": "served item",
      "purpose": "The value removed or inspected by the current queue operation."
    }
  ],
  "dryRun": [
    {
      "label": "Queue",
      "title": "Read queue action",
      "note": "The code receives the next value or command.",
      "activeLine": 1,
      "codeInsight": "The code receives the next value or command."
    },
    {
      "label": "Queue front",
      "title": "Inspect queue",
      "note": "The active state must still satisfy first-in, first-out state.",
      "activeLine": 3,
      "codeInsight": "The active state must still satisfy first-in, first-out state."
    },
    {
      "label": "Enqueue / dequeue",
      "title": "Enqueue, dequeue, peek, or evict entries",
      "note": "Only the necessary queue fields are changed.",
      "activeLine": 6,
      "codeInsight": "Only the necessary queue fields are changed."
    },
    {
      "label": "Result",
      "title": "Return visible result",
      "note": "The return value or printed state confirms the operation.",
      "activeLine": 9,
      "codeInsight": "The return value or printed state confirms the operation."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying Circular Queue?",
    "options": [
      {
        "key": "A",
        "text": "The memory/state representation and invariant.",
        "correct": true
      },
      {
        "key": "B",
        "text": "Only the final cout output.",
        "correct": false
      },
      {
        "key": "C",
        "text": "A different algorithm with the same name.",
        "correct": false
      }
    ],
    "correctKey": "A",
    "correctText": "Correct. Data-structure code is easiest to understand when the state representation is clear first.",
    "incorrectText": "Not quite. Start with the structure state, then follow the operation that mutates or reads it."
  },
  "relatedAlgorithmIds": [
    "queue-basics",
    "circular-queue"
  ],
  "relatedLinks": [
    {
      "id": "queue-basics",
      "title": "Queue Basics",
      "label": "Existing algorithm lesson"
    },
    {
      "id": "circular-queue",
      "title": "Circular Queue",
      "label": "Existing algorithm lesson"
    }
  ],
  "runnerInput": [],
  "categorySlug": "data-structures",
  "algorithmSlug": "circular-queue",
  "animation": {
    "type": "stack-queue-flow",
    "title": "Circular Queue queue state",
    "ruleLabel": "queue rule",
    "rule": "Each step changes only the part of the queue required to preserve the invariant.",
    "orientation": "queue",
    "items": [
      4,
      1,
      7,
      3,
      6
    ],
    "steps": [
      {
        "phase": "Queue",
        "title": "Read queue action",
        "note": "The code receives the next value or command.",
        "ruleLabel": "Circular Queue invariant",
        "rule": "The code receives the next value or command.",
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
        "rule": "The active state must still satisfy first-in, first-out state.",
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
        "rule": "Only the necessary queue fields are changed.",
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
        "rule": "The return value or printed state confirms the operation.",
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
