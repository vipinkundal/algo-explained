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
  "meaning": "Heap Sort is taught here with its own state, transition, code trace, and stopping rule.",
  "problem": "Build a max heap and repeatedly move the maximum value to the end.",
  "concept": "Heap Sort is useful when a heap can repeatedly expose the next largest or smallest value. Use this when in-place n log n sorting with heap structure is the right tradeoff.",
  "logicSummary": "Build a heap, swap the root into its final position, shrink the heap, and restore heap order.",
  "transitionSummary": "Each extraction fixes one output position and heapifies the remaining prefix.",
  "codeInsight": "The implementation copies the input array, then mutates only the working copy so callers keep their original data.",
  "realLifeExample": "Heap Sort appears when values must be ordered and the chosen invariant matches the input size or stability needs.",
  "whenToUse": "Use Heap Sort when its ordering invariant and complexity tradeoff match the dataset.",
  "memoryTrick": "Heap Sort: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Heap Sort is shown as values moving toward sorted order. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Build heap",
      "text": "Arrange values into parent-child priority order."
    },
    {
      "title": "Swap root",
      "text": "Move the top priority value to the end."
    },
    {
      "title": "Shrink heap",
      "text": "Exclude the fixed value."
    },
    {
      "title": "Heapify",
      "text": "Restore the root rule for the remaining values."
    }
  ],
  "variables": [
    {
      "name": "array",
      "purpose": "The values to sort."
    },
    {
      "name": "working array",
      "purpose": "A copy that is rearranged during sorting."
    },
    {
      "name": "sorted array",
      "purpose": "The final ordered result."
    },
    {
      "name": "unsorted work remains",
      "purpose": "Continue until every value is in final order."
    }
  ],
  "dryRun": [
    {
      "label": "Heap",
      "title": "Build priority tree",
      "note": "The array is interpreted as a heap.",
      "activeLine": 6,
      "codeInsight": "Copies the input into values, so the animation can show mutations without pretending the caller's original array changes."
    },
    {
      "label": "Root",
      "title": "Move root to output",
      "note": "The max or min root becomes fixed.",
      "activeLine": 12,
      "codeInsight": "Returns values, the final value maintained by Heap Sort's code path."
    },
    {
      "label": "Size",
      "title": "Shrink active heap",
      "note": "Fixed values are no longer heapified.",
      "activeLine": 6,
      "codeInsight": "Copies the input into values, so the animation can show mutations without pretending the caller's original array changes."
    },
    {
      "label": "Restore",
      "title": "Heapify remaining range",
      "note": "The parent-child invariant is repaired.",
      "activeLine": 9,
      "codeInsight": "Swaps values[0], values[end] with values[end], values[0], so the animation should move those highlighted positions together."
    }
  ],
  "complexity": {
    "time": "O(n log n).",
    "space": "O(1) auxiliary space."
  },
  "quiz": {
    "question": "Which state choice keeps Heap Sort correct?",
    "options": [
      {
        "key": "A",
        "text": "Track indices and working array and update it only through Heap Sort's transition.",
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
    "correctText": "Correct. Heap Sort stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Heap Sort needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "sorting",
  "algorithmSlug": "heap-sort",
  "runnerInput": [
    [
      4,
      1,
      3,
      2
    ]
  ],
  "animation": {
    "type": "tree-operation",
    "title": "Heap Sort tree state",
    "nodes": [
      {
        "id": "8",
        "label": "8",
        "x": 340,
        "y": 58
      },
      {
        "id": "4",
        "label": "4",
        "x": 190,
        "y": 150
      },
      {
        "id": "12",
        "label": "12",
        "x": 490,
        "y": 150
      },
      {
        "id": "2",
        "label": "2",
        "x": 110,
        "y": 255
      },
      {
        "id": "6",
        "label": "6",
        "x": 270,
        "y": 255
      },
      {
        "id": "10",
        "label": "10",
        "x": 420,
        "y": 255
      },
      {
        "id": "14",
        "label": "14",
        "x": 570,
        "y": 255
      }
    ],
    "edges": [
      {
        "from": "8",
        "to": "4"
      },
      {
        "from": "8",
        "to": "12"
      },
      {
        "from": "4",
        "to": "2"
      },
      {
        "from": "4",
        "to": "6"
      },
      {
        "from": "12",
        "to": "10"
      },
      {
        "from": "12",
        "to": "14"
      }
    ],
    "steps": [
      {
        "phase": "Heap",
        "title": "Build priority tree",
        "note": "The array is interpreted as a heap.",
        "ruleLabel": "Heap Sort invariant",
        "rule": "Copies the input into values, so the animation can show mutations without pretending the caller's original array changes.",
        "activeNode": "8",
        "targetNode": "4",
        "replacementNode": "",
        "mutedNodes": [
          "6",
          "10",
          "14"
        ]
      },
      {
        "phase": "Root",
        "title": "Move root to output",
        "note": "The max or min root becomes fixed.",
        "ruleLabel": "Heap Sort invariant",
        "rule": "Returns values, the final value maintained by Heap Sort's code path.",
        "activeNode": "4",
        "targetNode": "12",
        "replacementNode": "",
        "mutedNodes": [
          "6",
          "10",
          "14"
        ]
      },
      {
        "phase": "Size",
        "title": "Shrink active heap",
        "note": "Fixed values are no longer heapified.",
        "ruleLabel": "Heap Sort invariant",
        "rule": "Copies the input into values, so the animation can show mutations without pretending the caller's original array changes.",
        "activeNode": "12",
        "targetNode": "2",
        "replacementNode": "2",
        "mutedNodes": []
      },
      {
        "phase": "Restore",
        "title": "Heapify remaining range",
        "note": "The parent-child invariant is repaired.",
        "ruleLabel": "Heap Sort invariant",
        "rule": "Swaps values[0], values[end] with values[end], values[0], so the animation should move those highlighted positions together.",
        "activeNode": "2",
        "targetNode": "6",
        "replacementNode": "6",
        "mutedNodes": []
      }
    ]
  }
};
