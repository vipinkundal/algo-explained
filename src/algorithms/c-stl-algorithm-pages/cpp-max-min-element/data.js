// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "cpp-max-min-element",
  "title": "C++ max_element() / min_element()",
  "category": "C++ STL Algorithm Pages",
  "route": "/algorithms/cpp-stl/max-min-element",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "array-scan",
  "icon": "school",
  "codePath": "./src/algorithms/c-stl-algorithm-pages/cpp-max-min-element/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "std::max_element and std::min_element return iterators to the greatest and smallest elements in a range.",
  "problem": "std::max_element and std::min_element return iterators to the greatest and smallest elements in a range.",
  "concept": "std::max_element and std::min_element return iterators to the greatest and smallest elements in a range.",
  "logicSummary": "std::max_element and std::min_element return iterators to the greatest and smallest elements in a range.",
  "transitionSummary": "In [4, 1, 7], the minimum is at index 1 and maximum at index 2. An empty range returns the end iterator.",
  "codeInsight": "std::max_element and std::min_element return iterators to the greatest and smallest elements in a range.",
  "realLifeExample": "In [4, 1, 7], the minimum is at index 1 and maximum at index 2. An empty range returns the end iterator.",
  "whenToUse": "std::max_element and std::min_element return iterators to the greatest and smallest elements in a range.",
  "memoryTrick": "std::max_element and std::min_element return iterators to the greatest and smallest elements in a range.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "std::max_element and std::min_element return iterators to the greatest and smallest elements in a range."
    },
    {
      "title": "Work through a small case",
      "text": "In [4, 1, 7], the minimum is at index 1 and maximum at index 2. An empty range returns the end iterator."
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
      "name": "minIndex",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
    },
    {
      "name": "maxIndex",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
    },
    {
      "name": "index",
      "purpose": "Remembers how many items are present; this supports bounds, size reporting, or the stopping rule."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "std::max_element and std::min_element return iterators to the greatest and smallest elements in a range.",
      "activeLine": 5,
      "codeInsight": "std::max_element and std::min_element return iterators to the greatest and smallest elements in a range."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "In [4, 1, 7], the minimum is at index 1 and maximum at index 2. An empty range returns the end iterator.",
      "activeLine": 6,
      "codeInsight": "std::max_element and std::min_element return iterators to the greatest and smallest elements in a range."
    }
  ],
  "complexity": {
    "time": "O(n) comparisons to scan the range.",
    "space": "O(1) auxiliary state."
  },
  "quiz": {
    "question": "Which explanation best describes C++ max_element() / min_element()?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "std::max_element and std::min_element return iterators to the greatest and smallest elements in a range.",
        "correct": true
      },
      {
        "key": "C",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      }
    ],
    "correctText": "Correct. std::max_element and std::min_element return iterators to the greatest and smallest elements in a range.",
    "incorrectText": "Try again. std::max_element and std::min_element return iterators to the greatest and smallest elements in a range. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "c-stl-algorithm-pages",
  "algorithmSlug": "cpp-max-min-element",
  "runnerInput": [
    [
      3,
      1,
      4,
      2
    ]
  ],
  "animation": {
    "type": "array-flow",
    "title": "C++ max_element() / min_element() array state",
    "ruleLabel": "Array invariant",
    "rule": "Each loop consumes the current item exactly once and advances the index.",
    "values": [
      3,
      1,
      4,
      2
    ],
    "steps": [
      {
        "phase": "Input array",
        "title": "Read values",
        "note": "The code receives the list and any target condition.",
        "ruleLabel": "C++ max_element() / min_element() invariant",
        "rule": "Defines cppMaxMinElement and names the input values; edits to those inputs change the visual state and output.",
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
        "secondaryLabel": "Each loop consumes the current item exactly once and advances the index."
      },
      {
        "phase": "Index",
        "title": "Select current item",
        "note": "The loop focuses on one position at a time.",
        "ruleLabel": "C++ max_element() / min_element() invariant",
        "rule": "Defines cppMaxMinElement and names the input values; edits to those inputs change the visual state and output.",
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
        "primaryLabel": "Index",
        "secondaryLabel": "Each loop consumes the current item exactly once and advances the index."
      },
      {
        "phase": "Update",
        "title": "Apply comparison or count",
        "note": "The current value changes the running state only if the rule says so.",
        "ruleLabel": "C++ max_element() / min_element() invariant",
        "rule": "Checks !values.length; only the branch that preserves C++ max_element() / min_element()'s invariant is allowed to change state.",
        "activeIndices": [
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          1,
          3
        ],
        "primaryLabel": "Update",
        "secondaryLabel": "Each loop consumes the current item exactly once and advances the index."
      },
      {
        "phase": "Result",
        "title": "Return scan output",
        "note": "When the scan ends, the tracked result is returned.",
        "ruleLabel": "C++ max_element() / min_element() invariant",
        "rule": "Returns the final state object { min: values[minIndex], max: values[maxIndex], minIndex, maxIndex }, exposing the exact fields the visualizer has been tracking.",
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
        "primaryLabel": "Result",
        "secondaryLabel": "Each loop consumes the current item exactly once and advances the index."
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "An array is a row of numbered slots. An index tells you where a value is; it is not the value itself.",
    "family": "Arrays and indexes",
    "example": "In [4, 1, 7], the minimum is at index 1 and maximum at index 2. An empty range returns the end iterator.",
    "sampleInput": [
      [
        3,
        1,
        4,
        2
      ]
    ],
    "sampleResult": {
      "min": 1,
      "max": 4,
      "minIndex": 1,
      "maxIndex": 2
    },
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
    "checkpoint": "Explain this in your own words: std::max_element and std::min_element return iterators to the greatest and smallest elements in a range."
  },
  "relatedLinks": []
};
