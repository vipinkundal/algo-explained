// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "subsets",
  "title": "Subsets",
  "category": "Recursion and Backtracking",
  "route": "/algorithms/backtracking/subsets",
  "phase": 2,
  "priority": "high",
  "visualizerType": "decision-tree",
  "icon": "school",
  "codePath": "./src/algorithms/recursion-and-backtracking/subsets/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Subsets lists every selection of elements by deciding whether to include or exclude each element.",
  "problem": "Subsets lists every selection of elements by deciding whether to include or exclude each element.",
  "concept": "Subsets lists every selection of elements by deciding whether to include or exclude each element.",
  "logicSummary": "Subsets lists every selection of elements by deciding whether to include or exclude each element.",
  "transitionSummary": "For [1, 2], the subsets are [], [1], [2], and [1, 2]. There are 2ⁿ subsets for n distinct elements.",
  "codeInsight": "Subsets lists every selection of elements by deciding whether to include or exclude each element.",
  "realLifeExample": "For [1, 2], the subsets are [], [1], [2], and [1, 2]. There are 2ⁿ subsets for n distinct elements.",
  "whenToUse": "Subsets lists every selection of elements by deciding whether to include or exclude each element.",
  "memoryTrick": "Subsets lists every selection of elements by deciding whether to include or exclude each element.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Subsets lists every selection of elements by deciding whether to include or exclude each element."
    },
    {
      "title": "Work through a small case",
      "text": "For [1, 2], the subsets are [], [1], [2], and [1, 2]. There are 2ⁿ subsets for n distinct elements."
    },
    {
      "title": "Check the boundary cases",
      "text": "Do not assume a tree is a binary search tree or balanced unless the problem guarantees it."
    }
  ],
  "variables": [
    {
      "name": "values",
      "purpose": "The collection to process. Its length tells the routine how many input items are available."
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
      "note": "Subsets lists every selection of elements by deciding whether to include or exclude each element.",
      "activeLine": 5,
      "codeInsight": "Subsets lists every selection of elements by deciding whether to include or exclude each element."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "For [1, 2], the subsets are [], [1], [2], and [1, 2]. There are 2ⁿ subsets for n distinct elements.",
      "activeLine": 18,
      "codeInsight": "Subsets lists every selection of elements by deciding whether to include or exclude each element."
    }
  ],
  "complexity": {
    "time": "O(n × 2ⁿ) when each subset is copied into the output.",
    "space": "O(n) recursion state, plus O(n × 2ⁿ) stored output."
  },
  "quiz": {
    "question": "Which explanation best describes Subsets?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "Subsets lists every selection of elements by deciding whether to include or exclude each element.",
        "correct": true
      },
      {
        "key": "C",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      }
    ],
    "correctText": "Correct. Subsets lists every selection of elements by deciding whether to include or exclude each element.",
    "incorrectText": "Try again. Subsets lists every selection of elements by deciding whether to include or exclude each element. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "recursion-and-backtracking",
  "algorithmSlug": "subsets",
  "runnerInput": [
    [
      1,
      2
    ]
  ],
  "animation": {
    "type": "tree-operation",
    "title": "Subsets tree state",
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
        "ruleLabel": "Subsets invariant",
        "rule": "Defines subsets and names the input values; edits to those inputs change the visual state and output.",
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
        "ruleLabel": "Subsets invariant",
        "rule": "Defines subsets and names the input values; edits to those inputs change the visual state and output.",
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
        "ruleLabel": "Subsets invariant",
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
        "ruleLabel": "Subsets invariant",
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
    "example": "For [1, 2], the subsets are [], [1], [2], and [1, 2]. There are 2ⁿ subsets for n distinct elements.",
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
    "checkpoint": "Explain this in your own words: Subsets lists every selection of elements by deciding whether to include or exclude each element."
  },
  "relatedLinks": []
};
