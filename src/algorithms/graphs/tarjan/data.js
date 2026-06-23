// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "tarjan",
  "title": "Tarjan’s Algorithm",
  "category": "Graphs",
  "route": "/algorithms/graphs/tarjan",
  "phase": 4,
  "priority": "medium",
  "visualizerType": "low-link",
  "icon": "hub",
  "codePath": "./src/algorithms/graphs/tarjan/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Tarjan’s Algorithm is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Tarjan’s Algorithm uses discovery indices and low-link values to emit strongly connected components in one DFS.",
  "concept": "Tarjan’s Algorithm is useful when graph structure can be solved by maintaining discovery/component state. Use this when the required result is component discovery.",
  "logicSummary": "Initialize graph input and discovery/component state, choose the next work item, then update low-link/order state and emit components.",
  "transitionSummary": "Each step consumes one vertex or edge and updates discovery/component state without losing the graph invariant.",
  "codeInsight": "The code keeps visited, distance, parent, indegree, or component state explicit so it is not confused with another graph routine.",
  "realLifeExample": "Use this graph routine when the problem's required result matches its traversal, shortest path, ordering, or connectivity invariant.",
  "whenToUse": "Use it when the graph input and required output match this algorithm's invariant.",
  "memoryTrick": "Tarjan’s Algorithm: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Tarjan’s Algorithm is shown as graph frontier/state updates. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Read graph",
      "text": "Identify vertices, edges, weights, and start state."
    },
    {
      "title": "Build graph state",
      "text": "Create the discovery/component state."
    },
    {
      "title": "Process work item",
      "text": "Update low-link/order state and emit components."
    },
    {
      "title": "Return graph result",
      "text": "Return the component discovery."
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
      "codeInsight": "Defines tarjan and names the input graph; edits to those inputs change the visual state and output."
    },
    {
      "label": "Discovery Component State",
      "title": "Initialize discovery/component state",
      "note": "Only the graph state owned by this algorithm is created.",
      "activeLine": 7,
      "codeInsight": "Creates the monotonic stack. It stores indexes that are still waiting for a greater value to appear."
    },
    {
      "label": "Work item",
      "title": "Process next vertex or edge",
      "note": "Update low-link/order state and emit components.",
      "activeLine": 6,
      "codeInsight": "Initializes index as mutable state; later branches update it as the search window or traversal changes."
    },
    {
      "label": "Component Discovery",
      "title": "Return component discovery",
      "note": "The final graph state becomes the answer.",
      "activeLine": 34,
      "codeInsight": "Returns components, the final value maintained by Tarjan’s Algorithm's code path."
    }
  ],
  "complexity": {
    "time": "O(V + E).",
    "space": "O(V)."
  },
  "quiz": {
    "question": "Which state choice keeps Tarjan’s Algorithm correct?",
    "options": [
      {
        "key": "A",
        "text": "Track visited and frontier and update it only through Tarjan’s Algorithm's transition.",
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
    "correctText": "Correct. Tarjan’s Algorithm stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Tarjan’s Algorithm needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "graphs",
  "algorithmSlug": "tarjan",
  "runnerInput": [
    {
      "A": [
        "B"
      ],
      "B": [
        "A",
        "C"
      ],
      "C": [
        "D"
      ],
      "D": [
        "C"
      ]
    }
  ],
  "animation": {
    "type": "graph-flow",
    "title": "Tarjan’s Algorithm graph state",
    "ruleLabel": "Graph invariant",
    "rule": "Each step consumes one vertex or edge and updates discovery/component state without losing the graph invariant.",
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
        "ruleLabel": "Tarjan’s Algorithm invariant",
        "rule": "Defines tarjan and names the input graph; edits to those inputs change the visual state and output.",
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
        "phase": "Discovery Component State",
        "title": "Initialize discovery/component state",
        "note": "Only the graph state owned by this algorithm is created.",
        "ruleLabel": "Tarjan’s Algorithm invariant",
        "rule": "Creates the monotonic stack. It stores indexes that are still waiting for a greater value to appear.",
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
        "note": "Update low-link/order state and emit components.",
        "ruleLabel": "Tarjan’s Algorithm invariant",
        "rule": "Initializes index as mutable state; later branches update it as the search window or traversal changes.",
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
        "phase": "Component Discovery",
        "title": "Return component discovery",
        "note": "The final graph state becomes the answer.",
        "ruleLabel": "Tarjan’s Algorithm invariant",
        "rule": "Returns components, the final value maintained by Tarjan’s Algorithm's code path.",
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
