// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "xor-tricks",
  "title": "XOR Tricks",
  "category": "Number Theory and Bit Manipulation",
  "route": "/algorithms/bit-manipulation/xor-tricks",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "xor-cancel",
  "icon": "memory",
  "codePath": "./src/algorithms/number-theory-and-bit-manipulation/xor-tricks/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "XOR keeps bits that differ; equal values cancel and XOR with zero leaves a value unchanged.",
  "problem": "XOR keeps bits that differ; equal values cancel and XOR with zero leaves a value unchanged.",
  "concept": "XOR keeps bits that differ; equal values cancel and XOR with zero leaves a value unchanged.",
  "logicSummary": "XOR keeps bits that differ; equal values cancel and XOR with zero leaves a value unchanged.",
  "transitionSummary": "a XOR a = 0 and a XOR 0 = a. Thus 5 XOR 2 XOR 5 = 2.",
  "codeInsight": "XOR keeps bits that differ; equal values cancel and XOR with zero leaves a value unchanged.",
  "realLifeExample": "a XOR a = 0 and a XOR 0 = a. Thus 5 XOR 2 XOR 5 = 2.",
  "whenToUse": "XOR keeps bits that differ; equal values cancel and XOR with zero leaves a value unchanged.",
  "memoryTrick": "XOR keeps bits that differ; equal values cancel and XOR with zero leaves a value unchanged.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "XOR keeps bits that differ; equal values cancel and XOR with zero leaves a value unchanged."
    },
    {
      "title": "Work through a small case",
      "text": "a XOR a = 0 and a XOR 0 = a. Thus 5 XOR 2 XOR 5 = 2."
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
      "note": "XOR keeps bits that differ; equal values cancel and XOR with zero leaves a value unchanged.",
      "activeLine": 5,
      "codeInsight": "XOR keeps bits that differ; equal values cancel and XOR with zero leaves a value unchanged."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "a XOR a = 0 and a XOR 0 = a. Thus 5 XOR 2 XOR 5 = 2.",
      "activeLine": 6,
      "codeInsight": "XOR keeps bits that differ; equal values cancel and XOR with zero leaves a value unchanged."
    }
  ],
  "complexity": {
    "time": "O(1) per fixed-width XOR, or O(n) for a scan of n values.",
    "space": "O(1) scan state."
  },
  "quiz": {
    "question": "Which explanation best describes XOR Tricks?",
    "options": [
      {
        "key": "A",
        "text": "XOR keeps bits that differ; equal values cancel and XOR with zero leaves a value unchanged.",
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
    "correctText": "Correct. XOR keeps bits that differ; equal values cancel and XOR with zero leaves a value unchanged.",
    "incorrectText": "Try again. XOR keeps bits that differ; equal values cancel and XOR with zero leaves a value unchanged. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "number-theory-and-bit-manipulation",
  "algorithmSlug": "xor-tricks",
  "runnerInput": [
    6,
    3
  ],
  "animation": {
    "type": "state-flow",
    "title": "XOR Tricks state transitions",
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
        "ruleLabel": "XOR Tricks invariant",
        "rule": "Defines xorTricks and names the input a, b; edits to those inputs change the visual state and output.",
        "activeState": 0
      },
      {
        "phase": "Rule",
        "title": "Select math invariant",
        "note": "The chosen identity controls every update.",
        "ruleLabel": "XOR Tricks invariant",
        "rule": "Defines xorTricks and names the input a, b; edits to those inputs change the visual state and output.",
        "activeState": 1
      },
      {
        "phase": "Reduction",
        "title": "Apply one reduction",
        "note": "A shift, xor, multiply, divide, or mark changes state.",
        "ruleLabel": "XOR Tricks invariant",
        "rule": "Defines xorTricks and names the input a, b; edits to those inputs change the visual state and output.",
        "activeState": 2
      },
      {
        "phase": "Numeric result",
        "title": "Return numeric result",
        "note": "The loop ends when the invariant gives the answer.",
        "ruleLabel": "XOR Tricks invariant",
        "rule": "Returns the final state object { xor: a ^ b, withoutTempSwap: [b, a], toggledLowestBit: a ^ 1 }, exposing the exact fields the visualizer has been tracking.",
        "activeState": 3
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "Each binary position represents a power of two. A mask uses those positions as on/off flags.",
    "family": "Binary digits",
    "example": "a XOR a = 0 and a XOR 0 = a. Thus 5 XOR 2 XOR 5 = 2.",
    "sampleInput": [
      6,
      3
    ],
    "sampleResult": {
      "xor": 5,
      "withoutTempSwap": [
        3,
        6
      ],
      "toggledLowestBit": 7
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
    "checkpoint": "Explain this in your own words: XOR keeps bits that differ; equal values cancel and XOR with zero leaves a value unchanged."
  },
  "relatedLinks": []
};
