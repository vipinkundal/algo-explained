// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "sieve-of-eratosthenes",
  "title": "Sieve of Eratosthenes",
  "category": "Number Theory and Bit Manipulation",
  "route": "/algorithms/number-theory/sieve-of-eratosthenes",
  "phase": 3,
  "priority": "high",
  "visualizerType": "number-grid",
  "icon": "memory",
  "codePath": "./src/algorithms/number-theory-and-bit-manipulation/sieve-of-eratosthenes/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Sieve of Eratosthenes is a Number Theory and Bit Manipulation technique focused on answer.",
  "problem": "Sieve of Eratosthenes solves a Number Theory and Bit Manipulation problem by maintaining only the state needed for its number grid transition.",
  "concept": "Grid algorithms are useful when positions, neighbors, boundaries, or cell states define the problem. Use this when the answer depends on moving through rows, columns, or regions.",
  "logicSummary": "Read dimensions, choose the active cell or boundary, update neighbors or accumulated state, and return the grid result.",
  "transitionSummary": "Each step moves to a valid cell, changes a boundary, or updates a matrix state.",
  "codeInsight": "The implementation keeps Sieve of Eratosthenes' state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "Sieve of Eratosthenes appears when the input is input and the required result is answer.",
  "whenToUse": "Use Sieve of Eratosthenes when a problem matches the Number Theory and Bit Manipulation pattern and the expected state changes match a number grid dry run.",
  "memoryTrick": "Sieve of Eratosthenes: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Sieve of Eratosthenes is shown as row/column state changes. The numbered steps follow the code path used to maintain the main invariant.",
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
      "name": "value, other",
      "purpose": "value: The numeric or collection input used by the bit, math, or foundation routine. other: The numeric or collection input used by the bit, math, or foundation routine."
    },
    {
      "name": "marked numbers",
      "purpose": "Composite markers that remove numbers from the candidate prime set."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by sieveOfEratosthenes after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Repeat the number grid transition until the stop condition for Sieve of Eratosthenes is reached. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Grid",
      "title": "Read rows and columns",
      "note": "The code starts from the matrix shape.",
      "activeLine": 6,
      "codeInsight": "Prepares prime with a default value so unresolved positions already have the correct fallback answer."
    },
    {
      "label": "Position",
      "title": "Choose active cell",
      "note": "The current row/column controls the next update.",
      "activeLine": 3,
      "codeInsight": "Executes this Sieve of Eratosthenes line as part of the highlighted code path, linking the visual step to the implementation."
    },
    {
      "label": "Move/update",
      "title": "Apply neighbor or boundary rule",
      "note": "The transition changes reachable cells, boundaries, or accumulated values.",
      "activeLine": 8,
      "codeInsight": "Scans the input from left to right so each value gets one chance to resolve earlier pending values."
    },
    {
      "label": "Result",
      "title": "Return grid output",
      "note": "The final matrix, count, or query answer is returned.",
      "activeLine": 14,
      "codeInsight": "Returns result, the value produced after Sieve of Eratosthenes's state changes are complete."
    }
  ],
  "complexity": {
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps Sieve of Eratosthenes correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Sieve of Eratosthenes' transition.",
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
    "correctText": "Correct. Sieve of Eratosthenes stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Sieve of Eratosthenes needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "number-theory-and-bit-manipulation",
  "algorithmSlug": "sieve-of-eratosthenes",
  "runnerInput": [
    10
  ],
  "animation": {
    "type": "matrix-flow",
    "title": "Sieve of Eratosthenes matrix state",
    "ruleLabel": "Grid rule",
    "rule": "Each step moves to a valid cell, changes a boundary, or updates a matrix state.",
    "matrix": [
      [
        1,
        0,
        1
      ],
      [
        0,
        1,
        0
      ],
      [
        1,
        1,
        1
      ]
    ],
    "steps": [
      {
        "phase": "Grid",
        "title": "Read rows and columns",
        "note": "The code starts from the matrix shape.",
        "ruleLabel": "Sieve of Eratosthenes invariant",
        "rule": "Prepares prime with a default value so unresolved positions already have the correct fallback answer.",
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
        "ruleLabel": "Sieve of Eratosthenes invariant",
        "rule": "Executes this Sieve of Eratosthenes line as part of the highlighted code path, linking the visual step to the implementation.",
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
        "ruleLabel": "Sieve of Eratosthenes invariant",
        "rule": "Scans the input from left to right so each value gets one chance to resolve earlier pending values.",
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
        "ruleLabel": "Sieve of Eratosthenes invariant",
        "rule": "Returns result, the value produced after Sieve of Eratosthenes's state changes are complete.",
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
