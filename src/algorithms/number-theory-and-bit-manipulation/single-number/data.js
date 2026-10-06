// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "single-number",
  "title": "Single Number",
  "category": "Number Theory and Bit Manipulation",
  "route": "/algorithms/bit-manipulation/single-number",
  "phase": 1,
  "priority": "high",
  "visualizerType": "xor-cancel",
  "icon": "memory",
  "codePath": "./src/algorithms/number-theory-and-bit-manipulation/single-number/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "XOR cancels paired equal integers, leaving the one unpaired value when all other values occur twice.",
  "problem": "XOR cancels paired equal integers, leaving the one unpaired value when all other values occur twice.",
  "concept": "XOR cancels paired equal integers, leaving the one unpaired value when all other values occur twice.",
  "logicSummary": "XOR cancels paired equal integers, leaving the one unpaired value when all other values occur twice.",
  "transitionSummary": "[4, 1, 4] gives 4 XOR 1 XOR 4 = 1. This rule depends on the paired-occurrence assumption.",
  "codeInsight": "XOR cancels paired equal integers, leaving the one unpaired value when all other values occur twice.",
  "realLifeExample": "[4, 1, 4] gives 4 XOR 1 XOR 4 = 1. This rule depends on the paired-occurrence assumption.",
  "whenToUse": "XOR cancels paired equal integers, leaving the one unpaired value when all other values occur twice.",
  "memoryTrick": "XOR cancels paired equal integers, leaving the one unpaired value when all other values occur twice.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "XOR cancels paired equal integers, leaving the one unpaired value when all other values occur twice."
    },
    {
      "title": "Work through a small case",
      "text": "[4, 1, 4] gives 4 XOR 1 XOR 4 = 1. This rule depends on the paired-occurrence assumption."
    },
    {
      "title": "Check the boundary cases",
      "text": "JavaScript bitwise operators on Number use 32-bit integers. Check non-negative input assumptions and use suitable integer arithmetic for larger values."
    }
  ],
  "variables": [
    {
      "name": "values",
      "purpose": "The collection to process. Its length tells the routine how many input items are available."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "XOR cancels paired equal integers, leaving the one unpaired value when all other values occur twice.",
      "activeLine": 5,
      "codeInsight": "XOR cancels paired equal integers, leaving the one unpaired value when all other values occur twice."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "[4, 1, 4] gives 4 XOR 1 XOR 4 = 1. This rule depends on the paired-occurrence assumption.",
      "activeLine": 6,
      "codeInsight": "XOR cancels paired equal integers, leaving the one unpaired value when all other values occur twice."
    }
  ],
  "complexity": {
    "time": "O(n) for one XOR scan when all other values occur exactly twice.",
    "space": "O(1) auxiliary state for fixed-width integers."
  },
  "quiz": {
    "question": "Which explanation best describes Single Number?",
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
        "text": "XOR cancels paired equal integers, leaving the one unpaired value when all other values occur twice.",
        "correct": true
      }
    ],
    "correctText": "Correct. XOR cancels paired equal integers, leaving the one unpaired value when all other values occur twice.",
    "incorrectText": "Try again. XOR cancels paired equal integers, leaving the one unpaired value when all other values occur twice. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "number-theory-and-bit-manipulation",
  "algorithmSlug": "single-number",
  "runnerInput": [
    [
      2,
      2,
      1
    ]
  ],
  "animation": {
    "type": "state-flow",
    "title": "Single Number state transitions",
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
        "ruleLabel": "Single Number invariant",
        "rule": "Defines singleNumber and names the input values; edits to those inputs change the visual state and output.",
        "activeState": 0
      },
      {
        "phase": "Rule",
        "title": "Select math invariant",
        "note": "The chosen identity controls every update.",
        "ruleLabel": "Single Number invariant",
        "rule": "Defines singleNumber and names the input values; edits to those inputs change the visual state and output.",
        "activeState": 1
      },
      {
        "phase": "Reduction",
        "title": "Apply one reduction",
        "note": "A shift, xor, multiply, divide, or mark changes state.",
        "ruleLabel": "Single Number invariant",
        "rule": "Defines singleNumber and names the input values; edits to those inputs change the visual state and output.",
        "activeState": 2
      },
      {
        "phase": "Numeric result",
        "title": "Return numeric result",
        "note": "The loop ends when the invariant gives the answer.",
        "ruleLabel": "Single Number invariant",
        "rule": "Returns values.reduce((answer, value) => answer ^ value, 0), the final value maintained by Single Number's code path.",
        "activeState": 3
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "Each binary position represents a power of two. A mask uses those positions as on/off flags.",
    "family": "Binary digits",
    "example": "[4, 1, 4] gives 4 XOR 1 XOR 4 = 1. This rule depends on the paired-occurrence assumption.",
    "sampleInput": [
      [
        2,
        2,
        1
      ]
    ],
    "sampleResult": 1,
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
    "checkpoint": "Explain this in your own words: XOR cancels paired equal integers, leaving the one unpaired value when all other values occur twice."
  },
  "relatedLinks": []
};
