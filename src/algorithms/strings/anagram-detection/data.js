// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this data-structure page without touching app.js.

export const algorithmPage = {
  "id": "anagram-detection",
  "title": "Anagram Detection",
  "category": "Strings",
  "route": "/algorithms/strings/anagram-detection",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "frequency-map",
  "icon": "abc",
  "codePath": "./src/algorithms/strings/anagram-detection/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Anagram Detection is a Strings technique focused on matches or string result.",
  "problem": "Anagram Detection turns character comparisons into reusable state so the string is not rechecked from scratch.",
  "concept": "Anagram Detection turns character comparisons into reusable state so the string is not rechecked from scratch.",
  "logicSummary": "Precompute the helper state, scan the text, update indices or hashes, and record each valid match.",
  "transitionSummary": "Each transition consumes one character and updates the prefix, hash, trie, or palindrome state.",
  "codeInsight": "String algorithms are safest when index movement is explicit and every mismatch has a defined fallback.",
  "realLifeExample": "Anagram Detection appears when the input is text and pattern and the required result is matches or string result.",
  "whenToUse": "Use Anagram Detection when a problem matches the Strings pattern and the expected state changes match a frequency map dry run.",
  "memoryTrick": "Anagram Detection: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A frequency map walkthrough showing Anagram Detection's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data Anagram Detection receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by Anagram Detection."
    },
    {
      "title": "Apply the transition",
      "text": "Run the frequency map transition and update the algorithm-specific state."
    },
    {
      "title": "Return the answer",
      "text": "Stop at the correct condition and return the tracked result."
    }
  ],
  "variables": [
    {
      "name": "text, pattern",
      "purpose": "text: The string data used for character comparisons, matching, or dynamic programming states. pattern: The string data used for character comparisons, matching, or dynamic programming states."
    },
    {
      "name": "indices and match state",
      "purpose": "Pointers, prefix/hash values, or windows that decide how characters match. This page visualizes it as frequency map."
    },
    {
      "name": "match result",
      "purpose": "The value produced by anagramDetection after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Each transition consumes one character and updates the prefix, hash, trie, or palindrome state. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the Anagram Detection input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that Anagram Detection changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one frequency map transition for Anagram Detection.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final Anagram Detection answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "O(n) for the educational reference implementation.",
    "space": "O(n) for tracked state when needed."
  },
  "quiz": {
    "question": "Which state choice keeps Anagram Detection correct?",
    "options": [
      {
        "key": "A",
        "text": "Track indices and prefix/hash state and update it only through Anagram Detection's transition.",
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
    "correctText": "Correct. Anagram Detection stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Anagram Detection needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "strings",
  "algorithmSlug": "anagram-detection",
  "runnerInput": [
    "listen",
    "silent"
  ],
  "relatedLinks": [
    {
      "id": "ds-string-anagram",
      "title": "String Anagram",
      "label": "C/C++ string source"
    }
  ]
};
