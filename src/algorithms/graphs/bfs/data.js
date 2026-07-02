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
  "problem": "Breadth-First Search explores a graph in layers from a start vertex.",
  "concept": "BFS uses a FIFO queue so every vertex at distance k is processed before any vertex at distance k + 1.",
  "logicSummary": "Mark the start vertex, push it into the queue, pop from the front, and enqueue each unseen neighbor.",
  "transitionSummary": "One transition removes the queue front, appends it to traversal order, and adds newly discovered neighbors to the back.",
  "codeInsight": "The queue is the algorithm: replacing it with a stack would change the page into DFS.",
  "realLifeExample": "Use BFS for shortest path length in unweighted graphs, level-order traversal, friend-of-friend expansion, and nearest target searches.",
  "whenToUse": "Use BFS when edges are unweighted and the answer depends on levels, minimum edge count, or exploring all near states first.",
  "memoryTrick": "BFS is a ripple: everything one edge away is handled before anything two edges away.",
  "visualizerCaption": "Watch the queue frontier expand level by level while visited prevents repeated work.",
  "logicSteps": [
    {
      "title": "Seed the queue",
      "text": "Add the start vertex and mark it visited immediately."
    },
    {
      "title": "Pop the front",
      "text": "The oldest discovered vertex becomes the current vertex."
    },
    {
      "title": "Discover neighbors",
      "text": "Every unseen neighbor is marked and pushed to the back of the queue."
    },
    {
      "title": "Return traversal order",
      "text": "The order records the level-by-level visit sequence."
    }
  ],
  "variables": [
    {
      "name": "graph, start",
      "purpose": "Adjacency list and the vertex where BFS begins."
    },
    {
      "name": "queue",
      "purpose": "FIFO frontier of discovered vertices waiting to be processed."
    },
    {
      "name": "visited",
      "purpose": "Set that prevents the same vertex from entering the queue twice."
    },
    {
      "name": "order",
      "purpose": "The level-order traversal returned by the algorithm."
    }
  ],
  "dryRun": [
    {
      "label": "Start",
      "title": "Mark A and enqueue it",
      "note": "A is discovered before its neighbors, so it enters the queue first.",
      "activeLine": 5,
      "codeInsight": "visited starts with A because discovery and marking happen together."
    },
    {
      "label": "Layer 1",
      "title": "Pop A, enqueue B and C",
      "note": "Both neighbors of A are now known and will be processed before deeper vertices.",
      "activeLine": 10,
      "codeInsight": "queue.shift() gives FIFO behavior: A leaves before B and C run."
    },
    {
      "label": "Expand B",
      "title": "Pop B, enqueue D and E",
      "note": "D and E are distance two from A, so they are appended behind C.",
      "activeLine": 13,
      "codeInsight": "New neighbors are marked before enqueueing so no later edge can enqueue duplicates."
    },
    {
      "label": "Expand C",
      "title": "Pop C, enqueue F",
      "note": "C is still in the first layer, then F joins the next layer.",
      "activeLine": 13,
      "codeInsight": "The same loop handles every adjacency list without mixing traversal rules."
    },
    {
      "label": "Finish",
      "title": "Drain the queue and return order",
      "note": "D, E, and F have no unseen outgoing neighbors, so the traversal is complete.",
      "activeLine": 16,
      "codeInsight": "order is the only returned value; queue and visited are internal control state."
    }
  ],
  "complexity": {
    "time": "O(V + E).",
    "space": "O(V)."
  },
  "quiz": {
    "question": "Which state keeps Breadth-First Search correct?",
    "options": [
      {
        "key": "A",
        "text": "queue follows the page's own transition rule.",
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
  "algorithmSlug": "bfs",
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
    "title": "BFS queue frontier",
    "ruleLabel": "Queue invariant",
    "rule": "Vertices leave the queue in the same order they were discovered.",
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
        "phase": "Queue: [A]",
        "title": "A is discovered first",
        "note": "visited = {A}; queue holds only the start.",
        "ruleLabel": "Queue",
        "rule": "[A]",
        "activeNode": "A",
        "visitedNodes": [
          "A"
        ],
        "frontierNodes": [
          "A"
        ]
      },
      {
        "phase": "Queue: [B, C]",
        "title": "A expands to B and C",
        "note": "The first layer is discovered from A.",
        "ruleLabel": "Queue",
        "rule": "[B, C]",
        "activeNode": "A",
        "visitedNodes": [
          "A"
        ],
        "frontierNodes": [
          "B",
          "C"
        ],
        "activeEdge": {
          "from": "A",
          "to": "C"
        }
      },
      {
        "phase": "Queue: [C, D, E]",
        "title": "B expands next",
        "note": "B leaves the front; D and E join the back.",
        "ruleLabel": "Queue",
        "rule": "[C, D, E]",
        "activeNode": "B",
        "visitedNodes": [
          "A",
          "B",
          "C"
        ],
        "frontierNodes": [
          "C",
          "D",
          "E"
        ],
        "activeEdge": {
          "from": "B",
          "to": "E"
        }
      },
      {
        "phase": "Queue: [D, E, F]",
        "title": "C expands before D",
        "note": "C was discovered before D, so C runs first and discovers F.",
        "ruleLabel": "Queue",
        "rule": "[D, E, F]",
        "activeNode": "C",
        "visitedNodes": [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        "frontierNodes": [
          "D",
          "E",
          "F"
        ],
        "activeEdge": {
          "from": "C",
          "to": "F"
        }
      },
      {
        "phase": "Queue: []",
        "title": "Traversal is complete",
        "note": "All discovered vertices were processed once.",
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
    ],
    "static": true
  }
};
