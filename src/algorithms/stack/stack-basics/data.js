// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "stack-basics",
  "title": "Stack Basics",
  "category": "Stack",
  "route": "/algorithms/stack/stack-basics",
  "phase": 1,
  "priority": "high",
  "visualizerType": "stack-push-pop",
  "icon": "layers",
  "codePath": "./src/algorithms/stack/stack-basics/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Stack Basics is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Stack Basics follows last-in, first-out order with push and pop operations.",
  "concept": "Stack Basics follows last-in, first-out order with push and pop operations.",
  "logicSummary": "Stack Basics maintains a dedicated data-structure invariant and changes it through one clear push, pop, enqueue, dequeue, heap, or cache transition.",
  "transitionSummary": "Read the next operation or value, update the owned data structure, and emit the current answer if needed.",
  "codeInsight": "The implementation names the backing state directly, so the code trace matches the visual data structure on the page.",
  "realLifeExample": "Stack Basics appears when the problem is defined by the behavior of this exact data structure.",
  "whenToUse": "Use Stack Basics when its state transition is the natural way to model the problem.",
  "memoryTrick": "Stack Basics: the data structure is the algorithm state.",
  "visualizerCaption": "A stack push pop walkthrough showing Stack Basics' input, state, transition, and answer.",
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
      "name": "stack state",
      "purpose": "The monotonic stack, helper stack, or pushed values that maintain the invariant. This page visualizes it as stack push pop."
    },
    {
      "name": "operation output",
      "purpose": "The value produced by stackBasics after the maintained state reaches the stop rule."
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
      "note": "Stack Basics starts by reading the exact input shape it owns.",
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
    "time": "O(m) for m operations.",
    "space": "O(m)."
  },
  "quiz": {
    "question": "Which state choice keeps Stack Basics correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Stack Basics' transition.",
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
    "correctText": "Correct. Stack Basics stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Stack Basics needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "stack",
  "algorithmSlug": "stack-basics",
  "runnerInput": [
    [
      {
        "type": "push",
        "value": 1
      },
      {
        "type": "push",
        "value": 2
      },
      {
        "type": "peek"
      },
      {
        "type": "pop"
      },
      {
        "type": "pop"
      }
    ]
  ]
};
