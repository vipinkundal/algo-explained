// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "manachers-algorithm",
  "title": "Manacher’s Algorithm",
  "category": "Strings",
  "route": "/algorithms/strings/manachers-algorithm",
  "phase": 4,
  "priority": "low",
  "visualizerType": "palindrome-radius",
  "icon": "abc",
  "codePath": "./src/algorithms/strings/manachers-algorithm/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Manacher’s Algorithm is a Strings technique focused on matches or string result.",
  "problem": "Manacher’s Algorithm turns character comparisons into reusable state so the string is not rechecked from scratch.",
  "concept": "Manacher’s Algorithm turns character comparisons into reusable state so the string is not rechecked from scratch.",
  "logicSummary": "Precompute the helper state, scan the text, update indices or hashes, and record each valid match.",
  "transitionSummary": "Each transition consumes one character and updates the prefix, hash, trie, or palindrome state.",
  "codeInsight": "String algorithms are safest when index movement is explicit and every mismatch has a defined fallback.",
  "realLifeExample": "Manacher’s Algorithm appears when the input is text and pattern and the required result is matches or string result.",
  "whenToUse": "Use Manacher’s Algorithm when a problem matches the Strings pattern and the expected state changes match a palindrome radius dry run.",
  "memoryTrick": "Manacher’s Algorithm: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A palindrome radius walkthrough showing Manacher’s Algorithm's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data Manacher’s Algorithm receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by Manacher’s Algorithm."
    },
    {
      "title": "Apply the transition",
      "text": "Run the palindrome radius transition and update the algorithm-specific state."
    },
    {
      "title": "Return the answer",
      "text": "Stop at the correct condition and return the tracked result."
    }
  ],
  "variables": [
    {
      "name": "text and pattern",
      "purpose": "The concrete data Manacher’s Algorithm receives before any state changes begin."
    },
    {
      "name": "indices and prefix/hash state",
      "purpose": "The working information Manacher’s Algorithm updates while it runs."
    },
    {
      "name": "matches or string result",
      "purpose": "The final value Manacher’s Algorithm returns after the stop condition is met."
    },
    {
      "name": "characters remain",
      "purpose": "The rule that decides whether Manacher’s Algorithm continues, branches, or stops."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the Manacher’s Algorithm input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that Manacher’s Algorithm changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one palindrome radius transition for Manacher’s Algorithm.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final Manacher’s Algorithm answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "O(n + m) for the usual text/pattern model.",
    "space": "O(n + m) for preprocessing or result state."
  },
  "quiz": {
    "question": "Which state choice keeps Manacher’s Algorithm correct?",
    "options": [
      {
        "key": "A",
        "text": "Track indices and prefix/hash state and update it only through Manacher’s Algorithm's transition.",
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
    "correctText": "Correct. Manacher’s Algorithm stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Manacher’s Algorithm needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "strings",
  "algorithmSlug": "manachers-algorithm"
};
