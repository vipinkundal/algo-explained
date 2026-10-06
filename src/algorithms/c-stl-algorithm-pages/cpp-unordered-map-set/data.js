// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "cpp-unordered-map-set",
  "title": "C++ unordered_map / unordered_set",
  "category": "C++ STL Algorithm Pages",
  "route": "/algorithms/cpp-stl/unordered-map-set",
  "phase": 1,
  "priority": "high",
  "visualizerType": "hash-table",
  "icon": "school",
  "codePath": "./src/algorithms/c-stl-algorithm-pages/cpp-unordered-map-set/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Unordered maps and sets use hashing for key lookup and do not keep keys in sorted order.",
  "problem": "Unordered maps and sets use hashing for key lookup and do not keep keys in sorted order.",
  "concept": "Unordered maps and sets use hashing for key lookup and do not keep keys in sorted order.",
  "logicSummary": "Unordered maps and sets use hashing for key lookup and do not keep keys in sorted order.",
  "transitionSummary": "An unordered_set built from [3, 1, 3] has 2 keys. Lookup is constant time on average, but can be linear in the worst case.",
  "codeInsight": "Unordered maps and sets use hashing for key lookup and do not keep keys in sorted order.",
  "realLifeExample": "An unordered_set built from [3, 1, 3] has 2 keys. Lookup is constant time on average, but can be linear in the worst case.",
  "whenToUse": "Unordered maps and sets use hashing for key lookup and do not keep keys in sorted order.",
  "memoryTrick": "Unordered maps and sets use hashing for key lookup and do not keep keys in sorted order.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Unordered maps and sets use hashing for key lookup and do not keep keys in sorted order."
    },
    {
      "title": "Work through a small case",
      "text": "An unordered_set built from [3, 1, 3] has 2 keys. Lookup is constant time on average, but can be linear in the worst case."
    },
    {
      "title": "Check the boundary cases",
      "text": "Check the allowed input and stopping rule before running the routine. A picture of state alone is not a proof of correctness."
    }
  ],
  "variables": [
    {
      "name": "values",
      "purpose": "The collection to process. Its length tells the routine how many input items are available."
    },
    {
      "name": "counts",
      "purpose": "Remembers a frequency for each key, allowing another occurrence to update an existing count."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "Unordered maps and sets use hashing for key lookup and do not keep keys in sorted order.",
      "activeLine": 5,
      "codeInsight": "Unordered maps and sets use hashing for key lookup and do not keep keys in sorted order."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "An unordered_set built from [3, 1, 3] has 2 keys. Lookup is constant time on average, but can be linear in the worst case.",
      "activeLine": 8,
      "codeInsight": "Unordered maps and sets use hashing for key lookup and do not keep keys in sorted order."
    }
  ],
  "complexity": {
    "time": "O(1) average lookup/insertion; O(n) worst case for one operation.",
    "space": "O(n) stored entries and buckets."
  },
  "quiz": {
    "question": "Which explanation best describes C++ unordered_map / unordered_set?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "Unordered maps and sets use hashing for key lookup and do not keep keys in sorted order.",
        "correct": true
      },
      {
        "key": "C",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      }
    ],
    "correctText": "Correct. Unordered maps and sets use hashing for key lookup and do not keep keys in sorted order.",
    "incorrectText": "Try again. Unordered maps and sets use hashing for key lookup and do not keep keys in sorted order. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "c-stl-algorithm-pages",
  "algorithmSlug": "cpp-unordered-map-set",
  "runnerInput": [
    [
      1,
      2,
      2
    ]
  ],
  "animation": {
    "type": "state-flow",
    "title": "C++ unordered_map / unordered_set state transitions",
    "ruleLabel": "State rule",
    "rule": "Each step changes only the part of the algorithm state required to preserve the invariant.",
    "states": [
      "Algorithm State",
      "Invariant",
      "State change",
      "Result"
    ],
    "steps": [
      {
        "phase": "Algorithm State",
        "title": "Read algorithm state action",
        "note": "The code receives the next value or command.",
        "ruleLabel": "C++ unordered_map / unordered_set invariant",
        "rule": "Builds counts as a structured sample object that the tree, graph, or map visualizer can render directly.",
        "activeState": 0
      },
      {
        "phase": "Invariant",
        "title": "Inspect algorithm state",
        "note": "The active state must still satisfy page-specific invariant.",
        "ruleLabel": "C++ unordered_map / unordered_set invariant",
        "rule": "Builds counts as a structured sample object that the tree, graph, or map visualizer can render directly.",
        "activeState": 1
      },
      {
        "phase": "State change",
        "title": "Update the state described by this algorithm",
        "note": "Only the necessary algorithm state fields are changed.",
        "ruleLabel": "C++ unordered_map / unordered_set invariant",
        "rule": "Visits each input value once, letting the displayed state update in the same order as the code.",
        "activeState": 2
      },
      {
        "phase": "Result",
        "title": "Return visible result",
        "note": "The return value or printed state confirms the operation.",
        "ruleLabel": "C++ unordered_map / unordered_set invariant",
        "rule": "Returns the final state object { unorderedMap: counts, unorderedSet: [...new Set(values)] }, exposing the exact fields the visualizer has been tracking.",
        "activeState": 3
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "State is the information a computation remembers between steps. A transition changes that information; a stop rule ends the computation.",
    "family": "State and rules",
    "example": "An unordered_set built from [3, 1, 3] has 2 keys. Lookup is constant time on average, but can be linear in the worst case.",
    "sampleInput": [
      [
        1,
        2,
        2
      ]
    ],
    "sampleResult": {
      "unorderedMap": {
        "1": 1,
        "2": 2
      },
      "unorderedSet": [
        1,
        2
      ]
    },
    "sampleScope": "This is the result of the unedited JavaScript function with the sample arguments. Changing the input or code can change the result.",
    "terms": [
      [
        "State",
        "Values remembered at the current step."
      ],
      [
        "Transition",
        "The update that moves to the next state."
      ],
      [
        "Base case",
        "A small or finished situation with a known answer."
      ]
    ],
    "pitfall": "Check the allowed input and stopping rule before running the routine. A picture of state alone is not a proof of correctness.",
    "checkpoint": "Explain this in your own words: Unordered maps and sets use hashing for key lookup and do not keep keys in sorted order."
  },
  "relatedLinks": []
};
