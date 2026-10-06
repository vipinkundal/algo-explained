// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-string-vowels-no-of-words",
  "title": "String Vowels No Of Words",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Strings",
  "sourceFolder": "06_string",
  "sourceFile": "03_vowels_no_of_words.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/string-vowels-no-of-words",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "string-scan",
  "icon": "abc",
  "codePath": "./src/algorithms/data-structures/string-vowels-no-of-words/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/string-vowels-no-of-words/code/original.cpp",
  "originalCodeFilename": "03_vowels_no_of_words.cpp",
  "originalActiveLine": 2,
  "meaning": "Scan text to count vowel characters and transitions between words and separators.",
  "problem": "Scan text to count vowel characters and transitions between words and separators.",
  "concept": "Scan text to count vowel characters and transitions between words and separators.",
  "logicSummary": "Scan text to count vowel characters and transitions between words and separators.",
  "transitionSummary": "With whitespace-separated words, a red apple has 3 words and 4 vowels.",
  "codeInsight": "Scan text to count vowel characters and transitions between words and separators.",
  "originalCodeInsight": "The loop is the transition: it repeatedly visits elements or nodes and updates the structure state.",
  "realLifeExample": "With whitespace-separated words, a red apple has 3 words and 4 vowels.",
  "whenToUse": "Scan text to count vowel characters and transitions between words and separators.",
  "memoryTrick": "Scan text to count vowel characters and transitions between words and separators.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Scan text to count vowel characters and transitions between words and separators."
    },
    {
      "title": "Work through a small case",
      "text": "With whitespace-separated words, a red apple has 3 words and 4 vowels."
    },
    {
      "title": "Check the boundary cases",
      "text": "Check empty strings and repeated characters. State whether case, spaces, and Unicode characters affect matching."
    }
  ],
  "variables": [
    {
      "name": "text",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
    },
    {
      "name": "reversed",
      "purpose": "Holds a separate copy of the values so working changes do not overwrite the caller’s array."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "Scan text to count vowel characters and transitions between words and separators.",
      "activeLine": 2,
      "codeInsight": "Scan text to count vowel characters and transitions between words and separators."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "With whitespace-separated words, a red apple has 3 words and 4 vowels.",
      "activeLine": 5,
      "codeInsight": "Scan text to count vowel characters and transitions between words and separators."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying String Vowels No Of Words?",
    "options": [
      {
        "key": "A",
        "text": "The memory/state representation and invariant.",
        "correct": true
      },
      {
        "key": "B",
        "text": "Only the final cout output.",
        "correct": false
      },
      {
        "key": "C",
        "text": "A different algorithm with the same name.",
        "correct": false
      }
    ],
    "correctKey": "A",
    "correctText": "Correct. Data-structure code is easiest to understand when the state representation is clear first.",
    "incorrectText": "Not quite. Start with the structure state, then follow the operation that mutates or reads it."
  },
  "relatedAlgorithmIds": [
    "anagram-detection"
  ],
  "relatedLinks": [
    {
      "id": "anagram-detection",
      "title": "Anagram Detection",
      "label": "Existing algorithm lesson"
    }
  ],
  "runnerInput": [],
  "categorySlug": "data-structures",
  "algorithmSlug": "string-vowels-no-of-words",
  "animation": {
    "type": "string-flow",
    "title": "String Vowels No Of Words character scan",
    "ruleLabel": "String invariant",
    "rule": "Each step consumes one character and updates prefix, hash, frequency, trie, or palindrome state.",
    "text": "stringvowels",
    "pattern": "str",
    "steps": [
      {
        "phase": "Text",
        "title": "Read string input",
        "note": "The code receives text, pattern, or character data.",
        "ruleLabel": "String Vowels No Of Words invariant",
        "rule": "Defines stringVowelsNoOfWords as the runnable entry point for this lesson.",
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
        "ruleLabel": "String Vowels No Of Words invariant",
        "rule": "Stores text so the algorithm can reuse this value without recomputing it.",
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
        "ruleLabel": "String Vowels No Of Words invariant",
        "rule": "Returns the final state object { structure: \"string\", input: text, reversed, length: text.length }, exposing the exact fields the visualizer has been tracking.",
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
        "ruleLabel": "String Vowels No Of Words invariant",
        "rule": "Returns the final state object { structure: \"string\", input: text, reversed, length: text.length }, exposing the exact fields the visualizer has been tracking.",
        "activeRange": [
          3,
          5
        ],
        "matchedRange": [
          0,
          2
        ]
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "A string is an ordered sequence. A substring occupies consecutive positions; a subsequence can skip positions.",
    "family": "Characters and positions",
    "example": "With whitespace-separated words, a red apple has 3 words and 4 vowels.",
    "sampleInput": [],
    "sampleResult": {
      "structure": "string",
      "input": "decimal",
      "reversed": "lamiced",
      "length": 7
    },
    "sampleScope": "This runnable JavaScript companion illustrates the data structure. Its returned snapshot may cover fewer operations than the C/C++ reference. The topic example above explains the named operation.",
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
    "checkpoint": "Explain this in your own words: Scan text to count vowel characters and transitions between words and separators."
  }
};
