// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "longest-palindromic-substring",
  "title": "Longest Palindromic Substring",
  "category": "Strings",
  "route": "/algorithms/strings/longest-palindromic-substring",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "expand-center",
  "icon": "abc",
  "codePath": "./src/algorithms/strings/longest-palindromic-substring/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Longest Palindromic Substring is a Strings technique focused on matches or string result.",
  "problem": "Longest Palindromic Substring turns character comparisons into reusable state so the string is not rechecked from scratch.",
  "concept": "Longest Palindromic Substring turns character comparisons into reusable state so the string is not rechecked from scratch.",
  "logicSummary": "Precompute the helper state, scan the text, update indices or hashes, and record each valid match.",
  "transitionSummary": "Each transition consumes one character and updates the prefix, hash, trie, or palindrome state.",
  "codeInsight": "String algorithms are safest when index movement is explicit and every mismatch has a defined fallback.",
  "realLifeExample": "Longest Palindromic Substring appears when the input is text and pattern and the required result is matches or string result.",
  "whenToUse": "Use Longest Palindromic Substring when a problem matches the Strings pattern and the expected state changes match a expand center dry run.",
  "memoryTrick": "Longest Palindromic Substring: name the input, state, answer, and stop condition before writing the loop.",
  "visualizerCaption": "A expand center walkthrough showing Longest Palindromic Substring's input, state, transition, and answer.",
  "logicSteps": [
    {
      "title": "Read the input",
      "text": "Identify the exact data Longest Palindromic Substring receives and what output is required."
    },
    {
      "title": "Initialize state",
      "text": "Prepare the working variables used only by Longest Palindromic Substring."
    },
    {
      "title": "Apply the transition",
      "text": "Run the expand center transition and update the algorithm-specific state."
    },
    {
      "title": "Return the answer",
      "text": "Stop at the correct condition and return the tracked result."
    }
  ],
  "variables": [
    {
      "name": "text and pattern",
      "purpose": "The concrete data Longest Palindromic Substring receives before any state changes begin."
    },
    {
      "name": "indices and prefix/hash state",
      "purpose": "The working information Longest Palindromic Substring updates while it runs."
    },
    {
      "name": "matches or string result",
      "purpose": "The final value Longest Palindromic Substring returns after the stop condition is met."
    },
    {
      "name": "characters remain",
      "purpose": "The rule that decides whether Longest Palindromic Substring continues, branches, or stops."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Read the Longest Palindromic Substring input and decide what result must be produced.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Initialize working state",
      "note": "Set up the state variables that Longest Palindromic Substring changes during the dry run.",
      "activeLine": 3
    },
    {
      "label": "Transition",
      "title": "Run the core step",
      "note": "Apply one expand center transition for Longest Palindromic Substring.",
      "activeLine": 5
    },
    {
      "label": "Answer",
      "title": "Return the result",
      "note": "Return the final Longest Palindromic Substring answer from the tracked state.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "O(n + m) for the usual text/pattern model.",
    "space": "O(n + m) for preprocessing or result state."
  },
  "quiz": {
    "question": "Which state choice keeps Longest Palindromic Substring correct?",
    "options": [
      {
        "key": "A",
        "text": "Track indices and prefix/hash state and update it only through Longest Palindromic Substring's transition.",
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
    "correctText": "Correct. Longest Palindromic Substring stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Longest Palindromic Substring needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "strings",
  "algorithmSlug": "longest-palindromic-substring"
};
