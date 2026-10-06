// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "recursion-basics",
  "title": "Recursion Basics",
  "category": "Foundations",
  "route": "/algorithms/foundations/recursion-basics",
  "phase": 1,
  "priority": "high",
  "visualizerType": "call-stack",
  "icon": "school",
  "codePath": "./src/algorithms/foundations/recursion-basics/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Recursion solves a problem by calling the same function on a smaller problem until a base case stops the calls.",
  "problem": "Recursion solves a problem by calling the same function on a smaller problem until a base case stops the calls.",
  "concept": "Recursion solves a problem by calling the same function on a smaller problem until a base case stops the calls.",
  "logicSummary": "Recursion solves a problem by calling the same function on a smaller problem until a base case stops the calls.",
  "transitionSummary": "For sum(3), compute 3 + sum(2), then 2 + sum(1), then 1 + sum(0). With sum(0) = 0, the answer is 6.",
  "codeInsight": "Recursion solves a problem by calling the same function on a smaller problem until a base case stops the calls.",
  "realLifeExample": "For sum(3), compute 3 + sum(2), then 2 + sum(1), then 1 + sum(0). With sum(0) = 0, the answer is 6.",
  "whenToUse": "Recursion solves a problem by calling the same function on a smaller problem until a base case stops the calls.",
  "memoryTrick": "Recursion solves a problem by calling the same function on a smaller problem until a base case stops the calls.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Recursion solves a problem by calling the same function on a smaller problem until a base case stops the calls."
    },
    {
      "title": "Work through a small case",
      "text": "For sum(3), compute 3 + sum(2), then 2 + sum(1), then 1 + sum(0). With sum(0) = 0, the answer is 6."
    },
    {
      "title": "Check the boundary cases",
      "text": "Every recursive path must move toward a base case. Count call-stack memory as well as any explicit arrays."
    }
  ],
  "variables": [
    {
      "name": "values",
      "purpose": "The collection to process. Its length tells the routine how many input items are available."
    },
    {
      "name": "input",
      "purpose": "Chooses the provided array or a fallback sample so the following collection operations have an array to read."
    },
    {
      "name": "result",
      "purpose": "Stores completed answers or computed states so they can be returned and, where needed, reused."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "Recursion solves a problem by calling the same function on a smaller problem until a base case stops the calls.",
      "activeLine": 5,
      "codeInsight": "Recursion solves a problem by calling the same function on a smaller problem until a base case stops the calls."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "For sum(3), compute 3 + sum(2), then 2 + sum(1), then 1 + sum(0). With sum(0) = 0, the answer is 6.",
      "activeLine": 17,
      "codeInsight": "Recursion solves a problem by calling the same function on a smaller problem until a base case stops the calls."
    }
  ],
  "complexity": {
    "time": "This subset-enumeration demo takes O(n × 2ⁿ) work, including copied paths; recursion alone does not determine complexity.",
    "space": "O(n) call depth plus O(n × 2ⁿ) stored subset output."
  },
  "quiz": {
    "question": "Which explanation best describes Recursion Basics?",
    "options": [
      {
        "key": "A",
        "text": "Every recursive function must try every possible arrangement and undo every call.",
        "correct": false
      },
      {
        "key": "B",
        "text": "Recursion solves a problem by calling the same function on a smaller problem until a base case stops the calls.",
        "correct": true
      },
      {
        "key": "C",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      }
    ],
    "correctText": "Correct. Recursion solves a problem by calling the same function on a smaller problem until a base case stops the calls.",
    "incorrectText": "Try again. Recursion solves a problem by calling the same function on a smaller problem until a base case stops the calls. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "foundations",
  "algorithmSlug": "recursion-basics",
  "runnerInput": [
    [
      1,
      2
    ]
  ],
  "relatedLinks": [
    {
      "id": "ds-recursion-first-recursion-program",
      "title": "First Recursion Program",
      "label": "C/C++ recursion source"
    },
    {
      "id": "ds-recursion-static-variable-in-recursion",
      "title": "Static Variable In Recursion",
      "label": "C/C++ recursion source"
    },
    {
      "id": "ds-recursion-tree-recursion",
      "title": "Tree Recursion",
      "label": "C/C++ recursion source"
    },
    {
      "id": "ds-recursion-indirect-recursion",
      "title": "Indirect Recursion",
      "label": "C/C++ recursion source"
    }
  ],
  "animation": {
    "type": "recursion-flow",
    "title": "Recursion Basics call stack",
    "ruleLabel": "Recursive contract",
    "rule": "Each step changes only the part of the stack required to preserve the invariant.",
    "calls": [
      "recursion-basics(3)",
      "recursion-basics(2)",
      "recursion-basics(1)",
      "base case"
    ],
    "steps": [
      {
        "phase": "Stack",
        "title": "Read stack action",
        "note": "The code receives the next value or command.",
        "ruleLabel": "Recursion Basics invariant",
        "rule": "Defines recursionBasics and names the input values; edits to those inputs change the visual state and output.",
        "activeCall": 0,
        "returningCalls": []
      },
      {
        "phase": "Stack top",
        "title": "Inspect stack",
        "note": "The active state must still satisfy last-in, first-out state.",
        "ruleLabel": "Recursion Basics invariant",
        "rule": "Prepares input from the sample collection that the next visual step inspects.",
        "activeCall": 1,
        "returningCalls": []
      },
      {
        "phase": "Push / pop",
        "title": "Push, pop, peek, or resolve stack entries",
        "note": "Only the necessary stack fields are changed.",
        "ruleLabel": "Recursion Basics invariant",
        "rule": "Adds the current value to result, keeping it available for later comparisons or traversal.",
        "activeCall": 2,
        "returningCalls": []
      },
      {
        "phase": "Result",
        "title": "Return visible result",
        "note": "The return value or printed state confirms the operation.",
        "ruleLabel": "Recursion Basics invariant",
        "rule": "Returns from this branch immediately because the current recursive or conditional state is complete.",
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
    "example": "For sum(3), compute 3 + sum(2), then 2 + sum(1), then 1 + sum(0). With sum(0) = 0, the answer is 6.",
    "sampleInput": [
      [
        1,
        2
      ]
    ],
    "sampleResult": [
      [],
      [
        2
      ],
      [
        1
      ],
      [
        1,
        2
      ]
    ],
    "sampleScope": "This JavaScript sample lists subsets with include/exclude recursive branches. The sum example above introduces recursion with a simpler call chain.",
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
    "checkpoint": "Explain this in your own words: Recursion solves a problem by calling the same function on a smaller problem until a base case stops the calls."
  }
};
