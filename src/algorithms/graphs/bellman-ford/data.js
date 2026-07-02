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
  "problem": "Bellman-Ford computes single-source shortest paths even when some edges are negative.",
  "concept": "Bellman-Ford relaxes every edge V - 1 times, then scans once more to detect a reachable negative cycle.",
  "logicSummary": "Set the start distance to 0, scan every edge repeatedly, and keep any shorter candidate distance.",
  "transitionSummary": "One transition tests distance[from] + weight against distance[to] and updates only when it improves.",
  "codeInsight": "The final extra edge scan is not another shortest-path pass; it is the proof that a negative cycle exists or does not.",
  "realLifeExample": "Use Bellman-Ford for graphs with rebates, penalties, currency arbitrage checks, or any shortest-path graph with negative edges.",
  "whenToUse": "Use it when edge weights may be negative and you also need negative-cycle detection.",
  "memoryTrick": "Bellman-Ford lets every edge make an offer, then asks if any offer is still improving.",
  "visualizerCaption": "Watch repeated edge relaxation update the distance table and then test for a negative cycle.",
  "logicSteps": [
    {
      "title": "Initialize distances",
      "text": "Start is 0; all other vertices are infinity."
    },
    {
      "title": "Relax every edge",
      "text": "Try to improve each destination using each source edge."
    },
    {
      "title": "Repeat V - 1 times",
      "text": "Enough passes allow paths with up to V - 1 edges."
    },
    {
      "title": "Check one more pass",
      "text": "Any remaining improvement means a negative cycle is reachable."
    }
  ],
  "variables": [
    {
      "name": "vertices, edges, start",
      "purpose": "Graph vertex list, weighted directed edges, and source vertex."
    },
    {
      "name": "distance",
      "purpose": "Best known cost from start to each vertex."
    },
    {
      "name": "pass",
      "purpose": "The current full edge-scan iteration."
    },
    {
      "name": "hasNegativeCycle",
      "purpose": "True when an edge still improves after V - 1 passes."
    }
  ],
  "dryRun": [
    {
      "label": "Initialize",
      "title": "Set A = 0",
      "note": "B, C, and D start at infinity.",
      "activeLine": 6,
      "codeInsight": "Only the source can relax outgoing edges at first."
    },
    {
      "label": "Relax A-B",
      "title": "B becomes 4",
      "note": "A -> B offers 0 + 4.",
      "activeLine": 10,
      "codeInsight": "The update only happens when the candidate is smaller."
    },
    {
      "label": "Relax A-C",
      "title": "C becomes 5",
      "note": "A -> C offers 0 + 5.",
      "activeLine": 10,
      "codeInsight": "Every edge is tested in the same pass."
    },
    {
      "label": "Relax B-C",
      "title": "C improves to 2",
      "note": "B has 4, and B -> C has weight -2, so C becomes 2.",
      "activeLine": 10,
      "codeInsight": "Negative edges are allowed because the algorithm repeats full passes."
    },
    {
      "label": "Cycle check",
      "title": "No further improvement",
      "note": "The final scan finds no edge that can still lower a distance.",
      "activeLine": 15,
      "codeInsight": "The extra scan sets hasNegativeCycle."
    }
  ],
  "animation": {
    "static": true,
    "type": "edge-relaxation",
    "title": "Bellman-Ford repeated relaxation",
    "nodes": [
      {
        "id": "A",
        "label": "A",
        "x": 90,
        "y": 150
      },
      {
        "id": "B",
        "label": "B",
        "x": 260,
        "y": 80
      },
      {
        "id": "C",
        "label": "C",
        "x": 260,
        "y": 220
      },
      {
        "id": "D",
        "label": "D",
        "x": 480,
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
        "weight": 5
      },
      {
        "from": "B",
        "to": "C",
        "weight": -2
      },
      {
        "from": "C",
        "to": "D",
        "weight": 3
      },
      {
        "from": "B",
        "to": "D",
        "weight": 6
      }
    ],
    "steps": [
      {
        "pass": "Initialize",
        "title": "Only A is reachable",
        "note": "distance[A] = 0; every other vertex starts at infinity.",
        "distances": {
          "A": 0
        },
        "relaxedNode": "A"
      },
      {
        "pass": "Pass 1",
        "title": "Relax A -> B",
        "note": "B improves from infinity to 4.",
        "distances": {
          "A": 0,
          "B": 4
        },
        "activeEdge": {
          "from": "A",
          "to": "B"
        },
        "relaxedNode": "B"
      },
      {
        "pass": "Pass 1",
        "title": "Relax A -> C",
        "note": "C improves from infinity to 5.",
        "distances": {
          "A": 0,
          "B": 4,
          "C": 5
        },
        "activeEdge": {
          "from": "A",
          "to": "C"
        },
        "relaxedNode": "C"
      },
      {
        "pass": "Pass 1",
        "title": "Relax B -> C",
        "note": "The negative edge lowers C from 5 to 2.",
        "distances": {
          "A": 0,
          "B": 4,
          "C": 2
        },
        "activeEdge": {
          "from": "B",
          "to": "C"
        },
        "relaxedNode": "C"
      },
      {
        "pass": "Pass 2",
        "title": "Relax C -> D",
        "note": "D becomes 5 through A -> B -> C -> D.",
        "distances": {
          "A": 0,
          "B": 4,
          "C": 2,
          "D": 5
        },
        "activeEdge": {
          "from": "C",
          "to": "D"
        },
        "relaxedNode": "D"
      }
    ]
  },
  "complexity": {
    "time": "O(VE).",
    "space": "O(V)."
  },
  "quiz": {
    "question": "Which state keeps Bellman-Ford Algorithm correct?",
    "options": [
      {
        "key": "A",
        "text": "distance follows the page's own transition rule.",
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
  "algorithmSlug": "bellman-ford",
  "runnerInput": [
    [
      "A",
      "B",
      "C",
      "D"
    ],
    [
      [
        "A",
        "B",
        4
      ],
      [
        "A",
        "C",
        5
      ],
      [
        "B",
        "C",
        -2
      ],
      [
        "C",
        "D",
        3
      ],
      [
        "B",
        "D",
        6
      ]
    ],
    "A"
  ]
};
