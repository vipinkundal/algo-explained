// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "longest-increasing-subsequence",
  "title": "Longest Increasing Subsequence",
  "category": "Dynamic Programming",
  "route": "/algorithms/dynamic-programming/longest-increasing-subsequence",
  "phase": 3,
  "priority": "high",
  "visualizerType": "sequence-dp",
  "icon": "table_chart",
  "codePath": "./src/algorithms/dynamic-programming/longest-increasing-subsequence/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Find the length of the longest subsequence whose values strictly increase while keeping original order.",
  "problem": "Find the length of the longest subsequence whose values strictly increase while keeping original order.",
  "concept": "The O(n log n) LIS method stores tails[length - 1] as the smallest possible tail value for any increasing subsequence of that length.",
  "logicSummary": "Scan the numbers left to right, binary-search the first tail that is greater than or equal to the current number, and replace it.",
  "transitionSummary": "For each value, replace the lower_bound position in tails; if no position exists, append a longer subsequence tail.",
  "codeInsight": "Replacing a tail does not claim that exact subsequence is final; it keeps the best future extension candidate for that length.",
  "realLifeExample": "Use LIS for ranking trends, envelope nesting, timeline ordering, and any problem asking for longest ordered growth.",
  "whenToUse": "Use this version when only the LIS length is needed and strict increasing order matters.",
  "memoryTrick": "Smallest tail leaves the most room to grow.",
  "visualizerCaption": "Explore Longest Increasing Subsequence through a sample teaching model, then compare it with the runnable result.",
  "logicSteps": [
    {
      "title": "Define tails",
      "text": "tails[k] is the minimum tail value seen for an increasing subsequence of length k + 1."
    },
    {
      "title": "Process each value",
      "text": "Use binary search to find the first tail that is at least the current value."
    },
    {
      "title": "Replace or append",
      "text": "Replace to improve a tail, or append when the value extends every known length."
    },
    {
      "title": "Return tails length",
      "text": "The number of maintained tails equals the LIS length."
    }
  ],
  "variables": [
    {
      "name": "nums",
      "purpose": "Input sequence."
    },
    {
      "name": "tails",
      "purpose": "Best tail value for each subsequence length."
    },
    {
      "name": "left, right",
      "purpose": "Binary-search bounds inside tails."
    },
    {
      "name": "position",
      "purpose": "The tail slot replaced or appended for the current value."
    }
  ],
  "dryRun": [
    {
      "label": "10",
      "title": "Start tails = [10]",
      "note": "The first number creates a length-1 subsequence.",
      "activeLine": 4,
      "codeInsight": "tails starts empty and grows from scanned values."
    },
    {
      "label": "2",
      "title": "Replace the length-1 tail",
      "note": "2 replaces 9/10 because a smaller tail is better for future values.",
      "activeLine": 10,
      "codeInsight": "lower_bound finds the first tail that is not smaller than value."
    },
    {
      "label": "7",
      "title": "Extend after 3",
      "note": "7 appends after [2, 3], producing a length-3 candidate.",
      "activeLine": 9,
      "codeInsight": "Appending means the current value is greater than every maintained tail."
    },
    {
      "label": "Answer",
      "title": "Return tails.length = 4",
      "note": "For [10,9,2,5,3,7,101,18], one LIS length is 4.",
      "activeLine": 13,
      "codeInsight": "The compact table's length is the answer."
    }
  ],
  "complexity": {
    "time": "O(n log n).",
    "space": "O(n)."
  },
  "quiz": {
    "question": "Which explanation best describes Longest Increasing Subsequence?",
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
        "text": "Find the length of the longest subsequence whose values strictly increase while keeping original order.",
        "correct": true
      }
    ],
    "correctText": "Correct. Find the length of the longest subsequence whose values strictly increase while keeping original order.",
    "incorrectText": "Try again. Find the length of the longest subsequence whose values strictly increase while keeping original order. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "dynamic-programming",
  "algorithmSlug": "longest-increasing-subsequence",
  "runnerInput": [
    [
      10,
      9,
      2,
      5,
      3,
      7,
      101,
      18
    ]
  ],
  "animation": {
    "type": "array-flow",
    "static": true,
    "title": "Longest Increasing Subsequence DP trace",
    "ruleLabel": "DP invariant",
    "rule": "For each value, replace the lower_bound position in tails; if no position exists, append a longer subsequence tail.",
    "values": [
      2,
      3,
      7,
      18
    ],
    "steps": [
      {
        "phase": "seed",
        "title": "10 opens length 1",
        "note": "tails = [10].",
        "ruleLabel": "DP invariant",
        "rule": "For each value, replace the lower_bound position in tails; if no position exists, append a longer subsequence tail.",
        "activeIndices": [
          0
        ],
        "sortedIndices": [
          0
        ],
        "mutedIndices": [],
        "window": [
          0,
          3
        ],
        "primaryLabel": "seed",
        "secondaryLabel": "For each value, replace the lower_bound position in tails; if no position exists, append a longer subsequence tail."
      },
      {
        "phase": "replace",
        "title": "2 becomes the smallest length-1 tail",
        "note": "After 9 and 2, the best length-1 tail is 2.",
        "ruleLabel": "DP invariant",
        "rule": "For each value, replace the lower_bound position in tails; if no position exists, append a longer subsequence tail.",
        "activeIndices": [
          0
        ],
        "sortedIndices": [
          0
        ],
        "mutedIndices": [],
        "window": [
          0,
          3
        ],
        "primaryLabel": "replace",
        "secondaryLabel": "For each value, replace the lower_bound position in tails; if no position exists, append a longer subsequence tail."
      },
      {
        "phase": "extend",
        "title": "5 and 7 extend the chain",
        "note": "tails reaches [2, 3, 7].",
        "ruleLabel": "DP invariant",
        "rule": "For each value, replace the lower_bound position in tails; if no position exists, append a longer subsequence tail.",
        "activeIndices": [
          1,
          2
        ],
        "sortedIndices": [
          0,
          1,
          2
        ],
        "mutedIndices": [],
        "window": [
          0,
          3
        ],
        "primaryLabel": "extend",
        "secondaryLabel": "For each value, replace the lower_bound position in tails; if no position exists, append a longer subsequence tail."
      },
      {
        "phase": "answer",
        "title": "LIS length is 4",
        "note": "101 appends, then 18 replaces the length-4 tail.",
        "ruleLabel": "DP invariant",
        "rule": "For each value, replace the lower_bound position in tails; if no position exists, append a longer subsequence tail.",
        "activeIndices": [
          3
        ],
        "sortedIndices": [
          0,
          1,
          2,
          3
        ],
        "mutedIndices": [],
        "window": [
          0,
          3
        ],
        "primaryLabel": "answer",
        "secondaryLabel": "For each value, replace the lower_bound position in tails; if no position exists, append a longer subsequence tail."
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "A dynamic-programming state names a smaller question. A recurrence explains how its answer uses answers you already know.",
    "family": "Saved subproblems",
    "example": "Define tails: tails[k] is the minimum tail value seen for an increasing subsequence of length k + 1. Process each value: Use binary search to find the first tail that is at least the current value. Replace or append: Replace to improve a tail, or append when the value extends every known length. Return tails length: The number of maintained tails equals the LIS length.",
    "sampleInput": [
      [
        10,
        9,
        2,
        5,
        3,
        7,
        101,
        18
      ]
    ],
    "sampleResult": 4,
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
    "checkpoint": "Explain this in your own words: Find the length of the longest subsequence whose values strictly increase while keeping original order."
  },
  "relatedLinks": []
};
