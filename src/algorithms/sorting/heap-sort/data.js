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
  "meaning": "Heap Sort is taught here with its own input shape, state, transition, code trace, and stop condition.",
  "problem": "Sort an array by building a max heap and repeatedly extracting the maximum value.",
  "concept": "Heap Sort first makes the array obey the max-heap property, then swaps the root into the final suffix and heapifies the reduced heap.",
  "logicSummary": "Build a max heap, swap root with the end of the heap, shrink heap size, and sift down the new root.",
  "transitionSummary": "Each extraction places one maximum into the sorted suffix and restores heap order in the remaining prefix.",
  "codeInsight": "heapify works only inside the current heap size; the sorted suffix is excluded from future heap repairs.",
  "realLifeExample": "Use heap sort when in-place O(n log n) sorting is needed without quick sort's worst-case risk.",
  "whenToUse": "Use Heap Sort when predictable time and O(1) auxiliary space matter more than stability.",
  "memoryTrick": "Max at root, swap to end, repair the heap.",
  "visualizerCaption": "Heap Sort is shown with the actual sorted/unsorted state that its code maintains.",
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
    "question": "Which state keeps Heap Sort correct?",
    "options": [
      {
        "key": "A",
        "text": "Track the algorithm's own sorted region, partition, bucket, count, heap, or digit state.",
        "correct": true
      },
      {
        "key": "B",
        "text": "Use one generic sorted-array story for every sorting algorithm.",
        "correct": false
      },
      {
        "key": "C",
        "text": "Move values without preserving the algorithm's stated invariant.",
        "correct": false
      }
    ],
    "correctText": "Correct. Heap Sort works because that state and transition match the algorithm.",
    "incorrectText": "Not quite. Heap Sort needs its own state and stop condition instead of borrowed page logic."
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
  }
};
