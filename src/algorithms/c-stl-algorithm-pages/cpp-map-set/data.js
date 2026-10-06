// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "cpp-map-set",
  "title": "C++ map / set",
  "category": "C++ STL Algorithm Pages",
  "route": "/algorithms/cpp-stl/map-set",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "balanced-tree",
  "icon": "school",
  "codePath": "./src/algorithms/c-stl-algorithm-pages/cpp-map-set/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "std::map stores ordered key–value pairs; std::set stores ordered unique keys.",
  "problem": "std::map stores ordered key–value pairs; std::set stores ordered unique keys.",
  "concept": "std::map stores ordered key–value pairs; std::set stores ordered unique keys.",
  "logicSummary": "std::map stores ordered key–value pairs; std::set stores ordered unique keys.",
  "transitionSummary": "A set built from [3, 1, 3] contains [1, 3]. A map can associate a name with a score. Lookup is logarithmic in the number of entries.",
  "codeInsight": "std::map stores ordered key–value pairs; std::set stores ordered unique keys.",
  "realLifeExample": "A set built from [3, 1, 3] contains [1, 3]. A map can associate a name with a score. Lookup is logarithmic in the number of entries.",
  "whenToUse": "std::map stores ordered key–value pairs; std::set stores ordered unique keys.",
  "memoryTrick": "std::map stores ordered key–value pairs; std::set stores ordered unique keys.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "std::map stores ordered key–value pairs; std::set stores ordered unique keys."
    },
    {
      "title": "Work through a small case",
      "text": "A set built from [3, 1, 3] contains [1, 3]. A map can associate a name with a score. Lookup is logarithmic in the number of entries."
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
      "name": "counts",
      "purpose": "Records keys or membership so later steps can look them up without scanning the original collection again."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "std::map stores ordered key–value pairs; std::set stores ordered unique keys.",
      "activeLine": 5,
      "codeInsight": "std::map stores ordered key–value pairs; std::set stores ordered unique keys."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "A set built from [3, 1, 3] contains [1, 3]. A map can associate a name with a score. Lookup is logarithmic in the number of entries.",
      "activeLine": 8,
      "codeInsight": "std::map stores ordered key–value pairs; std::set stores ordered unique keys."
    }
  ],
  "complexity": {
    "time": "O(log n) lookup, insertion, or removal in ordered associative containers.",
    "space": "O(n) stored entries."
  },
  "quiz": {
    "question": "Which explanation best describes C++ map / set?",
    "options": [
      {
        "key": "A",
        "text": "std::map stores ordered key–value pairs; std::set stores ordered unique keys.",
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
    "correctText": "Correct. std::map stores ordered key–value pairs; std::set stores ordered unique keys.",
    "incorrectText": "Try again. std::map stores ordered key–value pairs; std::set stores ordered unique keys. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "c-stl-algorithm-pages",
  "algorithmSlug": "cpp-map-set",
  "runnerInput": [
    [
      1,
      2,
      2
    ]
  ],
  "animation": {
    "type": "tree-operation",
    "title": "C++ map / set tree state",
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
        "phase": "Root",
        "title": "Check current node",
        "note": "The code starts by handling missing nodes or the current root.",
        "ruleLabel": "C++ map / set invariant",
        "rule": "Defines cppMapSet and names the input values; edits to those inputs change the visual state and output.",
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
        "phase": "Node state",
        "title": "Read balance invariant",
        "note": "The current node controls the next step.",
        "ruleLabel": "C++ map / set invariant",
        "rule": "Creates counts for fast membership or lookup checks while the scan runs.",
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
        "phase": "Child step",
        "title": "Rotate or recolor when height/color rules are violated",
        "note": "The algorithm moves to a child, combines a value, or repairs structure.",
        "ruleLabel": "C++ map / set invariant",
        "rule": "Creates counts for fast membership or lookup checks while the scan runs.",
        "activeNode": "12",
        "targetNode": "2",
        "replacementNode": "2",
        "mutedNodes": []
      },
      {
        "phase": "Tree result",
        "title": "Return result",
        "note": "The final traversal, path, measurement, or tree state is returned.",
        "ruleLabel": "C++ map / set invariant",
        "rule": "Returns the final state object { map: Object.fromEntries(counts), set: [...new Set(values)] }, exposing the exact fields the visualizer has been tracking.",
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
    "example": "A set built from [3, 1, 3] contains [1, 3]. A map can associate a name with a score. Lookup is logarithmic in the number of entries.",
    "sampleInput": [
      [
        1,
        2,
        2
      ]
    ],
    "sampleResult": {
      "map": {
        "1": 1,
        "2": 2
      },
      "set": [
        1,
        2
      ]
    },
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
    "checkpoint": "Explain this in your own words: std::map stores ordered key–value pairs; std::set stores ordered unique keys."
  },
  "relatedLinks": []
};
