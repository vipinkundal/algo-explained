// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "generate-parentheses",
  "title": "Generate Parentheses",
  "category": "Recursion and Backtracking",
  "route": "/algorithms/backtracking/generate-parentheses",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "state-tree",
  "icon": "school",
  "codePath": "./src/algorithms/recursion-and-backtracking/generate-parentheses/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Generate Parentheses builds balanced strings by adding an opening bracket when allowed and a closing bracket only when it has a matching open one.",
  "problem": "Generate Parentheses builds balanced strings by adding an opening bracket when allowed and a closing bracket only when it has a matching open one.",
  "concept": "Generate Parentheses builds balanced strings by adding an opening bracket when allowed and a closing bracket only when it has a matching open one.",
  "logicSummary": "Generate Parentheses builds balanced strings by adding an opening bracket when allowed and a closing bracket only when it has a matching open one.",
  "transitionSummary": "With 2 pairs, (()) and ()() are valid. A prefix like )( is already invalid and can be rejected early.",
  "codeInsight": "Generate Parentheses builds balanced strings by adding an opening bracket when allowed and a closing bracket only when it has a matching open one.",
  "realLifeExample": "With 2 pairs, (()) and ()() are valid. A prefix like )( is already invalid and can be rejected early.",
  "whenToUse": "Generate Parentheses builds balanced strings by adding an opening bracket when allowed and a closing bracket only when it has a matching open one.",
  "memoryTrick": "Generate Parentheses builds balanced strings by adding an opening bracket when allowed and a closing bracket only when it has a matching open one.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Generate Parentheses builds balanced strings by adding an opening bracket when allowed and a closing bracket only when it has a matching open one."
    },
    {
      "title": "Work through a small case",
      "text": "With 2 pairs, (()) and ()() are valid. A prefix like )( is already invalid and can be rejected early."
    },
    {
      "title": "Check the boundary cases",
      "text": "Do not assume a tree is a binary search tree or balanced unless the problem guarantees it."
    }
  ],
  "variables": [
    {
      "name": "pairs",
      "purpose": "An input to the computation. Compare its position in the function signature with the corresponding sample argument."
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
      "note": "Generate Parentheses builds balanced strings by adding an opening bracket when allowed and a closing bracket only when it has a matching open one.",
      "activeLine": 5,
      "codeInsight": "Generate Parentheses builds balanced strings by adding an opening bracket when allowed and a closing bracket only when it has a matching open one."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "With 2 pairs, (()) and ()() are valid. A prefix like )( is already invalid and can be rejected early.",
      "activeLine": 16,
      "codeInsight": "Generate Parentheses builds balanced strings by adding an opening bracket when allowed and a closing bracket only when it has a matching open one."
    }
  ],
  "complexity": {
    "time": "Proportional to valid outputs and the work of constructing each length-2n string.",
    "space": "O(n) active path; storing all valid strings costs additional output space."
  },
  "quiz": {
    "question": "Which explanation best describes Generate Parentheses?",
    "options": [
      {
        "key": "A",
        "text": "Generate Parentheses builds balanced strings by adding an opening bracket when allowed and a closing bracket only when it has a matching open one.",
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
    "correctText": "Correct. Generate Parentheses builds balanced strings by adding an opening bracket when allowed and a closing bracket only when it has a matching open one.",
    "incorrectText": "Try again. Generate Parentheses builds balanced strings by adding an opening bracket when allowed and a closing bracket only when it has a matching open one. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "recursion-and-backtracking",
  "algorithmSlug": "generate-parentheses",
  "runnerInput": [
    3
  ],
  "animation": {
    "type": "tree-operation",
    "title": "Generate Parentheses tree state",
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
        "ruleLabel": "Generate Parentheses invariant",
        "rule": "Defines generateParentheses and names the input pairs; edits to those inputs change the visual state and output.",
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
        "ruleLabel": "Generate Parentheses invariant",
        "rule": "Defines generateParentheses and names the input pairs; edits to those inputs change the visual state and output.",
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
        "ruleLabel": "Generate Parentheses invariant",
        "rule": "Seeds result with the sample values shown in the visualizer, giving the trace concrete cells to inspect.",
        "activeNode": "12",
        "targetNode": "2",
        "replacementNode": "2",
        "mutedNodes": []
      },
      {
        "phase": "Unwind",
        "title": "Return or backtrack",
        "note": "The result is combined or the choice is removed.",
        "ruleLabel": "Generate Parentheses invariant",
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
    "example": "With 2 pairs, (()) and ()() are valid. A prefix like )( is already invalid and can be rejected early.",
    "sampleInput": [
      3
    ],
    "sampleResult": [
      "((()))",
      "(()())",
      "(())()",
      "()(())",
      "()()()"
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
    "checkpoint": "Explain this in your own words: Generate Parentheses builds balanced strings by adding an opening bracket when allowed and a closing bracket only when it has a matching open one."
  },
  "relatedLinks": []
};
