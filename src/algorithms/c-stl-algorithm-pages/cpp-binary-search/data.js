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
      "activeLine": 1,
      "codeInsight": "The code starts from a range where binary decisions are valid."
    },
    {
      "label": "low / high",
      "title": "Open the candidate window",
      "note": "low and high mark every position that may still answer.",
      "activeLine": 3,
      "codeInsight": "low and high mark every position that may still answer."
    },
    {
      "label": "mid check",
      "title": "Compare the midpoint",
      "note": "The midpoint decides which half is removed.",
      "activeLine": 5,
      "codeInsight": "The midpoint decides which half is removed."
    },
    {
      "label": "Return",
      "title": "Emit index or boundary",
      "note": "The loop ends with a match or the collapsed boundary.",
      "activeLine": 9,
      "codeInsight": "The loop ends with a match or the collapsed boundary."
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
  ]
};
