// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "prim",
  "title": "Prim’s Algorithm",
  "category": "Graphs",
  "route": "/algorithms/graphs/prim",
  "phase": 3,
  "priority": "medium",
  "visualizerType": "mst-growth",
  "icon": "hub",
  "codePath": "./src/algorithms/graphs/prim/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Prim’s Algorithm is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Prim’s Algorithm grows a minimum spanning tree by repeatedly adding the cheapest edge leaving the current tree.",
  "concept": "Prim’s Algorithm is useful when graph structure can be solved by maintaining chosen edge set. Use this when the required result is minimum-spanning-tree growth.",
  "logicSummary": "Initialize graph input and chosen edge set, choose the next work item, then add the cheapest safe edge.",
  "transitionSummary": "Each step consumes one vertex or edge and updates chosen edge set without losing the graph invariant.",
  "codeInsight": "The code keeps visited, distance, parent, indegree, or component state explicit so it is not confused with another graph routine.",
  "realLifeExample": "Use this graph routine when the problem's required result matches its traversal, shortest path, ordering, or connectivity invariant.",
  "whenToUse": "Use it when the graph input and required output match this algorithm's invariant.",
  "memoryTrick": "Prim’s Algorithm: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Prim’s Algorithm is shown as graph frontier/state updates. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Read graph",
      "text": "Identify vertices, edges, weights, and start state."
    },
    {
      "title": "Build graph state",
      "text": "Create the chosen edge set."
    },
    {
      "title": "Process work item",
      "text": "Add the cheapest safe edge."
    },
    {
      "title": "Return graph result",
      "text": "Return the minimum-spanning-tree growth."
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
      "label": "Chosen Edge Set",
      "title": "Initialize chosen edge set",
      "note": "Only the graph state owned by this algorithm is created.",
      "activeLine": 3,
      "codeInsight": "Only the graph state owned by this algorithm is created."
    },
    {
      "label": "Work item",
      "title": "Process next vertex or edge",
      "note": "Add the cheapest safe edge.",
      "activeLine": 6,
      "codeInsight": "Add the cheapest safe edge."
    },
    {
      "label": "Minimum Spanning Tree Growth",
      "title": "Return minimum-spanning-tree growth",
      "note": "The final graph state becomes the answer.",
      "activeLine": 10,
      "codeInsight": "The final graph state becomes the answer."
    }
  ],
  "complexity": {
    "time": "O(VE) in this simple edge-scanning version.",
    "space": "O(V)."
  },
  "quiz": {
    "question": "Which state choice keeps Prim’s Algorithm correct?",
    "options": [
      {
        "key": "A",
        "text": "Track visited and frontier and update it only through Prim’s Algorithm's transition.",
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
    "correctText": "Correct. Prim’s Algorithm stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Prim’s Algorithm needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "graphs",
  "algorithmSlug": "prim",
  "runnerInput": [
    {
      "A": [
        [
          "B",
          1
        ],
        [
          "C",
          4
        ]
      ],
      "B": [
        [
          "A",
          1
        ],
        [
          "C",
          2
        ]
      ],
      "C": [
        [
          "A",
          4
        ],
        [
          "B",
          2
        ]
      ]
    },
    "A"
  ]
};
