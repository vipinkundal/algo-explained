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
  "meaning": "Fast Power is a Number Theory and Bit Manipulation technique focused on answer.",
  "problem": "Fast Power solves a Number Theory and Bit Manipulation problem by maintaining only the state needed for its binary power transition.",
  "concept": "Number and bit algorithms are useful when arithmetic properties let you skip brute-force work. Use this when divisibility, powers, bits, xor, or modular rules define the answer.",
  "logicSummary": "Read numeric input, keep the relevant arithmetic state, apply the identity, and return the reduced result.",
  "transitionSummary": "Each step applies one arithmetic, modular, or bit operation that preserves the invariant.",
  "codeInsight": "The implementation keeps Fast Power's state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "Fast Power appears when the input is input and the required result is answer.",
  "whenToUse": "Use Fast Power when a problem matches the Number Theory and Bit Manipulation pattern and the expected state changes match a binary power dry run.",
  "memoryTrick": "Fast Power: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Fast Power is shown as arithmetic-state reduction. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Read numbers",
      "text": "Identify the integer, range, or modulus."
    },
    {
      "title": "Set invariant",
      "text": "Choose the arithmetic or bit rule."
    },
    {
      "title": "Apply operation",
      "text": "Shift, xor, divide, multiply, or mark values."
    },
    {
      "title": "Return result",
      "text": "Return the reduced number or boolean answer."
    }
  ],
  "variables": [
    {
      "name": "value, other",
      "purpose": "value: The numeric or collection input used by the bit, math, or foundation routine. other: The numeric or collection input used by the bit, math, or foundation routine."
    },
    {
      "name": "numeric invariant",
      "purpose": "The remainder, bit mask, power, xor, or primality state updated each step. This page visualizes it as binary power."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by fastPower after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Repeat the binary power transition until the stop condition for Fast Power is reached. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Numbers",
      "title": "Read numeric state",
      "note": "The code receives the number, range, or modulus.",
      "activeLine": 1,
      "codeInsight": "The code receives the number, range, or modulus."
    },
    {
      "label": "Rule",
      "title": "Select math invariant",
      "note": "The chosen identity controls every update.",
      "activeLine": 3,
      "codeInsight": "The chosen identity controls every update."
    },
    {
      "label": "Reduction",
      "title": "Apply one reduction",
      "note": "A shift, xor, multiply, divide, or mark changes state.",
      "activeLine": 5,
      "codeInsight": "A shift, xor, multiply, divide, or mark changes state."
    },
    {
      "label": "Numeric result",
      "title": "Return numeric result",
      "note": "The loop ends when the invariant gives the answer.",
      "activeLine": 8,
      "codeInsight": "The loop ends when the invariant gives the answer."
    }
  ],
  "complexity": {
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps Fast Power correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Fast Power's transition.",
        "correct": true
      },
      {
        "key": "B",
        "text": "Reuse a different algorithm's state names even when the transition is different.",
        "correct": false
      },
      {
        "key": "C",
        "text": "Return before checking the algorithm-specific stop condition.",
        "correct": false
      }
    ],
    "correctText": "Correct. Fast Power stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Fast Power needs its own input, state, answer, and condition rather than another algorithm's page structure."
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
        "rule": "The code receives the number, range, or modulus.",
        "activeState": 0
      },
      {
        "phase": "Rule",
        "title": "Select math invariant",
        "note": "The chosen identity controls every update.",
        "ruleLabel": "Fast Power invariant",
        "rule": "The chosen identity controls every update.",
        "activeState": 1
      },
      {
        "phase": "Reduction",
        "title": "Apply one reduction",
        "note": "A shift, xor, multiply, divide, or mark changes state.",
        "ruleLabel": "Fast Power invariant",
        "rule": "A shift, xor, multiply, divide, or mark changes state.",
        "activeState": 2
      },
      {
        "phase": "Numeric result",
        "title": "Return numeric result",
        "note": "The loop ends when the invariant gives the answer.",
        "ruleLabel": "Fast Power invariant",
        "rule": "The loop ends when the invariant gives the answer.",
        "activeState": 3
      }
    ]
  }
};
