// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "n-queens",
  "title": "N-Queens",
  "category": "Recursion and Backtracking",
  "route": "/algorithms/backtracking/n-queens",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "chessboard",
  "icon": "school",
  "codePath": "./src/algorithms/recursion-and-backtracking/n-queens/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "N-Queens is a Recursion and Backtracking technique focused on solutions.",
  "problem": "N-Queens explores a decision tree by choosing, recursing, and undoing the choice before trying the next option.",
  "concept": "Recursion and backtracking are useful when a problem branches into smaller choices that share the same rule. Use this when the answer is built by choosing, recursing, and sometimes undoing choices.",
  "logicSummary": "Handle the base case, choose the next option, recurse into smaller state, then combine or undo state.",
  "transitionSummary": "Each step either reaches a base case or moves one level deeper with a smaller decision state.",
  "codeInsight": "The backtrack step is what keeps the state correct: every push must have a matching pop.",
  "realLifeExample": "N-Queens appears when the input is choices and the required result is solutions.",
  "whenToUse": "Use N-Queens when a problem matches the Recursion and Backtracking pattern and the expected state changes match a chessboard dry run.",
  "memoryTrick": "N-Queens: name the invariant, then trace the exact state change.",
  "visualizerCaption": "N-Queens is shown as call/choice state changes. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Base case",
      "text": "Stop when the current state is complete or invalid."
    },
    {
      "title": "Choose option",
      "text": "Pick the next valid branch."
    },
    {
      "title": "Recurse",
      "text": "Solve the smaller state."
    },
    {
      "title": "Return or undo",
      "text": "Collect the result or backtrack before the next choice."
    }
  ],
  "variables": [
    {
      "name": "choices",
      "purpose": "The candidate values that drive the heap, recursion, subset, or frequency process."
    },
    {
      "name": "path and recursion frame",
      "purpose": "The partial choice path plus the current recursive frame before backtracking restores it. This page visualizes it as chessboard."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by nQueens after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "The transition is choose -> explore -> unchoose, which keeps sibling branches isolated. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Base",
      "title": "Check stop condition",
      "note": "The entry step names the function inputs before the trace checks base cases or expands choices.",
      "activeLine": 5,
      "codeInsight": "Defines nQueens and names the input size; edits to those inputs change the visual state and output."
    },
    {
      "label": "Choice",
      "title": "Select next option",
      "note": "One valid move is added to the state.",
      "activeLine": 5,
      "codeInsight": "Defines nQueens and names the input size; edits to those inputs change the visual state and output."
    },
    {
      "label": "Call",
      "title": "Recurse deeper",
      "note": "The same rule runs on a smaller or extended state.",
      "activeLine": 6,
      "codeInsight": "Seeds result with the sample values shown in the visualizer, giving the trace concrete cells to inspect."
    },
    {
      "label": "Unwind",
      "title": "Return or backtrack",
      "note": "The result is combined or the choice is removed.",
      "activeLine": 14,
      "codeInsight": "Returns from this branch immediately because the current recursive or conditional state is complete."
    }
  ],
  "complexity": {
    "time": "O(n) for the educational reference implementation.",
    "space": "O(n) for tracked state when needed."
  },
  "quiz": {
    "question": "Which state choice keeps N-Queens correct?",
    "options": [
      {
        "key": "A",
        "text": "Track path and update it only through N-Queens' transition.",
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
    "correctText": "Correct. N-Queens stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. N-Queens needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "recursion-and-backtracking",
  "algorithmSlug": "n-queens",
  "runnerInput": [
    4
  ],
  "animation": {
    "type": "matrix-flow",
    "title": "N-Queens matrix state",
    "ruleLabel": "Grid rule",
    "rule": "Each step either reaches a base case or moves one level deeper with a smaller decision state.",
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
        "phase": "Base",
        "title": "Check stop condition",
        "note": "The entry step names the function inputs before the trace checks base cases or expands choices.",
        "ruleLabel": "N-Queens invariant",
        "rule": "Defines nQueens and names the input size; edits to those inputs change the visual state and output.",
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
        "phase": "Choice",
        "title": "Select next option",
        "note": "One valid move is added to the state.",
        "ruleLabel": "N-Queens invariant",
        "rule": "Defines nQueens and names the input size; edits to those inputs change the visual state and output.",
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
        "phase": "Call",
        "title": "Recurse deeper",
        "note": "The same rule runs on a smaller or extended state.",
        "ruleLabel": "N-Queens invariant",
        "rule": "Seeds result with the sample values shown in the visualizer, giving the trace concrete cells to inspect.",
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
        "phase": "Unwind",
        "title": "Return or backtrack",
        "note": "The result is combined or the choice is removed.",
        "ruleLabel": "N-Queens invariant",
        "rule": "Returns from this branch immediately because the current recursive or conditional state is complete.",
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
