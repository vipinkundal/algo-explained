// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "kmp",
  "title": "KMP Algorithm",
  "category": "Strings",
  "route": "/algorithms/strings/kmp",
  "phase": 3,
  "priority": "high",
  "visualizerType": "prefix-table",
  "icon": "abc",
  "codePath": "./src/algorithms/strings/kmp/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "KMP Algorithm is a Strings technique focused on matches or string result.",
  "problem": "KMP Algorithm turns character comparisons into reusable state so the string is not rechecked from scratch.",
  "concept": "KMP Algorithm turns character comparisons into reusable state so the string is not rechecked from scratch.",
  "logicSummary": "Precompute the helper state, scan the text, update indices or hashes, and record each valid match.",
  "transitionSummary": "Each transition consumes one character and updates the prefix, hash, trie, or palindrome state.",
  "codeInsight": "String algorithms are safest when index movement is explicit and every mismatch has a defined fallback.",
  "realLifeExample": "KMP Algorithm appears when the input is text and pattern and the required result is matches or string result.",
  "whenToUse": "Use KMP Algorithm when a problem matches the Strings pattern and the expected state changes match a prefix table dry run.",
  "memoryTrick": "KMP Algorithm: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A prefix table walkthrough showing KMP Algorithm's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data KMP Algorithm receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by KMP Algorithm."
    },
    {
      "title": "Apply the transition",
      "text": "Run the prefix table transition and update the algorithm-specific state."
    },
    {
      "title": "Return the answer",
      "text": "Stop at the correct condition and return the tracked result."
    }
  ],
  "variables": [
    {
      "name": "text and pattern",
      "purpose": "The concrete data KMP Algorithm receives before any state changes begin."
    },
    {
      "name": "indices and prefix/hash state",
      "purpose": "The working information KMP Algorithm updates while it runs."
    },
    {
      "name": "matches or string result",
      "purpose": "The final value KMP Algorithm returns after the stop condition is met."
    },
    {
      "name": "characters remain",
      "purpose": "The rule that decides whether KMP Algorithm continues, branches, or stops."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the KMP Algorithm input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that KMP Algorithm changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one prefix table transition for KMP Algorithm.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final KMP Algorithm answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "O(n + m) for the usual text/pattern model.",
    "space": "O(n + m) for preprocessing or result state."
  },
  "quiz": {
    "question": "Which state choice keeps KMP Algorithm correct?",
    "options": [
      {
        "key": "A",
        "text": "Track indices and prefix/hash state and update it only through KMP Algorithm's transition.",
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
    "correctText": "Correct. KMP Algorithm stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. KMP Algorithm needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "strings",
  "algorithmSlug": "kmp"
};
