// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-string-permutation-2",
  "title": "String Permutation",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Strings",
  "sourceFolder": "06_string",
  "sourceFile": "10_02_permutattion.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/string-permutation-2",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "string-scan",
  "icon": "abc",
  "codePath": "./src/algorithms/data-structures/string-permutation-2/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/string-permutation-2/code/original.cpp",
  "originalCodeFilename": "10_02_permutattion.cpp",
  "originalActiveLine": 3,
  "meaning": "A second permutation strategy swaps characters into each position and then undoes each swap.",
  "problem": "A second permutation strategy swaps characters into each position and then undoes each swap.",
  "concept": "A second permutation strategy swaps characters into each position and then undoes each swap.",
  "logicSummary": "A second permutation strategy swaps characters into each position and then undoes each swap.",
  "transitionSummary": "For abc, fix a first and arrange bc as bc or cb, then try b and c in the first position.",
  "codeInsight": "A second permutation strategy swaps characters into each position and then undoes each swap.",
  "originalCodeInsight": "The loop is the transition: it repeatedly visits elements or nodes and updates the structure state.",
  "realLifeExample": "For abc, fix a first and arrange bc as bc or cb, then try b and c in the first position.",
  "whenToUse": "A second permutation strategy swaps characters into each position and then undoes each swap.",
  "memoryTrick": "A second permutation strategy swaps characters into each position and then undoes each swap.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "A second permutation strategy swaps characters into each position and then undoes each swap."
    },
    {
      "title": "Work through a small case",
      "text": "For abc, fix a first and arrange bc as bc or cb, then try b and c in the first position."
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
      "note": "A second permutation strategy swaps characters into each position and then undoes each swap.",
      "activeLine": 2,
      "codeInsight": "A second permutation strategy swaps characters into each position and then undoes each swap."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "For abc, fix a first and arrange bc as bc or cb, then try b and c in the first position.",
      "activeLine": 5,
      "codeInsight": "A second permutation strategy swaps characters into each position and then undoes each swap."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying String Permutation?",
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
  "algorithmSlug": "string-permutation-2",
  "animation": {
    "type": "string-flow",
    "title": "String Permutation character scan",
    "ruleLabel": "String invariant",
    "rule": "Each step consumes one character and updates prefix, hash, frequency, trie, or palindrome state.",
    "text": "stringpermut",
    "pattern": "str",
    "steps": [
      {
        "phase": "Text",
        "title": "Read string input",
        "note": "The code receives text, pattern, or character data.",
        "ruleLabel": "String Permutation invariant",
        "rule": "Defines stringPermutation2 as the runnable entry point for this lesson.",
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
        "ruleLabel": "String Permutation invariant",
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
        "ruleLabel": "String Permutation invariant",
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
        "ruleLabel": "String Permutation invariant",
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
    "example": "For abc, fix a first and arrange bc as bc or cb, then try b and c in the first position.",
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
    "checkpoint": "Explain this in your own words: A second permutation strategy swaps characters into each position and then undoes each swap."
  }
};
