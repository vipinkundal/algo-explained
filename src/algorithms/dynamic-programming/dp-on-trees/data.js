// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "dp-on-trees",
  "title": "DP on Trees",
  "category": "Dynamic Programming",
  "route": "/algorithms/dynamic-programming/dp-on-trees",
  "phase": 4,
  "priority": "medium",
  "visualizerType": "tree-dp",
  "icon": "table_chart",
  "codePath": "./src/algorithms/dynamic-programming/dp-on-trees/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Choose a maximum-value set of tree nodes where no chosen node is directly connected to another chosen node.",
  "problem": "Choose a maximum-value set of tree nodes where no chosen node is directly connected to another chosen node.",
  "concept": "Tree DP stores two values per node: take means include this node, skip means exclude this node.",
  "logicSummary": "Traverse children first, compute their take/skip pairs, then combine those pairs at the parent.",
  "transitionSummary": "take = node.value + left.skip + right.skip; skip = max(left.take,left.skip) + max(right.take,right.skip).",
  "codeInsight": "Postorder recursion is required because a parent cannot decide take or skip until every child DP pair is known.",
  "realLifeExample": "Use tree DP for hierarchy selection, independent set on trees, and manager/subordinate planning constraints.",
  "whenToUse": "Use DP on Trees when each subtree can return a compact summary to its parent.",
  "memoryTrick": "Take parent means skip children; skip parent means children choose their best.",
  "visualizerCaption": "Explore DP on Trees through a sample teaching model, then compare it with the runnable result.",
  "logicSteps": [
    {
      "title": "Define node state",
      "text": "Each node returns { take, skip } for its subtree."
    },
    {
      "title": "Solve children first",
      "text": "Postorder traversal gives child summaries before the parent combines them."
    },
    {
      "title": "Compute take",
      "text": "Taking a node forces both children to be skipped."
    },
    {
      "title": "Compute skip",
      "text": "Skipping a node lets each child choose its better state."
    }
  ],
  "variables": [
    {
      "name": "root",
      "purpose": "Root of the input tree."
    },
    {
      "name": "take",
      "purpose": "Best sum when the current node is selected."
    },
    {
      "name": "skip",
      "purpose": "Best sum when the current node is not selected."
    },
    {
      "name": "left, right",
      "purpose": "Child DP summaries."
    }
  ],
  "dryRun": [
    {
      "label": "Leaf 3",
      "title": "Leaf returns {3, 0}",
      "note": "Taking a leaf gives its value; skipping gives 0.",
      "activeLine": 4,
      "codeInsight": "The null base case lets leaves combine empty children."
    },
    {
      "label": "Node 4",
      "title": "Combine children 1 and 3",
      "note": "take = 4, skip = 1 + 3 = 4.",
      "activeLine": 8,
      "codeInsight": "take reads child skip values only."
    },
    {
      "label": "Node 5",
      "title": "Right subtree returns {5, 1}",
      "note": "Skipping 5 allows child 1, but taking 5 is better.",
      "activeLine": 9,
      "codeInsight": "skip reads each child's max state."
    },
    {
      "label": "Root",
      "title": "Best root answer is 9",
      "note": "Root 3 can take 4 from left skip and 2 from right skip for 9.",
      "activeLine": 13,
      "codeInsight": "The final answer is max(root.take, root.skip)."
    }
  ],
  "complexity": {
    "time": "O(n).",
    "space": "O(h) recursion stack, where h is tree height."
  },
  "quiz": {
    "question": "Which explanation best describes DP on Trees?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "Choose a maximum-value set of tree nodes where no chosen node is directly connected to another chosen node.",
        "correct": true
      },
      {
        "key": "C",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      }
    ],
    "correctText": "Correct. Choose a maximum-value set of tree nodes where no chosen node is directly connected to another chosen node.",
    "incorrectText": "Try again. Choose a maximum-value set of tree nodes where no chosen node is directly connected to another chosen node. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "dynamic-programming",
  "algorithmSlug": "dp-on-trees",
  "runnerInput": [
    {
      "value": 3,
      "left": {
        "value": 4,
        "left": {
          "value": 1
        },
        "right": {
          "value": 3
        }
      },
      "right": {
        "value": 5,
        "right": {
          "value": 1
        }
      }
    }
  ],
  "animation": {
    "type": "state-flow",
    "static": true,
    "title": "DP on Trees state trace",
    "ruleLabel": "DP invariant",
    "rule": "take = node.value + left.skip + right.skip; skip = max(left.take,left.skip) + max(right.take,right.skip).",
    "states": [
      "leaf 1 -> {1,0}",
      "leaf 3 -> {3,0}",
      "node 4 -> {4,4}",
      "node 5 -> {5,1}",
      "root 3 -> {9,9}"
    ],
    "steps": [
      {
        "phase": "leaf",
        "title": "Solve leaf nodes",
        "note": "Leaves produce {value, 0}.",
        "ruleLabel": "DP invariant",
        "rule": "take = node.value + left.skip + right.skip; skip = max(left.take,left.skip) + max(right.take,right.skip).",
        "activeState": 0
      },
      {
        "phase": "left subtree",
        "title": "Combine node 4",
        "note": "Node 4 can be taken or skipped for value 4.",
        "ruleLabel": "DP invariant",
        "rule": "take = node.value + left.skip + right.skip; skip = max(left.take,left.skip) + max(right.take,right.skip).",
        "activeState": 2
      },
      {
        "phase": "right subtree",
        "title": "Combine node 5",
        "note": "Taking 5 beats skipping it.",
        "ruleLabel": "DP invariant",
        "rule": "take = node.value + left.skip + right.skip; skip = max(left.take,left.skip) + max(right.take,right.skip).",
        "activeState": 3
      },
      {
        "phase": "answer",
        "title": "Root answer is 9",
        "note": "The root summary is {take: 9, skip: 9}.",
        "ruleLabel": "DP invariant",
        "rule": "take = node.value + left.skip + right.skip; skip = max(left.take,left.skip) + max(right.take,right.skip).",
        "activeState": 4
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "A dynamic-programming state names a smaller question. A recurrence explains how its answer uses answers you already know.",
    "family": "Saved subproblems",
    "example": "Define node state: Each node returns { take, skip } for its subtree. Solve children first: Postorder traversal gives child summaries before the parent combines them. Compute take: Taking a node forces both children to be skipped. Compute skip: Skipping a node lets each child choose its better state.",
    "sampleInput": [
      {
        "value": 3,
        "left": {
          "value": 4,
          "left": {
            "value": 1
          },
          "right": {
            "value": 3
          }
        },
        "right": {
          "value": 5,
          "right": {
            "value": 1
          }
        }
      }
    ],
    "sampleResult": 9,
    "sampleScope": "This is the result of the unedited JavaScript function with the sample arguments. Changing the input or code can change the result.",
    "terms": [
      [
        "State",
        "One precisely defined subproblem."
      ],
      [
        "Recurrence",
        "A rule for computing a state from smaller states."
      ],
      [
        "Base case",
        "A known answer that starts the table or recursion."
      ]
    ],
    "pitfall": "Define what each table entry means before filling it. Check base cases, evaluation order, and whether a choice can be reused.",
    "checkpoint": "Explain this in your own words: Choose a maximum-value set of tree nodes where no chosen node is directly connected to another chosen node."
  },
  "relatedLinks": []
};
