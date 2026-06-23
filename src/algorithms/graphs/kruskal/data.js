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
  "problem": "Kruskal’s Algorithm sorts edges and uses Union Find to avoid cycles while building an MST.",
  "concept": "Kruskal’s Algorithm is useful when graph structure can be solved by maintaining chosen edge set. Use this when the required result is minimum-spanning-tree growth.",
  "logicSummary": "Initialize graph input and chosen edge set, choose the next work item, then add the cheapest safe edge.",
  "transitionSummary": "Each step consumes one vertex or edge and updates chosen edge set without losing the graph invariant.",
  "codeInsight": "The code keeps visited, distance, parent, indegree, or component state explicit so it is not confused with another graph routine.",
  "realLifeExample": "Use this graph routine when the problem's required result matches its traversal, shortest path, ordering, or connectivity invariant.",
  "whenToUse": "Use it when the graph input and required output match this algorithm's invariant.",
  "memoryTrick": "Kruskal’s Algorithm: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Kruskal’s Algorithm is shown as graph frontier/state updates. The numbered steps follow the code path used to maintain the main invariant.",
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
      "activeLine": 5,
      "codeInsight": "Defines kruskal and names the input vertexCount, edges; edits to those inputs change the visual state and output."
    },
    {
      "label": "Chosen Edge Set",
      "title": "Initialize chosen edge set",
      "note": "Only the graph state owned by this algorithm is created.",
      "activeLine": 6,
      "codeInsight": "Builds parent from structured fields so the visual trace can show named values instead of an opaque blob."
    },
    {
      "label": "Work item",
      "title": "Process next vertex or edge",
      "note": "Add the cheapest safe edge.",
      "activeLine": 6,
      "codeInsight": "Builds parent from structured fields so the visual trace can show named values instead of an opaque blob."
    },
    {
      "label": "Minimum Spanning Tree Growth",
      "title": "Return minimum-spanning-tree growth",
      "note": "The final graph state becomes the answer.",
      "activeLine": 13,
      "codeInsight": "Returns true, the boolean result reached by the highlighted checks."
    }
  ],
  "complexity": {
    "time": "O(E log E).",
    "space": "O(V)."
  },
  "quiz": {
    "question": "Which state choice keeps Kruskal’s Algorithm correct?",
    "options": [
      {
        "key": "A",
        "text": "Track visited and frontier and update it only through Kruskal’s Algorithm's transition.",
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
    "correctText": "Correct. Kruskal’s Algorithm stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Kruskal’s Algorithm needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "graphs",
  "algorithmSlug": "kruskal",
  "runnerInput": [
    4,
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
        5
      ],
      [
        2,
        3,
        1
      ]
    ]
  ],
  "animation": {
    "type": "graph-flow",
    "title": "Kruskal’s Algorithm graph state",
    "ruleLabel": "Graph invariant",
    "rule": "Each step consumes one vertex or edge and updates chosen edge set without losing the graph invariant.",
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
        "ruleLabel": "Kruskal’s Algorithm invariant",
        "rule": "Defines kruskal and names the input vertexCount, edges; edits to those inputs change the visual state and output.",
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
        "phase": "Chosen Edge Set",
        "title": "Initialize chosen edge set",
        "note": "Only the graph state owned by this algorithm is created.",
        "ruleLabel": "Kruskal’s Algorithm invariant",
        "rule": "Builds parent from structured fields so the visual trace can show named values instead of an opaque blob.",
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
        "note": "Add the cheapest safe edge.",
        "ruleLabel": "Kruskal’s Algorithm invariant",
        "rule": "Builds parent from structured fields so the visual trace can show named values instead of an opaque blob.",
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
        "phase": "Minimum Spanning Tree Growth",
        "title": "Return minimum-spanning-tree growth",
        "note": "The final graph state becomes the answer.",
        "ruleLabel": "Kruskal’s Algorithm invariant",
        "rule": "Returns true, the boolean result reached by the highlighted checks.",
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
