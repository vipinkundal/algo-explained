const starterAlgorithms = [
  {
    id: "bubble-sort",
    name: "Bubble Sort",
    category: "Sorting",
    level: "Easy",
    icon: "sort",
    summary: "Repeatedly compares neighbors and swaps them when they are in the wrong order.",
    use: "Useful for tiny datasets and teaching the cost of repeated passes.",
  },
  {
    id: "quick-sort",
    name: "Quick Sort",
    category: "Sorting",
    level: "Medium",
    icon: "bolt",
    summary: "Chooses a pivot, partitions values around it, then sorts each side recursively.",
    use: "Common in fast in-memory sorting where average performance matters.",
  },
  {
    id: "merge-sort",
    name: "Merge Sort",
    category: "Sorting",
    level: "Medium",
    icon: "call_split",
    summary: "Splits the list into halves, sorts each half, then merges them back together.",
    use: "Preferred when stable ordering or linked-list sorting is needed.",
  },
  {
    id: "binary-search",
    name: "Binary Search",
    category: "Searching",
    level: "Easy",
    icon: "search",
    summary: "Finds an item in a sorted list by cutting the search interval in half each step.",
    use: "Used in lookup tables, dictionary apps, search suggestions, and indexes.",
  },
  {
    id: "linear-search",
    name: "Linear Search",
    category: "Searching",
    level: "Easy",
    icon: "horizontal_rule",
    summary: "Checks each item one-by-one until the target is found or the list ends.",
    use: "A reliable fallback when the input is small or not sorted.",
  },
  {
    id: "dijkstra",
    name: "Dijkstra's Algorithm",
    category: "Graphs",
    level: "Hard",
    icon: "map",
    summary: "Finds the shortest path from one node to every reachable node in a weighted graph.",
    use: "The idea behind route planning, network latency tools, and game maps.",
  },
  {
    id: "breadth-first-search",
    name: "Breadth-First Search",
    category: "Graphs",
    level: "Medium",
    icon: "hub",
    summary: "Explores all neighbors before moving deeper, layer by layer.",
    use: "Useful for shortest paths in unweighted graphs and social graph distance.",
  },
];

let algorithms = starterAlgorithms;

const arrayValues = [1, 3, 5, 7, 9, 13, 15, 19];
const binarySteps = [
  {
    low: 0,
    high: 7,
    mid: 3,
    target: 13,
    activeLine: 4,
    range: "[0 - 7]",
    note: "Start with the whole sorted array. The middle value is 7, so we compare it with the target.",
  },
  {
    low: 4,
    high: 7,
    mid: 5,
    target: 13,
    activeLine: 6,
    range: "[4 - 7]",
    note: "The target is larger than 7, so the left half cannot contain the answer. Move low to mid + 1.",
  },
  {
    low: 4,
    high: 7,
    mid: 5,
    target: 13,
    activeLine: 5,
    range: "[4 - 7]",
    note: "Now the middle value is 13. It matches the target, so the search returns index 5.",
  },
];

const codeLines = [
  "function binarySearch(arr, target) {",
  "  let low = 0, high = arr.length - 1;",
  "  while (low <= high) {",
  "    const mid = Math.floor((low + high) / 2);",
  "    if (arr[mid] === target) return mid;",
  "    if (arr[mid] < target) low = mid + 1;",
  "    else high = mid - 1;",
  "  }",
  "  return -1;",
  "}",
];

const challengeOptions = [
  ["A", "It stays at index 2 because it is already in the correct partition position.", false],
  ["B", "It is swapped with the element after the final smaller-than-pivot region.", true],
  ["C", "It is moved to the beginning of the array to start a new sub-partition.", false],
];

const state = {
  view: "catalog",
  selectedId: "binary-search",
  query: "",
  step: 0,
  playing: false,
  debug: true,
  selectedAnswer: "",
  timer: null,
};

const root = document.getElementById("root");

function icon(name) {
  return `<span class="material-symbols-outlined" aria-hidden="true">${name}</span>`;
}

function groupAlgorithms() {
  const query = state.query.trim().toLowerCase();
  return algorithms
    .filter((algorithm) => {
      if (!query) return true;
      return `${algorithm.name} ${algorithm.category} ${algorithm.summary}`.toLowerCase().includes(query);
    })
    .reduce((groups, algorithm) => {
      groups[algorithm.category] ||= [];
      groups[algorithm.category].push(algorithm);
      return groups;
    }, {});
}

