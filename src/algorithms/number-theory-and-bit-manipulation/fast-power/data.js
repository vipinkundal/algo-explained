// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "fast-power",
  "title": "Fast Power",
  "category": "Number Theory and Bit Manipulation",
  "route": "/algorithms/number-theory/fast-power",
  "phase": 3,
  "priority": "high",
  "visualizerType": "binary-power",
  "icon": "memory",
  "codePath": "./src/algorithms/number-theory-and-bit-manipulation/fast-power/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Fast Power computes a power by repeatedly squaring the base and halving the exponent.",
  "problem": "Fast Power computes a power by repeatedly squaring the base and halving the exponent.",
  "concept": "Fast Power computes a power by repeatedly squaring the base and halving the exponent.",
  "logicSummary": "Fast Power computes a power by repeatedly squaring the base and halving the exponent.",
  "transitionSummary": "2¹⁰ = (2⁵)² = 1024. When an exponent is odd, keep one extra factor before halving it.",
  "codeInsight": "Fast Power computes a power by repeatedly squaring the base and halving the exponent.",
  "realLifeExample": "2¹⁰ = (2⁵)² = 1024. When an exponent is odd, keep one extra factor before halving it.",
  "whenToUse": "Fast Power computes a power by repeatedly squaring the base and halving the exponent.",
  "memoryTrick": "Fast Power computes a power by repeatedly squaring the base and halving the exponent.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Fast Power computes a power by repeatedly squaring the base and halving the exponent."
    },
    {
      "title": "Work through a small case",
      "text": "2¹⁰ = (2⁵)² = 1024. When an exponent is odd, keep one extra factor before halving it."
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
      "note": "Fast Power computes a power by repeatedly squaring the base and halving the exponent.",
      "activeLine": 5,
      "codeInsight": "Fast Power computes a power by repeatedly squaring the base and halving the exponent."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "2¹⁰ = (2⁵)² = 1024. When an exponent is odd, keep one extra factor before halving it.",
      "activeLine": 14,
      "codeInsight": "Fast Power computes a power by repeatedly squaring the base and halving the exponent."
    }
  ],
  "complexity": {
    "time": "O(log e) multiplications for positive integer exponent e, ignoring growth of numeric precision.",
    "space": "O(1) in an iterative version; O(log e) call frames in a recursive version."
  },
  "quiz": {
    "question": "Which explanation best describes Fast Power?",
    "options": [
      {
        "key": "A",
        "text": "Fast Power computes a power by repeatedly squaring the base and halving the exponent.",
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
    "correctText": "Correct. Fast Power computes a power by repeatedly squaring the base and halving the exponent.",
    "incorrectText": "Try again. Fast Power computes a power by repeatedly squaring the base and halving the exponent. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "number-theory-and-bit-manipulation",
  "algorithmSlug": "fast-power",
  "runnerInput": [
    2,
    10
  ],
  "animation": {
    "type": "state-flow",
    "title": "Fast Power state transitions",
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
        "ruleLabel": "Fast Power invariant",
        "rule": "Defines fastPower and names the input base, exponent; edits to those inputs change the visual state and output.",
        "activeState": 0
      },
      {
        "phase": "Rule",
        "title": "Select math invariant",
        "note": "The chosen identity controls every update.",
        "ruleLabel": "Fast Power invariant",
        "rule": "Defines fastPower and names the input base, exponent; edits to those inputs change the visual state and output.",
        "activeState": 1
      },
      {
        "phase": "Reduction",
        "title": "Apply one reduction",
        "note": "A shift, xor, multiply, divide, or mark changes state.",
        "ruleLabel": "Fast Power invariant",
        "rule": "Defines fastPower and names the input base, exponent; edits to those inputs change the visual state and output.",
        "activeState": 2
      },
      {
        "phase": "Numeric result",
        "title": "Return numeric result",
        "note": "The loop ends when the invariant gives the answer.",
        "ruleLabel": "Fast Power invariant",
        "rule": "Returns result, the final value maintained by Fast Power's code path.",
        "activeState": 3
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "Arithmetic properties can reduce a search: factors come in pairs, remainders shrink GCD problems, and squaring reduces exponent work.",
    "family": "Arithmetic structure",
    "example": "2¹⁰ = (2⁵)² = 1024. When an exponent is odd, keep one extra factor before halving it.",
    "sampleInput": [
      2,
      10
    ],
    "sampleResult": 1024,
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
    "checkpoint": "Explain this in your own words: Fast Power computes a power by repeatedly squaring the base and halving the exponent."
  },
  "relatedLinks": []
};
