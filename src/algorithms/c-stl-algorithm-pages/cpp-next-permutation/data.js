// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "cpp-next-permutation",
  "title": "C++ next_permutation()",
  "category": "C++ STL Algorithm Pages",
  "route": "/algorithms/cpp-stl/next-permutation",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "permutation-step",
  "icon": "school",
  "codePath": "./src/algorithms/c-stl-algorithm-pages/cpp-next-permutation/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "std::next_permutation rearranges a range into the next lexicographic ordering, or wraps to the first ordering.",
  "problem": "std::next_permutation rearranges a range into the next lexicographic ordering, or wraps to the first ordering.",
  "concept": "std::next_permutation rearranges a range into the next lexicographic ordering, or wraps to the first ordering.",
  "logicSummary": "std::next_permutation rearranges a range into the next lexicographic ordering, or wraps to the first ordering.",
  "transitionSummary": "[1, 2, 3] becomes [1, 3, 2]. [3, 2, 1] wraps to [1, 2, 3] and the function returns false.",
  "codeInsight": "std::next_permutation rearranges a range into the next lexicographic ordering, or wraps to the first ordering.",
  "realLifeExample": "[1, 2, 3] becomes [1, 3, 2]. [3, 2, 1] wraps to [1, 2, 3] and the function returns false.",
  "whenToUse": "std::next_permutation rearranges a range into the next lexicographic ordering, or wraps to the first ordering.",
  "memoryTrick": "std::next_permutation rearranges a range into the next lexicographic ordering, or wraps to the first ordering.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "std::next_permutation rearranges a range into the next lexicographic ordering, or wraps to the first ordering."
    },
    {
      "title": "Work through a small case",
      "text": "[1, 2, 3] becomes [1, 3, 2]. [3, 2, 1] wraps to [1, 2, 3] and the function returns false."
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
      "name": "result",
      "purpose": "Holds a separate copy of the values so working changes do not overwrite the caller’s array."
    },
    {
      "name": "pivot",
      "purpose": "Remembers how many items are present; this supports bounds, size reporting, or the stopping rule."
    },
    {
      "name": "successor",
      "purpose": "Remembers how many items are present; this supports bounds, size reporting, or the stopping rule."
    },
    {
      "name": "left",
      "purpose": "Remembers how many items are present; this supports bounds, size reporting, or the stopping rule."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "std::next_permutation rearranges a range into the next lexicographic ordering, or wraps to the first ordering.",
      "activeLine": 5,
      "codeInsight": "std::next_permutation rearranges a range into the next lexicographic ordering, or wraps to the first ordering."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "[1, 2, 3] becomes [1, 3, 2]. [3, 2, 1] wraps to [1, 2, 3] and the function returns false.",
      "activeLine": 17,
      "codeInsight": "std::next_permutation rearranges a range into the next lexicographic ordering, or wraps to the first ordering."
    }
  ],
  "complexity": {
    "time": "O(n) work in the worst case.",
    "space": "O(1) auxiliary state."
  },
  "quiz": {
    "question": "Which explanation best describes C++ next_permutation()?",
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
        "text": "std::next_permutation rearranges a range into the next lexicographic ordering, or wraps to the first ordering.",
        "correct": true
      }
    ],
    "correctText": "Correct. std::next_permutation rearranges a range into the next lexicographic ordering, or wraps to the first ordering.",
    "incorrectText": "Try again. std::next_permutation rearranges a range into the next lexicographic ordering, or wraps to the first ordering. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "c-stl-algorithm-pages",
  "algorithmSlug": "cpp-next-permutation",
  "runnerInput": [
    [
      1,
      2,
      3
    ]
  ],
  "animation": {
    "type": "array-flow",
    "title": "C++ next_permutation() array state",
    "ruleLabel": "Array invariant",
    "rule": "Each step either reaches a base case or moves one level deeper with a smaller decision state.",
    "values": [
      1,
      2,
      3
    ],
    "steps": [
      {
        "phase": "Base",
        "title": "Check stop condition",
        "note": "The entry step names the function inputs before the trace checks base cases or expands choices.",
        "ruleLabel": "C++ next_permutation() invariant",
        "rule": "Defines cppNextPermutation and names the input values; edits to those inputs change the visual state and output.",
        "activeIndices": [
          0
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          1
        ],
        "primaryLabel": "Base",
        "secondaryLabel": "Each step either reaches a base case or moves one level deeper with a smaller decision state."
      },
      {
        "phase": "Choice",
        "title": "Select next option",
        "note": "One valid move is added to the state.",
        "ruleLabel": "C++ next_permutation() invariant",
        "rule": "Defines cppNextPermutation and names the input values; edits to those inputs change the visual state and output.",
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
        "primaryLabel": "Choice",
        "secondaryLabel": "Each step either reaches a base case or moves one level deeper with a smaller decision state."
      },
      {
        "phase": "Call",
        "title": "Recurse deeper",
        "note": "The same rule runs on a smaller or extended state.",
        "ruleLabel": "C++ next_permutation() invariant",
        "rule": "Copies the input into result, so the animation can show mutations without pretending the caller's original array changes.",
        "activeIndices": [
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          1,
          2
        ],
        "primaryLabel": "Call",
        "secondaryLabel": "Each step either reaches a base case or moves one level deeper with a smaller decision state."
      },
      {
        "phase": "Unwind",
        "title": "Return or backtrack",
        "note": "The result is combined or the choice is removed.",
        "ruleLabel": "C++ next_permutation() invariant",
        "rule": "Returns result, the final value maintained by C++ next_permutation()'s code path.",
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
        "primaryLabel": "Unwind",
        "secondaryLabel": "Each step either reaches a base case or moves one level deeper with a smaller decision state."
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "An array is a row of numbered slots. An index tells you where a value is; it is not the value itself.",
    "family": "Arrays and indexes",
    "example": "[1, 2, 3] becomes [1, 3, 2]. [3, 2, 1] wraps to [1, 2, 3] and the function returns false.",
    "sampleInput": [
      [
        1,
        2,
        3
      ]
    ],
    "sampleResult": [
      1,
      3,
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
    "checkpoint": "Explain this in your own words: std::next_permutation rearranges a range into the next lexicographic ordering, or wraps to the first ordering."
  },
  "relatedLinks": []
};
