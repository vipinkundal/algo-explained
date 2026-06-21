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
  "meaning": "Combination Sum is a Recursion and Backtracking technique focused on solutions.",
  "problem": "Combination Sum explores a decision tree by choosing, recursing, and undoing the choice before trying the next option.",
  "concept": "Recursion and backtracking are useful when a problem branches into smaller choices that share the same rule. Use this when the answer is built by choosing, recursing, and sometimes undoing choices.",
  "logicSummary": "Handle the base case, choose the next option, recurse into smaller state, then combine or undo state.",
  "transitionSummary": "Each step either reaches a base case or moves one level deeper with a smaller decision state.",
  "codeInsight": "The backtrack step is what keeps the state correct: every push must have a matching pop.",
  "realLifeExample": "Combination Sum appears when the input is choices and the required result is solutions.",
  "whenToUse": "Use Combination Sum when a problem matches the Recursion and Backtracking pattern and the expected state changes match a choice tree dry run.",
  "memoryTrick": "Combination Sum: name the invariant, then trace the exact state change.",
  "visualizerCaption": "Combination Sum is shown as call/choice state changes. The numbered steps follow the code path used to maintain the main invariant.",
  "logicSteps": [
    {
      "title": "Base case",
      "text": "Stop when the current state is complete or invalid."
    },
    {
      "title": "Choose option",
      "text": "Pick the next valid branch."
    },
    {
      "title": "Recurse",
      "text": "Solve the smaller state."
    },
    {
      "title": "Return or undo",
      "text": "Collect the result or backtrack before the next choice."
    }
  ],
  "variables": [
    {
      "name": "choices",
      "purpose": "The candidate values that drive the heap, recursion, subset, or frequency process."
    },
    {
      "name": "path and recursion frame",
      "purpose": "The partial choice path plus the current recursive frame before backtracking restores it. This page visualizes it as choice tree."
    },
    {
      "name": "returned value",
      "purpose": "The value produced by combinationSum after the maintained state reaches the stop rule."
    },
    {
      "name": "transition / stop rule",
      "purpose": "The transition is choose -> explore -> unchoose, which keeps sibling branches isolated. Stop when no valid work remains or the answer is known."
    }
  ],
  "dryRun": [
    {
      "label": "Base",
      "title": "Check stop condition",
      "note": "The code first asks whether the current state is complete.",
      "activeLine": 1,
      "codeInsight": "Executes this Combination Sum line as part of the highlighted code path, linking the visual step to the implementation."
    },
    {
      "label": "Choice",
      "title": "Select next option",
      "note": "One valid move is added to the state.",
      "activeLine": 4,
      "codeInsight": "This blank line separates Combination Sum's setup from the next code block."
    },
    {
      "label": "Call",
      "title": "Recurse deeper",
      "note": "The same rule runs on a smaller or extended state.",
      "activeLine": 6,
      "codeInsight": "Initializes values, the local state that the next highlighted lines will update."
    },
    {
      "label": "Unwind",
      "title": "Return or backtrack",
      "note": "The result is combined or the choice is removed.",
      "activeLine": 11,
      "codeInsight": "Executes this Combination Sum line as part of the highlighted code path, linking the visual step to the implementation."
    }
  ],
  "complexity": {
    "time": "O(n) for the educational reference implementation.",
    "space": "O(n) for tracked state when needed."
  },
  "quiz": {
    "question": "Which state choice keeps Combination Sum correct?",
    "options": [
      {
        "key": "A",
        "text": "Track path and update it only through Combination Sum's transition.",
        "correct": true
      },
      {
        "key": "B",
        "text": "Reuse a different algorithm's state names even when the transition is different.",
        "correct": false
      },
      {
        "key": "C",
        "text": "Return before checking the algorithm-specific stop condition.",
        "correct": false
      }
    ],
    "correctText": "Correct. Combination Sum stays understandable when its own state and transition drive the answer.",
    "incorrectText": "Not quite. Combination Sum needs its own input, state, answer, and condition rather than another algorithm's page structure."
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
        "note": "The code first asks whether the current state is complete.",
        "ruleLabel": "Combination Sum invariant",
        "rule": "Executes this Combination Sum line as part of the highlighted code path, linking the visual step to the implementation.",
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
        "rule": "This blank line separates Combination Sum's setup from the next code block.",
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
        "rule": "Initializes values, the local state that the next highlighted lines will update.",
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
        "rule": "Executes this Combination Sum line as part of the highlighted code path, linking the visual step to the implementation.",
        "activeNode": "2",
        "targetNode": "6",
        "replacementNode": "6",
        "mutedNodes": []
      }
    ]
  }
};
