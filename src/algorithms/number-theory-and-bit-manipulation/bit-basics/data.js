// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "bit-basics",
  "title": "Bit Basics",
  "category": "Number Theory and Bit Manipulation",
  "route": "/algorithms/bit-manipulation/bit-basics",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "bit-toggle",
  "icon": "memory",
  "codePath": "./src/algorithms/number-theory-and-bit-manipulation/bit-basics/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Bit operations compare or change the binary digits of integers using AND, OR, XOR, and shifts.",
  "problem": "Bit operations compare or change the binary digits of integers using AND, OR, XOR, and shifts.",
  "concept": "Bit operations compare or change the binary digits of integers using AND, OR, XOR, and shifts.",
  "logicSummary": "Bit operations compare or change the binary digits of integers using AND, OR, XOR, and shifts.",
  "transitionSummary": "6 is 110₂ and 3 is 011₂. Their AND is 010₂ = 2; OR is 111₂ = 7; XOR is 101₂ = 5.",
  "codeInsight": "Bit operations compare or change the binary digits of integers using AND, OR, XOR, and shifts.",
  "realLifeExample": "6 is 110₂ and 3 is 011₂. Their AND is 010₂ = 2; OR is 111₂ = 7; XOR is 101₂ = 5.",
  "whenToUse": "Bit operations compare or change the binary digits of integers using AND, OR, XOR, and shifts.",
  "memoryTrick": "Bit operations compare or change the binary digits of integers using AND, OR, XOR, and shifts.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Bit operations compare or change the binary digits of integers using AND, OR, XOR, and shifts."
    },
    {
      "title": "Work through a small case",
      "text": "6 is 110₂ and 3 is 011₂. Their AND is 010₂ = 2; OR is 111₂ = 7; XOR is 101₂ = 5."
    },
    {
      "title": "Check the boundary cases",
      "text": "JavaScript bitwise operators on Number use 32-bit integers. Check non-negative input assumptions and use suitable integer arithmetic for larger values."
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
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "Bit operations compare or change the binary digits of integers using AND, OR, XOR, and shifts.",
      "activeLine": 5,
      "codeInsight": "Bit operations compare or change the binary digits of integers using AND, OR, XOR, and shifts."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "6 is 110₂ and 3 is 011₂. Their AND is 010₂ = 2; OR is 111₂ = 7; XOR is 101₂ = 5.",
      "activeLine": 6,
      "codeInsight": "Bit operations compare or change the binary digits of integers using AND, OR, XOR, and shifts."
    }
  ],
  "complexity": {
    "time": "O(1) for each operation on the fixed-width integers used by JavaScript bitwise operators.",
    "space": "O(1). JavaScript bitwise operators coerce Number values to 32-bit integers."
  },
  "quiz": {
    "question": "Which explanation best describes Bit Basics?",
    "options": [
      {
        "key": "A",
        "text": "Bit operations compare or change the binary digits of integers using AND, OR, XOR, and shifts.",
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
    "correctText": "Correct. Bit operations compare or change the binary digits of integers using AND, OR, XOR, and shifts.",
    "incorrectText": "Try again. Bit operations compare or change the binary digits of integers using AND, OR, XOR, and shifts. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "number-theory-and-bit-manipulation",
  "algorithmSlug": "bit-basics",
  "runnerInput": [
    6,
    3
  ],
  "animation": {
    "type": "state-flow",
    "title": "Bit Basics state transitions",
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
        "ruleLabel": "Bit Basics invariant",
        "rule": "Defines bitBasics and names the input a, b; edits to those inputs change the visual state and output.",
        "activeState": 0
      },
      {
        "phase": "Rule",
        "title": "Select math invariant",
        "note": "The chosen identity controls every update.",
        "ruleLabel": "Bit Basics invariant",
        "rule": "Defines bitBasics and names the input a, b; edits to those inputs change the visual state and output.",
        "activeState": 1
      },
      {
        "phase": "Reduction",
        "title": "Apply one reduction",
        "note": "A shift, xor, multiply, divide, or mark changes state.",
        "ruleLabel": "Bit Basics invariant",
        "rule": "Defines bitBasics and names the input a, b; edits to those inputs change the visual state and output.",
        "activeState": 2
      },
      {
        "phase": "Numeric result",
        "title": "Return numeric result",
        "note": "The loop ends when the invariant gives the answer.",
        "ruleLabel": "Bit Basics invariant",
        "rule": "Returns the final state object { and: a & b, or: a | b, xor: a ^ b, leftShift: a << 1, rightShift: a >> 1 }, exposing the exact fields the visualizer has been tracking.",
        "activeState": 3
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "Each binary position represents a power of two. A mask uses those positions as on/off flags.",
    "family": "Binary digits",
    "example": "6 is 110₂ and 3 is 011₂. Their AND is 010₂ = 2; OR is 111₂ = 7; XOR is 101₂ = 5.",
    "sampleInput": [
      6,
      3
    ],
    "sampleResult": {
      "and": 2,
      "or": 7,
      "xor": 5,
      "leftShift": 12,
      "rightShift": 3
    },
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
    "checkpoint": "Explain this in your own words: Bit operations compare or change the binary digits of integers using AND, OR, XOR, and shifts."
  },
  "relatedLinks": []
};
