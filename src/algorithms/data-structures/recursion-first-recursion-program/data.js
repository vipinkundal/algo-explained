// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-recursion-first-recursion-program",
  "title": "First Recursion Program",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Recursion",
  "sourceFolder": "03_recursion",
  "sourceFile": "01_first_recursion_program.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/recursion-first-recursion-program",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "call-stack",
  "icon": "account_tree",
  "codePath": "./src/algorithms/data-structures/recursion-first-recursion-program/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/recursion-first-recursion-program/code/original.cpp",
  "originalCodeFilename": "01_first_recursion_program.cpp",
  "originalActiveLine": 4,
  "meaning": "A recursive function calls itself with a smaller input and stops at a base case.",
  "problem": "A recursive function calls itself with a smaller input and stops at a base case.",
  "concept": "A recursive function calls itself with a smaller input and stops at a base case.",
  "logicSummary": "A recursive function calls itself with a smaller input and stops at a base case.",
  "transitionSummary": "count(3) can print 3, call count(2), then count(1), and stop at 0.",
  "codeInsight": "A recursive function calls itself with a smaller input and stops at a base case.",
  "originalCodeInsight": "The C/C++ reference First Recursion Program source shows the C/C++ memory model and operation order used by this lesson.",
  "realLifeExample": "count(3) can print 3, call count(2), then count(1), and stop at 0.",
  "whenToUse": "A recursive function calls itself with a smaller input and stops at a base case.",
  "memoryTrick": "A recursive function calls itself with a smaller input and stops at a base case.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "A recursive function calls itself with a smaller input and stops at a base case."
    },
    {
      "title": "Work through a small case",
      "text": "count(3) can print 3, call count(2), then count(1), and stop at 0."
    },
    {
      "title": "Check the boundary cases",
      "text": "Every recursive path must move toward a base case. Count call-stack memory as well as any explicit arrays."
    }
  ],
  "variables": [
    {
      "name": "n = 5",
      "purpose": "The input size or numeric limit; check the function signature and sample to see its role here."
    },
    {
      "name": "calls",
      "purpose": "Keeps a sequence of sample or working values for the following operations."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "A recursive function calls itself with a smaller input and stops at a base case.",
      "activeLine": 2,
      "codeInsight": "A recursive function calls itself with a smaller input and stops at a base case."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "count(3) can print 3, call count(2), then count(1), and stop at 0.",
      "activeLine": 6,
      "codeInsight": "A recursive function calls itself with a smaller input and stops at a base case."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying First Recursion Program?",
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
  "algorithmSlug": "recursion-first-recursion-program",
  "animation": {
    "type": "recursion-flow",
    "title": "First Recursion Program call stack",
    "ruleLabel": "Recursive contract",
    "rule": "Each step changes only the part of the stack required to preserve the invariant.",
    "calls": [
      "recursion-first-recursion-program(3)",
      "recursion-first-recursion-program(2)",
      "recursion-first-recursion-program(1)",
      "base case"
    ],
    "steps": [
      {
        "phase": "Stack",
        "title": "Read stack action",
        "note": "The code receives the next value or command.",
        "ruleLabel": "First Recursion Program invariant",
        "rule": "Defines recursionFirstRecursionProgram and names the input n = 5; edits to those inputs change the visual state and output.",
        "activeCall": 0,
        "returningCalls": []
      },
      {
        "phase": "Stack top",
        "title": "Inspect stack",
        "note": "The active state must still satisfy last-in, first-out state.",
        "ruleLabel": "First Recursion Program invariant",
        "rule": "Seeds calls with the sample values shown in the visualizer, giving the trace concrete cells to inspect.",
        "activeCall": 1,
        "returningCalls": []
      },
      {
        "phase": "Push / pop",
        "title": "Push, pop, peek, or resolve stack entries",
        "note": "Only the necessary stack fields are changed.",
        "ruleLabel": "First Recursion Program invariant",
        "rule": "Adds the current value to calls, keeping it available for later comparisons or traversal.",
        "activeCall": 2,
        "returningCalls": []
      },
      {
        "phase": "Result",
        "title": "Return visible result",
        "note": "The return value or printed state confirms the operation.",
        "ruleLabel": "First Recursion Program invariant",
        "rule": "Returns value <= 1 ? 1 : value * factorial(value - 1), the final value maintained by First Recursion Program's code path.",
        "activeCall": 3,
        "returningCalls": [
          0,
          1,
          2,
          3
        ]
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "Each call remembers its own unfinished work. A base case returns directly; the other calls resume as smaller calls finish.",
    "family": "Recursive calls",
    "example": "count(3) can print 3, call count(2), then count(1), and stop at 0.",
    "sampleInput": [],
    "sampleResult": {
      "pattern": "recursion",
      "calls": [
        5,
        4,
        3,
        2,
        1
      ],
      "result": 120
    },
    "sampleScope": "This runnable JavaScript companion illustrates the data structure. Its returned snapshot may cover fewer operations than the C/C++ reference. The topic example above explains the named operation.",
    "terms": [
      [
        "Base case",
        "An input that returns without another recursive call."
      ],
      [
        "Call frame",
        "The parameters and local work belonging to one call."
      ],
      [
        "Backtracking",
        "Undoing a choice to explore another branch; not every recursion needs it."
      ]
    ],
    "pitfall": "Every recursive path must move toward a base case. Count call-stack memory as well as any explicit arrays.",
    "checkpoint": "Explain this in your own words: A recursive function calls itself with a smaller input and stops at a base case."
  }
};
