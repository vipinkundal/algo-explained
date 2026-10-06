// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-sparse-matrix-and-polynimial-representation-sparse-matrix",
  "title": "Sparse Matrix",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Matrix / Sparse Matrix / Polynomial",
  "sourceFolder": "10_Sparse_matrix_and_polynimial_representation",
  "sourceFile": "01_sparse_matrix.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/sparse-matrix-and-polynimial-representation-sparse-matrix",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "sparse-polynomial",
  "icon": "functions",
  "codePath": "./src/algorithms/data-structures/sparse-matrix-and-polynimial-representation-sparse-matrix/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/sparse-matrix-and-polynimial-representation-sparse-matrix/code/original.cpp",
  "originalCodeFilename": "01_sparse_matrix.cpp",
  "originalActiveLine": 4,
  "meaning": "A sparse matrix stores non-zero entries with their row and column positions.",
  "problem": "A sparse matrix stores non-zero entries with their row and column positions.",
  "concept": "A sparse matrix stores non-zero entries with their row and column positions.",
  "logicSummary": "A sparse matrix stores non-zero entries with their row and column positions.",
  "transitionSummary": "A 100 × 100 matrix with 3 non-zero values can store 3 triples instead of 10,000 values.",
  "codeInsight": "A sparse matrix stores non-zero entries with their row and column positions.",
  "originalCodeInsight": "The C++ class groups data members with operations, so the structure controls how outside code can mutate state.",
  "realLifeExample": "A 100 × 100 matrix with 3 non-zero values can store 3 triples instead of 10,000 values.",
  "whenToUse": "A sparse matrix stores non-zero entries with their row and column positions.",
  "memoryTrick": "A sparse matrix stores non-zero entries with their row and column positions.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "A sparse matrix stores non-zero entries with their row and column positions."
    },
    {
      "title": "Work through a small case",
      "text": "A 100 × 100 matrix with 3 non-zero values can store 3 triples instead of 10,000 values."
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
      "note": "A sparse matrix stores non-zero entries with their row and column positions.",
      "activeLine": 2,
      "codeInsight": "A sparse matrix stores non-zero entries with their row and column positions."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "A 100 × 100 matrix with 3 non-zero values can store 3 triples instead of 10,000 values.",
      "activeLine": 5,
      "codeInsight": "A sparse matrix stores non-zero entries with their row and column positions."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying Sparse Matrix?",
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
  "algorithmSlug": "sparse-matrix-and-polynimial-representation-sparse-matrix",
  "animation": {
    "type": "matrix-flow",
    "title": "Sparse Matrix matrix state",
    "ruleLabel": "Grid rule",
    "rule": "Each step changes only the part of the algorithm state required to preserve the invariant.",
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
        "phase": "Algorithm State",
        "title": "Read algorithm state action",
        "note": "The code receives the next value or command.",
        "ruleLabel": "Sparse Matrix invariant",
        "rule": "Seeds matrix with the sample values shown in the visualizer, giving the trace concrete cells to inspect.",
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
        "title": "Inspect algorithm state",
        "note": "The active state must still satisfy page-specific invariant.",
        "ruleLabel": "Sparse Matrix invariant",
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
        "phase": "State change",
        "title": "Update the state described by this algorithm",
        "note": "Only the necessary algorithm state fields are changed.",
        "ruleLabel": "Sparse Matrix invariant",
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
        "title": "Return visible result",
        "note": "The return value or printed state confirms the operation.",
        "ruleLabel": "Sparse Matrix invariant",
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
    "example": "A 100 × 100 matrix with 3 non-zero values can store 3 triples instead of 10,000 values.",
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
    "checkpoint": "Explain this in your own words: A sparse matrix stores non-zero entries with their row and column positions."
  }
};
