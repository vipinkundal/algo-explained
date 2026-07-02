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
  "problem": "Union Find tracks which vertices belong to the same component while merging sets quickly.",
  "concept": "Disjoint Set Union represents each component as a parent tree; find returns the root and union attaches one root to another.",
  "logicSummary": "Initialize every vertex as its own parent, compress paths during find, and union only when two roots differ.",
  "transitionSummary": "One transition checks two roots; if they differ, the lower-rank root points at the higher-rank root.",
  "codeInsight": "The parent array is the component map. Path compression edits parent pointers without changing the component answer.",
  "realLifeExample": "Use Union Find for connectivity queries, Kruskal's MST, grouping accounts, and dynamic component merging.",
  "whenToUse": "Use it when edges arrive as merge operations and you need fast same-component checks.",
  "memoryTrick": "Union Find: ask each node for its root, then merge roots, not leaves.",
  "visualizerCaption": "Watch parent trees merge and path compression flatten component lookups.",
  "logicSteps": [
    {
      "title": "Create singleton sets",
      "text": "Every node starts as its own parent with rank 0."
    },
    {
      "title": "Find roots",
      "text": "Follow parent pointers until the component root is reached."
    },
    {
      "title": "Union roots",
      "text": "Attach one root under the other when the components differ."
    },
    {
      "title": "Return merge results",
      "text": "Each operation reports whether a real merge happened."
    }
  ],
  "variables": [
    {
      "name": "size, operations",
      "purpose": "Number of vertices and the pairs to merge."
    },
    {
      "name": "parent",
      "purpose": "Parent pointer for each component tree."
    },
    {
      "name": "rank",
      "purpose": "Approximate tree height used to keep merges shallow."
    },
    {
      "name": "merge result",
      "purpose": "Boolean per operation: true when two components merged."
    }
  ],
  "dryRun": [
    {
      "label": "Singletons",
      "title": "Each node is its own parent",
      "note": "parent = [0, 1, 2, 3, 4].",
      "activeLine": 5,
      "codeInsight": "Array.from creates one component root per vertex."
    },
    {
      "label": "Union 0-1",
      "title": "Merge roots 0 and 1",
      "note": "The roots differ, so 1 points to 0 and rank[0] grows.",
      "activeLine": 13,
      "codeInsight": "The code updates parent[rootB], not parent[b], so the whole component is merged."
    },
    {
      "label": "Union 1-2",
      "title": "Find compresses 1 to root 0",
      "note": "1 already points to 0, so 2 joins the same component.",
      "activeLine": 7,
      "codeInsight": "find rewrites parent[node] to the root while returning it."
    },
    {
      "label": "Union 3-4",
      "title": "Build a second component",
      "note": "3 and 4 form another component tree.",
      "activeLine": 13,
      "codeInsight": "Separate roots remain separate until a union connects them."
    },
    {
      "label": "Union 2-4",
      "title": "Merge the two components",
      "note": "Root 0 and root 3 differ, so the two sets become one.",
      "activeLine": 15,
      "codeInsight": "Rank decides which root stays higher in the tree."
    }
  ],
  "complexity": {
    "time": "Almost O(1) amortized per operation with path compression and union by rank.",
    "space": "O(V)."
  },
  "quiz": {
    "question": "Which state keeps Disjoint Set Union / Union Find correct?",
    "options": [
      {
        "key": "A",
        "text": "parent follows the page's own transition rule.",
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
  "algorithmSlug": "union-find",
  "runnerInput": [
    5,
    [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        3,
        4
      ],
      [
        2,
        4
      ]
    ]
  ],
  "animation": {
    "static": true,
    "type": "tree-operation",
    "title": "Union Find parent forest",
    "nodes": [
      {
        "id": "0",
        "label": "0",
        "x": 120,
        "y": 80
      },
      {
        "id": "1",
        "label": "1",
        "x": 60,
        "y": 190
      },
      {
        "id": "2",
        "label": "2",
        "x": 180,
        "y": 190
      },
      {
        "id": "3",
        "label": "3",
        "x": 440,
        "y": 90
      },
      {
        "id": "4",
        "label": "4",
        "x": 440,
        "y": 210
      }
    ],
    "edges": [
      {
        "from": "0",
        "to": "1"
      },
      {
        "from": "0",
        "to": "2"
      },
      {
        "from": "3",
        "to": "4"
      }
    ],
    "legend": [
      {
        "className": "current",
        "label": "Find root"
      },
      {
        "className": "target",
        "label": "Root being attached"
      },
      {
        "className": "replacement",
        "label": "Merged root"
      }
    ],
    "steps": [
      {
        "phase": "Make sets",
        "title": "Start with five singleton components",
        "note": "Each vertex is its own root before any union runs.",
        "ruleLabel": "Parents",
        "rule": "0->0, 1->1, 2->2, 3->3, 4->4",
        "activeNode": "0",
        "targetNode": "1",
        "mutedNodes": [
          "1",
          "2",
          "3",
          "4"
        ]
      },
      {
        "phase": "union(0, 1)",
        "title": "Attach 1 under 0",
        "note": "find(0) and find(1) return different roots.",
        "ruleLabel": "Parents",
        "rule": "1 now points to 0",
        "activeNode": "0",
        "targetNode": "1",
        "replacementNode": "0",
        "mutedNodes": [
          "2",
          "3",
          "4"
        ]
      },
      {
        "phase": "union(1, 2)",
        "title": "Compress 1, attach 2 under 0",
        "note": "find(1) follows 1 -> 0, then 2 joins root 0.",
        "ruleLabel": "Parents",
        "rule": "2 now points to 0",
        "activeNode": "1",
        "targetNode": "2",
        "replacementNode": "0",
        "mutedNodes": [
          "3",
          "4"
        ]
      },
      {
        "phase": "union(3, 4)",
        "title": "Create the second component",
        "note": "3 and 4 merge separately from 0, 1, and 2.",
        "ruleLabel": "Parents",
        "rule": "4 now points to 3",
        "activeNode": "3",
        "targetNode": "4",
        "replacementNode": "3"
      },
      {
        "phase": "union(2, 4)",
        "title": "Connect both components",
        "note": "find(2) returns 0 and find(4) returns 3, so the components merge.",
        "ruleLabel": "Answer",
        "rule": "all five vertices are connected",
        "activeNode": "2",
        "targetNode": "4",
        "replacementNode": "0"
      }
    ]
  }
};
