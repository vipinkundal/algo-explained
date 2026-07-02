// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "kruskal",
  "title": "Kruskal’s Algorithm",
  "category": "Graphs",
  "route": "/algorithms/graphs/kruskal",
  "phase": 3,
  "priority": "medium",
  "visualizerType": "mst-edges",
  "icon": "hub",
  "codePath": "./src/algorithms/graphs/kruskal/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Kruskal’s Algorithm is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Kruskal's Algorithm builds a minimum spanning tree by choosing the cheapest safe edge.",
  "concept": "Sort edges by weight and use Union Find to reject any edge whose endpoints are already connected.",
  "logicSummary": "Sort all edges, scan from cheapest to most expensive, and add an edge only when union succeeds.",
  "transitionSummary": "One transition tests an edge against the component forest; accepted edges merge components and join the MST.",
  "codeInsight": "Kruskal is an edge-first MST: Union Find is the safety check that prevents cycles.",
  "realLifeExample": "Use Kruskal for connecting sites, cables, roads, or clusters with minimum total cost.",
  "whenToUse": "Use it for undirected weighted graphs when an MST is needed and sorting edges is acceptable.",
  "memoryTrick": "Kruskal buys the cheapest edge that does not close a cycle.",
  "visualizerCaption": "Watch edges become accepted or skipped as Union Find protects the MST invariant.",
  "logicSteps": [
    {
      "title": "Sort edges",
      "text": "Cheapest edges are considered first."
    },
    {
      "title": "Find endpoints",
      "text": "Use Union Find to get each endpoint's component."
    },
    {
      "title": "Accept safe edge",
      "text": "If roots differ, add the edge and merge components."
    },
    {
      "title": "Return MST",
      "text": "Stop after enough safe edges have been chosen."
    }
  ],
  "variables": [
    {
      "name": "vertexCount, edges",
      "purpose": "Number of vertices and weighted undirected edges."
    },
    {
      "name": "parent",
      "purpose": "Union Find parent array for cycle checks."
    },
    {
      "name": "edge",
      "purpose": "Current cheapest remaining edge being tested."
    },
    {
      "name": "mst",
      "purpose": "Accepted edges in the minimum spanning tree."
    }
  ],
  "dryRun": [
    {
      "label": "Sort",
      "title": "Sort edges by weight",
      "note": "The scan starts with the cheapest candidate.",
      "activeLine": 16,
      "codeInsight": "Sorting defines Kruskal's global greedy order."
    },
    {
      "label": "Accept 0-1",
      "title": "Add edge 0-1 weight 1",
      "note": "Different components merge safely.",
      "activeLine": 17,
      "codeInsight": "unite returns true only when no cycle is formed."
    },
    {
      "label": "Accept 1-2",
      "title": "Add edge 1-2 weight 2",
      "note": "Vertex 2 joins the growing tree.",
      "activeLine": 17,
      "codeInsight": "The MST grows by edges, not by a start vertex."
    },
    {
      "label": "Skip 0-2",
      "title": "Reject cycle edge",
      "note": "0 and 2 already share a component.",
      "activeLine": 10,
      "codeInsight": "Same-root endpoints prove the edge would create a cycle."
    },
    {
      "label": "Finish",
      "title": "Return accepted edges",
      "note": "The accepted set spans all vertices with minimum total weight.",
      "activeLine": 20,
      "codeInsight": "mst contains exactly the safe edges chosen by the greedy scan."
    }
  ],
  "complexity": {
    "time": "O(E log E).",
    "space": "O(V)."
  },
  "quiz": {
    "question": "Which state keeps Kruskal’s Algorithm correct?",
    "options": [
      {
        "key": "A",
        "text": "parent follows the page's own transition rule.",
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
  "algorithmSlug": "kruskal",
  "runnerInput": [
    5,
    [
      [
        0,
        1,
        1
      ],
      [
        1,
        2,
        2
      ],
      [
        0,
        2,
        3
      ],
      [
        2,
        3,
        4
      ],
      [
        3,
        4,
        5
      ],
      [
        1,
        4,
        8
      ]
    ]
  ],
  "animation": {
    "static": true,
    "type": "graph-flow",
    "title": "Kruskal MST edge scan",
    "ruleLabel": "MST invariant",
    "rule": "Accept the cheapest edge that connects two different components.",
    "nodes": [
      {
        "id": "0",
        "label": "0",
        "x": 100,
        "y": 120
      },
      {
        "id": "1",
        "label": "1",
        "x": 230,
        "y": 70
      },
      {
        "id": "2",
        "label": "2",
        "x": 300,
        "y": 210
      },
      {
        "id": "3",
        "label": "3",
        "x": 450,
        "y": 130
      },
      {
        "id": "4",
        "label": "4",
        "x": 560,
        "y": 230
      }
    ],
    "edges": [
      {
        "from": "0",
        "to": "1",
        "weight": 1
      },
      {
        "from": "1",
        "to": "2",
        "weight": 2
      },
      {
        "from": "0",
        "to": "2",
        "weight": 3
      },
      {
        "from": "2",
        "to": "3",
        "weight": 4
      },
      {
        "from": "3",
        "to": "4",
        "weight": 5
      },
      {
        "from": "1",
        "to": "4",
        "weight": 8
      }
    ],
    "steps": [
      {
        "phase": "Sort by weight",
        "title": "Consider 0-1 first",
        "note": "It is the cheapest edge.",
        "ruleLabel": "Components",
        "rule": "{0}, {1}, {2}, {3}, {4}",
        "activeNode": "0",
        "visitedNodes": [],
        "frontierNodes": [
          "0",
          "1"
        ],
        "activeEdge": {
          "from": "0",
          "to": "1"
        }
      },
      {
        "phase": "Accept 0-1",
        "title": "Merge components 0 and 1",
        "note": "The edge is safe and enters the MST.",
        "ruleLabel": "MST",
        "rule": "(0-1)",
        "activeNode": "1",
        "visitedNodes": [
          "0",
          "1"
        ],
        "frontierNodes": [
          "0",
          "1"
        ],
        "activeEdge": {
          "from": "0",
          "to": "1"
        }
      },
      {
        "phase": "Accept 1-2",
        "title": "Merge vertex 2",
        "note": "1 and 2 are in different components.",
        "ruleLabel": "MST",
        "rule": "(0-1), (1-2)",
        "activeNode": "2",
        "visitedNodes": [
          "0",
          "1",
          "2"
        ],
        "frontierNodes": [
          "1",
          "2"
        ],
        "activeEdge": {
          "from": "1",
          "to": "2"
        }
      },
      {
        "phase": "Skip 0-2",
        "title": "Reject the cycle",
        "note": "0 and 2 are already connected through 1.",
        "ruleLabel": "Cycle check",
        "rule": "same root",
        "activeNode": "0",
        "visitedNodes": [
          "0",
          "1",
          "2"
        ],
        "frontierNodes": [
          "0",
          "2"
        ],
        "activeEdge": {
          "from": "0",
          "to": "2"
        }
      },
      {
        "phase": "Finish MST",
        "title": "Accept 2-3 and 3-4",
        "note": "The tree now spans all five vertices.",
        "ruleLabel": "MST",
        "rule": "total weight 12",
        "activeNode": "4",
        "visitedNodes": [
          "0",
          "1",
          "2",
          "3",
          "4"
        ],
        "frontierNodes": [],
        "activeEdge": {
          "from": "3",
          "to": "4"
        }
      }
    ]
  }
};
