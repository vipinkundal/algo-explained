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
  "meaning": "KMP Algorithm is taught with its own string state, transition, code trace, and stopping rule.",
  "problem": "Find every occurrence of a pattern in text without rechecking characters that the prefix table already explains.",
  "concept": "KMP preprocesses the pattern into an LPS table. On mismatch, the pattern index falls back to the longest proper prefix that is also a suffix.",
  "logicSummary": "Build the LPS table for the pattern, scan text with indices i and j, and use LPS fallback instead of moving i backward.",
  "transitionSummary": "A character match advances i and j; a mismatch with j > 0 sets j = lps[j - 1]; a mismatch at j = 0 advances i.",
  "codeInsight": "The text index never moves backward. All reused work is encoded in the pattern's LPS fallback table.",
  "realLifeExample": "Use KMP for search boxes, command matching, DNA motif search, or any exact substring search that must avoid repeated scans.",
  "whenToUse": "Use KMP when many repeated prefixes in the pattern make naive backtracking expensive.",
  "memoryTrick": "KMP keeps text moving and lets the pattern jump.",
  "visualizerCaption": "The trace shows LPS construction and the text scan using fallback jumps.",
  "logicSteps": [
    {
      "title": "Build LPS table",
      "text": "For each pattern index, store the longest reusable prefix length."
    },
    {
      "title": "Compare text and pattern",
      "text": "Move i and j while characters match."
    },
    {
      "title": "Fallback on mismatch",
      "text": "Use lps[j - 1] so the text index does not rewind."
    },
    {
      "title": "Record match",
      "text": "When j reaches pattern length, save i - j and fallback again for overlaps."
    }
  ],
  "variables": [
    {
      "name": "text, pattern",
      "purpose": "The search text and exact pattern to locate."
    },
    {
      "name": "lps",
      "purpose": "Pattern fallback table for matched prefix lengths."
    },
    {
      "name": "i, j",
      "purpose": "Text index and pattern index during scan."
    },
    {
      "name": "matches",
      "purpose": "Starting indices where the full pattern is found."
    }
  ],
  "dryRun": [
    {
      "label": "LPS",
      "title": "Build fallback table for ababc",
      "note": "The prefix ab reappears before the final c, so lps ends as [0,0,1,2,0].",
      "activeLine": 2,
      "codeInsight": "The preprocessing loop updates only pattern state."
    },
    {
      "label": "Scan",
      "title": "Match abab in text",
      "note": "i and j advance together while text characters match the pattern prefix.",
      "activeLine": 12,
      "codeInsight": "Text progress is never undone."
    },
    {
      "label": "Fallback",
      "title": "Mismatch at c",
      "note": "j falls from 4 to lps[3] = 2 instead of restarting from zero.",
      "activeLine": 19,
      "codeInsight": "The fallback reuses the already-matched suffix."
    },
    {
      "label": "Match",
      "title": "Record index 0",
      "note": "When j reaches pattern length, i - j is the full match start.",
      "activeLine": 16,
      "codeInsight": "After recording, KMP falls back again so the scan can find the later match at index 5."
    }
  ],
  "complexity": {
    "time": "O(n + m), where n is text length and m is pattern length.",
    "space": "O(m) for the LPS table."
  },
  "quiz": {
    "question": "Which state keeps KMP Algorithm correct?",
    "options": [
      {
        "key": "A",
        "text": "Track the LPS table plus text/pattern indices, and use LPS for every mismatch fallback.",
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
    "correctText": "Correct. KMP Algorithm works because the page state follows that exact string invariant.",
    "incorrectText": "Not quite. KMP Algorithm needs its own string state and stop condition."
  },
  "categorySlug": "strings",
  "algorithmSlug": "kmp",
  "runnerInput": [
    "ababcababc",
    "ababc"
  ],
  "animation": {
    "type": "string-flow",
    "static": true,
    "title": "KMP Algorithm trace",
    "ruleLabel": "String invariant",
    "rule": "A character match advances i and j; a mismatch with j > 0 sets j = lps[j - 1]; a mismatch at j = 0 advances i.",
    "text": "ababcababc",
    "pattern": "ababc",
    "steps": [
      {
        "phase": "LPS build",
        "title": "Create [0,0,1,2,0]",
        "note": "The pattern remembers reusable prefix lengths.",
        "ruleLabel": "String invariant",
        "rule": "lps[index] stores how much of the pattern can survive a mismatch.",
        "activeRange": [
          0,
          4
        ],
        "matchedRange": []
      },
      {
        "phase": "scan i=0..3",
        "title": "Match abab",
        "note": "Text and pattern move together during successful comparisons.",
        "ruleLabel": "String invariant",
        "rule": "A character match advances i and j; a mismatch with j > 0 sets j = lps[j - 1]; a mismatch at j = 0 advances i.",
        "activeRange": [
          0,
          3
        ],
        "matchedRange": []
      },
      {
        "phase": "fallback",
        "title": "Mismatch uses lps[3]",
        "note": "The pattern index jumps to 2; the text index stays in place.",
        "ruleLabel": "String invariant",
        "rule": "A character match advances i and j; a mismatch with j > 0 sets j = lps[j - 1]; a mismatch at j = 0 advances i.",
        "activeRange": [
          2,
          4
        ],
        "matchedRange": []
      },
      {
        "phase": "match at 0",
        "title": "Full pattern found",
        "note": "The window from 0 through 4 equals ababc.",
        "ruleLabel": "String invariant",
        "rule": "A character match advances i and j; a mismatch with j > 0 sets j = lps[j - 1]; a mismatch at j = 0 advances i.",
        "activeRange": [
          0,
          4
        ],
        "matchedRange": [
          0,
          4
        ]
      }
    ]
  }
};
