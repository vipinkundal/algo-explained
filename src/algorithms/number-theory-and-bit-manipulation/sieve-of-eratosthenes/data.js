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
  "meaning": "The sieve finds primes up to a limit by crossing out multiples of each discovered prime.",
  "problem": "The sieve finds primes up to a limit by crossing out multiples of each discovered prime.",
  "concept": "The sieve finds primes up to a limit by crossing out multiples of each discovered prime.",
  "logicSummary": "The sieve finds primes up to a limit by crossing out multiples of each discovered prime.",
  "transitionSummary": "Up to 10, cross out multiples of 2 and 3. The remaining numbers greater than 1 are 2, 3, 5, and 7.",
  "codeInsight": "The sieve finds primes up to a limit by crossing out multiples of each discovered prime.",
  "realLifeExample": "Up to 10, cross out multiples of 2 and 3. The remaining numbers greater than 1 are 2, 3, 5, and 7.",
  "whenToUse": "The sieve finds primes up to a limit by crossing out multiples of each discovered prime.",
  "memoryTrick": "The sieve finds primes up to a limit by crossing out multiples of each discovered prime.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "The sieve finds primes up to a limit by crossing out multiples of each discovered prime."
    },
    {
      "title": "Work through a small case",
      "text": "Up to 10, cross out multiples of 2 and 3. The remaining numbers greater than 1 are 2, 3, 5, and 7."
    },
    {
      "title": "Check the boundary cases",
      "text": "Handle zero, one, negative values, and invalid domains explicitly. Large Number calculations can lose exact integer precision."
    }
  ],
  "variables": [
    {
      "name": "limit",
      "purpose": "An input to the computation. Compare its position in the function signature with the corresponding sample argument."
    },
    {
      "name": "prime",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
    },
    {
      "name": "value",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
    },
    {
      "name": "multiple",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
    },
    {
      "name": "result",
      "purpose": "Stores completed answers or computed states so they can be returned and, where needed, reused."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "The sieve finds primes up to a limit by crossing out multiples of each discovered prime.",
      "activeLine": 5,
      "codeInsight": "The sieve finds primes up to a limit by crossing out multiples of each discovered prime."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "Up to 10, cross out multiples of 2 and 3. The remaining numbers greater than 1 are 2, 3, 5, and 7.",
      "activeLine": 14,
      "codeInsight": "The sieve finds primes up to a limit by crossing out multiples of each discovered prime."
    }
  ],
  "complexity": {
    "time": "O(n log log n) for the standard sieve through n.",
    "space": "O(n) primality flags."
  },
  "quiz": {
    "question": "Which explanation best describes Sieve of Eratosthenes?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "The sieve finds primes up to a limit by crossing out multiples of each discovered prime.",
        "correct": true
      },
      {
        "key": "C",
        "text": "All grid problems allow diagonal movement without checking bounds.",
        "correct": false
      }
    ],
    "correctText": "Correct. The sieve finds primes up to a limit by crossing out multiples of each discovered prime.",
    "incorrectText": "Try again. The sieve finds primes up to a limit by crossing out multiples of each discovered prime. Compare the small example in the lesson with your choice."
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
        "rule": "Defines sieveOfEratosthenes and names the input limit; edits to those inputs change the visual state and output.",
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
        "rule": "Defines sieveOfEratosthenes and names the input limit; edits to those inputs change the visual state and output.",
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
        "rule": "Runs the counted loop (let value = 2; value * value <= limit; value += 1) so each visual step follows one code-controlled iteration.",
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
        "rule": "Returns result, the final value maintained by Sieve of Eratosthenes's code path.",
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
    "mentalModel": "Arithmetic properties can reduce a search: factors come in pairs, remainders shrink GCD problems, and squaring reduces exponent work.",
    "family": "Arithmetic structure",
    "example": "Up to 10, cross out multiples of 2 and 3. The remaining numbers greater than 1 are 2, 3, 5, and 7.",
    "sampleInput": [
      10
    ],
    "sampleResult": [
      2,
      3,
      5,
      7
    ],
    "sampleScope": "This is the result of the unedited JavaScript function with the sample arguments. Changing the input or code can change the result.",
    "terms": [
      [
        "Remainder",
        "What remains after integer division."
      ],
      [
        "Modulo",
        "Keeping a value’s remainder under a chosen modulus."
      ],
      [
        "Divisor",
        "An integer that divides another integer exactly."
      ]
    ],
    "pitfall": "Handle zero, one, negative values, and invalid domains explicitly. Large Number calculations can lose exact integer precision.",
    "checkpoint": "Explain this in your own words: The sieve finds primes up to a limit by crossing out multiples of each discovered prime."
  },
  "relatedLinks": []
};
