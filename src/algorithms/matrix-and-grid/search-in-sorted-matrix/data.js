// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "search-in-sorted-matrix",
  "title": "Search in Sorted Matrix",
  "category": "Matrix and Grid",
  "route": "/algorithms/matrix/search-in-sorted-matrix",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "matrix-staircase",
  "icon": "grid_on",
  "codePath": "./src/algorithms/matrix-and-grid/search-in-sorted-matrix/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "In a matrix with sorted rows and columns, compare from a corner to eliminate a row or column at each step.",
  "problem": "In a matrix with sorted rows and columns, compare from a corner to eliminate a row or column at each step.",
  "concept": "In a matrix with sorted rows and columns, compare from a corner to eliminate a row or column at each step.",
  "logicSummary": "In a matrix with sorted rows and columns, compare from a corner to eliminate a row or column at each step.",
  "transitionSummary": "From the top-right cell, a value larger than the target means move left; a smaller value means move down. This relies on both rows and columns being sorted.",
  "codeInsight": "In a matrix with sorted rows and columns, compare from a corner to eliminate a row or column at each step.",
  "realLifeExample": "From the top-right cell, a value larger than the target means move left; a smaller value means move down. This relies on both rows and columns being sorted.",
  "whenToUse": "In a matrix with sorted rows and columns, compare from a corner to eliminate a row or column at each step.",
  "memoryTrick": "In a matrix with sorted rows and columns, compare from a corner to eliminate a row or column at each step.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "In a matrix with sorted rows and columns, compare from a corner to eliminate a row or column at each step."
    },
    {
      "title": "Work through a small case",
      "text": "From the top-right cell, a value larger than the target means move left; a smaller value means move down. This relies on both rows and columns being sorted."
    },
    {
      "title": "Check the boundary cases",
      "text": "Check row and column bounds separately. State whether diagonal neighbors are allowed."
    }
  ],
  "variables": [
    {
      "name": "matrix",
      "purpose": "The input grid, addressed by row and column."
    },
    {
      "name": "target",
      "purpose": "The value or total the operation is trying to locate or reach."
    },
    {
      "name": "row",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
    },
    {
      "name": "col",
      "purpose": "Remembers how many items are present; this supports bounds, size reporting, or the stopping rule."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "In a matrix with sorted rows and columns, compare from a corner to eliminate a row or column at each step.",
      "activeLine": 5,
      "codeInsight": "In a matrix with sorted rows and columns, compare from a corner to eliminate a row or column at each step."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "From the top-right cell, a value larger than the target means move left; a smaller value means move down. This relies on both rows and columns being sorted.",
      "activeLine": 6,
      "codeInsight": "In a matrix with sorted rows and columns, compare from a corner to eliminate a row or column at each step."
    }
  ],
  "complexity": {
    "time": "O(R + C) for a corner walk with both rows and columns sorted.",
    "space": "O(1) auxiliary state."
  },
  "quiz": {
    "question": "Which explanation best describes Search in Sorted Matrix?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "In a matrix with sorted rows and columns, compare from a corner to eliminate a row or column at each step.",
        "correct": true
      },
      {
        "key": "C",
        "text": "All grid problems allow diagonal movement without checking bounds.",
        "correct": false
      }
    ],
    "correctText": "Correct. In a matrix with sorted rows and columns, compare from a corner to eliminate a row or column at each step.",
    "incorrectText": "Try again. In a matrix with sorted rows and columns, compare from a corner to eliminate a row or column at each step. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "matrix-and-grid",
  "algorithmSlug": "search-in-sorted-matrix",
  "runnerInput": [
    [
      [
        1,
        3,
        5
      ],
      [
        7,
        9,
        11
      ]
    ],
    9
  ],
  "animation": {
    "type": "matrix-flow",
    "title": "Search in Sorted Matrix matrix state",
    "ruleLabel": "Grid rule",
    "rule": "Each step compares or moves values so the unsorted region gets smaller.",
    "matrix": [
      [
        1,
        3,
        5
      ],
      [
        7,
        9,
        11
      ]
    ],
    "steps": [
      {
        "phase": "Input array",
        "title": "Copy values",
        "note": "The code starts with the values to reorder.",
        "ruleLabel": "Search in Sorted Matrix invariant",
        "rule": "Defines searchInSortedMatrix and names the input matrix, target; edits to those inputs change the visual state and output.",
        "activeCells": [
          [
            0,
            0
          ]
        ],
        "visitedCells": [
          [
            0,
            0
          ]
        ]
      },
      {
        "phase": "Invariant",
        "title": "Track ordered work",
        "note": "The algorithm marks what part is already safe.",
        "ruleLabel": "Search in Sorted Matrix invariant",
        "rule": "Defines searchInSortedMatrix and names the input matrix, target; edits to those inputs change the visual state and output.",
        "activeCells": [
          [
            0,
            1
          ]
        ],
        "visitedCells": [
          [
            0,
            0
          ],
          [
            0,
            1
          ]
        ]
      },
      {
        "phase": "Move",
        "title": "Apply ordering step",
        "note": "The current operation reduces disorder.",
        "ruleLabel": "Search in Sorted Matrix invariant",
        "rule": "Checks !matrix.length || !matrix[0].length; only the branch that preserves Search in Sorted Matrix's invariant is allowed to change state.",
        "activeCells": [
          [
            0,
            2
          ]
        ],
        "visitedCells": [
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ]
        ]
      },
      {
        "phase": "Sorted output",
        "title": "Return final order",
        "note": "The result is returned when no unsorted work remains.",
        "ruleLabel": "Search in Sorted Matrix invariant",
        "rule": "Returns the final array-style answer [-1, -1], so the last frame should show the chosen positions or sequence.",
        "activeCells": [
          [
            1,
            0
          ]
        ],
        "visitedCells": [
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            0,
            2
          ],
          [
            1,
            0
          ]
        ]
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "A matrix is a grid. Identify a cell by its row first, then its column.",
    "family": "Rows and columns",
    "example": "From the top-right cell, a value larger than the target means move left; a smaller value means move down. This relies on both rows and columns being sorted.",
    "sampleInput": [
      [
        [
          1,
          3,
          5
        ],
        [
          7,
          9,
          11
        ]
      ],
      9
    ],
    "sampleResult": [
      1,
      1
    ],
    "sampleScope": "This is the result of the unedited JavaScript function with the sample arguments. Changing the input or code can change the result.",
    "terms": [
      [
        "Row",
        "A horizontal sequence of cells."
      ],
      [
        "Column",
        "A vertical sequence of cells."
      ],
      [
        "Neighbor",
        "A cell reachable under the chosen adjacency rule."
      ]
    ],
    "pitfall": "Check row and column bounds separately. State whether diagonal neighbors are allowed.",
    "checkpoint": "Explain this in your own words: In a matrix with sorted rows and columns, compare from a corner to eliminate a row or column at each step."
  },
  "relatedLinks": []
};
