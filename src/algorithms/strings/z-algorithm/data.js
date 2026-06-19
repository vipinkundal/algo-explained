// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "z-algorithm",
  "title": "Z Algorithm",
  "category": "Strings",
  "route": "/algorithms/strings/z-algorithm",
  "phase": 4,
  "priority": "medium",
  "visualizerType": "z-box",
  "icon": "abc",
  "codePath": "./src/algorithms/strings/z-algorithm/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Z Algorithm is a Strings technique focused on matches or string result.",
  "problem": "Z Algorithm turns character comparisons into reusable state so the string is not rechecked from scratch.",
  "concept": "Z Algorithm turns character comparisons into reusable state so the string is not rechecked from scratch.",
  "logicSummary": "Precompute the helper state, scan the text, update indices or hashes, and record each valid match.",
  "transitionSummary": "Each transition consumes one character and updates the prefix, hash, trie, or palindrome state.",
  "codeInsight": "String algorithms are safest when index movement is explicit and every mismatch has a defined fallback.",
  "realLifeExample": "Z Algorithm appears when the input is text and pattern and the required result is matches or string result.",
  "whenToUse": "Use Z Algorithm when a problem matches the Strings pattern and the expected state changes match a z box dry run.",
  "memoryTrick": "Z Algorithm: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A z box walkthrough showing Z Algorithm's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data Z Algorithm receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by Z Algorithm."
    },
    {
      "title": "Apply the transition",
      "text": "Run the z box transition and update the algorithm-specific state."
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
      "purpose": "Pointers, prefix/hash values, or windows that decide how characters match. This page visualizes it as z box."
    },
    {
      "name": "match result",
      "purpose": "The value produced by zAlgorithm after the maintained state reaches the stop rule."
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
      "note": "Read the Z Algorithm input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that Z Algorithm changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one z box transition for Z Algorithm.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final Z Algorithm answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "O(n + m) for the usual text/pattern model.",
    "space": "O(n + m) for preprocessing or result state."
  },
  "quiz": {
    "question": "Which state choice keeps Z Algorithm correct?",
    "options": [
      {
        "key": "A",
        "text": "Track indices and prefix/hash state and update it only through Z Algorithm's transition.",
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
    "correctText": "Correct. Z Algorithm stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Z Algorithm needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "strings",
  "algorithmSlug": "z-algorithm",
  "runnerInput": [
    "abracadabra",
    "abra"
  ]
};
