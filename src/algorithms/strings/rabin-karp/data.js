// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "rabin-karp",
  "title": "Rabin-Karp Algorithm",
  "category": "Strings",
  "route": "/algorithms/strings/rabin-karp",
  "phase": 3,
  "priority": "medium",
  "visualizerType": "rolling-hash",
  "icon": "abc",
  "codePath": "./src/algorithms/strings/rabin-karp/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Rabin-Karp Algorithm is a Strings technique focused on matches or string result.",
  "problem": "Rabin-Karp Algorithm turns character comparisons into reusable state so the string is not rechecked from scratch.",
  "concept": "String algorithms are useful when character order, frequency, prefix, hash, or palindrome structure can be reused. Use this when scanning every substring directly would repeat character work.",
  "logicSummary": "Prepare helper state, scan characters, update the pattern state, and record matches or the best string result.",
  "transitionSummary": "Each step consumes one character and updates prefix, hash, frequency, trie, or palindrome state.",
  "codeInsight": "String algorithms are safest when index movement is explicit and every mismatch has a defined fallback.",
  "realLifeExample": "Rabin-Karp Algorithm appears when the input is text and pattern and the required result is matches or string result.",
  "whenToUse": "Use Rabin-Karp Algorithm when a problem matches the Strings pattern and the expected state changes match a rolling hash dry run.",
  "memoryTrick": "Rabin-Karp Algorithm: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Rabin-Karp Algorithm is shown as character-state updates. The numbered steps follow the code path used to maintain the main invariant.",
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
      "purpose": "Pointers, prefix/hash values, or windows that decide how characters match. This page visualizes it as rolling hash."
    },
    {
      "name": "match result",
      "purpose": "The value produced by rabinKarp after the maintained state reaches the stop rule."
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
      "codeInsight": "Defines rabinKarp and names the input text, pattern; edits to those inputs change the visual state and output."
    },
    {
      "label": "Helper",
      "title": "Prepare string state",
      "note": "Prefix, hash, frequency, or radius state avoids repeated work.",
      "activeLine": 6,
      "codeInsight": "Seeds matches with the sample values shown in the visualizer, giving the trace concrete cells to inspect."
    },
    {
      "label": "Character",
      "title": "Update on current char",
      "note": "One character changes the active string state.",
      "activeLine": 8,
      "codeInsight": "Runs the counted loop (let index = 0; index <= text.length - size; index += 1) so each visual step follows one code-controlled iteration."
    },
    {
      "label": "Result",
      "title": "Return string answer",
      "note": "Matches or best values are returned after the scan.",
      "activeLine": 11,
      "codeInsight": "Returns matches, the final value maintained by Rabin-Karp Algorithm's code path."
    }
  ],
  "complexity": {
    "time": "O(n + m) for the usual text/pattern model.",
    "space": "O(n + m) for preprocessing or result state."
  },
  "quiz": {
    "question": "Which state choice keeps Rabin-Karp Algorithm correct?",
    "options": [
      {
        "key": "A",
        "text": "Track indices and prefix/hash state and update it only through Rabin-Karp Algorithm's transition.",
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
    "correctText": "Correct. Rabin-Karp Algorithm stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Rabin-Karp Algorithm needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "strings",
  "algorithmSlug": "rabin-karp",
  "runnerInput": [
    "abracadabra",
    "abra"
  ],
  "animation": {
    "type": "string-flow",
    "title": "Rabin-Karp Algorithm character scan",
    "ruleLabel": "String invariant",
    "rule": "Each step consumes one character and updates prefix, hash, frequency, trie, or palindrome state.",
    "text": "abracadabra",
    "pattern": "abra",
    "steps": [
      {
        "phase": "Text",
        "title": "Read string input",
        "note": "The code receives text, pattern, or character data.",
        "ruleLabel": "Rabin-Karp Algorithm invariant",
        "rule": "Defines rabinKarp and names the input text, pattern; edits to those inputs change the visual state and output.",
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
        "ruleLabel": "Rabin-Karp Algorithm invariant",
        "rule": "Seeds matches with the sample values shown in the visualizer, giving the trace concrete cells to inspect.",
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
        "ruleLabel": "Rabin-Karp Algorithm invariant",
        "rule": "Runs the counted loop (let index = 0; index <= text.length - size; index += 1) so each visual step follows one code-controlled iteration.",
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
        "ruleLabel": "Rabin-Karp Algorithm invariant",
        "rule": "Returns matches, the final value maintained by Rabin-Karp Algorithm's code path.",
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
