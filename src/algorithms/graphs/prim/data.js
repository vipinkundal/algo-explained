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
  "problem": "Prim's Algorithm grows a minimum spanning tree from one start vertex.",
  "concept": "Prim keeps a visited tree and repeatedly adds the cheapest edge crossing from visited to unvisited.",
  "logicSummary": "Start with one vertex, scan all outgoing frontier edges, choose the cheapest safe edge, and add its far endpoint.",
  "transitionSummary": "One transition adds the minimum crossing edge and moves exactly one new vertex into the tree.",
  "codeInsight": "Prim is vertex-frontier MST growth; unlike Kruskal, it never considers edges wholly outside the current tree.",
  "realLifeExample": "Use Prim when growing a minimum-cost network outward from a chosen starting site.",
  "whenToUse": "Use it for connected undirected weighted graphs when MST growth from a start vertex is natural.",
  "memoryTrick": "Prim grows one island by buying the cheapest bridge leaving it.",
  "visualizerCaption": "Watch the tree expand through the cheapest edge that crosses the visited boundary.",
  "logicSteps": [
    {
      "title": "Choose a start",
      "text": "The MST begins from one visited vertex."
    },
    {
      "title": "Scan crossing edges",
      "text": "Only edges from visited to unvisited vertices are candidates."
    },
    {
      "title": "Add cheapest edge",
      "text": "The best candidate joins the MST and visits one new vertex."
    },
    {
      "title": "Return MST",
      "text": "Stop when every vertex is included or no crossing edge remains."
    }
  ],
  "variables": [
    {
      "name": "graph, start",
      "purpose": "Weighted undirected adjacency list and starting vertex."
    },
    {
      "name": "visited",
      "purpose": "Vertices already inside the growing MST."
    },
    {
      "name": "best",
      "purpose": "Cheapest crossing edge found during the current scan."
    },
    {
      "name": "mst",
      "purpose": "Edges accepted into the minimum spanning tree."
    }
  ],
  "dryRun": [
    {
      "label": "Start",
      "title": "Visit A",
      "note": "The tree begins at A.",
      "activeLine": 5,
      "codeInsight": "visited starts with the chosen root."
    },
    {
      "label": "Add A-B",
      "title": "Pick cheapest edge from A",
      "note": "A-B is cheaper than A-C.",
      "activeLine": 12,
      "codeInsight": "best stores the cheapest crossing edge found so far."
    },
    {
      "label": "Add B-C",
      "title": "C joins through B",
      "note": "The frontier now includes edges from A and B.",
      "activeLine": 12,
      "codeInsight": "Only edges to unvisited vertices are candidates."
    },
    {
      "label": "Add C-D",
      "title": "D joins next",
      "note": "C-D is the cheapest crossing edge.",
      "activeLine": 16,
      "codeInsight": "Adding best[1] expands visited by one vertex."
    },
    {
      "label": "Finish",
      "title": "Add D-E and return MST",
      "note": "All vertices are now included.",
      "activeLine": 19,
      "codeInsight": "mst records the accepted edge list."
    }
  ],
  "complexity": {
    "time": "O(VE) in this simple edge-scanning implementation.",
    "space": "O(V)."
  },
  "quiz": {
    "question": "Which state keeps Prim’s Algorithm correct?",
    "options": [
      {
        "key": "A",
        "text": "visited follows the page's own transition rule.",
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
  "algorithmSlug": "prim",
  "runnerInput": [
    {
      "A": [
        [
          "B",
          2
        ],
        [
          "C",
          3
        ]
      ],
      "B": [
        [
          "A",
          2
        ],
        [
          "C",
          1
        ],
        [
          "D",
          4
        ]
      ],
      "C": [
        [
          "A",
          3
        ],
        [
          "B",
          1
        ],
        [
          "D",
          5
        ]
      ],
      "D": [
        [
          "B",
          4
        ],
        [
          "C",
          5
        ],
        [
          "E",
          2
        ]
      ],
      "E": [
        [
          "D",
          2
        ]
      ]
    },
    "A"
  ],
  "animation": {
    "static": true,
    "type": "graph-flow",
    "title": "Prim MST frontier growth",
    "ruleLabel": "Crossing-edge invariant",
    "rule": "The next edge must be the cheapest edge from visited to unvisited.",
    "nodes": [
      {
        "id": "A",
        "label": "A",
        "x": 100,
        "y": 150
      },
      {
        "id": "B",
        "label": "B",
        "x": 240,
        "y": 80
      },
      {
        "id": "C",
        "label": "C",
        "x": 260,
        "y": 230
      },
      {
        "id": "D",
        "label": "D",
        "x": 430,
        "y": 150
      },
      {
        "id": "E",
        "label": "E",
        "x": 560,
        "y": 220
      }
    ],
    "edges": [
      {
        "from": "A",
        "to": "B",
        "weight": 2
      },
      {
        "from": "A",
        "to": "C",
        "weight": 3
      },
      {
        "from": "B",
        "to": "C",
        "weight": 1
      },
      {
        "from": "B",
        "to": "D",
        "weight": 4
      },
      {
        "from": "C",
        "to": "D",
        "weight": 5
      },
      {
        "from": "D",
        "to": "E",
        "weight": 2
      }
    ],
    "steps": [
      {
        "phase": "Visited: A",
        "title": "Start at A",
        "note": "Only edges leaving A are candidates.",
        "ruleLabel": "Candidates",
        "rule": "A-B 2, A-C 3",
        "activeNode": "A",
        "visitedNodes": [
          "A"
        ],
        "frontierNodes": [
          "B",
          "C"
        ]
      },
      {
        "phase": "Add A-B",
        "title": "B joins the tree",
        "note": "A-B is the cheapest crossing edge.",
        "ruleLabel": "MST",
        "rule": "(A-B)",
        "activeNode": "B",
        "visitedNodes": [
          "A",
          "B"
        ],
        "frontierNodes": [
          "C",
          "D"
        ],
        "activeEdge": {
          "from": "A",
          "to": "B"
        }
      },
      {
        "phase": "Add B-C",
        "title": "C joins with weight 1",
        "note": "B-C is cheaper than A-C and B-D.",
        "ruleLabel": "MST",
        "rule": "(A-B), (B-C)",
        "activeNode": "C",
        "visitedNodes": [
          "A",
          "B",
          "C"
        ],
        "frontierNodes": [
          "D"
        ],
        "activeEdge": {
          "from": "B",
          "to": "C"
        }
      },
      {
        "phase": "Add B-D",
        "title": "D joins with weight 4",
        "note": "B-D beats C-D.",
        "ruleLabel": "MST",
        "rule": "(A-B), (B-C), (B-D)",
        "activeNode": "D",
        "visitedNodes": [
          "A",
          "B",
          "C",
          "D"
        ],
        "frontierNodes": [
          "E"
        ],
        "activeEdge": {
          "from": "B",
          "to": "D"
        }
      },
      {
        "phase": "Add D-E",
        "title": "E completes the tree",
        "note": "Every vertex is now inside the MST.",
        "ruleLabel": "Answer",
        "rule": "total weight 9",
        "activeNode": "E",
        "visitedNodes": [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        "frontierNodes": [],
        "activeEdge": {
          "from": "D",
          "to": "E"
        }
      }
    ]
  }
};
