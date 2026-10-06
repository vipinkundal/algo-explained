// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "permutations",
  "title": "Permutations",
  "category": "Recursion and Backtracking",
  "route": "/algorithms/backtracking/permutations",
  "phase": 2,
  "priority": "high",
  "visualizerType": "swap-tree",
  "icon": "school",
  "codePath": "./src/algorithms/recursion-and-backtracking/permutations/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Permutations lists arrangements of elements by trying each unused element in the next position.",
  "problem": "Permutations lists arrangements of elements by trying each unused element in the next position.",
  "concept": "Permutations lists arrangements of elements by trying each unused element in the next position.",
  "logicSummary": "Permutations lists arrangements of elements by trying each unused element in the next position.",
  "transitionSummary": "For [1, 2, 3], both [1, 2, 3] and [2, 1, 3] are different arrangements. There are 3! = 6 arrangements.",
  "codeInsight": "Permutations lists arrangements of elements by trying each unused element in the next position.",
  "realLifeExample": "For [1, 2, 3], both [1, 2, 3] and [2, 1, 3] are different arrangements. There are 3! = 6 arrangements.",
  "whenToUse": "Permutations lists arrangements of elements by trying each unused element in the next position.",
  "memoryTrick": "Permutations lists arrangements of elements by trying each unused element in the next position.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Permutations lists arrangements of elements by trying each unused element in the next position."
    },
    {
      "title": "Work through a small case",
      "text": "For [1, 2, 3], both [1, 2, 3] and [2, 1, 3] are different arrangements. There are 3! = 6 arrangements."
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
    },
    {
      "name": "used",
      "purpose": "Remembers how many items are present; this supports bounds, size reporting, or the stopping rule."
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
      "note": "Permutations lists arrangements of elements by trying each unused element in the next position.",
      "activeLine": 5,
      "codeInsight": "Permutations lists arrangements of elements by trying each unused element in the next position."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "For [1, 2, 3], both [1, 2, 3] and [2, 1, 3] are different arrangements. There are 3! = 6 arrangements.",
      "activeLine": 23,
      "codeInsight": "Permutations lists arrangements of elements by trying each unused element in the next position."
    }
  ],
  "complexity": {
    "time": "O(n × n!) when n-element arrangements are copied into the output.",
    "space": "O(n) recursion/choice state, plus O(n × n!) stored output."
  },
  "quiz": {
    "question": "Which explanation best describes Permutations?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      },
      {
        "key": "C",
        "text": "Permutations lists arrangements of elements by trying each unused element in the next position.",
        "correct": true
      }
    ],
    "correctText": "Correct. Permutations lists arrangements of elements by trying each unused element in the next position.",
    "incorrectText": "Try again. Permutations lists arrangements of elements by trying each unused element in the next position. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "recursion-and-backtracking",
  "algorithmSlug": "permutations",
  "runnerInput": [
    [
      1,
      2,
      3
    ]
  ],
  "animation": {
    "type": "tree-operation",
    "title": "Permutations tree state",
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
        "ruleLabel": "Permutations invariant",
        "rule": "Defines permutations and names the input values; edits to those inputs change the visual state and output.",
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
        "ruleLabel": "Permutations invariant",
        "rule": "Defines permutations and names the input values; edits to those inputs change the visual state and output.",
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
        "ruleLabel": "Permutations invariant",
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
        "ruleLabel": "Permutations invariant",
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
    "example": "For [1, 2, 3], both [1, 2, 3] and [2, 1, 3] are different arrangements. There are 3! = 6 arrangements.",
    "sampleInput": [
      [
        1,
        2,
        3
      ]
    ],
    "sampleResult": [
      [
        1,
        2,
        3
      ],
      [
        1,
        3,
        2
      ],
      [
        2,
        1,
        3
      ],
      [
        2,
        3,
        1
      ],
      [
        3,
        1,
        2
      ],
      [
        3,
        2,
        1
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
    "checkpoint": "Explain this in your own words: Permutations lists arrangements of elements by trying each unused element in the next position."
  },
  "relatedLinks": []
};
