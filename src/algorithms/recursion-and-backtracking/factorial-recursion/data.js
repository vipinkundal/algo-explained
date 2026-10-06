// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "factorial-recursion",
  "title": "Factorial Recursion",
  "category": "Recursion and Backtracking",
  "route": "/algorithms/recursion/factorial-recursion",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "call-stack",
  "icon": "school",
  "codePath": "./src/algorithms/recursion-and-backtracking/factorial-recursion/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Factorial multiplies a non-negative integer by every smaller positive integer, using a smaller recursive call each time.",
  "problem": "Factorial multiplies a non-negative integer by every smaller positive integer, using a smaller recursive call each time.",
  "concept": "Factorial multiplies a non-negative integer by every smaller positive integer, using a smaller recursive call each time.",
  "logicSummary": "Factorial multiplies a non-negative integer by every smaller positive integer, using a smaller recursive call each time.",
  "transitionSummary": "4! = 4 × 3 × 2 × 1 = 24. The base case is 0! = 1 (and 1! = 1).",
  "codeInsight": "Factorial multiplies a non-negative integer by every smaller positive integer, using a smaller recursive call each time.",
  "realLifeExample": "4! = 4 × 3 × 2 × 1 = 24. The base case is 0! = 1 (and 1! = 1).",
  "whenToUse": "Factorial multiplies a non-negative integer by every smaller positive integer, using a smaller recursive call each time.",
  "memoryTrick": "Factorial multiplies a non-negative integer by every smaller positive integer, using a smaller recursive call each time.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Factorial multiplies a non-negative integer by every smaller positive integer, using a smaller recursive call each time."
    },
    {
      "title": "Work through a small case",
      "text": "4! = 4 × 3 × 2 × 1 = 24. The base case is 0! = 1 (and 1! = 1)."
    },
    {
      "title": "Check the boundary cases",
      "text": "Every recursive path must move toward a base case. Count call-stack memory as well as any explicit arrays."
    }
  ],
  "variables": [
    {
      "name": "value",
      "purpose": "The number to compute with; recursive routines pass a smaller value to the next call."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "Factorial multiplies a non-negative integer by every smaller positive integer, using a smaller recursive call each time.",
      "activeLine": 5,
      "codeInsight": "Factorial multiplies a non-negative integer by every smaller positive integer, using a smaller recursive call each time."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "4! = 4 × 3 × 2 × 1 = 24. The base case is 0! = 1 (and 1! = 1).",
      "activeLine": 6,
      "codeInsight": "Factorial multiplies a non-negative integer by every smaller positive integer, using a smaller recursive call each time."
    }
  ],
  "complexity": {
    "time": "O(n) for n recursive multiplications in this number-based demo.",
    "space": "O(n) active call frames. JavaScript Number loses exact integer precision for sufficiently large factorials."
  },
  "quiz": {
    "question": "Which explanation best describes Factorial Recursion?",
    "options": [
      {
        "key": "A",
        "text": "Every recursive function must try every possible arrangement and undo every call.",
        "correct": false
      },
      {
        "key": "B",
        "text": "Factorial multiplies a non-negative integer by every smaller positive integer, using a smaller recursive call each time.",
        "correct": true
      },
      {
        "key": "C",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      }
    ],
    "correctText": "Correct. Factorial multiplies a non-negative integer by every smaller positive integer, using a smaller recursive call each time.",
    "incorrectText": "Try again. Factorial multiplies a non-negative integer by every smaller positive integer, using a smaller recursive call each time. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "recursion-and-backtracking",
  "algorithmSlug": "factorial-recursion",
  "runnerInput": [
    5
  ],
  "relatedLinks": [
    {
      "id": "ds-recursion-factorial",
      "title": "Recursion Factorial",
      "label": "C/C++ recursion source"
    }
  ],
  "animation": {
    "type": "recursion-flow",
    "title": "Factorial Recursion call stack",
    "ruleLabel": "Recursive contract",
    "rule": "Each step changes only the part of the stack required to preserve the invariant.",
    "calls": [
      "factorial-recursion(3)",
      "factorial-recursion(2)",
      "factorial-recursion(1)",
      "base case"
    ],
    "steps": [
      {
        "phase": "Stack",
        "title": "Read stack action",
        "note": "The code receives the next value or command.",
        "ruleLabel": "Factorial Recursion invariant",
        "rule": "Defines factorialRecursion and names the input value; edits to those inputs change the visual state and output.",
        "activeCall": 0,
        "returningCalls": []
      },
      {
        "phase": "Stack top",
        "title": "Inspect stack",
        "note": "The active state must still satisfy last-in, first-out state.",
        "ruleLabel": "Factorial Recursion invariant",
        "rule": "Defines factorialRecursion and names the input value; edits to those inputs change the visual state and output.",
        "activeCall": 1,
        "returningCalls": []
      },
      {
        "phase": "Push / pop",
        "title": "Push, pop, peek, or resolve stack entries",
        "note": "Only the necessary stack fields are changed.",
        "ruleLabel": "Factorial Recursion invariant",
        "rule": "Checks value <= 1; only the branch that preserves Factorial Recursion's invariant is allowed to change state.",
        "activeCall": 2,
        "returningCalls": []
      },
      {
        "phase": "Result",
        "title": "Return visible result",
        "note": "The return value or printed state confirms the operation.",
        "ruleLabel": "Factorial Recursion invariant",
        "rule": "Returns value * factorialRecursion(value - 1), the final value maintained by Factorial Recursion's code path.",
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
    "example": "4! = 4 × 3 × 2 × 1 = 24. The base case is 0! = 1 (and 1! = 1).",
    "sampleInput": [
      5
    ],
    "sampleResult": 120,
    "sampleScope": "This is the result of the unedited JavaScript function with the sample arguments. Changing the input or code can change the result.",
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
    "checkpoint": "Explain this in your own words: Factorial multiplies a non-negative integer by every smaller positive integer, using a smaller recursive call each time."
  }
};
