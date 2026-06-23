// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-stack-infix-to-postfix-2",
  "title": "Infix to Postfix Conversion",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Stack",
  "sourceFolder": "11_Stack",
  "sourceFile": "06_infix_to_posstfix.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/stack-infix-to-postfix-2",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "stack-operations",
  "icon": "layers",
  "codePath": "./src/algorithms/data-structures/stack-infix-to-postfix-2/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/stack-infix-to-postfix-2/code/original.cpp",
  "originalCodeFilename": "06_infix_to_posstfix.cpp",
  "originalActiveLine": 5,
  "meaning": "Infix to Postfix Conversion shows how data is organized, changed, and inspected through a small browser demo with a C/C++ reference available beside it.",
  "problem": "Infix to Postfix Conversion explains the stack state model and how one focused change updates it.",
  "concept": "Infix to Postfix Conversion is useful when stack behavior is the clearest model for the data changes. Use this when the problem is naturally described by last-in, first-out state.",
  "logicSummary": "Read the next value or operation, maintain last-in, first-out state, then push, pop, peek, or resolve stack entries.",
  "transitionSummary": "Each step changes only the part of the stack required to preserve the invariant.",
  "codeInsight": "Use the Runnable JS tab to edit inputs and see browser-safe output. Use the C/C++ Reference tab to study the source implementation.",
  "originalCodeInsight": "Dynamic allocation creates storage at runtime; every pointer assignment changes how nodes or arrays are connected.",
  "realLifeExample": "Infix to Postfix Conversion is useful when you need to understand the mechanics behind library-level data structures.",
  "whenToUse": "Use this page when learning Stack behavior through state changes instead of memorized code.",
  "memoryTrick": "Infix to Postfix Conversion: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Infix to Postfix Conversion is shown as stack state changes. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Read stack",
      "text": "Identify the next command, value, node, or library call."
    },
    {
      "title": "Inspect stack top",
      "text": "Look at the active stack fields."
    },
    {
      "title": "Push / pop",
      "text": "push, pop, peek, or resolve stack entries."
    },
    {
      "title": "Read result",
      "text": "Return the emitted value or updated structure."
    }
  ],
  "variables": [
    {
      "name": "top marker",
      "purpose": "Points at the most recent item in the stack."
    },
    {
      "name": "stack slots",
      "purpose": "The ordered storage used by Infix to Postfix Conversion."
    },
    {
      "name": "popped item",
      "purpose": "The value removed when the top marker moves down."
    },
    {
      "name": "balance flag",
      "purpose": "Shows whether the stack invariant still holds."
    }
  ],
  "dryRun": [
    {
      "label": "Stack",
      "title": "Read stack action",
      "note": "The code receives the next value or command.",
      "activeLine": 3,
      "codeInsight": "Creates the monotonic stack. It stores indexes that are still waiting for a greater value to appear."
    },
    {
      "label": "Stack top",
      "title": "Inspect stack",
      "note": "The active state must still satisfy last-in, first-out state.",
      "activeLine": 3,
      "codeInsight": "Creates the monotonic stack. It stores indexes that are still waiting for a greater value to appear."
    },
    {
      "label": "Push / pop",
      "title": "Push, pop, peek, or resolve stack entries",
      "note": "Only the necessary stack fields are changed.",
      "activeLine": 5,
      "codeInsight": "Visits each input value once, letting the displayed state update in the same order as the code."
    },
    {
      "label": "Result",
      "title": "Return visible result",
      "note": "The return value or printed state confirms the operation.",
      "activeLine": 7,
      "codeInsight": "Returns the final state object { structure: \"stack\", invariant: \"last in, first out\", state: stack, popped: output }, exposing the exact fields the visualizer has been tracking."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying Infix to Postfix Conversion?",
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
    "stack-basics"
  ],
  "relatedLinks": [
    {
      "id": "stack-basics",
      "title": "Stack Basics",
      "label": "Existing algorithm lesson"
    }
  ],
  "runnerInput": [],
  "categorySlug": "data-structures",
  "algorithmSlug": "stack-infix-to-postfix-2",
  "animation": {
    "type": "stack-queue-flow",
    "title": "Infix to Postfix Conversion stack state",
    "ruleLabel": "stack rule",
    "rule": "Each step changes only the part of the stack required to preserve the invariant.",
    "orientation": "stack",
    "items": [
      4,
      1,
      7,
      3,
      6
    ],
    "steps": [
      {
        "phase": "Stack",
        "title": "Read stack action",
        "note": "The code receives the next value or command.",
        "ruleLabel": "Infix to Postfix Conversion invariant",
        "rule": "Creates the monotonic stack. It stores indexes that are still waiting for a greater value to appear.",
        "activeItems": [
          0
        ],
        "topIndex": 0,
        "queueWindow": [
          0,
          4
        ]
      },
      {
        "phase": "Stack top",
        "title": "Inspect stack",
        "note": "The active state must still satisfy last-in, first-out state.",
        "ruleLabel": "Infix to Postfix Conversion invariant",
        "rule": "Creates the monotonic stack. It stores indexes that are still waiting for a greater value to appear.",
        "activeItems": [
          1
        ],
        "topIndex": 1,
        "queueWindow": [
          1,
          4
        ]
      },
      {
        "phase": "Push / pop",
        "title": "Push, pop, peek, or resolve stack entries",
        "note": "Only the necessary stack fields are changed.",
        "ruleLabel": "Infix to Postfix Conversion invariant",
        "rule": "Visits each input value once, letting the displayed state update in the same order as the code.",
        "activeItems": [
          2
        ],
        "topIndex": 2,
        "queueWindow": [
          2,
          4
        ]
      },
      {
        "phase": "Result",
        "title": "Return visible result",
        "note": "The return value or printed state confirms the operation.",
        "ruleLabel": "Infix to Postfix Conversion invariant",
        "rule": "Returns the final state object { structure: \"stack\", invariant: \"last in, first out\", state: stack, popped: output }, exposing the exact fields the visualizer has been tracking.",
        "activeItems": [
          3
        ],
        "topIndex": 3,
        "queueWindow": [
          3,
          4
        ]
      }
    ]
  }
};
