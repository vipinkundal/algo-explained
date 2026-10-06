// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-sparse-matrix-addition",
  "title": "Sparse Matrix Addition",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Matrix / Sparse Matrix / Polynomial",
  "sourceFolder": "08_sparse_matrix",
  "sourceFile": "02_addition.c",
  "sourceLanguage": "c",
  "route": "/algorithms/data-structures/sparse-matrix-addition",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "sparse-matrix",
  "icon": "grid_on",
  "codePath": "./src/algorithms/data-structures/sparse-matrix-addition/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/sparse-matrix-addition/code/original.c",
  "originalCodeFilename": "02_addition.c",
  "originalActiveLine": 3,
  "meaning": "Add sparse matrices by combining entries at matching row and column positions.",
  "problem": "Add sparse matrices by combining entries at matching row and column positions.",
  "concept": "Add sparse matrices by combining entries at matching row and column positions.",
  "logicSummary": "Add sparse matrices by combining entries at matching row and column positions.",
  "transitionSummary": "If one matrix has (0, 1, 3) and another (0, 1, 4), their sum stores (0, 1, 7).",
  "codeInsight": "Add sparse matrices by combining entries at matching row and column positions.",
  "originalCodeInsight": "Dynamic allocation creates storage at runtime; every pointer assignment changes how nodes or arrays are connected.",
  "realLifeExample": "If one matrix has (0, 1, 3) and another (0, 1, 4), their sum stores (0, 1, 7).",
  "whenToUse": "Add sparse matrices by combining entries at matching row and column positions.",
  "memoryTrick": "Add sparse matrices by combining entries at matching row and column positions.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Add sparse matrices by combining entries at matching row and column positions."
    },
    {
      "title": "Work through a small case",
      "text": "If one matrix has (0, 1, 3) and another (0, 1, 4), their sum stores (0, 1, 7)."
    },
    {
      "title": "Check the boundary cases",
      "text": "Check row and column bounds separately. State whether diagonal neighbors are allowed."
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
      "note": "Add sparse matrices by combining entries at matching row and column positions.",
      "activeLine": 2,
      "codeInsight": "Add sparse matrices by combining entries at matching row and column positions."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "If one matrix has (0, 1, 3) and another (0, 1, 4), their sum stores (0, 1, 7).",
      "activeLine": 5,
      "codeInsight": "Add sparse matrices by combining entries at matching row and column positions."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying Sparse Matrix Addition?",
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
  "algorithmSlug": "sparse-matrix-addition",
  "animation": {
    "type": "matrix-flow",
    "title": "Sparse Matrix Addition matrix state",
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
        "ruleLabel": "Sparse Matrix Addition invariant",
        "rule": "Defines sparseMatrixAddition as the runnable entry point for this lesson.",
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
        "ruleLabel": "Sparse Matrix Addition invariant",
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
        "ruleLabel": "Sparse Matrix Addition invariant",
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
        "ruleLabel": "Sparse Matrix Addition invariant",
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
    "mentalModel": "A matrix is a grid. Identify a cell by its row first, then its column.",
    "family": "Rows and columns",
    "example": "If one matrix has (0, 1, 3) and another (0, 1, 4), their sum stores (0, 1, 7).",
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
    "checkpoint": "Explain this in your own words: Add sparse matrices by combining entries at matching row and column positions."
  }
};
