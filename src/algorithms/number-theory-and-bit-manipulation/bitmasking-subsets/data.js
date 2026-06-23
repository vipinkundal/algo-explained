// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "bitmasking-subsets",
  "title": "Bitmasking for Subsets",
  "category": "Number Theory and Bit Manipulation",
  "route": "/algorithms/bit-manipulation/bitmasking-subsets",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "subset-mask",
  "icon": "memory",
  "codePath": "./src/algorithms/number-theory-and-bit-manipulation/bitmasking-subsets/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Bitmasking for Subsets is a Number Theory and Bit Manipulation technique focused on answer.",
  "problem": "Bitmasking for Subsets solves a Number Theory and Bit Manipulation problem by maintaining only the state needed for its subset mask transition.",
  "concept": "Recursion and backtracking are useful when a problem branches into smaller choices that share the same rule. Use this when the answer is built by choosing, recursing, and sometimes undoing choices.",
  "logicSummary": "Handle the base case, choose the next option, recurse into smaller state, then combine or undo state.",
  "transitionSummary": "Each step either reaches a base case or moves one level deeper with a smaller decision state.",
  "codeInsight": "The implementation keeps Bitmasking for Subsets' state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "Bitmasking for Subsets appears when the input is input and the required result is answer.",
  "whenToUse": "Use Bitmasking for Subsets when a problem matches the Number Theory and Bit Manipulation pattern and the expected state changes match a subset mask dry run.",
  "memoryTrick": "Bitmasking for Subsets: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Bitmasking for Subsets is shown as call/choice state changes. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Base case",
      "text": "Stop when the current state is complete or invalid."
    },
    {
      "title": "Choose option",
      "text": "Pick the next valid branch."
    },
    {
      "title": "Recurse",
      "text": "Solve the smaller state."
    },
    {
      "title": "Return or undo",
      "text": "Collect the result or backtrack before the next choice."
    }
  ],
  "variables": [
    {
      "name": "value, other",
      "purpose": "value: The numeric or collection input used by the bit, math, or foundation routine. other: The numeric or collection input used by the bit, math, or foundation routine."
    },
    {
      "name": "numeric invariant",
      "purpose": "The remainder, bit mask, power, xor, or primality state updated each step. This page visualizes it as subset mask."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by bitmaskingSubsets after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Repeat the subset mask transition until the stop condition for Bitmasking for Subsets is reached. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Base",
      "title": "Check stop condition",
      "note": "The entry step names the function inputs before the trace checks base cases or expands choices.",
      "activeLine": 5,
      "codeInsight": "Defines bitmaskingSubsets and names the input values; edits to those inputs change the visual state and output."
    },
    {
      "label": "Choice",
      "title": "Select next option",
      "note": "One valid move is added to the state.",
      "activeLine": 5,
      "codeInsight": "Defines bitmaskingSubsets and names the input values; edits to those inputs change the visual state and output."
    },
    {
      "label": "Call",
      "title": "Recurse deeper",
      "note": "The same rule runs on a smaller or extended state.",
      "activeLine": 6,
      "codeInsight": "Seeds result with the sample values shown in the visualizer, giving the trace concrete cells to inspect."
    },
    {
      "label": "Unwind",
      "title": "Return or backtrack",
      "note": "The result is combined or the choice is removed.",
      "activeLine": 12,
      "codeInsight": "Returns result, the final value maintained by Bitmasking for Subsets's code path."
    }
  ],
  "complexity": {
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps Bitmasking for Subsets correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through Bitmasking for Subsets' transition.",
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
    "correctText": "Correct. Bitmasking for Subsets stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Bitmasking for Subsets needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "number-theory-and-bit-manipulation",
  "algorithmSlug": "bitmasking-subsets",
  "runnerInput": [
    [
      1,
      2
    ]
  ],
  "animation": {
    "type": "state-flow",
    "title": "Bitmasking for Subsets state transitions",
    "ruleLabel": "State rule",
    "rule": "Each step either reaches a base case or moves one level deeper with a smaller decision state.",
    "states": [
      "Base",
      "Choice",
      "Call",
      "Unwind"
    ],
    "steps": [
      {
        "phase": "Base",
        "title": "Check stop condition",
        "note": "The entry step names the function inputs before the trace checks base cases or expands choices.",
        "ruleLabel": "Bitmasking for Subsets invariant",
        "rule": "Defines bitmaskingSubsets and names the input values; edits to those inputs change the visual state and output.",
        "activeState": 0
      },
      {
        "phase": "Choice",
        "title": "Select next option",
        "note": "One valid move is added to the state.",
        "ruleLabel": "Bitmasking for Subsets invariant",
        "rule": "Defines bitmaskingSubsets and names the input values; edits to those inputs change the visual state and output.",
        "activeState": 1
      },
      {
        "phase": "Call",
        "title": "Recurse deeper",
        "note": "The same rule runs on a smaller or extended state.",
        "ruleLabel": "Bitmasking for Subsets invariant",
        "rule": "Seeds result with the sample values shown in the visualizer, giving the trace concrete cells to inspect.",
        "activeState": 2
      },
      {
        "phase": "Unwind",
        "title": "Return or backtrack",
        "note": "The result is combined or the choice is removed.",
        "ruleLabel": "Bitmasking for Subsets invariant",
        "rule": "Returns result, the final value maintained by Bitmasking for Subsets's code path.",
        "activeState": 3
      }
    ]
  }
};
