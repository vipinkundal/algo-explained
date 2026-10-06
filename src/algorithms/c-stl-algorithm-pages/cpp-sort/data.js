// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "cpp-sort",
  "title": "C++ sort()",
  "category": "C++ STL Algorithm Pages",
  "route": "/algorithms/cpp-stl/sort",
  "phase": 1,
  "priority": "high",
  "visualizerType": "comparator-sort",
  "icon": "school",
  "codePath": "./src/algorithms/c-stl-algorithm-pages/cpp-sort/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "std::sort arranges a range according to a comparison rule; equal elements need not keep their original relative order.",
  "problem": "std::sort arranges a range according to a comparison rule; equal elements need not keep their original relative order.",
  "concept": "std::sort arranges a range according to a comparison rule; equal elements need not keep their original relative order.",
  "logicSummary": "std::sort arranges a range according to a comparison rule; equal elements need not keep their original relative order.",
  "transitionSummary": "[3, 1, 2] becomes [1, 2, 3] with the default ascending comparison. Use stable_sort when equal-key order must be preserved.",
  "codeInsight": "std::sort arranges a range according to a comparison rule; equal elements need not keep their original relative order.",
  "realLifeExample": "[3, 1, 2] becomes [1, 2, 3] with the default ascending comparison. Use stable_sort when equal-key order must be preserved.",
  "whenToUse": "std::sort arranges a range according to a comparison rule; equal elements need not keep their original relative order.",
  "memoryTrick": "std::sort arranges a range according to a comparison rule; equal elements need not keep their original relative order.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "std::sort arranges a range according to a comparison rule; equal elements need not keep their original relative order."
    },
    {
      "title": "Work through a small case",
      "text": "[3, 1, 2] becomes [1, 2, 3] with the default ascending comparison. Use stable_sort when equal-key order must be preserved."
    },
    {
      "title": "Check the boundary cases",
      "text": "Keep positions and values separate. Check whether the right boundary is included before changing an index."
    }
  ],
  "variables": [
    {
      "name": "values",
      "purpose": "The collection to process. Its length tells the routine how many input items are available."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "std::sort arranges a range according to a comparison rule; equal elements need not keep their original relative order.",
      "activeLine": 5,
      "codeInsight": "std::sort arranges a range according to a comparison rule; equal elements need not keep their original relative order."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "[3, 1, 2] becomes [1, 2, 3] with the default ascending comparison. Use stable_sort when equal-key order must be preserved.",
      "activeLine": 6,
      "codeInsight": "std::sort arranges a range according to a comparison rule; equal elements need not keep their original relative order."
    }
  ],
  "complexity": {
    "time": "O(n log n) comparisons for std::sort.",
    "space": "Implementation dependent; the JavaScript companion is not a measurement of C++ library storage."
  },
  "quiz": {
    "question": "Which explanation best describes C++ sort()?",
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
        "text": "std::sort arranges a range according to a comparison rule; equal elements need not keep their original relative order.",
        "correct": true
      }
    ],
    "correctText": "Correct. std::sort arranges a range according to a comparison rule; equal elements need not keep their original relative order.",
    "incorrectText": "Try again. std::sort arranges a range according to a comparison rule; equal elements need not keep their original relative order. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "c-stl-algorithm-pages",
  "algorithmSlug": "cpp-sort",
  "runnerInput": [
    [
      3,
      1,
      2
    ]
  ],
  "animation": {
    "type": "array-flow",
    "title": "C++ sort() array state",
    "ruleLabel": "Array invariant",
    "rule": "Each step compares or moves values so the unsorted region gets smaller.",
    "values": [
      3,
      1,
      2
    ],
    "steps": [
      {
        "phase": "Input array",
        "title": "Copy values",
        "note": "The code starts with the values to reorder.",
        "ruleLabel": "C++ sort() invariant",
        "rule": "Defines cppSort and names the input values; edits to those inputs change the visual state and output.",
        "activeIndices": [
          0
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          1
        ],
        "primaryLabel": "Input array",
        "secondaryLabel": "Each step compares or moves values so the unsorted region gets smaller."
      },
      {
        "phase": "Invariant",
        "title": "Track ordered work",
        "note": "The algorithm marks what part is already safe.",
        "ruleLabel": "C++ sort() invariant",
        "rule": "Defines cppSort and names the input values; edits to those inputs change the visual state and output.",
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
        "secondaryLabel": "Each step compares or moves values so the unsorted region gets smaller."
      },
      {
        "phase": "Move",
        "title": "Apply ordering step",
        "note": "The current operation reduces disorder.",
        "ruleLabel": "C++ sort() invariant",
        "rule": "Returns the final array-style answer [...values].sort((a, b) => a - b), so the last frame should show the chosen positions or sequence.",
        "activeIndices": [
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          1,
          2
        ],
        "primaryLabel": "Move",
        "secondaryLabel": "Each step compares or moves values so the unsorted region gets smaller."
      },
      {
        "phase": "Sorted output",
        "title": "Return final order",
        "note": "The result is returned when no unsorted work remains.",
        "ruleLabel": "C++ sort() invariant",
        "rule": "Returns the final array-style answer [...values].sort((a, b) => a - b), so the last frame should show the chosen positions or sequence.",
        "activeIndices": [
          2,
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          1,
          2
        ],
        "primaryLabel": "Sorted output",
        "secondaryLabel": "Each step compares or moves values so the unsorted region gets smaller."
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "An array is a row of numbered slots. An index tells you where a value is; it is not the value itself.",
    "family": "Arrays and indexes",
    "example": "[3, 1, 2] becomes [1, 2, 3] with the default ascending comparison. Use stable_sort when equal-key order must be preserved.",
    "sampleInput": [
      [
        3,
        1,
        2
      ]
    ],
    "sampleResult": [
      1,
      2,
      3
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
    "checkpoint": "Explain this in your own words: std::sort arranges a range according to a comparison rule; equal elements need not keep their original relative order."
  },
  "relatedLinks": []
};
