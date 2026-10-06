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
  "meaning": "Convert infix expressions to postfix by keeping pending operators on a stack and respecting precedence.",
  "problem": "Convert infix expressions to postfix by keeping pending operators on a stack and respecting precedence.",
  "concept": "Convert infix expressions to postfix by keeping pending operators on a stack and respecting precedence.",
  "logicSummary": "Convert infix expressions to postfix by keeping pending operators on a stack and respecting precedence.",
  "transitionSummary": "a + b * c becomes a b c * + because multiplication happens before addition.",
  "codeInsight": "Convert infix expressions to postfix by keeping pending operators on a stack and respecting precedence.",
  "originalCodeInsight": "Dynamic allocation creates storage at runtime; every pointer assignment changes how nodes or arrays are connected.",
  "realLifeExample": "a + b * c becomes a b c * + because multiplication happens before addition.",
  "whenToUse": "Convert infix expressions to postfix by keeping pending operators on a stack and respecting precedence.",
  "memoryTrick": "Convert infix expressions to postfix by keeping pending operators on a stack and respecting precedence.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Convert infix expressions to postfix by keeping pending operators on a stack and respecting precedence."
    },
    {
      "title": "Work through a small case",
      "text": "a + b * c becomes a b c * + because multiplication happens before addition."
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
      "note": "Convert infix expressions to postfix by keeping pending operators on a stack and respecting precedence.",
      "activeLine": 2,
      "codeInsight": "Convert infix expressions to postfix by keeping pending operators on a stack and respecting precedence."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "a + b * c becomes a b c * + because multiplication happens before addition.",
      "activeLine": 7,
      "codeInsight": "Convert infix expressions to postfix by keeping pending operators on a stack and respecting precedence."
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
        "ruleLabel": "Stack Infix To Postfix invariant",
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
        "ruleLabel": "Stack Infix To Postfix invariant",
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
        "ruleLabel": "Stack Infix To Postfix invariant",
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
    "example": "a + b * c becomes a b c * + because multiplication happens before addition.",
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
    "checkpoint": "Explain this in your own words: Convert infix expressions to postfix by keeping pending operators on a stack and respecting precedence."
  }
};
