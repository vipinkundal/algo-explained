// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "dijkstra",
  "title": "Dijkstra’s Algorithm",
  "category": "Graphs",
  "route": "/algorithms/graphs/dijkstra",
  "phase": 3,
  "priority": "high",
  "visualizerType": "weighted-graph",
  "icon": "hub",
  "codePath": "./src/algorithms/graphs/dijkstra/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Dijkstra’s Algorithm is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Dijkstra's Algorithm computes shortest path distances from one start vertex when all edge weights are non-negative.",
  "concept": "Dijkstra repeatedly finalizes the unvisited vertex with the smallest known distance, then relaxes its outgoing weighted edges.",
  "logicSummary": "Initialize all distances to infinity except the start, choose the smallest unvisited distance, and improve neighbors through relaxation.",
  "transitionSummary": "One transition finalizes a vertex and replaces a neighbor distance only when current distance plus edge weight is smaller.",
  "codeInsight": "The distance table is the answer in progress; visited means a vertex's shortest distance is finalized.",
  "realLifeExample": "Use Dijkstra for route planning, network latency, game maps, and any non-negative shortest-path problem.",
  "whenToUse": "Use it for single-source shortest paths on weighted graphs with no negative edge weights.",
  "memoryTrick": "Dijkstra locks the nearest unlocked vertex, then offers better prices to its neighbors.",
  "visualizerCaption": "Watch each edge relaxation update the distance table until all reachable shortest paths are finalized.",
  "logicSteps": [
    {
      "title": "Initialize distances",
      "text": "Set start to 0 and every other vertex to infinity."
    },
    {
      "title": "Pick closest unvisited",
      "text": "Choose the unvisited vertex with the smallest known distance."
    },
    {
      "title": "Relax outgoing edges",
      "text": "If going through current is cheaper, update the neighbor distance and predecessor."
    },
    {
      "title": "Return shortest paths",
      "text": "Final distances and previous pointers describe the shortest-path tree."
    }
  ],
  "variables": [
    {
      "name": "graph, start",
      "purpose": "Weighted adjacency list and source vertex."
    },
    {
      "name": "distances",
      "purpose": "Best known distance from start to each vertex."
    },
    {
      "name": "previous",
      "purpose": "Predecessor pointer for reconstructing shortest paths."
    },
    {
      "name": "visited",
      "purpose": "Vertices whose shortest distance is finalized."
    }
  ],
  "dryRun": [
    {
      "label": "Initialize",
      "title": "Set A = 0 and others infinity",
      "note": "Only the start vertex has a known distance.",
      "activeLine": 6,
      "codeInsight": "distances starts as a table so every vertex has an explicit best-known value."
    },
    {
      "label": "Relax A",
      "title": "Finalize A and relax A-B, A-C",
      "note": "B becomes 4 and C becomes 2.",
      "activeLine": 17,
      "codeInsight": "candidate is the path cost through the current finalized vertex."
    },
    {
      "label": "Relax C",
      "title": "Finalize C and improve B",
      "note": "C at distance 2 makes B cheaper: 2 + 1 = 3.",
      "activeLine": 19,
      "codeInsight": "A smaller candidate replaces both distances[next] and previous[next]."
    },
    {
      "label": "Relax B",
      "title": "Finalize B and improve D",
      "note": "B at distance 3 improves D to 8.",
      "activeLine": 19,
      "codeInsight": "Visited vertices are not chosen again, which locks their shortest distance."
    },
    {
      "label": "Finish",
      "title": "Finalize remaining reachable vertices",
      "note": "D, E, and F settle with distances 8, 10, and 13.",
      "activeLine": 25,
      "codeInsight": "The function returns both distances and previous so the page can explain paths, not just numbers."
    }
  ],
  "complexity": {
    "time": "O(V^2 + E) for this simple array-scan implementation; O((V + E) log V) with a priority queue.",
    "space": "O(V)."
  },
  "quiz": {
    "question": "Which state keeps Dijkstra’s Algorithm correct?",
    "options": [
      {
        "key": "A",
        "text": "distances follows the page's own transition rule.",
        "correct": true
      },
      {
        "key": "B",
        "text": "Reuse another graph algorithm's frontier and hope the result still matches.",
        "correct": false
      },
      {
        "key": "C",
        "text": "Skip the stop condition once one edge has been inspected.",
        "correct": false
      }
    ],
    "correctText": "Correct. The page-specific state is what makes this algorithm different from the other graph pages.",
    "incorrectText": "Not quite. This algorithm needs its own input, state, transition, and stop condition."
  },
  "categorySlug": "graphs",
  "algorithmSlug": "dijkstra",
  "runnerInput": [
    {
      "A": [
        [
          "B",
          4
        ],
        [
          "C",
          2
        ]
      ],
      "B": [
        [
          "D",
          5
        ]
      ],
      "C": [
        [
          "B",
          1
        ],
        [
          "D",
          8
        ],
        [
          "E",
          10
        ]
      ],
      "D": [
        [
          "E",
          2
        ],
        [
          "F",
          6
        ]
      ],
      "E": [
        [
          "F",
          3
        ]
      ],
      "F": []
    },
    "A"
  ],
  "animation": {
    "type": "edge-relaxation",
    "title": "Dijkstra weighted relaxation",
    "nodes": [
      {
        "id": "A",
        "label": "A",
        "x": 70,
        "y": 150
      },
      {
        "id": "B",
        "label": "B",
        "x": 220,
        "y": 75
      },
      {
        "id": "C",
        "label": "C",
        "x": 220,
        "y": 225
      },
      {
        "id": "D",
        "label": "D",
        "x": 390,
        "y": 90
      },
      {
        "id": "E",
        "label": "E",
        "x": 390,
        "y": 220
      },
      {
        "id": "F",
        "label": "F",
        "x": 560,
        "y": 150
      }
    ],
    "edges": [
      {
        "from": "A",
        "to": "B",
        "weight": 4
      },
      {
        "from": "A",
        "to": "C",
        "weight": 2
      },
      {
        "from": "C",
        "to": "B",
        "weight": 1
      },
      {
        "from": "B",
        "to": "D",
        "weight": 5
      },
      {
        "from": "C",
        "to": "D",
        "weight": 8
      },
      {
        "from": "C",
        "to": "E",
        "weight": 10
      },
      {
        "from": "D",
        "to": "E",
        "weight": 2
      },
      {
        "from": "D",
        "to": "F",
        "weight": 6
      },
      {
        "from": "E",
        "to": "F",
        "weight": 3
      }
    ],
    "steps": [
      {
        "pass": "Initialize",
        "title": "Only A is known",
        "note": "All distances start at infinity except A = 0.",
        "distances": {
          "A": 0
        },
        "relaxedNode": "A"
      },
      {
        "pass": "Finalize A",
        "title": "Relax A's outgoing edges",
        "note": "A -> B sets B = 4; A -> C sets C = 2.",
        "distances": {
          "A": 0,
          "B": 4,
          "C": 2
        },
        "activeEdge": {
          "from": "A",
          "to": "C"
        },
        "relaxedNode": "C"
      },
      {
        "pass": "Finalize C",
        "title": "C improves B",
        "note": "C -> B offers 2 + 1 = 3, better than 4.",
        "distances": {
          "A": 0,
          "B": 3,
          "C": 2,
          "D": 10,
          "E": 12
        },
        "activeEdge": {
          "from": "C",
          "to": "B"
        },
        "relaxedNode": "B"
      },
      {
        "pass": "Finalize B",
        "title": "B improves D",
        "note": "B -> D offers 3 + 5 = 8, better than 10.",
        "distances": {
          "A": 0,
          "B": 3,
          "C": 2,
          "D": 8,
          "E": 12
        },
        "activeEdge": {
          "from": "B",
          "to": "D"
        },
        "relaxedNode": "D"
      },
      {
        "pass": "Finalize D/E",
        "title": "Finish shortest paths",
        "note": "D improves E to 10, then E improves F to 13.",
        "distances": {
          "A": 0,
          "B": 3,
          "C": 2,
          "D": 8,
          "E": 10,
          "F": 13
        },
        "activeEdge": {
          "from": "E",
          "to": "F"
        },
        "relaxedNode": "F"
      }
    ],
    "static": true
  }
};
