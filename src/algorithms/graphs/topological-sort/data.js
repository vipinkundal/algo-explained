// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "topological-sort",
  "title": "Topological Sort",
  "category": "Graphs",
  "route": "/algorithms/graphs/topological-sort",
  "phase": 2,
  "priority": "high",
  "visualizerType": "dag-order",
  "icon": "hub",
  "codePath": "./src/algorithms/graphs/topological-sort/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Topological Sort is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Topological Sort orders a directed acyclic graph so every prerequisite appears before the work that depends on it.",
  "concept": "Kahn's algorithm repeatedly removes zero-indegree vertices and decreases the indegree of their outgoing neighbors.",
  "logicSummary": "Build indegree counts, enqueue every zero-indegree vertex, pop one safe vertex, and unlock neighbors as counts reach zero.",
  "transitionSummary": "One transition emits a zero-indegree vertex and decrements each dependent neighbor's indegree.",
  "codeInsight": "The queue contains only vertices whose prerequisites are already emitted; a leftover vertex means the graph had a cycle.",
  "realLifeExample": "Use topological sort for course schedules, build steps, migration order, and dependency execution plans.",
  "whenToUse": "Use it on directed acyclic graphs when dependencies must be respected.",
  "memoryTrick": "Topo sort only releases a task when its prerequisite count reaches zero.",
  "visualizerCaption": "Watch zero-indegree vertices leave the DAG and unlock the next tasks.",
  "logicSteps": [
    {
      "title": "Count prerequisites",
      "text": "Compute indegree for every vertex."
    },
    {
      "title": "Seed safe queue",
      "text": "Add all vertices with indegree 0."
    },
    {
      "title": "Emit and decrement",
      "text": "Remove one safe vertex and decrement its outgoing neighbors."
    },
    {
      "title": "Detect cycles",
      "text": "If not every vertex is emitted, the graph was not a DAG."
    }
  ],
  "variables": [
    {
      "name": "graph",
      "purpose": "Directed adjacency list of prerequisite edges."
    },
    {
      "name": "indegree",
      "purpose": "Number of unmet prerequisites per vertex."
    },
    {
      "name": "queue",
      "purpose": "Vertices currently safe to output."
    },
    {
      "name": "order",
      "purpose": "Final dependency-respecting order, or null if a cycle exists."
    }
  ],
  "dryRun": [
    {
      "label": "Count",
      "title": "Build indegree table",
      "note": "A and B have no prerequisites; C waits for A and B.",
      "activeLine": 5,
      "codeInsight": "The first pass creates an indegree slot for every vertex."
    },
    {
      "label": "Queue",
      "title": "Seed A and B",
      "note": "Both A and B can run immediately.",
      "activeLine": 7,
      "codeInsight": "Only indegree-0 vertices enter the queue."
    },
    {
      "label": "Emit A",
      "title": "A unlocks one prerequisite for C",
      "note": "C still waits for B.",
      "activeLine": 13,
      "codeInsight": "Decrementing indegree[next] models one prerequisite being completed."
    },
    {
      "label": "Emit B",
      "title": "B unlocks C",
      "note": "C reaches indegree 0 and enters the queue.",
      "activeLine": 14,
      "codeInsight": "A neighbor is queued exactly when its count becomes zero."
    },
    {
      "label": "Finish",
      "title": "Return a full order",
      "note": "The final order includes all vertices, so the graph is acyclic.",
      "activeLine": 17,
      "codeInsight": "The length check is the cycle guard."
    }
  ],
  "complexity": {
    "time": "O(V + E).",
    "space": "O(V)."
  },
  "quiz": {
    "question": "Which state keeps Topological Sort correct?",
    "options": [
      {
        "key": "A",
        "text": "indegree follows the page's own transition rule.",
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
  "algorithmSlug": "topological-sort",
  "runnerInput": [
    {
      "A": [
        "C"
      ],
      "B": [
        "C",
        "D"
      ],
      "C": [
        "E"
      ],
      "D": [
        "F"
      ],
      "E": [
        "F"
      ],
      "F": []
    }
  ],
  "animation": {
    "static": true,
    "type": "graph-flow",
    "title": "Topological Sort zero-indegree queue",
    "ruleLabel": "DAG invariant",
    "rule": "Only vertices with indegree 0 can be emitted.",
    "nodes": [
      {
        "id": "A",
        "label": "A",
        "x": 90,
        "y": 90
      },
      {
        "id": "B",
        "label": "B",
        "x": 90,
        "y": 220
      },
      {
        "id": "C",
        "label": "C",
        "x": 260,
        "y": 150
      },
      {
        "id": "D",
        "label": "D",
        "x": 260,
        "y": 250
      },
      {
        "id": "E",
        "label": "E",
        "x": 430,
        "y": 110
      },
      {
        "id": "F",
        "label": "F",
        "x": 560,
        "y": 190
      }
    ],
    "edges": [
      {
        "from": "A",
        "to": "C",
        "directed": true
      },
      {
        "from": "B",
        "to": "C",
        "directed": true
      },
      {
        "from": "B",
        "to": "D",
        "directed": true
      },
      {
        "from": "C",
        "to": "E",
        "directed": true
      },
      {
        "from": "D",
        "to": "F",
        "directed": true
      },
      {
        "from": "E",
        "to": "F",
        "directed": true
      }
    ],
    "steps": [
      {
        "phase": "Queue: [A, B]",
        "title": "A and B have indegree 0",
        "note": "They are safe because no prerequisites point into them.",
        "ruleLabel": "Indegree",
        "rule": "A=0, B=0, C=2, D=1, E=1, F=2",
        "activeNode": "A",
        "visitedNodes": [],
        "frontierNodes": [
          "A",
          "B"
        ]
      },
      {
        "phase": "Emit A",
        "title": "A reduces C",
        "note": "C still has one unmet prerequisite after A is emitted.",
        "ruleLabel": "Order",
        "rule": "A",
        "activeNode": "A",
        "visitedNodes": [
          "A"
        ],
        "frontierNodes": [
          "B"
        ],
        "activeEdge": {
          "from": "A",
          "to": "C"
        }
      },
      {
        "phase": "Emit B",
        "title": "B releases C and D",
        "note": "C and D now reach indegree 0.",
        "ruleLabel": "Queue",
        "rule": "[C, D]",
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
          "from": "B",
          "to": "D"
        }
      },
      {
        "phase": "Emit C",
        "title": "C releases E",
        "note": "E is now safe to process.",
        "ruleLabel": "Queue",
        "rule": "[D, E]",
        "activeNode": "C",
        "visitedNodes": [
          "A",
          "B",
          "C"
        ],
        "frontierNodes": [
          "D",
          "E"
        ],
        "activeEdge": {
          "from": "C",
          "to": "E"
        }
      },
      {
        "phase": "Finish",
        "title": "All vertices emitted",
        "note": "D and E unlock F, then F closes the order.",
        "ruleLabel": "Order",
        "rule": "A, B, C, D, E, F",
        "activeNode": "F",
        "visitedNodes": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F"
        ],
        "frontierNodes": []
      }
    ]
  }
};
