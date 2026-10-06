// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "maximum-product-subarray",
  "title": "Maximum Product Subarray",
  "category": "Array Patterns",
  "route": "/algorithms/array-patterns/maximum-product-subarray",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "min-max-tracker",
  "icon": "view_week",
  "codePath": "./src/algorithms/array-patterns/maximum-product-subarray/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Maximum Product Subarray tracks both max and min products because a negative value can flip them.",
  "problem": "Maximum Product Subarray tracks both max and min products because a negative value can flip them.",
  "concept": "Maximum Product Subarray is useful when algorithm state behavior is the clearest model for the data changes. Use this when the problem is naturally described by page-specific invariant.",
  "logicSummary": "Read the next value or operation, maintain page-specific invariant, then update the state described by this algorithm.",
  "transitionSummary": "Each step changes only the part of the algorithm state required to preserve the invariant.",
  "codeInsight": "The code is written around the array invariant, not a generic scan: each variable explains what future positions can still change.",
  "realLifeExample": "Maximum Product Subarray appears when contiguous ranges, ordering, or repeated array state can be reused across positions.",
  "whenToUse": "Use Maximum Product Subarray when the problem statement matches its array invariant.",
  "memoryTrick": "Maximum Product Subarray: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Explore Maximum Product Subarray through a sample teaching model, then compare it with the runnable result.",
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
      "activeLine": 10,
      "codeInsight": "Prepares value from the sample collection that the next visual step inspects."
    },
    {
      "label": "Invariant",
      "title": "Inspect algorithm state",
      "note": "The active state must still satisfy page-specific invariant.",
      "activeLine": 10,
      "codeInsight": "Prepares value from the sample collection that the next visual step inspects."
    },
    {
      "label": "State change",
      "title": "Update the state described by this algorithm",
      "note": "Only the necessary algorithm state fields are changed.",
      "activeLine": 9,
      "codeInsight": "Runs the counted loop (let index = 1; index < array.length; index += 1) so each visual step follows one code-controlled iteration."
    },
    {
      "label": "Result",
      "title": "Return visible result",
      "note": "The return value or printed state confirms the operation.",
      "activeLine": 16,
      "codeInsight": "Returns best, the final value maintained by Maximum Product Subarray's code path."
    }
  ],
  "complexity": {
    "time": "O(n).",
    "space": "O(1)."
  },
  "quiz": {
    "question": "Which explanation best describes Maximum Product Subarray?",
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
        "text": "Maximum Product Subarray tracks both max and min products because a negative value can flip them.",
        "correct": true
      }
    ],
    "correctText": "Correct. Maximum Product Subarray tracks both max and min products because a negative value can flip them.",
    "incorrectText": "Try again. Maximum Product Subarray tracks both max and min products because a negative value can flip them. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "array-patterns",
  "algorithmSlug": "maximum-product-subarray",
  "runnerInput": [
    [
      2,
      3,
      -2,
      4
    ]
  ],
  "animation": {
    "type": "array-flow",
    "title": "Maximum Product Subarray array state",
    "ruleLabel": "Array invariant",
    "rule": "Each step changes only the part of the algorithm state required to preserve the invariant.",
    "values": [
      2,
      3,
      -2,
      4
    ],
    "steps": [
      {
        "phase": "Algorithm State",
        "title": "Read algorithm state action",
        "note": "The code receives the next value or command.",
        "ruleLabel": "Maximum Product Subarray invariant",
        "rule": "Prepares value from the sample collection that the next visual step inspects.",
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
        "ruleLabel": "Maximum Product Subarray invariant",
        "rule": "Prepares value from the sample collection that the next visual step inspects.",
        "activeIndices": [
          1,
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [],
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
        "ruleLabel": "Maximum Product Subarray invariant",
        "rule": "Runs the counted loop (let index = 1; index < array.length; index += 1) so each visual step follows one code-controlled iteration.",
        "activeIndices": [
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [],
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
        "ruleLabel": "Maximum Product Subarray invariant",
        "rule": "Returns best, the final value maintained by Maximum Product Subarray's code path.",
        "activeIndices": [
          3,
          3
        ],
        "sortedIndices": [],
        "mutedIndices": [
          0
        ],
        "window": [
          2,
          3
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
        3,
        -2,
        4
      ]
    ],
    "sampleResult": 6,
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
    "checkpoint": "Explain this in your own words: Maximum Product Subarray tracks both max and min products because a negative value can flip them."
  },
  "relatedLinks": []
};
