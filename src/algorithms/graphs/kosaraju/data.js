// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "kosaraju",
  "title": "Kosaraju’s Algorithm",
  "category": "Graphs",
  "route": "/algorithms/graphs/kosaraju",
  "phase": 4,
  "priority": "medium",
  "visualizerType": "scc-two-pass",
  "icon": "hub",
  "codePath": "./src/algorithms/graphs/kosaraju/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Kosaraju’s Algorithm is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Kosaraju’s Algorithm finds strongly connected components with one DFS order pass and one reversed-graph pass.",
  "concept": "Kosaraju’s Algorithm is useful when graph structure can be solved by maintaining discovery/component state. Use this when the required result is component discovery.",
  "logicSummary": "Initialize graph input and discovery/component state, choose the next work item, then update low-link/order state and emit components.",
  "transitionSummary": "Each step consumes one vertex or edge and updates discovery/component state without losing the graph invariant.",
  "codeInsight": "The code keeps visited, distance, parent, indegree, or component state explicit so it is not confused with another graph routine.",
  "realLifeExample": "Use this graph routine when the problem's required result matches its traversal, shortest path, ordering, or connectivity invariant.",
  "whenToUse": "Use it when the graph input and required output match this algorithm's invariant.",
  "memoryTrick": "Kosaraju’s Algorithm: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Kosaraju’s Algorithm is shown as graph frontier/state updates. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Read graph",
      "text": "Identify vertices, edges, weights, and start state."
    },
    {
      "title": "Build graph state",
      "text": "Create the discovery/component state."
    },
    {
      "title": "Process work item",
      "text": "Update low-link/order state and emit components."
    },
    {
      "title": "Return graph result",
      "text": "Return the component discovery."
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
      "label": "Discovery Component State",
      "title": "Initialize discovery/component state",
      "note": "Only the graph state owned by this algorithm is created.",
      "activeLine": 3,
      "codeInsight": "Only the graph state owned by this algorithm is created."
    },
    {
      "label": "Work item",
      "title": "Process next vertex or edge",
      "note": "Update low-link/order state and emit components.",
      "activeLine": 6,
      "codeInsight": "Update low-link/order state and emit components."
    },
    {
      "label": "Component Discovery",
      "title": "Return component discovery",
      "note": "The final graph state becomes the answer.",
      "activeLine": 10,
      "codeInsight": "The final graph state becomes the answer."
    }
  ],
  "complexity": {
    "time": "O(V + E).",
    "space": "O(V + E)."
  },
  "quiz": {
    "question": "Which state choice keeps Kosaraju’s Algorithm correct?",
    "options": [
      {
        "key": "A",
        "text": "Track visited and frontier and update it only through Kosaraju’s Algorithm's transition.",
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
    "correctText": "Correct. Kosaraju’s Algorithm stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Kosaraju’s Algorithm needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "graphs",
  "algorithmSlug": "kosaraju",
  "runnerInput": [
    {
      "A": [
        "B"
      ],
      "B": [
        "A",
        "C"
      ],
      "C": [
        "D"
      ],
      "D": [
        "C"
      ]
    }
  ]
};
