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
  "problem": "Bellman-Ford relaxes every edge repeatedly, so it can handle negative edges and detect negative cycles.",
  "concept": "Bellman-Ford Algorithm is useful when graph structure can be solved by maintaining distance table. Use this when the required result is shortest-path relaxation.",
  "logicSummary": "Initialize graph input and distance table, choose the next work item, then relax outgoing edges when a better distance is found.",
  "transitionSummary": "Each step consumes one vertex or edge and updates distance table without losing the graph invariant.",
  "codeInsight": "The code keeps visited, distance, parent, indegree, or component state explicit so it is not confused with another graph routine.",
  "realLifeExample": "Use this graph routine when the problem's required result matches its traversal, shortest path, ordering, or connectivity invariant.",
  "whenToUse": "Use it when the graph input and required output match this algorithm's invariant.",
  "memoryTrick": "Bellman-Ford Algorithm: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Bellman-Ford Algorithm is shown as graph frontier/state updates. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Read graph",
      "text": "Identify vertices, edges, weights, and start state."
    },
    {
      "title": "Build graph state",
      "text": "Create the distance table."
    },
    {
      "title": "Process work item",
      "text": "Relax outgoing edges when a better distance is found."
    },
    {
      "title": "Return graph result",
      "text": "Return the shortest-path relaxation."
    }
  ],
  "variables": [
    {
      "name": "vertices",
      "purpose": "The nodes whose shortest distance must be computed."
    },
    {
      "name": "edges",
      "purpose": "Directed weighted connections tested during every pass."
    },
    {
      "name": "distance",
      "purpose": "Best known cost from the start vertex to each vertex."
    },
    {
      "name": "hasNegativeCycle",
      "purpose": "A final check that becomes true if any edge can still relax."
    }
  ],
  "dryRun": [
    {
      "label": "Graph",
      "title": "Read graph input",
      "note": "Use vertices A, B, C and weighted edges A -> B (1), B -> C (2), and A -> C (5).",
      "activeLine": 5,
      "codeInsight": "The function receives vertices, weighted directed edges, and the start vertex."
    },
    {
      "label": "Start distance",
      "title": "Initialize distances",
      "note": "Every vertex starts at infinity except A, because the distance from A to itself is 0.",
      "activeLine": 7,
      "codeInsight": "Lines 6-7 create the distance table and set only the start vertex to 0."
    },
    {
      "label": "Relax A -> B",
      "title": "Improve B",
      "note": "A is reachable with cost 0, so A -> B gives B a better cost of 1.",
      "activeLine": 11,
      "codeInsight": "The relaxation condition succeeds, so distance[B] becomes distance[A] + 1."
    },
    {
      "label": "Relax B -> C",
      "title": "Improve C",
      "note": "B is now reachable with cost 1, so B -> C improves C from infinity to 3.",
      "activeLine": 11,
      "codeInsight": "The same rule applies again: distance[C] becomes distance[B] + 2."
    },
    {
      "label": "Check A -> C",
      "title": "Skip worse edge",
      "note": "A -> C costs 5, but C already has cost 3, so the table does not change.",
      "activeLine": 10,
      "codeInsight": "The if statement blocks a worse route from overwriting the better distance."
    },
    {
      "label": "Next pass",
      "title": "Repeat edge scan",
      "note": "The second pass checks every edge again, but no distance improves.",
      "activeLine": 8,
      "codeInsight": "Bellman-Ford repeats edge scans V - 1 times so longer paths can propagate."
    },
    {
      "label": "Cycle check",
      "title": "Detect negative cycle",
      "note": "A final scan asks whether any edge can still improve a distance.",
      "activeLine": 15,
      "codeInsight": "If an edge can still relax after V - 1 passes, a reachable negative cycle exists."
    },
    {
      "label": "Result",
      "title": "Return distances",
      "note": "The final answer is A: 0, B: 1, C: 3 with no negative cycle.",
      "activeLine": 16,
      "codeInsight": "The function returns both the shortest-distance table and the negative-cycle flag."
    }
  ],
  "animation": {
    "type": "edge-relaxation",
    "title": "Bellman-Ford edge relaxation",
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
        "x": 330,
        "y": 78
      },
      {
        "id": "C",
        "label": "C",
        "x": 530,
        "y": 200
      }
    ],
    "edges": [
      {
        "from": "A",
        "to": "B",
        "weight": 1
      },
      {
        "from": "B",
        "to": "C",
        "weight": 2
      },
      {
        "from": "A",
        "to": "C",
        "weight": 5
      }
    ],
    "steps": [
      {
        "pass": "Input",
        "title": "Graph loaded",
        "note": "The weighted directed graph is ready, but no shortest paths have been calculated yet.",
        "distances": {
          "A": "∞",
          "B": "∞",
          "C": "∞"
        }
      },
      {
        "pass": "Setup",
        "title": "Start at A",
        "note": "A becomes 0 and every other vertex stays infinity until an edge proves a cheaper route.",
        "relaxedNode": "A",
        "distances": {
          "A": 0,
          "B": "∞",
          "C": "∞"
        }
      },
      {
        "pass": "Pass 1",
        "title": "Relax A -> B",
        "note": "0 + 1 is better than infinity, so B becomes 1.",
        "activeEdge": {
          "from": "A",
          "to": "B"
        },
        "relaxedNode": "B",
        "distances": {
          "A": 0,
          "B": 1,
          "C": "∞"
        }
      },
      {
        "pass": "Pass 1",
        "title": "Relax B -> C",
        "note": "1 + 2 is better than infinity, so C becomes 3.",
        "activeEdge": {
          "from": "B",
          "to": "C"
        },
        "relaxedNode": "C",
        "distances": {
          "A": 0,
          "B": 1,
          "C": 3
        }
      },
      {
        "pass": "Pass 1",
        "title": "Check A -> C",
        "note": "0 + 5 is worse than the current C distance of 3, so C stays unchanged.",
        "activeEdge": {
          "from": "A",
          "to": "C"
        },
        "distances": {
          "A": 0,
          "B": 1,
          "C": 3
        }
      },
      {
        "pass": "Pass 2",
        "title": "No more improvements",
        "note": "The next pass scans all edges again, but every proposed route is already worse or equal.",
        "activeEdge": {
          "from": "A",
          "to": "B"
        },
        "distances": {
          "A": 0,
          "B": 1,
          "C": 3
        }
      },
      {
        "pass": "Final scan",
        "title": "Check negative cycle",
        "note": "No edge can still improve a distance, so there is no reachable negative cycle.",
        "distances": {
          "A": 0,
          "B": 1,
          "C": 3
        }
      },
      {
        "pass": "Answer",
        "title": "Return shortest paths",
        "note": "Bellman-Ford returns the final distance table and hasNegativeCycle: false.",
        "distances": {
          "A": 0,
          "B": 1,
          "C": 3
        }
      }
    ]
  },
  "complexity": {
    "time": "O(VE).",
    "space": "O(V)."
  },
  "quiz": {
    "question": "Which state choice keeps Bellman-Ford Algorithm correct?",
    "options": [
      {
        "key": "A",
        "text": "Track visited and frontier and update it only through Bellman-Ford Algorithm's transition.",
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
    "correctText": "Correct. Bellman-Ford Algorithm stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Bellman-Ford Algorithm needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "graphs",
  "algorithmSlug": "bellman-ford",
  "runnerInput": [
    [
      "A",
      "B",
      "C"
    ],
    [
      [
        "A",
        "B",
        1
      ],
      [
        "B",
        "C",
        2
      ],
      [
        "A",
        "C",
        5
      ]
    ],
    "A"
  ]
};
