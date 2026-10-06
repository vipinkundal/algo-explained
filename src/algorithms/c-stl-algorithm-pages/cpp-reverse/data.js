// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "cpp-reverse",
  "title": "C++ reverse()",
  "category": "C++ STL Algorithm Pages",
  "route": "/algorithms/cpp-stl/reverse",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "two-pointer-swap",
  "icon": "school",
  "codePath": "./src/algorithms/c-stl-algorithm-pages/cpp-reverse/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "std::reverse reverses the order of elements inside a range.",
  "problem": "std::reverse reverses the order of elements inside a range.",
  "concept": "std::reverse reverses the order of elements inside a range.",
  "logicSummary": "std::reverse reverses the order of elements inside a range.",
  "transitionSummary": "[1, 2, 3, 4] becomes [4, 3, 2, 1], swapping elements from opposite ends.",
  "codeInsight": "std::reverse reverses the order of elements inside a range.",
  "realLifeExample": "[1, 2, 3, 4] becomes [4, 3, 2, 1], swapping elements from opposite ends.",
  "whenToUse": "std::reverse reverses the order of elements inside a range.",
  "memoryTrick": "std::reverse reverses the order of elements inside a range.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "std::reverse reverses the order of elements inside a range."
    },
    {
      "title": "Work through a small case",
      "text": "[1, 2, 3, 4] becomes [4, 3, 2, 1], swapping elements from opposite ends."
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
      "note": "std::reverse reverses the order of elements inside a range.",
      "activeLine": 5,
      "codeInsight": "std::reverse reverses the order of elements inside a range."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "[1, 2, 3, 4] becomes [4, 3, 2, 1], swapping elements from opposite ends.",
      "activeLine": 6,
      "codeInsight": "std::reverse reverses the order of elements inside a range."
    }
  ],
  "complexity": {
    "time": "O(n) work (approximately n/2 swaps).",
    "space": "O(1) auxiliary state."
  },
  "quiz": {
    "question": "Which explanation best describes C++ reverse()?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "std::reverse reverses the order of elements inside a range.",
        "correct": true
      },
      {
        "key": "C",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      }
    ],
    "correctText": "Correct. std::reverse reverses the order of elements inside a range.",
    "incorrectText": "Try again. std::reverse reverses the order of elements inside a range. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "c-stl-algorithm-pages",
  "algorithmSlug": "cpp-reverse",
  "runnerInput": [
    [
      1,
      2,
      3
    ]
  ],
  "animation": {
    "type": "array-flow",
    "title": "C++ reverse() array state",
    "ruleLabel": "Array invariant",
    "rule": "Each step moves left or right inward instead of trying all combinations.",
    "values": [
      1,
      2,
      3
    ],
    "steps": [
      {
        "phase": "Range",
        "title": "Read ordered range",
        "note": "The code receives values where pointer movement has meaning.",
        "ruleLabel": "C++ reverse() invariant",
        "rule": "Defines cppReverse and names the input values; edits to those inputs change the visual state and output.",
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
        "ruleLabel": "C++ reverse() invariant",
        "rule": "Defines cppReverse and names the input values; edits to those inputs change the visual state and output.",
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
        "primaryLabel": "Pointers",
        "secondaryLabel": "Each step moves left or right inward instead of trying all combinations."
      },
      {
        "phase": "Compare",
        "title": "Choose pointer movement",
        "note": "The condition decides which pointer moves.",
        "ruleLabel": "C++ reverse() invariant",
        "rule": "Defines cppReverse and names the input values; edits to those inputs change the visual state and output.",
        "activeIndices": [
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          1,
          2
        ],
        "primaryLabel": "Compare",
        "secondaryLabel": "Each step moves left or right inward instead of trying all combinations."
      },
      {
        "phase": "Pair result",
        "title": "Return pair or state",
        "note": "The loop stops when the target condition is met or exhausted.",
        "ruleLabel": "C++ reverse() invariant",
        "rule": "Returns the final array-style answer [...values].reverse(), so the last frame should show the chosen positions or sequence.",
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
        "primaryLabel": "Pair result",
        "secondaryLabel": "Each step moves left or right inward instead of trying all combinations."
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "An array is a row of numbered slots. An index tells you where a value is; it is not the value itself.",
    "family": "Arrays and indexes",
    "example": "[1, 2, 3, 4] becomes [4, 3, 2, 1], swapping elements from opposite ends.",
    "sampleInput": [
      [
        1,
        2,
        3
      ]
    ],
    "sampleResult": [
      3,
      2,
      1
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
    "checkpoint": "Explain this in your own words: std::reverse reverses the order of elements inside a range."
  },
  "relatedLinks": []
};
