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
  "meaning": "Longest Palindromic Substring is taught with its own string state, transition, code trace, and stopping rule.",
  "problem": "Return the longest contiguous substring that reads the same forward and backward.",
  "concept": "Expanding around each possible center finds every odd and even palindrome without checking every substring separately.",
  "logicSummary": "For each index, expand around one-character and two-character centers, then keep the longest valid palindrome.",
  "transitionSummary": "A center expands while left and right characters match; the best substring updates after expansion stops.",
  "codeInsight": "Both odd and even centers are required, otherwise palindromes like bb would be missed.",
  "realLifeExample": "Use it for text analysis, DNA symmetry scans, and interview problems asking for the longest mirrored block.",
  "whenToUse": "Use center expansion for simple O(n^2) palindrome search with O(1) extra state.",
  "memoryTrick": "Pick a center, grow while both sides mirror.",
  "visualizerCaption": "The trace expands candidate centers and locks the best palindrome found so far.",
  "logicSteps": [
    {
      "title": "Pick center",
      "text": "Treat each index as an odd center and each gap as an even center."
    },
    {
      "title": "Expand outward",
      "text": "Move left and right while characters match."
    },
    {
      "title": "Capture substring",
      "text": "The valid palindrome is text.slice(left + 1, right)."
    },
    {
      "title": "Keep best",
      "text": "Replace best only when the current palindrome is longer."
    }
  ],
  "variables": [
    {
      "name": "text",
      "purpose": "Input string."
    },
    {
      "name": "left, right",
      "purpose": "Expanding mirror pointers."
    },
    {
      "name": "current",
      "purpose": "Palindrome produced by one center expansion."
    },
    {
      "name": "best",
      "purpose": "Longest palindrome seen so far."
    }
  ],
  "dryRun": [
    {
      "label": "babad",
      "title": "Center at a",
      "note": "Expanding around index 1 yields bab.",
      "activeLine": 12,
      "codeInsight": "Odd centers call expand(index, index)."
    },
    {
      "label": "Mirror",
      "title": "b equals b",
      "note": "left and right move outward while characters match.",
      "activeLine": 5,
      "codeInsight": "The while condition is the palindrome check."
    },
    {
      "label": "Best",
      "title": "Store bab",
      "note": "bab is longer than the previous best.",
      "activeLine": 10,
      "codeInsight": "best changes only after a full center expansion."
    },
    {
      "label": "Even",
      "title": "Check gap centers",
      "note": "The second expand call handles even-length palindromes.",
      "activeLine": 13,
      "codeInsight": "Even centers prevent missing double-letter palindromes."
    }
  ],
  "complexity": {
    "time": "O(n^2).",
    "space": "O(1) auxiliary space."
  },
  "quiz": {
    "question": "Which state keeps Longest Palindromic Substring correct?",
    "options": [
      {
        "key": "A",
        "text": "Track center expansion pointers and update best only after a valid palindrome is known.",
        "correct": true
      },
      {
        "key": "B",
        "text": "Reuse another string algorithm's state names without matching its invariant.",
        "correct": false
      },
      {
        "key": "C",
        "text": "Advance indices without the mismatch, hash, frequency, trie, or radius rule.",
        "correct": false
      }
    ],
    "correctText": "Correct. Longest Palindromic Substring works because the page state follows that exact string invariant.",
    "incorrectText": "Not quite. Longest Palindromic Substring needs its own string state and stop condition."
  },
  "categorySlug": "strings",
  "algorithmSlug": "longest-palindromic-substring",
  "runnerInput": [
    "babad"
  ],
  "animation": {
    "type": "string-flow",
    "static": true,
    "title": "Longest Palindromic Substring trace",
    "ruleLabel": "String invariant",
    "rule": "A center expands while left and right characters match; the best substring updates after expansion stops.",
    "text": "babad",
    "pattern": "expand centers",
    "steps": [
      {
        "phase": "center a",
        "title": "Start at index 1",
        "note": "a is the center of a possible odd palindrome.",
        "ruleLabel": "String invariant",
        "rule": "A center expands while left and right characters match; the best substring updates after expansion stops.",
        "activeRange": [
          1,
          1
        ],
        "matchedRange": []
      },
      {
        "phase": "expand",
        "title": "b a b matches",
        "note": "Characters at indices 0 and 2 match.",
        "ruleLabel": "String invariant",
        "rule": "A center expands while left and right characters match; the best substring updates after expansion stops.",
        "activeRange": [
          0,
          2
        ],
        "matchedRange": [
          0,
          2
        ]
      },
      {
        "phase": "best bab",
        "title": "Store longest so far",
        "note": "bab becomes best.",
        "ruleLabel": "String invariant",
        "rule": "A center expands while left and right characters match; the best substring updates after expansion stops.",
        "activeRange": [
          0,
          2
        ],
        "matchedRange": [
          0,
          2
        ]
      },
      {
        "phase": "next centers",
        "title": "Continue scanning",
        "note": "Every center is checked for a longer palindrome.",
        "ruleLabel": "String invariant",
        "rule": "A center expands while left and right characters match; the best substring updates after expansion stops.",
        "activeRange": [
          2,
          3
        ],
        "matchedRange": []
      }
    ]
  }
};
