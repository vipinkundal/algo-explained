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
  "meaning": "Build a heap so every parent has at least as much priority as its children.",
  "problem": "Build a heap so every parent has at least as much priority as its children.",
  "concept": "Build a heap so every parent has at least as much priority as its children.",
  "logicSummary": "Build a heap so every parent has at least as much priority as its children.",
  "transitionSummary": "In a max heap built from [2, 7, 4], the root is 7, but the rest of the array need not be fully sorted.",
  "codeInsight": "Build a heap so every parent has at least as much priority as its children.",
  "originalCodeInsight": "The loop is the transition: it repeatedly visits elements or nodes and updates the structure state.",
  "realLifeExample": "In a max heap built from [2, 7, 4], the root is 7, but the rest of the array need not be fully sorted.",
  "whenToUse": "Build a heap so every parent has at least as much priority as its children.",
  "memoryTrick": "Build a heap so every parent has at least as much priority as its children.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Build a heap so every parent has at least as much priority as its children."
    },
    {
      "title": "Work through a small case",
      "text": "In a max heap built from [2, 7, 4], the root is 7, but the rest of the array need not be fully sorted."
    },
    {
      "title": "Check the boundary cases",
      "text": "Do not assume a tree is a binary search tree or balanced unless the problem guarantees it."
    }
  ],
  "variables": [
    {
      "name": "values",
      "purpose": "Keeps a sequence of sample or working values for the following operations."
    },
    {
      "name": "heap",
      "purpose": "Holds ordered values so later comparisons or selections can rely on their order."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "Build a heap so every parent has at least as much priority as its children.",
      "activeLine": 2,
      "codeInsight": "Build a heap so every parent has at least as much priority as its children."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "In a max heap built from [2, 7, 4], the root is 7, but the rest of the array need not be fully sorted.",
      "activeLine": 5,
      "codeInsight": "Build a heap so every parent has at least as much priority as its children."
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
  },
  "learningGuide": {
    "mentalModel": "A tree branches from a root. A child is one level below its parent; a leaf has no children.",
    "family": "Trees and links",
    "example": "In a max heap built from [2, 7, 4], the root is 7, but the rest of the array need not be fully sorted.",
    "sampleInput": [],
    "sampleResult": {
      "structure": "max heap",
      "inserted": [
        10,
        20,
        15,
        30,
        40
      ],
      "heap": [
        40,
        30,
        20,
        15,
        10
      ]
    },
    "sampleScope": "This runnable JavaScript companion illustrates the data structure. Its returned snapshot may cover fewer operations than the C/C++ reference. The topic example above explains the named operation.",
    "terms": [
      [
        "Root",
        "The starting node of a tree."
      ],
      [
        "Subtree",
        "A node together with all of its descendants."
      ],
      [
        "Height",
        "The longest downward path; check whether the code counts nodes or edges."
      ]
    ],
    "pitfall": "Do not assume a tree is a binary search tree or balanced unless the problem guarantees it.",
    "checkpoint": "Explain this in your own words: Build a heap so every parent has at least as much priority as its children."
  }
};
