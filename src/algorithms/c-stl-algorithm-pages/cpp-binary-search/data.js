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
  "meaning": "C++ binary_search() is a C++ STL Algorithm Pages technique focused on index or insertion point.",
  "problem": "C++ binary_search() narrows where a target can be by scanning or shrinking a candidate interval.",
  "concept": "C++ binary_search() is useful when sorted order lets you discard a whole half of the search space. Use this when the input is sorted or the answer predicate changes only once.",
  "logicSummary": "Maintain low/high boundaries, test the middle, and keep only the half that can still contain the answer.",
  "transitionSummary": "Each comparison must shrink the boundary range; equality returns immediately, otherwise low or high moves past mid.",
  "codeInsight": "The boundary variables are the important state; every branch must make the remaining search interval smaller.",
  "realLifeExample": "C++ binary_search() appears when the input is array, target and the required result is index or insertion point.",
  "whenToUse": "Use C++ binary_search() when a problem matches the C++ STL Algorithm Pages pattern and the expected state changes match a array boundaries dry run.",
  "memoryTrick": "C++ binary_search(): name the invariant, then trace the exact state change.",
  "visualizerCaption": "C++ binary_search() is shown as a shrinking boundary search. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Read sorted input",
      "text": "Confirm the array or predicate has monotonic order."
    },
    {
      "title": "Set boundaries",
      "text": "Place low and high around every candidate."
    },
    {
      "title": "Compare middle",
      "text": "Use mid to decide which half is impossible."
    },
    {
      "title": "Return boundary",
      "text": "Return the found index or final insertion boundary."
    }
  ],
  "variables": [
    {
      "name": "array, target",
      "purpose": "array: The ordered or unsorted list the algorithm scans, partitions, sorts, or transforms. target: The value or condition each comparison is trying to locate."
    },
    {
      "name": "low, high, mid",
      "purpose": "The shrinking search window and midpoint used to discard impossible positions."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by cppBinarySearch after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Each transition either advances one position or moves a boundary inward. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Sorted input",
      "title": "Read the ordered search space",
      "note": "The code starts from a range where binary decisions are valid.",
      "activeLine": 5,
      "codeInsight": "Defines cppBinarySearch and names the input values, target; edits to those inputs change the visual state and output."
    },
    {
      "label": "low / high",
      "title": "Open the candidate window",
      "note": "low and high mark every position that may still answer.",
      "activeLine": 6,
      "codeInsight": "Initializes low as mutable state; later branches update it as the search window or traversal changes."
    },
    {
      "label": "mid check",
      "title": "Compare the midpoint",
      "note": "The midpoint decides which half is removed.",
      "activeLine": 10,
      "codeInsight": "Checks values[mid] === target; only the branch that preserves C++ binary_search()'s invariant is allowed to change state."
    },
    {
      "label": "Return",
      "title": "Emit index or boundary",
      "note": "The loop ends with a match or the collapsed boundary.",
      "activeLine": 14,
      "codeInsight": "Returns false, the boolean result reached by the highlighted checks."
    }
  ],
  "complexity": {
    "time": "O(log n) on sorted or searchable ranges.",
    "space": "O(1) auxiliary space."
  },
  "quiz": {
    "question": "Which state choice keeps C++ binary_search() correct?",
    "options": [
      {
        "key": "A",
        "text": "Track search window and update it only through C++ binary_search()'s transition.",
        "correct": true
      },
      {
        "key": "B",
        "text": "Reuse a different algorithm's state names even when the transition is different.",
        "correct": false
      },
      {
        "key": "C",
        "text": "Return before checking the algorithm-specific stop condition.",
        "correct": false
      }
    ],
    "correctText": "Correct. C++ binary_search() stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. C++ binary_search() needs its own input, state, answer, and condition rather than another algorithm's page structure."
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
  }
};
