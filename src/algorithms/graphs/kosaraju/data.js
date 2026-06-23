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
  "problem": "Kosaraju's Algorithm finds strongly connected components with two DFS passes.",
  "concept": "The first DFS records finish order; the second DFS runs on the reversed graph in that order to collect SCCs.",
  "logicSummary": "Run DFS to fill a stack by finish time, reverse every edge, then pop vertices and collect reversed-graph components.",
  "transitionSummary": "One transition finishes a vertex into order; the second pass turns a popped root into one full component.",
  "codeInsight": "The reversed graph is essential: finish order picks component sources, and reversed DFS gathers exactly that SCC.",
  "realLifeExample": "Use Kosaraju for mutual reachability groups, module cycles, call graphs, and directed dependency analysis.",
  "whenToUse": "Use it when you need all strongly connected components and a clear two-pass DFS is acceptable.",
  "memoryTrick": "Kosaraju: finish order first, reverse roads second, collect islands third.",
  "visualizerCaption": "Watch finish order and reversed-edge collection split the directed graph into SCCs.",
  "logicSteps": [
    {
      "title": "First DFS",
      "text": "Push each vertex after all outgoing work finishes."
    },
    {
      "title": "Reverse graph",
      "text": "Build a graph where every edge points backward."
    },
    {
      "title": "Pop finish order",
      "text": "Use the latest finishing vertex as the next root."
    },
    {
      "title": "Collect SCC",
      "text": "DFS on the reversed graph emits one strongly connected component."
    }
  ],
  "variables": [
    {
      "name": "graph",
      "purpose": "Original directed adjacency list."
    },
    {
      "name": "order",
      "purpose": "Vertices sorted by first-pass finish time."
    },
    {
      "name": "reversed",
      "purpose": "Graph with every edge reversed."
    },
    {
      "name": "components",
      "purpose": "List of strongly connected components."
    }
  ],
  "dryRun": [
    {
      "label": "Finish A/B/C",
      "title": "First DFS closes the cycle",
      "note": "A, B, and C finish after exploring each other.",
      "activeLine": 9,
      "codeInsight": "order.push(node) happens after recursion, so this is finish order."
    },
    {
      "label": "Reverse",
      "title": "Reverse every directed edge",
      "note": "The second pass will walk incoming edges as outgoing edges.",
      "activeLine": 15,
      "codeInsight": "reversed[next].push(node) flips each edge."
    },
    {
      "label": "Pop A",
      "title": "Collect A, C, B",
      "note": "The reversed DFS from A reaches exactly its SCC.",
      "activeLine": 25,
      "codeInsight": "collect pushes every vertex in the component."
    },
    {
      "label": "Pop D",
      "title": "Collect D and E",
      "note": "D and E form the next SCC.",
      "activeLine": 30,
      "codeInsight": "Visited vertices from prior components are skipped."
    },
    {
      "label": "Return",
      "title": "Return all components",
      "note": "Components are emitted as SCC groups.",
      "activeLine": 35,
      "codeInsight": "The result is a list of vertex groups, not traversal order."
    }
  ],
  "complexity": {
    "time": "O(V + E).",
    "space": "O(V + E)."
  },
  "quiz": {
    "question": "Which state keeps Kosaraju’s Algorithm correct?",
    "options": [
      {
        "key": "A",
        "text": "order follows the page's own transition rule.",
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
  "algorithmSlug": "kosaraju",
  "runnerInput": [
    {
      "A": [
        "B"
      ],
      "B": [
        "C"
      ],
      "C": [
        "A",
        "D"
      ],
      "D": [
        "E"
      ],
      "E": [
        "D"
      ]
    }
  ],
  "animation": {
    "static": true,
    "type": "graph-flow",
    "title": "Kosaraju two-pass SCC trace",
    "ruleLabel": "SCC invariant",
    "rule": "Finish order on the original graph guides component collection on the reversed graph.",
    "nodes": [
      {
        "id": "A",
        "label": "A",
        "x": 120,
        "y": 110
      },
      {
        "id": "B",
        "label": "B",
        "x": 260,
        "y": 70
      },
      {
        "id": "C",
        "label": "C",
        "x": 220,
        "y": 220
      },
      {
        "id": "D",
        "label": "D",
        "x": 420,
        "y": 130
      },
      {
        "id": "E",
        "label": "E",
        "x": 540,
        "y": 210
      }
    ],
    "edges": [
      {
        "from": "A",
        "to": "B",
        "directed": true
      },
      {
        "from": "B",
        "to": "C",
        "directed": true
      },
      {
        "from": "C",
        "to": "A",
        "directed": true
      },
      {
        "from": "C",
        "to": "D",
        "directed": true
      },
      {
        "from": "D",
        "to": "E",
        "directed": true
      },
      {
        "from": "E",
        "to": "D",
        "directed": true
      }
    ],
    "steps": [
      {
        "phase": "DFS pass 1",
        "title": "Finish the A-B-C cycle",
        "note": "A, B, and C share reachability before C leads to D.",
        "ruleLabel": "Finish stack",
        "rule": "C, B, A later than D/E",
        "activeNode": "C",
        "visitedNodes": [
          "A",
          "B",
          "C"
        ],
        "frontierNodes": [
          "A",
          "B",
          "C"
        ],
        "activeEdge": {
          "from": "C",
          "to": "A"
        }
      },
      {
        "phase": "Reverse graph",
        "title": "Flip every edge",
        "note": "Incoming edges become outgoing edges for component collection.",
        "ruleLabel": "Reversed edge",
        "rule": "D -> C replaces C -> D",
        "activeNode": "D",
        "visitedNodes": [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        "frontierNodes": [],
        "activeEdge": {
          "from": "C",
          "to": "D"
        }
      },
      {
        "phase": "Collect SCC 1",
        "title": "Pop A and collect A, C, B",
        "note": "The reversed graph keeps this search inside the first SCC.",
        "ruleLabel": "Component",
        "rule": "{A, B, C}",
        "activeNode": "A",
        "visitedNodes": [
          "A",
          "B",
          "C"
        ],
        "frontierNodes": [
          "A",
          "B",
          "C"
        ],
        "activeEdge": {
          "from": "A",
          "to": "B"
        }
      },
      {
        "phase": "Collect SCC 2",
        "title": "Pop D and collect D, E",
        "note": "D and E reach each other but not A/B/C in this pass.",
        "ruleLabel": "Component",
        "rule": "{D, E}",
        "activeNode": "D",
        "visitedNodes": [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        "frontierNodes": [
          "D",
          "E"
        ],
        "activeEdge": {
          "from": "D",
          "to": "E"
        }
      },
      {
        "phase": "Done",
        "title": "Return SCC groups",
        "note": "Every vertex belongs to exactly one returned component.",
        "ruleLabel": "Answer",
        "rule": "[A,B,C], [D,E]",
        "activeNode": "E",
        "visitedNodes": [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        "frontierNodes": []
      }
    ]
  }
};
