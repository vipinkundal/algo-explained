// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "combination-sum",
  "title": "Combination Sum",
  "category": "Recursion and Backtracking",
  "route": "/algorithms/backtracking/combination-sum",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "choice-tree",
  "icon": "school",
  "codePath": "./src/algorithms/recursion-and-backtracking/combination-sum/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Combination Sum tries choices of positive numbers whose sum reaches a target, allowing reuse when the problem permits it.",
  "problem": "Combination Sum tries choices of positive numbers whose sum reaches a target, allowing reuse when the problem permits it.",
  "concept": "Combination Sum tries choices of positive numbers whose sum reaches a target, allowing reuse when the problem permits it.",
  "logicSummary": "Combination Sum tries choices of positive numbers whose sum reaches a target, allowing reuse when the problem permits it.",
  "transitionSummary": "With [2, 3] and target 7, [2, 2, 3] works. Keeping choices in a fixed order avoids reporting its rearrangements again.",
  "codeInsight": "Combination Sum tries choices of positive numbers whose sum reaches a target, allowing reuse when the problem permits it.",
  "realLifeExample": "With [2, 3] and target 7, [2, 2, 3] works. Keeping choices in a fixed order avoids reporting its rearrangements again.",
  "whenToUse": "Combination Sum tries choices of positive numbers whose sum reaches a target, allowing reuse when the problem permits it.",
  "memoryTrick": "Combination Sum tries choices of positive numbers whose sum reaches a target, allowing reuse when the problem permits it.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Combination Sum tries choices of positive numbers whose sum reaches a target, allowing reuse when the problem permits it."
    },
    {
      "title": "Work through a small case",
      "text": "With [2, 3] and target 7, [2, 2, 3] works. Keeping choices in a fixed order avoids reporting its rearrangements again."
    },
    {
      "title": "Check the boundary cases",
      "text": "Do not assume a tree is a binary search tree or balanced unless the problem guarantees it."
    }
  ],
  "variables": [
    {
      "name": "candidates",
      "purpose": "An input to the computation. Compare its position in the function signature with the corresponding sample argument."
    },
    {
      "name": "target",
      "purpose": "The value or total the operation is trying to locate or reach."
    },
    {
      "name": "values",
      "purpose": "Holds ordered values so later comparisons or selections can rely on their order."
    },
    {
      "name": "result",
      "purpose": "Stores completed answers or computed states so they can be returned and, where needed, reused."
    },
    {
      "name": "index",
      "purpose": "Remembers how many items are present; this supports bounds, size reporting, or the stopping rule."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "Combination Sum tries choices of positive numbers whose sum reaches a target, allowing reuse when the problem permits it.",
      "activeLine": 5,
      "codeInsight": "Combination Sum tries choices of positive numbers whose sum reaches a target, allowing reuse when the problem permits it."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "With [2, 3] and target 7, [2, 2, 3] works. Keeping choices in a fixed order avoids reporting its rearrangements again.",
      "activeLine": 21,
      "codeInsight": "Combination Sum tries choices of positive numbers whose sum reaches a target, allowing reuse when the problem permits it."
    }
  ],
  "complexity": {
    "time": "O(n) for the educational reference implementation.",
    "space": "O(n) for tracked state when needed."
  },
  "quiz": {
    "question": "Which explanation best describes Combination Sum?",
    "options": [
      {
        "key": "A",
        "text": "Combination Sum tries choices of positive numbers whose sum reaches a target, allowing reuse when the problem permits it.",
        "correct": true
      },
      {
        "key": "B",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "C",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      }
    ],
    "correctText": "Correct. Combination Sum tries choices of positive numbers whose sum reaches a target, allowing reuse when the problem permits it.",
    "incorrectText": "Try again. Combination Sum tries choices of positive numbers whose sum reaches a target, allowing reuse when the problem permits it. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "recursion-and-backtracking",
  "algorithmSlug": "combination-sum",
  "runnerInput": [
    [
      2,
      3,
      6,
      7
    ],
    7
  ],
  "animation": {
    "type": "tree-operation",
    "title": "Combination Sum tree state",
    "nodes": [
      {
        "id": "8",
        "label": "8",
        "x": 340,
        "y": 58
      },
      {
        "id": "4",
        "label": "4",
        "x": 190,
        "y": 150
      },
      {
        "id": "12",
        "label": "12",
        "x": 490,
        "y": 150
      },
      {
        "id": "2",
        "label": "2",
        "x": 110,
        "y": 255
      },
      {
        "id": "6",
        "label": "6",
        "x": 270,
        "y": 255
      },
      {
        "id": "10",
        "label": "10",
        "x": 420,
        "y": 255
      },
      {
        "id": "14",
        "label": "14",
        "x": 570,
        "y": 255
      }
    ],
    "edges": [
      {
        "from": "8",
        "to": "4"
      },
      {
        "from": "8",
        "to": "12"
      },
      {
        "from": "4",
        "to": "2"
      },
      {
        "from": "4",
        "to": "6"
      },
      {
        "from": "12",
        "to": "10"
      },
      {
        "from": "12",
        "to": "14"
      }
    ],
    "steps": [
      {
        "phase": "Base",
        "title": "Check stop condition",
        "note": "The entry step names the function inputs before the trace checks base cases or expands choices.",
        "ruleLabel": "Combination Sum invariant",
        "rule": "Defines combinationSum and names the input candidates, target; edits to those inputs change the visual state and output.",
        "activeNode": "8",
        "targetNode": "4",
        "replacementNode": "",
        "mutedNodes": [
          "6",
          "10",
          "14"
        ]
      },
      {
        "phase": "Choice",
        "title": "Select next option",
        "note": "One valid move is added to the state.",
        "ruleLabel": "Combination Sum invariant",
        "rule": "Defines combinationSum and names the input candidates, target; edits to those inputs change the visual state and output.",
        "activeNode": "4",
        "targetNode": "12",
        "replacementNode": "",
        "mutedNodes": [
          "6",
          "10",
          "14"
        ]
      },
      {
        "phase": "Call",
        "title": "Recurse deeper",
        "note": "The same rule runs on a smaller or extended state.",
        "ruleLabel": "Combination Sum invariant",
        "rule": "Copies the input into values, so the animation can show mutations without pretending the caller's original array changes.",
        "activeNode": "12",
        "targetNode": "2",
        "replacementNode": "2",
        "mutedNodes": []
      },
      {
        "phase": "Unwind",
        "title": "Return or backtrack",
        "note": "The result is combined or the choice is removed.",
        "ruleLabel": "Combination Sum invariant",
        "rule": "Returns from this branch immediately because the current recursive or conditional state is complete.",
        "activeNode": "2",
        "targetNode": "6",
        "replacementNode": "6",
        "mutedNodes": []
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "A tree branches from a root. A child is one level below its parent; a leaf has no children.",
    "family": "Trees and links",
    "example": "With [2, 3] and target 7, [2, 2, 3] works. Keeping choices in a fixed order avoids reporting its rearrangements again.",
    "sampleInput": [
      [
        2,
        3,
        6,
        7
      ],
      7
    ],
    "sampleResult": [
      [
        2,
        2,
        3
      ],
      [
        7
      ]
    ],
    "sampleScope": "This is the result of the unedited JavaScript function with the sample arguments. Changing the input or code can change the result.",
    "terms": [
      [
        "Root",
        "The starting node of a tree."
      ],
      [
        "Subtree",
        "A node together with all of its descendants."
      ],
      [
        "Height",
        "The longest downward path; check whether the code counts nodes or edges."
      ]
    ],
    "pitfall": "Do not assume a tree is a binary search tree or balanced unless the problem guarantees it.",
    "checkpoint": "Explain this in your own words: Combination Sum tries choices of positive numbers whose sum reaches a target, allowing reuse when the problem permits it."
  },
  "relatedLinks": []
};
