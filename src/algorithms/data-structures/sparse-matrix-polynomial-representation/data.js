// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-sparse-matrix-polynomial-representation",
  "title": "Sparse Matrix Polynomial Representation",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Matrix / Sparse Matrix / Polynomial",
  "sourceFolder": "08_sparse_matrix",
  "sourceFile": "04_polynomial_representation.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/sparse-matrix-polynomial-representation",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "sparse-matrix",
  "icon": "grid_on",
  "codePath": "./src/algorithms/data-structures/sparse-matrix-polynomial-representation/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/sparse-matrix-polynomial-representation/code/original.cpp",
  "originalCodeFilename": "04_polynomial_representation.cpp",
  "originalActiveLine": 5,
  "meaning": "A polynomial can be represented by coefficient–exponent pairs instead of all possible powers.",
  "problem": "A polynomial can be represented by coefficient–exponent pairs instead of all possible powers.",
  "concept": "A polynomial can be represented by coefficient–exponent pairs instead of all possible powers.",
  "logicSummary": "A polynomial can be represented by coefficient–exponent pairs instead of all possible powers.",
  "transitionSummary": "3x⁴ + 2x + 1 uses (3, 4), (2, 1), and (1, 0).",
  "codeInsight": "A polynomial can be represented by coefficient–exponent pairs instead of all possible powers.",
  "originalCodeInsight": "Dynamic allocation creates storage at runtime; every pointer assignment changes how nodes or arrays are connected.",
  "realLifeExample": "3x⁴ + 2x + 1 uses (3, 4), (2, 1), and (1, 0).",
  "whenToUse": "A polynomial can be represented by coefficient–exponent pairs instead of all possible powers.",
  "memoryTrick": "A polynomial can be represented by coefficient–exponent pairs instead of all possible powers.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "A polynomial can be represented by coefficient–exponent pairs instead of all possible powers."
    },
    {
      "title": "Work through a small case",
      "text": "3x⁴ + 2x + 1 uses (3, 4), (2, 1), and (1, 0)."
    },
    {
      "title": "Check the boundary cases",
      "text": "Check the allowed input and stopping rule before running the routine. A picture of state alone is not a proof of correctness."
    }
  ],
  "variables": [
    {
      "name": "matrix",
      "purpose": "Keeps a sequence of sample or working values for the following operations."
    },
    {
      "name": "nonZero",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "A polynomial can be represented by coefficient–exponent pairs instead of all possible powers.",
      "activeLine": 2,
      "codeInsight": "A polynomial can be represented by coefficient–exponent pairs instead of all possible powers."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "3x⁴ + 2x + 1 uses (3, 4), (2, 1), and (1, 0).",
      "activeLine": 5,
      "codeInsight": "A polynomial can be represented by coefficient–exponent pairs instead of all possible powers."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying Sparse Matrix Polynomial Representation?",
    "options": [
      {
        "key": "A",
        "text": "The memory/state representation and invariant.",
        "correct": true
      },
      {
        "key": "B",
        "text": "Only the final cout output.",
        "correct": false
      },
      {
        "key": "C",
        "text": "A different algorithm with the same name.",
        "correct": false
      }
    ],
    "correctKey": "A",
    "correctText": "Correct. Data-structure code is easiest to understand when the state representation is clear first.",
    "incorrectText": "Not quite. Start with the structure state, then follow the operation that mutates or reads it."
  },
  "relatedAlgorithmIds": [
    "matrix-traversal"
  ],
  "relatedLinks": [
    {
      "id": "matrix-traversal",
      "title": "Matrix Traversal",
      "label": "Existing algorithm lesson"
    }
  ],
  "runnerInput": [],
  "categorySlug": "data-structures",
  "algorithmSlug": "sparse-matrix-polynomial-representation",
  "animation": {
    "type": "matrix-flow",
    "title": "Sparse Matrix Polynomial Representation matrix state",
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
        "ruleLabel": "Sparse Matrix Polynomial Representation invariant",
        "rule": "Defines sparseMatrixPolynomialRepresentation as the runnable entry point for this lesson.",
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
        "ruleLabel": "Sparse Matrix Polynomial Representation invariant",
        "rule": "Seeds matrix with the sample values shown in the visualizer, giving the trace concrete cells to inspect.",
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
        "ruleLabel": "Sparse Matrix Polynomial Representation invariant",
        "rule": "Returns the final state object { structure: \"matrix\", representation: \"non-zero entries\", nonZero }, exposing the exact fields the visualizer has been tracking.",
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
        "ruleLabel": "Sparse Matrix Polynomial Representation invariant",
        "rule": "Returns the final state object { structure: \"matrix\", representation: \"non-zero entries\", nonZero }, exposing the exact fields the visualizer has been tracking.",
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
    "mentalModel": "State is the information a computation remembers between steps. A transition changes that information; a stop rule ends the computation.",
    "family": "State and rules",
    "example": "3x⁴ + 2x + 1 uses (3, 4), (2, 1), and (1, 0).",
    "sampleInput": [],
    "sampleResult": {
      "structure": "matrix",
      "representation": "non-zero entries",
      "nonZero": [
        {
          "r": 0,
          "c": 0,
          "value": 1
        },
        {
          "r": 1,
          "c": 1,
          "value": 2
        },
        {
          "r": 2,
          "c": 2,
          "value": 3
        }
      ]
    },
    "sampleScope": "This runnable JavaScript companion illustrates the data structure. Its returned snapshot may cover fewer operations than the C/C++ reference. The topic example above explains the named operation.",
    "terms": [
      [
        "State",
        "Values remembered at the current step."
      ],
      [
        "Transition",
        "The update that moves to the next state."
      ],
      [
        "Base case",
        "A small or finished situation with a known answer."
      ]
    ],
    "pitfall": "Check the allowed input and stopping rule before running the routine. A picture of state alone is not a proof of correctness.",
    "checkpoint": "Explain this in your own words: A polynomial can be represented by coefficient–exponent pairs instead of all possible powers."
  }
};
