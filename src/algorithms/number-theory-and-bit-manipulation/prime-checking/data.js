// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "prime-checking",
  "title": "Prime Checking",
  "category": "Number Theory and Bit Manipulation",
  "route": "/algorithms/number-theory/prime-checking",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "divisor-scan",
  "icon": "memory",
  "codePath": "./src/algorithms/number-theory-and-bit-manipulation/prime-checking/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "A prime number is an integer greater than 1 with no divisors other than 1 and itself.",
  "problem": "A prime number is an integer greater than 1 with no divisors other than 1 and itself.",
  "concept": "A prime number is an integer greater than 1 with no divisors other than 1 and itself.",
  "logicSummary": "A prime number is an integer greater than 1 with no divisors other than 1 and itself.",
  "transitionSummary": "To check 29, test divisors only through √29. If it had a larger factor, the paired factor would be smaller than √29.",
  "codeInsight": "A prime number is an integer greater than 1 with no divisors other than 1 and itself.",
  "realLifeExample": "To check 29, test divisors only through √29. If it had a larger factor, the paired factor would be smaller than √29.",
  "whenToUse": "A prime number is an integer greater than 1 with no divisors other than 1 and itself.",
  "memoryTrick": "A prime number is an integer greater than 1 with no divisors other than 1 and itself.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "A prime number is an integer greater than 1 with no divisors other than 1 and itself."
    },
    {
      "title": "Work through a small case",
      "text": "To check 29, test divisors only through √29. If it had a larger factor, the paired factor would be smaller than √29."
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
      "name": "divisor",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "A prime number is an integer greater than 1 with no divisors other than 1 and itself.",
      "activeLine": 5,
      "codeInsight": "A prime number is an integer greater than 1 with no divisors other than 1 and itself."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "To check 29, test divisors only through √29. If it had a larger factor, the paired factor would be smaller than √29.",
      "activeLine": 6,
      "codeInsight": "A prime number is an integer greater than 1 with no divisors other than 1 and itself."
    }
  ],
  "complexity": {
    "time": "O(√n) trial divisions in the basic method.",
    "space": "O(1) auxiliary state."
  },
  "quiz": {
    "question": "Which explanation best describes Prime Checking?",
    "options": [
      {
        "key": "A",
        "text": "A prime number is an integer greater than 1 with no divisors other than 1 and itself.",
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
    "correctText": "Correct. A prime number is an integer greater than 1 with no divisors other than 1 and itself.",
    "incorrectText": "Try again. A prime number is an integer greater than 1 with no divisors other than 1 and itself. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "number-theory-and-bit-manipulation",
  "algorithmSlug": "prime-checking",
  "runnerInput": [
    29
  ],
  "animation": {
    "type": "state-flow",
    "title": "Prime Checking state transitions",
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
        "ruleLabel": "Prime Checking invariant",
        "rule": "Defines primeChecking and names the input value; edits to those inputs change the visual state and output.",
        "activeState": 0
      },
      {
        "phase": "Rule",
        "title": "Select math invariant",
        "note": "The chosen identity controls every update.",
        "ruleLabel": "Prime Checking invariant",
        "rule": "Defines primeChecking and names the input value; edits to those inputs change the visual state and output.",
        "activeState": 1
      },
      {
        "phase": "Reduction",
        "title": "Apply one reduction",
        "note": "A shift, xor, multiply, divide, or mark changes state.",
        "ruleLabel": "Prime Checking invariant",
        "rule": "Defines primeChecking and names the input value; edits to those inputs change the visual state and output.",
        "activeState": 2
      },
      {
        "phase": "Numeric result",
        "title": "Return numeric result",
        "note": "The loop ends when the invariant gives the answer.",
        "ruleLabel": "Prime Checking invariant",
        "rule": "Returns true, the boolean result reached by the highlighted checks.",
        "activeState": 3
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "Arithmetic properties can reduce a search: factors come in pairs, remainders shrink GCD problems, and squaring reduces exponent work.",
    "family": "Arithmetic structure",
    "example": "To check 29, test divisors only through √29. If it had a larger factor, the paired factor would be smaller than √29.",
    "sampleInput": [
      29
    ],
    "sampleResult": true,
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
    "checkpoint": "Explain this in your own words: A prime number is an integer greater than 1 with no divisors other than 1 and itself."
  },
  "relatedLinks": []
};
