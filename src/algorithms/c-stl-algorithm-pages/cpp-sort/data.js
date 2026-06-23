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
  "meaning": "C++ sort() is a C++ STL Algorithm Pages technique focused on sorted array.",
  "problem": "C++ sort() is a sorting strategy that repeatedly narrows unsorted work until every value is in order.",
  "concept": "C++ sort() is useful when values must be placed into a reliable order before later work can be simple. Use this when the algorithm's ordering invariant and cost fit the input size and stability needs.",
  "logicSummary": "Protect the algorithm's ordering invariant until every value reaches final order.",
  "transitionSummary": "Each step compares or moves values so the unsorted region gets smaller.",
  "codeInsight": "The implementation copies the input first, then mutates only that working array so the original caller data is not changed.",
  "realLifeExample": "C++ sort() appears when the input is array and the required result is sorted array.",
  "whenToUse": "Use C++ sort() when a problem matches the C++ STL Algorithm Pages pattern and the expected state changes match a comparator sort dry run.",
  "memoryTrick": "C++ sort(): name the invariant, then trace the exact state change.",
  "visualizerCaption": "C++ sort() is shown as values moving toward sorted order. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Copy values",
      "text": "Work on a mutable array without changing the original input."
    },
    {
      "title": "Choose invariant",
      "text": "Track the sorted or partitioned region."
    },
    {
      "title": "Move values",
      "text": "Perform the comparison, swap, merge, or placement."
    },
    {
      "title": "Return order",
      "text": "Return the fully sorted array."
    }
  ],
  "variables": [
    {
      "name": "array",
      "purpose": "The ordered or unsorted list the algorithm scans, partitions, sorts, or transforms."
    },
    {
      "name": "working state",
      "purpose": "The local state updated by the algorithm transition. This page visualizes it as comparator sort."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by cppSort after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Compare, move, swap, merge, or bucket values according to this sorter until no unsorted work remains. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Input array",
      "title": "Copy values",
      "note": "The code starts with the values to reorder.",
      "activeLine": 5,
      "codeInsight": "Defines cppSort and names the input values; edits to those inputs change the visual state and output."
    },
    {
      "label": "Invariant",
      "title": "Track ordered work",
      "note": "The algorithm marks what part is already safe.",
      "activeLine": 5,
      "codeInsight": "Defines cppSort and names the input values; edits to those inputs change the visual state and output."
    },
    {
      "label": "Move",
      "title": "Apply ordering step",
      "note": "The current operation reduces disorder.",
      "activeLine": 6,
      "codeInsight": "Returns the final array-style answer [...values].sort((a, b) => a - b), so the last frame should show the chosen positions or sequence."
    },
    {
      "label": "Sorted output",
      "title": "Return final order",
      "note": "The result is returned when no unsorted work remains.",
      "activeLine": 6,
      "codeInsight": "Returns the final array-style answer [...values].sort((a, b) => a - b), so the last frame should show the chosen positions or sequence."
    }
  ],
  "complexity": {
    "time": "O(n) for the educational reference implementation.",
    "space": "O(n) for tracked state when needed."
  },
  "quiz": {
    "question": "Which state choice keeps C++ sort() correct?",
    "options": [
      {
        "key": "A",
        "text": "Track indices and working array and update it only through C++ sort()'s transition.",
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
    "correctText": "Correct. C++ sort() stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. C++ sort() needs its own input, state, answer, and condition rather than another algorithm's page structure."
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
  }
};
