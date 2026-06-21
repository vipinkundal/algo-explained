# Algo Explained

Algo Explained is a browser-first learning app for algorithms and data structures. It teaches each topic with a short explanation, a visual dry run, editable runnable JavaScript, code-line insights, quizzes, search/catalog pages, and optional saved progress.

## Current Features

- 242 generated learning pages across algorithm and data-structure tracks.
- Separate Data Structures section based on C/C++ reference examples.
- Editable Runnable JS code tab with browser-safe output.
- C/C++ Reference code tab for data-structure lessons.
- Data-driven visualizer metadata in each `data.js` file.
- Visualizer families for arrays, buckets, graphs, matrices, trees, stack/queue state, linked lists, recursion, strings, and generic state flow.
- Search/catalog grouping with responsive algorithm tiles.
- Internationalization JSON for English, Mandarin Chinese, Hindi, Spanish, Standard Arabic, French, Bengali, Portuguese, Russian, and Indonesian.
- Lightweight auth UI states for login/sign-in flows.

## Stack

- Static HTML, custom CSS, and JavaScript modules.
- Node.js server using `node:http`.
- File-based progress storage in `data/progress.json`.
- No C/C++ compiler or backend execution layer.
- No third-party package install required for the current app.

The JavaScript runner executes only the Runnable JS tab in a browser worker. C/C++ reference source is preserved for reading and comparison, not compiled in the browser.

## Run Locally

```bash
npm run serve
```

Open:

```text
http://localhost:4173/
```

The server exposes progress endpoints at `/api/progress`. If the app is opened without the server, the UI can still render, but progress sync falls back to browser-local behavior.

## Project Structure

```text
src/
  app.js                         Main shell, routing, catalog, auth UI, i18n wiring
  i18n/                          Locale JSON files
  content/
    algorithm_pages_index.json   Catalog/search metadata
    algorithm_page_modules.js    Generated page loader registry
  algorithms/
    _shared/                     Generic page factory and shared page styles
    data-structures/             C/C++ reference-backed lessons
    searching/ sorting/ graphs/  Algorithm tracks
scripts/
  generate-algorithm-pages.mjs
  import-data-structures.mjs
  generate-animation-metadata.mjs
  refactor-original-cpp-identifiers.mjs
  audit-page-data-usage.mjs
server.mjs
```

Each generated lesson usually contains:

```text
src/algorithms/<track>/<slug>/
  data.js              Page metadata, dry-run steps, variables, animation data
  page.js              Page module wrapper
  styles.css           Page-local stylesheet hook
  code/solution.js     Runnable JS implementation
  code/original.cpp    C/C++ reference source when available
```

## Content Model

`data.js` is the source for each page's educational content and visualizer state. Important fields include:

- `title`, `category`, `track`, `topicGroup`
- `concept`, `logicSummary`, `transitionSummary`
- `variables`
- `dryRun`
- `animation`
- `runnerInput`
- `relatedLinks`
- `originalCodePath` for C/C++ lessons

The shared page factory reads this metadata and renders the visualizer, code trace, output panel, insights, variables, related links, and quiz.

## Useful Scripts

```bash
npm run check
npm run check:server
npm run check:data-pages
npm run generate:algorithm-pages
node scripts/import-data-structures.mjs
node scripts/generate-animation-metadata.mjs
node scripts/refactor-original-cpp-identifiers.mjs
```

Script notes:

- `check` validates `src/app.js` syntax.
- `check:server` validates `server.mjs` syntax.
- `check:data-pages` verifies every registered page uses its local `data.js` and that all data files are registered.
- `generate:algorithm-pages` regenerates algorithm page folders from catalog metadata.
- `import-data-structures.mjs` generates C/C++ reference-backed data-structure lessons.
- `generate-animation-metadata.mjs` fills missing or generated `animation` metadata by visualizer family.
- `refactor-original-cpp-identifiers.mjs` normalizes C/C++ reference identifiers and structure names to clearer names while preserving comments, strings, character literals, and preprocessor lines.

## Verification Checklist

Run these after content or renderer changes:

```bash
npm run check
npm run check:server
npm run check:data-pages
```

For visual changes, browser-check representative pages from these families:

- Array: `#/algorithms/searching/linear-search/visualizer`
- Bucket: `#/algorithms/sorting/bucket-sort/visualizer`
- Graph: `#/algorithms/graphs/bellman-ford/visualizer`
- Matrix: `#/algorithms/matrix/matrix-traversal/visualizer`
- Tree: `#/algorithms/trees/bst-delete/visualizer`
- Linked list: `#/algorithms/data-structures/linked-list-insertion/visualizer`
- Stack/queue: `#/algorithms/queue/queue-basics/visualizer`
- Recursion: `#/algorithms/recursion/factorial-recursion/visualizer`
- String: `#/algorithms/data-structures/string-reverse-string/visualizer`

## Development Notes

- Keep page-specific educational content in `data.js`.
- Keep renderer behavior in `src/algorithms/_shared/page-factory.js`.
- Keep shared visualizer styling in `src/algorithms/_shared/page.css`.
- Do not add a C/C++ compiler for the current frontend-only runner model.
- C/C++ reference source is shown as reference material; Runnable JS is the executable browser demo.
- Prefer regenerating metadata with scripts when applying broad changes across many pages.
