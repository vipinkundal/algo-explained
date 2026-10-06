// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "gcd-euclidean",
  "title": "GCD / Euclidean Algorithm",
  "category": "Number Theory and Bit Manipulation",
  "route": "/algorithms/number-theory/gcd-euclidean",
  "phase": 1,
  "priority": "high",
  "visualizerType": "remainder-steps",
  "icon": "memory",
  "codePath": "./src/algorithms/number-theory-and-bit-manipulation/gcd-euclidean/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "The Euclidean algorithm finds the greatest common divisor by replacing a pair with the smaller number and the remainder.",
  "problem": "The Euclidean algorithm finds the greatest common divisor by replacing a pair with the smaller number and the remainder.",
  "concept": "The Euclidean algorithm finds the greatest common divisor by replacing a pair with the smaller number and the remainder.",
  "logicSummary": "The Euclidean algorithm finds the greatest common divisor by replacing a pair with the smaller number and the remainder.",
  "transitionSummary": "gcd(18, 12) → gcd(12, 6) → gcd(6, 0) = 6. Stop when the remainder is zero.",
  "codeInsight": "The Euclidean algorithm finds the greatest common divisor by replacing a pair with the smaller number and the remainder.",
  "realLifeExample": "gcd(18, 12) → gcd(12, 6) → gcd(6, 0) = 6. Stop when the remainder is zero.",
  "whenToUse": "The Euclidean algorithm finds the greatest common divisor by replacing a pair with the smaller number and the remainder.",
  "memoryTrick": "The Euclidean algorithm finds the greatest common divisor by replacing a pair with the smaller number and the remainder.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "The Euclidean algorithm finds the greatest common divisor by replacing a pair with the smaller number and the remainder."
    },
    {
      "title": "Work through a small case",
      "text": "gcd(18, 12) → gcd(12, 6) → gcd(6, 0) = 6. Stop when the remainder is zero."
    },
    {
      "title": "Check the boundary cases",
      "text": "Handle zero, one, negative values, and invalid domains explicitly. Large Number calculations can lose exact integer precision."
    }
  ],
  "variables": [
    {
      "name": "a",
      "purpose": "An input to the computation. Compare its position in the function signature with the corresponding sample argument."
    },
    {
      "name": "b",
      "purpose": "An input to the computation. Compare its position in the function signature with the corresponding sample argument."
    },
    {
      "name": "x",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
    },
    {
      "name": "y",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "The Euclidean algorithm finds the greatest common divisor by replacing a pair with the smaller number and the remainder.",
      "activeLine": 5,
      "codeInsight": "The Euclidean algorithm finds the greatest common divisor by replacing a pair with the smaller number and the remainder."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "gcd(18, 12) → gcd(12, 6) → gcd(6, 0) = 6. Stop when the remainder is zero.",
      "activeLine": 9,
      "codeInsight": "The Euclidean algorithm finds the greatest common divisor by replacing a pair with the smaller number and the remainder."
    }
  ],
  "complexity": {
    "time": "O(log min(|a|, |b|)) remainder steps for positive inputs, treating arithmetic as constant cost.",
    "space": "O(1) in an iterative version."
  },
  "quiz": {
    "question": "Which explanation best describes GCD / Euclidean Algorithm?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "The Euclidean algorithm finds the greatest common divisor by replacing a pair with the smaller number and the remainder.",
        "correct": true
      },
      {
        "key": "C",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      }
    ],
    "correctText": "Correct. The Euclidean algorithm finds the greatest common divisor by replacing a pair with the smaller number and the remainder.",
    "incorrectText": "Try again. The Euclidean algorithm finds the greatest common divisor by replacing a pair with the smaller number and the remainder. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "number-theory-and-bit-manipulation",
  "algorithmSlug": "gcd-euclidean",
  "runnerInput": [
    48,
    18
  ],
  "animation": {
    "type": "state-flow",
    "title": "GCD / Euclidean Algorithm state transitions",
    "ruleLabel": "State rule",
    "rule": "Each step applies one arithmetic, modular, or bit operation that preserves the invariant.",
    "states": [
      "Numbers",
      "Rule",
      "Reduction",
      "Numeric result"
    ],
    "steps": [
      {
        "phase": "Numbers",
        "title": "Read numeric state",
        "note": "The code receives the number, range, or modulus.",
        "ruleLabel": "GCD / Euclidean Algorithm invariant",
        "rule": "Defines gcdEuclidean and names the input a, b; edits to those inputs change the visual state and output.",
        "activeState": 0
      },
      {
        "phase": "Rule",
        "title": "Select math invariant",
        "note": "The chosen identity controls every update.",
        "ruleLabel": "GCD / Euclidean Algorithm invariant",
        "rule": "Defines gcdEuclidean and names the input a, b; edits to those inputs change the visual state and output.",
        "activeState": 1
      },
      {
        "phase": "Reduction",
        "title": "Apply one reduction",
        "note": "A shift, xor, multiply, divide, or mark changes state.",
        "ruleLabel": "GCD / Euclidean Algorithm invariant",
        "rule": "Defines gcdEuclidean and names the input a, b; edits to those inputs change the visual state and output.",
        "activeState": 2
      },
      {
        "phase": "Numeric result",
        "title": "Return numeric result",
        "note": "The loop ends when the invariant gives the answer.",
        "ruleLabel": "GCD / Euclidean Algorithm invariant",
        "rule": "Returns x, the final value maintained by GCD / Euclidean Algorithm's code path.",
        "activeState": 3
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "Arithmetic properties can reduce a search: factors come in pairs, remainders shrink GCD problems, and squaring reduces exponent work.",
    "family": "Arithmetic structure",
    "example": "gcd(18, 12) → gcd(12, 6) → gcd(6, 0) = 6. Stop when the remainder is zero.",
    "sampleInput": [
      48,
      18
    ],
    "sampleResult": 6,
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
    "checkpoint": "Explain this in your own words: The Euclidean algorithm finds the greatest common divisor by replacing a pair with the smaller number and the remainder."
  },
  "relatedLinks": []
};
