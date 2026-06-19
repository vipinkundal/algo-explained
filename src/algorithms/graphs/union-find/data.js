// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "union-find",
  "title": "Disjoint Set Union / Union Find",
  "category": "Graphs",
  "route": "/algorithms/graphs/union-find",
  "phase": 3,
  "priority": "high",
  "visualizerType": "parent-tree",
  "icon": "hub",
  "codePath": "./src/algorithms/graphs/union-find/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Disjoint Set Union / Union Find is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Union Find keeps components as parent trees and compresses paths during lookup.",
  "concept": "Union Find keeps components as parent trees and compresses paths during lookup.",
  "logicSummary": "union-find maintains graph-specific state and updates it through the algorithm's own vertex or edge transition.",
  "transitionSummary": "Consume the next vertex or edge, update graph state, and preserve the graph invariant.",
  "codeInsight": "The code keeps visited, distance, parent, indegree, or component state explicit so it is not confused with another graph routine.",
  "realLifeExample": "Use this graph routine when the problem's required result matches its traversal, shortest path, ordering, or connectivity invariant.",
  "whenToUse": "Use it when the graph input and required output match this algorithm's invariant.",
  "memoryTrick": "Graph algorithms are state machines: pick the right frontier and update only that state.",
  "visualizerCaption": "A parent tree walkthrough showing Disjoint Set Union / Union Find's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Initialize graph state",
      "text": "Create the state this graph algorithm owns."
    },
    {
      "title": "Choose next work item",
      "text": "Pick the next vertex or edge according to the invariant."
    },
    {
      "title": "Update state",
      "text": "Relax, visit, union, or decrement state."
    },
    {
      "title": "Return graph result",
      "text": "Return the final graph-specific result."
    }
  ],
  "variables": [
    {
      "name": "size, operations",
      "purpose": "size: A numeric limit that controls the window, heap, bucket, or selected result size. operations: The sequence of commands applied to the data structure state."
    },
    {
      "name": "parent and rank arrays",
      "purpose": "Disjoint-set parent links and ranks used to merge components."
    },
    {
      "name": "graph result",
      "purpose": "The value produced by unionFind after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Consume the next vertex or edge, update graph state, and preserve the graph invariant. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read inputs",
      "note": "Disjoint Set Union / Union Find starts by reading the exact input shape it owns.",
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
      "note": "Consume the next vertex or edge, update graph state, and preserve the graph invariant.",
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
    "time": "Nearly O(1) amortized per operation.",
    "space": "O(V)."
  },
  "quiz": {
    "question": "Which state choice keeps Disjoint Set Union / Union Find correct?",
    "options": [
      {
        "key": "A",
        "text": "Track visited and frontier and update it only through Disjoint Set Union / Union Find's transition.",
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
    "correctText": "Correct. Disjoint Set Union / Union Find stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Disjoint Set Union / Union Find needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "graphs",
  "algorithmSlug": "union-find",
  "runnerInput": [
    4,
    [
      [
        0,
        1
      ],
      [
        2,
        3
      ],
      [
        1,
        2
      ],
      [
        0,
        3
      ]
    ]
  ]
};
