// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "trie-search",
  "title": "Trie-Based Search",
  "category": "Strings",
  "route": "/algorithms/strings/trie-search",
  "phase": 3,
  "priority": "high",
  "visualizerType": "prefix-tree",
  "icon": "abc",
  "codePath": "./src/algorithms/strings/trie-search/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Trie-Based Search is taught with its own string state, transition, code trace, and stopping rule.",
  "problem": "Store words in a prefix tree and answer whether a query word exists exactly.",
  "concept": "A trie shares common prefixes. Each character chooses one child edge, and the terminal marker decides whether the path is a complete word.",
  "logicSummary": "Insert each word character by character, mark terminal nodes, then walk the query path from the root.",
  "transitionSummary": "Every query character must have a child edge; missing edge returns false, and the final node must be terminal.",
  "codeInsight": "Prefix existence is not the same as word existence. The terminal marker is what makes cart true while car can be checked separately.",
  "realLifeExample": "Use tries for autocomplete, dictionary lookup, prefix filters, and routing by character tokens.",
  "whenToUse": "Use trie search when many words share prefixes or many repeated prefix queries are expected.",
  "memoryTrick": "Characters are edges; terminal means complete word.",
  "visualizerCaption": "The trace follows the query through the prefix tree and checks the terminal marker.",
  "logicSteps": [
    {
      "title": "Create root",
      "text": "Start with an empty object representing the root node."
    },
    {
      "title": "Insert words",
      "text": "Create child nodes for each character along every word path."
    },
    {
      "title": "Walk query",
      "text": "Follow the query characters one by one."
    },
    {
      "title": "Check terminal",
      "text": "Return true only if the final node is marked as a complete word."
    }
  ],
  "variables": [
    {
      "name": "words",
      "purpose": "Dictionary words inserted into the trie."
    },
    {
      "name": "root",
      "purpose": "Starting node of the prefix tree."
    },
    {
      "name": "node",
      "purpose": "Current node while inserting or searching."
    },
    {
      "name": "$",
      "purpose": "Terminal marker for complete words."
    }
  ],
  "dryRun": [
    {
      "label": "Insert",
      "title": "Insert car, cart, dog",
      "note": "car and cart share c -> a -> r before cart adds t.",
      "activeLine": 4,
      "codeInsight": "The insertion loop creates only missing child nodes."
    },
    {
      "label": "Query c",
      "title": "Follow c",
      "note": "The root has a c child, so search can continue.",
      "activeLine": 11,
      "codeInsight": "A missing child would return false immediately."
    },
    {
      "label": "Query cart",
      "title": "Finish path",
      "note": "c -> a -> r -> t exists.",
      "activeLine": 12,
      "codeInsight": "node moves down one trie edge per character."
    },
    {
      "label": "Terminal",
      "title": "Check word marker",
      "note": "The final node has $, so cart is a complete stored word.",
      "activeLine": 14,
      "codeInsight": "The terminal marker distinguishes words from prefixes."
    }
  ],
  "complexity": {
    "time": "O(total inserted characters + query length).",
    "space": "O(total inserted characters)."
  },
  "quiz": {
    "question": "Which state keeps Trie-Based Search correct?",
    "options": [
      {
        "key": "A",
        "text": "Track trie nodes and the terminal marker, not just whether the prefix path exists.",
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
    "correctText": "Correct. Trie-Based Search works because the page state follows that exact string invariant.",
    "incorrectText": "Not quite. Trie-Based Search needs its own string state and stop condition."
  },
  "categorySlug": "strings",
  "algorithmSlug": "trie-search",
  "runnerInput": [
    [
      "car",
      "cart",
      "dog"
    ],
    "cart"
  ],
  "animation": {
    "type": "string-flow",
    "static": true,
    "title": "Trie-Based Search trace",
    "ruleLabel": "String invariant",
    "rule": "Every query character must have a child edge; missing edge returns false, and the final node must be terminal.",
    "text": "cart",
    "pattern": "car, cart, dog",
    "steps": [
      {
        "phase": "insert",
        "title": "Build shared prefix",
        "note": "car and cart share c-a-r.",
        "ruleLabel": "String invariant",
        "rule": "Shared prefixes reuse the same trie nodes.",
        "activeRange": [
          0,
          2
        ],
        "matchedRange": []
      },
      {
        "phase": "c",
        "title": "Root has c",
        "note": "The first query edge exists.",
        "ruleLabel": "String invariant",
        "rule": "Every query character must have a child edge; missing edge returns false, and the final node must be terminal.",
        "activeRange": [
          0,
          0
        ],
        "matchedRange": []
      },
      {
        "phase": "car",
        "title": "Continue through a and r",
        "note": "The path remains valid.",
        "ruleLabel": "String invariant",
        "rule": "Every query character must have a child edge; missing edge returns false, and the final node must be terminal.",
        "activeRange": [
          0,
          2
        ],
        "matchedRange": []
      },
      {
        "phase": "cart",
        "title": "Terminal node found",
        "note": "The t node is marked as a full word.",
        "ruleLabel": "String invariant",
        "rule": "Every query character must have a child edge; missing edge returns false, and the final node must be terminal.",
        "activeRange": [
          0,
          3
        ],
        "matchedRange": [
          0,
          3
        ]
      }
    ]
  }
};
