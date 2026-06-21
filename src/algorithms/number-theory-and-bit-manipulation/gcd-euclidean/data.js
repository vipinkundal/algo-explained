// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "gcd-euclidean",
  "title": "GCD / Euclidean Algorithm",
  "category": "Number Theory and Bit Manipulation",
  "route": "/algorithms/number-theory/gcd-euclidean",
  "phase": 1,
  "priority": "high",
  "visualizerType": "remainder-steps",
  "icon": "memory",
  "codePath": "./src/algorithms/number-theory-and-bit-manipulation/gcd-euclidean/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "GCD / Euclidean Algorithm is a Number Theory and Bit Manipulation technique focused on answer.",
  "problem": "GCD / Euclidean Algorithm solves a Number Theory and Bit Manipulation problem by maintaining only the state needed for its remainder steps transition.",
  "concept": "Number and bit algorithms are useful when arithmetic properties let you skip brute-force work. Use this when divisibility, powers, bits, xor, or modular rules define the answer.",
  "logicSummary": "Read numeric input, keep the relevant arithmetic state, apply the identity, and return the reduced result.",
  "transitionSummary": "Each step applies one arithmetic, modular, or bit operation that preserves the invariant.",
  "codeInsight": "The implementation keeps GCD / Euclidean Algorithm's state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "GCD / Euclidean Algorithm appears when the input is input and the required result is answer.",
  "whenToUse": "Use GCD / Euclidean Algorithm when a problem matches the Number Theory and Bit Manipulation pattern and the expected state changes match a remainder steps dry run.",
  "memoryTrick": "GCD / Euclidean Algorithm: name the invariant, then trace the exact state change.",
  "visualizerCaption": "GCD / Euclidean Algorithm is shown as arithmetic-state reduction. The numbered steps follow the code path used to maintain the main invariant.",
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
      "name": "current remainder pair",
      "purpose": "The pair of numbers updated until the remainder reaches zero."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by gcdEuclidean after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Repeat the remainder steps transition until the stop condition for GCD / Euclidean Algorithm is reached. Stop when no valid work remains or the answer is known."
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
    "question": "Which state choice keeps GCD / Euclidean Algorithm correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through GCD / Euclidean Algorithm's transition.",
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
    "correctText": "Correct. GCD / Euclidean Algorithm stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. GCD / Euclidean Algorithm needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "number-theory-and-bit-manipulation",
  "algorithmSlug": "gcd-euclidean",
  "runnerInput": [
    48,
    18
  ]
};
