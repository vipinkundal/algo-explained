// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "tower-of-hanoi",
  "title": "Tower of Hanoi",
  "category": "Recursion and Backtracking",
  "route": "/algorithms/recursion/tower-of-hanoi",
  "phase": 1,
  "priority": "low",
  "visualizerType": "disk-moves",
  "icon": "school",
  "codePath": "./src/algorithms/recursion-and-backtracking/tower-of-hanoi/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Tower of Hanoi moves a stack of disks between pegs, moving one disk at a time and never placing a larger disk on a smaller one.",
  "problem": "Tower of Hanoi moves a stack of disks between pegs, moving one disk at a time and never placing a larger disk on a smaller one.",
  "concept": "Tower of Hanoi moves a stack of disks between pegs, moving one disk at a time and never placing a larger disk on a smaller one.",
  "logicSummary": "Tower of Hanoi moves a stack of disks between pegs, moving one disk at a time and never placing a larger disk on a smaller one.",
  "transitionSummary": "Move 2 disks from A to C: move the small disk A → B, the large disk A → C, then the small disk B → C.",
  "codeInsight": "Tower of Hanoi moves a stack of disks between pegs, moving one disk at a time and never placing a larger disk on a smaller one.",
  "realLifeExample": "Move 2 disks from A to C: move the small disk A → B, the large disk A → C, then the small disk B → C.",
  "whenToUse": "Tower of Hanoi moves a stack of disks between pegs, moving one disk at a time and never placing a larger disk on a smaller one.",
  "memoryTrick": "Tower of Hanoi moves a stack of disks between pegs, moving one disk at a time and never placing a larger disk on a smaller one.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Tower of Hanoi moves a stack of disks between pegs, moving one disk at a time and never placing a larger disk on a smaller one."
    },
    {
      "title": "Work through a small case",
      "text": "Move 2 disks from A to C: move the small disk A → B, the large disk A → C, then the small disk B → C."
    },
    {
      "title": "Check the boundary cases",
      "text": "Every recursive path must move toward a base case. Count call-stack memory as well as any explicit arrays."
    }
  ],
  "variables": [
    {
      "name": "disks",
      "purpose": "An input to the computation. Compare its position in the function signature with the corresponding sample argument."
    },
    {
      "name": "from = \"A\"",
      "purpose": "An input to the computation. Compare its position in the function signature with the corresponding sample argument."
    },
    {
      "name": "to = \"C\"",
      "purpose": "An input to the computation. Compare its position in the function signature with the corresponding sample argument."
    },
    {
      "name": "helper = \"B\"",
      "purpose": "An input to the computation. Compare its position in the function signature with the corresponding sample argument."
    },
    {
      "name": "moves",
      "purpose": "Keeps a sequence of sample or working values for the following operations."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "Tower of Hanoi moves a stack of disks between pegs, moving one disk at a time and never placing a larger disk on a smaller one.",
      "activeLine": 5,
      "codeInsight": "Tower of Hanoi moves a stack of disks between pegs, moving one disk at a time and never placing a larger disk on a smaller one."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "Move 2 disks from A to C: move the small disk A → B, the large disk A → C, then the small disk B → C.",
      "activeLine": 14,
      "codeInsight": "Tower of Hanoi moves a stack of disks between pegs, moving one disk at a time and never placing a larger disk on a smaller one."
    }
  ],
  "complexity": {
    "time": "Θ(2ⁿ) moves; exactly 2ⁿ − 1 for n disks.",
    "space": "O(n) call depth; storing all moves also needs Θ(2ⁿ) output space."
  },
  "quiz": {
    "question": "Which explanation best describes Tower of Hanoi?",
    "options": [
      {
        "key": "A",
        "text": "Tower of Hanoi moves a stack of disks between pegs, moving one disk at a time and never placing a larger disk on a smaller one.",
        "correct": true
      },
      {
        "key": "B",
        "text": "Every recursive function must try every possible arrangement and undo every call.",
        "correct": false
      },
      {
        "key": "C",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      }
    ],
    "correctText": "Correct. Tower of Hanoi moves a stack of disks between pegs, moving one disk at a time and never placing a larger disk on a smaller one.",
    "incorrectText": "Try again. Tower of Hanoi moves a stack of disks between pegs, moving one disk at a time and never placing a larger disk on a smaller one. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "recursion-and-backtracking",
  "algorithmSlug": "tower-of-hanoi",
  "runnerInput": [
    3
  ],
  "relatedLinks": [
    {
      "id": "ds-recursion-toh",
      "title": "Recursion Tower of Hanoi",
      "label": "C/C++ recursion source"
    }
  ],
  "animation": {
    "type": "recursion-flow",
    "title": "Tower of Hanoi call stack",
    "ruleLabel": "Recursive contract",
    "rule": "Each step either reaches a base case or moves one level deeper with a smaller decision state.",
    "calls": [
      "tower-of-hanoi(3)",
      "tower-of-hanoi(2)",
      "tower-of-hanoi(1)",
      "base case"
    ],
    "steps": [
      {
        "phase": "Base",
        "title": "Check stop condition",
        "note": "The entry step names the function inputs before the trace checks base cases or expands choices.",
        "ruleLabel": "Tower of Hanoi invariant",
        "rule": "Defines towerOfHanoi and names the input disks, from = \"A\", to = \"C\", helper = \"B\"; edits to those inputs change the visual state and output.",
        "activeCall": 0,
        "returningCalls": []
      },
      {
        "phase": "Choice",
        "title": "Select next option",
        "note": "One valid move is added to the state.",
        "ruleLabel": "Tower of Hanoi invariant",
        "rule": "Defines towerOfHanoi and names the input disks, from = \"A\", to = \"C\", helper = \"B\"; edits to those inputs change the visual state and output.",
        "activeCall": 1,
        "returningCalls": []
      },
      {
        "phase": "Call",
        "title": "Recurse deeper",
        "note": "The same rule runs on a smaller or extended state.",
        "ruleLabel": "Tower of Hanoi invariant",
        "rule": "Seeds moves with the sample values shown in the visualizer, giving the trace concrete cells to inspect.",
        "activeCall": 2,
        "returningCalls": []
      },
      {
        "phase": "Unwind",
        "title": "Return or backtrack",
        "note": "The result is combined or the choice is removed.",
        "ruleLabel": "Tower of Hanoi invariant",
        "rule": "Returns moves, the final value maintained by Tower of Hanoi's code path.",
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
    "example": "Move 2 disks from A to C: move the small disk A → B, the large disk A → C, then the small disk B → C.",
    "sampleInput": [
      3
    ],
    "sampleResult": [
      [
        "A",
        "C"
      ],
      [
        "A",
        "B"
      ],
      [
        "C",
        "B"
      ],
      [
        "A",
        "C"
      ],
      [
        "B",
        "A"
      ],
      [
        "B",
        "C"
      ],
      [
        "A",
        "C"
      ]
    ],
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
    "checkpoint": "Explain this in your own words: Tower of Hanoi moves a stack of disks between pegs, moving one disk at a time and never placing a larger disk on a smaller one."
  }
};
