// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "trie",
  "title": "Trie Operations",
  "category": "Trees",
  "route": "/algorithms/trees/trie",
  "phase": 3,
  "priority": "high",
  "visualizerType": "prefix-tree",
  "icon": "account_tree",
  "codePath": "./src/algorithms/trees/trie/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "A trie stores words by sharing common prefixes across character links.",
  "problem": "Trie insertion builds a prefix tree so words like cat and car share the c -> a prefix and split only at the final character.",
  "concept": "For each word, start at root and create or follow one child link per character, then mark the final node as a word ending.",
  "logicSummary": "Create the root object, walk every word character by character, create missing child nodes, mark $ at the end of each word, and return root.",
  "transitionSummary": "Each visual step shows how cat and car reuse the shared prefix before branching to t and r.",
  "codeInsight": "The current trie node is the state; node = node[char] ||= {} moves that state to the child for the current character.",
  "realLifeExample": "Autocomplete dictionaries use tries so all words beginning with ca can share the same prefix path.",
  "whenToUse": "Use a trie when many strings share prefixes and you need fast prefix or whole-word lookup.",
  "memoryTrick": "Trie insertion: root, one character edge at a time, terminal marker at the word end.",
  "visualizerCaption": "The animation inserts cat and car, showing the shared ca prefix and two terminal endings.",
  "logicSteps": [
    {
      "title": "Check node",
      "text": "Create the root object."
    },
    {
      "title": "Read node state",
      "text": "Start each word from root."
    },
    {
      "title": "Move/combine",
      "text": "Follow or create the child link for each character."
    },
    {
      "title": "Return tree result",
      "text": "Mark word endings and return the trie root."
    }
  ],
  "variables": [
    {
      "name": "words",
      "purpose": "The list of strings inserted into the trie."
    },
    {
      "name": "trie node and child links",
      "purpose": "The current prefix node and the links followed or created for each character."
    },
    {
      "name": "root",
      "purpose": "The object returned after all character paths and terminal markers are inserted."
    },
    {
      "name": "transition / stop rule",
      "purpose": "For each character, reuse an existing child object or create a new one, then set $ at the end of the word."
    }
  ],
  "dryRun": [
    {
      "label": "Root",
      "title": "Create empty root",
      "note": "The trie begins as an empty object before any word is inserted.",
      "activeLine": 6,
      "codeInsight": "Creates root = {}, the shared entry point for every word."
    },
    {
      "label": "Node state",
      "title": "Insert cat",
      "note": "The first word creates the c -> a -> t path.",
      "activeLine": 9,
      "codeInsight": "Uses node = node[char] ||= {} to create or follow each character node."
    },
    {
      "label": "Child step",
      "title": "Insert car",
      "note": "The second word reuses c -> a, then creates the r branch.",
      "activeLine": 9,
      "codeInsight": "Reuses existing child objects for c and a, then creates the missing r node."
    },
    {
      "label": "Tree result",
      "title": "Mark word endings",
      "note": "Both t and r terminal nodes receive $, so cat and car are complete words.",
      "activeLine": 10,
      "codeInsight": "Sets node.$ = true at each word's final character node."
    }
  ],
  "complexity": {
    "time": "O(n) for the educational reference implementation.",
    "space": "O(n) for tracked state when needed."
  },
  "quiz": {
    "question": "Which state choice keeps Trie Operations correct?",
    "options": [
      {
        "key": "A",
        "text": "Share common prefix nodes and mark terminal nodes for complete words.",
        "correct": true
      },
      {
        "key": "B",
        "text": "Reuse a different algorithm's state names even when the transition is different.",
        "correct": false
      },
      {
        "key": "C",
        "text": "Return before checking the algorithm-specific stop condition.",
        "correct": false
      }
    ],
    "correctText": "Correct. Trie insertion reuses prefix nodes and only branches when characters differ.",
    "incorrectText": "Not quite. A trie must preserve the character path and terminal markers for each word."
  },
  "categorySlug": "trees",
  "algorithmSlug": "trie",
  "runnerInput": [
    [
      "cat",
      "car"
    ]
  ],
  "animation": {
    "type": "tree-operation",
    "title": "Trie insertion for cat and car",
    "legend": [
      {
        "className": "current",
        "label": "Current node"
      },
      {
        "className": "target",
        "label": "Character link"
      },
      {
        "className": "replacement",
        "label": "Word end"
      }
    ],
    "nodes": [
      {
        "id": "root",
        "label": "root",
        "x": 340,
        "y": 58
      },
      {
        "id": "c",
        "label": "c",
        "x": 340,
        "y": 135
      },
      {
        "id": "ca",
        "label": "a",
        "x": 340,
        "y": 212
      },
      {
        "id": "cat",
        "label": "t",
        "x": 250,
        "y": 298
      },
      {
        "id": "car",
        "label": "r",
        "x": 430,
        "y": 298
      }
    ],
    "edges": [
      {
        "from": "root",
        "to": "c"
      },
      {
        "from": "c",
        "to": "ca"
      },
      {
        "from": "ca",
        "to": "cat"
      },
      {
        "from": "ca",
        "to": "car"
      }
    ],
    "steps": [
      {
        "phase": "Root",
        "title": "Create empty root",
        "note": "root starts as {}, before either word has inserted characters.",
        "ruleLabel": "Trie Operations invariant",
        "rule": "Every word starts from this same root object.",
        "activeNode": "root",
        "targetNode": "",
        "replacementNode": "",
        "mutedNodes": [
          "c",
          "ca",
          "cat",
          "car"
        ]
      },
      {
        "phase": "Insert cat",
        "title": "Create c -> a -> t",
        "note": "The word cat creates a character path from root to terminal t.",
        "ruleLabel": "Trie Operations invariant",
        "rule": "node = node[char] ||= {} creates each missing child while scanning c, a, then t.",
        "activeNode": "ca",
        "targetNode": "cat",
        "replacementNode": "cat",
        "mutedNodes": [
          "car"
        ],
        "nodeLabels": {
          "root": "root",
          "c": "c",
          "ca": "ca",
          "cat": "cat $"
        }
      },
      {
        "phase": "Insert car",
        "title": "Reuse ca, branch to r",
        "note": "The word car follows existing c and a nodes, then creates the r child.",
        "ruleLabel": "Trie Operations invariant",
        "rule": "The shared prefix ca is reused; only the final r node is new.",
        "activeNode": "ca",
        "targetNode": "car",
        "replacementNode": "car",
        "mutedNodes": [],
        "nodeLabels": {
          "root": "root",
          "c": "c",
          "ca": "ca",
          "cat": "cat $",
          "car": "car $"
        }
      },
      {
        "phase": "Return root",
        "title": "Both words are stored",
        "note": "The final trie contains root.c.a.t.$ and root.c.a.r.$.",
        "ruleLabel": "Trie Operations invariant",
        "rule": "return root exposes the shared prefix tree for cat and car.",
        "activeNode": "root",
        "targetNode": "ca",
        "replacementNode": "cat",
        "mutedNodes": [],
        "nodeLabels": {
          "root": "root",
          "c": "c",
          "ca": "ca",
          "cat": "cat $",
          "car": "car $"
        }
      }
    ]
  }
};
