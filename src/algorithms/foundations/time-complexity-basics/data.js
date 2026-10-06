// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "time-complexity-basics",
  "title": "Time Complexity Basics",
  "category": "Foundations",
  "route": "/algorithms/foundations/time-complexity-basics",
  "phase": 1,
  "priority": "high",
  "visualizerType": "growth-chart",
  "icon": "school",
  "codePath": "./src/algorithms/foundations/time-complexity-basics/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Time complexity describes how the amount of work grows as the input grows.",
  "problem": "Time complexity describes how the amount of work grows as the input grows.",
  "concept": "Time complexity describes how the amount of work grows as the input grows.",
  "logicSummary": "Time complexity describes how the amount of work grows as the input grows.",
  "transitionSummary": "At n = 8, a full scan uses about 8 visits; comparing every pair uses about 64 comparisons. These are growth models, not milliseconds.",
  "codeInsight": "Time complexity describes how the amount of work grows as the input grows.",
  "realLifeExample": "At n = 8, a full scan uses about 8 visits; comparing every pair uses about 64 comparisons. These are growth models, not milliseconds.",
  "whenToUse": "Time complexity describes how the amount of work grows as the input grows.",
  "memoryTrick": "Time complexity describes how the amount of work grows as the input grows.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Time complexity describes how the amount of work grows as the input grows."
    },
    {
      "title": "Work through a small case",
      "text": "At n = 8, a full scan uses about 8 visits; comparing every pair uses about 64 comparisons. These are growth models, not milliseconds."
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
      "name": "inputSize",
      "purpose": "Chooses the provided array or a fallback sample so the following collection operations have an array to read."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "Time complexity describes how the amount of work grows as the input grows.",
      "activeLine": 5,
      "codeInsight": "Time complexity describes how the amount of work grows as the input grows."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "At n = 8, a full scan uses about 8 visits; comparing every pair uses about 64 comparisons. These are growth models, not milliseconds.",
      "activeLine": 7,
      "codeInsight": "Time complexity describes how the amount of work grows as the input grows."
    }
  ],
  "complexity": {
    "time": "The growth models compare O(1), O(log n), O(n), O(n log n), and O(n²). The demo computes counts; it does not perform those loops.",
    "space": "The count-reporting demo uses O(1) extra state."
  },
  "quiz": {
    "question": "Which explanation best describes Time Complexity Basics?",
    "options": [
      {
        "key": "A",
        "text": "Time complexity describes how the amount of work grows as the input grows.",
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
    "correctText": "Correct. Time complexity describes how the amount of work grows as the input grows.",
    "incorrectText": "Try again. Time complexity describes how the amount of work grows as the input grows. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "foundations",
  "algorithmSlug": "time-complexity-basics",
  "runnerInput": [
    [
      1,
      2,
      3
    ]
  ],
  "animation": {
    "type": "state-flow",
    "title": "Time Complexity Basics state transitions",
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
        "ruleLabel": "Time Complexity Basics invariant",
        "rule": "Stores inputSize from the current length, making the loop boundary explicit for the visual trace.",
        "activeState": 0
      },
      {
        "phase": "Invariant",
        "title": "Inspect algorithm state",
        "note": "The active state must still satisfy page-specific invariant.",
        "ruleLabel": "Time Complexity Basics invariant",
        "rule": "Stores inputSize from the current length, making the loop boundary explicit for the visual trace.",
        "activeState": 1
      },
      {
        "phase": "State change",
        "title": "Update the state described by this algorithm",
        "note": "Only the necessary algorithm state fields are changed.",
        "ruleLabel": "Time Complexity Basics invariant",
        "rule": "Stores inputSize from the current length, making the loop boundary explicit for the visual trace.",
        "activeState": 2
      },
      {
        "phase": "Result",
        "title": "Return visible result",
        "note": "The return value or printed state confirms the operation.",
        "ruleLabel": "Time Complexity Basics invariant",
        "rule": "Returns the final state object { inputSize, linearSteps: inputSize, quadraticSteps: inputSize * inputSize }, exposing the exact fields the visualizer has been tracking.",
        "activeState": 3
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "State is the information a computation remembers between steps. A transition changes that information; a stop rule ends the computation.",
    "family": "State and rules",
    "example": "At n = 8, a full scan uses about 8 visits; comparing every pair uses about 64 comparisons. These are growth models, not milliseconds.",
    "sampleInput": [
      [
        1,
        2,
        3
      ]
    ],
    "sampleResult": {
      "inputSize": 3,
      "linearSteps": 3,
      "quadraticSteps": 9
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
    "checkpoint": "Explain this in your own words: Time complexity describes how the amount of work grows as the input grows."
  },
  "relatedLinks": []
};
