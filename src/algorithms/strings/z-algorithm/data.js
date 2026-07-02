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
  "meaning": "Z Algorithm is taught with its own string state, transition, code trace, and stopping rule.",
  "problem": "Find pattern matches by computing, for every position, how many characters match the combined string prefix.",
  "concept": "The Z-array stores prefix match length at each position. A Z-box [left, right] reuses earlier comparisons inside the current matching window.",
  "logicSummary": "Build pattern + sentinel + text, compute Z values with a reusable Z-box, then report text positions whose Z value equals pattern length.",
  "transitionSummary": "Inside the Z-box copy the known minimum match; outside or after copying, expand while characters match and update the box.",
  "codeInsight": "The sentinel prevents matches from crossing from pattern into text accidentally.",
  "realLifeExample": "Use it for exact string matching, prefix analysis, and problems asking for repeated prefix lengths.",
  "whenToUse": "Use Z Algorithm when prefix-match lengths for many positions are useful.",
  "memoryTrick": "Z[i] says how much prefix starts again at i.",
  "visualizerCaption": "The trace shows combined string positions, Z-box reuse, expansion, and match extraction.",
  "logicSteps": [
    {
      "title": "Combine strings",
      "text": "Use pattern + sentinel + text."
    },
    {
      "title": "Reuse Z-box",
      "text": "If index is inside [left, right], copy the known bounded Z value."
    },
    {
      "title": "Expand match",
      "text": "Compare beyond the box while prefix characters match."
    },
    {
      "title": "Report matches",
      "text": "A text-side Z value equal to pattern length marks a match."
    }
  ],
  "variables": [
    {
      "name": "combined",
      "purpose": "pattern + sentinel + text."
    },
    {
      "name": "z",
      "purpose": "Prefix match length for every combined index."
    },
    {
      "name": "left, right",
      "purpose": "Current Z-box boundaries."
    },
    {
      "name": "matches",
      "purpose": "Text indices where z[index] equals pattern length."
    }
  ],
  "dryRun": [
    {
      "label": "Combine",
      "title": "aba$ababa",
      "note": "The sentinel separates pattern from text.",
      "activeLine": 2,
      "codeInsight": "Combined indexing makes text matches visible as prefix matches."
    },
    {
      "label": "Expand",
      "title": "At index 4, match aba",
      "note": "Z[4] becomes 3 because the text starts with aba.",
      "activeLine": 6,
      "codeInsight": "The while loop expands direct character matches."
    },
    {
      "label": "Z-box",
      "title": "Reuse [4,6]",
      "note": "Positions inside the box can copy bounded Z values.",
      "activeLine": 5,
      "codeInsight": "Z-box reuse avoids repeated comparisons."
    },
    {
      "label": "Report",
      "title": "Z value equals pattern length",
      "note": "A value of 3 on the text side reports a match.",
      "activeLine": 12,
      "codeInsight": "Subtract pattern.length + 1 to convert combined index to text index."
    }
  ],
  "complexity": {
    "time": "O(n + m).",
    "space": "O(n + m) for combined string and Z array."
  },
  "quiz": {
    "question": "Which state keeps Z Algorithm correct?",
    "options": [
      {
        "key": "A",
        "text": "Track the combined string, Z array, and current Z-box while extracting matches.",
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
    "correctText": "Correct. Z Algorithm works because the page state follows that exact string invariant.",
    "incorrectText": "Not quite. Z Algorithm needs its own string state and stop condition."
  },
  "categorySlug": "strings",
  "algorithmSlug": "z-algorithm",
  "runnerInput": [
    "ababa",
    "aba"
  ],
  "animation": {
    "type": "string-flow",
    "static": true,
    "title": "Z Algorithm trace",
    "ruleLabel": "String invariant",
    "rule": "Inside the Z-box copy the known minimum match; outside or after copying, expand while characters match and update the box.",
    "text": "aba$ababa",
    "pattern": "aba",
    "steps": [
      {
        "phase": "combine",
        "title": "Build aba$ababa",
        "note": "The sentinel separates pattern and text.",
        "ruleLabel": "String invariant",
        "rule": "Inside the Z-box copy the known minimum match; outside or after copying, expand while characters match and update the box.",
        "activeRange": [
          0,
          2
        ],
        "matchedRange": []
      },
      {
        "phase": "Z[4]=3",
        "title": "Expand at text start",
        "note": "The prefix aba matches at combined index 4.",
        "ruleLabel": "String invariant",
        "rule": "Inside the Z-box copy the known minimum match; outside or after copying, expand while characters match and update the box.",
        "activeRange": [
          4,
          6
        ],
        "matchedRange": [
          4,
          6
        ]
      },
      {
        "phase": "Z-box",
        "title": "Reuse box [4,6]",
        "note": "Known matches bound the next Z values.",
        "ruleLabel": "String invariant",
        "rule": "Inside the Z-box copy the known minimum match; outside or after copying, expand while characters match and update the box.",
        "activeRange": [
          4,
          6
        ],
        "matchedRange": []
      },
      {
        "phase": "match",
        "title": "Report text index 0",
        "note": "Z[4] equals pattern length 3.",
        "ruleLabel": "String invariant",
        "rule": "Inside the Z-box copy the known minimum match; outside or after copying, expand while characters match and update the box.",
        "activeRange": [
          4,
          6
        ],
        "matchedRange": [
          4,
          6
        ]
      }
    ]
  }
};
