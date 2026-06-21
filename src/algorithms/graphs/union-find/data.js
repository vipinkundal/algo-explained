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
  "concept": "Disjoint Set Union / Union Find is useful when graph structure can be solved by maintaining parent array. Use this when the required result is component merging.",
  "logicSummary": "Initialize graph input and parent array, choose the next work item, then find roots and union separate sets.",
  "transitionSummary": "Each step consumes one vertex or edge and updates parent array without losing the graph invariant.",
  "codeInsight": "The code keeps visited, distance, parent, indegree, or component state explicit so it is not confused with another graph routine.",
  "realLifeExample": "Use this graph routine when the problem's required result matches its traversal, shortest path, ordering, or connectivity invariant.",
  "whenToUse": "Use it when the graph input and required output match this algorithm's invariant.",
  "memoryTrick": "Disjoint Set Union / Union Find: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Disjoint Set Union / Union Find is shown as graph frontier/state updates. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Read graph",
      "text": "Identify vertices, edges, weights, and start state."
    },
    {
      "title": "Build graph state",
      "text": "Create the parent array."
    },
    {
      "title": "Process work item",
      "text": "Find roots and union separate sets."
    },
    {
      "title": "Return graph result",
      "text": "Return the component merging."
    }
  ],
  "variables": [
    {
      "name": "graph input",
      "purpose": "Vertices, edges, weights, or adjacency lists."
    },
    {
      "name": "graph state",
      "purpose": "Visited, distance, parent, indegree, or component state."
    },
    {
      "name": "graph result",
      "purpose": "Traversal order, shortest paths, MST edges, SCCs, or cycle status."
    },
    {
      "name": "work remains",
      "purpose": "Continue while vertices, edges, or frontier items remain."
    }
  ],
  "dryRun": [
    {
      "label": "Graph",
      "title": "Read graph input",
      "note": "The code receives vertices, edges, weights, or adjacency lists.",
      "activeLine": 1,
      "codeInsight": "The code receives vertices, edges, weights, or adjacency lists."
    },
    {
      "label": "Parent Array",
      "title": "Initialize parent array",
      "note": "Only the graph state owned by this algorithm is created.",
      "activeLine": 3,
      "codeInsight": "Only the graph state owned by this algorithm is created."
    },
    {
      "label": "Work item",
      "title": "Process next vertex or edge",
      "note": "Find roots and union separate sets.",
      "activeLine": 6,
      "codeInsight": "Find roots and union separate sets."
    },
    {
      "label": "Component Merging",
      "title": "Return component merging",
      "note": "The final graph state becomes the answer.",
      "activeLine": 10,
      "codeInsight": "The final graph state becomes the answer."
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
