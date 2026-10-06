// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "power-of-two",
  "title": "Power of Two",
  "category": "Number Theory and Bit Manipulation",
  "route": "/algorithms/bit-manipulation/power-of-two",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "bit-check",
  "icon": "memory",
  "codePath": "./src/algorithms/number-theory-and-bit-manipulation/power-of-two/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "A positive power of two has exactly one set bit in its binary representation.",
  "problem": "A positive power of two has exactly one set bit in its binary representation.",
  "concept": "A positive power of two has exactly one set bit in its binary representation.",
  "logicSummary": "A positive power of two has exactly one set bit in its binary representation.",
  "transitionSummary": "8 = 1000₂ is a power of two; 10 = 1010₂ is not. Check n > 0 before testing (n & (n − 1)) === 0.",
  "codeInsight": "A positive power of two has exactly one set bit in its binary representation.",
  "realLifeExample": "8 = 1000₂ is a power of two; 10 = 1010₂ is not. Check n > 0 before testing (n & (n − 1)) === 0.",
  "whenToUse": "A positive power of two has exactly one set bit in its binary representation.",
  "memoryTrick": "A positive power of two has exactly one set bit in its binary representation.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "A positive power of two has exactly one set bit in its binary representation."
    },
    {
      "title": "Work through a small case",
      "text": "8 = 1000₂ is a power of two; 10 = 1010₂ is not. Check n > 0 before testing (n & (n − 1)) === 0."
    },
    {
      "title": "Check the boundary cases",
      "text": "JavaScript bitwise operators on Number use 32-bit integers. Check non-negative input assumptions and use suitable integer arithmetic for larger values."
    }
  ],
  "variables": [
    {
      "name": "value",
      "purpose": "The number to compute with; recursive routines pass a smaller value to the next call."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "A positive power of two has exactly one set bit in its binary representation.",
      "activeLine": 5,
      "codeInsight": "A positive power of two has exactly one set bit in its binary representation."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "8 = 1000₂ is a power of two; 10 = 1010₂ is not. Check n > 0 before testing (n & (n − 1)) === 0.",
      "activeLine": 6,
      "codeInsight": "A positive power of two has exactly one set bit in its binary representation."
    }
  ],
  "complexity": {
    "time": "O(1) for a fixed-width bit test.",
    "space": "O(1). Require n > 0 and observe the integer width of the implementation."
  },
  "quiz": {
    "question": "Which explanation best describes Power of Two?",
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
        "text": "A positive power of two has exactly one set bit in its binary representation.",
        "correct": true
      }
    ],
    "correctText": "Correct. A positive power of two has exactly one set bit in its binary representation.",
    "incorrectText": "Try again. A positive power of two has exactly one set bit in its binary representation. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "number-theory-and-bit-manipulation",
  "algorithmSlug": "power-of-two",
  "runnerInput": [
    16
  ],
  "animation": {
    "type": "state-flow",
    "title": "Power of Two state transitions",
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
        "ruleLabel": "Power of Two invariant",
        "rule": "Defines powerOfTwo and names the input value; edits to those inputs change the visual state and output.",
        "activeState": 0
      },
      {
        "phase": "Rule",
        "title": "Select math invariant",
        "note": "The chosen identity controls every update.",
        "ruleLabel": "Power of Two invariant",
        "rule": "Defines powerOfTwo and names the input value; edits to those inputs change the visual state and output.",
        "activeState": 1
      },
      {
        "phase": "Reduction",
        "title": "Apply one reduction",
        "note": "A shift, xor, multiply, divide, or mark changes state.",
        "ruleLabel": "Power of Two invariant",
        "rule": "Defines powerOfTwo and names the input value; edits to those inputs change the visual state and output.",
        "activeState": 2
      },
      {
        "phase": "Numeric result",
        "title": "Return numeric result",
        "note": "The loop ends when the invariant gives the answer.",
        "ruleLabel": "Power of Two invariant",
        "rule": "Returns value > 0 && (value & (value - 1)) === 0, the final value maintained by Power of Two's code path.",
        "activeState": 3
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "Each binary position represents a power of two. A mask uses those positions as on/off flags.",
    "family": "Binary digits",
    "example": "8 = 1000₂ is a power of two; 10 = 1010₂ is not. Check n > 0 before testing (n & (n − 1)) === 0.",
    "sampleInput": [
      16
    ],
    "sampleResult": true,
    "sampleScope": "This is the result of the unedited JavaScript function with the sample arguments. Changing the input or code can change the result.",
    "terms": [
      [
        "Bit",
        "One binary digit, either 0 or 1."
      ],
      [
        "Mask",
        "Bits used to select, record, or test positions."
      ],
      [
        "XOR",
        "An operation that gives 1 where two input bits differ."
      ]
    ],
    "pitfall": "JavaScript bitwise operators on Number use 32-bit integers. Check non-negative input assumptions and use suitable integer arithmetic for larger values.",
    "checkpoint": "Explain this in your own words: A positive power of two has exactly one set bit in its binary representation."
  },
  "relatedLinks": []
};
