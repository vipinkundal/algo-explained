// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "floyd-warshall",
  "title": "Floyd-Warshall Algorithm",
  "category": "Graphs",
  "route": "/algorithms/graphs/floyd-warshall",
  "phase": 3,
  "priority": "medium",
  "visualizerType": "matrix-update",
  "icon": "hub",
  "codePath": "./src/algorithms/graphs/floyd-warshall/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Floyd-Warshall Algorithm is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Floyd-Warshall computes shortest paths between every pair of vertices.",
  "concept": "The algorithm lets each vertex become an intermediate stop and asks whether i -> k -> j improves i -> j.",
  "logicSummary": "Copy the distance matrix, choose an intermediate vertex, and update every from/to pair through that intermediate.",
  "transitionSummary": "One transition replaces dist[from][to] with dist[from][mid] + dist[mid][to] only when that route is shorter.",
  "codeInsight": "The loop order is the algorithm: mid is outside so each phase allows one more intermediate vertex.",
  "realLifeExample": "Use Floyd-Warshall for all-pairs shortest paths on small dense graphs or route tables.",
  "whenToUse": "Use it when you need every source-to-target shortest path and O(V^3) is acceptable.",
  "memoryTrick": "Floyd-Warshall asks: would going through k make this pair cheaper?",
  "visualizerCaption": "Watch a distance matrix improve as each vertex is allowed as an intermediate stop.",
  "logicSteps": [
    {
      "title": "Copy the matrix",
      "text": "Start from direct edge distances."
    },
    {
      "title": "Pick intermediate k",
      "text": "Allow one vertex to be used as a bridge."
    },
    {
      "title": "Update every pair",
      "text": "Compare direct distance with from -> k -> to."
    },
    {
      "title": "Return the matrix",
      "text": "After all k phases, every pair has its shortest distance."
    }
  ],
  "variables": [
    {
      "name": "matrix",
      "purpose": "Initial all-pairs distance table."
    },
    {
      "name": "mid",
      "purpose": "Intermediate vertex currently allowed."
    },
    {
      "name": "from, to",
      "purpose": "Pair being tested against the intermediate route."
    },
    {
      "name": "dist",
      "purpose": "Improving all-pairs shortest-path table."
    }
  ],
  "dryRun": [
    {
      "label": "Copy",
      "title": "Copy direct distances",
      "note": "A large value stands for no direct edge.",
      "activeLine": 5,
      "codeInsight": "The spread copy prevents the input matrix from being mutated."
    },
    {
      "label": "Through B",
      "title": "A reaches C through B",
      "note": "A -> B -> C costs 3 + 2 = 5, better than infinity.",
      "activeLine": 9,
      "codeInsight": "The nested loops compare direct and through-mid costs."
    },
    {
      "label": "Through C",
      "title": "A reaches D through C",
      "note": "A -> C -> D costs 5 + 1 = 6.",
      "activeLine": 9,
      "codeInsight": "Newly improved entries can help later intermediate phases."
    },
    {
      "label": "Through D",
      "title": "B reaches A through D",
      "note": "B -> C -> D -> A becomes 6.",
      "activeLine": 9,
      "codeInsight": "Every ordered pair is checked, not just outgoing edges from one source."
    },
    {
      "label": "Return",
      "title": "Return all-pairs distances",
      "note": "The matrix now stores the best known distance for every source and destination.",
      "activeLine": 14,
      "codeInsight": "The returned matrix is the answer, not a single path."
    }
  ],
  "complexity": {
    "time": "O(V^3).",
    "space": "O(V^2)."
  },
  "quiz": {
    "question": "Which state keeps Floyd-Warshall Algorithm correct?",
    "options": [
      {
        "key": "A",
        "text": "mid follows the page's own transition rule.",
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
  "algorithmSlug": "floyd-warshall",
  "runnerInput": [
    [
      [
        0,
        3,
        99,
        7
      ],
      [
        8,
        0,
        2,
        99
      ],
      [
        5,
        99,
        0,
        1
      ],
      [
        2,
        99,
        99,
        0
      ]
    ]
  ],
  "animation": {
    "static": true,
    "type": "matrix-flow",
    "title": "Floyd-Warshall distance matrix",
    "ruleLabel": "Intermediate rule",
    "rule": "dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])",
    "matrix": [
      [
        0,
        3,
        "∞",
        7
      ],
      [
        8,
        0,
        2,
        "∞"
      ],
      [
        5,
        "∞",
        0,
        1
      ],
      [
        2,
        "∞",
        "∞",
        0
      ]
    ],
    "steps": [
      {
        "phase": "Initial",
        "title": "Direct distances only",
        "note": "The matrix starts with edge weights and infinity for missing edges.",
        "ruleLabel": "Allowed intermediates",
        "rule": "none",
        "activeCells": [
          [
            0,
            1
          ],
          [
            1,
            2
          ],
          [
            2,
            3
          ]
        ],
        "visitedCells": []
      },
      {
        "phase": "k = B",
        "title": "A reaches C through B",
        "note": "A -> B -> C costs 5, so A,C improves from infinity.",
        "ruleLabel": "Update",
        "rule": "dist[A][C] = 5",
        "activeCells": [
          [
            0,
            2
          ]
        ],
        "visitedCells": [
          [
            0,
            1
          ],
          [
            1,
            2
          ],
          [
            0,
            2
          ]
        ]
      },
      {
        "phase": "k = C",
        "title": "A reaches D through C",
        "note": "A -> C -> D costs 6, better than 7.",
        "ruleLabel": "Update",
        "rule": "dist[A][D] = 6",
        "activeCells": [
          [
            0,
            3
          ]
        ],
        "visitedCells": [
          [
            0,
            2
          ],
          [
            2,
            3
          ],
          [
            0,
            3
          ]
        ]
      },
      {
        "phase": "k = D",
        "title": "B reaches A through D",
        "note": "B -> C -> D -> A costs 6.",
        "ruleLabel": "Update",
        "rule": "dist[B][A] = 6",
        "activeCells": [
          [
            1,
            0
          ]
        ],
        "visitedCells": [
          [
            1,
            2
          ],
          [
            2,
            3
          ],
          [
            3,
            0
          ],
          [
            1,
            0
          ]
        ]
      },
      {
        "phase": "Done",
        "title": "All intermediates processed",
        "note": "Every pair has been tested through every possible middle vertex.",
        "ruleLabel": "Answer",
        "rule": "all-pairs shortest paths",
        "activeCells": [
          [
            0,
            0
          ],
          [
            1,
            1
          ],
          [
            2,
            2
          ],
          [
            3,
            3
          ]
        ],
        "visitedCells": [
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ],
          [
            0,
            3
          ],
          [
            1,
            0
          ],
          [
            1,
            1
          ],
          [
            1,
            2
          ],
          [
            1,
            3
          ],
          [
            2,
            0
          ],
          [
            2,
            1
          ],
          [
            2,
            2
          ],
          [
            2,
            3
          ],
          [
            3,
            0
          ],
          [
            3,
            1
          ],
          [
            3,
            2
          ],
          [
            3,
            3
          ]
        ]
      }
    ]
  }
};
