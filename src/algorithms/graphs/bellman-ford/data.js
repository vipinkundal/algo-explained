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
  "concept": "Bellman-Ford relaxes every edge repeatedly, so it can handle negative edges and detect negative cycles.",
  "logicSummary": "bellman-ford maintains graph-specific state and updates it through the algorithm's own vertex or edge transition.",
  "transitionSummary": "Consume the next vertex or edge, update graph state, and preserve the graph invariant.",
  "codeInsight": "The code keeps visited, distance, parent, indegree, or component state explicit so it is not confused with another graph routine.",
  "realLifeExample": "Use this graph routine when the problem's required result matches its traversal, shortest path, ordering, or connectivity invariant.",
  "whenToUse": "Use it when the graph input and required output match this algorithm's invariant.",
  "memoryTrick": "Graph algorithms are state machines: pick the right frontier and update only that state.",
  "visualizerCaption": "A edge relaxation walkthrough showing Bellman-Ford Algorithm's input, state, transition, and answer.",
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
      "name": "vertices, edges, start",
      "purpose": "vertices: The vertex set or count used to initialize graph state. edges: Weighted or unweighted connections considered by the graph transition. start: The vertex where traversal, relaxation, or tree growth begins."
    },
    {
      "name": "frontier / visited / distance state",
      "purpose": "The graph-owned state that changes as vertices or edges are processed. This page visualizes it as edge relaxation."
    },
    {
      "name": "graph result",
      "purpose": "The value produced by bellmanFord after the maintained state reaches the stop rule."
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
      "note": "Bellman-Ford Algorithm starts by reading the exact input shape it owns.",
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
