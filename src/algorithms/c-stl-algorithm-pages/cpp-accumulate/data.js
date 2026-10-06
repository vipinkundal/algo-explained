// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "cpp-accumulate",
  "title": "C++ accumulate()",
  "category": "C++ STL Algorithm Pages",
  "route": "/algorithms/cpp-stl/accumulate",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "running-sum",
  "icon": "school",
  "codePath": "./src/algorithms/c-stl-algorithm-pages/cpp-accumulate/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "std::accumulate combines a range with an initial value, usually to compute a total.",
  "problem": "std::accumulate combines a range with an initial value, usually to compute a total.",
  "concept": "std::accumulate combines a range with an initial value, usually to compute a total.",
  "logicSummary": "std::accumulate combines a range with an initial value, usually to compute a total.",
  "transitionSummary": "For [2, 3, 4] and initial value 10, accumulation returns 19. The initial value also determines the result type in C++.",
  "codeInsight": "std::accumulate combines a range with an initial value, usually to compute a total.",
  "realLifeExample": "For [2, 3, 4] and initial value 10, accumulation returns 19. The initial value also determines the result type in C++.",
  "whenToUse": "std::accumulate combines a range with an initial value, usually to compute a total.",
  "memoryTrick": "std::accumulate combines a range with an initial value, usually to compute a total.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "std::accumulate combines a range with an initial value, usually to compute a total."
    },
    {
      "title": "Work through a small case",
      "text": "For [2, 3, 4] and initial value 10, accumulation returns 19. The initial value also determines the result type in C++."
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
      "name": "initialValue = 0",
      "purpose": "An input to the computation. Compare its position in the function signature with the corresponding sample argument."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "std::accumulate combines a range with an initial value, usually to compute a total.",
      "activeLine": 5,
      "codeInsight": "std::accumulate combines a range with an initial value, usually to compute a total."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "For [2, 3, 4] and initial value 10, accumulation returns 19. The initial value also determines the result type in C++.",
      "activeLine": 6,
      "codeInsight": "std::accumulate combines a range with an initial value, usually to compute a total."
    }
  ],
  "complexity": {
    "time": "O(n) applications of the combining operation.",
    "space": "O(1) auxiliary state for numeric addition."
  },
  "quiz": {
    "question": "Which explanation best describes C++ accumulate()?",
    "options": [
      {
        "key": "A",
        "text": "std::accumulate combines a range with an initial value, usually to compute a total.",
        "correct": true
      },
      {
        "key": "B",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "C",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      }
    ],
    "correctText": "Correct. std::accumulate combines a range with an initial value, usually to compute a total.",
    "incorrectText": "Try again. std::accumulate combines a range with an initial value, usually to compute a total. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "c-stl-algorithm-pages",
  "algorithmSlug": "cpp-accumulate",
  "runnerInput": [
    [
      1,
      2,
      3
    ],
    10
  ],
  "animation": {
    "type": "array-flow",
    "title": "C++ accumulate() array state",
    "ruleLabel": "Array invariant",
    "rule": "Each item updates the running total, difference, or accumulator exactly once.",
    "values": [
      1,
      2,
      3
    ],
    "steps": [
      {
        "phase": "Values",
        "title": "Read values or updates",
        "note": "The code receives the array, ranges, or deltas.",
        "ruleLabel": "C++ accumulate() invariant",
        "rule": "Defines cppAccumulate and names the input values, initialValue = 0; edits to those inputs change the visual state and output.",
        "activeIndices": [
          0
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          1
        ],
        "primaryLabel": "Values",
        "secondaryLabel": "Each item updates the running total, difference, or accumulator exactly once."
      },
      {
        "phase": "Accumulator",
        "title": "Start running state",
        "note": "A neutral starting value makes every update consistent.",
        "ruleLabel": "C++ accumulate() invariant",
        "rule": "Defines cppAccumulate and names the input values, initialValue = 0; edits to those inputs change the visual state and output.",
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
        "primaryLabel": "Accumulator",
        "secondaryLabel": "Each item updates the running total, difference, or accumulator exactly once."
      },
      {
        "phase": "Prefix step",
        "title": "Apply current contribution",
        "note": "The running state changes by the current value or boundary delta.",
        "ruleLabel": "C++ accumulate() invariant",
        "rule": "Defines cppAccumulate and names the input values, initialValue = 0; edits to those inputs change the visual state and output.",
        "activeIndices": [
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          1,
          2
        ],
        "primaryLabel": "Prefix step",
        "secondaryLabel": "Each item updates the running total, difference, or accumulator exactly once."
      },
      {
        "phase": "Range result",
        "title": "Read saved state",
        "note": "The stored state gives the final or range answer.",
        "ruleLabel": "C++ accumulate() invariant",
        "rule": "Returns values.reduce((total, value) => total + value, initialValue), the final value maintained by C++ accumulate()'s code path.",
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
        "primaryLabel": "Range result",
        "secondaryLabel": "Each item updates the running total, difference, or accumulator exactly once."
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "An array is a row of numbered slots. An index tells you where a value is; it is not the value itself.",
    "family": "Arrays and indexes",
    "example": "For [2, 3, 4] and initial value 10, accumulation returns 19. The initial value also determines the result type in C++.",
    "sampleInput": [
      [
        1,
        2,
        3
      ],
      10
    ],
    "sampleResult": 16,
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
    "checkpoint": "Explain this in your own words: std::accumulate combines a range with an initial value, usually to compute a total."
  },
  "relatedLinks": []
};
