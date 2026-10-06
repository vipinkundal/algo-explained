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
  "meaning": "Find pattern matches by computing, for every position, how many characters match the combined string prefix.",
  "problem": "Find pattern matches by computing, for every position, how many characters match the combined string prefix.",
  "concept": "The Z-array stores prefix match length at each position. A Z-box [left, right] reuses earlier comparisons inside the current matching window.",
  "logicSummary": "Build pattern + sentinel + text, compute Z values with a reusable Z-box, then report text positions whose Z value equals pattern length.",
  "transitionSummary": "Inside the Z-box copy the known minimum match; outside or after copying, expand while characters match and update the box.",
  "codeInsight": "The sentinel prevents matches from crossing from pattern into text accidentally.",
  "realLifeExample": "Use it for exact string matching, prefix analysis, and problems asking for repeated prefix lengths.",
  "whenToUse": "Use Z Algorithm when prefix-match lengths for many positions are useful.",
  "memoryTrick": "Z[i] says how much prefix starts again at i.",
  "visualizerCaption": "Explore Z Algorithm through a sample teaching model, then compare it with the runnable result.",
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
    "question": "Which explanation best describes Z Algorithm?",
    "options": [
      {
        "key": "A",
        "text": "Find pattern matches by computing, for every position, how many characters match the combined string prefix.",
        "correct": true
      },
      {
        "key": "B",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "C",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      }
    ],
    "correctText": "Correct. Find pattern matches by computing, for every position, how many characters match the combined string prefix.",
    "incorrectText": "Try again. Find pattern matches by computing, for every position, how many characters match the combined string prefix. Compare the small example in the lesson with your choice."
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
  },
  "learningGuide": {
    "mentalModel": "A string is an ordered sequence. A substring occupies consecutive positions; a subsequence can skip positions.",
    "family": "Characters and positions",
    "example": "Combine strings: Use pattern + sentinel + text. Reuse Z-box: If index is inside [left, right], copy the known bounded Z value. Expand match: Compare beyond the box while prefix characters match. Report matches: A text-side Z value equal to pattern length marks a match.",
    "sampleInput": [
      "ababa",
      "aba"
    ],
    "sampleResult": [
      0,
      2
    ],
    "sampleScope": "This is the result of the unedited JavaScript function with the sample arguments. Changing the input or code can change the result.",
    "terms": [
      [
        "Prefix",
        "Characters at the beginning of a string."
      ],
      [
        "Substring",
        "A consecutive section of a string."
      ],
      [
        "Frequency",
        "How often a character occurs."
      ]
    ],
    "pitfall": "Check empty strings and repeated characters. State whether case, spaces, and Unicode characters affect matching.",
    "checkpoint": "Explain this in your own words: Find pattern matches by computing, for every position, how many characters match the combined string prefix."
  },
  "relatedLinks": []
};
