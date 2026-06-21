// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "cpp-priority-queue",
  "title": "C++ priority_queue",
  "category": "C++ STL Algorithm Pages",
  "route": "/algorithms/cpp-stl/priority-queue",
  "phase": 1,
  "priority": "high",
  "visualizerType": "heap-tree",
  "icon": "school",
  "codePath": "./src/algorithms/c-stl-algorithm-pages/cpp-priority-queue/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "C++ priority_queue is a C++ STL Algorithm Pages technique focused on answer.",
  "problem": "C++ priority_queue solves a C++ STL Algorithm Pages problem by maintaining only the state needed for its heap tree transition.",
  "concept": "C++ priority_queue is useful when queue behavior is the clearest model for the data changes. Use this when the problem is naturally described by first-in, first-out state.",
  "logicSummary": "Read the next value or operation, maintain first-in, first-out state, then enqueue, dequeue, peek, or evict entries.",
  "transitionSummary": "Each step changes only the part of the queue required to preserve the invariant.",
  "codeInsight": "The implementation keeps C++ priority_queue's state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "C++ priority_queue appears when the input is input and the required result is answer.",
  "whenToUse": "Use C++ priority_queue when a problem matches the C++ STL Algorithm Pages pattern and the expected state changes match a heap tree dry run.",
  "memoryTrick": "C++ priority_queue: name the invariant, then trace the exact state change.",
  "visualizerCaption": "C++ priority_queue is shown as queue state changes. The numbered steps follow the code path used to maintain the main invariant.",
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
      "name": "values, window Size",
      "purpose": "values: The candidate values that drive the heap, recursion, subset, or frequency process. window Size: The window Size input used by the algorithm."
    },
    {
      "name": "heap array",
      "purpose": "The array-backed heap after each sift, push, or pop operation."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by cppPriorityQueue after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Repeat the heap tree transition until the stop condition for C++ priority_queue is reached. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Queue",
      "title": "Read queue action",
      "note": "The code receives the next value or command.",
      "activeLine": 5,
      "codeInsight": "Defines cppPriorityQueue and names the input values, count = values.length; edits to those inputs change the visual state and output."
    },
    {
      "label": "Queue front",
      "title": "Inspect queue",
      "note": "The active state must still satisfy first-in, first-out state.",
      "activeLine": 3,
      "codeInsight": "Executes this C++ priority_queue line as part of the highlighted code path, linking the visual step to the implementation."
    },
    {
      "label": "Enqueue / dequeue",
      "title": "Enqueue, dequeue, peek, or evict entries",
      "note": "Only the necessary queue fields are changed.",
      "activeLine": 6,
      "codeInsight": "Returns [...values].sort((a, b) => b - a).slice(0, count), the value produced after C++ priority_queue's state changes are complete."
    },
    {
      "label": "Result",
      "title": "Return visible result",
      "note": "The return value or printed state confirms the operation.",
      "activeLine": 6,
      "codeInsight": "Returns [...values].sort((a, b) => b - a).slice(0, count), the value produced after C++ priority_queue's state changes are complete."
    }
  ],
  "complexity": {
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps C++ priority_queue correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through C++ priority_queue's transition.",
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
    "correctText": "Correct. C++ priority_queue stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. C++ priority_queue needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "c-stl-algorithm-pages",
  "algorithmSlug": "cpp-priority-queue",
  "runnerInput": [
    [
      4,
      1,
      5,
      2
    ],
    2
  ],
  "animation": {
    "type": "tree-operation",
    "title": "C++ priority_queue tree state",
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
        "ruleLabel": "C++ priority_queue invariant",
        "rule": "Defines cppPriorityQueue and names the input values, count = values.length; edits to those inputs change the visual state and output.",
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
        "ruleLabel": "C++ priority_queue invariant",
        "rule": "Executes this C++ priority_queue line as part of the highlighted code path, linking the visual step to the implementation.",
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
        "ruleLabel": "C++ priority_queue invariant",
        "rule": "Returns [...values].sort((a, b) => b - a).slice(0, count), the value produced after C++ priority_queue's state changes are complete.",
        "activeNode": "12",
        "targetNode": "2",
        "replacementNode": "2",
        "mutedNodes": []
      },
      {
        "phase": "Result",
        "title": "Return visible result",
        "note": "The return value or printed state confirms the operation.",
        "ruleLabel": "C++ priority_queue invariant",
        "rule": "Returns [...values].sort((a, b) => b - a).slice(0, count), the value produced after C++ priority_queue's state changes are complete.",
        "activeNode": "2",
        "targetNode": "6",
        "replacementNode": "6",
        "mutedNodes": []
      }
    ]
  }
};
