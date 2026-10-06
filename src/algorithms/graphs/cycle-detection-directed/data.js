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
  "meaning": "Directed cycle detection finds a back edge into the active DFS recursion stack.",
  "problem": "Directed cycle detection finds a back edge into the active DFS recursion stack.",
  "concept": "A directed graph has a cycle when DFS reaches a vertex that is already on the current recursion path.",
  "logicSummary": "Keep two sets: visited for fully discovered vertices and active for the current DFS path.",
  "transitionSummary": "Entering a node adds it to active; leaving removes it; seeing an active neighbor proves a cycle.",
  "codeInsight": "The active set is separate from visited because a previously finished vertex is safe, but an active vertex is a back edge.",
  "realLifeExample": "Use directed cycle detection for dependency graphs, course prerequisites, build pipelines, and import graphs.",
  "whenToUse": "Use it when edges have direction and you need to know whether any dependency chain loops back on itself.",
  "memoryTrick": "Directed cycle: visited means seen before; active means still on the current path.",
  "visualizerCaption": "Explore Cycle Detection in Directed Graph through a sample teaching model, then compare it with the runnable result.",
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
    "question": "Which explanation best describes Cycle Detection in Directed Graph?",
    "options": [
      {
        "key": "A",
        "text": "Directed cycle detection finds a back edge into the active DFS recursion stack.",
        "correct": true
      },
      {
        "key": "B",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "C",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      }
    ],
    "correctText": "Correct. Directed cycle detection finds a back edge into the active DFS recursion stack.",
    "incorrectText": "Try again. Directed cycle detection finds a back edge into the active DFS recursion stack. Compare the small example in the lesson with your choice."
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
  },
  "learningGuide": {
    "mentalModel": "A graph contains vertices (places) and edges (connections). Arrows mean a connection can be followed only in that direction.",
    "family": "Graphs and connections",
    "example": "Start DFS: Pick any unvisited vertex and begin a DFS path. Mark active: A vertex is active while its outgoing edges are still being explored. Check outgoing edges: A neighbor already in active is a back edge. Unwind or return true: Remove safe vertices from active, or stop immediately when a back edge is found.",
    "sampleInput": [
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
    "sampleResult": true,
    "sampleScope": "This is the result of the unedited JavaScript function with the sample arguments. Changing the input or code can change the result.",
    "terms": [
      [
        "Vertex",
        "One point in a graph; also called a node."
      ],
      [
        "Edge",
        "A connection between vertices."
      ],
      [
        "Visited",
        "A record that a vertex has already been discovered."
      ]
    ],
    "pitfall": "Mark discovered vertices to avoid repeating work. Check directedness and whether every component must be visited.",
    "checkpoint": "Explain this in your own words: Directed cycle detection finds a back edge into the active DFS recursion stack."
  },
  "relatedLinks": []
};
