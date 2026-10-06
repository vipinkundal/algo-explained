// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-string-duplicates",
  "title": "String Duplicates",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Strings",
  "sourceFolder": "06_string",
  "sourceFile": "07_duplicates.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/string-duplicates",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "string-scan",
  "icon": "abc",
  "codePath": "./src/algorithms/data-structures/string-duplicates/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/string-duplicates/code/original.cpp",
  "originalCodeFilename": "07_duplicates.cpp",
  "originalActiveLine": 4,
  "meaning": "Find duplicate characters by tracking how often each character appears.",
  "problem": "Find duplicate characters by tracking how often each character appears.",
  "concept": "Find duplicate characters by tracking how often each character appears.",
  "logicSummary": "Find duplicate characters by tracking how often each character appears.",
  "transitionSummary": "In banana, a occurs 3 times and n occurs twice.",
  "codeInsight": "Find duplicate characters by tracking how often each character appears.",
  "originalCodeInsight": "The loop is the transition: it repeatedly visits elements or nodes and updates the structure state.",
  "realLifeExample": "In banana, a occurs 3 times and n occurs twice.",
  "whenToUse": "Find duplicate characters by tracking how often each character appears.",
  "memoryTrick": "Find duplicate characters by tracking how often each character appears.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Find duplicate characters by tracking how often each character appears."
    },
    {
      "title": "Work through a small case",
      "text": "In banana, a occurs 3 times and n occurs twice."
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
      "note": "Find duplicate characters by tracking how often each character appears.",
      "activeLine": 2,
      "codeInsight": "Find duplicate characters by tracking how often each character appears."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "In banana, a occurs 3 times and n occurs twice.",
      "activeLine": 5,
      "codeInsight": "Find duplicate characters by tracking how often each character appears."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying String Duplicates?",
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
  "algorithmSlug": "string-duplicates",
  "animation": {
    "type": "string-flow",
    "title": "String Duplicates character scan",
    "ruleLabel": "String invariant",
    "rule": "Each step consumes one character and updates prefix, hash, frequency, trie, or palindrome state.",
    "text": "stringduplic",
    "pattern": "str",
    "steps": [
      {
        "phase": "Text",
        "title": "Read string input",
        "note": "The code receives text, pattern, or character data.",
        "ruleLabel": "String Duplicates invariant",
        "rule": "Defines stringDuplicates as the runnable entry point for this lesson.",
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
        "ruleLabel": "String Duplicates invariant",
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
        "ruleLabel": "String Duplicates invariant",
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
        "ruleLabel": "String Duplicates invariant",
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
    "example": "In banana, a occurs 3 times and n occurs twice.",
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
    "checkpoint": "Explain this in your own words: Find duplicate characters by tracking how often each character appears."
  }
};
