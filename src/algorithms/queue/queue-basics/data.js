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
  "meaning": "Queue Basics follows first-in, first-out order with enqueue and dequeue operations.",
  "problem": "Queue Basics follows first-in, first-out order with enqueue and dequeue operations.",
  "concept": "Queue Basics is useful when queue behavior is the clearest model for the data changes. Use this when the problem is naturally described by first-in, first-out state.",
  "logicSummary": "Read the next value or operation, maintain first-in, first-out state, then enqueue, dequeue, peek, or evict entries.",
  "transitionSummary": "Each step changes only the part of the queue required to preserve the invariant.",
  "codeInsight": "The implementation names the backing state directly, so the code trace matches the visual data structure on the page.",
  "realLifeExample": "Queue Basics appears when the problem is defined by the behavior of this exact data structure.",
  "whenToUse": "Use Queue Basics when its state transition is the natural way to model the problem.",
  "memoryTrick": "Queue Basics: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Explore Queue Basics through a sample teaching model, then compare it with the runnable result.",
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
      "activeLine": 6,
      "codeInsight": "Seeds queue with the sample values shown in the visualizer, giving the trace concrete cells to inspect."
    },
    {
      "label": "Queue front",
      "title": "Inspect queue",
      "note": "The active state must still satisfy first-in, first-out state.",
      "activeLine": 6,
      "codeInsight": "Seeds queue with the sample values shown in the visualizer, giving the trace concrete cells to inspect."
    },
    {
      "label": "Enqueue / dequeue",
      "title": "Enqueue, dequeue, peek, or evict entries",
      "note": "Only the necessary queue fields are changed.",
      "activeLine": 6,
      "codeInsight": "Seeds queue with the sample values shown in the visualizer, giving the trace concrete cells to inspect."
    },
    {
      "label": "Result",
      "title": "Return visible result",
      "note": "The return value or printed state confirms the operation.",
      "activeLine": 13,
      "codeInsight": "Returns output, the final value maintained by Queue Basics's code path."
    }
  ],
  "complexity": {
    "time": "O(m).",
    "space": "O(m)."
  },
  "quiz": {
    "question": "Which explanation best describes Queue Basics?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "Queue Basics follows first-in, first-out order with enqueue and dequeue operations.",
        "correct": true
      },
      {
        "key": "C",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      }
    ],
    "correctText": "Correct. Queue Basics follows first-in, first-out order with enqueue and dequeue operations.",
    "incorrectText": "Try again. Queue Basics follows first-in, first-out order with enqueue and dequeue operations. Compare the small example in the lesson with your choice."
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
  ],
  "relatedLinks": [
    {
      "id": "ds-queue-array-enqueue-dequeue",
      "title": "Queue Enqueue and Dequeue",
      "label": "C/C++ queue source"
    },
    {
      "id": "ds-circular-queue",
      "title": "Circular Queue",
      "label": "C/C++ queue source"
    },
    {
      "id": "ds-queue-using-linked-list",
      "title": "Queue Using Linked List",
      "label": "C/C++ queue source"
    }
  ],
  "animation": {
    "type": "stack-queue-flow",
    "title": "Queue Basics queue state",
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
        "type": "front"
      },
      {
        "type": "dequeue"
      },
      {
        "type": "dequeue"
      }
    ],
    "steps": [
      {
        "phase": "Queue",
        "title": "Read queue action",
        "note": "The code receives the next value or command.",
        "ruleLabel": "Queue Basics invariant",
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
        "ruleLabel": "Queue Basics invariant",
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
        "ruleLabel": "Queue Basics invariant",
        "rule": "Seeds queue with the sample values shown in the visualizer, giving the trace concrete cells to inspect.",
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
        "ruleLabel": "Queue Basics invariant",
        "rule": "Returns output, the final value maintained by Queue Basics's code path.",
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
    "example": "Read queue: Identify the next command, value, node, or library call. Inspect queue front: Look at the active queue fields. Enqueue / dequeue: enqueue, dequeue, peek, or evict entries. Read result: Return the emitted value or updated structure.",
    "sampleInput": [
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
    ],
    "sampleResult": [
      1,
      1,
      2
    ],
    "sampleScope": "This is the result of the unedited JavaScript function with the sample arguments. Changing the input or code can change the result.",
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
    "checkpoint": "Explain this in your own words: Queue Basics follows first-in, first-out order with enqueue and dequeue operations."
  }
};
