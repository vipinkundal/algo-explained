// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "modular-inverse",
  "title": "Modular Inverse",
  "category": "Number Theory and Bit Manipulation",
  "route": "/algorithms/number-theory/modular-inverse",
  "phase": 4,
  "priority": "medium",
  "visualizerType": "extended-gcd",
  "icon": "memory",
  "codePath": "./src/algorithms/number-theory-and-bit-manipulation/modular-inverse/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "A modular inverse of a is a number x such that a × x leaves remainder 1 modulo m.",
  "problem": "A modular inverse of a is a number x such that a × x leaves remainder 1 modulo m.",
  "concept": "A modular inverse of a is a number x such that a × x leaves remainder 1 modulo m.",
  "logicSummary": "A modular inverse of a is a number x such that a × x leaves remainder 1 modulo m.",
  "transitionSummary": "3 has inverse 4 modulo 11 because 3 × 4 = 12 ≡ 1. An inverse exists only when gcd(a, m) = 1.",
  "codeInsight": "A modular inverse of a is a number x such that a × x leaves remainder 1 modulo m.",
  "realLifeExample": "3 has inverse 4 modulo 11 because 3 × 4 = 12 ≡ 1. An inverse exists only when gcd(a, m) = 1.",
  "whenToUse": "A modular inverse of a is a number x such that a × x leaves remainder 1 modulo m.",
  "memoryTrick": "A modular inverse of a is a number x such that a × x leaves remainder 1 modulo m.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "A modular inverse of a is a number x such that a × x leaves remainder 1 modulo m."
    },
    {
      "title": "Work through a small case",
      "text": "3 has inverse 4 modulo 11 because 3 × 4 = 12 ≡ 1. An inverse exists only when gcd(a, m) = 1."
    },
    {
      "title": "Check the boundary cases",
      "text": "Handle zero, one, negative values, and invalid domains explicitly. Large Number calculations can lose exact integer precision."
    }
  ],
  "variables": [
    {
      "name": "value",
      "purpose": "The number to compute with; recursive routines pass a smaller value to the next call."
    },
    {
      "name": "mod",
      "purpose": "The modulus; reducing by it keeps only the remainder needed by modular arithmetic."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "A modular inverse of a is a number x such that a × x leaves remainder 1 modulo m.",
      "activeLine": 5,
      "codeInsight": "A modular inverse of a is a number x such that a × x leaves remainder 1 modulo m."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "3 has inverse 4 modulo 11 because 3 × 4 = 12 ≡ 1. An inverse exists only when gcd(a, m) = 1.",
      "activeLine": 7,
      "codeInsight": "A modular inverse of a is a number x such that a × x leaves remainder 1 modulo m."
    }
  ],
  "complexity": {
    "time": "O(log m) arithmetic steps with extended Euclid; other implementations depend on their exponentiation method.",
    "space": "O(1) iterative state or logarithmic recursion depth. The inverse exists only for coprime inputs."
  },
  "quiz": {
    "question": "Which explanation best describes Modular Inverse?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "A modular inverse of a is a number x such that a × x leaves remainder 1 modulo m.",
        "correct": true
      },
      {
        "key": "C",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      }
    ],
    "correctText": "Correct. A modular inverse of a is a number x such that a × x leaves remainder 1 modulo m.",
    "incorrectText": "Try again. A modular inverse of a is a number x such that a × x leaves remainder 1 modulo m. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "number-theory-and-bit-manipulation",
  "algorithmSlug": "modular-inverse",
  "runnerInput": [
    3,
    11
  ],
  "animation": {
    "type": "state-flow",
    "title": "Modular Inverse state transitions",
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
        "ruleLabel": "Modular Inverse invariant",
        "rule": "Updates const [g, x1, y1] with extendedGcd(b, a % b); this is the state change the animation should reflect.",
        "activeState": 0
      },
      {
        "phase": "Rule",
        "title": "Select math invariant",
        "note": "The chosen identity controls every update.",
        "ruleLabel": "Modular Inverse invariant",
        "rule": "Defines modularInverse and names the input value, mod; edits to those inputs change the visual state and output.",
        "activeState": 1
      },
      {
        "phase": "Reduction",
        "title": "Apply one reduction",
        "note": "A shift, xor, multiply, divide, or mark changes state.",
        "ruleLabel": "Modular Inverse invariant",
        "rule": "Defines modularInverse and names the input value, mod; edits to those inputs change the visual state and output.",
        "activeState": 2
      },
      {
        "phase": "Numeric result",
        "title": "Return numeric result",
        "note": "The loop ends when the invariant gives the answer.",
        "ruleLabel": "Modular Inverse invariant",
        "rule": "Returns the final array-style answer [g, y1, x1 - Math.floor(a / b) * y1], so the last frame should show the chosen positions or sequence.",
        "activeState": 3
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "Arithmetic properties can reduce a search: factors come in pairs, remainders shrink GCD problems, and squaring reduces exponent work.",
    "family": "Arithmetic structure",
    "example": "3 has inverse 4 modulo 11 because 3 × 4 = 12 ≡ 1. An inverse exists only when gcd(a, m) = 1.",
    "sampleInput": [
      3,
      11
    ],
    "sampleResult": 4,
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
    "checkpoint": "Explain this in your own words: A modular inverse of a is a number x such that a × x leaves remainder 1 modulo m."
  },
  "relatedLinks": []
};
