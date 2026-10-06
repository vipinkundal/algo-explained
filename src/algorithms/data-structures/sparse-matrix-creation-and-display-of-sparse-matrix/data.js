// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-sparse-matrix-creation-and-display-of-sparse-matrix",
  "title": "Creation And Display Of Sparse Matrix",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Matrix / Sparse Matrix / Polynomial",
  "sourceFolder": "08_sparse_matrix",
  "sourceFile": "01_creation_and_display_of_sparse_matrix.c",
  "sourceLanguage": "c",
  "route": "/algorithms/data-structures/sparse-matrix-creation-and-display-of-sparse-matrix",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "sparse-matrix",
  "icon": "grid_on",
  "codePath": "./src/algorithms/data-structures/sparse-matrix-creation-and-display-of-sparse-matrix/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/sparse-matrix-creation-and-display-of-sparse-matrix/code/original.c",
  "originalCodeFilename": "01_creation_and_display_of_sparse_matrix.c",
  "originalActiveLine": 3,
  "meaning": "Sparse matrix creation records non-zero coordinates; display reconstructs missing cells as zero.",
  "problem": "Sparse matrix creation records non-zero coordinates; display reconstructs missing cells as zero.",
  "concept": "Sparse matrix creation records non-zero coordinates; display reconstructs missing cells as zero.",
  "logicSummary": "Sparse matrix creation records non-zero coordinates; display reconstructs missing cells as zero.",
  "transitionSummary": "Storing (0, 1, 5) in a 2 × 2 matrix displays [[0, 5], [0, 0]].",
  "codeInsight": "Sparse matrix creation records non-zero coordinates; display reconstructs missing cells as zero.",
  "originalCodeInsight": "Dynamic allocation creates storage at runtime; every pointer assignment changes how nodes or arrays are connected.",
  "realLifeExample": "Storing (0, 1, 5) in a 2 × 2 matrix displays [[0, 5], [0, 0]].",
  "whenToUse": "Sparse matrix creation records non-zero coordinates; display reconstructs missing cells as zero.",
  "memoryTrick": "Sparse matrix creation records non-zero coordinates; display reconstructs missing cells as zero.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Sparse matrix creation records non-zero coordinates; display reconstructs missing cells as zero."
    },
    {
      "title": "Work through a small case",
      "text": "Storing (0, 1, 5) in a 2 × 2 matrix displays [[0, 5], [0, 0]]."
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
      "note": "Sparse matrix creation records non-zero coordinates; display reconstructs missing cells as zero.",
      "activeLine": 2,
      "codeInsight": "Sparse matrix creation records non-zero coordinates; display reconstructs missing cells as zero."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "Storing (0, 1, 5) in a 2 × 2 matrix displays [[0, 5], [0, 0]].",
      "activeLine": 5,
      "codeInsight": "Sparse matrix creation records non-zero coordinates; display reconstructs missing cells as zero."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying Creation And Display Of Sparse Matrix?",
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
  "algorithmSlug": "sparse-matrix-creation-and-display-of-sparse-matrix",
  "animation": {
    "type": "matrix-flow",
    "title": "Creation And Display Of Sparse Matrix matrix state",
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
        "ruleLabel": "Creation And Display Of Sparse Matrix invariant",
        "rule": "Defines sparseMatrixCreationAndDisplayOfSparseMatrix as the runnable entry point for this lesson.",
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
        "ruleLabel": "Creation And Display Of Sparse Matrix invariant",
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
        "ruleLabel": "Creation And Display Of Sparse Matrix invariant",
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
        "ruleLabel": "Creation And Display Of Sparse Matrix invariant",
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
    "example": "Storing (0, 1, 5) in a 2 × 2 matrix displays [[0, 5], [0, 0]].",
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
    "checkpoint": "Explain this in your own words: Sparse matrix creation records non-zero coordinates; display reconstructs missing cells as zero."
  }
};
