// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "cpp-unique",
  "title": "C++ unique()",
  "category": "C++ STL Algorithm Pages",
  "route": "/algorithms/cpp-stl/unique",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "duplicate-shift",
  "icon": "school",
  "codePath": "./src/algorithms/c-stl-algorithm-pages/cpp-unique/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "std::unique moves adjacent duplicates out of the retained prefix and returns its new logical end.",
  "problem": "std::unique moves adjacent duplicates out of the retained prefix and returns its new logical end.",
  "concept": "std::unique moves adjacent duplicates out of the retained prefix and returns its new logical end.",
  "logicSummary": "std::unique moves adjacent duplicates out of the retained prefix and returns its new logical end.",
  "transitionSummary": "[1, 1, 2, 1] retains [1, 2, 1]. It does not remove non-adjacent duplicates or shrink a vector; use erase afterward.",
  "codeInsight": "std::unique moves adjacent duplicates out of the retained prefix and returns its new logical end.",
  "realLifeExample": "[1, 1, 2, 1] retains [1, 2, 1]. It does not remove non-adjacent duplicates or shrink a vector; use erase afterward.",
  "whenToUse": "std::unique moves adjacent duplicates out of the retained prefix and returns its new logical end.",
  "memoryTrick": "std::unique moves adjacent duplicates out of the retained prefix and returns its new logical end.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "std::unique moves adjacent duplicates out of the retained prefix and returns its new logical end."
    },
    {
      "title": "Work through a small case",
      "text": "[1, 1, 2, 1] retains [1, 2, 1]. It does not remove non-adjacent duplicates or shrink a vector; use erase afterward."
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
      "purpose": "Stores completed answers or computed states so they can be returned and, where needed, reused."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "std::unique moves adjacent duplicates out of the retained prefix and returns its new logical end.",
      "activeLine": 5,
      "codeInsight": "std::unique moves adjacent duplicates out of the retained prefix and returns its new logical end."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "[1, 1, 2, 1] retains [1, 2, 1]. It does not remove non-adjacent duplicates or shrink a vector; use erase afterward.",
      "activeLine": 10,
      "codeInsight": "std::unique moves adjacent duplicates out of the retained prefix and returns its new logical end."
    }
  ],
  "complexity": {
    "time": "O(n) comparisons for a range of n elements.",
    "space": "O(1) auxiliary state; the container still needs erase to shrink."
  },
  "quiz": {
    "question": "Which explanation best describes C++ unique()?",
    "options": [
      {
        "key": "A",
        "text": "std::unique moves adjacent duplicates out of the retained prefix and returns its new logical end.",
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
    "correctText": "Correct. std::unique moves adjacent duplicates out of the retained prefix and returns its new logical end.",
    "incorrectText": "Try again. std::unique moves adjacent duplicates out of the retained prefix and returns its new logical end. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "c-stl-algorithm-pages",
  "algorithmSlug": "cpp-unique",
  "runnerInput": [
    [
      1,
      1,
      2,
      2,
      1
    ]
  ],
  "animation": {
    "type": "array-flow",
    "title": "C++ unique() array state",
    "ruleLabel": "Array invariant",
    "rule": "Each step changes only the part of the algorithm state required to preserve the invariant.",
    "values": [
      1,
      1,
      2,
      2,
      1
    ],
    "steps": [
      {
        "phase": "Algorithm State",
        "title": "Read algorithm state action",
        "note": "The code receives the next value or command.",
        "ruleLabel": "C++ unique() invariant",
        "rule": "Seeds result with the sample values shown in the visualizer, giving the trace concrete cells to inspect.",
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
        "ruleLabel": "C++ unique() invariant",
        "rule": "Seeds result with the sample values shown in the visualizer, giving the trace concrete cells to inspect.",
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
        "primaryLabel": "Invariant",
        "secondaryLabel": "Each step changes only the part of the algorithm state required to preserve the invariant."
      },
      {
        "phase": "State change",
        "title": "Update the state described by this algorithm",
        "note": "Only the necessary algorithm state fields are changed.",
        "ruleLabel": "C++ unique() invariant",
        "rule": "Checks result.length === 0 || result[result.length - 1] !== value) result.push(value; only the branch that preserves C++ unique()'s invariant is allowed to change state.",
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
        "ruleLabel": "C++ unique() invariant",
        "rule": "Returns result, the final value maintained by C++ unique()'s code path.",
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
        "primaryLabel": "Result",
        "secondaryLabel": "Each step changes only the part of the algorithm state required to preserve the invariant."
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "An array is a row of numbered slots. An index tells you where a value is; it is not the value itself.",
    "family": "Arrays and indexes",
    "example": "[1, 1, 2, 1] retains [1, 2, 1]. It does not remove non-adjacent duplicates or shrink a vector; use erase afterward.",
    "sampleInput": [
      [
        1,
        1,
        2,
        2,
        1
      ]
    ],
    "sampleResult": [
      1,
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
    "checkpoint": "Explain this in your own words: std::unique moves adjacent duplicates out of the retained prefix and returns its new logical end."
  },
  "relatedLinks": []
};
