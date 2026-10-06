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
  "meaning": "Find pattern matches by comparing rolling hash values before confirming matching text windows.",
  "problem": "Find pattern matches by comparing rolling hash values before confirming matching text windows.",
  "concept": "Rabin-Karp gives every window a hash. Sliding the window updates the hash in O(1), and exact string comparison handles collisions.",
  "logicSummary": "Compute the pattern hash and first window hash, slide one character at a time, update the rolling hash, and verify equal hashes.",
  "transitionSummary": "Remove the outgoing character contribution, multiply by base, add the incoming character, and normalize by modulus.",
  "codeInsight": "Hash equality is only a candidate match. The code still checks text.slice(...) to avoid false positives from collisions.",
  "realLifeExample": "Use it for multi-pattern search, plagiarism checks, and fast candidate filtering over long text.",
  "whenToUse": "Use Rabin-Karp when rolling hashes can quickly reject most windows.",
  "memoryTrick": "Slide the hash, then verify the match.",
  "visualizerCaption": "Explore Rabin-Karp Algorithm through a sample teaching model, then compare it with the runnable result.",
  "logicSteps": [
    {
      "title": "Hash pattern",
      "text": "Compute the hash for the exact pattern."
    },
    {
      "title": "Hash first window",
      "text": "Compute the text hash for the first pattern-sized window."
    },
    {
      "title": "Slide window",
      "text": "Update hash by removing one char and adding the next."
    },
    {
      "title": "Verify candidate",
      "text": "When hashes match, compare the actual strings."
    }
  ],
  "variables": [
    {
      "name": "patternHash",
      "purpose": "Hash of the pattern."
    },
    {
      "name": "windowHash",
      "purpose": "Rolling hash of current text window."
    },
    {
      "name": "highestPower",
      "purpose": "Contribution multiplier for outgoing character."
    },
    {
      "name": "matches",
      "purpose": "Verified match indices."
    }
  ],
  "dryRun": [
    {
      "label": "Hash",
      "title": "Hash aba",
      "note": "The pattern hash is computed once.",
      "activeLine": 15,
      "codeInsight": "Initial hashes are built with the same base and modulus."
    },
    {
      "label": "Window 0",
      "title": "Check abr",
      "note": "The first hash does not match aba.",
      "activeLine": 18,
      "codeInsight": "Non-matching hashes skip exact comparison."
    },
    {
      "label": "Slide",
      "title": "Move to bra then rac",
      "note": "Outgoing and incoming characters update the rolling hash.",
      "activeLine": 22,
      "codeInsight": "The slide formula avoids rebuilding the hash from scratch."
    },
    {
      "label": "Verify",
      "title": "Hash match at index 7",
      "note": "The hash matches and exact comparison confirms aba.",
      "activeLine": 19,
      "codeInsight": "Exact comparison protects against collisions."
    }
  ],
  "complexity": {
    "time": "Average O(n + m), worst-case O(nm) if many hash collisions verify.",
    "space": "O(1) besides matches."
  },
  "quiz": {
    "question": "Which explanation best describes Rabin-Karp Algorithm?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "Find pattern matches by comparing rolling hash values before confirming matching text windows.",
        "correct": true
      },
      {
        "key": "C",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      }
    ],
    "correctText": "Correct. Find pattern matches by comparing rolling hash values before confirming matching text windows.",
    "incorrectText": "Try again. Find pattern matches by comparing rolling hash values before confirming matching text windows. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "strings",
  "algorithmSlug": "rabin-karp",
  "runnerInput": [
    "abracadabra",
    "abra"
  ],
  "animation": {
    "type": "string-flow",
    "static": true,
    "title": "Rabin-Karp Algorithm trace",
    "ruleLabel": "String invariant",
    "rule": "Remove the outgoing character contribution, multiply by base, add the incoming character, and normalize by modulus.",
    "text": "abracadabra",
    "pattern": "abra",
    "steps": [
      {
        "phase": "pattern hash",
        "title": "Hash abra",
        "note": "Create a numeric fingerprint for the pattern.",
        "ruleLabel": "String invariant",
        "rule": "Remove the outgoing character contribution, multiply by base, add the incoming character, and normalize by modulus.",
        "activeRange": [
          0,
          3
        ],
        "matchedRange": []
      },
      {
        "phase": "window 0",
        "title": "Compare first window",
        "note": "abracadabra starts with abra, so index 0 verifies.",
        "ruleLabel": "String invariant",
        "rule": "Remove the outgoing character contribution, multiply by base, add the incoming character, and normalize by modulus.",
        "activeRange": [
          0,
          3
        ],
        "matchedRange": [
          0,
          3
        ]
      },
      {
        "phase": "slide",
        "title": "Update rolling hash",
        "note": "Remove a and add c for the next window.",
        "ruleLabel": "String invariant",
        "rule": "Remove the outgoing character contribution, multiply by base, add the incoming character, and normalize by modulus.",
        "activeRange": [
          1,
          4
        ],
        "matchedRange": []
      },
      {
        "phase": "window 7",
        "title": "Verify second match",
        "note": "The final window abra also verifies.",
        "ruleLabel": "String invariant",
        "rule": "Remove the outgoing character contribution, multiply by base, add the incoming character, and normalize by modulus.",
        "activeRange": [
          7,
          10
        ],
        "matchedRange": [
          7,
          10
        ]
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "A string is an ordered sequence. A substring occupies consecutive positions; a subsequence can skip positions.",
    "family": "Characters and positions",
    "example": "Hash pattern: Compute the hash for the exact pattern. Hash first window: Compute the text hash for the first pattern-sized window. Slide window: Update hash by removing one char and adding the next. Verify candidate: When hashes match, compare the actual strings.",
    "sampleInput": [
      "abracadabra",
      "abra"
    ],
    "sampleResult": [
      0,
      7
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
    "checkpoint": "Explain this in your own words: Find pattern matches by comparing rolling hash values before confirming matching text windows."
  },
  "relatedLinks": []
};
