// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "trie",
  "title": "Trie Operations",
  "category": "Trees",
  "route": "/algorithms/trees/trie",
  "phase": 3,
  "priority": "high",
  "visualizerType": "prefix-tree",
  "icon": "account_tree",
  "codePath": "./src/algorithms/trees/trie/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Trie Operations is a Trees technique focused on tree result.",
  "problem": "Trie Operations relies on the recursive structure of a tree: solve the current node and combine child results.",
  "concept": "Trie Operations is useful when tree structure lets each node decide the next smaller piece of work. Use this when the answer depends on character path.",
  "logicSummary": "Start at the root, maintain character path, follow or create the child link for the current character, and return the tree-specific result.",
  "transitionSummary": "Each step focuses on one node and uses character path to decide the next child, rotation, or returned value.",
  "codeInsight": "Tree code stays clean when every recursive call returns exactly the information the parent needs.",
  "realLifeExample": "Trie Operations appears when the input is root and the required result is tree result.",
  "whenToUse": "Use Trie Operations when a problem matches the Trees pattern and the expected state changes match a prefix tree dry run.",
  "memoryTrick": "Trie Operations: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Trie Operations is shown as node-by-node tree state. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Check node",
      "text": "Handle an empty root or finished subtree."
    },
    {
      "title": "Read node state",
      "text": "Inspect character path."
    },
    {
      "title": "Move/combine",
      "text": "follow or create the child link for the current character."
    },
    {
      "title": "Return tree result",
      "text": "Return traversal output, path result, or updated tree state."
    }
  ],
  "variables": [
    {
      "name": "input",
      "purpose": "The numeric or collection input used by the bit, math, or foundation routine."
    },
    {
      "name": "trie node and child links",
      "purpose": "The current prefix node and the links followed or created for each character."
    },
    {
      "name": "tree result",
      "purpose": "The value produced by trie after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Move from a node to its child or back from a child to its parent with updated state. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Root",
      "title": "Check current node",
      "note": "The code starts by handling missing nodes or the current root.",
      "activeLine": 5,
      "codeInsight": "Defines trie and names the input words; edits to those inputs change the visual state and output."
    },
    {
      "label": "Node state",
      "title": "Read character path",
      "note": "The current node controls the next step.",
      "activeLine": 6,
      "codeInsight": "Builds root as a structured sample object that the tree, graph, or map visualizer can render directly."
    },
    {
      "label": "Child step",
      "title": "Follow or create the child link for the current character",
      "note": "The algorithm moves to a child, combines a value, or repairs structure.",
      "activeLine": 6,
      "codeInsight": "Builds root as a structured sample object that the tree, graph, or map visualizer can render directly."
    },
    {
      "label": "Tree result",
      "title": "Return result",
      "note": "The final traversal, path, measurement, or tree state is returned.",
      "activeLine": 12,
      "codeInsight": "Returns root, the final value maintained by Trie Operations's code path."
    }
  ],
  "complexity": {
    "time": "O(n) for the educational reference implementation.",
    "space": "O(n) for tracked state when needed."
  },
  "quiz": {
    "question": "Which state choice keeps Trie Operations correct?",
    "options": [
      {
        "key": "A",
        "text": "Track current node and traversal state and update it only through Trie Operations' transition.",
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
    "correctText": "Correct. Trie Operations stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Trie Operations needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "trees",
  "algorithmSlug": "trie",
  "runnerInput": [
    [
      "cat",
      "car"
    ]
  ],
  "animation": {
    "type": "tree-operation",
    "title": "Trie Operations tree state",
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
        "phase": "Root",
        "title": "Check current node",
        "note": "The code starts by handling missing nodes or the current root.",
        "ruleLabel": "Trie Operations invariant",
        "rule": "Defines trie and names the input words; edits to those inputs change the visual state and output.",
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
        "phase": "Node state",
        "title": "Read character path",
        "note": "The current node controls the next step.",
        "ruleLabel": "Trie Operations invariant",
        "rule": "Builds root as a structured sample object that the tree, graph, or map visualizer can render directly.",
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
        "phase": "Child step",
        "title": "Follow or create the child link for the current character",
        "note": "The algorithm moves to a child, combines a value, or repairs structure.",
        "ruleLabel": "Trie Operations invariant",
        "rule": "Builds root as a structured sample object that the tree, graph, or map visualizer can render directly.",
        "activeNode": "12",
        "targetNode": "2",
        "replacementNode": "2",
        "mutedNodes": []
      },
      {
        "phase": "Tree result",
        "title": "Return result",
        "note": "The final traversal, path, measurement, or tree state is returned.",
        "ruleLabel": "Trie Operations invariant",
        "rule": "Returns root, the final value maintained by Trie Operations's code path.",
        "activeNode": "2",
        "targetNode": "6",
        "replacementNode": "6",
        "mutedNodes": []
      }
    ]
  }
};
