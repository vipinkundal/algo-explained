// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-stack-using-array",
  "title": "Stack Using Array",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Stack",
  "sourceFolder": "11_Stack",
  "sourceFile": "01_Stack_using_Arry.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/stack-using-array",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "stack-operations",
  "icon": "layers",
  "codePath": "./src/algorithms/data-structures/stack-using-array/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/stack-using-array/code/original.cpp",
  "originalCodeFilename": "01_Stack_using_Arry.cpp",
  "originalActiveLine": 4,
  "meaning": "An array stack uses a top index to track the most recently pushed item.",
  "problem": "An array stack uses a top index to track the most recently pushed item.",
  "concept": "An array stack uses a top index to track the most recently pushed item.",
  "logicSummary": "An array stack uses a top index to track the most recently pushed item.",
  "transitionSummary": "Push A, then B; popping returns B and decreases the top index.",
  "codeInsight": "An array stack uses a top index to track the most recently pushed item.",
  "originalCodeInsight": "Dynamic allocation creates storage at runtime; every pointer assignment changes how nodes or arrays are connected.",
  "realLifeExample": "Push A, then B; popping returns B and decreases the top index.",
  "whenToUse": "An array stack uses a top index to track the most recently pushed item.",
  "memoryTrick": "An array stack uses a top index to track the most recently pushed item.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "An array stack uses a top index to track the most recently pushed item."
    },
    {
      "title": "Work through a small case",
      "text": "Push A, then B; popping returns B and decreases the top index."
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
      "note": "An array stack uses a top index to track the most recently pushed item.",
      "activeLine": 2,
      "codeInsight": "An array stack uses a top index to track the most recently pushed item."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "Push A, then B; popping returns B and decreases the top index.",
      "activeLine": 7,
      "codeInsight": "An array stack uses a top index to track the most recently pushed item."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying Stack Using Array?",
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
    "array-patterns",
    "stack-basics"
  ],
  "relatedLinks": [
    {
      "id": "linear-search",
      "title": "Linear Search",
      "label": "Start with indexed array values"
    },
    {
      "id": "stack-basics",
      "title": "Stack Basics",
      "label": "Existing algorithm lesson"
    }
  ],
  "runnerInput": [],
  "categorySlug": "data-structures",
  "algorithmSlug": "stack-using-array",
  "animation": {
    "type": "stack-queue-flow",
    "title": "Stack Using Array stack state",
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
        "ruleLabel": "Stack Using Array invariant",
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
        "ruleLabel": "Stack Using Array invariant",
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
        "ruleLabel": "Stack Using Array invariant",
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
        "ruleLabel": "Stack Using Array invariant",
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
    "example": "Push A, then B; popping returns B and decreases the top index.",
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
    "checkpoint": "Explain this in your own words: An array stack uses a top index to track the most recently pushed item."
  }
};
