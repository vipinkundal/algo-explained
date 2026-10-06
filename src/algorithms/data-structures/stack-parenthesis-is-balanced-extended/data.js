// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-stack-parenthesis-is-balanced-extended",
  "title": "Balanced Parentheses Extended",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Stack",
  "sourceFolder": "11_Stack",
  "sourceFile": "04_parenthesis_is_balanced_extended.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/stack-parenthesis-is-balanced-extended",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "stack-operations",
  "icon": "layers",
  "codePath": "./src/algorithms/data-structures/stack-parenthesis-is-balanced-extended/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/stack-parenthesis-is-balanced-extended/code/original.cpp",
  "originalCodeFilename": "04_parenthesis_is_balanced_extended.cpp",
  "originalActiveLine": 5,
  "meaning": "Check several bracket types by matching each closing bracket with the most recent opening bracket.",
  "problem": "Check several bracket types by matching each closing bracket with the most recent opening bracket.",
  "concept": "Check several bracket types by matching each closing bracket with the most recent opening bracket.",
  "logicSummary": "Check several bracket types by matching each closing bracket with the most recent opening bracket.",
  "transitionSummary": "{[()]} is balanced; ([)] has the right counts but the wrong nesting.",
  "codeInsight": "Check several bracket types by matching each closing bracket with the most recent opening bracket.",
  "originalCodeInsight": "Dynamic allocation creates storage at runtime; every pointer assignment changes how nodes or arrays are connected.",
  "realLifeExample": "{[()]} is balanced; ([)] has the right counts but the wrong nesting.",
  "whenToUse": "Check several bracket types by matching each closing bracket with the most recent opening bracket.",
  "memoryTrick": "Check several bracket types by matching each closing bracket with the most recent opening bracket.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Check several bracket types by matching each closing bracket with the most recent opening bracket."
    },
    {
      "title": "Work through a small case",
      "text": "{[()]} is balanced; ([)] has the right counts but the wrong nesting."
    },
    {
      "title": "Check the boundary cases",
      "text": "Check empty and full states, and identify which end an operation changes."
    }
  ],
  "variables": [
    {
      "name": "stack",
      "purpose": "Keeps a sequence of sample or working values for the following operations."
    },
    {
      "name": "output",
      "purpose": "Keeps a sequence of sample or working values for the following operations."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "Check several bracket types by matching each closing bracket with the most recent opening bracket.",
      "activeLine": 2,
      "codeInsight": "Check several bracket types by matching each closing bracket with the most recent opening bracket."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "{[()]} is balanced; ([)] has the right counts but the wrong nesting.",
      "activeLine": 7,
      "codeInsight": "Check several bracket types by matching each closing bracket with the most recent opening bracket."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying Balanced Parentheses Extended?",
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
    "stack-basics",
    "valid-parentheses"
  ],
  "relatedLinks": [
    {
      "id": "stack-basics",
      "title": "Stack Basics",
      "label": "Existing algorithm lesson"
    },
    {
      "id": "valid-parentheses",
      "title": "Valid Parentheses",
      "label": "Existing algorithm lesson"
    }
  ],
  "runnerInput": [],
  "categorySlug": "data-structures",
  "algorithmSlug": "stack-parenthesis-is-balanced-extended",
  "animation": {
    "type": "stack-queue-flow",
    "title": "Balanced Parentheses Extended stack state",
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
        "ruleLabel": "Balanced Parentheses Extended invariant",
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
        "ruleLabel": "Balanced Parentheses Extended invariant",
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
        "ruleLabel": "Balanced Parentheses Extended invariant",
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
        "ruleLabel": "Balanced Parentheses Extended invariant",
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
  },
  "learningGuide": {
    "mentalModel": "A stack removes the newest item first. A queue removes the oldest item first. A deque allows both ends.",
    "family": "Ordered waiting",
    "example": "{[()]} is balanced; ([)] has the right counts but the wrong nesting.",
    "sampleInput": [],
    "sampleResult": {
      "structure": "stack",
      "invariant": "last in, first out",
      "state": [
        10,
        20
      ],
      "popped": [
        30
      ]
    },
    "sampleScope": "This runnable JavaScript companion illustrates the data structure. Its returned snapshot may cover fewer operations than the C/C++ reference. The topic example above explains the named operation.",
    "terms": [
      [
        "Push / enqueue",
        "Add an item to the structure."
      ],
      [
        "Pop / dequeue",
        "Remove an item according to the structure’s ordering rule."
      ],
      [
        "Peek",
        "Read the next item without removing it."
      ]
    ],
    "pitfall": "Check empty and full states, and identify which end an operation changes.",
    "checkpoint": "Explain this in your own words: Check several bracket types by matching each closing bracket with the most recent opening bracket."
  }
};
