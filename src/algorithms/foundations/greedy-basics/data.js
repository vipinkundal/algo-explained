// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "greedy-basics",
  "title": "Greedy Basics",
  "category": "Foundations",
  "route": "/algorithms/foundations/greedy-basics",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "decision-timeline",
  "icon": "school",
  "codePath": "./src/algorithms/foundations/greedy-basics/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "A greedy algorithm takes the best available choice now. It works only when those choices can lead to a globally best answer.",
  "problem": "A greedy algorithm takes the best available choice now. It works only when those choices can lead to a globally best answer.",
  "concept": "A greedy algorithm takes the best available choice now. It works only when those choices can lead to a globally best answer.",
  "logicSummary": "A greedy algorithm takes the best available choice now. It works only when those choices can lead to a globally best answer.",
  "transitionSummary": "To select the most non-overlapping meetings, choose the meeting that ends earliest, then repeat. Greedy coin choice fails for coins [1, 3, 4] and amount 6: 4 + 1 + 1 loses to 3 + 3.",
  "codeInsight": "A greedy algorithm takes the best available choice now. It works only when those choices can lead to a globally best answer.",
  "realLifeExample": "To select the most non-overlapping meetings, choose the meeting that ends earliest, then repeat. Greedy coin choice fails for coins [1, 3, 4] and amount 6: 4 + 1 + 1 loses to 3 + 3.",
  "whenToUse": "A greedy algorithm takes the best available choice now. It works only when those choices can lead to a globally best answer.",
  "memoryTrick": "A greedy algorithm takes the best available choice now. It works only when those choices can lead to a globally best answer.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "A greedy algorithm takes the best available choice now. It works only when those choices can lead to a globally best answer."
    },
    {
      "title": "Work through a small case",
      "text": "To select the most non-overlapping meetings, choose the meeting that ends earliest, then repeat. Greedy coin choice fails for coins [1, 3, 4] and amount 6: 4 + 1 + 1 loses to 3 + 3."
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
      "name": "capacity = 10",
      "purpose": "The allowed capacity, used to decide whether a choice fits."
    },
    {
      "name": "sorted",
      "purpose": "Chooses the provided array or a fallback sample so the following collection operations have an array to read."
    },
    {
      "name": "chosen",
      "purpose": "Keeps a sequence of sample or working values for the following operations."
    },
    {
      "name": "total",
      "purpose": "Remembers the accumulated total instead of recomputing it from all earlier items."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "A greedy algorithm takes the best available choice now. It works only when those choices can lead to a globally best answer.",
      "activeLine": 5,
      "codeInsight": "A greedy algorithm takes the best available choice now. It works only when those choices can lead to a globally best answer."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "To select the most non-overlapping meetings, choose the meeting that ends earliest, then repeat. Greedy coin choice fails for coins [1, 3, 4] and amount 6: 4 + 1 + 1 loses to 3 + 3.",
      "activeLine": 15,
      "codeInsight": "A greedy algorithm takes the best available choice now. It works only when those choices can lead to a globally best answer."
    }
  ],
  "complexity": {
    "time": "This sort-then-select demo takes O(n log n) work under a standard comparison-sort model. Other greedy problems have different costs.",
    "space": "O(n) for the sorted copy and selected output."
  },
  "quiz": {
    "question": "Which explanation best describes Greedy Basics?",
    "options": [
      {
        "key": "A",
        "text": "Every recursive function must try every possible arrangement and undo every call.",
        "correct": false
      },
      {
        "key": "B",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      },
      {
        "key": "C",
        "text": "A greedy algorithm takes the best available choice now. It works only when those choices can lead to a globally best answer.",
        "correct": true
      }
    ],
    "correctText": "Correct. A greedy algorithm takes the best available choice now. It works only when those choices can lead to a globally best answer.",
    "incorrectText": "Try again. A greedy algorithm takes the best available choice now. It works only when those choices can lead to a globally best answer. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "foundations",
  "algorithmSlug": "greedy-basics",
  "runnerInput": [
    [
      4,
      2,
      7,
      1
    ]
  ],
  "animation": {
    "type": "recursion-flow",
    "title": "Greedy Basics call stack",
    "ruleLabel": "Recursive contract",
    "rule": "Each step either reaches a base case or moves one level deeper with a smaller decision state.",
    "calls": [
      "greedy-basics(3)",
      "greedy-basics(2)",
      "greedy-basics(1)",
      "base case"
    ],
    "steps": [
      {
        "phase": "Base",
        "title": "Check stop condition",
        "note": "The entry step names the function inputs before the trace checks base cases or expands choices.",
        "ruleLabel": "Greedy Basics invariant",
        "rule": "Defines greedyBasics and names the input values, capacity = 10; edits to those inputs change the visual state and output.",
        "activeCall": 0,
        "returningCalls": []
      },
      {
        "phase": "Choice",
        "title": "Select next option",
        "note": "One valid move is added to the state.",
        "ruleLabel": "Greedy Basics invariant",
        "rule": "Defines greedyBasics and names the input values, capacity = 10; edits to those inputs change the visual state and output.",
        "activeCall": 1,
        "returningCalls": []
      },
      {
        "phase": "Call",
        "title": "Recurse deeper",
        "note": "The same rule runs on a smaller or extended state.",
        "ruleLabel": "Greedy Basics invariant",
        "rule": "Creates sorted as empty working state; later lines add and remove values from it.",
        "activeCall": 2,
        "returningCalls": []
      },
      {
        "phase": "Unwind",
        "title": "Return or backtrack",
        "note": "The result is combined or the choice is removed.",
        "ruleLabel": "Greedy Basics invariant",
        "rule": "Returns the final state object { chosen, total }, exposing the exact fields the visualizer has been tracking.",
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
    "example": "To select the most non-overlapping meetings, choose the meeting that ends earliest, then repeat. Greedy coin choice fails for coins [1, 3, 4] and amount 6: 4 + 1 + 1 loses to 3 + 3.",
    "sampleInput": [
      [
        4,
        2,
        7,
        1
      ]
    ],
    "sampleResult": {
      "chosen": [
        1,
        2,
        4
      ],
      "total": 7
    },
    "sampleScope": "This JavaScript sample sorts numbers and chooses values within a capacity. Its behavior is meaningful for non-negative values; the meeting and coin examples above illustrate why the optimization goal and assumptions matter.",
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
    "checkpoint": "Explain this in your own words: A greedy algorithm takes the best available choice now. It works only when those choices can lead to a globally best answer."
  },
  "relatedLinks": []
};
