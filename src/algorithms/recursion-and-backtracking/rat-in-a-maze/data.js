// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "rat-in-a-maze",
  "title": "Rat in a Maze",
  "category": "Recursion and Backtracking",
  "route": "/algorithms/backtracking/rat-in-a-maze",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "grid-path",
  "icon": "school",
  "codePath": "./src/algorithms/recursion-and-backtracking/rat-in-a-maze/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Rat in a Maze is a Recursion and Backtracking technique focused on solutions.",
  "problem": "Rat in a Maze explores a decision tree by choosing, recursing, and undoing the choice before trying the next option.",
  "concept": "Grid algorithms are useful when positions, neighbors, boundaries, or cell states define the problem. Use this when the answer depends on moving through rows, columns, or regions.",
  "logicSummary": "Read dimensions, choose the active cell or boundary, update neighbors or accumulated state, and return the grid result.",
  "transitionSummary": "Each step moves to a valid cell, changes a boundary, or updates a matrix state.",
  "codeInsight": "The backtrack step is what keeps the state correct: every push must have a matching pop.",
  "realLifeExample": "Rat in a Maze appears when the input is choices and the required result is solutions.",
  "whenToUse": "Use Rat in a Maze when a problem matches the Recursion and Backtracking pattern and the expected state changes match a grid path dry run.",
  "memoryTrick": "Rat in a Maze: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Rat in a Maze is shown as row/column state changes. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Read grid",
      "text": "Identify dimensions and valid cells."
    },
    {
      "title": "Choose position",
      "text": "Select the current row/column or boundary."
    },
    {
      "title": "Update neighbors",
      "text": "Move, fill, rotate, or accumulate according to the rule."
    },
    {
      "title": "Return grid result",
      "text": "Return count, transformed grid, or lookup answer."
    }
  ],
  "variables": [
    {
      "name": "choices",
      "purpose": "The candidate values that drive the heap, recursion, subset, or frequency process."
    },
    {
      "name": "path and recursion frame",
      "purpose": "The partial choice path plus the current recursive frame before backtracking restores it. This page visualizes it as grid path."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by ratInAMaze after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "The transition is choose -> explore -> unchoose, which keeps sibling branches isolated. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Grid",
      "title": "Read rows and columns",
      "note": "The code starts from the matrix shape.",
      "activeLine": 1,
      "codeInsight": "The code starts from the matrix shape."
    },
    {
      "label": "Position",
      "title": "Choose active cell",
      "note": "The current row/column controls the next update.",
      "activeLine": 3,
      "codeInsight": "The current row/column controls the next update."
    },
    {
      "label": "Move/update",
      "title": "Apply neighbor or boundary rule",
      "note": "The transition changes reachable cells, boundaries, or accumulated values.",
      "activeLine": 6,
      "codeInsight": "The transition changes reachable cells, boundaries, or accumulated values."
    },
    {
      "label": "Result",
      "title": "Return grid output",
      "note": "The final matrix, count, or query answer is returned.",
      "activeLine": 9,
      "codeInsight": "The final matrix, count, or query answer is returned."
    }
  ],
  "complexity": {
    "time": "O(n) for the educational reference implementation.",
    "space": "O(n) for tracked state when needed."
  },
  "quiz": {
    "question": "Which state choice keeps Rat in a Maze correct?",
    "options": [
      {
        "key": "A",
        "text": "Track path and update it only through Rat in a Maze's transition.",
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
    "correctText": "Correct. Rat in a Maze stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Rat in a Maze needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "recursion-and-backtracking",
  "algorithmSlug": "rat-in-a-maze",
  "runnerInput": [
    [
      [
        1,
        0,
        0
      ],
      [
        1,
        1,
        0
      ],
      [
        0,
        1,
        1
      ]
    ]
  ],
  "animation": {
    "type": "matrix-flow",
    "title": "Rat in a Maze matrix state",
    "ruleLabel": "Grid rule",
    "rule": "Each step moves to a valid cell, changes a boundary, or updates a matrix state.",
    "matrix": [
      [
        1,
        0,
        0
      ],
      [
        1,
        1,
        0
      ],
      [
        0,
        1,
        1
      ]
    ],
    "steps": [
      {
        "phase": "Grid",
        "title": "Read rows and columns",
        "note": "The code starts from the matrix shape.",
        "ruleLabel": "Rat in a Maze invariant",
        "rule": "The code starts from the matrix shape.",
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
        "phase": "Position",
        "title": "Choose active cell",
        "note": "The current row/column controls the next update.",
        "ruleLabel": "Rat in a Maze invariant",
        "rule": "The current row/column controls the next update.",
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
        "phase": "Move/update",
        "title": "Apply neighbor or boundary rule",
        "note": "The transition changes reachable cells, boundaries, or accumulated values.",
        "ruleLabel": "Rat in a Maze invariant",
        "rule": "The transition changes reachable cells, boundaries, or accumulated values.",
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
        "phase": "Result",
        "title": "Return grid output",
        "note": "The final matrix, count, or query answer is returned.",
        "ruleLabel": "Rat in a Maze invariant",
        "rule": "The final matrix, count, or query answer is returned.",
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
  }
};
