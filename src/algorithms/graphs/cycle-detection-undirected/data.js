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
  "problem": "Undirected cycle detection tracks each vertex's parent so the edge back to the parent is not mistaken for a cycle.",
  "concept": "Cycle Detection in Undirected Graph is useful when algorithm state behavior is the clearest model for the data changes. Use this when the problem is naturally described by page-specific invariant.",
  "logicSummary": "Read the next value or operation, maintain page-specific invariant, then update the state described by this algorithm.",
  "transitionSummary": "Each step changes only the part of the algorithm state required to preserve the invariant.",
  "codeInsight": "The code keeps visited, distance, parent, indegree, or component state explicit so it is not confused with another graph routine.",
  "realLifeExample": "Use this graph routine when the problem's required result matches its traversal, shortest path, ordering, or connectivity invariant.",
  "whenToUse": "Use it when the graph input and required output match this algorithm's invariant.",
  "memoryTrick": "Cycle Detection in Undirected Graph: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Cycle Detection in Undirected Graph is shown as algorithm state state changes. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Read algorithm state",
      "text": "Identify the next command, value, node, or library call."
    },
    {
      "title": "Inspect invariant",
      "text": "Look at the active algorithm state fields."
    },
    {
      "title": "State change",
      "text": "update the state described by this algorithm."
    },
    {
      "title": "Read result",
      "text": "Return the emitted value or updated structure."
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
      "label": "Algorithm State",
      "title": "Read algorithm state action",
      "note": "The code receives the next value or command.",
      "activeLine": 1,
      "codeInsight": "The code receives the next value or command."
    },
    {
      "label": "Invariant",
      "title": "Inspect algorithm state",
      "note": "The active state must still satisfy page-specific invariant.",
      "activeLine": 3,
      "codeInsight": "The active state must still satisfy page-specific invariant."
    },
    {
      "label": "State change",
      "title": "Update the state described by this algorithm",
      "note": "Only the necessary algorithm state fields are changed.",
      "activeLine": 6,
      "codeInsight": "Only the necessary algorithm state fields are changed."
    },
    {
      "label": "Result",
      "title": "Return visible result",
      "note": "The return value or printed state confirms the operation.",
      "activeLine": 9,
      "codeInsight": "The return value or printed state confirms the operation."
    }
  ],
  "complexity": {
    "time": "O(V + E).",
    "space": "O(V)."
  },
  "quiz": {
    "question": "Which state choice keeps Cycle Detection in Undirected Graph correct?",
    "options": [
      {
        "key": "A",
        "text": "Track visited and frontier and update it only through Cycle Detection in Undirected Graph's transition.",
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
    "correctText": "Correct. Cycle Detection in Undirected Graph stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Cycle Detection in Undirected Graph needs its own input, state, answer, and condition rather than another algorithm's page structure."
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
        "B"
      ]
    }
  ],
  "animation": {
    "type": "graph-flow",
    "title": "Cycle Detection in Undirected Graph graph state",
    "ruleLabel": "Graph invariant",
    "rule": "Each step changes only the part of the algorithm state required to preserve the invariant.",
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
        "phase": "Algorithm State",
        "title": "Read algorithm state action",
        "note": "The code receives the next value or command.",
        "ruleLabel": "Cycle Detection in Undirected Graph invariant",
        "rule": "The code receives the next value or command.",
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
        "phase": "Invariant",
        "title": "Inspect algorithm state",
        "note": "The active state must still satisfy page-specific invariant.",
        "ruleLabel": "Cycle Detection in Undirected Graph invariant",
        "rule": "The active state must still satisfy page-specific invariant.",
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
        "phase": "State change",
        "title": "Update the state described by this algorithm",
        "note": "Only the necessary algorithm state fields are changed.",
        "ruleLabel": "Cycle Detection in Undirected Graph invariant",
        "rule": "Only the necessary algorithm state fields are changed.",
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
        "phase": "Result",
        "title": "Return visible result",
        "note": "The return value or printed state confirms the operation.",
        "ruleLabel": "Cycle Detection in Undirected Graph invariant",
        "rule": "The return value or printed state confirms the operation.",
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
