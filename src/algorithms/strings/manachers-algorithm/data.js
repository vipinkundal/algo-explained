// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "manachers-algorithm",
  "title": "Manacher’s Algorithm",
  "category": "Strings",
  "route": "/algorithms/strings/manachers-algorithm",
  "phase": 4,
  "priority": "low",
  "visualizerType": "palindrome-radius",
  "icon": "abc",
  "codePath": "./src/algorithms/strings/manachers-algorithm/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Manacher’s Algorithm is taught with its own string state, transition, code trace, and stopping rule.",
  "problem": "Find the longest palindromic substring in linear time by reusing palindrome radii.",
  "concept": "Manacher transforms the text with separators, tracks the current rightmost palindrome, and mirrors radius information around its center.",
  "logicSummary": "Transform text, keep center/right boundaries, initialize each radius from its mirror when possible, expand, and update the best radius.",
  "transitionSummary": "If an index is inside the current palindrome, start with the mirrored bounded radius; then expand and update center/right if the palindrome grows farther.",
  "codeInsight": "The transformed string makes odd and even palindromes use the same radius rule.",
  "realLifeExample": "Use it when longest-palindrome queries must be linear rather than center-expansion O(n^2).",
  "whenToUse": "Use Manacher’s Algorithm for longest palindromic substring when input size makes O(n^2) too slow.",
  "memoryTrick": "Mirror the radius, then expand only beyond known territory.",
  "visualizerCaption": "The trace shows transformed-string centers, mirrored radius reuse, expansion, and best extraction.",
  "logicSteps": [
    {
      "title": "Transform text",
      "text": "Insert separators so every palindrome has one center."
    },
    {
      "title": "Reuse mirror",
      "text": "Inside the right boundary, copy the bounded mirror radius."
    },
    {
      "title": "Expand center",
      "text": "Compare characters outside the known radius."
    },
    {
      "title": "Extract best",
      "text": "Convert transformed center/radius back to original substring."
    }
  ],
  "variables": [
    {
      "name": "transformed",
      "purpose": "Separator-based string such as ^#b#a#b#a#d#$."
    },
    {
      "name": "radius",
      "purpose": "Palindrome radius at each transformed index."
    },
    {
      "name": "center, right",
      "purpose": "Rightmost known palindrome boundary."
    },
    {
      "name": "bestCenter, bestRadius",
      "purpose": "Largest palindrome seen."
    }
  ],
  "dryRun": [
    {
      "label": "Transform",
      "title": "Build #b#a#b#a#d#",
      "note": "Separators make odd and even palindromes uniform.",
      "activeLine": 2,
      "codeInsight": "The sentinels avoid boundary checks during expansion."
    },
    {
      "label": "Mirror",
      "title": "Use mirrored radius",
      "note": "An index inside right can start from its mirror's known radius.",
      "activeLine": 8,
      "codeInsight": "Mirror reuse is the linear-time shortcut."
    },
    {
      "label": "Expand",
      "title": "Grow around center a",
      "note": "The radius expands while transformed characters match.",
      "activeLine": 9,
      "codeInsight": "Only comparisons beyond the known radius are new work."
    },
    {
      "label": "Best",
      "title": "Extract bab",
      "note": "The best transformed radius maps back to substring bab.",
      "activeLine": 19,
      "codeInsight": "The final start index converts transformed coordinates to original text."
    }
  ],
  "complexity": {
    "time": "O(n).",
    "space": "O(n) for transformed string and radius array."
  },
  "quiz": {
    "question": "Which state keeps Manacher’s Algorithm correct?",
    "options": [
      {
        "key": "A",
        "text": "Track transformed indices, mirror radius, center/right boundary, and best radius.",
        "correct": true
      },
      {
        "key": "B",
        "text": "Reuse another string algorithm's state names without matching its invariant.",
        "correct": false
      },
      {
        "key": "C",
        "text": "Advance indices without the mismatch, hash, frequency, trie, or radius rule.",
        "correct": false
      }
    ],
    "correctText": "Correct. Manacher’s Algorithm works because the page state follows that exact string invariant.",
    "incorrectText": "Not quite. Manacher’s Algorithm needs its own string state and stop condition."
  },
  "categorySlug": "strings",
  "algorithmSlug": "manachers-algorithm",
  "runnerInput": [
    "babad"
  ],
  "animation": {
    "type": "string-flow",
    "static": true,
    "title": "Manacher’s Algorithm trace",
    "ruleLabel": "String invariant",
    "rule": "If an index is inside the current palindrome, start with the mirrored bounded radius; then expand and update center/right if the palindrome grows farther.",
    "text": "#b#a#b#a#d#",
    "pattern": "radius",
    "steps": [
      {
        "phase": "transform",
        "title": "Insert separators",
        "note": "Every palindrome becomes centered on one index.",
        "ruleLabel": "String invariant",
        "rule": "If an index is inside the current palindrome, start with the mirrored bounded radius; then expand and update center/right if the palindrome grows farther.",
        "activeRange": [
          0,
          10
        ],
        "matchedRange": []
      },
      {
        "phase": "mirror",
        "title": "Reuse mirror radius",
        "note": "Inside the right boundary, start from a mirrored value.",
        "ruleLabel": "String invariant",
        "rule": "If an index is inside the current palindrome, start with the mirrored bounded radius; then expand and update center/right if the palindrome grows farther.",
        "activeRange": [
          2,
          6
        ],
        "matchedRange": []
      },
      {
        "phase": "expand",
        "title": "Expand around center",
        "note": "The radius covers #b#a#b#.",
        "ruleLabel": "String invariant",
        "rule": "If an index is inside the current palindrome, start with the mirrored bounded radius; then expand and update center/right if the palindrome grows farther.",
        "activeRange": [
          0,
          6
        ],
        "matchedRange": [
          1,
          5
        ]
      },
      {
        "phase": "best bab",
        "title": "Return longest original substring",
        "note": "The best radius maps to bab.",
        "ruleLabel": "String invariant",
        "rule": "If an index is inside the current palindrome, start with the mirrored bounded radius; then expand and update center/right if the palindrome grows farther.",
        "activeRange": [
          1,
          5
        ],
        "matchedRange": [
          1,
          5
        ]
      }
    ]
  }
};
