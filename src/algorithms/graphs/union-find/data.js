// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "union-find",
  "title": "Disjoint Set Union / Union Find",
  "category": "Graphs",
  "route": "/algorithms/graphs/union-find",
  "phase": 3,
  "priority": "high",
  "visualizerType": "parent-tree",
  "icon": "hub",
  "codePath": "./src/algorithms/graphs/union-find/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Disjoint Set Union / Union Find is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Union Find keeps components as parent trees and compresses paths during lookup.",
  "concept": "Disjoint Set Union / Union Find is useful when graph structure can be solved by maintaining parent array. Use this when the required result is component merging.",
  "logicSummary": "Initialize graph input and parent array, choose the next work item, then find roots and union separate sets.",
  "transitionSummary": "Each step consumes one vertex or edge and updates parent array without losing the graph invariant.",
  "codeInsight": "The code keeps visited, distance, parent, indegree, or component state explicit so it is not confused with another graph routine.",
  "realLifeExample": "Use this graph routine when the problem's required result matches its traversal, shortest path, ordering, or connectivity invariant.",
  "whenToUse": "Use it when the graph input and required output match this algorithm's invariant.",
  "memoryTrick": "Disjoint Set Union / Union Find: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Disjoint Set Union / Union Find is shown as graph frontier/state updates. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Read graph",
      "text": "Identify vertices, edges, weights, and start state."
    },
    {
      "title": "Build graph state",
      "text": "Create the parent array."
    },
    {
      "title": "Process work item",
      "text": "Find roots and union separate sets."
    },
    {
      "title": "Return graph result",
      "text": "Return the component merging."
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
      "label": "Graph",
      "title": "Read graph input",
      "note": "The code receives vertices, edges, weights, or adjacency lists.",
      "activeLine": 5,
      "codeInsight": "Defines unionFind and names the input size, operations; edits to those inputs change the visual state and output."
    },
    {
      "label": "Parent Array",
      "title": "Initialize parent array",
      "note": "Only the graph state owned by this algorithm is created.",
      "activeLine": 5,
      "codeInsight": "Defines unionFind and names the input size, operations; edits to those inputs change the visual state and output."
    },
    {
      "label": "Work item",
      "title": "Process next vertex or edge",
      "note": "Find roots and union separate sets.",
      "activeLine": 6,
      "codeInsight": "Builds parent from structured fields so the visual trace can show named values instead of an opaque blob."
    },
    {
      "label": "Component Merging",
      "title": "Return component merging",
      "note": "The final graph state becomes the answer.",
      "activeLine": 16,
      "codeInsight": "Returns true, the boolean result reached by the highlighted checks."
    }
  ],
  "complexity": {
    "time": "Nearly O(1) amortized per operation.",
    "space": "O(V)."
  },
  "quiz": {
    "question": "Which state choice keeps Disjoint Set Union / Union Find correct?",
    "options": [
      {
        "key": "A",
        "text": "Track visited and frontier and update it only through Disjoint Set Union / Union Find's transition.",
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
    "correctText": "Correct. Disjoint Set Union / Union Find stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Disjoint Set Union / Union Find needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "graphs",
  "algorithmSlug": "union-find",
  "runnerInput": [
    4,
    [
      [
        0,
        1
      ],
      [
        2,
        3
      ],
      [
        1,
        2
      ],
      [
        0,
        3
      ]
    ]
  ],
  "animation": {
    "type": "tree-operation",
    "title": "Disjoint Set Union / Union Find tree state",
    "nodes": [
      {
        "id": "8",
        "label": "8",
        "x": 340,
        "y": 58
      },
      {
        "id": "4",
        "label": "4",
        "x": 190,
        "y": 150
      },
      {
        "id": "12",
        "label": "12",
        "x": 490,
        "y": 150
      },
      {
        "id": "2",
        "label": "2",
        "x": 110,
        "y": 255
      },
      {
        "id": "6",
        "label": "6",
        "x": 270,
        "y": 255
      },
      {
        "id": "10",
        "label": "10",
        "x": 420,
        "y": 255
      },
      {
        "id": "14",
        "label": "14",
        "x": 570,
        "y": 255
      }
    ],
    "edges": [
      {
        "from": "8",
        "to": "4"
      },
      {
        "from": "8",
        "to": "12"
      },
      {
        "from": "4",
        "to": "2"
      },
      {
        "from": "4",
        "to": "6"
      },
      {
        "from": "12",
        "to": "10"
      },
      {
        "from": "12",
        "to": "14"
      }
    ],
    "steps": [
      {
        "phase": "Graph",
        "title": "Read graph input",
        "note": "The code receives vertices, edges, weights, or adjacency lists.",
        "ruleLabel": "Disjoint Set Union / Union Find invariant",
        "rule": "Defines unionFind and names the input size, operations; edits to those inputs change the visual state and output.",
        "activeNode": "8",
        "targetNode": "4",
        "replacementNode": "",
        "mutedNodes": [
          "6",
          "10",
          "14"
        ]
      },
      {
        "phase": "Parent Array",
        "title": "Initialize parent array",
        "note": "Only the graph state owned by this algorithm is created.",
        "ruleLabel": "Disjoint Set Union / Union Find invariant",
        "rule": "Defines unionFind and names the input size, operations; edits to those inputs change the visual state and output.",
        "activeNode": "4",
        "targetNode": "12",
        "replacementNode": "",
        "mutedNodes": [
          "6",
          "10",
          "14"
        ]
      },
      {
        "phase": "Work item",
        "title": "Process next vertex or edge",
        "note": "Find roots and union separate sets.",
        "ruleLabel": "Disjoint Set Union / Union Find invariant",
        "rule": "Builds parent from structured fields so the visual trace can show named values instead of an opaque blob.",
        "activeNode": "12",
        "targetNode": "2",
        "replacementNode": "2",
        "mutedNodes": []
      },
      {
        "phase": "Component Merging",
        "title": "Return component merging",
        "note": "The final graph state becomes the answer.",
        "ruleLabel": "Disjoint Set Union / Union Find invariant",
        "rule": "Returns true, the boolean result reached by the highlighted checks.",
        "activeNode": "2",
        "targetNode": "6",
        "replacementNode": "6",
        "mutedNodes": []
      }
    ]
  }
};
