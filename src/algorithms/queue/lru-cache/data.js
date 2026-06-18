// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "lru-cache",
  "title": "LRU Cache",
  "category": "Queue",
  "route": "/algorithms/queue/lru-cache",
  "phase": 2,
  "priority": "high",
  "visualizerType": "hashmap-linkedlist",
  "icon": "queue",
  "codePath": "./src/algorithms/queue/lru-cache/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "LRU Cache is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "LRU Cache combines a map with recency order so the least recently used key is evicted first.",
  "concept": "LRU Cache combines a map with recency order so the least recently used key is evicted first.",
  "logicSummary": "LRU Cache maintains a dedicated data-structure invariant and changes it through one clear push, pop, enqueue, dequeue, heap, or cache transition.",
  "transitionSummary": "Read the next operation or value, update the owned data structure, and emit the current answer if needed.",
  "codeInsight": "The implementation names the backing state directly, so the code trace matches the visual data structure on the page.",
  "realLifeExample": "LRU Cache appears when the problem is defined by the behavior of this exact data structure.",
  "whenToUse": "Use LRU Cache when its state transition is the natural way to model the problem.",
  "memoryTrick": "LRU Cache: the data structure is the algorithm state.",
  "visualizerCaption": "A hashmap linkedlist walkthrough showing LRU Cache's input, state, transition, and answer.",
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
      "note": "LRU Cache starts by reading the exact input shape it owns.",
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
    "time": "O(1) average per operation.",
    "space": "O(capacity)."
  },
  "quiz": {
    "question": "Which state choice keeps LRU Cache correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through LRU Cache's transition.",
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
    "correctText": "Correct. LRU Cache stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. LRU Cache needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "queue",
  "algorithmSlug": "lru-cache"
};
