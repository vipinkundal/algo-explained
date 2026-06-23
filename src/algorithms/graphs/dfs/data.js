// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "dfs",
  "title": "Depth-First Search",
  "category": "Graphs",
  "route": "/algorithms/graphs/dfs",
  "phase": 2,
  "priority": "high",
  "visualizerType": "graph-stack",
  "icon": "hub",
  "codePath": "./src/algorithms/graphs/dfs/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Depth-First Search is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Depth-First Search follows one graph branch until it cannot continue, then backtracks.",
  "concept": "DFS uses recursion or an explicit stack to keep the current path active while deeper vertices are explored first.",
  "logicSummary": "Visit a node, mark it, recursively visit each unseen neighbor, then backtrack to the previous call.",
  "transitionSummary": "One transition pushes the next unseen neighbor onto the active path; a later transition returns from that path.",
  "codeInsight": "The recursive call stack is the frontier, so the visualizer highlights the active path instead of a queue.",
  "realLifeExample": "Use DFS for connected components, cycle checks, topological ordering, maze exploration, and tree-style graph problems.",
  "whenToUse": "Use DFS when the answer depends on reachability, exhaustive branch exploration, or entry/exit timing.",
  "memoryTrick": "DFS dives first, then comes back for siblings.",
  "visualizerCaption": "Watch the recursion path grow and shrink as DFS explores one branch before its siblings.",
  "logicSteps": [
    {
      "title": "Enter a vertex",
      "text": "If it was already visited, return immediately."
    },
    {
      "title": "Mark and record",
      "text": "Mark the vertex visited and append it to traversal order."
    },
    {
      "title": "Recurse into neighbors",
      "text": "The first unseen neighbor becomes the next active call."
    },
    {
      "title": "Backtrack",
      "text": "When a node has no unseen neighbors, control returns to its parent call."
    }
  ],
  "variables": [
    {
      "name": "graph, start",
      "purpose": "Adjacency list and starting vertex."
    },
    {
      "name": "visited",
      "purpose": "Set of vertices already entered by DFS."
    },
    {
      "name": "call stack",
      "purpose": "Implicit recursion frontier that stores the current path."
    },
    {
      "name": "order",
      "purpose": "Vertices in first-entry order."
    }
  ],
  "dryRun": [
    {
      "label": "Enter A",
      "title": "Start recursion at A",
      "note": "A becomes the root of the current DFS path.",
      "activeLine": 8,
      "codeInsight": "The visited guard prevents repeated recursion into the same vertex."
    },
    {
      "label": "Dive to B",
      "title": "A calls B",
      "note": "DFS chooses one neighbor and follows it before checking C.",
      "activeLine": 12,
      "codeInsight": "The for loop calls visit(next), so the next vertex is stacked above the current one."
    },
    {
      "label": "Dive to D",
      "title": "B calls D",
      "note": "D has no children, so it returns after being recorded.",
      "activeLine": 10,
      "codeInsight": "order.push(node) records first entry, not exit time."
    },
    {
      "label": "Visit E",
      "title": "Back at B, visit E",
      "note": "After D returns, B continues scanning its remaining neighbors.",
      "activeLine": 12,
      "codeInsight": "Backtracking is just the recursive call returning to its caller."
    },
    {
      "label": "Finish C/F",
      "title": "Return to A, then visit C and F",
      "note": "DFS finishes the B branch before A's C branch.",
      "activeLine": 16,
      "codeInsight": "The final order is driven by adjacency order and recursion depth."
    }
  ],
  "complexity": {
    "time": "O(V + E).",
    "space": "O(V) for visited plus recursion stack."
  },
  "quiz": {
    "question": "Which state keeps Depth-First Search correct?",
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
  "algorithmSlug": "dfs",
  "runnerInput": [
    {
      "A": [
        "B",
        "C"
      ],
      "B": [
        "D",
        "E"
      ],
      "C": [
        "F"
      ],
      "D": [],
      "E": [],
      "F": []
    },
    "A"
  ],
  "animation": {
    "type": "graph-flow",
    "title": "DFS recursion path",
    "ruleLabel": "Recursion invariant",
    "rule": "The active path contains the current chain of unfinished calls.",
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
        "x": 230,
        "y": 70
      },
      {
        "id": "C",
        "label": "C",
        "x": 230,
        "y": 230
      },
      {
        "id": "D",
        "label": "D",
        "x": 390,
        "y": 55
      },
      {
        "id": "E",
        "label": "E",
        "x": 390,
        "y": 150
      },
      {
        "id": "F",
        "label": "F",
        "x": 540,
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
        "from": "A",
        "to": "C",
        "directed": true
      },
      {
        "from": "B",
        "to": "D",
        "directed": true
      },
      {
        "from": "B",
        "to": "E",
        "directed": true
      },
      {
        "from": "C",
        "to": "F",
        "directed": true
      }
    ],
    "steps": [
      {
        "phase": "Path: A",
        "title": "Enter A",
        "note": "A is marked and placed on the active path.",
        "ruleLabel": "Call stack",
        "rule": "A",
        "activeNode": "A",
        "visitedNodes": [
          "A"
        ],
        "frontierNodes": [
          "A"
        ]
      },
      {
        "phase": "Path: A -> B",
        "title": "Dive into B",
        "note": "DFS follows B before C.",
        "ruleLabel": "Call stack",
        "rule": "A -> B",
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
        "phase": "Path: A -> B -> D",
        "title": "Dive into D",
        "note": "D is the deepest active call on this branch.",
        "ruleLabel": "Call stack",
        "rule": "A -> B -> D",
        "activeNode": "D",
        "visitedNodes": [
          "A",
          "B",
          "D"
        ],
        "frontierNodes": [
          "A",
          "B",
          "D"
        ],
        "activeEdge": {
          "from": "B",
          "to": "D"
        }
      },
      {
        "phase": "Path: A -> B -> E",
        "title": "Backtrack and visit E",
        "note": "D returns, then B's next neighbor E becomes active.",
        "ruleLabel": "Call stack",
        "rule": "A -> B -> E",
        "activeNode": "E",
        "visitedNodes": [
          "A",
          "B",
          "D",
          "E"
        ],
        "frontierNodes": [
          "A",
          "B",
          "E"
        ],
        "activeEdge": {
          "from": "B",
          "to": "E"
        }
      },
      {
        "phase": "Path: A -> C -> F",
        "title": "Finish the C branch",
        "note": "Only after B finishes does A recurse into C and then F.",
        "ruleLabel": "Order",
        "rule": "A, B, D, E, C, F",
        "activeNode": "F",
        "visitedNodes": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F"
        ],
        "frontierNodes": [
          "A",
          "C",
          "F"
        ],
        "activeEdge": {
          "from": "C",
          "to": "F"
        }
      }
    ],
    "static": true
  }
};
