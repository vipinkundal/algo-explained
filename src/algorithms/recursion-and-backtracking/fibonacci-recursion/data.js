// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "fibonacci-recursion",
  "title": "Fibonacci Recursion",
  "category": "Recursion and Backtracking",
  "route": "/algorithms/recursion/fibonacci-recursion",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "recursion-tree",
  "icon": "school",
  "codePath": "./src/algorithms/recursion-and-backtracking/fibonacci-recursion/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Fibonacci adds the two previous sequence values; a direct recursive implementation repeats many of the same calls.",
  "problem": "Fibonacci adds the two previous sequence values; a direct recursive implementation repeats many of the same calls.",
  "concept": "Fibonacci adds the two previous sequence values; a direct recursive implementation repeats many of the same calls.",
  "logicSummary": "Fibonacci adds the two previous sequence values; a direct recursive implementation repeats many of the same calls.",
  "transitionSummary": "F(0) = 0, F(1) = 1, F(2) = 1, F(3) = 2, F(4) = 3. F(4) and F(3) both need F(2).",
  "codeInsight": "Fibonacci adds the two previous sequence values; a direct recursive implementation repeats many of the same calls.",
  "realLifeExample": "F(0) = 0, F(1) = 1, F(2) = 1, F(3) = 2, F(4) = 3. F(4) and F(3) both need F(2).",
  "whenToUse": "Fibonacci adds the two previous sequence values; a direct recursive implementation repeats many of the same calls.",
  "memoryTrick": "Fibonacci adds the two previous sequence values; a direct recursive implementation repeats many of the same calls.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "Fibonacci adds the two previous sequence values; a direct recursive implementation repeats many of the same calls."
    },
    {
      "title": "Work through a small case",
      "text": "F(0) = 0, F(1) = 1, F(2) = 1, F(3) = 2, F(4) = 3. F(4) and F(3) both need F(2)."
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
      "note": "Fibonacci adds the two previous sequence values; a direct recursive implementation repeats many of the same calls.",
      "activeLine": 5,
      "codeInsight": "Fibonacci adds the two previous sequence values; a direct recursive implementation repeats many of the same calls."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "F(0) = 0, F(1) = 1, F(2) = 1, F(3) = 2, F(4) = 3. F(4) and F(3) both need F(2).",
      "activeLine": 6,
      "codeInsight": "Fibonacci adds the two previous sequence values; a direct recursive implementation repeats many of the same calls."
    }
  ],
  "complexity": {
    "time": "O(2ⁿ) as a simple upper bound for direct recursion without saved results.",
    "space": "O(n) maximum recursion depth; the two branches do not all stay active together."
  },
  "quiz": {
    "question": "Which explanation best describes Fibonacci Recursion?",
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
        "text": "Fibonacci adds the two previous sequence values; a direct recursive implementation repeats many of the same calls.",
        "correct": true
      }
    ],
    "correctText": "Correct. Fibonacci adds the two previous sequence values; a direct recursive implementation repeats many of the same calls.",
    "incorrectText": "Try again. Fibonacci adds the two previous sequence values; a direct recursive implementation repeats many of the same calls. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "recursion-and-backtracking",
  "algorithmSlug": "fibonacci-recursion",
  "runnerInput": [
    6
  ],
  "relatedLinks": [
    {
      "id": "ds-recursion-fibonacci",
      "title": "Recursion Fibonacci",
      "label": "C/C++ recursion source"
    }
  ],
  "animation": {
    "type": "tree-operation",
    "title": "Fibonacci Recursion tree state",
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
        "ruleLabel": "Fibonacci Recursion invariant",
        "rule": "Defines fibonacciRecursion and names the input value; edits to those inputs change the visual state and output.",
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
        "ruleLabel": "Fibonacci Recursion invariant",
        "rule": "Defines fibonacciRecursion and names the input value; edits to those inputs change the visual state and output.",
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
        "ruleLabel": "Fibonacci Recursion invariant",
        "rule": "Checks value <= 1; only the branch that preserves Fibonacci Recursion's invariant is allowed to change state.",
        "activeNode": "12",
        "targetNode": "2",
        "replacementNode": "2",
        "mutedNodes": []
      },
      {
        "phase": "Unwind",
        "title": "Return or backtrack",
        "note": "The result is combined or the choice is removed.",
        "ruleLabel": "Fibonacci Recursion invariant",
        "rule": "Returns fibonacciRecursion(value - 1) + fibonacciRecursion(value - 2), the final value maintained by Fibonacci Recursion's code path.",
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
    "example": "F(0) = 0, F(1) = 1, F(2) = 1, F(3) = 2, F(4) = 3. F(4) and F(3) both need F(2).",
    "sampleInput": [
      6
    ],
    "sampleResult": 8,
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
    "checkpoint": "Explain this in your own words: Fibonacci adds the two previous sequence values; a direct recursive implementation repeats many of the same calls."
  }
};
