// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-queue-array-enqueue-dequeue",
  "title": "Queue Enqueue and Dequeue",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Queue",
  "sourceFolder": "12_Queue",
  "sourceFile": "01_enqueue_and_dequeue.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/queue-array-enqueue-dequeue",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "queue-operations",
  "icon": "queue",
  "codePath": "./src/algorithms/data-structures/queue-array-enqueue-dequeue/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/queue-array-enqueue-dequeue/code/original.cpp",
  "originalCodeFilename": "01_enqueue_and_dequeue.cpp",
  "originalActiveLine": 5,
  "meaning": "A queue adds at the rear and removes from the front, preserving arrival order.",
  "problem": "A queue adds at the rear and removes from the front, preserving arrival order.",
  "concept": "A queue adds at the rear and removes from the front, preserving arrival order.",
  "logicSummary": "A queue adds at the rear and removes from the front, preserving arrival order.",
  "transitionSummary": "Enqueue A, then B; the next dequeue returns A.",
  "codeInsight": "A queue adds at the rear and removes from the front, preserving arrival order.",
  "originalCodeInsight": "The C++ class groups data members with operations, so the structure controls how outside code can mutate state.",
  "realLifeExample": "Enqueue A, then B; the next dequeue returns A.",
  "whenToUse": "A queue adds at the rear and removes from the front, preserving arrival order.",
  "memoryTrick": "A queue adds at the rear and removes from the front, preserving arrival order.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "A queue adds at the rear and removes from the front, preserving arrival order."
    },
    {
      "title": "Work through a small case",
      "text": "Enqueue A, then B; the next dequeue returns A."
    },
    {
      "title": "Check the boundary cases",
      "text": "Check empty and full states, and identify which end an operation changes."
    }
  ],
  "variables": [
    {
      "name": "queue",
      "purpose": "Keeps a sequence of sample or working values for the following operations."
    },
    {
      "name": "output",
      "purpose": "Keeps a sequence of sample or working values for the following operations."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "A queue adds at the rear and removes from the front, preserving arrival order.",
      "activeLine": 2,
      "codeInsight": "A queue adds at the rear and removes from the front, preserving arrival order."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "Enqueue A, then B; the next dequeue returns A.",
      "activeLine": 7,
      "codeInsight": "A queue adds at the rear and removes from the front, preserving arrival order."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying Queue Enqueue and Dequeue?",
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
    "queue-basics"
  ],
  "relatedLinks": [
    {
      "id": "queue-basics",
      "title": "Queue Basics",
      "label": "Existing algorithm lesson"
    }
  ],
  "runnerInput": [],
  "categorySlug": "data-structures",
  "algorithmSlug": "queue-array-enqueue-dequeue",
  "animation": {
    "type": "stack-queue-flow",
    "title": "Queue Enqueue and Dequeue queue state",
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
        "ruleLabel": "Queue Enqueue and Dequeue invariant",
        "rule": "Seeds queue with the sample values shown in the visualizer, giving the trace concrete cells to inspect.",
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
        "ruleLabel": "Queue Enqueue and Dequeue invariant",
        "rule": "Seeds queue with the sample values shown in the visualizer, giving the trace concrete cells to inspect.",
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
        "ruleLabel": "Queue Enqueue and Dequeue invariant",
        "rule": "Adds the current value to output, keeping it available for later comparisons or traversal.",
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
        "ruleLabel": "Queue Enqueue and Dequeue invariant",
        "rule": "Returns the final state object { structure: \"queue\", invariant: \"first in, first out\", state: queue, dequeued: output }, exposing the exact fields the visualizer has been tracking.",
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
  },
  "learningGuide": {
    "mentalModel": "A stack removes the newest item first. A queue removes the oldest item first. A deque allows both ends.",
    "family": "Ordered waiting",
    "example": "Enqueue A, then B; the next dequeue returns A.",
    "sampleInput": [],
    "sampleResult": {
      "structure": "queue",
      "invariant": "first in, first out",
      "state": [
        2,
        3,
        4
      ],
      "dequeued": [
        1
      ]
    },
    "sampleScope": "This runnable JavaScript companion illustrates the data structure. Its returned snapshot may cover fewer operations than the C/C++ reference. The topic example above explains the named operation.",
    "terms": [
      [
        "Push / enqueue",
        "Add an item to the structure."
      ],
      [
        "Pop / dequeue",
        "Remove an item according to the structure’s ordering rule."
      ],
      [
        "Peek",
        "Read the next item without removing it."
      ]
    ],
    "pitfall": "Check empty and full states, and identify which end an operation changes.",
    "checkpoint": "Explain this in your own words: A queue adds at the rear and removes from the front, preserving arrival order."
  }
};
