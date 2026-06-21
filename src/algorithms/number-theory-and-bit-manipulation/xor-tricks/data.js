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
  "meaning": "XOR Tricks is a Number Theory and Bit Manipulation technique focused on answer.",
  "problem": "XOR Tricks solves a Number Theory and Bit Manipulation problem by maintaining only the state needed for its xor cancel transition.",
  "concept": "Number and bit algorithms are useful when arithmetic properties let you skip brute-force work. Use this when divisibility, powers, bits, xor, or modular rules define the answer.",
  "logicSummary": "Read numeric input, keep the relevant arithmetic state, apply the identity, and return the reduced result.",
  "transitionSummary": "Each step applies one arithmetic, modular, or bit operation that preserves the invariant.",
  "codeInsight": "The implementation keeps XOR Tricks' state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "XOR Tricks appears when the input is input and the required result is answer.",
  "whenToUse": "Use XOR Tricks when a problem matches the Number Theory and Bit Manipulation pattern and the expected state changes match a xor cancel dry run.",
  "memoryTrick": "XOR Tricks: name the invariant, then trace the exact state change.",
  "visualizerCaption": "XOR Tricks is shown as arithmetic-state reduction. The numbered steps follow the code path used to maintain the main invariant.",
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
      "name": "xor accumulator",
      "purpose": "The running xor value where duplicate bits cancel out."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by xorTricks after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Repeat the xor cancel transition until the stop condition for XOR Tricks is reached. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Numbers",
      "title": "Read numeric state",
      "note": "The code receives the number, range, or modulus.",
      "activeLine": 5,
      "codeInsight": "Defines xorTricks and names the input a, b; edits to those inputs change the visual state and output."
    },
    {
      "label": "Rule",
      "title": "Select math invariant",
      "note": "The chosen identity controls every update.",
      "activeLine": 3,
      "codeInsight": "Executes this XOR Tricks line as part of the highlighted code path, linking the visual step to the implementation."
    },
    {
      "label": "Reduction",
      "title": "Apply one reduction",
      "note": "A shift, xor, multiply, divide, or mark changes state.",
      "activeLine": 5,
      "codeInsight": "Defines xorTricks and names the input a, b; edits to those inputs change the visual state and output."
    },
    {
      "label": "Numeric result",
      "title": "Return numeric result",
      "note": "The loop ends when the invariant gives the answer.",
      "activeLine": 6,
      "codeInsight": "Returns { xor: a ^ b, withoutTempSwap: [b, a], toggledLowestBit: a ^ 1 }, the value produced after XOR Tricks's state changes are complete."
    }
  ],
  "complexity": {
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps XOR Tricks correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through XOR Tricks' transition.",
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
    "correctText": "Correct. XOR Tricks stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. XOR Tricks needs its own input, state, answer, and condition rather than another algorithm's page structure."
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
        "rule": "Executes this XOR Tricks line as part of the highlighted code path, linking the visual step to the implementation.",
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
        "rule": "Returns { xor: a ^ b, withoutTempSwap: [b, a], toggledLowestBit: a ^ 1 }, the value produced after XOR Tricks's state changes are complete.",
        "activeState": 3
      }
    ]
  }
};
