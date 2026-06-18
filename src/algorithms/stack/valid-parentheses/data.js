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
  "meaning": "Valid Parentheses is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Valid Parentheses uses a stack of expected closing brackets.",
  "concept": "Valid Parentheses uses a stack of expected closing brackets.",
  "logicSummary": "Valid Parentheses maintains a dedicated data-structure invariant and changes it through one clear push, pop, enqueue, dequeue, heap, or cache transition.",
  "transitionSummary": "Read the next operation or value, update the owned data structure, and emit the current answer if needed.",
  "codeInsight": "The implementation names the backing state directly, so the code trace matches the visual data structure on the page.",
  "realLifeExample": "Valid Parentheses appears when the problem is defined by the behavior of this exact data structure.",
  "whenToUse": "Use Valid Parentheses when its state transition is the natural way to model the problem.",
  "memoryTrick": "Valid Parentheses: the data structure is the algorithm state.",
  "visualizerCaption": "A stack match walkthrough showing Valid Parentheses' input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read operation",
      "text": "Identify the next value or command."
    },
    {
      "title": "Update structure",
      "text": "Push, pop, enqueue, dequeue, rebalance, or evict as required."
    },
    {
      "title": "Preserve invariant",
      "text": "Keep the structure valid after the update."
    },
    {
      "title": "Return output",
      "text": "Return the accumulated answers or final structure."
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
      "label": "Input",
      "title": "Read inputs",
      "note": "Valid Parentheses starts by reading the exact input shape it owns.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize state",
      "note": "Create only the state needed for this algorithm's invariant.",
      "activeLine": 3
    },
    {
      "label": "Loop",
      "title": "Run transition",
      "note": "Read the next operation or value, update the owned data structure, and emit the current answer if needed.",
      "activeLine": 8
    },
    {
      "label": "Answer",
      "title": "Return answer",
      "note": "Return the value produced by the maintained invariant.",
      "activeLine": 12
    }
  ],
  "complexity": {
    "time": "O(n).",
    "space": "O(n)."
  },
  "quiz": {
    "question": "Which state choice keeps Valid Parentheses correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Valid Parentheses' transition.",
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
    "correctText": "Correct. Valid Parentheses stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Valid Parentheses needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "stack",
  "algorithmSlug": "valid-parentheses"
};
