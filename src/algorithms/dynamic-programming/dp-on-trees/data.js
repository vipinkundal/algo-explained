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
  "meaning": "DP on Trees is taught with its own DP state definition, transition, code trace, and answer state.",
  "problem": "Choose a maximum-value set of tree nodes where no chosen node is directly connected to another chosen node.",
  "concept": "Tree DP stores two values per node: take means include this node, skip means exclude this node.",
  "logicSummary": "Traverse children first, compute their take/skip pairs, then combine those pairs at the parent.",
  "transitionSummary": "take = node.value + left.skip + right.skip; skip = max(left.take,left.skip) + max(right.take,right.skip).",
  "codeInsight": "Postorder recursion is required because a parent cannot decide take or skip until every child DP pair is known.",
  "realLifeExample": "Use tree DP for hierarchy selection, independent set on trees, and manager/subordinate planning constraints.",
  "whenToUse": "Use DP on Trees when each subtree can return a compact summary to its parent.",
  "memoryTrick": "Take parent means skip children; skip parent means children choose their best.",
  "visualizerCaption": "The trace follows postorder combination of take/skip values through the sample tree.",
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
    "question": "Which state keeps DP on Trees correct?",
    "options": [
      {
        "key": "A",
        "text": "Return take and skip for every subtree, then combine children in postorder.",
        "correct": true
      },
      {
        "key": "B",
        "text": "Reuse another DP recurrence without matching this algorithm's state.",
        "correct": false
      },
      {
        "key": "C",
        "text": "Read the final answer before the required dependency states are solved.",
        "correct": false
      }
    ],
    "correctText": "Correct. DP on Trees works when the state meaning, transition, and answer state stay aligned.",
    "incorrectText": "Not quite. DP on Trees needs its own state, dependencies, and stop condition."
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
  }
};
