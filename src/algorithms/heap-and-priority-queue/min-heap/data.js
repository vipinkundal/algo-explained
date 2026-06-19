// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "min-heap",
  "title": "Min Heap",
  "category": "Heap and Priority Queue",
  "route": "/algorithms/heaps/min-heap",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "heap-tree",
  "icon": "queue",
  "codePath": "./src/algorithms/heap-and-priority-queue/min-heap/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Min Heap is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Min Heap keeps the smallest value at the root after each insertion.",
  "concept": "Min Heap keeps the smallest value at the root after each insertion.",
  "logicSummary": "Min Heap maintains a dedicated data-structure invariant and changes it through one clear push, pop, enqueue, dequeue, heap, or cache transition.",
  "transitionSummary": "Read the next operation or value, update the owned data structure, and emit the current answer if needed.",
  "codeInsight": "The implementation names the backing state directly, so the code trace matches the visual data structure on the page.",
  "realLifeExample": "Min Heap appears when the problem is defined by the behavior of this exact data structure.",
  "whenToUse": "Use Min Heap when its state transition is the natural way to model the problem.",
  "memoryTrick": "Min Heap: the data structure is the algorithm state.",
  "visualizerCaption": "A heap tree walkthrough showing Min Heap's input, state, transition, and answer.",
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
      "name": "values",
      "purpose": "The candidate values that drive the heap, recursion, subset, or frequency process."
    },
    {
      "name": "heap array",
      "purpose": "The array-backed heap after each sift, push, or pop operation."
    },
    {
      "name": "operation output",
      "purpose": "The value produced by minHeap after the maintained state reaches the stop rule."
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
      "note": "Min Heap starts by reading the exact input shape it owns.",
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
    "time": "O(n log n) by repeated insertion.",
    "space": "O(n)."
  },
  "quiz": {
    "question": "Which state choice keeps Min Heap correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Min Heap's transition.",
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
    "correctText": "Correct. Min Heap stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Min Heap needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "heap-and-priority-queue",
  "algorithmSlug": "min-heap",
  "runnerInput": [
    [
      3,
      1,
      4,
      2
    ]
  ]
};
