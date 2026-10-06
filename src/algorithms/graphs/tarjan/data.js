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
  "meaning": "Tarjan's Algorithm finds strongly connected components in one DFS using low-link values.",
  "problem": "Tarjan's Algorithm finds strongly connected components in one DFS using low-link values.",
  "concept": "Each vertex gets a discovery index and low-link value; when low[node] equals indices[node], node is the root of an SCC.",
  "logicSummary": "Assign an index, push the node onto a stack, update low-link through tree/back edges, and pop a component at a root.",
  "transitionSummary": "One transition lowers low[node] from an unclosed neighbor or emits a stack suffix as a completed SCC.",
  "codeInsight": "The onStack set distinguishes back edges inside the current SCC search from edges to already-closed components.",
  "realLifeExample": "Use Tarjan for dependency cycles, call graph SCCs, compiler analysis, and directed graph condensation.",
  "whenToUse": "Use it when you need SCCs in one DFS pass with O(V + E) time.",
  "memoryTrick": "Tarjan keeps a stack of unresolved nodes; a root pops one SCC.",
  "visualizerCaption": "Explore Tarjan’s Algorithm through a sample teaching model, then compare it with the runnable result.",
  "logicSteps": [
    {
      "title": "Index node",
      "text": "Give the node discovery and low-link values."
    },
    {
      "title": "Push on stack",
      "text": "The node remains unresolved while it is on the stack."
    },
    {
      "title": "Update low-link",
      "text": "Tree and back edges can lower the current node's low value."
    },
    {
      "title": "Pop component",
      "text": "When low equals index, pop until the root is removed."
    }
  ],
  "variables": [
    {
      "name": "graph",
      "purpose": "Directed adjacency list."
    },
    {
      "name": "indices, low",
      "purpose": "Discovery time and lowest reachable active index per vertex."
    },
    {
      "name": "stack, onStack",
      "purpose": "Unresolved vertices that can still belong to the current SCC."
    },
    {
      "name": "components",
      "purpose": "Strongly connected components emitted by root checks."
    }
  ],
  "dryRun": [
    {
      "label": "Index A",
      "title": "A enters stack",
      "note": "A gets index 0 and low 0.",
      "activeLine": 11,
      "codeInsight": "indices[node] = low[node] = index++ creates the DFS timestamp."
    },
    {
      "label": "Index B/C",
      "title": "B and C join the stack",
      "note": "The DFS follows A -> B -> C.",
      "activeLine": 13,
      "codeInsight": "onStack marks nodes that can still lower low-link values."
    },
    {
      "label": "Back edge",
      "title": "C points back to A",
      "note": "A is on the stack, so low[C] becomes 0.",
      "activeLine": 19,
      "codeInsight": "A back edge updates low[node] with indices[next]."
    },
    {
      "label": "Pop SCC",
      "title": "A is an SCC root",
      "note": "low[A] equals indices[A], so C, B, and A pop together.",
      "activeLine": 23,
      "codeInsight": "The do/while pop emits exactly the component rooted at node."
    },
    {
      "label": "Return",
      "title": "Return components",
      "note": "All SCCs are collected after DFS visits every node.",
      "activeLine": 34,
      "codeInsight": "components is the final SCC list."
    }
  ],
  "complexity": {
    "time": "O(V + E).",
    "space": "O(V)."
  },
  "quiz": {
    "question": "Which explanation best describes Tarjan’s Algorithm?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      },
      {
        "key": "C",
        "text": "Tarjan's Algorithm finds strongly connected components in one DFS using low-link values.",
        "correct": true
      }
    ],
    "correctText": "Correct. Tarjan's Algorithm finds strongly connected components in one DFS using low-link values.",
    "incorrectText": "Try again. Tarjan's Algorithm finds strongly connected components in one DFS using low-link values. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "graphs",
  "algorithmSlug": "tarjan",
  "runnerInput": [
    {
      "A": [
        "B"
      ],
      "B": [
        "C"
      ],
      "C": [
        "A",
        "D"
      ],
      "D": [
        "E"
      ],
      "E": [
        "D"
      ]
    }
  ],
  "animation": {
    "static": true,
    "type": "graph-flow",
    "title": "Tarjan low-link stack",
    "ruleLabel": "Low-link invariant",
    "rule": "A node is an SCC root when low[node] equals indices[node].",
    "nodes": [
      {
        "id": "A",
        "label": "A",
        "x": 120,
        "y": 110
      },
      {
        "id": "B",
        "label": "B",
        "x": 260,
        "y": 70
      },
      {
        "id": "C",
        "label": "C",
        "x": 220,
        "y": 220
      },
      {
        "id": "D",
        "label": "D",
        "x": 420,
        "y": 130
      },
      {
        "id": "E",
        "label": "E",
        "x": 540,
        "y": 210
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
        "to": "A",
        "directed": true,
        "label": "back"
      },
      {
        "from": "C",
        "to": "D",
        "directed": true
      },
      {
        "from": "D",
        "to": "E",
        "directed": true
      },
      {
        "from": "E",
        "to": "D",
        "directed": true,
        "label": "back"
      }
    ],
    "steps": [
      {
        "phase": "Stack: A",
        "title": "Index A",
        "note": "A starts with index 0 and low 0.",
        "ruleLabel": "low",
        "rule": "A=0",
        "activeNode": "A",
        "visitedNodes": [
          "A"
        ],
        "frontierNodes": [
          "A"
        ]
      },
      {
        "phase": "Stack: A,B,C",
        "title": "DFS reaches C",
        "note": "A, B, and C are unresolved on the stack.",
        "ruleLabel": "low",
        "rule": "A=0, B=1, C=2",
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
        "phase": "Back edge C -> A",
        "title": "C lowers low-link to A",
        "note": "Because A is onStack, low[C] falls to index[A].",
        "ruleLabel": "low",
        "rule": "low[C]=0",
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
          "from": "C",
          "to": "A"
        }
      },
      {
        "phase": "Pop A/B/C",
        "title": "A is the SCC root",
        "note": "low[A] equals index[A], so the stack suffix forms one SCC.",
        "ruleLabel": "Component",
        "rule": "{A, B, C}",
        "activeNode": "A",
        "visitedNodes": [
          "A",
          "B",
          "C"
        ],
        "frontierNodes": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "phase": "Pop D/E",
        "title": "D and E form the next SCC",
        "note": "The second back edge makes D the root of {D, E}.",
        "ruleLabel": "Answer",
        "rule": "[A,B,C], [D,E]",
        "activeNode": "D",
        "visitedNodes": [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        "frontierNodes": [
          "D",
          "E"
        ],
        "activeEdge": {
          "from": "E",
          "to": "D"
        }
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "A graph contains vertices (places) and edges (connections). Arrows mean a connection can be followed only in that direction.",
    "family": "Graphs and connections",
    "example": "Index node: Give the node discovery and low-link values. Push on stack: The node remains unresolved while it is on the stack. Update low-link: Tree and back edges can lower the current node's low value. Pop component: When low equals index, pop until the root is removed.",
    "sampleInput": [
      {
        "A": [
          "B"
        ],
        "B": [
          "C"
        ],
        "C": [
          "A",
          "D"
        ],
        "D": [
          "E"
        ],
        "E": [
          "D"
        ]
      }
    ],
    "sampleResult": [
      [
        "E",
        "D"
      ],
      [
        "C",
        "B",
        "A"
      ]
    ],
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
    "checkpoint": "Explain this in your own words: Tarjan's Algorithm finds strongly connected components in one DFS using low-link values."
  },
  "relatedLinks": []
};
