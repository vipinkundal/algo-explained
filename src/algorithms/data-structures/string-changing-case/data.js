// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-string-changing-case",
  "title": "String Changing Case",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Strings",
  "sourceFolder": "06_string",
  "sourceFile": "02_changing_case.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/string-changing-case",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "string-scan",
  "icon": "abc",
  "codePath": "./src/algorithms/data-structures/string-changing-case/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/string-changing-case/code/original.cpp",
  "originalCodeFilename": "02_changing_case.cpp",
  "originalActiveLine": 2,
  "meaning": "Case conversion changes alphabetic characters between uppercase and lowercase.",
  "problem": "Case conversion changes alphabetic characters between uppercase and lowercase.",
  "concept": "Case conversion changes alphabetic characters between uppercase and lowercase.",
  "logicSummary": "Case conversion changes alphabetic characters between uppercase and lowercase.",
  "transitionSummary": "AbC becomes abc in lowercase and ABC in uppercase. ASCII arithmetic does not cover every Unicode letter.",
  "codeInsight": "Case conversion changes alphabetic characters between uppercase and lowercase.",
  "originalCodeInsight": "The loop is the transition: it repeatedly visits elements or nodes and updates the structure state.",
  "realLifeExample": "AbC becomes abc in lowercase and ABC in uppercase. ASCII arithmetic does not cover every Unicode letter.",
  "whenToUse": "Case conversion changes alphabetic characters between uppercase and lowercase.",
  "memoryTrick": "Case conversion changes alphabetic characters between uppercase and lowercase.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Case conversion changes alphabetic characters between uppercase and lowercase."
    },
    {
      "title": "Work through a small case",
      "text": "AbC becomes abc in lowercase and ABC in uppercase. ASCII arithmetic does not cover every Unicode letter."
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
      "note": "Case conversion changes alphabetic characters between uppercase and lowercase.",
      "activeLine": 2,
      "codeInsight": "Case conversion changes alphabetic characters between uppercase and lowercase."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "AbC becomes abc in lowercase and ABC in uppercase. ASCII arithmetic does not cover every Unicode letter.",
      "activeLine": 5,
      "codeInsight": "Case conversion changes alphabetic characters between uppercase and lowercase."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying String Changing Case?",
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
  "algorithmSlug": "string-changing-case",
  "animation": {
    "type": "string-flow",
    "title": "String Changing Case character scan",
    "ruleLabel": "String invariant",
    "rule": "Each step consumes one character and updates prefix, hash, frequency, trie, or palindrome state.",
    "text": "stringchangi",
    "pattern": "str",
    "steps": [
      {
        "phase": "Text",
        "title": "Read string input",
        "note": "The code receives text, pattern, or character data.",
        "ruleLabel": "String Changing Case invariant",
        "rule": "Defines stringChangingCase as the runnable entry point for this lesson.",
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
        "ruleLabel": "String Changing Case invariant",
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
        "ruleLabel": "String Changing Case invariant",
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
        "ruleLabel": "String Changing Case invariant",
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
    "example": "AbC becomes abc in lowercase and ABC in uppercase. ASCII arithmetic does not cover every Unicode letter.",
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
    "checkpoint": "Explain this in your own words: Case conversion changes alphabetic characters between uppercase and lowercase."
  }
};
