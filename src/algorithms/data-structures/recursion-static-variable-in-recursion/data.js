// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-recursion-static-variable-in-recursion",
  "title": "Static Variable In Recursion",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Recursion",
  "sourceFolder": "03_recursion",
  "sourceFile": "02_static_variable_in_recursion.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/recursion-static-variable-in-recursion",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "call-stack",
  "icon": "account_tree",
  "codePath": "./src/algorithms/data-structures/recursion-static-variable-in-recursion/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/recursion-static-variable-in-recursion/code/original.cpp",
  "originalCodeFilename": "02_static_variable_in_recursion.cpp",
  "originalActiveLine": 2,
  "meaning": "Static Variable In Recursion shows how data is organized, changed, and inspected through a small browser demo with a C/C++ reference available beside it.",
  "problem": "Static Variable In Recursion explains the recursive call state model and how one focused change updates it.",
  "concept": "Static Variable In Recursion is useful when stack behavior is the clearest model for the data changes. Use this when the problem is naturally described by last-in, first-out state.",
  "logicSummary": "Read the next value or operation, maintain last-in, first-out state, then push, pop, peek, or resolve stack entries.",
  "transitionSummary": "Each step changes only the part of the stack required to preserve the invariant.",
  "codeInsight": "Use the Runnable JS tab to edit inputs and see browser-safe output. Use the C/C++ Reference tab to study the source implementation.",
  "originalCodeInsight": "The C/C++ reference Static Variable In Recursion source shows the C/C++ memory model and operation order used by this lesson.",
  "realLifeExample": "Static Variable In Recursion is useful when you need to understand the mechanics behind library-level data structures.",
  "whenToUse": "Use this page when learning Recursion behavior through state changes instead of memorized code.",
  "memoryTrick": "Static Variable In Recursion: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Static Variable In Recursion is shown as stack state changes. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Read stack",
      "text": "Identify the next command, value, node, or library call."
    },
    {
      "title": "Inspect stack top",
      "text": "Look at the active stack fields."
    },
    {
      "title": "Push / pop",
      "text": "push, pop, peek, or resolve stack entries."
    },
    {
      "title": "Read result",
      "text": "Return the emitted value or updated structure."
    }
  ],
  "variables": [
    {
      "name": "call input",
      "purpose": "The value passed into the current recursive call."
    },
    {
      "name": "base guard",
      "purpose": "Stops the recursion when the smallest case is reached."
    },
    {
      "name": "return trail",
      "purpose": "Records values while calls unwind."
    },
    {
      "name": "final value",
      "purpose": "The answer produced by Static Variable In Recursion."
    }
  ],
  "dryRun": [
    {
      "label": "Stack",
      "title": "Read stack action",
      "note": "The code receives the next value or command.",
      "activeLine": 2,
      "codeInsight": "Defines recursionStaticVariableInRecursion and names the input n = 5; edits to those inputs change the visual state and output."
    },
    {
      "label": "Stack top",
      "title": "Inspect stack",
      "note": "The active state must still satisfy last-in, first-out state.",
      "activeLine": 3,
      "codeInsight": "Seeds calls with the sample values shown in the visualizer, giving the trace concrete cells to inspect."
    },
    {
      "label": "Push / pop",
      "title": "Push, pop, peek, or resolve stack entries",
      "note": "Only the necessary stack fields are changed.",
      "activeLine": 5,
      "codeInsight": "Adds the current value to calls, keeping it available for later comparisons or traversal."
    },
    {
      "label": "Result",
      "title": "Return visible result",
      "note": "The return value or printed state confirms the operation.",
      "activeLine": 6,
      "codeInsight": "Returns value <= 1 ? 1 : value * factorial(value - 1), the final value maintained by Static Variable In Recursion's code path."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying Static Variable In Recursion?",
    "options": [
      {
        "key": "A",
        "text": "The memory/state representation and invariant.",
        "correct": true
      },
      {
        "key": "B",
        "text": "Only the final cout output.",
        "correct": false
      },
      {
        "key": "C",
        "text": "A different algorithm with the same name.",
        "correct": false
      }
    ],
    "correctKey": "A",
    "correctText": "Correct. Data-structure code is easiest to understand when the state representation is clear first.",
    "incorrectText": "Not quite. Start with the structure state, then follow the operation that mutates or reads it."
  },
  "relatedAlgorithmIds": [
    "recursion-basics"
  ],
  "relatedLinks": [
    {
      "id": "recursion-basics",
      "title": "Recursion Basics",
      "label": "Existing algorithm lesson"
    }
  ],
  "runnerInput": [],
  "categorySlug": "data-structures",
  "algorithmSlug": "recursion-static-variable-in-recursion",
  "animation": {
    "type": "recursion-flow",
    "title": "Static Variable In Recursion call stack",
    "ruleLabel": "Recursive contract",
    "rule": "Each step changes only the part of the stack required to preserve the invariant.",
    "calls": [
      "recursion-static-variable-in-recursion(3)",
      "recursion-static-variable-in-recursion(2)",
      "recursion-static-variable-in-recursion(1)",
      "base case"
    ],
    "steps": [
      {
        "phase": "Stack",
        "title": "Read stack action",
        "note": "The code receives the next value or command.",
        "ruleLabel": "Static Variable In Recursion invariant",
        "rule": "Defines recursionStaticVariableInRecursion and names the input n = 5; edits to those inputs change the visual state and output.",
        "activeCall": 0,
        "returningCalls": []
      },
      {
        "phase": "Stack top",
        "title": "Inspect stack",
        "note": "The active state must still satisfy last-in, first-out state.",
        "ruleLabel": "Static Variable In Recursion invariant",
        "rule": "Seeds calls with the sample values shown in the visualizer, giving the trace concrete cells to inspect.",
        "activeCall": 1,
        "returningCalls": []
      },
      {
        "phase": "Push / pop",
        "title": "Push, pop, peek, or resolve stack entries",
        "note": "Only the necessary stack fields are changed.",
        "ruleLabel": "Static Variable In Recursion invariant",
        "rule": "Adds the current value to calls, keeping it available for later comparisons or traversal.",
        "activeCall": 2,
        "returningCalls": []
      },
      {
        "phase": "Result",
        "title": "Return visible result",
        "note": "The return value or printed state confirms the operation.",
        "ruleLabel": "Static Variable In Recursion invariant",
        "rule": "Returns value <= 1 ? 1 : value * factorial(value - 1), the final value maintained by Static Variable In Recursion's code path.",
        "activeCall": 3,
        "returningCalls": [
          0,
          1,
          2,
          3
        ]
      }
    ]
  }
};
