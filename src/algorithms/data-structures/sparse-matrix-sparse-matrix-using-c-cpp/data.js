// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-sparse-matrix-sparse-matrix-using-c-cpp",
  "title": "Sparse Matrix Using C++",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Matrix / Sparse Matrix / Polynomial",
  "sourceFolder": "08_sparse_matrix",
  "sourceFile": "03_sparse_matrix_using_c++.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/sparse-matrix-sparse-matrix-using-c-cpp",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "sparse-matrix",
  "icon": "grid_on",
  "codePath": "./src/algorithms/data-structures/sparse-matrix-sparse-matrix-using-c-cpp/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/sparse-matrix-sparse-matrix-using-c-cpp/code/original.cpp",
  "originalCodeFilename": "03_sparse_matrix_using_c++.cpp",
  "originalActiveLine": 3,
  "meaning": "A C++ sparse-matrix representation records dimensions and non-zero row–column–value triples.",
  "problem": "A C++ sparse-matrix representation records dimensions and non-zero row–column–value triples.",
  "concept": "A C++ sparse-matrix representation records dimensions and non-zero row–column–value triples.",
  "logicSummary": "A C++ sparse-matrix representation records dimensions and non-zero row–column–value triples.",
  "transitionSummary": "A record (1, 2, 7) means row 1, column 2 contains 7; unspecified cells contain zero.",
  "codeInsight": "A C++ sparse-matrix representation records dimensions and non-zero row–column–value triples.",
  "originalCodeInsight": "The C++ class groups data members with operations, so the structure controls how outside code can mutate state.",
  "realLifeExample": "A record (1, 2, 7) means row 1, column 2 contains 7; unspecified cells contain zero.",
  "whenToUse": "A C++ sparse-matrix representation records dimensions and non-zero row–column–value triples.",
  "memoryTrick": "A C++ sparse-matrix representation records dimensions and non-zero row–column–value triples.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "A C++ sparse-matrix representation records dimensions and non-zero row–column–value triples."
    },
    {
      "title": "Work through a small case",
      "text": "A record (1, 2, 7) means row 1, column 2 contains 7; unspecified cells contain zero."
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
      "note": "A C++ sparse-matrix representation records dimensions and non-zero row–column–value triples.",
      "activeLine": 2,
      "codeInsight": "A C++ sparse-matrix representation records dimensions and non-zero row–column–value triples."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "A record (1, 2, 7) means row 1, column 2 contains 7; unspecified cells contain zero.",
      "activeLine": 5,
      "codeInsight": "A C++ sparse-matrix representation records dimensions and non-zero row–column–value triples."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying Sparse Matrix Using C++?",
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
  "algorithmSlug": "sparse-matrix-sparse-matrix-using-c-cpp",
  "animation": {
    "type": "matrix-flow",
    "title": "Sparse Matrix Using C++ matrix state",
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
        "ruleLabel": "Sparse Matrix Using C++ invariant",
        "rule": "Defines sparseMatrixSparseMatrixUsingCCpp as the runnable entry point for this lesson.",
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
        "ruleLabel": "Sparse Matrix Using C++ invariant",
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
        "ruleLabel": "Sparse Matrix Using C++ invariant",
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
        "ruleLabel": "Sparse Matrix Using C++ invariant",
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
    "example": "A record (1, 2, 7) means row 1, column 2 contains 7; unspecified cells contain zero.",
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
    "checkpoint": "Explain this in your own words: A C++ sparse-matrix representation records dimensions and non-zero row–column–value triples."
  }
};
