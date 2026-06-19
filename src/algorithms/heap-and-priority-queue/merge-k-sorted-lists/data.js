// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "merge-k-sorted-lists",
  "title": "Merge K Sorted Lists",
  "category": "Heap and Priority Queue",
  "route": "/algorithms/heaps/merge-k-sorted-lists",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "heap-merge",
  "icon": "queue",
  "codePath": "./src/algorithms/heap-and-priority-queue/merge-k-sorted-lists/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Merge K Sorted Lists is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Merge K Sorted Lists repeatedly chooses the smallest current head among all sorted lists.",
  "concept": "Merge K Sorted Lists repeatedly chooses the smallest current head among all sorted lists.",
  "logicSummary": "Merge K Sorted Lists maintains a dedicated data-structure invariant and changes it through one clear push, pop, enqueue, dequeue, heap, or cache transition.",
  "transitionSummary": "Read the next operation or value, update the owned data structure, and emit the current answer if needed.",
  "codeInsight": "The implementation names the backing state directly, so the code trace matches the visual data structure on the page.",
  "realLifeExample": "Merge K Sorted Lists appears when the problem is defined by the behavior of this exact data structure.",
  "whenToUse": "Use Merge K Sorted Lists when its state transition is the natural way to model the problem.",
  "memoryTrick": "Merge K Sorted Lists: the data structure is the algorithm state.",
  "visualizerCaption": "A heap merge walkthrough showing Merge K Sorted Lists' input, state, transition, and answer.",
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
      "name": "lists",
      "purpose": "The lists input used by the algorithm."
    },
    {
      "name": "queue / deque / cache state",
      "purpose": "The front, back, capacity, and cached entries affected by each operation. This page visualizes it as heap merge."
    },
    {
      "name": "operation output",
      "purpose": "The value produced by mergeKSortedLists after the maintained state reaches the stop rule."
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
      "note": "Merge K Sorted Lists starts by reading the exact input shape it owns.",
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
    "time": "O(Nk) in this simple reference version.",
    "space": "O(N)."
  },
  "quiz": {
    "question": "Which state choice keeps Merge K Sorted Lists correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Merge K Sorted Lists' transition.",
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
    "correctText": "Correct. Merge K Sorted Lists stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Merge K Sorted Lists needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "heap-and-priority-queue",
  "algorithmSlug": "merge-k-sorted-lists",
  "runnerInput": [
    [
      [
        1,
        4
      ],
      [
        1,
        3
      ],
      [
        2,
        6
      ]
    ]
  ]
};
