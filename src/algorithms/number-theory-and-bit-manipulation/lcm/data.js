// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "lcm",
  "title": "LCM",
  "category": "Number Theory and Bit Manipulation",
  "route": "/algorithms/number-theory/lcm",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "formula-card",
  "icon": "memory",
  "codePath": "./src/algorithms/number-theory-and-bit-manipulation/lcm/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "LCM is a Number Theory and Bit Manipulation technique focused on answer.",
  "problem": "LCM solves a Number Theory and Bit Manipulation problem by maintaining only the state needed for its formula card transition.",
  "concept": "Number and bit algorithms are useful when arithmetic properties let you skip brute-force work. Use this when divisibility, powers, bits, xor, or modular rules define the answer.",
  "logicSummary": "Read numeric input, keep the relevant arithmetic state, apply the identity, and return the reduced result.",
  "transitionSummary": "Each step applies one arithmetic, modular, or bit operation that preserves the invariant.",
  "codeInsight": "The implementation keeps LCM's state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "LCM appears when the input is input and the required result is answer.",
  "whenToUse": "Use LCM when a problem matches the Number Theory and Bit Manipulation pattern and the expected state changes match a formula card dry run.",
  "memoryTrick": "LCM: name the invariant, then trace the exact state change.",
  "visualizerCaption": "LCM is shown as arithmetic-state reduction. The numbered steps follow the code path used to maintain the main invariant.",
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
      "purpose": "The remainder, bit mask, power, xor, or primality state updated each step. This page visualizes it as formula card."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by lcm after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Repeat the formula card transition until the stop condition for LCM is reached. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Numbers",
      "title": "Read numeric state",
      "note": "The code receives the number, range, or modulus.",
      "activeLine": 6,
      "codeInsight": "Computes gcd from the current values before the algorithm decides the next move."
    },
    {
      "label": "Rule",
      "title": "Select math invariant",
      "note": "The chosen identity controls every update.",
      "activeLine": 5,
      "codeInsight": "Defines lcm and names the input a, b; edits to those inputs change the visual state and output."
    },
    {
      "label": "Reduction",
      "title": "Apply one reduction",
      "note": "A shift, xor, multiply, divide, or mark changes state.",
      "activeLine": 5,
      "codeInsight": "Defines lcm and names the input a, b; edits to those inputs change the visual state and output."
    },
    {
      "label": "Numeric result",
      "title": "Return numeric result",
      "note": "The loop ends when the invariant gives the answer.",
      "activeLine": 7,
      "codeInsight": "Returns a === 0 || b === 0 ? 0 : Math.abs(a * b) / gcd(a, b), the final value maintained by LCM's code path."
    }
  ],
  "complexity": {
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps LCM correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through LCM's transition.",
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
    "correctText": "Correct. LCM stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. LCM needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "number-theory-and-bit-manipulation",
  "algorithmSlug": "lcm",
  "runnerInput": [
    4,
    6
  ],
  "animation": {
    "type": "state-flow",
    "title": "LCM state transitions",
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
        "ruleLabel": "LCM invariant",
        "rule": "Computes gcd from the current values before the algorithm decides the next move.",
        "activeState": 0
      },
      {
        "phase": "Rule",
        "title": "Select math invariant",
        "note": "The chosen identity controls every update.",
        "ruleLabel": "LCM invariant",
        "rule": "Defines lcm and names the input a, b; edits to those inputs change the visual state and output.",
        "activeState": 1
      },
      {
        "phase": "Reduction",
        "title": "Apply one reduction",
        "note": "A shift, xor, multiply, divide, or mark changes state.",
        "ruleLabel": "LCM invariant",
        "rule": "Defines lcm and names the input a, b; edits to those inputs change the visual state and output.",
        "activeState": 2
      },
      {
        "phase": "Numeric result",
        "title": "Return numeric result",
        "note": "The loop ends when the invariant gives the answer.",
        "ruleLabel": "LCM invariant",
        "rule": "Returns a === 0 || b === 0 ? 0 : Math.abs(a * b) / gcd(a, b), the final value maintained by LCM's code path.",
        "activeState": 3
      }
    ]
  }
};
