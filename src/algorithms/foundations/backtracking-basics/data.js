// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "backtracking-basics",
  "title": "Backtracking Basics",
  "category": "Foundations",
  "route": "/algorithms/foundations/backtracking-basics",
  "phase": 2,
  "priority": "high",
  "visualizerType": "recursion-tree",
  "icon": "school",
  "codePath": "./src/algorithms/foundations/backtracking-basics/code/solution.js",
  "codeFilename": "solution.js",
  "runnerInput": [
    [
      1,
      2
    ]
  ],
  "meaning": "Backtracking builds a possible solution one choice at a time, undoing a choice when a branch cannot work.",
  "problem": "Backtracking builds a possible solution one choice at a time, undoing a choice when a branch cannot work.",
  "concept": "Backtracking builds a possible solution one choice at a time, undoing a choice when a branch cannot work.",
  "logicSummary": "Backtracking builds a possible solution one choice at a time, undoing a choice when a branch cannot work.",
  "transitionSummary": "To place queens, try a safe square, continue to the next row, and remove the queen if later rows have no safe square.",
  "codeInsight": "Backtracking builds a possible solution one choice at a time, undoing a choice when a branch cannot work.",
  "realLifeExample": "To place queens, try a safe square, continue to the next row, and remove the queen if later rows have no safe square.",
  "whenToUse": "Backtracking builds a possible solution one choice at a time, undoing a choice when a branch cannot work.",
  "memoryTrick": "Backtracking builds a possible solution one choice at a time, undoing a choice when a branch cannot work.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Backtracking builds a possible solution one choice at a time, undoing a choice when a branch cannot work."
    },
    {
      "title": "Work through a small case",
      "text": "To place queens, try a safe square, continue to the next row, and remove the queen if later rows have no safe square."
    },
    {
      "title": "Check the boundary cases",
      "text": "Every recursive path must move toward a base case. Count call-stack memory as well as any explicit arrays."
    }
  ],
  "variables": [
    {
      "name": "choices",
      "purpose": "The available decisions to try when constructing a path."
    },
    {
      "name": "values",
      "purpose": "Chooses the provided array or a fallback sample so the following collection operations have an array to read."
    },
    {
      "name": "result",
      "purpose": "Stores completed answers or computed states so they can be returned and, where needed, reused."
    },
    {
      "name": "path",
      "purpose": "Remembers the current partial choice sequence; backtracking restores it before trying a sibling branch."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "Backtracking builds a possible solution one choice at a time, undoing a choice when a branch cannot work.",
      "activeLine": 5,
      "codeInsight": "Backtracking builds a possible solution one choice at a time, undoing a choice when a branch cannot work."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "To place queens, try a safe square, continue to the next row, and remove the queen if later rows have no safe square.",
      "activeLine": 22,
      "codeInsight": "Backtracking builds a possible solution one choice at a time, undoing a choice when a branch cannot work."
    }
  ],
  "complexity": {
    "time": "O(n × 2ⁿ) for this demo, which enumerates and copies all subsets.",
    "space": "O(n) active path and call depth, plus O(n × 2ⁿ) stored output."
  },
  "quiz": {
    "question": "Which explanation best describes Backtracking Basics?",
    "options": [
      {
        "key": "A",
        "text": "Backtracking builds a possible solution one choice at a time, undoing a choice when a branch cannot work.",
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
    "correctText": "Correct. Backtracking builds a possible solution one choice at a time, undoing a choice when a branch cannot work.",
    "incorrectText": "Try again. Backtracking builds a possible solution one choice at a time, undoing a choice when a branch cannot work. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "foundations",
  "algorithmSlug": "backtracking-basics",
  "animation": {
    "type": "tree-operation",
    "title": "Backtracking Basics tree state",
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
        "ruleLabel": "Backtracking Basics invariant",
        "rule": "Defines backtrackingBasics and names the input choices; edits to those inputs change the visual state and output.",
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
        "ruleLabel": "Backtracking Basics invariant",
        "rule": "Defines backtrackingBasics and names the input choices; edits to those inputs change the visual state and output.",
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
        "ruleLabel": "Backtracking Basics invariant",
        "rule": "Prepares values from the sample collection that the next visual step inspects.",
        "activeNode": "12",
        "targetNode": "2",
        "replacementNode": "2",
        "mutedNodes": []
      },
      {
        "phase": "Unwind",
        "title": "Return or backtrack",
        "note": "The result is combined or the choice is removed.",
        "ruleLabel": "Backtracking Basics invariant",
        "rule": "Returns from this branch immediately because the current recursive or conditional state is complete.",
        "activeNode": "2",
        "targetNode": "6",
        "replacementNode": "6",
        "mutedNodes": []
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "Each call remembers its own unfinished work. A base case returns directly; the other calls resume as smaller calls finish.",
    "family": "Recursive calls",
    "example": "To place queens, try a safe square, continue to the next row, and remove the queen if later rows have no safe square.",
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
    "checkpoint": "Explain this in your own words: Backtracking builds a possible solution one choice at a time, undoing a choice when a branch cannot work."
  },
  "relatedLinks": []
};
