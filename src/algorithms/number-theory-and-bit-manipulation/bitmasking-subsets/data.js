// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "bitmasking-subsets",
  "title": "Bitmasking for Subsets",
  "category": "Number Theory and Bit Manipulation",
  "route": "/algorithms/bit-manipulation/bitmasking-subsets",
  "phase": 2,
  "priority": "medium",
  "visualizerType": "subset-mask",
  "icon": "memory",
  "codePath": "./src/algorithms/number-theory-and-bit-manipulation/bitmasking-subsets/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "A bitmask represents a selection: bit i says whether element i is included.",
  "problem": "A bitmask represents a selection: bit i says whether element i is included.",
  "concept": "A bitmask represents a selection: bit i says whether element i is included.",
  "logicSummary": "A bitmask represents a selection: bit i says whether element i is included.",
  "transitionSummary": "For [a, b, c], mask 101₂ selects a and c. Masks 000₂ through 111₂ cover all 8 subsets.",
  "codeInsight": "A bitmask represents a selection: bit i says whether element i is included.",
  "realLifeExample": "For [a, b, c], mask 101₂ selects a and c. Masks 000₂ through 111₂ cover all 8 subsets.",
  "whenToUse": "A bitmask represents a selection: bit i says whether element i is included.",
  "memoryTrick": "A bitmask represents a selection: bit i says whether element i is included.",
  "visualizerCaption": "Follow the teaching model, then run the JavaScript sample to check its result.",
  "logicSteps": [
    {
      "title": "Identify what the operation means",
      "text": "A bitmask represents a selection: bit i says whether element i is included."
    },
    {
      "title": "Work through a small case",
      "text": "For [a, b, c], mask 101₂ selects a and c. Masks 000₂ through 111₂ cover all 8 subsets."
    },
    {
      "title": "Check the boundary cases",
      "text": "JavaScript bitwise operators on Number use 32-bit integers. Check non-negative input assumptions and use suitable integer arithmetic for larger values."
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
      "name": "mask",
      "purpose": "Remembers how many items are present; this supports bounds, size reporting, or the stopping rule."
    },
    {
      "name": "subset",
      "purpose": "Keeps a sequence of sample or working values for the following operations."
    },
    {
      "name": "bit",
      "purpose": "Remembers how many items are present; this supports bounds, size reporting, or the stopping rule."
    }
  ],
  "dryRun": [
    {
      "label": "Topic",
      "title": "Understand the operation",
      "note": "A bitmask represents a selection: bit i says whether element i is included.",
      "activeLine": 5,
      "codeInsight": "A bitmask represents a selection: bit i says whether element i is included."
    },
    {
      "label": "Example",
      "title": "Reason through the example",
      "note": "For [a, b, c], mask 101₂ selects a and c. Masks 000₂ through 111₂ cover all 8 subsets.",
      "activeLine": 12,
      "codeInsight": "A bitmask represents a selection: bit i says whether element i is included."
    }
  ],
  "complexity": {
    "time": "O(n × 2ⁿ) to inspect n flags for all masks and materialize the subsets.",
    "space": "O(n) for one subset, plus the stored output."
  },
  "quiz": {
    "question": "Which explanation best describes Bitmasking for Subsets?",
    "options": [
      {
        "key": "A",
        "text": "The position of a value is always identical to the value stored there.",
        "correct": false
      },
      {
        "key": "B",
        "text": "A bitmask represents a selection: bit i says whether element i is included.",
        "correct": true
      },
      {
        "key": "C",
        "text": "The method works for every input, even when its required ordering or structure is absent.",
        "correct": false
      }
    ],
    "correctText": "Correct. A bitmask represents a selection: bit i says whether element i is included.",
    "incorrectText": "Try again. A bitmask represents a selection: bit i says whether element i is included. Compare the small example in the lesson with your choice."
  },
  "categorySlug": "number-theory-and-bit-manipulation",
  "algorithmSlug": "bitmasking-subsets",
  "runnerInput": [
    [
      1,
      2
    ]
  ],
  "animation": {
    "type": "state-flow",
    "title": "Bitmasking for Subsets state transitions",
    "ruleLabel": "State rule",
    "rule": "Each step either reaches a base case or moves one level deeper with a smaller decision state.",
    "states": [
      "Base",
      "Choice",
      "Call",
      "Unwind"
    ],
    "steps": [
      {
        "phase": "Base",
        "title": "Check stop condition",
        "note": "The entry step names the function inputs before the trace checks base cases or expands choices.",
        "ruleLabel": "Bitmasking for Subsets invariant",
        "rule": "Defines bitmaskingSubsets and names the input values; edits to those inputs change the visual state and output.",
        "activeState": 0
      },
      {
        "phase": "Choice",
        "title": "Select next option",
        "note": "One valid move is added to the state.",
        "ruleLabel": "Bitmasking for Subsets invariant",
        "rule": "Defines bitmaskingSubsets and names the input values; edits to those inputs change the visual state and output.",
        "activeState": 1
      },
      {
        "phase": "Call",
        "title": "Recurse deeper",
        "note": "The same rule runs on a smaller or extended state.",
        "ruleLabel": "Bitmasking for Subsets invariant",
        "rule": "Seeds result with the sample values shown in the visualizer, giving the trace concrete cells to inspect.",
        "activeState": 2
      },
      {
        "phase": "Unwind",
        "title": "Return or backtrack",
        "note": "The result is combined or the choice is removed.",
        "ruleLabel": "Bitmasking for Subsets invariant",
        "rule": "Returns result, the final value maintained by Bitmasking for Subsets's code path.",
        "activeState": 3
      }
    ]
  },
  "learningGuide": {
    "mentalModel": "Each binary position represents a power of two. A mask uses those positions as on/off flags.",
    "family": "Binary digits",
    "example": "For [a, b, c], mask 101₂ selects a and c. Masks 000₂ through 111₂ cover all 8 subsets.",
    "sampleInput": [
      [
        1,
        2
      ]
    ],
    "sampleResult": [
      [],
      [
        1
      ],
      [
        2
      ],
      [
        1,
        2
      ]
    ],
    "sampleScope": "This is the result of the unedited JavaScript function with the sample arguments. Changing the input or code can change the result.",
    "terms": [
      [
        "Bit",
        "One binary digit, either 0 or 1."
      ],
      [
        "Mask",
        "Bits used to select, record, or test positions."
      ],
      [
        "XOR",
        "An operation that gives 1 where two input bits differ."
      ]
    ],
    "pitfall": "JavaScript bitwise operators on Number use 32-bit integers. Check non-negative input assumptions and use suitable integer arithmetic for larger values.",
    "checkpoint": "Explain this in your own words: A bitmask represents a selection: bit i says whether element i is included."
  },
  "relatedLinks": []
};
