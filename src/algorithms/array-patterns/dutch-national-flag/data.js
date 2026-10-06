// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "dutch-national-flag",
  "title": "Dutch National Flag",
  "category": "Array Patterns",
  "route": "/algorithms/array-patterns/dutch-national-flag",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "three-partition",
  "icon": "view_week",
  "codePath": "./src/algorithms/array-patterns/dutch-national-flag/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Dutch National Flag partitions values into low, middle, and high regions in one pass.",
  "problem": "Dutch National Flag partitions values into low, middle, and high regions in one pass.",
  "concept": "Dutch National Flag is useful when a pivot can partition values into smaller and larger sides. Use this when in-place average-case n log n sorting fits the dataset.",
  "logicSummary": "Choose a pivot, partition values around it, then recursively sort the left and right partitions.",
  "transitionSummary": "Each partition step moves values to the correct side of the pivot and fixes the pivot position.",
  "codeInsight": "The code is written around the array invariant, not a generic scan: each variable explains what future positions can still change.",
  "realLifeExample": "Dutch National Flag appears when contiguous ranges, ordering, or repeated array state can be reused across positions.",
  "whenToUse": "Use Dutch National Flag when the problem statement matches its array invariant.",
  "memoryTrick": "Dutch National Flag: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Explore Dutch National Flag through a sample teaching model, then compare it with the runnable result.",
  "logicSteps": [
    {
      "title": "Choose pivot",
      "text": "Select the value that splits the range."
    },
    {
      "title": "Partition range",
      "text": "Move smaller values left and larger values right."
    },
    {
      "title": "Fix pivot",
      "text": "Place pivot at its final index."
    },
    {
      "title": "Sort partitions",
      "text": "Recurse on both sides."
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
      "label": "Pivot",
      "title": "Choose pivot value",
      "note": "The pivot defines the partition rule.",
      "activeLine": 7,
      "codeInsight": "Initializes low as mutable state; later branches update it as the search window or traversal changes."
    },
    {
      "label": "Scan",
      "title": "Move values by pivot",
      "note": "Values are compared with the pivot.",
      "activeLine": 7,
      "codeInsight": "Initializes low as mutable state; later branches update it as the search window or traversal changes."
    },
    {
      "label": "Place",
      "title": "Fix pivot index",
      "note": "The pivot lands between smaller and larger values.",
      "activeLine": 7,
      "codeInsight": "Initializes low as mutable state; later branches update it as the search window or traversal changes."
    },
    {
      "label": "Recurse",
      "title": "Sort both sides",
      "note": "The same partition rule handles each side.",
      "activeLine": 11,
      "codeInsight": "When values[mid] === 0 is true, [values[low++], values[mid++]] = [values[mid], values[low]]; the animation should show that branch's state update immediately."
    }
  ],
  "complexity": {
    "time": "O(n).",
    "space": "O(1)."
  },
  "quiz": {
    "question": "Which explanation best describes Dutch National Flag?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "Dutch National Flag partitions values into low, middle, and high regions in one pass.",
        "correct": true
      },
      {
        "key": "C",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      }
    ],
    "correctText": "Correct. Dutch National Flag partitions values into low, middle, and high regions in one pass.",
    "incorrectText": "Try again. Dutch National Flag partitions values into low, middle, and high regions in one pass. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "array-patterns",
  "algorithmSlug": "dutch-national-flag",
  "runnerInput": [
    [
      2,
      0,
      2,
      1,
      1,
      0
    ]
  ],
  "animation": {
    "type": "array-flow",
    "title": "Dutch National Flag array state",
    "ruleLabel": "Array invariant",
    "rule": "Each partition step moves values to the correct side of the pivot and fixes the pivot position.",
    "values": [
      2,
      0,
      2,
      1,
      1,
      0
    ],
    "steps": [
      {
        "phase": "Pivot",
        "title": "Choose pivot value",
        "note": "The pivot defines the partition rule.",
        "ruleLabel": "Dutch National Flag invariant",
        "rule": "Initializes low as mutable state; later branches update it as the search window or traversal changes.",
        "activeIndices": [
          0
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          1
        ],
        "primaryLabel": "Pivot",
        "secondaryLabel": "Each partition step moves values to the correct side of the pivot and fixes the pivot position."
      },
      {
        "phase": "Scan",
        "title": "Move values by pivot",
        "note": "Values are compared with the pivot.",
        "ruleLabel": "Dutch National Flag invariant",
        "rule": "Initializes low as mutable state; later branches update it as the search window or traversal changes.",
        "activeIndices": [
          1,
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [
          4,
          5
        ],
        "window": [
          0,
          2
        ],
        "primaryLabel": "Scan",
        "secondaryLabel": "Each partition step moves values to the correct side of the pivot and fixes the pivot position."
      },
      {
        "phase": "Place",
        "title": "Fix pivot index",
        "note": "The pivot lands between smaller and larger values.",
        "ruleLabel": "Dutch National Flag invariant",
        "rule": "Initializes low as mutable state; later branches update it as the search window or traversal changes.",
        "activeIndices": [
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [
          5
        ],
        "window": [
          1,
          3
        ],
        "primaryLabel": "Place",
        "secondaryLabel": "Each partition step moves values to the correct side of the pivot and fixes the pivot position."
      },
      {
        "phase": "Recurse",
        "title": "Sort both sides",
        "note": "The same partition rule handles each side.",
        "ruleLabel": "Dutch National Flag invariant",
        "rule": "When values[mid] === 0 is true, [values[low++], values[mid++]] = [values[mid], values[low]]; the animation should show that branch's state update immediately.",
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
        "primaryLabel": "Recurse",
        "secondaryLabel": "Each partition step moves values to the correct side of the pivot and fixes the pivot position."
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "An array is a row of numbered slots. An index tells you where a value is; it is not the value itself.",
    "family": "Arrays and indexes",
    "example": "Choose pivot: Select the value that splits the range. Partition range: Move smaller values left and larger values right. Fix pivot: Place pivot at its final index. Sort partitions: Recurse on both sides.",
    "sampleInput": [
      [
        2,
        0,
        2,
        1,
        1,
        0
      ]
    ],
    "sampleResult": [
      0,
      0,
      1,
      1,
      2,
      2
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
    "checkpoint": "Explain this in your own words: Dutch National Flag partitions values into low, middle, and high regions in one pass."
  },
  "relatedLinks": []
};
