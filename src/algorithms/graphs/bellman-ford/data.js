// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "bellman-ford",
  "title": "Bellman-Ford Algorithm",
  "category": "Graphs",
  "route": "/algorithms/graphs/bellman-ford",
  "phase": 3,
  "priority": "medium",
  "visualizerType": "edge-relaxation",
  "icon": "hub",
  "codePath": "./src/algorithms/graphs/bellman-ford/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Bellman-Ford Algorithm is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Bellman-Ford relaxes every edge repeatedly, so it can handle negative edges and detect negative cycles.",
  "concept": "Bellman-Ford Algorithm is useful when graph structure can be solved by maintaining distance table. Use this when the required result is shortest-path relaxation.",
  "logicSummary": "Initialize graph input and distance table, choose the next work item, then relax outgoing edges when a better distance is found.",
  "transitionSummary": "Each step consumes one vertex or edge and updates distance table without losing the graph invariant.",
  "codeInsight": "The code keeps visited, distance, parent, indegree, or component state explicit so it is not confused with another graph routine.",
  "realLifeExample": "Use this graph routine when the problem's required result matches its traversal, shortest path, ordering, or connectivity invariant.",
  "whenToUse": "Use it when the graph input and required output match this algorithm's invariant.",
  "memoryTrick": "Bellman-Ford Algorithm: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Bellman-Ford Algorithm is shown as graph frontier/state updates. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Read graph",
      "text": "Identify vertices, edges, weights, and start state."
    },
    {
      "title": "Build graph state",
      "text": "Create the distance table."
    },
    {
      "title": "Process work item",
      "text": "Relax outgoing edges when a better distance is found."
    },
    {
      "title": "Return graph result",
      "text": "Return the shortest-path relaxation."
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
      "label": "Distance Table",
      "title": "Initialize distance table",
      "note": "Only the graph state owned by this algorithm is created.",
      "activeLine": 3,
      "codeInsight": "Only the graph state owned by this algorithm is created."
    },
    {
      "label": "Work item",
      "title": "Process next vertex or edge",
      "note": "Relax outgoing edges when a better distance is found.",
      "activeLine": 6,
      "codeInsight": "Relax outgoing edges when a better distance is found."
    },
    {
      "label": "Shortest Path Relaxation",
      "title": "Return shortest-path relaxation",
      "note": "The final graph state becomes the answer.",
      "activeLine": 10,
      "codeInsight": "The final graph state becomes the answer."
    }
  ],
  "complexity": {
    "time": "O(VE).",
    "space": "O(V)."
  },
  "quiz": {
    "question": "Which state choice keeps Bellman-Ford Algorithm correct?",
    "options": [
      {
        "key": "A",
        "text": "Track visited and frontier and update it only through Bellman-Ford Algorithm's transition.",
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
    "correctText": "Correct. Bellman-Ford Algorithm stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Bellman-Ford Algorithm needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "graphs",
  "algorithmSlug": "bellman-ford",
  "runnerInput": [
    [
      "A",
      "B",
      "C"
    ],
    [
      [
        "A",
        "B",
        1
      ],
      [
        "B",
        "C",
        2
      ],
      [
        "A",
        "C",
        5
      ]
    ],
    "A"
  ]
};
