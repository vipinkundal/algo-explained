// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "space-complexity-basics",
  "title": "Space Complexity Basics",
  "category": "Foundations",
  "route": "/algorithms/foundations/space-complexity-basics",
  "phase": 1,
  "priority": "high",
  "visualizerType": "memory-blocks",
  "icon": "school",
  "codePath": "./src/algorithms/foundations/space-complexity-basics/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Space complexity describes how much extra memory an algorithm needs as its input grows.",
  "problem": "Space complexity describes how much extra memory an algorithm needs as its input grows.",
  "concept": "Space complexity describes how much extra memory an algorithm needs as its input grows.",
  "logicSummary": "Space complexity describes how much extra memory an algorithm needs as its input grows.",
  "transitionSummary": "Summing 8 numbers needs one running total. Copying them needs 8 extra slots. A recursive call also takes stack space.",
  "codeInsight": "Space complexity describes how much extra memory an algorithm needs as its input grows.",
  "realLifeExample": "Summing 8 numbers needs one running total. Copying them needs 8 extra slots. A recursive call also takes stack space.",
  "whenToUse": "Space complexity describes how much extra memory an algorithm needs as its input grows.",
  "memoryTrick": "Space complexity describes how much extra memory an algorithm needs as its input grows.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Space complexity describes how much extra memory an algorithm needs as its input grows."
    },
    {
      "title": "Work through a small case",
      "text": "Summing 8 numbers needs one running total. Copying them needs 8 extra slots. A recursive call also takes stack space."
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
      "name": "copy",
      "purpose": "Chooses the provided array or a fallback sample so the following collection operations have an array to read."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "Space complexity describes how much extra memory an algorithm needs as its input grows.",
      "activeLine": 5,
      "codeInsight": "Space complexity describes how much extra memory an algorithm needs as its input grows."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "Summing 8 numbers needs one running total. Copying them needs 8 extra slots. A recursive call also takes stack space.",
      "activeLine": 7,
      "codeInsight": "Space complexity describes how much extra memory an algorithm needs as its input grows."
    }
  ],
  "complexity": {
    "time": "O(n) to copy n values in the demo.",
    "space": "O(n) for the copy, including the returned storage."
  },
  "quiz": {
    "question": "Which explanation best describes Space Complexity Basics?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      },
      {
        "key": "C",
        "text": "Space complexity describes how much extra memory an algorithm needs as its input grows.",
        "correct": true
      }
    ],
    "correctText": "Correct. Space complexity describes how much extra memory an algorithm needs as its input grows.",
    "incorrectText": "Try again. Space complexity describes how much extra memory an algorithm needs as its input grows. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "foundations",
  "algorithmSlug": "space-complexity-basics",
  "runnerInput": [
    [
      1,
      2,
      3
    ]
  ],
  "animation": {
    "type": "state-flow",
    "title": "Space Complexity Basics state transitions",
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
        "ruleLabel": "Space Complexity Basics invariant",
        "rule": "Creates copy as empty working state; later lines add and remove values from it.",
        "activeState": 0
      },
      {
        "phase": "Invariant",
        "title": "Inspect algorithm state",
        "note": "The active state must still satisfy page-specific invariant.",
        "ruleLabel": "Space Complexity Basics invariant",
        "rule": "Creates copy as empty working state; later lines add and remove values from it.",
        "activeState": 1
      },
      {
        "phase": "State change",
        "title": "Update the state described by this algorithm",
        "note": "Only the necessary algorithm state fields are changed.",
        "ruleLabel": "Space Complexity Basics invariant",
        "rule": "Creates copy as empty working state; later lines add and remove values from it.",
        "activeState": 2
      },
      {
        "phase": "Result",
        "title": "Return visible result",
        "note": "The return value or printed state confirms the operation.",
        "ruleLabel": "Space Complexity Basics invariant",
        "rule": "Returns the final state object { inputSize: copy.length, auxiliarySpace: copy.length, note: \"O(n) copied state\" }, exposing the exact fields the visualizer has been tracking.",
        "activeState": 3
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "State is the information a computation remembers between steps. A transition changes that information; a stop rule ends the computation.",
    "family": "State and rules",
    "example": "Summing 8 numbers needs one running total. Copying them needs 8 extra slots. A recursive call also takes stack space.",
    "sampleInput": [
      [
        1,
        2,
        3
      ]
    ],
    "sampleResult": {
      "inputSize": 3,
      "auxiliarySpace": 3,
      "note": "O(n) copied state"
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
    "checkpoint": "Explain this in your own words: Space complexity describes how much extra memory an algorithm needs as its input grows."
  },
  "relatedLinks": []
};
