// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "red-black-tree-basics",
  "title": "Red-Black Tree Basics",
  "category": "Trees",
  "route": "/algorithms/trees/red-black-tree-basics",
  "phase": 4,
  "priority": "low",
  "visualizerType": "balanced-tree",
  "icon": "account_tree",
  "codePath": "./src/algorithms/trees/red-black-tree-basics/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "This reference page summarizes the sample tree by computing height, reading the root color, and confirming that a root exists for color-rule checks.",
  "problem": "This reference page summarizes the sample tree by computing height, reading the root color, and confirming that a root exists for color-rule checks.",
  "concept": "The included code is a basics summary: height(root), root?.color || \"black\", and Boolean(root).",
  "logicSummary": "Compute the sample tree height, read the root color as black, and return the red-black summary object.",
  "transitionSummary": "Each step checks one field returned by redBlackTreeBasics rather than performing rotations.",
  "codeInsight": "The reference implementation reports rootColor and a basic non-empty balancedByColorRules flag; it does not implement insertion repair.",
  "realLifeExample": "Red-black trees are used in ordered maps and sets where operations should stay logarithmic.",
  "whenToUse": "Use red-black trees when you need a balanced ordered structure with less strict balancing than AVL.",
  "memoryTrick": "Red-black basics: root is black, colors constrain paths, rotations repair updates.",
  "visualizerCaption": "Explore Red-Black Tree Basics through a sample teaching model, then compare it with the runnable result.",
  "logicSteps": [
    {
      "title": "Check node",
      "text": "Compute the tree height."
    },
    {
      "title": "Read node state",
      "text": "Read the root color."
    },
    {
      "title": "Move/combine",
      "text": "Confirm a root exists for color-rule checks."
    },
    {
      "title": "Return tree result",
      "text": "Return the summary object."
    }
  ],
  "variables": [
    {
      "name": "root",
      "purpose": "The tree node where recursion or traversal begins."
    },
    {
      "name": "height(root)",
      "purpose": "Computes the number of node levels in the sample tree."
    },
    {
      "name": "rootColor",
      "purpose": "Reads root.color and falls back to black when no color is set."
    },
    {
      "name": "transition / stop rule",
      "purpose": "Return height, rootColor, and whether a non-empty root can satisfy basic color-rule checks."
    }
  ],
  "dryRun": [
    {
      "label": "Root",
      "title": "Measure tree height",
      "note": "The sample tree has three node levels.",
      "activeLine": 10,
      "codeInsight": "Calls height(root) for the height field in the returned object."
    },
    {
      "label": "Node state",
      "title": "Read root color",
      "note": "The sample root carries color black.",
      "activeLine": 10,
      "codeInsight": "Reads root?.color || \"black\", producing rootColor: \"black\"."
    },
    {
      "label": "Child step",
      "title": "Confirm non-empty tree",
      "note": "Because root exists, the simple color-rule flag is true.",
      "activeLine": 10,
      "codeInsight": "Uses Boolean(root), so balancedByColorRules is true for the non-empty sample."
    },
    {
      "label": "Tree result",
      "title": "Return red-black summary",
      "note": "The function returns { height: 3, rootColor: \"black\", balancedByColorRules: true }.",
      "activeLine": 10,
      "codeInsight": "Returns the summary object built from height(root), root color, and Boolean(root)."
    }
  ],
  "complexity": {
    "time": "O(n) over tree nodes.",
    "space": "O(h) recursion or traversal state."
  },
  "quiz": {
    "question": "Which explanation best describes Red-Black Tree Basics?",
    "options": [
      {
        "key": "A",
        "text": "This reference page summarizes the sample tree by computing height, reading the root color, and confirming that a root exists for color-rule checks.",
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
    "correctText": "Correct. This reference page summarizes the sample tree by computing height, reading the root color, and confirming that a root exists for color-rule checks.",
    "incorrectText": "Try again. This reference page summarizes the sample tree by computing height, reading the root color, and confirming that a root exists for color-rule checks. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "trees",
  "algorithmSlug": "red-black-tree-basics",
  "runnerInput": [
    {
      "value": 4,
      "left": {
        "value": 2,
        "left": {
          "value": 1
        },
        "right": {
          "value": 3
        }
      },
      "right": {
        "value": 6,
        "left": {
          "value": 5
        },
        "right": {
          "value": 7
        }
      },
      "color": "black"
    }
  ],
  "animation": {
    "type": "tree-operation",
    "title": "Red-Black Tree Basics tree state",
    "legend": [
      {
        "className": "current",
        "label": "Root / checked"
      },
      {
        "className": "target",
        "label": "Height input"
      },
      {
        "className": "replacement",
        "label": "Color summary"
      }
    ],
    "nodes": [
      {
        "id": "4",
        "label": "4",
        "x": 340,
        "y": 58
      },
      {
        "id": "2",
        "label": "2",
        "x": 190,
        "y": 150
      },
      {
        "id": "6",
        "label": "6",
        "x": 490,
        "y": 150
      },
      {
        "id": "1",
        "label": "1",
        "x": 110,
        "y": 255
      },
      {
        "id": "3",
        "label": "3",
        "x": 270,
        "y": 255
      },
      {
        "id": "5",
        "label": "5",
        "x": 420,
        "y": 255
      },
      {
        "id": "7",
        "label": "7",
        "x": 570,
        "y": 255
      }
    ],
    "edges": [
      {
        "from": "4",
        "to": "2"
      },
      {
        "from": "4",
        "to": "6"
      },
      {
        "from": "2",
        "to": "1"
      },
      {
        "from": "2",
        "to": "3"
      },
      {
        "from": "6",
        "to": "5"
      },
      {
        "from": "6",
        "to": "7"
      }
    ],
    "steps": [
      {
        "phase": "Root",
        "title": "Measure tree height",
        "note": "The sample tree has three levels, so height(root) returns 3.",
        "ruleLabel": "Red-Black Tree Basics invariant",
        "rule": "height(root) is computed before the summary object is returned.",
        "activeNode": "4",
        "targetNode": "2",
        "replacementNode": "6",
        "mutedNodes": [],
        "nodeLabels": {
          "2": "h=2",
          "4": "4 h=3",
          "6": "h=2"
        }
      },
      {
        "phase": "Node state",
        "title": "Read black root",
        "note": "The runner input marks root 4 as black.",
        "ruleLabel": "Red-Black Tree Basics invariant",
        "rule": "root?.color || \"black\" returns \"black\" for this sample.",
        "activeNode": "4",
        "targetNode": "",
        "replacementNode": "4",
        "mutedNodes": [
          "1",
          "2",
          "3",
          "5",
          "6",
          "7"
        ],
        "nodeLabels": {
          "4": "4 black"
        }
      },
      {
        "phase": "Child step",
        "title": "Confirm non-empty root",
        "note": "Because root exists, Boolean(root) is true for balancedByColorRules.",
        "ruleLabel": "Red-Black Tree Basics invariant",
        "rule": "This reference page reports the basics summary; it does not simulate rotations.",
        "activeNode": "4",
        "targetNode": "2",
        "replacementNode": "4",
        "mutedNodes": [],
        "nodeLabels": {
          "2": "child",
          "4": "root ok",
          "6": "child"
        }
      },
      {
        "phase": "Tree result",
        "title": "Return red-black summary",
        "note": "The function returns { height: 3, rootColor: \"black\", balancedByColorRules: true }.",
        "ruleLabel": "Red-Black Tree Basics invariant",
        "rule": "The returned object matches the fields in the solution code.",
        "activeNode": "4",
        "targetNode": "2",
        "replacementNode": "6",
        "mutedNodes": [],
        "nodeLabels": {
          "2": "height",
          "4": "black",
          "6": "height"
        }
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "A tree branches from a root. A child is one level below its parent; a leaf has no children.",
    "family": "Trees and links",
    "example": "Check node: Compute the tree height. Read node state: Read the root color. Move/combine: Confirm a root exists for color-rule checks. Return tree result: Return the summary object.",
    "sampleInput": [
      {
        "value": 4,
        "left": {
          "value": 2,
          "left": {
            "value": 1
          },
          "right": {
            "value": 3
          }
        },
        "right": {
          "value": 6,
          "left": {
            "value": 5
          },
          "right": {
            "value": 7
          }
        },
        "color": "black"
      }
    ],
    "sampleResult": {
      "height": 3,
      "rootColor": "black",
      "balancedByColorRules": true
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
    "checkpoint": "Explain this in your own words: This reference page summarizes the sample tree by computing height, reading the root color, and confirming that a root exists for color-rule checks."
  },
  "relatedLinks": []
};