function renderHeader() {
  return `
    <header class="app-header">
      <button class="icon-button" data-view="catalog" aria-label="Back to catalog">${icon("arrow_back")}</button>
      <button class="brand-button" data-view="catalog">AlgoExplained</button>
      <nav class="top-nav" aria-label="Primary">
        ${["catalog", "lesson", "visualizer", "challenge"]
          .map((view) => `<button class="nav-link ${state.view === view ? "active" : ""}" data-view="${view}">${view}</button>`)
          .join("")}
      </nav>
      <button class="icon-button" aria-label="Share">${icon("ios_share")}</button>
    </header>
  `;
}

function renderCatalog() {
  const groups = groupAlgorithms();
  const rows = Object.entries(groups)
    .map(([category, items]) => `
      <section class="category-row" aria-labelledby="${slugify(category)}-title">
        <div class="section-heading">
          <h2 id="${slugify(category)}-title">${escapeHtml(category)}</h2>
          <button type="button">View all</button>
        </div>
        <div class="algorithm-strip">
          ${items.map(renderAlgorithmCard).join("")}
        </div>
      </section>
    `)
    .join("");

  return `
    <section class="catalog-panel" aria-labelledby="catalog-title">
      <div class="search-field">
        ${icon("search")}
        <input id="algorithm-search" value="${escapeHtml(state.query)}" placeholder="Search algorithms (e.g. Dijkstra, QuickSort)..." aria-label="Search algorithms" />
      </div>
      <div class="catalog-intro">
        <p class="eyebrow">Algorithm catalog</p>
        <h1 id="catalog-title">Learn the logic, then watch it move.</h1>
        <p>Start from plain-English intuition, step through the code trace, then use visual controls to see the state changes.</p>
      </div>
      ${rows}
    </section>
  `;
}

function renderAlgorithmCard(algorithm) {
  const title = algorithm.name || algorithm.title;
  const phase = algorithm.phase ? `Phase ${algorithm.phase}` : "Starter";
  const priority = algorithm.priority || algorithm.level || "medium";
  const level = algorithm.level || priority;
  const summary = algorithm.summary || summaryForAlgorithm(algorithm);
  const use = algorithm.use || useForAlgorithm(algorithm);
  const iconName = algorithm.icon || iconForAlgorithm(algorithm);
  const categoryClass = slugify(algorithm.category || "foundations");

  return `
    <button type="button" class="algorithm-card ${algorithm.id === state.selectedId ? "selected" : ""}" data-algorithm="${algorithm.id}">
      <span class="card-icon ${categoryClass}">${icon(iconName)}</span>
      <span class="difficulty ${String(level).toLowerCase()}">${escapeHtml(level)}</span>
      <strong>${escapeHtml(title)}</strong>
      <span>${escapeHtml(summary)}</span>
      <small>Real-world use</small>
      <em>${escapeHtml(use)}</em>
      <span class="card-meta">
        <b>${escapeHtml(phase)}</b>
        ${algorithm.visualizerType ? `<b>${escapeHtml(algorithm.visualizerType)}</b>` : ""}
      </span>
    </button>
  `;
}

function renderWorkspace() {
  const selected = algorithms.find((algorithm) => algorithm.id === state.selectedId);
  if (state.view === "lesson") return renderLesson();
  if (state.view === "visualizer") return renderVisualizer();
  if (state.view === "challenge") return renderChallenge();
  return `
    <section class="ready-panel">
      ${icon("school")}
      <h2>${selected ? escapeHtml(selected.title || selected.name) : "Ready to visualize?"}</h2>
      <p>${selected && selected.route ? `Planned route: ${escapeHtml(selected.route)}. Binary Search is the first fully interactive page.` : "Pick Binary Search to see a step-by-step trace of the logic in action."}</p>
    </section>
  `;
}

function renderLesson() {
  return `
    <section class="lesson-panel" aria-labelledby="lesson-title">
      <p class="eyebrow">Sorting & searching</p>
      <h2 id="lesson-title">Binary Search</h2>
      <p class="lede">The power of "divide and conquer" explained through a simple analogy.</p>
      <div class="analogy-media">
        <div class="dictionary-scene" aria-hidden="true">
          <span class="page left"></span>
          <span class="page right"></span>
          <span class="finger"></span>
          <span class="focus-ring"></span>
        </div>
        <div class="media-label">${icon("lightbulb")} The dictionary analogy</div>
      </div>
      <blockquote>
        Imagine you're looking for the word "Recursive." You do not start at page one.
        You open the book in the middle, decide which half matters, and ignore the rest.
      </blockquote>
      <div class="logic-list">
        <h3>${icon("analytics")} The simple logic</h3>
        ${[
          ["Pick the center", "Start by looking at the exact middle element of the sorted list."],
          ["Compare and shrink", "If the target is smaller, discard the right half. If larger, discard the left half."],
          ["Repeat", "Keep halving the remaining range until the item is found or no range remains."],
        ].map(([title, text], index) => `
          <div class="logic-step">
            <span>${index + 1}</span>
            <div><strong>${title}</strong><p>${text}</p></div>
          </div>
        `).join("")}
      </div>
      <button class="primary-action" data-view="visualizer">Start visualizer ${icon("arrow_forward")}</button>
      <p class="time-note">Estimated time: 12 minutes</p>
    </section>
  `;
}

