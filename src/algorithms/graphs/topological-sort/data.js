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
  "problem": "Topological Sort repeatedly removes zero-indegree vertices from a DAG.",
  "concept": "Topological Sort is useful when values must be placed into a reliable order before later work can be simple. Use this when the algorithm's ordering invariant and cost fit the input size and stability needs.",
  "logicSummary": "Protect the algorithm's ordering invariant until every value reaches final order.",
  "transitionSummary": "Each step compares or moves values so the unsorted region gets smaller.",
  "codeInsight": "The code keeps visited, distance, parent, indegree, or component state explicit so it is not confused with another graph routine.",
  "realLifeExample": "Use this graph routine when the problem's required result matches its traversal, shortest path, ordering, or connectivity invariant.",
  "whenToUse": "Use it when the graph input and required output match this algorithm's invariant.",
  "memoryTrick": "Topological Sort: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Topological Sort is shown as values moving toward sorted order. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Copy values",
      "text": "Work on a mutable array without changing the original input."
    },
    {
      "title": "Choose invariant",
      "text": "Track the sorted or partitioned region."
    },
    {
      "title": "Move values",
      "text": "Perform the comparison, swap, merge, or placement."
    },
    {
      "title": "Return order",
      "text": "Return the fully sorted array."
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
      "label": "Input array",
      "title": "Copy values",
      "note": "The code starts with the values to reorder.",
      "activeLine": 5,
      "codeInsight": "Defines topologicalSort and names the input graph; edits to those inputs change the visual state and output."
    },
    {
      "label": "Invariant",
      "title": "Track ordered work",
      "note": "The algorithm marks what part is already safe.",
      "activeLine": 5,
      "codeInsight": "Defines topologicalSort and names the input graph; edits to those inputs change the visual state and output."
    },
    {
      "label": "Move",
      "title": "Apply ordering step",
      "note": "The current operation reduces disorder.",
      "activeLine": 6,
      "codeInsight": "Builds indegree as a lookup table so each key has an explicit starting state."
    },
    {
      "label": "Sorted output",
      "title": "Return final order",
      "note": "The result is returned when no unsorted work remains.",
      "activeLine": 18,
      "codeInsight": "Returns order.length === Object.keys(indegree).length ? order : null, the final value maintained by Topological Sort's code path."
    }
  ],
  "complexity": {
    "time": "O(V + E).",
    "space": "O(V)."
  },
  "quiz": {
    "question": "Which state choice keeps Topological Sort correct?",
    "options": [
      {
        "key": "A",
        "text": "Track indices and working array and update it only through Topological Sort's transition.",
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
    "correctText": "Correct. Topological Sort stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Topological Sort needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "graphs",
  "algorithmSlug": "topological-sort",
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
    }
  ],
  "animation": {
    "type": "graph-flow",
    "title": "Topological Sort graph state",
    "ruleLabel": "Graph invariant",
    "rule": "Each step compares or moves values so the unsorted region gets smaller.",
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
        "phase": "Input array",
        "title": "Copy values",
        "note": "The code starts with the values to reorder.",
        "ruleLabel": "Topological Sort invariant",
        "rule": "Defines topologicalSort and names the input graph; edits to those inputs change the visual state and output.",
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
        "title": "Track ordered work",
        "note": "The algorithm marks what part is already safe.",
        "ruleLabel": "Topological Sort invariant",
        "rule": "Defines topologicalSort and names the input graph; edits to those inputs change the visual state and output.",
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
        "phase": "Move",
        "title": "Apply ordering step",
        "note": "The current operation reduces disorder.",
        "ruleLabel": "Topological Sort invariant",
        "rule": "Builds indegree as a lookup table so each key has an explicit starting state.",
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
        "phase": "Sorted output",
        "title": "Return final order",
        "note": "The result is returned when no unsorted work remains.",
        "ruleLabel": "Topological Sort invariant",
        "rule": "Returns order.length === Object.keys(indegree).length ? order : null, the final value maintained by Topological Sort's code path.",
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
