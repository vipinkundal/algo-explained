// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ds-recursion-sum-of-first-n-natural-number",
  "title": "Recursion Sum Of First N Natural Number",
  "category": "Data Structures",
  "track": "Data Structures",
  "topicGroup": "Recursion",
  "sourceFolder": "03_recursion",
  "sourceFile": "06_sum_of_first_n_natural_number.cpp",
  "sourceLanguage": "cpp",
  "route": "/algorithms/data-structures/recursion-sum-of-first-n-natural-number",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "call-stack",
  "icon": "account_tree",
  "codePath": "./src/algorithms/data-structures/recursion-sum-of-first-n-natural-number/code/solution.js",
  "codeFilename": "solution.js",
  "originalCodePath": "./src/algorithms/data-structures/recursion-sum-of-first-n-natural-number/code/original.cpp",
  "originalCodeFilename": "06_sum_of_first_n_natural_number.cpp",
  "originalActiveLine": 3,
  "meaning": "Recursively sum the first n natural numbers by adding n to the sum through n − 1.",
  "problem": "Recursively sum the first n natural numbers by adding n to the sum through n − 1.",
  "concept": "Recursively sum the first n natural numbers by adding n to the sum through n − 1.",
  "logicSummary": "Recursively sum the first n natural numbers by adding n to the sum through n − 1.",
  "transitionSummary": "sum(4) = 4 + 3 + 2 + 1 = 10; sum(0) = 0.",
  "codeInsight": "Recursively sum the first n natural numbers by adding n to the sum through n − 1.",
  "originalCodeInsight": "The loop is the transition: it repeatedly visits elements or nodes and updates the structure state.",
  "realLifeExample": "sum(4) = 4 + 3 + 2 + 1 = 10; sum(0) = 0.",
  "whenToUse": "Recursively sum the first n natural numbers by adding n to the sum through n − 1.",
  "memoryTrick": "Recursively sum the first n natural numbers by adding n to the sum through n − 1.",
  "visualizerCaption": "Inspect a representation of the structure, then compare it with the C/C++ reference.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Recursively sum the first n natural numbers by adding n to the sum through n − 1."
    },
    {
      "title": "Work through a small case",
      "text": "sum(4) = 4 + 3 + 2 + 1 = 10; sum(0) = 0."
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
      "note": "Recursively sum the first n natural numbers by adding n to the sum through n − 1.",
      "activeLine": 2,
      "codeInsight": "Recursively sum the first n natural numbers by adding n to the sum through n − 1."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "sum(4) = 4 + 3 + 2 + 1 = 10; sum(0) = 0.",
      "activeLine": 6,
      "codeInsight": "Recursively sum the first n natural numbers by adding n to the sum through n − 1."
    }
  ],
  "complexity": {
    "time": "Depends on the demonstrated operation; most single operations are O(1), scans and traversals are O(n).",
    "space": "Depends on representation; arrays use contiguous slots, linked structures allocate one node per item."
  },
  "quiz": {
    "question": "What should you identify first when studying Recursion Sum Of First N Natural Number?",
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
  "algorithmSlug": "recursion-sum-of-first-n-natural-number",
  "animation": {
    "type": "recursion-flow",
    "title": "Recursion Sum Of First N Natural Number call stack",
    "ruleLabel": "Recursive contract",
    "rule": "Each step changes only the part of the stack required to preserve the invariant.",
    "calls": [
      "recursion-sum-of-first-n-natural-number(3)",
      "recursion-sum-of-first-n-natural-number(2)",
      "recursion-sum-of-first-n-natural-number(1)",
      "base case"
    ],
    "steps": [
      {
        "phase": "Stack",
        "title": "Read stack action",
        "note": "The code receives the next value or command.",
        "ruleLabel": "Recursion Sum Of First N Natural Number invariant",
        "rule": "Defines recursionSumOfFirstNNaturalNumber and names the input n = 5; edits to those inputs change the visual state and output.",
        "activeCall": 0,
        "returningCalls": []
      },
      {
        "phase": "Stack top",
        "title": "Inspect stack",
        "note": "The active state must still satisfy last-in, first-out state.",
        "ruleLabel": "Recursion Sum Of First N Natural Number invariant",
        "rule": "Seeds calls with the sample values shown in the visualizer, giving the trace concrete cells to inspect.",
        "activeCall": 1,
        "returningCalls": []
      },
      {
        "phase": "Push / pop",
        "title": "Push, pop, peek, or resolve stack entries",
        "note": "Only the necessary stack fields are changed.",
        "ruleLabel": "Recursion Sum Of First N Natural Number invariant",
        "rule": "Adds the current value to calls, keeping it available for later comparisons or traversal.",
        "activeCall": 2,
        "returningCalls": []
      },
      {
        "phase": "Result",
        "title": "Return visible result",
        "note": "The return value or printed state confirms the operation.",
        "ruleLabel": "Recursion Sum Of First N Natural Number invariant",
        "rule": "Returns value <= 1 ? 1 : value * factorial(value - 1), the final value maintained by Recursion Sum Of First N Natural Number's code path.",
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
    "example": "sum(4) = 4 + 3 + 2 + 1 = 10; sum(0) = 0.",
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
    "checkpoint": "Explain this in your own words: Recursively sum the first n natural numbers by adding n to the sum through n − 1."
  }
};
