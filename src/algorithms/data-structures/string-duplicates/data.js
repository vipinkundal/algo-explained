// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this data-structure page without touching app.js.

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
  "meaning": "String Duplicates shows how data is organized, changed, and inspected through a small browser demo with the original C/C++ reference available beside it.",
  "problem": "String Duplicates explains the string state model and how one focused change updates it.",
  "concept": "Data structures are easier to learn when each value has a clear place and every change preserves a rule.",
  "logicSummary": "Track the active state, scan characters and update text state, and inspect the updated view.",
  "transitionSummary": "Move one step forward by changing only the slots, links, cursors, or nodes required by this operation.",
  "codeInsight": "Use the Runnable JS tab to edit inputs and see browser-safe output. Use the Original C/C++ tab to study the source implementation.",
  "originalCodeInsight": "The loop is the transition: it repeatedly visits elements or nodes and updates the structure state.",
  "realLifeExample": "String Duplicates is useful when you need to understand the mechanics behind library-level data structures.",
  "whenToUse": "Use this page when learning Strings behavior through state changes instead of memorized code.",
  "memoryTrick": "Name the moving part first, then ask which invariant must still be true.",
  "visualizerCaption": "A string scan walkthrough for String Duplicates.",
  "logicSteps": [
    {
      "title": "Map the state",
      "text": "Identify the values String Duplicates needs before any operation starts."
    },
    {
      "title": "Set the rule",
      "text": "Name the string invariant that should remain true after the step."
    },
    {
      "title": "Apply one change",
      "text": "Run the next action: scan characters and update text state."
    },
    {
      "title": "Read the view",
      "text": "Compare the before and after state to confirm the transition."
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
      "purpose": "Tracks characters considered by String Duplicates."
    },
    {
      "name": "text result",
      "purpose": "Shows the string after the scan or transformation."
    }
  ],
  "dryRun": [
    {
      "label": "State map",
      "title": "Prepare the working view",
      "note": "Start with the values that String Duplicates needs to inspect or change.",
      "activeLine": 1,
      "codeInsight": "The JS companion builds a compact state you can edit safely in the browser.",
      "originalCodeInsight": "The loop is the transition: it repeatedly visits elements or nodes and updates the structure state."
    },
    {
      "label": "Cursor move",
      "title": "Choose the active part",
      "note": "Focus on the read index before changing anything else.",
      "activeLine": 4,
      "codeInsight": "Keeping the active part explicit makes the output easier to debug.",
      "originalCodeInsight": "Initialization lines define the valid memory shape before mutation begins."
    },
    {
      "label": "State change",
      "title": "Apply the rule",
      "note": "Perform one string update and keep the invariant intact.",
      "activeLine": 7,
      "codeInsight": "This line group performs the browser-safe version of the same data-structure transition.",
      "originalCodeInsight": "The important lines update the pointer, index, child link, cursor, or stored value."
    },
    {
      "label": "Visible result",
      "title": "Inspect the answer",
      "note": "Read the text result after the update.",
      "activeLine": 10,
      "codeInsight": "The return object exposes the updated state so edits have immediate feedback.",
      "originalCodeInsight": "Display, return, or cout lines reveal the observable result."
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
  "algorithmSlug": "string-duplicates"
};
