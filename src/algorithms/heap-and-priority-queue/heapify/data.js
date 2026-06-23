// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "heapify",
  "title": "Heapify",
  "category": "Heap and Priority Queue",
  "route": "/algorithms/heaps/heapify",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "heap-tree",
  "icon": "queue",
  "codePath": "./src/algorithms/heap-and-priority-queue/heapify/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Heapify is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Heapify restores the heap property by pushing one out-of-place node downward.",
  "concept": "Heapify is useful when queue behavior is the clearest model for the data changes. Use this when the problem is naturally described by first-in, first-out state.",
  "logicSummary": "Read the next value or operation, maintain first-in, first-out state, then enqueue, dequeue, peek, or evict entries.",
  "transitionSummary": "Each step changes only the part of the queue required to preserve the invariant.",
  "codeInsight": "The implementation names the backing state directly, so the code trace matches the visual data structure on the page.",
  "realLifeExample": "Heapify appears when the problem is defined by the behavior of this exact data structure.",
  "whenToUse": "Use Heapify when its state transition is the natural way to model the problem.",
  "memoryTrick": "Heapify: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Heapify is shown as queue state changes. The numbered steps follow the code path used to maintain the main invariant.",
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
      "codeInsight": "Defines heapify and names the input values, index = 0, size = values.length; edits to those inputs change the visual state and output."
    },
    {
      "label": "Queue front",
      "title": "Inspect queue",
      "note": "The active state must still satisfy first-in, first-out state.",
      "activeLine": 6,
      "codeInsight": "Copies the input into heap, so the animation can show mutations without pretending the caller's original array changes."
    },
    {
      "label": "Enqueue / dequeue",
      "title": "Enqueue, dequeue, peek, or evict entries",
      "note": "Only the necessary queue fields are changed.",
      "activeLine": 6,
      "codeInsight": "Copies the input into heap, so the animation can show mutations without pretending the caller's original array changes."
    },
    {
      "label": "Result",
      "title": "Return visible result",
      "note": "The return value or printed state confirms the operation.",
      "activeLine": 8,
      "codeInsight": "Returns heap, the final value maintained by Heapify's code path."
    }
  ],
  "complexity": {
    "time": "O(log n).",
    "space": "O(1)."
  },
  "quiz": {
    "question": "Which state choice keeps Heapify correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Heapify's transition.",
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
    "correctText": "Correct. Heapify stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Heapify needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "heap-and-priority-queue",
  "algorithmSlug": "heapify",
  "runnerInput": [
    [
      1,
      5,
      3
    ],
    0,
    3
  ],
  "relatedLinks": [
    {
      "id": "ds-heap-creation",
      "title": "Heap Creation",
      "label": "C/C++ heap source"
    }
  ],
  "animation": {
    "type": "tree-operation",
    "title": "Heapify tree state",
    "nodes": [
      {
        "id": "8",
        "label": "8",
        "x": 340,
        "y": 58
      },
      {
        "id": "4",
        "label": "4",
        "x": 190,
        "y": 150
      },
      {
        "id": "12",
        "label": "12",
        "x": 490,
        "y": 150
      },
      {
        "id": "2",
        "label": "2",
        "x": 110,
        "y": 255
      },
      {
        "id": "6",
        "label": "6",
        "x": 270,
        "y": 255
      },
      {
        "id": "10",
        "label": "10",
        "x": 420,
        "y": 255
      },
      {
        "id": "14",
        "label": "14",
        "x": 570,
        "y": 255
      }
    ],
    "edges": [
      {
        "from": "8",
        "to": "4"
      },
      {
        "from": "8",
        "to": "12"
      },
      {
        "from": "4",
        "to": "2"
      },
      {
        "from": "4",
        "to": "6"
      },
      {
        "from": "12",
        "to": "10"
      },
      {
        "from": "12",
        "to": "14"
      }
    ],
    "steps": [
      {
        "phase": "Queue",
        "title": "Read queue action",
        "note": "The code receives the next value or command.",
        "ruleLabel": "Heapify invariant",
        "rule": "Defines heapify and names the input values, index = 0, size = values.length; edits to those inputs change the visual state and output.",
        "activeNode": "8",
        "targetNode": "4",
        "replacementNode": "",
        "mutedNodes": [
          "6",
          "10",
          "14"
        ]
      },
      {
        "phase": "Queue front",
        "title": "Inspect queue",
        "note": "The active state must still satisfy first-in, first-out state.",
        "ruleLabel": "Heapify invariant",
        "rule": "Copies the input into heap, so the animation can show mutations without pretending the caller's original array changes.",
        "activeNode": "4",
        "targetNode": "12",
        "replacementNode": "",
        "mutedNodes": [
          "6",
          "10",
          "14"
        ]
      },
      {
        "phase": "Enqueue / dequeue",
        "title": "Enqueue, dequeue, peek, or evict entries",
        "note": "Only the necessary queue fields are changed.",
        "ruleLabel": "Heapify invariant",
        "rule": "Copies the input into heap, so the animation can show mutations without pretending the caller's original array changes.",
        "activeNode": "12",
        "targetNode": "2",
        "replacementNode": "2",
        "mutedNodes": []
      },
      {
        "phase": "Result",
        "title": "Return visible result",
        "note": "The return value or printed state confirms the operation.",
        "ruleLabel": "Heapify invariant",
        "rule": "Returns heap, the final value maintained by Heapify's code path.",
        "activeNode": "2",
        "targetNode": "6",
        "replacementNode": "6",
        "mutedNodes": []
      }
    ]
  }
};
