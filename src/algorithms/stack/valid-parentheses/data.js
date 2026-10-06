// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "valid-parentheses",
  "title": "Valid Parentheses",
  "category": "Stack",
  "route": "/algorithms/stack/valid-parentheses",
  "phase": 1,
  "priority": "high",
  "visualizerType": "stack-match",
  "icon": "layers",
  "codePath": "./src/algorithms/stack/valid-parentheses/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Valid Parentheses uses a stack of expected closing brackets.",
  "problem": "Valid Parentheses uses a stack of expected closing brackets.",
  "concept": "Valid Parentheses is useful when stack behavior is the clearest model for the data changes. Use this when the problem is naturally described by last-in, first-out state.",
  "logicSummary": "Read the next value or operation, maintain last-in, first-out state, then push, pop, peek, or resolve stack entries.",
  "transitionSummary": "Each step changes only the part of the stack required to preserve the invariant.",
  "codeInsight": "The implementation names the backing state directly, so the code trace matches the visual data structure on the page.",
  "realLifeExample": "Valid Parentheses appears when the problem is defined by the behavior of this exact data structure.",
  "whenToUse": "Use Valid Parentheses when its state transition is the natural way to model the problem.",
  "memoryTrick": "Valid Parentheses: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Explore Valid Parentheses through a sample teaching model, then compare it with the runnable result.",
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
      "name": "input",
      "purpose": "Values or operations to process."
    },
    {
      "name": "data structure state",
      "purpose": "The stack, queue, heap, deque, or cache state."
    },
    {
      "name": "answer",
      "purpose": "The output after all operations or after each step."
    },
    {
      "name": "operations remain",
      "purpose": "Continue while input values or operations remain."
    }
  ],
  "dryRun": [
    {
      "label": "Stack",
      "title": "Read stack action",
      "note": "The code receives the next value or command.",
      "activeLine": 7,
      "codeInsight": "Creates the monotonic stack. It stores indexes that are still waiting for a greater value to appear."
    },
    {
      "label": "Stack top",
      "title": "Inspect stack",
      "note": "The active state must still satisfy last-in, first-out state.",
      "activeLine": 7,
      "codeInsight": "Creates the monotonic stack. It stores indexes that are still waiting for a greater value to appear."
    },
    {
      "label": "Push / pop",
      "title": "Push, pop, peek, or resolve stack entries",
      "note": "Only the necessary stack fields are changed.",
      "activeLine": 9,
      "codeInsight": "Checks pairs[char]) stack.push(pairs[char]; only the branch that preserves Valid Parentheses's invariant is allowed to change state."
    },
    {
      "label": "Result",
      "title": "Return visible result",
      "note": "The return value or printed state confirms the operation.",
      "activeLine": 12,
      "codeInsight": "Returns stack.length === 0, the final value maintained by Valid Parentheses's code path."
    }
  ],
  "complexity": {
    "time": "O(n).",
    "space": "O(n)."
  },
  "quiz": {
    "question": "Which explanation best describes Valid Parentheses?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      },
      {
        "key": "C",
        "text": "Valid Parentheses uses a stack of expected closing brackets.",
        "correct": true
      }
    ],
    "correctText": "Correct. Valid Parentheses uses a stack of expected closing brackets.",
    "incorrectText": "Try again. Valid Parentheses uses a stack of expected closing brackets. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "stack",
  "algorithmSlug": "valid-parentheses",
  "runnerInput": [
    "({[]})"
  ],
  "relatedLinks": [
    {
      "id": "ds-stack-parenthesis-is-balanced",
      "title": "Stack Parenthesis Is Balanced",
      "label": "C/C++ stack source"
    },
    {
      "id": "ds-stack-parenthesis-is-balanced-extended",
      "title": "Stack Parenthesis Is Balanced Extended",
      "label": "C/C++ stack source"
    }
  ],
  "animation": {
    "type": "stack-queue-flow",
    "title": "Valid Parentheses stack state",
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
        "ruleLabel": "Valid Parentheses invariant",
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
        "ruleLabel": "Valid Parentheses invariant",
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
        "ruleLabel": "Valid Parentheses invariant",
        "rule": "Checks pairs[char]) stack.push(pairs[char]; only the branch that preserves Valid Parentheses's invariant is allowed to change state.",
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
        "ruleLabel": "Valid Parentheses invariant",
        "rule": "Returns stack.length === 0, the final value maintained by Valid Parentheses's code path.",
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
    "example": "Read stack: Identify the next command, value, node, or library call. Inspect stack top: Look at the active stack fields. Push / pop: push, pop, peek, or resolve stack entries. Read result: Return the emitted value or updated structure.",
    "sampleInput": [
      "({[]})"
    ],
    "sampleResult": true,
    "sampleScope": "This is the result of the unedited JavaScript function with the sample arguments. Changing the input or code can change the result.",
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
    "checkpoint": "Explain this in your own words: Valid Parentheses uses a stack of expected closing brackets."
  }
};
