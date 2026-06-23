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
  "meaning": "String Changing Case shows how data is organized, changed, and inspected through a small browser demo with a C/C++ reference available beside it.",
  "problem": "String Changing Case explains the string state model and how one focused change updates it.",
  "concept": "String algorithms are useful when character order, frequency, prefix, hash, or palindrome structure can be reused. Use this when scanning every substring directly would repeat character work.",
  "logicSummary": "Prepare helper state, scan characters, update the pattern state, and record matches or the best string result.",
  "transitionSummary": "Each step consumes one character and updates prefix, hash, frequency, trie, or palindrome state.",
  "codeInsight": "Use the Runnable JS tab to edit inputs and see browser-safe output. Use the C/C++ Reference tab to study the source implementation.",
  "originalCodeInsight": "The loop is the transition: it repeatedly visits elements or nodes and updates the structure state.",
  "realLifeExample": "String Changing Case is useful when you need to understand the mechanics behind library-level data structures.",
  "whenToUse": "Use this page when learning Strings behavior through state changes instead of memorized code.",
  "memoryTrick": "String Changing Case: name the invariant, then trace the exact state change.",
  "visualizerCaption": "String Changing Case is shown as character-state updates. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Read text",
      "text": "Identify text, pattern, or character rule."
    },
    {
      "title": "Prepare state",
      "text": "Build frequency, prefix, hash, trie, or radius state."
    },
    {
      "title": "Scan character",
      "text": "Consume the next character and update state."
    },
    {
      "title": "Return match",
      "text": "Return matches, validity, or the best substring result."
    }
  ],
  "variables": [
    {
      "name": "read index",
      "purpose": "Selects the current character."
    },
    {
      "name": "write index",
      "purpose": "Marks where the next transformed character lands."
    },
    {
      "name": "character bag",
      "purpose": "Tracks characters considered by String Changing Case."
    },
    {
      "name": "text result",
      "purpose": "Shows the string after the scan or transformation."
    }
  ],
  "dryRun": [
    {
      "label": "Text",
      "title": "Read string input",
      "note": "The code receives text, pattern, or character data.",
      "activeLine": 2,
      "codeInsight": "Defines stringChangingCase as the runnable entry point for this lesson."
    },
    {
      "label": "Helper",
      "title": "Prepare string state",
      "note": "Prefix, hash, frequency, or radius state avoids repeated work.",
      "activeLine": 3,
      "codeInsight": "Stores text so the algorithm can reuse this value without recomputing it."
    },
    {
      "label": "Character",
      "title": "Update on current char",
      "note": "One character changes the active string state.",
      "activeLine": 5,
      "codeInsight": "Returns the final state object { structure: \"string\", input: text, reversed, length: text.length }, exposing the exact fields the visualizer has been tracking."
    },
    {
      "label": "Result",
      "title": "Return string answer",
      "note": "Matches or best values are returned after the scan.",
      "activeLine": 5,
      "codeInsight": "Returns the final state object { structure: \"string\", input: text, reversed, length: text.length }, exposing the exact fields the visualizer has been tracking."
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
  }
};
