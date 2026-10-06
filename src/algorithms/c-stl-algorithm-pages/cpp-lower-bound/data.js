// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "cpp-lower-bound",
  "title": "C++ lower_bound()",
  "category": "C++ STL Algorithm Pages",
  "route": "/algorithms/cpp-stl/lower-bound",
  "phase": 1,
  "priority": "high",
  "visualizerType": "array-boundaries",
  "icon": "school",
  "codePath": "./src/algorithms/c-stl-algorithm-pages/cpp-lower-bound/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "std::lower_bound finds the first position whose value is not less than the target in a sorted range.",
  "problem": "std::lower_bound finds the first position whose value is not less than the target in a sorted range.",
  "concept": "std::lower_bound finds the first position whose value is not less than the target in a sorted range.",
  "logicSummary": "std::lower_bound finds the first position whose value is not less than the target in a sorted range.",
  "transitionSummary": "In [1, 3, 3, 7], lower_bound(3) points to index 1. If no value qualifies, it returns the end iterator.",
  "codeInsight": "std::lower_bound finds the first position whose value is not less than the target in a sorted range.",
  "realLifeExample": "In [1, 3, 3, 7], lower_bound(3) points to index 1. If no value qualifies, it returns the end iterator.",
  "whenToUse": "std::lower_bound finds the first position whose value is not less than the target in a sorted range.",
  "memoryTrick": "std::lower_bound finds the first position whose value is not less than the target in a sorted range.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "std::lower_bound finds the first position whose value is not less than the target in a sorted range."
    },
    {
      "title": "Work through a small case",
      "text": "In [1, 3, 3, 7], lower_bound(3) points to index 1. If no value qualifies, it returns the end iterator."
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
    },
    {
      "name": "target",
      "purpose": "The value or total the operation is trying to locate or reach."
    },
    {
      "name": "low",
      "purpose": "Marks one end of the candidate range. Changing a boundary removes positions that no longer need to be considered."
    },
    {
      "name": "high",
      "purpose": "Remembers how many items are present; this supports bounds, size reporting, or the stopping rule."
    },
    {
      "name": "mid",
      "purpose": "Chooses an interior position from the current boundaries so a comparison can reduce the remaining range."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "std::lower_bound finds the first position whose value is not less than the target in a sorted range.",
      "activeLine": 5,
      "codeInsight": "std::lower_bound finds the first position whose value is not less than the target in a sorted range."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "In [1, 3, 3, 7], lower_bound(3) points to index 1. If no value qualifies, it returns the end iterator.",
      "activeLine": 13,
      "codeInsight": "std::lower_bound finds the first position whose value is not less than the target in a sorted range."
    }
  ],
  "complexity": {
    "time": "O(log n) comparisons; iterator movement can be linear for non-random-access iterators.",
    "space": "O(1) auxiliary state with an iterative implementation."
  },
  "quiz": {
    "question": "Which explanation best describes C++ lower_bound()?",
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
        "text": "std::lower_bound finds the first position whose value is not less than the target in a sorted range.",
        "correct": true
      }
    ],
    "correctText": "Correct. std::lower_bound finds the first position whose value is not less than the target in a sorted range.",
    "incorrectText": "Try again. std::lower_bound finds the first position whose value is not less than the target in a sorted range. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "c-stl-algorithm-pages",
  "algorithmSlug": "cpp-lower-bound",
  "runnerInput": [
    [
      1,
      3,
      3,
      5
    ],
    3
  ],
  "animation": {
    "type": "array-flow",
    "title": "C++ lower_bound() array state",
    "ruleLabel": "Array invariant",
    "rule": "Each comparison must shrink the boundary range; equality returns immediately, otherwise low or high moves past mid.",
    "values": [
      1,
      3,
      3,
      5
    ],
    "steps": [
      {
        "phase": "Sorted input",
        "title": "Read the ordered search space",
        "note": "The code starts from a range where binary decisions are valid.",
        "ruleLabel": "C++ lower_bound() invariant",
        "rule": "Defines cppLowerBound and names the input values, target; edits to those inputs change the visual state and output.",
        "activeIndices": [
          0
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          1
        ],
        "primaryLabel": "Sorted input",
        "secondaryLabel": "Each comparison must shrink the boundary range; equality returns immediately, otherwise low or high moves past mid."
      },
      {
        "phase": "low / high",
        "title": "Open the candidate window",
        "note": "low and high mark every position that may still answer.",
        "ruleLabel": "C++ lower_bound() invariant",
        "rule": "Initializes low as mutable state; later branches update it as the search window or traversal changes.",
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
        "primaryLabel": "low / high",
        "secondaryLabel": "Each comparison must shrink the boundary range; equality returns immediately, otherwise low or high moves past mid."
      },
      {
        "phase": "mid check",
        "title": "Compare the midpoint",
        "note": "The midpoint decides which half is removed.",
        "ruleLabel": "C++ lower_bound() invariant",
        "rule": "When values[mid] < target is true, low = mid + 1; the animation should show that branch's state update immediately.",
        "activeIndices": [
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          1,
          3
        ],
        "primaryLabel": "mid check",
        "secondaryLabel": "Each comparison must shrink the boundary range; equality returns immediately, otherwise low or high moves past mid."
      },
      {
        "phase": "Return",
        "title": "Emit index or boundary",
        "note": "The loop ends with a match or the collapsed boundary.",
        "ruleLabel": "C++ lower_bound() invariant",
        "rule": "Returns low, the final value maintained by C++ lower_bound()'s code path.",
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
        "primaryLabel": "Return",
        "secondaryLabel": "Each comparison must shrink the boundary range; equality returns immediately, otherwise low or high moves past mid."
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "An array is a row of numbered slots. An index tells you where a value is; it is not the value itself.",
    "family": "Arrays and indexes",
    "example": "In [1, 3, 3, 7], lower_bound(3) points to index 1. If no value qualifies, it returns the end iterator.",
    "sampleInput": [
      [
        1,
        3,
        3,
        5
      ],
      3
    ],
    "sampleResult": 1,
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
    "checkpoint": "Explain this in your own words: std::lower_bound finds the first position whose value is not less than the target in a sorted range."
  },
  "relatedLinks": []
};
