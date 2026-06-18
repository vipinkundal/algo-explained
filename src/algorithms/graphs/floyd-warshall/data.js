// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "floyd-warshall",
  "title": "Floyd-Warshall Algorithm",
  "category": "Graphs",
  "route": "/algorithms/graphs/floyd-warshall",
  "phase": 3,
  "priority": "medium",
  "visualizerType": "matrix-update",
  "icon": "hub",
  "codePath": "./src/algorithms/graphs/floyd-warshall/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Floyd-Warshall Algorithm is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Floyd-Warshall lets every vertex act as an intermediate stop for every pair of vertices.",
  "concept": "Floyd-Warshall lets every vertex act as an intermediate stop for every pair of vertices.",
  "logicSummary": "floyd-warshall maintains graph-specific state and updates it through the algorithm's own vertex or edge transition.",
  "transitionSummary": "Consume the next vertex or edge, update graph state, and preserve the graph invariant.",
  "codeInsight": "The code keeps visited, distance, parent, indegree, or component state explicit so it is not confused with another graph routine.",
  "realLifeExample": "Use this graph routine when the problem's required result matches its traversal, shortest path, ordering, or connectivity invariant.",
  "whenToUse": "Use it when the graph input and required output match this algorithm's invariant.",
  "memoryTrick": "Graph algorithms are state machines: pick the right frontier and update only that state.",
  "visualizerCaption": "A matrix update walkthrough showing Floyd-Warshall Algorithm's input, state, transition, and answer.",
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
      "label": "Input",
      "title": "Read inputs",
      "note": "Floyd-Warshall Algorithm starts by reading the exact input shape it owns.",
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
    "time": "O(V^3).",
    "space": "O(V^2)."
  },
  "quiz": {
    "question": "Which state choice keeps Floyd-Warshall Algorithm correct?",
    "options": [
      {
        "key": "A",
        "text": "Track visited and frontier and update it only through Floyd-Warshall Algorithm's transition.",
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
    "correctText": "Correct. Floyd-Warshall Algorithm stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Floyd-Warshall Algorithm needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "graphs",
  "algorithmSlug": "floyd-warshall"
};
