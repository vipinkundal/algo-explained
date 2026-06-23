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
  "concept": "String algorithms are useful when character order, frequency, prefix, hash, or palindrome structure can be reused. Use this when scanning every substring directly would repeat character work.",
  "logicSummary": "Prepare helper state, scan characters, update the pattern state, and record matches or the best string result.",
  "transitionSummary": "Each step consumes one character and updates prefix, hash, frequency, trie, or palindrome state.",
  "codeInsight": "String algorithms are safest when index movement is explicit and every mismatch has a defined fallback.",
  "realLifeExample": "KMP Algorithm appears when the input is text and pattern and the required result is matches or string result.",
  "whenToUse": "Use KMP Algorithm when a problem matches the Strings pattern and the expected state changes match a prefix table dry run.",
  "memoryTrick": "KMP Algorithm: name the invariant, then trace the exact state change.",
  "visualizerCaption": "KMP Algorithm is shown as character-state updates. The numbered steps follow the code path used to maintain the main invariant.",
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
      "purpose": "Pointers, prefix/hash values, or windows that decide how characters match. This page visualizes it as prefix table."
    },
    {
      "name": "match result",
      "purpose": "The value produced by kmp after the maintained state reaches the stop rule."
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
      "activeLine": 5,
      "codeInsight": "Defines kmp and names the input text, pattern; edits to those inputs change the visual state and output."
    },
    {
      "label": "Helper",
      "title": "Prepare string state",
      "note": "Prefix, hash, frequency, or radius state avoids repeated work.",
      "activeLine": 6,
      "codeInsight": "Stores lps from the current length, making the loop boundary explicit for the visual trace."
    },
    {
      "label": "Character",
      "title": "Update on current char",
      "note": "One character changes the active string state.",
      "activeLine": 7,
      "codeInsight": "Runs the counted loop (let index = 1, length = 0; index < pattern.length;) so each visual step follows one code-controlled iteration."
    },
    {
      "label": "Result",
      "title": "Return string answer",
      "note": "Matches or best values are returned after the scan.",
      "activeLine": 24,
      "codeInsight": "Returns matches, the final value maintained by KMP Algorithm's code path."
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
  "algorithmSlug": "kmp",
  "runnerInput": [
    "abracadabra",
    "abra"
  ],
  "animation": {
    "type": "string-flow",
    "title": "KMP Algorithm character scan",
    "ruleLabel": "String invariant",
    "rule": "Each step consumes one character and updates prefix, hash, frequency, trie, or palindrome state.",
    "text": "abracadabra",
    "pattern": "abra",
    "steps": [
      {
        "phase": "Text",
        "title": "Read string input",
        "note": "The code receives text, pattern, or character data.",
        "ruleLabel": "KMP Algorithm invariant",
        "rule": "Defines kmp and names the input text, pattern; edits to those inputs change the visual state and output.",
        "activeRange": [
          0,
          3
        ],
        "matchedRange": []
      },
      {
        "phase": "Helper",
        "title": "Prepare string state",
        "note": "Prefix, hash, frequency, or radius state avoids repeated work.",
        "ruleLabel": "KMP Algorithm invariant",
        "rule": "Stores lps from the current length, making the loop boundary explicit for the visual trace.",
        "activeRange": [
          1,
          4
        ],
        "matchedRange": []
      },
      {
        "phase": "Character",
        "title": "Update on current char",
        "note": "One character changes the active string state.",
        "ruleLabel": "KMP Algorithm invariant",
        "rule": "Runs the counted loop (let index = 1, length = 0; index < pattern.length;) so each visual step follows one code-controlled iteration.",
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
        "ruleLabel": "KMP Algorithm invariant",
        "rule": "Returns matches, the final value maintained by KMP Algorithm's code path.",
        "activeRange": [
          3,
          6
        ],
        "matchedRange": [
          0,
          3
        ]
      }
    ]
  }
};
