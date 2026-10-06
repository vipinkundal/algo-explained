// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "heap-sort",
  "title": "Heap Sort",
  "category": "Sorting",
  "route": "/algorithms/sorting/heap-sort",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "heap-tree",
  "icon": "sort",
  "codePath": "./src/algorithms/sorting/heap-sort/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Sort an array by building a max heap and repeatedly extracting the maximum value.",
  "problem": "Sort an array by building a max heap and repeatedly extracting the maximum value.",
  "concept": "Heap Sort first makes the array obey the max-heap property, then swaps the root into the final suffix and heapifies the reduced heap.",
  "logicSummary": "Build a max heap, swap root with the end of the heap, shrink heap size, and sift down the new root.",
  "transitionSummary": "Each extraction places one maximum into the sorted suffix and restores heap order in the remaining prefix.",
  "codeInsight": "heapify works only inside the current heap size; the sorted suffix is excluded from future heap repairs.",
  "realLifeExample": "Use heap sort when in-place O(n log n) sorting is needed without quick sort's worst-case risk.",
  "whenToUse": "Use Heap Sort when predictable time and O(1) auxiliary space matter more than stability.",
  "memoryTrick": "Max at root, swap to end, repair the heap.",
  "visualizerCaption": "Explore Heap Sort through a sample teaching model, then compare it with the runnable result.",
  "logicSteps": [
    {
      "title": "Heapify internal nodes",
      "text": "Bottom-up heapify creates a max heap."
    },
    {
      "title": "Swap root with end",
      "text": "The maximum moves into its final sorted slot."
    },
    {
      "title": "Exclude sorted suffix",
      "text": "The heap size decreases before the next heapify."
    },
    {
      "title": "Sift root down",
      "text": "The remaining prefix becomes a valid max heap again."
    }
  ],
  "variables": [
    {
      "name": "values",
      "purpose": "Array holding both heap prefix and sorted suffix."
    },
    {
      "name": "size",
      "purpose": "Number of active heap values."
    },
    {
      "name": "root",
      "purpose": "Node being sifted down."
    },
    {
      "name": "largest",
      "purpose": "Largest among root and children."
    }
  ],
  "dryRun": [
    {
      "label": "Build heap",
      "title": "Heapify internal nodes",
      "note": "Bottom-up heapify creates a max heap.",
      "activeLine": 3,
      "codeInsight": "The first loop starts at the last parent node."
    },
    {
      "label": "Extract max",
      "title": "Swap root with end",
      "note": "The maximum moves into its final sorted slot.",
      "activeLine": 5,
      "codeInsight": "Root is always the largest active heap value."
    },
    {
      "label": "Shrink heap",
      "title": "Exclude sorted suffix",
      "note": "The heap size decreases before the next heapify.",
      "activeLine": 6,
      "codeInsight": "heapify receives end as its active size."
    },
    {
      "label": "Repair",
      "title": "Sift root down",
      "note": "The remaining prefix becomes a valid max heap again.",
      "activeLine": 17,
      "codeInsight": "Recursive heapify follows the swapped child."
    }
  ],
  "complexity": {
    "time": "O(n log n).",
    "space": "O(1) auxiliary space."
  },
  "quiz": {
    "question": "Which explanation best describes Heap Sort?",
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
        "text": "Sort an array by building a max heap and repeatedly extracting the maximum value.",
        "correct": true
      }
    ],
    "correctText": "Correct. Sort an array by building a max heap and repeatedly extracting the maximum value.",
    "incorrectText": "Try again. Sort an array by building a max heap and repeatedly extracting the maximum value. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "sorting",
  "algorithmSlug": "heap-sort",
  "runnerInput": [
    [
      5,
      1,
      4,
      2,
      8
    ]
  ],
  "animation": {
    "type": "array-flow",
    "static": true,
    "title": "Heap Sort trace",
    "ruleLabel": "Sorting invariant",
    "rule": "Each extraction places one maximum into the sorted suffix and restores heap order in the remaining prefix.",
    "values": [
      5,
      1,
      4,
      2,
      8
    ],
    "steps": [
      {
        "phase": "heapify",
        "title": "Build max heap",
        "note": "8 rises to the root.",
        "ruleLabel": "Sorting invariant",
        "rule": "Each extraction places one maximum into the sorted suffix and restores heap order in the remaining prefix.",
        "activeIndices": [
          0,
          4
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          4
        ],
        "primaryLabel": "heapify",
        "secondaryLabel": "Each extraction places one maximum into the sorted suffix and restores heap order in the remaining prefix."
      },
      {
        "phase": "extract",
        "title": "Move max to end",
        "note": "Swap root with last heap item.",
        "ruleLabel": "Sorting invariant",
        "rule": "Each extraction places one maximum into the sorted suffix and restores heap order in the remaining prefix.",
        "activeIndices": [
          0,
          4
        ],
        "sortedIndices": [
          4
        ],
        "mutedIndices": [],
        "window": [
          0,
          3
        ],
        "primaryLabel": "extract",
        "secondaryLabel": "Each extraction places one maximum into the sorted suffix and restores heap order in the remaining prefix."
      },
      {
        "phase": "sift",
        "title": "Repair heap prefix",
        "note": "The new root moves down as needed.",
        "ruleLabel": "Sorting invariant",
        "rule": "Each extraction places one maximum into the sorted suffix and restores heap order in the remaining prefix.",
        "activeIndices": [
          0,
          2
        ],
        "sortedIndices": [
          4
        ],
        "mutedIndices": [],
        "window": [
          0,
          3
        ],
        "primaryLabel": "sift",
        "secondaryLabel": "Each extraction places one maximum into the sorted suffix and restores heap order in the remaining prefix."
      },
      {
        "phase": "sorted",
        "title": "Repeat until heap empty",
        "note": "The sorted suffix grows from right to left.",
        "ruleLabel": "Sorting invariant",
        "rule": "Each extraction places one maximum into the sorted suffix and restores heap order in the remaining prefix.",
        "activeIndices": [
          0
        ],
        "sortedIndices": [
          0,
          1,
          2,
          3,
          4
        ],
        "mutedIndices": [],
        "window": [
          0,
          4
        ],
        "primaryLabel": "sorted",
        "secondaryLabel": "Each extraction places one maximum into the sorted suffix and restores heap order in the remaining prefix."
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "An array is a row of numbered slots. An index tells you where a value is; it is not the value itself.",
    "family": "Arrays and indexes",
    "example": "Heapify internal nodes: Bottom-up heapify creates a max heap. Swap root with end: The maximum moves into its final sorted slot. Exclude sorted suffix: The heap size decreases before the next heapify. Sift root down: The remaining prefix becomes a valid max heap again.",
    "sampleInput": [
      [
        5,
        1,
        4,
        2,
        8
      ]
    ],
    "sampleResult": [
      1,
      2,
      4,
      5,
      8
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
    "checkpoint": "Explain this in your own words: Sort an array by building a max heap and repeatedly extracting the maximum value."
  },
  "relatedLinks": []
};
