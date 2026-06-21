// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-stack-infix-to-postfix",
  "title": "Stack Infix To Postfix",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Stack",
  "sourceFolder": "11_Stack",
  "sourceFile": "05_infix_to_postfix.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/stack-infix-to-postfix",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "stack-operations",
  "icon": "layers",
  "codePath": "./src/algorithms/data-structures/stack-infix-to-postfix/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/stack-infix-to-postfix/code/original.cpp",
  "originalCodeFilename": "05_infix_to_postfix.cpp",
  "originalActiveLine": 5,
  "meaning": "Stack Infix To Postfix shows how data is organized, changed, and inspected through a small browser demo with a C/C++ reference available beside it.",
  "problem": "Stack Infix To Postfix explains the stack state model and how one focused change updates it.",
  "concept": "Stack Infix To Postfix is useful when stack behavior is the clearest model for the data changes. Use this when the problem is naturally described by last-in, first-out state.",
  "logicSummary": "Read the next value or operation, maintain last-in, first-out state, then push, pop, peek, or resolve stack entries.",
  "transitionSummary": "Each step changes only the part of the stack required to preserve the invariant.",
  "codeInsight": "Use the Runnable JS tab to edit inputs and see browser-safe output. Use the C/C++ Reference tab to study the source implementation.",
  "originalCodeInsight": "Dynamic allocation creates storage at runtime; every pointer assignment changes how nodes or arrays are connected.",
  "realLifeExample": "Stack Infix To Postfix is useful when you need to understand the mechanics behind library-level data structures.",
  "whenToUse": "Use this page when learning Stack behavior through state changes instead of memorized code.",
  "memoryTrick": "Stack Infix To Postfix: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Stack Infix To Postfix is shown as stack state changes. The numbered steps follow the code path used to maintain the main invariant.",
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
      "purpose": "The ordered storage used by Stack Infix To Postfix."
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
      "activeLine": 1,
      "codeInsight": "The code receives the next value or command."
    },
    {
      "label": "Stack top",
      "title": "Inspect stack",
      "note": "The active state must still satisfy last-in, first-out state.",
      "activeLine": 3,
      "codeInsight": "The active state must still satisfy last-in, first-out state."
    },
    {
      "label": "Push / pop",
      "title": "Push, pop, peek, or resolve stack entries",
      "note": "Only the necessary stack fields are changed.",
      "activeLine": 6,
      "codeInsight": "Only the necessary stack fields are changed."
    },
    {
      "label": "Result",
      "title": "Return visible result",
      "note": "The return value or printed state confirms the operation.",
      "activeLine": 9,
      "codeInsight": "The return value or printed state confirms the operation."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying Stack Infix To Postfix?",
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
  "algorithmSlug": "stack-infix-to-postfix",
  "animation": {
    "type": "stack-queue-flow",
    "title": "Stack Infix To Postfix stack state",
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
        "ruleLabel": "Stack Infix To Postfix invariant",
        "rule": "The code receives the next value or command.",
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
        "ruleLabel": "Stack Infix To Postfix invariant",
        "rule": "The active state must still satisfy last-in, first-out state.",
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
        "ruleLabel": "Stack Infix To Postfix invariant",
        "rule": "Only the necessary stack fields are changed.",
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
        "ruleLabel": "Stack Infix To Postfix invariant",
        "rule": "The return value or printed state confirms the operation.",
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
