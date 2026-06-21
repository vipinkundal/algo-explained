// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "cpp-next-permutation",
  "title": "C++ next_permutation()",
  "category": "C++ STL Algorithm Pages",
  "route": "/algorithms/cpp-stl/next-permutation",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "permutation-step",
  "icon": "school",
  "codePath": "./src/algorithms/c-stl-algorithm-pages/cpp-next-permutation/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "C++ next_permutation() is a C++ STL Algorithm Pages technique focused on answer.",
  "problem": "C++ next_permutation() solves a C++ STL Algorithm Pages problem by maintaining only the state needed for its permutation step transition.",
  "concept": "Recursion and backtracking are useful when a problem branches into smaller choices that share the same rule. Use this when the answer is built by choosing, recursing, and sometimes undoing choices.",
  "logicSummary": "Handle the base case, choose the next option, recurse into smaller state, then combine or undo state.",
  "transitionSummary": "Each step either reaches a base case or moves one level deeper with a smaller decision state.",
  "codeInsight": "The implementation keeps C++ next_permutation()'s state local to this page: initialize it once, update it in the main loop or recursive call, and return the answer directly.",
  "realLifeExample": "C++ next_permutation() appears when the input is input and the required result is answer.",
  "whenToUse": "Use C++ next_permutation() when a problem matches the C++ STL Algorithm Pages pattern and the expected state changes match a permutation step dry run.",
  "memoryTrick": "C++ next_permutation(): name the invariant, then trace the exact state change.",
  "visualizerCaption": "C++ next_permutation() is shown as call/choice state changes. The numbered steps follow the code path used to maintain the main invariant.",
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
      "name": "input",
      "purpose": "The numeric or collection input used by the bit, math, or foundation routine."
    },
    {
      "name": "working state",
      "purpose": "The local state updated by the algorithm transition. This page visualizes it as permutation step."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by cppNextPermutation after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Repeat the permutation step transition until the stop condition for C++ next_permutation() is reached. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Base",
      "title": "Check stop condition",
      "note": "The code first asks whether the current state is complete.",
      "activeLine": 1,
      "codeInsight": "The code first asks whether the current state is complete."
    },
    {
      "label": "Choice",
      "title": "Select next option",
      "note": "One valid move is added to the state.",
      "activeLine": 4,
      "codeInsight": "One valid move is added to the state."
    },
    {
      "label": "Call",
      "title": "Recurse deeper",
      "note": "The same rule runs on a smaller or extended state.",
      "activeLine": 6,
      "codeInsight": "The same rule runs on a smaller or extended state."
    },
    {
      "label": "Unwind",
      "title": "Return or backtrack",
      "note": "The result is combined or the choice is removed.",
      "activeLine": 9,
      "codeInsight": "The result is combined or the choice is removed."
    }
  ],
  "complexity": {
    "time": "Depends on the finalized input size and transition count.",
    "space": "Depends on the auxiliary state maintained by the implementation."
  },
  "quiz": {
    "question": "Which state choice keeps C++ next_permutation() correct?",
    "options": [
      {
        "key": "A",
        "text": "Track state and update it only through C++ next_permutation()'s transition.",
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
    "correctText": "Correct. C++ next_permutation() stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. C++ next_permutation() needs its own input, state, answer, and condition rather than another algorithm's page structure."
  },
  "categorySlug": "c-stl-algorithm-pages",
  "algorithmSlug": "cpp-next-permutation",
  "runnerInput": [
    [
      1,
      2,
      3
    ]
  ],
  "animation": {
    "type": "state-flow",
    "title": "C++ next_permutation() state transitions",
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
        "note": "The code first asks whether the current state is complete.",
        "ruleLabel": "C++ next_permutation() invariant",
        "rule": "The code first asks whether the current state is complete.",
        "activeState": 0
      },
      {
        "phase": "Choice",
        "title": "Select next option",
        "note": "One valid move is added to the state.",
        "ruleLabel": "C++ next_permutation() invariant",
        "rule": "One valid move is added to the state.",
        "activeState": 1
      },
      {
        "phase": "Call",
        "title": "Recurse deeper",
        "note": "The same rule runs on a smaller or extended state.",
        "ruleLabel": "C++ next_permutation() invariant",
        "rule": "The same rule runs on a smaller or extended state.",
        "activeState": 2
      },
      {
        "phase": "Unwind",
        "title": "Return or backtrack",
        "note": "The result is combined or the choice is removed.",
        "ruleLabel": "C++ next_permutation() invariant",
        "rule": "The result is combined or the choice is removed.",
        "activeState": 3
      }
    ]
  }
};
