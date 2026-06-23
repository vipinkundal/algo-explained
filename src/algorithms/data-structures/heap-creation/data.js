// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-heap-creation",
  "title": "Heap Creation",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Trees / BST / AVL / Heap",
  "sourceFolder": "17_Heap",
  "sourceFile": "create_heap.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/heap-creation",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "heap-operations",
  "icon": "priority_high",
  "codePath": "./src/algorithms/data-structures/heap-creation/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/heap-creation/code/original.cpp",
  "originalCodeFilename": "create_heap.cpp",
  "originalActiveLine": 6,
  "meaning": "Heap Creation shows how data is organized, changed, and inspected through a small browser demo with a C/C++ reference available beside it.",
  "problem": "Heap Creation explains the heap state model and how one focused change updates it.",
  "concept": "Heap Creation is useful when tree structure lets each node decide the next smaller piece of work. Use this when the answer depends on balance invariant.",
  "logicSummary": "Start at the root, maintain balance invariant, rotate or recolor when height/color rules are violated, and return the tree-specific result.",
  "transitionSummary": "Each step focuses on one node and uses balance invariant to decide the next child, rotation, or returned value.",
  "codeInsight": "Use the Runnable JS tab to edit inputs and see browser-safe output. Use the C/C++ Reference tab to study the source implementation.",
  "originalCodeInsight": "The loop is the transition: it repeatedly visits elements or nodes and updates the structure state.",
  "realLifeExample": "Heap Creation is useful when you need to understand the mechanics behind library-level data structures.",
  "whenToUse": "Use this page when learning Trees / BST / AVL / Heap behavior through state changes instead of memorized code.",
  "memoryTrick": "Heap Creation: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Heap Creation is shown as node-by-node tree state. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Check node",
      "text": "Handle an empty root or finished subtree."
    },
    {
      "title": "Read node state",
      "text": "Inspect balance invariant."
    },
    {
      "title": "Move/combine",
      "text": "rotate or recolor when height/color rules are violated."
    },
    {
      "title": "Return tree result",
      "text": "Return traversal output, path result, or updated tree state."
    }
  ],
  "variables": [
    {
      "name": "priority root",
      "purpose": "Stores the highest-priority value in the heap."
    },
    {
      "name": "candidate child",
      "purpose": "The child compared during heap adjustment."
    },
    {
      "name": "swap path",
      "purpose": "Records the movement needed to restore heap order."
    },
    {
      "name": "heap view",
      "purpose": "Shows the array-backed tree after the operation."
    }
  ],
  "dryRun": [
    {
      "label": "Root",
      "title": "Check current node",
      "note": "The code starts by handling missing nodes or the current root.",
      "activeLine": 2,
      "codeInsight": "Defines heapCreation as the runnable entry point for this lesson."
    },
    {
      "label": "Node state",
      "title": "Read balance invariant",
      "note": "The current node controls the next step.",
      "activeLine": 3,
      "codeInsight": "Seeds values with the sample values shown in the visualizer, giving the trace concrete cells to inspect."
    },
    {
      "label": "Child step",
      "title": "Rotate or recolor when height/color rules are violated",
      "note": "The algorithm moves to a child, combines a value, or repairs structure.",
      "activeLine": 5,
      "codeInsight": "Returns the final state object { structure: \"max heap\", inserted: values, heap }, exposing the exact fields the visualizer has been tracking."
    },
    {
      "label": "Tree result",
      "title": "Return result",
      "note": "The final traversal, path, measurement, or tree state is returned.",
      "activeLine": 5,
      "codeInsight": "Returns the final state object { structure: \"max heap\", inserted: values, heap }, exposing the exact fields the visualizer has been tracking."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying Heap Creation?",
    "options": [
      {
        "key": "A",
        "text": "The memory/state representation and invariant.",
        "correct": true
      },
      {
        "key": "B",
        "text": "Only the final cout output.",
        "correct": false
      },
      {
        "key": "C",
        "text": "A different algorithm with the same name.",
        "correct": false
      }
    ],
    "correctKey": "A",
    "correctText": "Correct. Data-structure code is easiest to understand when the state representation is clear first.",
    "incorrectText": "Not quite. Start with the structure state, then follow the operation that mutates or reads it."
  },
  "relatedAlgorithmIds": [
    "heapify",
    "max-heap"
  ],
  "relatedLinks": [
    {
      "id": "heapify",
      "title": "Heapify",
      "label": "Existing algorithm lesson"
    },
    {
      "id": "max-heap",
      "title": "Max Heap",
      "label": "Existing algorithm lesson"
    }
  ],
  "runnerInput": [],
  "categorySlug": "data-structures",
  "algorithmSlug": "heap-creation",
  "animation": {
    "type": "tree-operation",
    "title": "Heap Creation tree state",
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
        "ruleLabel": "Heap Creation invariant",
        "rule": "Defines heapCreation as the runnable entry point for this lesson.",
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
        "title": "Read balance invariant",
        "note": "The current node controls the next step.",
        "ruleLabel": "Heap Creation invariant",
        "rule": "Seeds values with the sample values shown in the visualizer, giving the trace concrete cells to inspect.",
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
        "title": "Rotate or recolor when height/color rules are violated",
        "note": "The algorithm moves to a child, combines a value, or repairs structure.",
        "ruleLabel": "Heap Creation invariant",
        "rule": "Returns the final state object { structure: \"max heap\", inserted: values, heap }, exposing the exact fields the visualizer has been tracking.",
        "activeNode": "12",
        "targetNode": "2",
        "replacementNode": "2",
        "mutedNodes": []
      },
      {
        "phase": "Tree result",
        "title": "Return result",
        "note": "The final traversal, path, measurement, or tree state is returned.",
        "ruleLabel": "Heap Creation invariant",
        "rule": "Returns the final state object { structure: \"max heap\", inserted: values, heap }, exposing the exact fields the visualizer has been tracking.",
        "activeNode": "2",
        "targetNode": "6",
        "replacementNode": "6",
        "mutedNodes": []
      }
    ]
  }
};
