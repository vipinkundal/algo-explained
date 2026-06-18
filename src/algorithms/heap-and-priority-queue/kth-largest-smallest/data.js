// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "kth-largest-smallest",
  "title": "Kth Largest / Smallest Element",
  "category": "Heap and Priority Queue",
  "route": "/algorithms/heaps/kth-largest-smallest",
  "phase": 2,
  "priority": "high",
  "visualizerType": "heap-selection",
  "icon": "queue",
  "codePath": "./src/algorithms/heap-and-priority-queue/kth-largest-smallest/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Kth Largest / Smallest Element is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Kth selection sorts or heaps values until the requested rank is available.",
  "concept": "Kth selection sorts or heaps values until the requested rank is available.",
  "logicSummary": "Kth Largest / Smallest Element maintains a dedicated data-structure invariant and changes it through one clear push, pop, enqueue, dequeue, heap, or cache transition.",
  "transitionSummary": "Read the next operation or value, update the owned data structure, and emit the current answer if needed.",
  "codeInsight": "The implementation names the backing state directly, so the code trace matches the visual data structure on the page.",
  "realLifeExample": "Kth Largest / Smallest Element appears when the problem is defined by the behavior of this exact data structure.",
  "whenToUse": "Use Kth Largest / Smallest Element when its state transition is the natural way to model the problem.",
  "memoryTrick": "Kth Largest / Smallest Element: the data structure is the algorithm state.",
  "visualizerCaption": "A heap selection walkthrough showing Kth Largest / Smallest Element's input, state, transition, and answer.",
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
      "label": "Input",
      "title": "Read inputs",
      "note": "Kth Largest / Smallest Element starts by reading the exact input shape it owns.",
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
    "time": "O(n log n) in this clear reference version.",
    "space": "O(n)."
  },
  "quiz": {
    "question": "Which state choice keeps Kth Largest / Smallest Element correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Kth Largest / Smallest Element's transition.",
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
    "correctText": "Correct. Kth Largest / Smallest Element stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Kth Largest / Smallest Element needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "heap-and-priority-queue",
  "algorithmSlug": "kth-largest-smallest"
};
