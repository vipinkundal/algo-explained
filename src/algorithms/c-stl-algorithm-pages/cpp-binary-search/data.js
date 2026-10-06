// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "cpp-binary-search",
  "title": "C++ binary_search()",
  "category": "C++ STL Algorithm Pages",
  "route": "/algorithms/cpp-stl/binary-search",
  "phase": 1,
  "priority": "high",
  "visualizerType": "array-boundaries",
  "icon": "school",
  "codePath": "./src/algorithms/c-stl-algorithm-pages/cpp-binary-search/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "std::binary_search checks whether a value occurs in an appropriately ordered range and returns true or false.",
  "problem": "std::binary_search checks whether a value occurs in an appropriately ordered range and returns true or false.",
  "concept": "std::binary_search checks whether a value occurs in an appropriately ordered range and returns true or false.",
  "logicSummary": "std::binary_search checks whether a value occurs in an appropriately ordered range and returns true or false.",
  "transitionSummary": "In sorted [1, 3, 3, 7], searching for 3 returns true; searching for 4 returns false. It does not return an index.",
  "codeInsight": "std::binary_search checks whether a value occurs in an appropriately ordered range and returns true or false.",
  "realLifeExample": "In sorted [1, 3, 3, 7], searching for 3 returns true; searching for 4 returns false. It does not return an index.",
  "whenToUse": "std::binary_search checks whether a value occurs in an appropriately ordered range and returns true or false.",
  "memoryTrick": "std::binary_search checks whether a value occurs in an appropriately ordered range and returns true or false.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "std::binary_search checks whether a value occurs in an appropriately ordered range and returns true or false."
    },
    {
      "title": "Work through a small case",
      "text": "In sorted [1, 3, 3, 7], searching for 3 returns true; searching for 4 returns false. It does not return an index."
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
      "note": "std::binary_search checks whether a value occurs in an appropriately ordered range and returns true or false.",
      "activeLine": 5,
      "codeInsight": "std::binary_search checks whether a value occurs in an appropriately ordered range and returns true or false."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "In sorted [1, 3, 3, 7], searching for 3 returns true; searching for 4 returns false. It does not return an index.",
      "activeLine": 10,
      "codeInsight": "std::binary_search checks whether a value occurs in an appropriately ordered range and returns true or false."
    }
  ],
  "complexity": {
    "time": "O(log n) comparisons; iterator movement can be linear for non-random-access iterators.",
    "space": "O(1) auxiliary state. The range must satisfy the ordering/partition requirements."
  },
  "quiz": {
    "question": "Which explanation best describes C++ binary_search()?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "std::binary_search checks whether a value occurs in an appropriately ordered range and returns true or false.",
        "correct": true
      },
      {
        "key": "C",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      }
    ],
    "correctText": "Correct. std::binary_search checks whether a value occurs in an appropriately ordered range and returns true or false.",
    "incorrectText": "Try again. std::binary_search checks whether a value occurs in an appropriately ordered range and returns true or false. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "c-stl-algorithm-pages",
  "algorithmSlug": "cpp-binary-search",
  "runnerInput": [
    [
      1,
      3,
      5
    ],
    3
  ],
  "animation": {
    "type": "array-flow",
    "title": "C++ binary_search() array state",
    "ruleLabel": "Array invariant",
    "rule": "Each comparison must shrink the boundary range; equality returns immediately, otherwise low or high moves past mid.",
    "values": [
      1,
      3,
      5
    ],
    "steps": [
      {
        "phase": "Sorted input",
        "title": "Read the ordered search space",
        "note": "The code starts from a range where binary decisions are valid.",
        "ruleLabel": "C++ binary_search() invariant",
        "rule": "Defines cppBinarySearch and names the input values, target; edits to those inputs change the visual state and output.",
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
        "ruleLabel": "C++ binary_search() invariant",
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
        "ruleLabel": "C++ binary_search() invariant",
        "rule": "Checks values[mid] === target; only the branch that preserves C++ binary_search()'s invariant is allowed to change state.",
        "activeIndices": [
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          1,
          2
        ],
        "primaryLabel": "mid check",
        "secondaryLabel": "Each comparison must shrink the boundary range; equality returns immediately, otherwise low or high moves past mid."
      },
      {
        "phase": "Return",
        "title": "Emit index or boundary",
        "note": "The loop ends with a match or the collapsed boundary.",
        "ruleLabel": "C++ binary_search() invariant",
        "rule": "Returns false, the boolean result reached by the highlighted checks.",
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
        "primaryLabel": "Return",
        "secondaryLabel": "Each comparison must shrink the boundary range; equality returns immediately, otherwise low or high moves past mid."
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "An array is a row of numbered slots. An index tells you where a value is; it is not the value itself.",
    "family": "Arrays and indexes",
    "example": "In sorted [1, 3, 3, 7], searching for 3 returns true; searching for 4 returns false. It does not return an index.",
    "sampleInput": [
      [
        1,
        3,
        5
      ],
      3
    ],
    "sampleResult": true,
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
    "checkpoint": "Explain this in your own words: std::binary_search checks whether a value occurs in an appropriately ordered range and returns true or false."
  },
  "relatedLinks": []
};
