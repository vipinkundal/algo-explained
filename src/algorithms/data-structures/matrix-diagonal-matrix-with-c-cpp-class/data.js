// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-matrix-diagonal-matrix-with-c-cpp-class",
  "title": "Diagonal Matrix With C++ Class",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Matrix / Sparse Matrix / Polynomial",
  "sourceFolder": "07_Matrix",
  "sourceFile": "02_Diagonal_matrix_with_c++_class.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/matrix-diagonal-matrix-with-c-cpp-class",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "matrix-layout",
  "icon": "grid_on",
  "codePath": "./src/algorithms/data-structures/matrix-diagonal-matrix-with-c-cpp-class/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/matrix-diagonal-matrix-with-c-cpp-class/code/original.cpp",
  "originalCodeFilename": "02_Diagonal_matrix_with_c++_class.cpp",
  "originalActiveLine": 3,
  "meaning": "A diagonal-matrix class stores only diagonal entries and supplies zero elsewhere.",
  "problem": "A diagonal-matrix class stores only diagonal entries and supplies zero elsewhere.",
  "concept": "A diagonal-matrix class stores only diagonal entries and supplies zero elsewhere.",
  "logicSummary": "A diagonal-matrix class stores only diagonal entries and supplies zero elsewhere.",
  "transitionSummary": "get(0, 1) returns 0; get(1, 1) reads the second stored diagonal entry.",
  "codeInsight": "A diagonal-matrix class stores only diagonal entries and supplies zero elsewhere.",
  "originalCodeInsight": "The C++ class groups data members with operations, so the structure controls how outside code can mutate state.",
  "realLifeExample": "get(0, 1) returns 0; get(1, 1) reads the second stored diagonal entry.",
  "whenToUse": "A diagonal-matrix class stores only diagonal entries and supplies zero elsewhere.",
  "memoryTrick": "A diagonal-matrix class stores only diagonal entries and supplies zero elsewhere.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "A diagonal-matrix class stores only diagonal entries and supplies zero elsewhere."
    },
    {
      "title": "Work through a small case",
      "text": "get(0, 1) returns 0; get(1, 1) reads the second stored diagonal entry."
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
      "note": "A diagonal-matrix class stores only diagonal entries and supplies zero elsewhere.",
      "activeLine": 2,
      "codeInsight": "A diagonal-matrix class stores only diagonal entries and supplies zero elsewhere."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "get(0, 1) returns 0; get(1, 1) reads the second stored diagonal entry.",
      "activeLine": 5,
      "codeInsight": "A diagonal-matrix class stores only diagonal entries and supplies zero elsewhere."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying Diagonal Matrix With C++ Class?",
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
  "algorithmSlug": "matrix-diagonal-matrix-with-c-cpp-class",
  "animation": {
    "type": "matrix-flow",
    "title": "Diagonal Matrix With C++ Class matrix state",
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
        "ruleLabel": "Diagonal Matrix With C++ Class invariant",
        "rule": "Defines matrixDiagonalMatrixWithCCppClass as the runnable entry point for this lesson.",
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
        "ruleLabel": "Diagonal Matrix With C++ Class invariant",
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
        "ruleLabel": "Diagonal Matrix With C++ Class invariant",
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
        "ruleLabel": "Diagonal Matrix With C++ Class invariant",
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
    "example": "get(0, 1) returns 0; get(1, 1) reads the second stored diagonal entry.",
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
    "checkpoint": "Explain this in your own words: A diagonal-matrix class stores only diagonal entries and supplies zero elsewhere."
  }
};
