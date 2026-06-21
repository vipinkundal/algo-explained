// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "trie-search",
  "title": "Trie-Based Search",
  "category": "Strings",
  "route": "/algorithms/strings/trie-search",
  "phase": 3,
  "priority": "high",
  "visualizerType": "prefix-tree",
  "icon": "abc",
  "codePath": "./src/algorithms/strings/trie-search/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Trie-Based Search is a Strings technique focused on matches or string result.",
  "problem": "Trie-Based Search turns character comparisons into reusable state so the string is not rechecked from scratch.",
  "concept": "Trie-Based Search is useful when tree structure lets each node decide the next smaller piece of work. Use this when the answer depends on character path.",
  "logicSummary": "Start at the root, maintain character path, follow or create the child link for the current character, and return the tree-specific result.",
  "transitionSummary": "Each step focuses on one node and uses character path to decide the next child, rotation, or returned value.",
  "codeInsight": "String algorithms are safest when index movement is explicit and every mismatch has a defined fallback.",
  "realLifeExample": "Trie-Based Search appears when the input is text and pattern and the required result is matches or string result.",
  "whenToUse": "Use Trie-Based Search when a problem matches the Strings pattern and the expected state changes match a prefix tree dry run.",
  "memoryTrick": "Trie-Based Search: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Trie-Based Search is shown as node-by-node tree state. The numbered steps follow the code path used to maintain the main invariant.",
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
      "name": "match result",
      "purpose": "The value produced by trieSearch after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Each transition consumes one character and updates the prefix, hash, trie, or palindrome state. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Root",
      "title": "Check current node",
      "note": "The code starts by handling missing nodes or the current root.",
      "activeLine": 5,
      "codeInsight": "Defines trieSearch and names the input words, query; edits to those inputs change the visual state and output."
    },
    {
      "label": "Node state",
      "title": "Read character path",
      "note": "The current node controls the next step.",
      "activeLine": 6,
      "codeInsight": "Initializes root, the local state that the next highlighted lines will update."
    },
    {
      "label": "Child step",
      "title": "Follow or create the child link for the current character",
      "note": "The algorithm moves to a child, combines a value, or repairs structure.",
      "activeLine": 6,
      "codeInsight": "Initializes root, the local state that the next highlighted lines will update."
    },
    {
      "label": "Tree result",
      "title": "Return result",
      "note": "The final traversal, path, measurement, or tree state is returned.",
      "activeLine": 17,
      "codeInsight": "Returns Boolean(node.$), the value produced after Trie-Based Search's state changes are complete."
    }
  ],
  "complexity": {
    "time": "O(n) for the educational reference implementation.",
    "space": "O(n) for tracked state when needed."
  },
  "quiz": {
    "question": "Which state choice keeps Trie-Based Search correct?",
    "options": [
      {
        "key": "A",
        "text": "Track indices and prefix/hash state and update it only through Trie-Based Search's transition.",
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
    "correctText": "Correct. Trie-Based Search stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Trie-Based Search needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "strings",
  "algorithmSlug": "trie-search",
  "runnerInput": [
    [
      "cat",
      "car"
    ],
    "car"
  ],
  "animation": {
    "type": "tree-operation",
    "title": "Trie-Based Search tree state",
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
        "ruleLabel": "Trie-Based Search invariant",
        "rule": "Defines trieSearch and names the input words, query; edits to those inputs change the visual state and output.",
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
        "ruleLabel": "Trie-Based Search invariant",
        "rule": "Initializes root, the local state that the next highlighted lines will update.",
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
        "ruleLabel": "Trie-Based Search invariant",
        "rule": "Initializes root, the local state that the next highlighted lines will update.",
        "activeNode": "12",
        "targetNode": "2",
        "replacementNode": "2",
        "mutedNodes": []
      },
      {
        "phase": "Tree result",
        "title": "Return result",
        "note": "The final traversal, path, measurement, or tree state is returned.",
        "ruleLabel": "Trie-Based Search invariant",
        "rule": "Returns Boolean(node.$), the value produced after Trie-Based Search's state changes are complete.",
        "activeNode": "2",
        "targetNode": "6",
        "replacementNode": "6",
        "mutedNodes": []
      }
    ]
  }
};