function renderVisualizer() {
  const current = binarySteps[state.step];
  return `
    <section class="visualizer-panel" aria-labelledby="visualizer-title">
      <div class="title-row">
        <div>
          <p class="eyebrow">Algorithm visualizer</p>
          <h2 id="visualizer-title">Binary Search</h2>
          <p>Efficiently searching a sorted array by repeatedly dividing the interval in half.</p>
        </div>
        <span class="step-pill">Step ${state.step + 1}/${binarySteps.length}</span>
      </div>
      <div class="array-stage">
        <div class="array-track" aria-label="Binary search array state">
          ${arrayValues.map((value, index) => renderArrayCell(value, index, current)).join("")}
        </div>
        <div class="state-row">
          <span><i class="dot primary"></i> Target: ${current.target}</span>
          <span><i class="dot neutral"></i> Iteration: ${state.step + 1}</span>
          <span><i class="dot secondary"></i> Range: ${current.range}</span>
        </div>
      </div>
      <div class="trace-layout">
        ${renderCodeTrace(current.activeLine)}
        ${state.debug ? `<aside class="explanation-bubble">${icon("tips_and_updates")}<strong>Conceptual insight</strong><p>${current.note}</p></aside>` : ""}
      </div>
      <div class="control-deck" aria-label="Visualizer controls">
        <button data-action="prev" aria-label="Previous step">${icon("skip_previous")}</button>
        <button class="play-button" data-action="play" aria-label="Play visualizer">${icon(state.playing ? "pause" : "play_arrow")}</button>
        <button data-action="next" aria-label="Next step">${icon("skip_next")}</button>
      </div>
      <div class="secondary-actions">
        <button data-action="reset">Reset</button>
        <button class="debug ${state.debug ? "active" : ""}" data-action="debug">Debug mode</button>
      </div>
    </section>
  `;
}

function renderArrayCell(value, index, current) {
  const role = index === current.mid ? "mid" : index === current.low ? "low" : index === current.high ? "high" : "";
  const outside = index < current.low || index > current.high ? "discarded" : "";
  return `
    <div class="array-cell-wrap ${role} ${outside}">
      ${role ? `<span class="pointer-label">${role}</span>` : ""}
      <span class="array-cell">${value}</span>
      ${role ? icon("arrow_upward") : ""}
    </div>
  `;
}

function renderCodeTrace(activeLine) {
  return `
    <div class="code-trace" aria-label="Binary search code trace">
      <div class="code-header">
        <span>binary_search.js</span>
        <span class="window-dots"><i></i><i></i><i></i></span>
      </div>
      <pre>${codeLines.map((line, index) => `<code class="${index + 1 === activeLine ? "active-line" : ""}"><span>${index + 1}</span>${escapeHtml(line)}</code>`).join("")}</pre>
    </div>
  `;
}

function renderChallenge() {
  const selected = challengeOptions.find(([key]) => key === state.selectedAnswer);
  return `
    <section class="challenge-panel" aria-labelledby="challenge-title">
      <div class="title-row">
        <div>
          <p class="eyebrow">Quick sort challenge</p>
          <h2 id="challenge-title">Partitioning Step</h2>
          <p>The current array is being partitioned around the pivot element <code>7</code>.</p>
        </div>
        <span class="step-pill purple">${icon("bolt")} Step 4/12</span>
      </div>
      <div class="partition-stage">
        ${[3, 5, 7, 9, 2].map((value, index) => `
          <span class="bar ${value === 7 ? "pivot" : ""}" style="--height: ${48 + value * 8}px">
            <b>${value}</b><small>${value === 7 ? "P" : index}</small>
          </span>
        `).join("")}
      </div>
      ${renderCodeTrace(6)}
      <h3>What happens to the pivot next?</h3>
      <div class="answer-list">
        ${challengeOptions.map(([key, text]) => `
          <button class="answer ${state.selectedAnswer === key ? "selected" : ""}" data-answer="${key}">
            <span>${key}</span>${text}
          </button>
        `).join("")}
      </div>
      ${selected ? renderChallengeResult(selected) : ""}
    </section>
  `;
}

