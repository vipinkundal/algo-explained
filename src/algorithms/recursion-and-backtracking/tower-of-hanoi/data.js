// AUTO-GENERATED ALGORITHM PAGE
// Edit this file to customize this algorithm page without touching app.js.

export const algorithmPage = {
  "id": "tower-of-hanoi",
  "title": "Tower of Hanoi",
  "category": "Recursion and Backtracking",
  "route": "/algorithms/recursion/tower-of-hanoi",
  "phase": 1,
  "priority": "low",
  "visualizerType": "disk-moves",
  "icon": "school",
  "codePath": "./src/algorithms/recursion-and-backtracking/tower-of-hanoi/code/solution.js",
  "codeFilename": "solution.js",
  "meaning": "Tower of Hanoi is a Recursion and Backtracking technique taught with a disk moves dry run.",
  "problem": "It helps you recognize and solve the Tower of Hanoi pattern without mixing it with other algorithms.",
  "realLifeExample": "Think of this page as the isolated practice bench for Tower of Hanoi: inputs come in, key state changes are tracked, and the result is produced step by step.",
  "whenToUse": "Use Tower of Hanoi when a problem statement matches the Recursion and Backtracking pattern and the planned visualization is disk moves.",
  "memoryTrick": "Tower of Hanoi: name the state, update it once per step, and check the stop condition before returning.",
  "visualizerCaption": "A compact disk moves walkthrough for Tower of Hanoi.",
  "logicSteps": [
    {
      "title": "Identify the input shape",
      "text": "Read the problem and confirm it belongs to the Recursion and Backtracking family."
    },
    {
      "title": "Initialize the working state",
      "text": "Create the variables or data structures that carry progress through the algorithm."
    },
    {
      "title": "Apply the transition",
      "text": "Move through the input using the disk moves idea and update only the relevant state."
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
      "note": "Start by identifying what Tower of Hanoi receives and what output is expected.",
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
      "note": "Apply the core disk moves transition and keep unrelated state untouched.",
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
    "question": "What is the safest first step when applying Tower of Hanoi?",
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
  "categorySlug": "recursion-and-backtracking",
  "algorithmSlug": "tower-of-hanoi"
};
