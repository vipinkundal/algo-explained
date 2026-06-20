// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this data-structure page without touching app.js.

export const algorithmPage = {
  "id": "ds-bst-basics",
  "title": "BST Basics",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Trees / BST / AVL / Heap",
  "sourceFolder": "14_BST",
  "sourceFile": "01_bst.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/bst-basics",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "bst-operations",
  "icon": "account_tree",
  "codePath": "./src/algorithms/data-structures/bst-basics/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/bst-basics/code/original.cpp",
  "originalCodeFilename": "01_bst.cpp",
  "originalActiveLine": 7,
  "meaning": "BST Basics shows how data is organized, changed, and inspected through a small browser demo with the original C/C++ reference available beside it.",
  "problem": "BST Basics explains the search-tree state model and how one focused change updates it.",
  "concept": "Data structures are easier to learn when each value has a clear place and every change preserves a rule.",
  "logicSummary": "Track the active state, compare keys and choose a branch, and inspect the updated view.",
  "transitionSummary": "Move one step forward by changing only the slots, links, cursors, or nodes required by this operation.",
  "codeInsight": "Use the Runnable JS tab to edit inputs and see browser-safe output. Use the Original C/C++ tab to study the source implementation.",
  "originalCodeInsight": "The C/C++ Node struct is the memory layout: data stores the value and next/child pointers connect the structure.",
  "realLifeExample": "BST Basics is useful when you need to understand the mechanics behind library-level data structures.",
  "whenToUse": "Use this page when learning Trees / BST / AVL / Heap behavior through state changes instead of memorized code.",
  "memoryTrick": "Name the moving part first, then ask which invariant must still be true.",
  "visualizerCaption": "A bst operations walkthrough for BST Basics.",
  "logicSteps": [
    {
      "title": "Map the state",
      "text": "Identify the values BST Basics needs before any operation starts."
    },
    {
      "title": "Set the rule",
      "text": "Name the search-tree invariant that should remain true after the step."
    },
    {
      "title": "Apply one change",
      "text": "Run the next action: compare keys and choose a branch."
    },
    {
      "title": "Read the view",
      "text": "Compare the before and after state to confirm the transition."
    }
  ],
  "variables": [
    {
      "name": "root key",
      "purpose": "Starts every comparison path in the search tree."
    },
    {
      "name": "branch choice",
      "purpose": "Records whether the next move goes left or right."
    },
    {
      "name": "matched node",
      "purpose": "Holds the node found by the comparison path."
    },
    {
      "name": "ordered keys",
      "purpose": "Shows the tree values while preserving sorted order."
    }
  ],
  "dryRun": [
    {
      "label": "State map",
      "title": "Prepare the working view",
      "note": "Start with the values that BST Basics needs to inspect or change.",
      "activeLine": 1,
      "codeInsight": "The JS companion builds a compact state you can edit safely in the browser.",
      "originalCodeInsight": "The C/C++ Node struct is the memory layout: data stores the value and next/child pointers connect the structure."
    },
    {
      "label": "Cursor move",
      "title": "Choose the active part",
      "note": "Focus on the root key before changing anything else.",
      "activeLine": 4,
      "codeInsight": "Keeping the active part explicit makes the output easier to debug.",
      "originalCodeInsight": "Initialization lines define the valid memory shape before mutation begins."
    },
    {
      "label": "State change",
      "title": "Apply the rule",
      "note": "Perform one search-tree update and keep the invariant intact.",
      "activeLine": 7,
      "codeInsight": "This line group performs the browser-safe version of the same data-structure transition.",
      "originalCodeInsight": "The important lines update the pointer, index, child link, cursor, or stored value."
    },
    {
      "label": "Visible result",
      "title": "Inspect the answer",
      "note": "Read the ordered keys after the update.",
      "activeLine": 10,
      "codeInsight": "The return object exposes the updated state so edits have immediate feedback.",
      "originalCodeInsight": "Display, return, or cout lines reveal the observable result."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying BST Basics?",
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
    "bst-search",
    "bst-insert",
    "bst-delete"
  ],
  "relatedLinks": [
    {
      "id": "bst-search",
      "title": "BST Search",
      "label": "Existing algorithm lesson"
    },
    {
      "id": "bst-insert",
      "title": "BST Insert",
      "label": "Existing algorithm lesson"
    },
    {
      "id": "bst-delete",
      "title": "BST Delete",
      "label": "Existing algorithm lesson"
    }
  ],
  "runnerInput": [],
  "categorySlug": "data-structures",
  "algorithmSlug": "bst-basics"
};
