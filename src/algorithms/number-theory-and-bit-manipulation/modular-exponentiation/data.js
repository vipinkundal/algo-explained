// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "modular-exponentiation",
  "title": "Modular Exponentiation",
  "category": "Number Theory and Bit Manipulation",
  "route": "/algorithms/number-theory/modular-exponentiation",
  "phase": 3,
  "priority": "high",
  "visualizerType": "binary-power",
  "icon": "memory",
  "codePath": "./src/algorithms/number-theory-and-bit-manipulation/modular-exponentiation/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Modular exponentiation computes a power while keeping intermediate values reduced modulo a number.",
  "problem": "Modular exponentiation computes a power while keeping intermediate values reduced modulo a number.",
  "concept": "Modular exponentiation computes a power while keeping intermediate values reduced modulo a number.",
  "logicSummary": "Modular exponentiation computes a power while keeping intermediate values reduced modulo a number.",
  "transitionSummary": "3⁴ mod 5 = 81 mod 5 = 1. Reducing after every multiplication avoids building the full power.",
  "codeInsight": "Modular exponentiation computes a power while keeping intermediate values reduced modulo a number.",
  "realLifeExample": "3⁴ mod 5 = 81 mod 5 = 1. Reducing after every multiplication avoids building the full power.",
  "whenToUse": "Modular exponentiation computes a power while keeping intermediate values reduced modulo a number.",
  "memoryTrick": "Modular exponentiation computes a power while keeping intermediate values reduced modulo a number.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Modular exponentiation computes a power while keeping intermediate values reduced modulo a number."
    },
    {
      "title": "Work through a small case",
      "text": "3⁴ mod 5 = 81 mod 5 = 1. Reducing after every multiplication avoids building the full power."
    },
    {
      "title": "Check the boundary cases",
      "text": "Handle zero, one, negative values, and invalid domains explicitly. Large Number calculations can lose exact integer precision."
    }
  ],
  "variables": [
    {
      "name": "base",
      "purpose": "An input to the computation. Compare its position in the function signature with the corresponding sample argument."
    },
    {
      "name": "exponent",
      "purpose": "An input to the computation. Compare its position in the function signature with the corresponding sample argument."
    },
    {
      "name": "mod",
      "purpose": "The modulus; reducing by it keeps only the remainder needed by modular arithmetic."
    },
    {
      "name": "result",
      "purpose": "Stores completed answers or computed states so they can be returned and, where needed, reused."
    },
    {
      "name": "power",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
    },
    {
      "name": "n",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "Modular exponentiation computes a power while keeping intermediate values reduced modulo a number.",
      "activeLine": 5,
      "codeInsight": "Modular exponentiation computes a power while keeping intermediate values reduced modulo a number."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "3⁴ mod 5 = 81 mod 5 = 1. Reducing after every multiplication avoids building the full power.",
      "activeLine": 14,
      "codeInsight": "Modular exponentiation computes a power while keeping intermediate values reduced modulo a number."
    }
  ],
  "complexity": {
    "time": "O(log e) modular multiplications for exponent e, treating arithmetic as constant cost.",
    "space": "O(1) in an iterative version. Large exact inputs require appropriate integer arithmetic."
  },
  "quiz": {
    "question": "Which explanation best describes Modular Exponentiation?",
    "options": [
      {
        "key": "A",
        "text": "Modular exponentiation computes a power while keeping intermediate values reduced modulo a number.",
        "correct": true
      },
      {
        "key": "B",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "C",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      }
    ],
    "correctText": "Correct. Modular exponentiation computes a power while keeping intermediate values reduced modulo a number.",
    "incorrectText": "Try again. Modular exponentiation computes a power while keeping intermediate values reduced modulo a number. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "number-theory-and-bit-manipulation",
  "algorithmSlug": "modular-exponentiation",
  "runnerInput": [
    2,
    10,
    1000
  ],
  "animation": {
    "type": "state-flow",
    "title": "Modular Exponentiation state transitions",
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
        "ruleLabel": "Modular Exponentiation invariant",
        "rule": "Defines modularExponentiation and names the input base, exponent, mod; edits to those inputs change the visual state and output.",
        "activeState": 0
      },
      {
        "phase": "Rule",
        "title": "Select math invariant",
        "note": "The chosen identity controls every update.",
        "ruleLabel": "Modular Exponentiation invariant",
        "rule": "Defines modularExponentiation and names the input base, exponent, mod; edits to those inputs change the visual state and output.",
        "activeState": 1
      },
      {
        "phase": "Reduction",
        "title": "Apply one reduction",
        "note": "A shift, xor, multiply, divide, or mark changes state.",
        "ruleLabel": "Modular Exponentiation invariant",
        "rule": "Defines modularExponentiation and names the input base, exponent, mod; edits to those inputs change the visual state and output.",
        "activeState": 2
      },
      {
        "phase": "Numeric result",
        "title": "Return numeric result",
        "note": "The loop ends when the invariant gives the answer.",
        "ruleLabel": "Modular Exponentiation invariant",
        "rule": "Returns result, the final value maintained by Modular Exponentiation's code path.",
        "activeState": 3
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "Arithmetic properties can reduce a search: factors come in pairs, remainders shrink GCD problems, and squaring reduces exponent work.",
    "family": "Arithmetic structure",
    "example": "3⁴ mod 5 = 81 mod 5 = 1. Reducing after every multiplication avoids building the full power.",
    "sampleInput": [
      2,
      10,
      1000
    ],
    "sampleResult": 24,
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
    "checkpoint": "Explain this in your own words: Modular exponentiation computes a power while keeping intermediate values reduced modulo a number."
  },
  "relatedLinks": []
};
