// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "bfs",
  "title": "Breadth-First Search",
  "category": "Graphs",
  "route": "/algorithms/graphs/bfs",
  "phase": 2,
  "priority": "high",
  "visualizerType": "graph-queue",
  "icon": "hub",
  "codePath": "./src/algorithms/graphs/bfs/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Breadth-First Search is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Breadth-First Search explores a graph level by level with a FIFO queue.",
  "concept": "Breadth-First Search is useful when graph structure can be solved by maintaining queue frontier. Use this when the required result is level-by-level traversal.",
  "logicSummary": "Initialize graph input and queue frontier, choose the next work item, then enqueue newly discovered neighbors.",
  "transitionSummary": "Each step consumes one vertex or edge and updates queue frontier without losing the graph invariant.",
  "codeInsight": "The code keeps visited, distance, parent, indegree, or component state explicit so it is not confused with another graph routine.",
  "realLifeExample": "Use this graph routine when the problem's required result matches its traversal, shortest path, ordering, or connectivity invariant.",
  "whenToUse": "Use it when the graph input and required output match this algorithm's invariant.",
  "memoryTrick": "Breadth-First Search: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Breadth-First Search is shown as graph frontier/state updates. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Read graph",
      "text": "Identify vertices, edges, weights, and start state."
    },
    {
      "title": "Build graph state",
      "text": "Create the queue frontier."
    },
    {
      "title": "Process work item",
      "text": "Enqueue newly discovered neighbors."
    },
    {
      "title": "Return graph result",
      "text": "Return the level-by-level traversal."
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
      "label": "Queue Frontier",
      "title": "Initialize queue frontier",
      "note": "Only the graph state owned by this algorithm is created.",
      "activeLine": 3,
      "codeInsight": "Only the graph state owned by this algorithm is created."
    },
    {
      "label": "Work item",
      "title": "Process next vertex or edge",
      "note": "Enqueue newly discovered neighbors.",
      "activeLine": 6,
      "codeInsight": "Enqueue newly discovered neighbors."
    },
    {
      "label": "Level By Level Traversal",
      "title": "Return level-by-level traversal",
      "note": "The final graph state becomes the answer.",
      "activeLine": 10,
      "codeInsight": "The final graph state becomes the answer."
    }
  ],
  "complexity": {
    "time": "O(V + E).",
    "space": "O(V)."
  },
  "quiz": {
    "question": "Which state choice keeps Breadth-First Search correct?",
    "options": [
      {
        "key": "A",
        "text": "Track queue, visited and update it only through Breadth-First Search's transition.",
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
    "correctText": "Correct. Breadth-First Search stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Breadth-First Search needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "graphs",
  "algorithmSlug": "bfs",
  "runnerInput": [
    {
      "A": [
        "B",
        "C"
      ],
      "B": [
        "D"
      ],
      "C": [
        "D"
      ],
      "D": []
    },
    "A"
  ],
  "animation": {
    "type": "graph-flow",
    "title": "Breadth-First Search graph state",
    "ruleLabel": "Graph invariant",
    "rule": "Each step consumes one vertex or edge and updates queue frontier without losing the graph invariant.",
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
        "ruleLabel": "Breadth-First Search invariant",
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
        "phase": "Queue Frontier",
        "title": "Initialize queue frontier",
        "note": "Only the graph state owned by this algorithm is created.",
        "ruleLabel": "Breadth-First Search invariant",
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
        "note": "Enqueue newly discovered neighbors.",
        "ruleLabel": "Breadth-First Search invariant",
        "rule": "Enqueue newly discovered neighbors.",
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
        "phase": "Level By Level Traversal",
        "title": "Return level-by-level traversal",
        "note": "The final graph state becomes the answer.",
        "ruleLabel": "Breadth-First Search invariant",
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
