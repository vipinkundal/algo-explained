// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "ternary-search",
  "title": "Ternary Search",
  "category": "Searching",
  "route": "/algorithms/searching/ternary-search",
  "phase": 2,
  "priority": "low",
  "visualizerType": "divided-range",
  "icon": "search",
  "codePath": "./src/algorithms/searching/ternary-search/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Find an optimum in a unimodal numeric range by comparing two interior points.",
  "problem": "Find an optimum in a unimodal numeric range by comparing two interior points.",
  "concept": "Ternary Search is for functions that rise then fall, or fall then rise, so one third can be discarded each step.",
  "logicSummary": "Compute mid1 and mid2, evaluate both, and keep the side that can still contain the peak.",
  "transitionSummary": "For a maximum, f(mid1) < f(mid2) discards the left third; otherwise discard the right third.",
  "codeInsight": "This is not sorted-array lookup. Its invariant is unimodality of an evaluated function.",
  "realLifeExample": "Use it for one-dimensional optimization such as best price, best position, or peak score under a unimodal model.",
  "whenToUse": "Use Ternary Search only when the objective is unimodal.",
  "memoryTrick": "Two probes tell which third cannot hold the peak.",
  "visualizerCaption": "Explore Ternary Search through a sample teaching model, then compare it with the runnable result.",
  "logicSteps": [
    {
      "title": "Start [-2, 6]",
      "text": "The peak of the sample parabola lies inside the range."
    },
    {
      "title": "Evaluate mid1 and mid2",
      "text": "Two function values reveal which side is worse."
    },
    {
      "title": "Keep better side",
      "text": "If mid2 is better, the left third cannot contain the maximum."
    },
    {
      "title": "Return range center",
      "text": "The final midpoint approximates the optimum."
    }
  ],
  "variables": [
    {
      "name": "low, high",
      "purpose": "Current numeric interval."
    },
    {
      "name": "mid1, mid2",
      "purpose": "Interior probe points."
    },
    {
      "name": "evaluate",
      "purpose": "Function being optimized."
    },
    {
      "name": "high - low > precision",
      "purpose": "Continue until the range is accurate enough."
    }
  ],
  "dryRun": [
    {
      "label": "Range",
      "title": "Start [-2, 6]",
      "note": "The peak of the sample parabola lies inside the range.",
      "activeLine": 2,
      "codeInsight": "The loop controls precision, not array indices."
    },
    {
      "label": "Two probes",
      "title": "Evaluate mid1 and mid2",
      "note": "Two function values reveal which side is worse.",
      "activeLine": 4,
      "codeInsight": "Both probes are needed to compare slope direction."
    },
    {
      "label": "Discard third",
      "title": "Keep better side",
      "note": "If mid2 is better, the left third cannot contain the maximum.",
      "activeLine": 5,
      "codeInsight": "The comparison depends on maximizing a unimodal function."
    },
    {
      "label": "Answer",
      "title": "Return range center",
      "note": "The final midpoint approximates the optimum.",
      "activeLine": 8,
      "codeInsight": "The return value is a position, not an array index."
    }
  ],
  "complexity": {
    "time": "O(log((high - low) / precision)).",
    "space": "O(1)."
  },
  "quiz": {
    "question": "Which explanation best describes Ternary Search?",
    "options": [
      {
        "key": "A",
        "text": "Find an optimum in a unimodal numeric range by comparing two interior points.",
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
    "correctText": "Correct. Find an optimum in a unimodal numeric range by comparing two interior points.",
    "incorrectText": "Try again. Find an optimum in a unimodal numeric range by comparing two interior points. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "searching",
  "algorithmSlug": "ternary-search",
  "animation": {
    "type": "array-flow",
    "static": true,
    "title": "Ternary Search trace",
    "ruleLabel": "Search invariant",
    "rule": "For a maximum, f(mid1) < f(mid2) discards the left third; otherwise discard the right third.",
    "values": [
      -2,
      0.67,
      3.33,
      6
    ],
    "steps": [
      {
        "phase": "[-2, 6]",
        "title": "Start unimodal range",
        "note": "The peak is somewhere in this interval.",
        "ruleLabel": "Search invariant",
        "rule": "For a maximum, f(mid1) < f(mid2) discards the left third; otherwise discard the right third.",
        "activeIndices": [
          0,
          3
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          3
        ],
        "primaryLabel": "[-2, 6]",
        "secondaryLabel": "For a maximum, f(mid1) < f(mid2) discards the left third; otherwise discard the right third."
      },
      {
        "phase": "mid1/mid2",
        "title": "Probe thirds",
        "note": "Evaluate around 0.67 and 3.33.",
        "ruleLabel": "Search invariant",
        "rule": "For a maximum, f(mid1) < f(mid2) discards the left third; otherwise discard the right third.",
        "activeIndices": [
          1,
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [],
        "window": [
          0,
          3
        ],
        "primaryLabel": "mid1/mid2",
        "secondaryLabel": "For a maximum, f(mid1) < f(mid2) discards the left third; otherwise discard the right third."
      },
      {
        "phase": "discard left",
        "title": "mid2 is better",
        "note": "Move low to mid1.",
        "ruleLabel": "Search invariant",
        "rule": "For a maximum, f(mid1) < f(mid2) discards the left third; otherwise discard the right third.",
        "activeIndices": [
          1,
          2
        ],
        "sortedIndices": [],
        "mutedIndices": [
          0
        ],
        "window": [
          1,
          3
        ],
        "primaryLabel": "discard left",
        "secondaryLabel": "For a maximum, f(mid1) < f(mid2) discards the left third; otherwise discard the right third."
      },
      {
        "phase": "near peak",
        "title": "Converge near 2",
        "note": "Return the center of the final small interval.",
        "ruleLabel": "Search invariant",
        "rule": "For a maximum, f(mid1) < f(mid2) discards the left third; otherwise discard the right third.",
        "activeIndices": [
          1,
          2
        ],
        "sortedIndices": [
          1,
          2
        ],
        "mutedIndices": [],
        "window": [
          1,
          2
        ],
        "primaryLabel": "near peak",
        "secondaryLabel": "For a maximum, f(mid1) < f(mid2) discards the left third; otherwise discard the right third."
      }
    ]
  },
  "runnerInput": [
    -2,
    6,
    "(x) => -(x - 2) * (x - 2) + 9",
    0.001
  ],
  "learningGuide": {
    "mentalModel": "An array is a row of numbered slots. An index tells you where a value is; it is not the value itself.",
    "family": "Arrays and indexes",
    "example": "Start [-2, 6]: The peak of the sample parabola lies inside the range. Evaluate mid1 and mid2: Two function values reveal which side is worse. Keep better side: If mid2 is better, the left third cannot contain the maximum. Return range center: The final midpoint approximates the optimum.",
    "sampleInput": [
      -2,
      6,
      "(x) => -(x - 2) * (x - 2) + 9",
      0.001
    ],
    "sampleResult": 1.999938562728898,
    "sampleScope": "This is the result of the unedited JavaScript function with the sample arguments. Changing the input or code can change the result.",
    "terms": [
      [
        "Index",
        "A position in a sequence, usually starting at 0."
      ],
      [
        "Boundary",
        "The first or last position still being considered."
      ],
      [
        "Invariant",
        "A rule that remains true after each step."
      ]
    ],
    "pitfall": "Keep positions and values separate. Check whether the right boundary is included before changing an index.",
    "checkpoint": "Explain this in your own words: Find an optimum in a unimodal numeric range by comparing two interior points."
  },
  "relatedLinks": []
};
