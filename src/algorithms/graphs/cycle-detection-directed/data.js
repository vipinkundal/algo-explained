// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "cycle-detection-directed",
  "title": "Cycle Detection in Directed Graph",
  "category": "Graphs",
  "route": "/algorithms/graphs/cycle-detection-directed",
  "phase": 2,
  "priority": "high",
  "visualizerType": "graph-recursion-stack",
  "icon": "hub",
  "codePath": "./src/algorithms/graphs/cycle-detection-directed/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Cycle Detection in Directed Graph is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Directed cycle detection finds a back edge into the active DFS recursion stack.",
  "concept": "A directed graph has a cycle when DFS reaches a vertex that is already on the current recursion path.",
  "logicSummary": "Keep two sets: visited for fully discovered vertices and active for the current DFS path.",
  "transitionSummary": "Entering a node adds it to active; leaving removes it; seeing an active neighbor proves a cycle.",
  "codeInsight": "The active set is separate from visited because a previously finished vertex is safe, but an active vertex is a back edge.",
  "realLifeExample": "Use directed cycle detection for dependency graphs, course prerequisites, build pipelines, and import graphs.",
  "whenToUse": "Use it when edges have direction and you need to know whether any dependency chain loops back on itself.",
  "memoryTrick": "Directed cycle: visited means seen before; active means still on the current path.",
  "visualizerCaption": "Watch the recursion stack highlight the back edge that proves a directed cycle.",
  "logicSteps": [
    {
      "title": "Start DFS",
      "text": "Pick any unvisited vertex and begin a DFS path."
    },
    {
      "title": "Mark active",
      "text": "A vertex is active while its outgoing edges are still being explored."
    },
    {
      "title": "Check outgoing edges",
      "text": "A neighbor already in active is a back edge."
    },
    {
      "title": "Unwind or return true",
      "text": "Remove safe vertices from active, or stop immediately when a back edge is found."
    }
  ],
  "variables": [
    {
      "name": "graph",
      "purpose": "Directed adjacency list."
    },
    {
      "name": "visited",
      "purpose": "Vertices that have been entered at least once."
    },
    {
      "name": "active",
      "purpose": "Vertices currently on the recursion path."
    },
    {
      "name": "cycle found",
      "purpose": "Boolean returned as soon as a back edge is detected."
    }
  ],
  "dryRun": [
    {
      "label": "Enter A",
      "title": "A starts the DFS path",
      "note": "A is visited and active while its edge to B is explored.",
      "activeLine": 10,
      "codeInsight": "visited and active are both updated on entry."
    },
    {
      "label": "Enter B",
      "title": "B joins the active path",
      "note": "The path is now A -> B.",
      "activeLine": 14,
      "codeInsight": "The recursive call keeps A active while B runs."
    },
    {
      "label": "Enter C",
      "title": "C joins the active path",
      "note": "The path is now A -> B -> C.",
      "activeLine": 14,
      "codeInsight": "A finished vertex would be ignored, but active vertices are still dangerous."
    },
    {
      "label": "Back edge",
      "title": "D points back to B",
      "note": "B is active, so D -> B closes a directed cycle.",
      "activeLine": 8,
      "codeInsight": "active.has(node) returning true is the exact cycle proof."
    },
    {
      "label": "Return true",
      "title": "Propagate the cycle result",
      "note": "Every recursive caller returns true immediately.",
      "activeLine": 18,
      "codeInsight": "some(...) stops once any DFS root reports a cycle."
    }
  ],
  "complexity": {
    "time": "O(V + E).",
    "space": "O(V)."
  },
  "quiz": {
    "question": "Which state keeps Cycle Detection in Directed Graph correct?",
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
  "algorithmSlug": "cycle-detection-directed",
  "runnerInput": [
    {
      "A": [
        "B"
      ],
      "B": [
        "C"
      ],
      "C": [
        "D",
        "E"
      ],
      "D": [
        "B"
      ],
      "E": []
    }
  ],
  "animation": {
    "type": "graph-flow",
    "title": "Directed cycle recursion stack",
    "ruleLabel": "Back-edge rule",
    "rule": "An edge into active recursion state proves a directed cycle.",
    "nodes": [
      {
        "id": "A",
        "label": "A",
        "x": 90,
        "y": 150
      },
      {
        "id": "B",
        "label": "B",
        "x": 220,
        "y": 70
      },
      {
        "id": "C",
        "label": "C",
        "x": 360,
        "y": 150
      },
      {
        "id": "D",
        "label": "D",
        "x": 500,
        "y": 70
      },
      {
        "id": "E",
        "label": "E",
        "x": 500,
        "y": 230
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
        "to": "D",
        "directed": true
      },
      {
        "from": "D",
        "to": "B",
        "directed": true,
        "label": "back"
      },
      {
        "from": "C",
        "to": "E",
        "directed": true
      }
    ],
    "steps": [
      {
        "phase": "Active: A",
        "title": "A enters recursion",
        "note": "A is visited and active.",
        "ruleLabel": "Active set",
        "rule": "{A}",
        "activeNode": "A",
        "visitedNodes": [
          "A"
        ],
        "frontierNodes": [
          "A"
        ]
      },
      {
        "phase": "Active: A, B",
        "title": "B enters recursion",
        "note": "B is now on the active path.",
        "ruleLabel": "Active set",
        "rule": "{A, B}",
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
        "phase": "Active: A, B, C",
        "title": "C enters recursion",
        "note": "The search is still inside A -> B -> C.",
        "ruleLabel": "Active set",
        "rule": "{A, B, C}",
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
        "phase": "Back edge D -> B",
        "title": "D sees active B",
        "note": "B has not been removed from active, so this edge proves a cycle.",
        "ruleLabel": "Cycle proof",
        "rule": "D -> B where B is active",
        "activeNode": "D",
        "visitedNodes": [
          "A",
          "B",
          "C",
          "D"
        ],
        "frontierNodes": [
          "A",
          "B",
          "C",
          "D"
        ],
        "activeEdge": {
          "from": "D",
          "to": "B"
        }
      },
      {
        "phase": "Cycle: true",
        "title": "Return true",
        "note": "The recursive result propagates to the top-level call.",
        "ruleLabel": "Answer",
        "rule": "cycle found",
        "activeNode": "B",
        "visitedNodes": [
          "A",
          "B",
          "C",
          "D"
        ],
        "frontierNodes": [
          "B",
          "C",
          "D"
        ],
        "activeEdge": {
          "from": "D",
          "to": "B"
        }
      }
    ],
    "static": true
  }
};
