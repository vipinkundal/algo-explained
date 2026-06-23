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
  "concept": "String algorithms are useful when character order, frequency, prefix, hash, or palindrome structure can be reused. Use this when scanning every substring directly would repeat character work.",
  "logicSummary": "Prepare helper state, scan characters, update the pattern state, and record matches or the best string result.",
  "transitionSummary": "Each step consumes one character and updates prefix, hash, frequency, trie, or palindrome state.",
  "codeInsight": "String algorithms are safest when index movement is explicit and every mismatch has a defined fallback.",
  "realLifeExample": "Manacher’s Algorithm appears when the input is text and pattern and the required result is matches or string result.",
  "whenToUse": "Use Manacher’s Algorithm when a problem matches the Strings pattern and the expected state changes match a palindrome radius dry run.",
  "memoryTrick": "Manacher’s Algorithm: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Manacher’s Algorithm is shown as character-state updates. The numbered steps follow the code path used to maintain the main invariant.",
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
      "purpose": "Pointers, prefix/hash values, or windows that decide how characters match. This page visualizes it as palindrome radius."
    },
    {
      "name": "match result",
      "purpose": "The value produced by manachersAlgorithm after the maintained state reaches the stop rule."
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
      "codeInsight": "Defines manachersAlgorithm and names the input text; edits to those inputs change the visual state and output."
    },
    {
      "label": "Helper",
      "title": "Prepare string state",
      "note": "Prefix, hash, frequency, or radius state avoids repeated work.",
      "activeLine": 12,
      "codeInsight": "Stores current so the algorithm can reuse this value without recomputing it."
    },
    {
      "label": "Character",
      "title": "Update on current char",
      "note": "One character changes the active string state.",
      "activeLine": 8,
      "codeInsight": "Repeats while left >= 0 && right < text.length && text[left] === text[right] is true, so the algorithm keeps resolving current work before moving on."
    },
    {
      "label": "Result",
      "title": "Return string answer",
      "note": "Matches or best values are returned after the scan.",
      "activeLine": 19,
      "codeInsight": "Returns best, the final value maintained by Manacher’s Algorithm's code path."
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
  "algorithmSlug": "manachers-algorithm",
  "runnerInput": [
    "babad"
  ],
  "animation": {
    "type": "string-flow",
    "title": "Manacher’s Algorithm character scan",
    "ruleLabel": "String invariant",
    "rule": "Each step consumes one character and updates prefix, hash, frequency, trie, or palindrome state.",
    "text": "babad",
    "pattern": "bab",
    "steps": [
      {
        "phase": "Text",
        "title": "Read string input",
        "note": "The code receives text, pattern, or character data.",
        "ruleLabel": "Manacher’s Algorithm invariant",
        "rule": "Defines manachersAlgorithm and names the input text; edits to those inputs change the visual state and output.",
        "activeRange": [
          0,
          2
        ],
        "matchedRange": []
      },
      {
        "phase": "Helper",
        "title": "Prepare string state",
        "note": "Prefix, hash, frequency, or radius state avoids repeated work.",
        "ruleLabel": "Manacher’s Algorithm invariant",
        "rule": "Stores current so the algorithm can reuse this value without recomputing it.",
        "activeRange": [
          1,
          3
        ],
        "matchedRange": []
      },
      {
        "phase": "Character",
        "title": "Update on current char",
        "note": "One character changes the active string state.",
        "ruleLabel": "Manacher’s Algorithm invariant",
        "rule": "Repeats while left >= 0 && right < text.length && text[left] === text[right] is true, so the algorithm keeps resolving current work before moving on.",
        "activeRange": [
          2,
          4
        ],
        "matchedRange": []
      },
      {
        "phase": "Result",
        "title": "Return string answer",
        "note": "Matches or best values are returned after the scan.",
        "ruleLabel": "Manacher’s Algorithm invariant",
        "rule": "Returns best, the final value maintained by Manacher’s Algorithm's code path.",
        "activeRange": [
          3,
          4
        ],
        "matchedRange": [
          0,
          2
        ]
      }
    ]
  }
};
