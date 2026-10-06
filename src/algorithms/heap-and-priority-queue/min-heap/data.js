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
  "meaning": "Min Heap keeps the smallest value at the root after each insertion.",
  "problem": "Min Heap keeps the smallest value at the root after each insertion.",
  "concept": "Min Heap is useful when queue behavior is the clearest model for the data changes. Use this when the problem is naturally described by first-in, first-out state.",
  "logicSummary": "Read the next value or operation, maintain first-in, first-out state, then enqueue, dequeue, peek, or evict entries.",
  "transitionSummary": "Each step changes only the part of the queue required to preserve the invariant.",
  "codeInsight": "The implementation names the backing state directly, so the code trace matches the visual data structure on the page.",
  "realLifeExample": "Min Heap appears when the problem is defined by the behavior of this exact data structure.",
  "whenToUse": "Use Min Heap when its state transition is the natural way to model the problem.",
  "memoryTrick": "Min Heap: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Explore Min Heap through a sample teaching model, then compare it with the runnable result.",
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
      "codeInsight": "Defines minHeap and names the input values; edits to those inputs change the visual state and output."
    },
    {
      "label": "Queue front",
      "title": "Inspect queue",
      "note": "The active state must still satisfy first-in, first-out state.",
      "activeLine": 6,
      "codeInsight": "Seeds heap with the sample values shown in the visualizer, giving the trace concrete cells to inspect."
    },
    {
      "label": "Enqueue / dequeue",
      "title": "Enqueue, dequeue, peek, or evict entries",
      "note": "Only the necessary queue fields are changed.",
      "activeLine": 6,
      "codeInsight": "Seeds heap with the sample values shown in the visualizer, giving the trace concrete cells to inspect."
    },
    {
      "label": "Result",
      "title": "Return visible result",
      "note": "The return value or printed state confirms the operation.",
      "activeLine": 17,
      "codeInsight": "Returns heap, the final value maintained by Min Heap's code path."
    }
  ],
  "complexity": {
    "time": "O(n log n) by repeated insertion.",
    "space": "O(n)."
  },
  "quiz": {
    "question": "Which explanation best describes Min Heap?",
    "options": [
      {
        "key": "A",
        "text": "Min Heap keeps the smallest value at the root after each insertion.",
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
    "correctText": "Correct. Min Heap keeps the smallest value at the root after each insertion.",
    "incorrectText": "Try again. Min Heap keeps the smallest value at the root after each insertion. Compare the small example in the lesson with your choice."
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
  ],
  "animation": {
    "type": "tree-operation",
    "title": "Min Heap tree state",
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
        "ruleLabel": "Min Heap invariant",
        "rule": "Defines minHeap and names the input values; edits to those inputs change the visual state and output.",
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
        "ruleLabel": "Min Heap invariant",
        "rule": "Seeds heap with the sample values shown in the visualizer, giving the trace concrete cells to inspect.",
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
        "ruleLabel": "Min Heap invariant",
        "rule": "Seeds heap with the sample values shown in the visualizer, giving the trace concrete cells to inspect.",
        "activeNode": "12",
        "targetNode": "2",
        "replacementNode": "2",
        "mutedNodes": []
      },
      {
        "phase": "Result",
        "title": "Return visible result",
        "note": "The return value or printed state confirms the operation.",
        "ruleLabel": "Min Heap invariant",
        "rule": "Returns heap, the final value maintained by Min Heap's code path.",
        "activeNode": "2",
        "targetNode": "6",
        "replacementNode": "6",
        "mutedNodes": []
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "A tree branches from a root. A child is one level below its parent; a leaf has no children.",
    "family": "Trees and links",
    "example": "Read queue: Identify the next command, value, node, or library call. Inspect queue front: Look at the active queue fields. Enqueue / dequeue: enqueue, dequeue, peek, or evict entries. Read result: Return the emitted value or updated structure.",
    "sampleInput": [
      [
        3,
        1,
        4,
        2
      ]
    ],
    "sampleResult": [
      1,
      2,
      4,
      3
    ],
    "sampleScope": "This is the result of the unedited JavaScript function with the sample arguments. Changing the input or code can change the result.",
    "terms": [
      [
        "Root",
        "The starting node of a tree."
      ],
      [
        "Subtree",
        "A node together with all of its descendants."
      ],
      [
        "Height",
        "The longest downward path; check whether the code counts nodes or edges."
      ]
    ],
    "pitfall": "Do not assume a tree is a binary search tree or balanced unless the problem guarantees it.",
    "checkpoint": "Explain this in your own words: Min Heap keeps the smallest value at the root after each insertion."
  },
  "relatedLinks": []
};
