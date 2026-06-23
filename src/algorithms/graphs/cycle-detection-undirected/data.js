// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "cycle-detection-undirected",
  "title": "Cycle Detection in Undirected Graph",
  "category": "Graphs",
  "route": "/algorithms/graphs/cycle-detection-undirected",
  "phase": 2,
  "priority": "high",
  "visualizerType": "graph-visited",
  "icon": "hub",
  "codePath": "./src/algorithms/graphs/cycle-detection-undirected/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Cycle Detection in Undirected Graph is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Undirected cycle detection uses the parent edge to distinguish normal backtracking from a real cycle.",
  "concept": "In an undirected graph, seeing a visited neighbor is a cycle only when that neighbor is not the vertex you came from.",
  "logicSummary": "DFS each component, pass the parent into the recursive call, and reject visited neighbors that are not the parent.",
  "transitionSummary": "One transition visits an unseen neighbor with current as parent; another detects a visited non-parent neighbor.",
  "codeInsight": "The parent parameter is what keeps A-B from being counted twice as a false cycle.",
  "realLifeExample": "Use it for detecting loops in undirected networks, roads, cable layouts, and component validation.",
  "whenToUse": "Use it when graph edges are bidirectional and you need to know whether any component contains a loop.",
  "memoryTrick": "Undirected cycle: visited is okay only if it is your parent.",
  "visualizerCaption": "Watch the DFS parent check separate the return edge from the edge that proves a cycle.",
  "logicSteps": [
    {
      "title": "Start a component",
      "text": "Run DFS from any vertex that is not yet visited."
    },
    {
      "title": "Carry parent",
      "text": "Pass the previous vertex into the recursive call."
    },
    {
      "title": "Check neighbors",
      "text": "Recurse into unseen neighbors; visited non-parent neighbors prove a cycle."
    },
    {
      "title": "Return result",
      "text": "Stop when any component reports a cycle."
    }
  ],
  "variables": [
    {
      "name": "graph",
      "purpose": "Undirected adjacency list where each edge appears both ways."
    },
    {
      "name": "visited",
      "purpose": "Vertices already reached in the current or earlier component."
    },
    {
      "name": "parent",
      "purpose": "The vertex that led into the current vertex."
    },
    {
      "name": "cycle found",
      "purpose": "Boolean answer returned after the first non-parent revisit."
    }
  ],
  "dryRun": [
    {
      "label": "Visit A",
      "title": "Start from A",
      "note": "A has no parent because it is the component root.",
      "activeLine": 8,
      "codeInsight": "visited.add(node) marks A before checking neighbors."
    },
    {
      "label": "Visit B",
      "title": "Move from A to B",
      "note": "A becomes B's parent.",
      "activeLine": 11,
      "codeInsight": "The recursive call remembers where B came from."
    },
    {
      "label": "Visit C",
      "title": "Move from B to C",
      "note": "B becomes C's parent.",
      "activeLine": 11,
      "codeInsight": "Unseen neighbors are explored normally."
    },
    {
      "label": "Find A",
      "title": "C sees visited A",
      "note": "A is visited and A is not C's parent, so the triangle is a cycle.",
      "activeLine": 12,
      "codeInsight": "next !== parent is the exact undirected cycle check."
    },
    {
      "label": "Return true",
      "title": "Cycle found",
      "note": "The true result bubbles out of the DFS.",
      "activeLine": 16,
      "codeInsight": "The outer some(...) only needs one component to report true."
    }
  ],
  "complexity": {
    "time": "O(V + E).",
    "space": "O(V)."
  },
  "quiz": {
    "question": "Which state keeps Cycle Detection in Undirected Graph correct?",
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
  "algorithmSlug": "cycle-detection-undirected",
  "runnerInput": [
    {
      "A": [
        "B",
        "C"
      ],
      "B": [
        "A",
        "C"
      ],
      "C": [
        "A",
        "B",
        "D"
      ],
      "D": [
        "C"
      ]
    }
  ],
  "animation": {
    "type": "graph-flow",
    "title": "Undirected cycle parent check",
    "ruleLabel": "Parent rule",
    "rule": "A visited neighbor is safe only when it is the parent edge.",
    "nodes": [
      {
        "id": "A",
        "label": "A",
        "x": 140,
        "y": 90
      },
      {
        "id": "B",
        "label": "B",
        "x": 340,
        "y": 90
      },
      {
        "id": "C",
        "label": "C",
        "x": 240,
        "y": 230
      },
      {
        "id": "D",
        "label": "D",
        "x": 500,
        "y": 230
      }
    ],
    "edges": [
      {
        "from": "A",
        "to": "B"
      },
      {
        "from": "B",
        "to": "C"
      },
      {
        "from": "C",
        "to": "A"
      },
      {
        "from": "C",
        "to": "D"
      }
    ],
    "steps": [
      {
        "phase": "A parent: null",
        "title": "Start DFS at A",
        "note": "A is the root of this component.",
        "ruleLabel": "Parent",
        "rule": "A <- null",
        "activeNode": "A",
        "visitedNodes": [
          "A"
        ],
        "frontierNodes": [
          "A"
        ]
      },
      {
        "phase": "B parent: A",
        "title": "Traverse A-B",
        "note": "B's parent is A, so the B-A edge is expected.",
        "ruleLabel": "Parent",
        "rule": "B <- A",
        "activeNode": "B",
        "visitedNodes": [
          "A",
          "B"
        ],
        "frontierNodes": [
          "A",
          "B"
        ],
        "activeEdge": {
          "from": "A",
          "to": "B"
        }
      },
      {
        "phase": "C parent: B",
        "title": "Traverse B-C",
        "note": "C's parent is B.",
        "ruleLabel": "Parent",
        "rule": "C <- B",
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
          "from": "B",
          "to": "C"
        }
      },
      {
        "phase": "C sees A",
        "title": "Visited non-parent neighbor",
        "note": "A is visited and is not C's parent, so A-B-C-A is a cycle.",
        "ruleLabel": "Cycle proof",
        "rule": "A visited and A != parent(C)",
        "activeNode": "C",
        "visitedNodes": [
          "A",
          "B",
          "C"
        ],
        "frontierNodes": [
          "A"
        ],
        "activeEdge": {
          "from": "C",
          "to": "A"
        }
      },
      {
        "phase": "Cycle: true",
        "title": "Return true",
        "note": "The component contains a cycle.",
        "ruleLabel": "Answer",
        "rule": "cycle found",
        "activeNode": "A",
        "visitedNodes": [
          "A",
          "B",
          "C"
        ],
        "frontierNodes": [
          "A",
          "C"
        ],
        "activeEdge": {
          "from": "C",
          "to": "A"
        }
      }
    ],
    "static": true
  }
};
