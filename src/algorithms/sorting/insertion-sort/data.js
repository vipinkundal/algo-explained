// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "insertion-sort",
  "title": "Insertion Sort",
  "category": "Sorting",
  "route": "/algorithms/sorting/insertion-sort",
  "phase": 1,
  "priority": "high",
  "visualizerType": "card-insertion",
  "icon": "sort",
  "codePath": "./src/algorithms/sorting/insertion-sort/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Insertion Sort is taught here with its own input shape, state, transition, code trace, and stop condition.",
  "problem": "Sort an array by inserting each new value into an already sorted prefix.",
  "concept": "Insertion Sort keeps everything left of the current index sorted, shifts larger values right, and inserts the current value into the gap.",
  "logicSummary": "Take the current value, scan left through the sorted prefix, shift larger values right, and place current after the last smaller value.",
  "transitionSummary": "Each shift opens one slot to the left until the correct insertion position is found.",
  "codeInsight": "The current value is stored before shifting so it is not overwritten while values move right.",
  "realLifeExample": "Use it for nearly sorted data, tiny arrays, and the base case inside hybrid sorting algorithms.",
  "whenToUse": "Use Insertion Sort when data is small or almost sorted.",
  "memoryTrick": "Insert the next card into the sorted hand.",
  "visualizerCaption": "Insertion Sort is shown with the actual sorted/unsorted state that its code maintains.",
  "logicSteps": [
    {
      "title": "Pick current value",
      "text": "1 must be inserted into prefix [5]."
    },
    {
      "title": "Move 5 right",
      "text": "5 is larger than 1, so shift it one slot right."
    },
    {
      "title": "Place 1",
      "text": "The gap after scan receives current."
    },
    {
      "title": "Repeat for next index",
      "text": "The sorted prefix grows one value at a time."
    }
  ],
  "variables": [
    {
      "name": "index",
      "purpose": "First item outside the sorted prefix."
    },
    {
      "name": "current",
      "purpose": "Value being inserted."
    },
    {
      "name": "scan",
      "purpose": "Pointer moving left through larger prefix values."
    },
    {
      "name": "values",
      "purpose": "Working array."
    }
  ],
  "dryRun": [
    {
      "label": "index = 1",
      "title": "Pick current value",
      "note": "1 must be inserted into prefix [5].",
      "activeLine": 4,
      "codeInsight": "current protects the value while the prefix shifts."
    },
    {
      "label": "shift",
      "title": "Move 5 right",
      "note": "5 is larger than 1, so shift it one slot right.",
      "activeLine": 7,
      "codeInsight": "The while condition controls all prefix shifts."
    },
    {
      "label": "insert",
      "title": "Place 1",
      "note": "The gap after scan receives current.",
      "activeLine": 10,
      "codeInsight": "scan + 1 is the insertion point."
    },
    {
      "label": "grow prefix",
      "title": "Repeat for next index",
      "note": "The sorted prefix grows one value at a time.",
      "activeLine": 3,
      "codeInsight": "The outer loop advances the prefix boundary."
    }
  ],
  "complexity": {
    "time": "O(n^2) worst case, O(n) when nearly sorted.",
    "space": "O(1)."
  },
  "quiz": {
    "question": "Which state keeps Insertion Sort correct?",
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
    "correctText": "Correct. Insertion Sort works because that state and transition match the algorithm.",
    "incorrectText": "Not quite. Insertion Sort needs its own state and stop condition instead of borrowed page logic."
  },
  "categorySlug": "sorting",
  "algorithmSlug": "insertion-sort",
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
    "title": "Insertion Sort trace",
    "ruleLabel": "Sorting invariant",
    "rule": "Each shift opens one slot to the left until the correct insertion position is found.",
    "values": [
      5,
      1,
      4,
      2,
      8
    ],
    "steps": [
      {
        "phase": "current = 1",
        "title": "Pick insertion value",
        "note": "Insert 1 into [5].",
        "ruleLabel": "Sorting invariant",
        "rule": "Each shift opens one slot to the left until the correct insertion position is found.",
        "activeIndices": [
          1
        ],
        "sortedIndices": [
          0
        ],
        "mutedIndices": [],
        "window": [
          0,
          1
        ],
        "primaryLabel": "current = 1",
        "secondaryLabel": "Each shift opens one slot to the left until the correct insertion position is found."
      },
      {
        "phase": "shift 5",
        "title": "Open a gap",
        "note": "5 moves right.",
        "ruleLabel": "Sorting invariant",
        "rule": "Each shift opens one slot to the left until the correct insertion position is found.",
        "activeIndices": [
          0,
          1
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          1
        ],
        "primaryLabel": "shift 5",
        "secondaryLabel": "Each shift opens one slot to the left until the correct insertion position is found."
      },
      {
        "phase": "place 1",
        "title": "Prefix sorted",
        "note": "[1, 5] is sorted.",
        "ruleLabel": "Sorting invariant",
        "rule": "Each shift opens one slot to the left until the correct insertion position is found.",
        "activeIndices": [
          0
        ],
        "sortedIndices": [
          0,
          1
        ],
        "mutedIndices": [],
        "window": [
          0,
          1
        ],
        "primaryLabel": "place 1",
        "secondaryLabel": "Each shift opens one slot to the left until the correct insertion position is found."
      },
      {
        "phase": "finish",
        "title": "All insertions complete",
        "note": "Every item has entered the prefix.",
        "ruleLabel": "Sorting invariant",
        "rule": "Each shift opens one slot to the left until the correct insertion position is found.",
        "activeIndices": [
          4
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
        "primaryLabel": "finish",
        "secondaryLabel": "Each shift opens one slot to the left until the correct insertion position is found."
      }
    ]
  }
};
