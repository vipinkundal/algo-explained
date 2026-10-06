// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "lcm",
  "title": "LCM",
  "category": "Number Theory and Bit Manipulation",
  "route": "/algorithms/number-theory/lcm",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "formula-card",
  "icon": "memory",
  "codePath": "./src/algorithms/number-theory-and-bit-manipulation/lcm/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "The least common multiple is the smallest positive number divisible by both input numbers.",
  "problem": "The least common multiple is the smallest positive number divisible by both input numbers.",
  "concept": "The least common multiple is the smallest positive number divisible by both input numbers.",
  "logicSummary": "The least common multiple is the smallest positive number divisible by both input numbers.",
  "transitionSummary": "lcm(6, 8) = 24. Use |(a / gcd(a, b)) × b|; if either input is zero, the LCM is zero.",
  "codeInsight": "The least common multiple is the smallest positive number divisible by both input numbers.",
  "realLifeExample": "lcm(6, 8) = 24. Use |(a / gcd(a, b)) × b|; if either input is zero, the LCM is zero.",
  "whenToUse": "The least common multiple is the smallest positive number divisible by both input numbers.",
  "memoryTrick": "The least common multiple is the smallest positive number divisible by both input numbers.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "The least common multiple is the smallest positive number divisible by both input numbers."
    },
    {
      "title": "Work through a small case",
      "text": "lcm(6, 8) = 24. Use |(a / gcd(a, b)) × b|; if either input is zero, the LCM is zero."
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
      "name": "gcd",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "The least common multiple is the smallest positive number divisible by both input numbers.",
      "activeLine": 5,
      "codeInsight": "The least common multiple is the smallest positive number divisible by both input numbers."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "lcm(6, 8) = 24. Use |(a / gcd(a, b)) × b|; if either input is zero, the LCM is zero.",
      "activeLine": 7,
      "codeInsight": "The least common multiple is the smallest positive number divisible by both input numbers."
    }
  ],
  "complexity": {
    "time": "Dominated by the GCD calculation.",
    "space": "O(1) in an iterative version."
  },
  "quiz": {
    "question": "Which explanation best describes LCM?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      },
      {
        "key": "C",
        "text": "The least common multiple is the smallest positive number divisible by both input numbers.",
        "correct": true
      }
    ],
    "correctText": "Correct. The least common multiple is the smallest positive number divisible by both input numbers.",
    "incorrectText": "Try again. The least common multiple is the smallest positive number divisible by both input numbers. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "number-theory-and-bit-manipulation",
  "algorithmSlug": "lcm",
  "runnerInput": [
    4,
    6
  ],
  "animation": {
    "type": "state-flow",
    "title": "LCM state transitions",
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
        "ruleLabel": "LCM invariant",
        "rule": "Computes gcd from the current values before the algorithm decides the next move.",
        "activeState": 0
      },
      {
        "phase": "Rule",
        "title": "Select math invariant",
        "note": "The chosen identity controls every update.",
        "ruleLabel": "LCM invariant",
        "rule": "Defines lcm and names the input a, b; edits to those inputs change the visual state and output.",
        "activeState": 1
      },
      {
        "phase": "Reduction",
        "title": "Apply one reduction",
        "note": "A shift, xor, multiply, divide, or mark changes state.",
        "ruleLabel": "LCM invariant",
        "rule": "Defines lcm and names the input a, b; edits to those inputs change the visual state and output.",
        "activeState": 2
      },
      {
        "phase": "Numeric result",
        "title": "Return numeric result",
        "note": "The loop ends when the invariant gives the answer.",
        "ruleLabel": "LCM invariant",
        "rule": "Returns a === 0 || b === 0 ? 0 : Math.abs(a * b) / gcd(a, b), the final value maintained by LCM's code path.",
        "activeState": 3
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "Arithmetic properties can reduce a search: factors come in pairs, remainders shrink GCD problems, and squaring reduces exponent work.",
    "family": "Arithmetic structure",
    "example": "lcm(6, 8) = 24. Use |(a / gcd(a, b)) × b|; if either input is zero, the LCM is zero.",
    "sampleInput": [
      4,
      6
    ],
    "sampleResult": 12,
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
    "checkpoint": "Explain this in your own words: The least common multiple is the smallest positive number divisible by both input numbers."
  },
  "relatedLinks": []
};
