// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "floyd-warshall",
  "title": "Floyd-Warshall Algorithm",
  "category": "Graphs",
  "route": "/algorithms/graphs/floyd-warshall",
  "phase": 3,
  "priority": "medium",
  "visualizerType": "matrix-update",
  "icon": "hub",
  "codePath": "./src/algorithms/graphs/floyd-warshall/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Floyd-Warshall Algorithm is a Graphs technique taught with a matrix update dry run.",
  "problem": "It helps you recognize and solve the Floyd-Warshall Algorithm pattern without mixing it with other algorithms.",
  "realLifeExample": "Think of this page as the isolated practice bench for Floyd-Warshall Algorithm: inputs come in, key state changes are tracked, and the result is produced step by step.",
  "whenToUse": "Use Floyd-Warshall Algorithm when a problem statement matches the Graphs pattern and the planned visualization is matrix update.",
  "memoryTrick": "Floyd-Warshall Algorithm: name the state, update it once per step, and check the stop condition before returning.",
  "visualizerCaption": "A compact matrix update walkthrough for Floyd-Warshall Algorithm.",
  "logicSteps": [
    {
      "title": "Identify the input shape",
      "text": "Read the problem and confirm it belongs to the Graphs family."
    },
    {
      "title": "Initialize the working state",
      "text": "Create the variables or data structures that carry progress through the algorithm."
    },
    {
      "title": "Apply the transition",
      "text": "Move through the input using the matrix update idea and update only the relevant state."
    },
    {
      "title": "Return the answer",
      "text": "Stop when the condition is satisfied and return the final value from the tracked state."
    }
  ],
  "variables": [
    {
      "name": "input",
      "purpose": "The data structure or values the algorithm receives."
    },
    {
      "name": "state",
      "purpose": "The changing information that represents progress during the dry run."
    },
    {
      "name": "answer",
      "purpose": "The value produced after the final transition or check."
    },
    {
      "name": "condition",
      "purpose": "The rule that decides whether the algorithm should continue, branch, or stop."
    }
  ],
  "dryRun": [
    {
      "label": "Input",
      "title": "Read the problem data",
      "note": "Start by identifying what Floyd-Warshall Algorithm receives and what output is expected.",
      "activeLine": 1
    },
    {
      "label": "State",
      "title": "Prepare working variables",
      "note": "Set up counters, pointers, containers, or tables before the main transition begins.",
      "activeLine": 4
    },
    {
      "label": "Transition",
      "title": "Move one step forward",
      "note": "Apply the core matrix update transition and keep unrelated state untouched.",
      "activeLine": 6
    },
    {
      "label": "Answer",
      "title": "Finish and return",
      "note": "Use the final tracked state to produce the result.",
      "activeLine": 8
    }
  ],
  "complexity": {
    "time": "Fill this with the finalized implementation's time complexity.",
    "space": "Fill this with the finalized implementation's auxiliary space complexity."
  },
  "quiz": {
    "question": "What is the safest first step when applying Floyd-Warshall Algorithm?",
    "options": [
      {
        "key": "A",
        "text": "Identify the input shape and the state the algorithm needs to track.",
        "correct": true
      },
      {
        "key": "B",
        "text": "Start coding before naming the variables or stop condition.",
        "correct": false
      },
      {
        "key": "C",
        "text": "Reuse another algorithm's visualizer state without checking the pattern.",
        "correct": false
      }
    ],
    "correctText": "Correct. Naming the input and state first keeps this algorithm separate from the others.",
    "incorrectText": "Not quite. Keep each algorithm isolated by identifying its own input shape, state, and stop condition first."
  },
  "categorySlug": "graphs",
  "algorithmSlug": "floyd-warshall"
};
