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
  "concept": "Floyd-Warshall Algorithm is useful when graph structure can be solved by maintaining distance table. Use this when the required result is shortest-path relaxation.",
  "logicSummary": "Initialize graph input and distance table, choose the next work item, then relax outgoing edges when a better distance is found.",
  "transitionSummary": "Each step consumes one vertex or edge and updates distance table without losing the graph invariant.",
  "codeInsight": "The code keeps visited, distance, parent, indegree, or component state explicit so it is not confused with another graph routine.",
  "realLifeExample": "Use this graph routine when the problem's required result matches its traversal, shortest path, ordering, or connectivity invariant.",
  "whenToUse": "Use it when the graph input and required output match this algorithm's invariant.",
  "memoryTrick": "Floyd-Warshall Algorithm: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Floyd-Warshall Algorithm is shown as graph frontier/state updates. The numbered steps follow the code path used to maintain the main invariant.",
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
  "algorithmSlug": "floyd-warshall",
  "runnerInput": [
    [
      [
        0,
        3,
        999
      ],
      [
        999,
        0,
        1
      ],
      [
        2,
        999,
        0
      ]
    ]
  ],
  "animation": {
    "type": "graph-flow",
    "title": "Floyd-Warshall Algorithm graph state",
    "ruleLabel": "Graph invariant",
    "rule": "Each step consumes one vertex or edge and updates distance table without losing the graph invariant.",
    "nodes": [
      {
        "id": "A",
        "label": "A",
        "x": 110,
        "y": 150
      },
      {
        "id": "B",
        "label": "B",
        "x": 300,
        "y": 75
      },
      {
        "id": "C",
        "label": "C",
        "x": 500,
        "y": 150
      },
      {
        "id": "D",
        "label": "D",
        "x": 300,
        "y": 235
      }
    ],
    "edges": [
      {
        "from": "A",
        "to": "B"
      },
      {
        "from": "A",
        "to": "D"
      },
      {
        "from": "B",
        "to": "C"
      },
      {
        "from": "D",
        "to": "C"
      }
    ],
    "steps": [
      {
        "phase": "Graph",
        "title": "Read graph input",
        "note": "The code receives vertices, edges, weights, or adjacency lists.",
        "ruleLabel": "Floyd-Warshall Algorithm invariant",
        "rule": "The code receives vertices, edges, weights, or adjacency lists.",
        "activeNode": "A",
        "visitedNodes": [],
        "frontierNodes": [
          "B"
        ],
        "activeEdge": {
          "from": "A",
          "to": "B"
        }
      },
      {
        "phase": "Distance Table",
        "title": "Initialize distance table",
        "note": "Only the graph state owned by this algorithm is created.",
        "ruleLabel": "Floyd-Warshall Algorithm invariant",
        "rule": "Only the graph state owned by this algorithm is created.",
        "activeNode": "B",
        "visitedNodes": [
          "A"
        ],
        "frontierNodes": [
          "C"
        ],
        "activeEdge": {
          "from": "B",
          "to": "C"
        }
      },
      {
        "phase": "Work item",
        "title": "Process next vertex or edge",
        "note": "Relax outgoing edges when a better distance is found.",
        "ruleLabel": "Floyd-Warshall Algorithm invariant",
        "rule": "Relax outgoing edges when a better distance is found.",
        "activeNode": "C",
        "visitedNodes": [
          "A",
          "B"
        ],
        "frontierNodes": [
          "D"
        ],
        "activeEdge": {
          "from": "C",
          "to": "D"
        }
      },
      {
        "phase": "Shortest Path Relaxation",
        "title": "Return shortest-path relaxation",
        "note": "The final graph state becomes the answer.",
        "ruleLabel": "Floyd-Warshall Algorithm invariant",
        "rule": "The final graph state becomes the answer.",
        "activeNode": "D",
        "visitedNodes": [
          "A",
          "B",
          "C"
        ],
        "frontierNodes": [
          "A"
        ],
        "activeEdge": {
          "from": "D",
          "to": "A"
        }
      }
    ]
  }
};
