// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "cpp-reverse",
  "title": "C++ reverse()",
  "category": "C++ STL Algorithm Pages",
  "route": "/algorithms/cpp-stl/reverse",
  "phase": 1,
  "priority": "medium",
  "visualizerType": "two-pointer-swap",
  "icon": "school",
  "codePath": "./src/algorithms/c-stl-algorithm-pages/cpp-reverse/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "C++ reverse() is a C++ STL Algorithm Pages technique taught with a two pointer swap dry run.",
  "problem": "It helps you recognize and solve the C++ reverse() pattern without mixing it with other algorithms.",
  "realLifeExample": "Think of this page as the isolated practice bench for C++ reverse(): inputs come in, key state changes are tracked, and the result is produced step by step.",
  "whenToUse": "Use C++ reverse() when a problem statement matches the C++ STL Algorithm Pages pattern and the planned visualization is two pointer swap.",
  "memoryTrick": "C++ reverse(): name the state, update it once per step, and check the stop condition before returning.",
  "visualizerCaption": "A compact two pointer swap walkthrough for C++ reverse().",
  "logicSteps": [
    {
      "title": "Identify the input shape",
      "text": "Read the problem and confirm it belongs to the C++ STL Algorithm Pages family."
    },
    {
      "title": "Initialize the working state",
      "text": "Create the variables or data structures that carry progress through the algorithm."
    },
    {
      "title": "Apply the transition",
      "text": "Move through the input using the two pointer swap idea and update only the relevant state."
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
      "note": "Start by identifying what C++ reverse() receives and what output is expected.",
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
      "note": "Apply the core two pointer swap transition and keep unrelated state untouched.",
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
    "question": "What is the safest first step when applying C++ reverse()?",
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
  "categorySlug": "c-stl-algorithm-pages",
  "algorithmSlug": "cpp-reverse"
};
