// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

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
  "concept": "String algorithms are useful when character order, frequency, prefix, hash, or palindrome structure can be reused. Use this when scanning every substring directly would repeat character work.",
  "logicSummary": "Prepare helper state, scan characters, update the pattern state, and record matches or the best string result.",
  "transitionSummary": "Each step consumes one character and updates prefix, hash, frequency, trie, or palindrome state.",
  "codeInsight": "String algorithms are safest when index movement is explicit and every mismatch has a defined fallback.",
  "realLifeExample": "Anagram Detection appears when the input is text and pattern and the required result is matches or string result.",
  "whenToUse": "Use Anagram Detection when a problem matches the Strings pattern and the expected state changes match a frequency map dry run.",
  "memoryTrick": "Anagram Detection: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Anagram Detection is shown as character-state updates. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Read text",
      "text": "Identify text, pattern, or character rule."
    },
    {
      "title": "Prepare state",
      "text": "Build frequency, prefix, hash, trie, or radius state."
    },
    {
      "title": "Scan character",
      "text": "Consume the next character and update state."
    },
    {
      "title": "Return match",
      "text": "Return matches, validity, or the best substring result."
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
      "label": "Text",
      "title": "Read string input",
      "note": "The code receives text, pattern, or character data.",
      "activeLine": 6,
      "codeInsight": "Checks first.length !== second.length; only the branch that preserves Anagram Detection's invariant is allowed to change state."
    },
    {
      "label": "Helper",
      "title": "Prepare string state",
      "note": "Prefix, hash, frequency, or radius state avoids repeated work.",
      "activeLine": 7,
      "codeInsight": "Initializes counts, the local state that the next highlighted lines will update."
    },
    {
      "label": "Character",
      "title": "Update on current char",
      "note": "One character changes the active string state.",
      "activeLine": 6,
      "codeInsight": "Checks first.length !== second.length; only the branch that preserves Anagram Detection's invariant is allowed to change state."
    },
    {
      "label": "Result",
      "title": "Return string answer",
      "note": "Matches or best values are returned after the scan.",
      "activeLine": 13,
      "codeInsight": "Returns true, the value produced after Anagram Detection's state changes are complete."
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
  ],
  "animation": {
    "type": "string-flow",
    "title": "Anagram Detection character scan",
    "ruleLabel": "String invariant",
    "rule": "Each step consumes one character and updates prefix, hash, frequency, trie, or palindrome state.",
    "text": "listen",
    "pattern": "silent",
    "steps": [
      {
        "phase": "Text",
        "title": "Read string input",
        "note": "The code receives text, pattern, or character data.",
        "ruleLabel": "Anagram Detection invariant",
        "rule": "Checks first.length !== second.length; only the branch that preserves Anagram Detection's invariant is allowed to change state.",
        "activeRange": [
          0,
          5
        ],
        "matchedRange": []
      },
      {
        "phase": "Helper",
        "title": "Prepare string state",
        "note": "Prefix, hash, frequency, or radius state avoids repeated work.",
        "ruleLabel": "Anagram Detection invariant",
        "rule": "Initializes counts, the local state that the next highlighted lines will update.",
        "activeRange": [
          1,
          5
        ],
        "matchedRange": []
      },
      {
        "phase": "Character",
        "title": "Update on current char",
        "note": "One character changes the active string state.",
        "ruleLabel": "Anagram Detection invariant",
        "rule": "Checks first.length !== second.length; only the branch that preserves Anagram Detection's invariant is allowed to change state.",
        "activeRange": [
          2,
          5
        ],
        "matchedRange": []
      },
      {
        "phase": "Result",
        "title": "Return string answer",
        "note": "Matches or best values are returned after the scan.",
        "ruleLabel": "Anagram Detection invariant",
        "rule": "Returns true, the value produced after Anagram Detection's state changes are complete.",
        "activeRange": [
          3,
          5
        ],
        "matchedRange": [
          0,
          5
        ]
      }
    ]
  }
};
