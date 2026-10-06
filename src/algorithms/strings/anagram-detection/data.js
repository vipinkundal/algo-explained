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
  "meaning": "Decide whether two strings contain the same characters with the same frequencies.",
  "problem": "Decide whether two strings contain the same characters with the same frequencies.",
  "concept": "Anagram detection compares frequency balance, not character order.",
  "logicSummary": "Reject unequal lengths, count characters in the first string, subtract characters from the second string, and fail if any count would go negative.",
  "transitionSummary": "Each character in the second string consumes one previously counted character from the first string.",
  "codeInsight": "The length check is a real stop condition: two unequal-length strings cannot have identical character counts.",
  "realLifeExample": "Use it for word games, duplicate normalized names, and grouping words by character inventory.",
  "whenToUse": "Use frequency-based anagram detection when order is irrelevant but counts must match exactly.",
  "memoryTrick": "Same letters, same counts, any order.",
  "visualizerCaption": "Explore Anagram Detection through a sample teaching model, then compare it with the runnable result.",
  "logicSteps": [
    {
      "title": "Compare lengths",
      "text": "Unequal lengths return false immediately."
    },
    {
      "title": "Count first string",
      "text": "Add one count for each character."
    },
    {
      "title": "Subtract second string",
      "text": "Consume one count for each character in the second word."
    },
    {
      "title": "Return balanced",
      "text": "If no count is missing, the strings are anagrams."
    }
  ],
  "variables": [
    {
      "name": "first, second",
      "purpose": "Strings being compared."
    },
    {
      "name": "counts",
      "purpose": "Remaining characters from first after subtraction."
    },
    {
      "name": "char",
      "purpose": "Current character being counted or consumed."
    },
    {
      "name": "balanced counts",
      "purpose": "Condition proving both strings have equal character inventory."
    }
  ],
  "dryRun": [
    {
      "label": "Length",
      "title": "listen and silent both length 6",
      "note": "The algorithm can continue because lengths match.",
      "activeLine": 2,
      "codeInsight": "Unequal length would return before counting."
    },
    {
      "label": "Count",
      "title": "Count listen",
      "note": "counts has l, i, s, t, e, n each once.",
      "activeLine": 4,
      "codeInsight": "The first loop builds available inventory."
    },
    {
      "label": "Consume",
      "title": "Read silent",
      "note": "Each second-string character removes one matching count.",
      "activeLine": 6,
      "codeInsight": "A missing count proves not an anagram."
    },
    {
      "label": "True",
      "title": "All counts balanced",
      "note": "No character was missing, so return true.",
      "activeLine": 10,
      "codeInsight": "The method does not need to sort either string."
    }
  ],
  "complexity": {
    "time": "O(n).",
    "space": "O(k), where k is the number of distinct characters."
  },
  "quiz": {
    "question": "Which explanation best describes Anagram Detection?",
    "options": [
      {
        "key": "A",
        "text": "Decide whether two strings contain the same characters with the same frequencies.",
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
    "correctText": "Correct. Decide whether two strings contain the same characters with the same frequencies.",
    "incorrectText": "Try again. Decide whether two strings contain the same characters with the same frequencies. Compare the small example in the lesson with your choice."
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
    "static": true,
    "title": "Anagram Detection trace",
    "ruleLabel": "String invariant",
    "rule": "Each character in the second string consumes one previously counted character from the first string.",
    "text": "listen|silent",
    "pattern": "same frequency",
    "steps": [
      {
        "phase": "length",
        "title": "Lengths match",
        "note": "Both words have six characters.",
        "ruleLabel": "String invariant",
        "rule": "Each character in the second string consumes one previously counted character from the first string.",
        "activeRange": [
          0,
          5
        ],
        "matchedRange": []
      },
      {
        "phase": "count",
        "title": "Count listen",
        "note": "Build inventory from the first word.",
        "ruleLabel": "String invariant",
        "rule": "Each character in the second string consumes one previously counted character from the first string.",
        "activeRange": [
          0,
          5
        ],
        "matchedRange": []
      },
      {
        "phase": "consume",
        "title": "Consume silent",
        "note": "Every character in silent finds a count.",
        "ruleLabel": "String invariant",
        "rule": "Each character in the second string consumes one previously counted character from the first string.",
        "activeRange": [
          7,
          12
        ],
        "matchedRange": []
      },
      {
        "phase": "balanced",
        "title": "Anagram confirmed",
        "note": "The frequency inventory is fully balanced.",
        "ruleLabel": "String invariant",
        "rule": "Each character in the second string consumes one previously counted character from the first string.",
        "activeRange": [
          0,
          12
        ],
        "matchedRange": [
          0,
          12
        ]
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "A string is an ordered sequence. A substring occupies consecutive positions; a subsequence can skip positions.",
    "family": "Characters and positions",
    "example": "Compare lengths: Unequal lengths return false immediately. Count first string: Add one count for each character. Subtract second string: Consume one count for each character in the second word. Return balanced: If no count is missing, the strings are anagrams.",
    "sampleInput": [
      "listen",
      "silent"
    ],
    "sampleResult": true,
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
    "checkpoint": "Explain this in your own words: Decide whether two strings contain the same characters with the same frequencies."
  }
};
