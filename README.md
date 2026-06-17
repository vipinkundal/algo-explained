# Algo Explained

Algo Explained is an algorithm learning website. The goal is to teach algorithms with simple explanations, visual dry runs, clickable code traces, practice prompts, and saved user progress.

## Current Stack

- Static HTML, Tailwind CSS, custom CSS, and JavaScript
- Built-in Node.js backend using `node:http`
- File-based progress storage in `data/progress.json`
- No third-party backend dependency required

Tailwind is loaded through the browser CDN so the current project remains zero-install. The custom stylesheet is kept for visualizer-specific animation, code trace, and component polish.

## Run Locally

```bash
npm run serve
```

Then open `http://localhost:4173/`.

The backend exposes `GET`, `PUT`, and `PATCH` on `/api/progress`. It stores anonymous browser users, saved algorithms, and completion checks for lesson, visualizer, and quiz sections.

## Current Prototype

Run the Node server so progress can sync. Opening `index.html` directly still renders the learning UI, but progress falls back to browser-local storage.

The first interactive slice includes:

- Algorithm catalog
- Binary Search lesson
- Binary Search visualizer
- Binary Search practice challenge
- Backend-backed saved algorithms and completion checks

## Planning Sources

- `docs/algorithm_learning_pages_blueprint.md`
- `src/content/algorithm_pages_index.json`

The JSON index is the source of truth for planned algorithm pages, route patterns, visualizer types, build phases, and priority.

## Build Direction

The first full algorithm page target is Binary Search. After that, build in this order:

1. Linear Search
2. Bubble Sort
3. Selection Sort
4. Insertion Sort
5. Two Pointers
6. Sliding Window
7. Prefix Sum
8. Recursion Basics
