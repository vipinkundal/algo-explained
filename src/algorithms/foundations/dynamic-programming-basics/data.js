// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "dynamic-programming-basics",
  "title": "Dynamic Programming Basics",
  "category": "Foundations",
  "route": "/algorithms/foundations/dynamic-programming-basics",
  "phase": 3,
  "priority": "high",
  "visualizerType": "dp-table",
  "icon": "school",
  "codePath": "./src/algorithms/foundations/dynamic-programming-basics/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Dynamic programming saves answers to smaller subproblems so repeated work can be reused.",
  "problem": "Dynamic programming saves answers to smaller subproblems so repeated work can be reused.",
  "concept": "Dynamic programming saves answers to smaller subproblems so repeated work can be reused.",
  "logicSummary": "Dynamic programming saves answers to smaller subproblems so repeated work can be reused.",
  "transitionSummary": "For Fibonacci, save F(0) = 0 and F(1) = 1. Then F(2) = 1, F(3) = 2, and F(4) = 3 reuse earlier answers.",
  "codeInsight": "Dynamic programming saves answers to smaller subproblems so repeated work can be reused.",
  "realLifeExample": "For Fibonacci, save F(0) = 0 and F(1) = 1. Then F(2) = 1, F(3) = 2, and F(4) = 3 reuse earlier answers.",
  "whenToUse": "Dynamic programming saves answers to smaller subproblems so repeated work can be reused.",
  "memoryTrick": "Dynamic programming saves answers to smaller subproblems so repeated work can be reused.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Dynamic programming saves answers to smaller subproblems so repeated work can be reused."
    },
    {
      "title": "Work through a small case",
      "text": "For Fibonacci, save F(0) = 0 and F(1) = 1. Then F(2) = 1, F(3) = 2, and F(4) = 3 reuse earlier answers."
    },
    {
      "title": "Check the boundary cases",
      "text": "Define what each table entry means before filling it. Check base cases, evaluation order, and whether a choice can be reused."
    }
  ],
  "variables": [
    {
      "name": "values",
      "purpose": "The collection to process. Its length tells the routine how many input items are available."
    },
    {
      "name": "numbers",
      "purpose": "Chooses the provided array or a fallback sample so the following collection operations have an array to read."
    },
    {
      "name": "state",
      "purpose": "Stores completed answers or computed states so they can be returned and, where needed, reused."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "Dynamic programming saves answers to smaller subproblems so repeated work can be reused.",
      "activeLine": 5,
      "codeInsight": "Dynamic programming saves answers to smaller subproblems so repeated work can be reused."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "For Fibonacci, save F(0) = 0 and F(1) = 1. Then F(2) = 1, F(3) = 2, and F(4) = 3 reuse earlier answers.",
      "activeLine": 9,
      "codeInsight": "Dynamic programming saves answers to smaller subproblems so repeated work can be reused."
    }
  ],
  "complexity": {
    "time": "O(n) for this cumulative-total demo. In general: number of distinct states × work per state.",
    "space": "O(n) for this demo’s stored totals. Other DP routines store a different number of states."
  },
  "quiz": {
    "question": "Which explanation best describes Dynamic Programming Basics?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "Dynamic programming saves answers to smaller subproblems so repeated work can be reused.",
        "correct": true
      },
      {
        "key": "C",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      }
    ],
    "correctText": "Correct. Dynamic programming saves answers to smaller subproblems so repeated work can be reused.",
    "incorrectText": "Try again. Dynamic programming saves answers to smaller subproblems so repeated work can be reused. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "foundations",
  "algorithmSlug": "dynamic-programming-basics",
  "runnerInput": [
    [
      1,
      2,
      3
    ]
  ],
  "animation": {
    "type": "state-flow",
    "title": "Dynamic Programming Basics state transitions",
    "ruleLabel": "State rule",
    "rule": "Each step computes one state from already-solved smaller or earlier states.",
    "states": [
      "State meaning",
      "Base case",
      "Recurrence",
      "Target"
    ],
    "steps": [
      {
        "phase": "State meaning",
        "title": "Define DP cell",
        "note": "The code first needs a precise subproblem meaning.",
        "ruleLabel": "Dynamic Programming Basics invariant",
        "rule": "Prepares numbers from the sample collection that the next visual step inspects.",
        "activeState": 0
      },
      {
        "phase": "Base case",
        "title": "Seed known answers",
        "note": "Base values stop the recurrence from falling through.",
        "ruleLabel": "Dynamic Programming Basics invariant",
        "rule": "Defines dynamicProgrammingBasics and names the input values; edits to those inputs change the visual state and output.",
        "activeState": 1
      },
      {
        "phase": "Recurrence",
        "title": "Fill next state",
        "note": "The transition combines previously solved states.",
        "ruleLabel": "Dynamic Programming Basics invariant",
        "rule": "Prepares numbers from the sample collection that the next visual step inspects.",
        "activeState": 2
      },
      {
        "phase": "Target",
        "title": "Return requested state",
        "note": "The answer is read from the final DP state.",
        "ruleLabel": "Dynamic Programming Basics invariant",
        "rule": "Returns the final state object { state, answer: state[state.length - 1] }, exposing the exact fields the visualizer has been tracking.",
        "activeState": 3
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "A dynamic-programming state names a smaller question. A recurrence explains how its answer uses answers you already know.",
    "family": "Saved subproblems",
    "example": "For Fibonacci, save F(0) = 0 and F(1) = 1. Then F(2) = 1, F(3) = 2, and F(4) = 3 reuse earlier answers.",
    "sampleInput": [
      [
        1,
        2,
        3
      ]
    ],
    "sampleResult": {
      "state": [
        0,
        1,
        3,
        6
      ],
      "answer": 6
    },
    "sampleScope": "This JavaScript sample saves cumulative totals. The Fibonacci example above illustrates another way to reuse earlier answers.",
    "terms": [
      [
        "State",
        "One precisely defined subproblem."
      ],
      [
        "Recurrence",
        "A rule for computing a state from smaller states."
      ],
      [
        "Base case",
        "A known answer that starts the table or recursion."
      ]
    ],
    "pitfall": "Define what each table entry means before filling it. Check base cases, evaluation order, and whether a choice can be reused.",
    "checkpoint": "Explain this in your own words: Dynamic programming saves answers to smaller subproblems so repeated work can be reused."
  },
  "relatedLinks": []
};
