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
  "meaning": "LRU Cache combines a map with recency order so the least recently used key is evicted first.",
  "problem": "LRU Cache combines a map with recency order so the least recently used key is evicted first.",
  "concept": "LRU Cache is useful when queue behavior is the clearest model for the data changes. Use this when the problem is naturally described by first-in, first-out state.",
  "logicSummary": "Read the next value or operation, maintain first-in, first-out state, then enqueue, dequeue, peek, or evict entries.",
  "transitionSummary": "Each step changes only the part of the queue required to preserve the invariant.",
  "codeInsight": "The implementation names the backing state directly, so the code trace matches the visual data structure on the page.",
  "realLifeExample": "LRU Cache appears when the problem is defined by the behavior of this exact data structure.",
  "whenToUse": "Use LRU Cache when its state transition is the natural way to model the problem.",
  "memoryTrick": "LRU Cache: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Explore LRU Cache through a sample teaching model, then compare it with the runnable result.",
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
      "codeInsight": "Defines lruCache and names the input capacity, operations; edits to those inputs change the visual state and output."
    },
    {
      "label": "Queue front",
      "title": "Inspect queue",
      "note": "The active state must still satisfy first-in, first-out state.",
      "activeLine": 6,
      "codeInsight": "Creates cache for fast membership or lookup checks while the scan runs."
    },
    {
      "label": "Enqueue / dequeue",
      "title": "Enqueue, dequeue, peek, or evict entries",
      "note": "Only the necessary queue fields are changed.",
      "activeLine": 6,
      "codeInsight": "Creates cache for fast membership or lookup checks while the scan runs."
    },
    {
      "label": "Result",
      "title": "Return visible result",
      "note": "The return value or printed state confirms the operation.",
      "activeLine": 24,
      "codeInsight": "Returns output, the final value maintained by LRU Cache's code path."
    }
  ],
  "complexity": {
    "time": "O(1) average per operation.",
    "space": "O(capacity)."
  },
  "quiz": {
    "question": "Which explanation best describes LRU Cache?",
    "options": [
      {
        "key": "A",
        "text": "LRU Cache combines a map with recency order so the least recently used key is evicted first.",
        "correct": true
      },
      {
        "key": "B",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "C",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      }
    ],
    "correctText": "Correct. LRU Cache combines a map with recency order so the least recently used key is evicted first.",
    "incorrectText": "Try again. LRU Cache combines a map with recency order so the least recently used key is evicted first. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "queue",
  "algorithmSlug": "lru-cache",
  "runnerInput": [
    2,
    [
      {
        "type": "put",
        "key": 1,
        "value": 1
      },
      {
        "type": "put",
        "key": 2,
        "value": 2
      },
      {
        "type": "get",
        "key": 1
      },
      {
        "type": "put",
        "key": 3,
        "value": 3
      },
      {
        "type": "get",
        "key": 2
      }
    ]
  ],
  "animation": {
    "type": "linked-list-flow",
    "title": "LRU Cache pointer state",
    "ruleLabel": "Pointer rule",
    "rule": "Each step changes only the part of the queue required to preserve the invariant.",
    "nodes": [
      {
        "id": "head",
        "label": "head",
        "role": "head"
      },
      {
        "id": "n2",
        "label": "12",
        "role": "node 2"
      },
      {
        "id": "n3",
        "label": "18",
        "role": "node 3"
      },
      {
        "id": "tail",
        "label": "tail",
        "role": "tail"
      }
    ],
    "steps": [
      {
        "phase": "Queue",
        "title": "Read queue action",
        "note": "The code receives the next value or command.",
        "ruleLabel": "LRU Cache invariant",
        "rule": "Defines lruCache and names the input capacity, operations; edits to those inputs change the visual state and output.",
        "activeNode": "head",
        "previousNode": "head",
        "nextNode": "n2"
      },
      {
        "phase": "Queue front",
        "title": "Inspect queue",
        "note": "The active state must still satisfy first-in, first-out state.",
        "ruleLabel": "LRU Cache invariant",
        "rule": "Creates cache for fast membership or lookup checks while the scan runs.",
        "activeNode": "n2",
        "previousNode": "head",
        "nextNode": "n3"
      },
      {
        "phase": "Enqueue / dequeue",
        "title": "Enqueue, dequeue, peek, or evict entries",
        "note": "Only the necessary queue fields are changed.",
        "ruleLabel": "LRU Cache invariant",
        "rule": "Creates cache for fast membership or lookup checks while the scan runs.",
        "activeNode": "n3",
        "previousNode": "n2",
        "nextNode": "tail"
      },
      {
        "phase": "Result",
        "title": "Return visible result",
        "note": "The return value or printed state confirms the operation.",
        "ruleLabel": "LRU Cache invariant",
        "rule": "Returns output, the final value maintained by LRU Cache's code path.",
        "activeNode": "tail",
        "previousNode": "n3",
        "nextNode": "tail"
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "A linked list follows arrows from node to node. Unlike an array, its nodes do not need neighboring memory slots.",
    "family": "Linked nodes",
    "example": "Read queue: Identify the next command, value, node, or library call. Inspect queue front: Look at the active queue fields. Enqueue / dequeue: enqueue, dequeue, peek, or evict entries. Read result: Return the emitted value or updated structure.",
    "sampleInput": [
      2,
      [
        {
          "type": "put",
          "key": 1,
          "value": 1
        },
        {
          "type": "put",
          "key": 2,
          "value": 2
        },
        {
          "type": "get",
          "key": 1
        },
        {
          "type": "put",
          "key": 3,
          "value": 3
        },
        {
          "type": "get",
          "key": 2
        }
      ]
    ],
    "sampleResult": [
      1,
      -1
    ],
    "sampleScope": "This is the result of the unedited JavaScript function with the sample arguments. Changing the input or code can change the result.",
    "terms": [
      [
        "Head",
        "The first node in a list."
      ],
      [
        "Next",
        "The link leading to another node."
      ],
      [
        "Null",
        "No object or next node is present."
      ]
    ],
    "pitfall": "Save the next link before changing it. Handle an empty list and a change to the head; circular lists need a different stop rule.",
    "checkpoint": "Explain this in your own words: LRU Cache combines a map with recency order so the least recently used key is evicted first."
  },
  "relatedLinks": []
};
