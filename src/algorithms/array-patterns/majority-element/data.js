// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "majority-element",
  "title": "Majority Element",
  "category": "Array Patterns",
  "route": "/algorithms/array-patterns/majority-element",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "candidate-counter",
  "icon": "view_week",
  "codePath": "./src/algorithms/array-patterns/majority-element/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Majority Element uses vote cancellation: different values cancel out, leaving the majority candidate.",
  "problem": "Majority Element uses vote cancellation: different values cancel out, leaving the majority candidate.",
  "concept": "Majority Element is useful when algorithm state behavior is the clearest model for the data changes. Use this when the problem is naturally described by page-specific invariant.",
  "logicSummary": "Read the next value or operation, maintain page-specific invariant, then update the state described by this algorithm.",
  "transitionSummary": "Each step changes only the part of the algorithm state required to preserve the invariant.",
  "codeInsight": "The code is written around the array invariant, not a generic scan: each variable explains what future positions can still change.",
  "realLifeExample": "Majority Element appears when contiguous ranges, ordering, or repeated array state can be reused across positions.",
  "whenToUse": "Use Majority Element when the problem statement matches its array invariant.",
  "memoryTrick": "Majority Element: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Explore Majority Element through a sample teaching model, then compare it with the runnable result.",
  "logicSteps": [
    {
      "title": "Read algorithm state",
      "text": "Identify the next command, value, node, or library call."
    },
    {
      "title": "Inspect invariant",
      "text": "Look at the active algorithm state fields."
    },
    {
      "title": "State change",
      "text": "update the state described by this algorithm."
    },
    {
      "title": "Read result",
      "text": "Return the emitted value or updated structure."
    }
  ],
  "variables": [
    {
      "name": "array",
      "purpose": "The input values."
    },
    {
      "name": "invariant state",
      "purpose": "The running sum, window, pointer, candidate, or frequency state."
    },
    {
      "name": "answer",
      "purpose": "The best value, transformed array, or matching pair."
    },
    {
      "name": "scan remains",
      "purpose": "Continue while unchecked positions remain."
    }
  ],
  "dryRun": [
    {
      "label": "Algorithm State",
      "title": "Read algorithm state action",
      "note": "The code receives the next value or command.",
      "activeLine": 5,
      "codeInsight": "Defines majorityElement and names the input array; edits to those inputs change the visual state and output."
    },
    {
      "label": "Invariant",
      "title": "Inspect algorithm state",
      "note": "The active state must still satisfy page-specific invariant.",
      "activeLine": 5,
      "codeInsight": "Defines majorityElement and names the input array; edits to those inputs change the visual state and output."
    },
    {
      "label": "State change",
      "title": "Update the state described by this algorithm",
      "note": "Only the necessary algorithm state fields are changed.",
      "activeLine": 9,
      "codeInsight": "When votes === 0 is true, candidate = value; the animation should show that branch's state update immediately."
    },
    {
      "label": "Result",
      "title": "Return visible result",
      "note": "The return value or printed state confirms the operation.",
      "activeLine": 12,
      "codeInsight": "Returns candidate, the final value maintained by Majority Element's code path."
    }
  ],
  "complexity": {
    "time": "O(n).",
    "space": "O(1)."
  },
  "quiz": {
    "question": "Which explanation best describes Majority Element?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "Majority Element uses vote cancellation: different values cancel out, leaving the majority candidate.",
        "correct": true
      },
      {
        "key": "C",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      }
    ],
    "correctText": "Correct. Majority Element uses vote cancellation: different values cancel out, leaving the majority candidate.",
    "incorrectText": "Try again. Majority Element uses vote cancellation: different values cancel out, leaving the majority candidate. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "array-patterns",
  "algorithmSlug": "majority-element",
  "runnerInput": [
    [
      2,
      2,
      1,
      1,
      1,
      2,
      2
    ]
  ],
  "animation": {
    "type": "array-flow",
    "title": "Majority Element array state",
    "ruleLabel": "Array invariant",
    "rule": "Each step changes only the part of the algorithm state required to preserve the invariant.",
    "values": [
      2,
      2,
      1,
      1,
      1,
      2,
      2
    ],
    "steps": [
      {
        "phase": "Algorithm State",
        "title": "Read algorithm state action",
        "note": "The code receives the next value or command.",
        "ruleLabel": "Majority Element invariant",
        "rule": "Defines majorityElement and names the input array; edits to those inputs change the visual state and output.",
        "activeIndices": [
          0
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          1
        ],
        "primaryLabel": "Algorithm State",
        "secondaryLabel": "Each step changes only the part of the algorithm state required to preserve the invariant."
      },
      {
        "phase": "Invariant",
        "title": "Inspect algorithm state",
        "note": "The active state must still satisfy page-specific invariant.",
        "ruleLabel": "Majority Element invariant",
        "rule": "Defines majorityElement and names the input array; edits to those inputs change the visual state and output.",
        "activeIndices": [
          1,
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [
          4,
          5,
          6
        ],
        "window": [
          0,
          2
        ],
        "primaryLabel": "Invariant",
        "secondaryLabel": "Each step changes only the part of the algorithm state required to preserve the invariant."
      },
      {
        "phase": "State change",
        "title": "Update the state described by this algorithm",
        "note": "Only the necessary algorithm state fields are changed.",
        "ruleLabel": "Majority Element invariant",
        "rule": "When votes === 0 is true, candidate = value; the animation should show that branch's state update immediately.",
        "activeIndices": [
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [
          5,
          6
        ],
        "window": [
          1,
          3
        ],
        "primaryLabel": "State change",
        "secondaryLabel": "Each step changes only the part of the algorithm state required to preserve the invariant."
      },
      {
        "phase": "Result",
        "title": "Return visible result",
        "note": "The return value or printed state confirms the operation.",
        "ruleLabel": "Majority Element invariant",
        "rule": "Returns candidate, the final value maintained by Majority Element's code path.",
        "activeIndices": [
          3,
          4
        ],
        "sortedIndices": [],
        "mutedIndices": [
          0,
          6
        ],
        "window": [
          2,
          4
        ],
        "primaryLabel": "Result",
        "secondaryLabel": "Each step changes only the part of the algorithm state required to preserve the invariant."
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "An array is a row of numbered slots. An index tells you where a value is; it is not the value itself.",
    "family": "Arrays and indexes",
    "example": "Read algorithm state: Identify the next command, value, node, or library call. Inspect invariant: Look at the active algorithm state fields. State change: update the state described by this algorithm. Read result: Return the emitted value or updated structure.",
    "sampleInput": [
      [
        2,
        2,
        1,
        1,
        1,
        2,
        2
      ]
    ],
    "sampleResult": 2,
    "sampleScope": "This is the result of the unedited JavaScript function with the sample arguments. Changing the input or code can change the result.",
    "terms": [
      [
        "Index",
        "A position in a sequence, usually starting at 0."
      ],
      [
        "Boundary",
        "The first or last position still being considered."
      ],
      [
        "Invariant",
        "A rule that remains true after each step."
      ]
    ],
    "pitfall": "Keep positions and values separate. Check whether the right boundary is included before changing an index.",
    "checkpoint": "Explain this in your own words: Majority Element uses vote cancellation: different values cancel out, leaving the majority candidate."
  },
  "relatedLinks": []
};
