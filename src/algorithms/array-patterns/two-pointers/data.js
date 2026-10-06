// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "two-pointers",
  "title": "Two Pointers",
  "category": "Array Patterns",
  "route": "/algorithms/array-patterns/two-pointers",
  "phase": 1,
  "priority": "high",
  "visualizerType": "two-pointer-array",
  "icon": "view_week",
  "codePath": "./src/algorithms/array-patterns/two-pointers/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Two Pointers moves two indices toward a condition without trying every pair.",
  "problem": "Two Pointers moves two indices toward a condition without trying every pair.",
  "concept": "Two pointers are useful when moving one side changes the condition predictably. Use this when order lets you skip many pairs or positions.",
  "logicSummary": "Place two indices, inspect their combined state, and move the pointer that can still improve the condition.",
  "transitionSummary": "Each step moves left or right inward instead of trying all combinations.",
  "codeInsight": "The code is written around the array invariant, not a generic scan: each variable explains what future positions can still change.",
  "realLifeExample": "Two Pointers appears when contiguous ranges, ordering, or repeated array state can be reused across positions.",
  "whenToUse": "Use Two Pointers when the problem statement matches its array invariant.",
  "memoryTrick": "Two Pointers: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Explore Two Pointers through a sample teaching model, then compare it with the runnable result.",
  "logicSteps": [
    {
      "title": "Place pointers",
      "text": "Start left and right at meaningful boundaries."
    },
    {
      "title": "Inspect pair",
      "text": "Read the values or state between them."
    },
    {
      "title": "Move one side",
      "text": "Advance the pointer that cannot produce the answer."
    },
    {
      "title": "Return match",
      "text": "Return the pair, range, or transformed array."
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
      "label": "Range",
      "title": "Read ordered range",
      "note": "The code receives values where pointer movement has meaning.",
      "activeLine": 5,
      "codeInsight": "Defines twoPointers and names the input sortedArray, target; edits to those inputs change the visual state and output."
    },
    {
      "label": "Pointers",
      "title": "Set left and right",
      "note": "Both indices define the current candidate state.",
      "activeLine": 9,
      "codeInsight": "Prepares sum from the sample collection that the next visual step inspects."
    },
    {
      "label": "Compare",
      "title": "Choose pointer movement",
      "note": "The condition decides which pointer moves.",
      "activeLine": 10,
      "codeInsight": "Checks sum === target; only the branch that preserves Two Pointers's invariant is allowed to change state."
    },
    {
      "label": "Pair result",
      "title": "Return pair or state",
      "note": "The loop stops when the target condition is met or exhausted.",
      "activeLine": 14,
      "codeInsight": "Returns the final array-style answer [-1, -1], so the last frame should show the chosen positions or sequence."
    }
  ],
  "complexity": {
    "time": "O(n).",
    "space": "O(1)."
  },
  "quiz": {
    "question": "Which explanation best describes Two Pointers?",
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
        "text": "Two Pointers moves two indices toward a condition without trying every pair.",
        "correct": true
      }
    ],
    "correctText": "Correct. Two Pointers moves two indices toward a condition without trying every pair.",
    "incorrectText": "Try again. Two Pointers moves two indices toward a condition without trying every pair. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "array-patterns",
  "algorithmSlug": "two-pointers",
  "runnerInput": [
    [
      1,
      2,
      4,
      6,
      8
    ],
    10
  ],
  "animation": {
    "type": "array-flow",
    "title": "Two Pointers array state",
    "ruleLabel": "Array invariant",
    "rule": "Each step moves left or right inward instead of trying all combinations.",
    "values": [
      1,
      2,
      4,
      6,
      8
    ],
    "steps": [
      {
        "phase": "Range",
        "title": "Read ordered range",
        "note": "The code receives values where pointer movement has meaning.",
        "ruleLabel": "Two Pointers invariant",
        "rule": "Defines twoPointers and names the input sortedArray, target; edits to those inputs change the visual state and output.",
        "activeIndices": [
          0
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          1
        ],
        "primaryLabel": "Range",
        "secondaryLabel": "Each step moves left or right inward instead of trying all combinations."
      },
      {
        "phase": "Pointers",
        "title": "Set left and right",
        "note": "Both indices define the current candidate state.",
        "ruleLabel": "Two Pointers invariant",
        "rule": "Prepares sum from the sample collection that the next visual step inspects.",
        "activeIndices": [
          1,
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [
          4
        ],
        "window": [
          0,
          2
        ],
        "primaryLabel": "Pointers",
        "secondaryLabel": "Each step moves left or right inward instead of trying all combinations."
      },
      {
        "phase": "Compare",
        "title": "Choose pointer movement",
        "note": "The condition decides which pointer moves.",
        "ruleLabel": "Two Pointers invariant",
        "rule": "Checks sum === target; only the branch that preserves Two Pointers's invariant is allowed to change state.",
        "activeIndices": [
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          1,
          3
        ],
        "primaryLabel": "Compare",
        "secondaryLabel": "Each step moves left or right inward instead of trying all combinations."
      },
      {
        "phase": "Pair result",
        "title": "Return pair or state",
        "note": "The loop stops when the target condition is met or exhausted.",
        "ruleLabel": "Two Pointers invariant",
        "rule": "Returns the final array-style answer [-1, -1], so the last frame should show the chosen positions or sequence.",
        "activeIndices": [
          3,
          4
        ],
        "sortedIndices": [],
        "mutedIndices": [
          0
        ],
        "window": [
          2,
          4
        ],
        "primaryLabel": "Pair result",
        "secondaryLabel": "Each step moves left or right inward instead of trying all combinations."
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "An array is a row of numbered slots. An index tells you where a value is; it is not the value itself.",
    "family": "Arrays and indexes",
    "example": "Place pointers: Start left and right at meaningful boundaries. Inspect pair: Read the values or state between them. Move one side: Advance the pointer that cannot produce the answer. Return match: Return the pair, range, or transformed array.",
    "sampleInput": [
      [
        1,
        2,
        4,
        6,
        8
      ],
      10
    ],
    "sampleResult": [
      1,
      4
    ],
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
    "checkpoint": "Explain this in your own words: Two Pointers moves two indices toward a condition without trying every pair."
  },
  "relatedLinks": []
};
