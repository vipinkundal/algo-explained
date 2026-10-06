// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "cpp-priority-queue",
  "title": "C++ priority_queue",
  "category": "C++ STL Algorithm Pages",
  "route": "/algorithms/cpp-stl/priority-queue",
  "phase": 1,
  "priority": "high",
  "visualizerType": "heap-tree",
  "icon": "school",
  "codePath": "./src/algorithms/c-stl-algorithm-pages/cpp-priority-queue/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "std::priority_queue exposes the highest-priority element first; the default comparison puts the largest value on top.",
  "problem": "std::priority_queue exposes the highest-priority element first; the default comparison puts the largest value on top.",
  "concept": "std::priority_queue exposes the highest-priority element first; the default comparison puts the largest value on top.",
  "logicSummary": "std::priority_queue exposes the highest-priority element first; the default comparison puts the largest value on top.",
  "transitionSummary": "Push 2, 7, and 4: top() is 7. After pop(), top() is 4. A min-heap comparison makes the smallest value come first.",
  "codeInsight": "std::priority_queue exposes the highest-priority element first; the default comparison puts the largest value on top.",
  "realLifeExample": "Push 2, 7, and 4: top() is 7. After pop(), top() is 4. A min-heap comparison makes the smallest value come first.",
  "whenToUse": "std::priority_queue exposes the highest-priority element first; the default comparison puts the largest value on top.",
  "memoryTrick": "std::priority_queue exposes the highest-priority element first; the default comparison puts the largest value on top.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "std::priority_queue exposes the highest-priority element first; the default comparison puts the largest value on top."
    },
    {
      "title": "Work through a small case",
      "text": "Push 2, 7, and 4: top() is 7. After pop(), top() is 4. A min-heap comparison makes the smallest value come first."
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
      "name": "count = values.length",
      "purpose": "An input to the computation. Compare its position in the function signature with the corresponding sample argument."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "std::priority_queue exposes the highest-priority element first; the default comparison puts the largest value on top.",
      "activeLine": 5,
      "codeInsight": "std::priority_queue exposes the highest-priority element first; the default comparison puts the largest value on top."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "Push 2, 7, and 4: top() is 7. After pop(), top() is 4. A min-heap comparison makes the smallest value come first.",
      "activeLine": 6,
      "codeInsight": "std::priority_queue exposes the highest-priority element first; the default comparison puts the largest value on top."
    }
  ],
  "complexity": {
    "time": "O(1) top access; O(log n) push or pop.",
    "space": "O(n) stored elements."
  },
  "quiz": {
    "question": "Which explanation best describes C++ priority_queue?",
    "options": [
      {
        "key": "A",
        "text": "std::priority_queue exposes the highest-priority element first; the default comparison puts the largest value on top.",
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
    "correctText": "Correct. std::priority_queue exposes the highest-priority element first; the default comparison puts the largest value on top.",
    "incorrectText": "Try again. std::priority_queue exposes the highest-priority element first; the default comparison puts the largest value on top. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "c-stl-algorithm-pages",
  "algorithmSlug": "cpp-priority-queue",
  "runnerInput": [
    [
      4,
      1,
      5,
      2
    ],
    2
  ],
  "animation": {
    "type": "tree-operation",
    "title": "C++ priority_queue tree state",
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
        "phase": "Queue",
        "title": "Read queue action",
        "note": "The code receives the next value or command.",
        "ruleLabel": "C++ priority_queue invariant",
        "rule": "Defines cppPriorityQueue and names the input values, count = values.length; edits to those inputs change the visual state and output.",
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
        "phase": "Queue front",
        "title": "Inspect queue",
        "note": "The active state must still satisfy first-in, first-out state.",
        "ruleLabel": "C++ priority_queue invariant",
        "rule": "Defines cppPriorityQueue and names the input values, count = values.length; edits to those inputs change the visual state and output.",
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
        "phase": "Enqueue / dequeue",
        "title": "Enqueue, dequeue, peek, or evict entries",
        "note": "Only the necessary queue fields are changed.",
        "ruleLabel": "C++ priority_queue invariant",
        "rule": "Returns the final array-style answer [...values].sort((a, b) => b - a).slice(0, count), so the last frame should show the chosen positions or sequence.",
        "activeNode": "12",
        "targetNode": "2",
        "replacementNode": "2",
        "mutedNodes": []
      },
      {
        "phase": "Result",
        "title": "Return visible result",
        "note": "The return value or printed state confirms the operation.",
        "ruleLabel": "C++ priority_queue invariant",
        "rule": "Returns the final array-style answer [...values].sort((a, b) => b - a).slice(0, count), so the last frame should show the chosen positions or sequence.",
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
    "example": "Push 2, 7, and 4: top() is 7. After pop(), top() is 4. A min-heap comparison makes the smallest value come first.",
    "sampleInput": [
      [
        4,
        1,
        5,
        2
      ],
      2
    ],
    "sampleResult": [
      5,
      4
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
    "checkpoint": "Explain this in your own words: std::priority_queue exposes the highest-priority element first; the default comparison puts the largest value on top."
  },
  "relatedLinks": []
};
