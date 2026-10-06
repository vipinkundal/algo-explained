// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-recursion-indirect-recursion",
  "title": "Indirect Recursion",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Recursion",
  "sourceFolder": "03_recursion",
  "sourceFile": "04_indirect_recursion.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/recursion-indirect-recursion",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "call-stack",
  "icon": "account_tree",
  "codePath": "./src/algorithms/data-structures/recursion-indirect-recursion/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/recursion-indirect-recursion/code/original.cpp",
  "originalCodeFilename": "04_indirect_recursion.cpp",
  "originalActiveLine": 3,
  "meaning": "Indirect recursion happens when functions call each other in a cycle.",
  "problem": "Indirect recursion happens when functions call each other in a cycle.",
  "concept": "Indirect recursion happens when functions call each other in a cycle.",
  "logicSummary": "Indirect recursion happens when functions call each other in a cycle.",
  "transitionSummary": "A(3) calls B(2), which calls A(1); a shared progress rule must eventually stop the cycle.",
  "codeInsight": "Indirect recursion happens when functions call each other in a cycle.",
  "originalCodeInsight": "The C/C++ reference Indirect Recursion source shows the C/C++ memory model and operation order used by this lesson.",
  "realLifeExample": "A(3) calls B(2), which calls A(1); a shared progress rule must eventually stop the cycle.",
  "whenToUse": "Indirect recursion happens when functions call each other in a cycle.",
  "memoryTrick": "Indirect recursion happens when functions call each other in a cycle.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Indirect recursion happens when functions call each other in a cycle."
    },
    {
      "title": "Work through a small case",
      "text": "A(3) calls B(2), which calls A(1); a shared progress rule must eventually stop the cycle."
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
      "note": "Indirect recursion happens when functions call each other in a cycle.",
      "activeLine": 2,
      "codeInsight": "Indirect recursion happens when functions call each other in a cycle."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "A(3) calls B(2), which calls A(1); a shared progress rule must eventually stop the cycle.",
      "activeLine": 6,
      "codeInsight": "Indirect recursion happens when functions call each other in a cycle."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying Indirect Recursion?",
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
  "algorithmSlug": "recursion-indirect-recursion",
  "animation": {
    "type": "recursion-flow",
    "title": "Indirect Recursion call stack",
    "ruleLabel": "Recursive contract",
    "rule": "Each step changes only the part of the stack required to preserve the invariant.",
    "calls": [
      "recursion-indirect-recursion(3)",
      "recursion-indirect-recursion(2)",
      "recursion-indirect-recursion(1)",
      "base case"
    ],
    "steps": [
      {
        "phase": "Stack",
        "title": "Read stack action",
        "note": "The code receives the next value or command.",
        "ruleLabel": "Indirect Recursion invariant",
        "rule": "Defines recursionIndirectRecursion and names the input n = 5; edits to those inputs change the visual state and output.",
        "activeCall": 0,
        "returningCalls": []
      },
      {
        "phase": "Stack top",
        "title": "Inspect stack",
        "note": "The active state must still satisfy last-in, first-out state.",
        "ruleLabel": "Indirect Recursion invariant",
        "rule": "Seeds calls with the sample values shown in the visualizer, giving the trace concrete cells to inspect.",
        "activeCall": 1,
        "returningCalls": []
      },
      {
        "phase": "Push / pop",
        "title": "Push, pop, peek, or resolve stack entries",
        "note": "Only the necessary stack fields are changed.",
        "ruleLabel": "Indirect Recursion invariant",
        "rule": "Adds the current value to calls, keeping it available for later comparisons or traversal.",
        "activeCall": 2,
        "returningCalls": []
      },
      {
        "phase": "Result",
        "title": "Return visible result",
        "note": "The return value or printed state confirms the operation.",
        "ruleLabel": "Indirect Recursion invariant",
        "rule": "Returns value <= 1 ? 1 : value * factorial(value - 1), the final value maintained by Indirect Recursion's code path.",
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
    "example": "A(3) calls B(2), which calls A(1); a shared progress rule must eventually stop the cycle.",
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
    "checkpoint": "Explain this in your own words: Indirect recursion happens when functions call each other in a cycle."
  }
};
