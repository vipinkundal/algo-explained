// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "hashing-basics",
  "title": "Hashing Basics",
  "category": "Foundations",
  "route": "/algorithms/foundations/hashing-basics",
  "phase": 2,
  "priority": "high",
  "visualizerType": "hash-table",
  "icon": "school",
  "codePath": "./src/algorithms/foundations/hashing-basics/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Hashing maps a key to a storage location so a value can be found without scanning every entry.",
  "problem": "Hashing maps a key to a storage location so a value can be found without scanning every entry.",
  "concept": "Hashing maps a key to a storage location so a value can be found without scanning every entry.",
  "logicSummary": "Hashing maps a key to a storage location so a value can be found without scanning every entry.",
  "transitionSummary": "A phone book can store name → number pairs. Two keys may choose the same bucket, so collisions must be handled.",
  "codeInsight": "Hashing maps a key to a storage location so a value can be found without scanning every entry.",
  "realLifeExample": "A phone book can store name → number pairs. Two keys may choose the same bucket, so collisions must be handled.",
  "whenToUse": "Hashing maps a key to a storage location so a value can be found without scanning every entry.",
  "memoryTrick": "Hashing maps a key to a storage location so a value can be found without scanning every entry.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Hashing maps a key to a storage location so a value can be found without scanning every entry."
    },
    {
      "title": "Work through a small case",
      "text": "A phone book can store name → number pairs. Two keys may choose the same bucket, so collisions must be handled."
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
    },
    {
      "name": "key",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "Hashing maps a key to a storage location so a value can be found without scanning every entry.",
      "activeLine": 5,
      "codeInsight": "Hashing maps a key to a storage location so a value can be found without scanning every entry."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "A phone book can store name → number pairs. Two keys may choose the same bucket, so collisions must be handled.",
      "activeLine": 11,
      "codeInsight": "Hashing maps a key to a storage location so a value can be found without scanning every entry."
    }
  ],
  "complexity": {
    "time": "Lookup is O(1) on average under a suitable hash distribution, O(n) in the worst case.",
    "space": "O(n) for n stored entries."
  },
  "quiz": {
    "question": "Which explanation best describes Hashing Basics?",
    "options": [
      {
        "key": "A",
        "text": "Hashing maps a key to a storage location so a value can be found without scanning every entry.",
        "correct": true
      },
      {
        "key": "B",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "C",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      }
    ],
    "correctText": "Correct. Hashing maps a key to a storage location so a value can be found without scanning every entry.",
    "incorrectText": "Try again. Hashing maps a key to a storage location so a value can be found without scanning every entry. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "foundations",
  "algorithmSlug": "hashing-basics",
  "runnerInput": [
    [
      "a",
      "b",
      "a"
    ]
  ],
  "animation": {
    "type": "state-flow",
    "title": "Hashing Basics state transitions",
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
        "ruleLabel": "Hashing Basics invariant",
        "rule": "Builds counts as a structured sample object that the tree, graph, or map visualizer can render directly.",
        "activeState": 0
      },
      {
        "phase": "Invariant",
        "title": "Inspect algorithm state",
        "note": "The active state must still satisfy page-specific invariant.",
        "ruleLabel": "Hashing Basics invariant",
        "rule": "Builds counts as a structured sample object that the tree, graph, or map visualizer can render directly.",
        "activeState": 1
      },
      {
        "phase": "State change",
        "title": "Update the state described by this algorithm",
        "note": "Only the necessary algorithm state fields are changed.",
        "ruleLabel": "Hashing Basics invariant",
        "rule": "Updates counts[key] with (counts[key] || 0) + 1; this is the state change the animation should reflect.",
        "activeState": 2
      },
      {
        "phase": "Result",
        "title": "Return visible result",
        "note": "The return value or printed state confirms the operation.",
        "ruleLabel": "Hashing Basics invariant",
        "rule": "Returns counts, the final value maintained by Hashing Basics's code path.",
        "activeState": 3
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "State is the information a computation remembers between steps. A transition changes that information; a stop rule ends the computation.",
    "family": "State and rules",
    "example": "A phone book can store name → number pairs. Two keys may choose the same bucket, so collisions must be handled.",
    "sampleInput": [
      [
        "a",
        "b",
        "a"
      ]
    ],
    "sampleResult": {
      "a": 2,
      "b": 1
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
    "checkpoint": "Explain this in your own words: Hashing maps a key to a storage location so a value can be found without scanning every entry."
  },
  "relatedLinks": []
};
