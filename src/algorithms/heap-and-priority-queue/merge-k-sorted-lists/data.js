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
  "concept": "Merge K Sorted Lists is useful when splitting into sorted halves makes merging predictable. Use this when stable n log n sorting is preferred and extra merge space is acceptable.",
  "logicSummary": "Divide the array into halves, sort each half recursively, then merge the two sorted halves.",
  "transitionSummary": "Each merge step chooses the smaller front value from two already-sorted halves.",
  "codeInsight": "The implementation names the backing state directly, so the code trace matches the visual data structure on the page.",
  "realLifeExample": "Merge K Sorted Lists appears when the problem is defined by the behavior of this exact data structure.",
  "whenToUse": "Use Merge K Sorted Lists when its state transition is the natural way to model the problem.",
  "memoryTrick": "Merge K Sorted Lists: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Merge K Sorted Lists is shown as values moving toward sorted order. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Split range",
      "text": "Divide the current array section."
    },
    {
      "title": "Sort halves",
      "text": "Recursively sort left and right sections."
    },
    {
      "title": "Merge fronts",
      "text": "Choose the smaller front value."
    },
    {
      "title": "Return merged array",
      "text": "Produce one sorted section."
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
      "label": "Range",
      "title": "Split array",
      "note": "The code divides work into smaller ranges.",
      "activeLine": 1,
      "codeInsight": "The code divides work into smaller ranges."
    },
    {
      "label": "Halves",
      "title": "Sort recursively",
      "note": "Each half is solved before merge.",
      "activeLine": 4,
      "codeInsight": "Each half is solved before merge."
    },
    {
      "label": "Merge",
      "title": "Choose smaller front",
      "note": "The next output value comes from one sorted half.",
      "activeLine": 8,
      "codeInsight": "The next output value comes from one sorted half."
    },
    {
      "label": "Sorted",
      "title": "Return merged result",
      "note": "The merged section is fully ordered.",
      "activeLine": 12,
      "codeInsight": "The merged section is fully ordered."
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
  ],
  "animation": {
    "type": "tree-operation",
    "title": "Merge K Sorted Lists tree state",
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
        "phase": "Range",
        "title": "Split array",
        "note": "The code divides work into smaller ranges.",
        "ruleLabel": "Merge K Sorted Lists invariant",
        "rule": "The code divides work into smaller ranges.",
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
        "phase": "Halves",
        "title": "Sort recursively",
        "note": "Each half is solved before merge.",
        "ruleLabel": "Merge K Sorted Lists invariant",
        "rule": "Each half is solved before merge.",
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
        "phase": "Merge",
        "title": "Choose smaller front",
        "note": "The next output value comes from one sorted half.",
        "ruleLabel": "Merge K Sorted Lists invariant",
        "rule": "The next output value comes from one sorted half.",
        "activeNode": "12",
        "targetNode": "2",
        "replacementNode": "2",
        "mutedNodes": []
      },
      {
        "phase": "Sorted",
        "title": "Return merged result",
        "note": "The merged section is fully ordered.",
        "ruleLabel": "Merge K Sorted Lists invariant",
        "rule": "The merged section is fully ordered.",
        "activeNode": "2",
        "targetNode": "6",
        "replacementNode": "6",
        "mutedNodes": []
      }
    ]
  }
};
