// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "count-set-bits",
  "title": "Count Set Bits",
  "category": "Number Theory and Bit Manipulation",
  "route": "/algorithms/bit-manipulation/count-set-bits",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "bit-count",
  "icon": "memory",
  "codePath": "./src/algorithms/number-theory-and-bit-manipulation/count-set-bits/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Counting set bits finds how many binary digits are 1 in an integer.",
  "problem": "Counting set bits finds how many binary digits are 1 in an integer.",
  "concept": "Counting set bits finds how many binary digits are 1 in an integer.",
  "logicSummary": "Counting set bits finds how many binary digits are 1 in an integer.",
  "transitionSummary": "13 = 1101₂ has 3 set bits. Repeatedly applying n & (n − 1) clears one set bit at a time.",
  "codeInsight": "Counting set bits finds how many binary digits are 1 in an integer.",
  "realLifeExample": "13 = 1101₂ has 3 set bits. Repeatedly applying n & (n − 1) clears one set bit at a time.",
  "whenToUse": "Counting set bits finds how many binary digits are 1 in an integer.",
  "memoryTrick": "Counting set bits finds how many binary digits are 1 in an integer.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Counting set bits finds how many binary digits are 1 in an integer."
    },
    {
      "title": "Work through a small case",
      "text": "13 = 1101₂ has 3 set bits. Repeatedly applying n & (n − 1) clears one set bit at a time."
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
    },
    {
      "name": "n",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
    },
    {
      "name": "count",
      "purpose": "Keeps an intermediate value available for later expressions. Follow its assignments and uses in the code-line explanations."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "Counting set bits finds how many binary digits are 1 in an integer.",
      "activeLine": 5,
      "codeInsight": "Counting set bits finds how many binary digits are 1 in an integer."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "13 = 1101₂ has 3 set bits. Repeatedly applying n & (n − 1) clears one set bit at a time.",
      "activeLine": 12,
      "codeInsight": "Counting set bits finds how many binary digits are 1 in an integer."
    }
  ],
  "complexity": {
    "time": "O(b) where b is the number of set bits when clearing one set bit per iteration.",
    "space": "O(1) for fixed-width integers."
  },
  "quiz": {
    "question": "Which explanation best describes Count Set Bits?",
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
        "text": "Counting set bits finds how many binary digits are 1 in an integer.",
        "correct": true
      }
    ],
    "correctText": "Correct. Counting set bits finds how many binary digits are 1 in an integer.",
    "incorrectText": "Try again. Counting set bits finds how many binary digits are 1 in an integer. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "number-theory-and-bit-manipulation",
  "algorithmSlug": "count-set-bits",
  "runnerInput": [
    13
  ],
  "animation": {
    "type": "state-flow",
    "title": "Count Set Bits state transitions",
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
        "ruleLabel": "Count Set Bits invariant",
        "rule": "Defines countSetBits and names the input value; edits to those inputs change the visual state and output.",
        "activeState": 0
      },
      {
        "phase": "Rule",
        "title": "Select math invariant",
        "note": "The chosen identity controls every update.",
        "ruleLabel": "Count Set Bits invariant",
        "rule": "Defines countSetBits and names the input value; edits to those inputs change the visual state and output.",
        "activeState": 1
      },
      {
        "phase": "Reduction",
        "title": "Apply one reduction",
        "note": "A shift, xor, multiply, divide, or mark changes state.",
        "ruleLabel": "Count Set Bits invariant",
        "rule": "Defines countSetBits and names the input value; edits to those inputs change the visual state and output.",
        "activeState": 2
      },
      {
        "phase": "Numeric result",
        "title": "Return numeric result",
        "note": "The loop ends when the invariant gives the answer.",
        "ruleLabel": "Count Set Bits invariant",
        "rule": "Returns count, the final value maintained by Count Set Bits's code path.",
        "activeState": 3
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "Each binary position represents a power of two. A mask uses those positions as on/off flags.",
    "family": "Binary digits",
    "example": "13 = 1101₂ has 3 set bits. Repeatedly applying n & (n − 1) clears one set bit at a time.",
    "sampleInput": [
      13
    ],
    "sampleResult": 3,
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
    "checkpoint": "Explain this in your own words: Counting set bits finds how many binary digits are 1 in an integer."
  },
  "relatedLinks": []
};