function renderChallengeResult([, , correct]) {
  return `
    <p class="result ${correct ? "correct" : "incorrect"}">
      ${correct
        ? "Correct. The pivot moves after the values smaller than it, locking one final position."
        : "Not quite. Partitioning keeps values smaller than the pivot before it, then places the pivot after them."}
    </p>
  `;
}

function renderBottomNav() {
  return `
    <nav class="bottom-nav" aria-label="Section navigation">
      ${[
        ["catalog", "home", "Home"],
        ["visualizer", "search", "Search"],
        ["lesson", "bookmark", "Saved"],
        ["challenge", "person", "Profile"],
      ].map(([view, symbol, label]) => `
        <button class="${state.view === view ? "active" : ""}" data-view="${view}">
          ${icon(symbol)}<span>${label}</span>
        </button>
      `).join("")}
    </nav>
  `;
}

function render() {
  root.innerHTML = `
    ${renderHeader()}
    <main class="app-shell">
      <div class="content-grid">
        ${renderCatalog()}
        <div class="workspace">${renderWorkspace()}</div>
      </div>
    </main>
    ${renderBottomNav()}
  `;
  bindEvents();
}

function bindEvents() {
  root.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });

  root.querySelectorAll("[data-algorithm]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedId = button.dataset.algorithm;
      if (state.selectedId === "binary-search") state.view = "lesson";
      else state.view = "catalog";
      stopPlayback();
      render();
    });
  });

  root.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => handleAction(button.dataset.action));
  });

  root.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedAnswer = button.dataset.answer;
      render();
    });
  });

  const search = root.querySelector("#algorithm-search");
  if (search) {
    search.addEventListener("input", (event) => {
      state.query = event.target.value;
      render();
      const nextSearch = root.querySelector("#algorithm-search");
      nextSearch?.focus();
      nextSearch?.setSelectionRange(state.query.length, state.query.length);
    });
  }
}

function setView(view) {
  state.view = view;
  if (view !== "visualizer") stopPlayback();
  render();
}

function handleAction(action) {
  if (action === "prev") {
    stopPlayback();
    state.step = Math.max(0, state.step - 1);
  }
  if (action === "next") {
    stopPlayback();
    state.step = Math.min(binarySteps.length - 1, state.step + 1);
  }
  if (action === "reset") {
    stopPlayback();
    state.step = 0;
  }
  if (action === "debug") {
    state.debug = !state.debug;
  }
  if (action === "play") {
    state.playing ? stopPlayback() : startPlayback();
  }
  render();
}

function startPlayback() {
  state.playing = true;
  window.clearInterval(state.timer);
  state.timer = window.setInterval(() => {
    if (state.step >= binarySteps.length - 1) {
      stopPlayback();
    } else {
      state.step += 1;
      render();
    }
  }, 1600);
}

function stopPlayback() {
  state.playing = false;
  window.clearInterval(state.timer);
  state.timer = null;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function summaryForAlgorithm(algorithm) {
  const visualizer = algorithm.visualizerType
    ? `The planned visualizer is ${algorithm.visualizerType.replaceAll("-", " ")}.`
    : "A visual dry run will be added from the learning template.";
  return `${algorithm.title || algorithm.name} is part of the ${algorithm.category} track. ${visualizer}`;
}

function useForAlgorithm(algorithm) {
  const priority = algorithm.priority ? `${algorithm.priority} priority` : "planned";
  return `${priority} page in phase ${algorithm.phase || "later"} using the universal learning debugger template.`;
}

function iconForAlgorithm(algorithm) {
  const category = String(algorithm.category || "").toLowerCase();
  if (category.includes("search")) return "search";
  if (category.includes("sort")) return "sort";
  if (category.includes("graph")) return "hub";
  if (category.includes("tree")) return "account_tree";
  if (category.includes("dynamic")) return "table_chart";
  if (category.includes("stack")) return "layers";
  if (category.includes("queue")) return "queue";
  if (category.includes("string")) return "abc";
  if (category.includes("matrix")) return "grid_on";
  if (category.includes("bit")) return "memory";
  if (category.includes("heap")) return "priority_high";
  if (category.includes("array")) return "view_week";
  return "school";
}

async function loadAlgorithmIndex() {
  try {
    const response = await fetch("./src/content/algorithm_pages_index.json", { cache: "no-store" });
    if (!response.ok) return;
    const data = await response.json();
    if (!Array.isArray(data.algorithms)) return;
    algorithms = data.algorithms.map((algorithm) => ({
      ...algorithm,
      name: algorithm.title,
      level: algorithm.priority,
    }));
    state.selectedId = data.firstImplementationTarget || state.selectedId;
    render();
  } catch {
    algorithms = starterAlgorithms;
  }
}

render();
loadAlgorithmIndex();
