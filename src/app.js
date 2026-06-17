import { pageLoaders } from "./content/algorithm_page_modules.js";

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

const state = {
  view: "catalog",
  selectedId: "binary-search",
  query: "",
  searchQuery: "",
  loadingPageId: "",
  notice: "",
  savedIds: loadSavedIds(),
  searchLoading: false,
};

const routeViews = new Set(["lesson", "visualizer", "challenge"]);
const loadedPages = new Map();
const loadedStyles = new Set();
const searchRecords = new Map();
const root = document.getElementById("root");

let algorithms = starterAlgorithms;
let activePageId = "";
let smartSearchPromise = null;

function icon(name) {
  return `<span class="material-symbols-outlined" aria-hidden="true">${name}</span>`;
}

function groupAlgorithms() {
  const query = state.query.trim().toLowerCase();
  return algorithms
    .filter((algorithm) => {
      if (!query) return true;
      return `${algorithm.name} ${algorithm.category} ${algorithm.summary || ""}`.toLowerCase().includes(query);
    })
    .reduce((groups, algorithm) => {
      groups[algorithm.category] ||= [];
      groups[algorithm.category].push(algorithm);
      return groups;
    }, {});
}

function renderHeader() {
  const currentSaved = state.savedIds.has(state.selectedId);
  return `
    <header class="app-header">
      <button class="icon-button" data-view="catalog" aria-label="Back to catalog">${icon("arrow_back")}</button>
      <button class="brand-button" data-view="catalog">Algo Explained</button>
      <nav class="top-nav" aria-label="Primary">
        ${["catalog", "search", "lesson", "visualizer", "challenge"].map(renderNavButton).join("")}
      </nav>
      <button class="icon-button ${currentSaved ? "saved" : ""}" data-action="save-current" aria-label="Save current algorithm">${icon(currentSaved ? "bookmark_added" : "bookmark")}</button>
    </header>
  `;
}

function renderNavButton(view) {
  const labels = {
    catalog: "home",
    search: "search",
    lesson: "lesson",
    visualizer: "visualize",
    challenge: "quiz",
  };
  return `<button class="nav-link ${state.view === view ? "active" : ""}" data-view="${view}">${labels[view] || view}</button>`;
}

function renderCatalog() {
  const rows = Object.entries(groupAlgorithms())
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

function renderSearchPanel() {
  const query = state.searchQuery.trim();
  const results = getSearchResults();
  const status = state.searchLoading
    ? "Indexing full algorithm page content..."
    : `${searchRecords.size || algorithms.length} algorithms searchable`;

  return `
    <section class="catalog-panel search-panel" aria-labelledby="smart-search-title">
      <div class="search-field smart-search-field">
        ${icon("search")}
        <input id="smart-search" value="${escapeHtml(state.searchQuery)}" placeholder="Search title, concept, complexity, code, use case..." aria-label="Search algorithm content" />
      </div>
      <div class="search-hero">
        <p class="eyebrow">Smart search</p>
        <h1 id="smart-search-title">Find an algorithm by what you remember.</h1>
        <p>Search titles, categories, visualizer types, lesson text, variables, dry runs, complexity notes, quiz content, and route keywords.</p>
      </div>
      <div class="search-summary">
        <span>${icon("database_search")} ${escapeHtml(status)}</span>
        <span>${query ? `${results.length} matches` : "Showing useful starting points"}</span>
      </div>
      <div class="search-results" aria-live="polite">
        ${results.length ? results.map(renderSearchResult).join("") : renderNoSearchResults(query)}
      </div>
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
  const saved = state.savedIds.has(algorithm.id);

  return `
    <button type="button" class="algorithm-card ${algorithm.id === state.selectedId ? "selected" : ""} ${saved ? "saved" : ""}" data-algorithm="${algorithm.id}">
      <span class="card-icon ${categoryClass}">${icon(iconName)}</span>
      <span class="difficulty ${String(level).toLowerCase()}">${escapeHtml(level)}</span>
      <strong>${escapeHtml(title)}</strong>
      <span>${escapeHtml(summary)}</span>
      <small>Real-world use</small>
      <em>${escapeHtml(use)}</em>
      <span class="card-meta">
        <b>${escapeHtml(phase)}</b>
        ${algorithm.visualizerType ? `<b>${escapeHtml(algorithm.visualizerType)}</b>` : ""}
        ${saved ? `<b class="saved-chip">${icon("bookmark")} Saved</b>` : ""}
      </span>
    </button>
  `;
}

function renderWorkspace() {
  const selected = getSelectedAlgorithm();
  const page = loadedPages.get(state.selectedId);

  if (state.view === "search") return renderSearchWorkspace(selected);
  if (state.view !== "catalog" && page) return page.render(state.view);
  if (state.loadingPageId === state.selectedId) return renderLoadingPanel(selected);
  return renderReadyPanel(selected);
}

function renderSearchWorkspace(selected) {
  const title = selected ? escapeHtml(selected.title || selected.name) : "Search the catalog";
  const category = selected ? escapeHtml(selected.category) : "Algorithms";

  return `
    <section class="ready-panel search-ready-panel">
      ${icon("manage_search")}
      <p class="eyebrow">${category}</p>
      <h2>${title}</h2>
      <p>Choose a result to open its detailed lesson, visualizer, and quiz. The search panel keeps working from the browser with no backend.</p>
    </section>
  `;
}

function renderLoadingPanel(selected) {
  return `
    <section class="ready-panel">
      ${icon("hourglass_top")}
      <h2>${selected ? escapeHtml(selected.title || selected.name) : "Loading algorithm"}</h2>
      <p>Loading this algorithm's separate JavaScript, CSS, logic, and animation files.</p>
    </section>
  `;
}

function renderReadyPanel(selected) {
  const selectedName = selected ? escapeHtml(selected.title || selected.name) : "Ready to visualize?";
  const plannedRoute = selected?.route ? `Planned route: ${escapeHtml(selected.route)}.` : "";

  return `
    <section class="ready-panel">
      ${icon("school")}
      <h2>${selectedName}</h2>
      <p>${plannedRoute} Open any algorithm to load its page files from that algorithm's own folder.</p>
    </section>
  `;
}

function renderBottomNav() {
  const currentSaved = state.savedIds.has(state.selectedId);
  return `
    <nav class="bottom-nav" aria-label="Section navigation">
      ${[
        ["catalog", "home", "Home"],
        ["search", "search", "Search"],
      ].map(([view, symbol, label]) => `
        <button class="${state.view === view ? "active" : ""}" data-view="${view}">
          ${icon(symbol)}<span>${label}</span>
        </button>
      `).join("")}
      <button class="${currentSaved ? "active saved" : ""}" data-action="save-current" aria-label="Save current algorithm">
        ${icon(currentSaved ? "bookmark_added" : "bookmark")}<span>${currentSaved ? "Saved" : "Save"}</span>
      </button>
      ${[
        ["visualizer", "play_circle", "Visualize"],
        ["challenge", "quiz", "Quiz"],
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
        ${state.view === "search" ? renderSearchPanel() : renderCatalog()}
        <div class="workspace">${renderWorkspace()}</div>
      </div>
    </main>
    ${renderNotice()}
    ${renderBottomNav()}
  `;
  bindEvents();
  loadedPages.get(state.selectedId)?.bind(root);
}

function bindEvents() {
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

  const smartSearch = root.querySelector("#smart-search");
  if (smartSearch) {
    smartSearch.addEventListener("input", (event) => {
      state.searchQuery = event.target.value;
      ensureSmartSearchIndex();
      render();
      const nextSearch = root.querySelector("#smart-search");
      nextSearch?.focus();
      nextSearch?.setSelectionRange(state.searchQuery.length, state.searchQuery.length);
    });
  }
}

function handleShellClick(event) {
  const target = event.target.closest("[data-action='save-current'], [data-algorithm], [data-view]");
  if (!target || !root.contains(target)) return;

  if (target.dataset.action === "save-current") {
    event.preventDefault();
    saveCurrentAlgorithm();
    return;
  }

  if (target.dataset.algorithm) {
    event.preventDefault();
    openAlgorithm(target.dataset.algorithm);
    return;
  }

  if (target.dataset.view) {
    event.preventDefault();
    setView(target.dataset.view);
  }
}

function renderNotice() {
  if (!state.notice) return "";
  return `<p class="app-notice" role="status">${escapeHtml(state.notice)}</p>`;
}

async function openAlgorithm(id) {
  setActivePage(id);
  state.selectedId = id;
  state.view = pageLoaders[id] ? "lesson" : "catalog";
  updateRoute();

  if (!pageLoaders[id]) {
    render();
    return;
  }

  await loadAlgorithmPage(id, { scrollToWorkspace: true });
}

async function setView(view) {
  state.view = view;
  loadedPages.get(state.selectedId)?.onViewChange?.(view);
  updateRoute();

  if (view === "search") {
    ensureSmartSearchIndex();
    render();
    focusSmartSearch();
    return;
  }

  if (view !== "catalog" && pageLoaders[state.selectedId]) {
    await loadAlgorithmPage(state.selectedId, { scrollToWorkspace: view !== "catalog" });
    return;
  }

  render();
}

async function loadAlgorithmPage(id, options = {}) {
  if (loadedPages.has(id)) {
    render();
    if (options.scrollToWorkspace) scrollWorkspaceIntoView();
    return;
  }

  state.loadingPageId = id;
  render();
  if (options.scrollToWorkspace) scrollWorkspaceIntoView();

  try {
    const module = await pageLoaders[id]();
    loadStyle(module.stylePath);
    loadedPages.set(id, module.createAlgorithmPage({
      icon,
      escapeHtml,
      requestRender: render,
    }));
  } finally {
    state.loadingPageId = "";
    render();
    if (options.scrollToWorkspace) scrollWorkspaceIntoView();
  }
}

function loadStyle(href) {
  if (!href || loadedStyles.has(href)) return;

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.append(link);
  loadedStyles.add(href);
}

function setActivePage(id) {
  if (activePageId && activePageId !== id) loadedPages.get(activePageId)?.cleanup?.();
  activePageId = id;
}

function getSelectedAlgorithm() {
  return algorithms.find((algorithm) => algorithm.id === state.selectedId);
}

function updateRoute() {
  if (state.view === "catalog") {
    history.pushState(null, "", `${location.pathname}${location.search}`);
    return;
  }

  if (state.view === "search") {
    if (location.hash !== "#/search") history.pushState(null, "", "#/search");
    return;
  }

  const selected = getSelectedAlgorithm();
  if (!selected?.route) return;

  const suffix = state.view && state.view !== "lesson" ? `/${state.view}` : "";
  const nextHash = `#${selected.route}${suffix}`;
  if (location.hash !== nextHash) history.pushState(null, "", nextHash);
}

function getRouteFromHash() {
  const hash = decodeURIComponent(location.hash.slice(1)).replace(/\/+$/g, "");
  if (!hash) return null;
  if (normalizeRoute(hash) === "/search" || normalizeRoute(hash) === "search") {
    return { view: "search" };
  }

  const parts = hash.split("/");
  const possibleView = parts.at(-1);
  const view = routeViews.has(possibleView) ? possibleView : "lesson";
  if (routeViews.has(possibleView)) parts.pop();

  const route = parts.join("/") || "/";
  const algorithm = algorithms.find((item) => normalizeRoute(item.route) === normalizeRoute(route));
  if (!algorithm || !pageLoaders[algorithm.id]) return null;

  return {
    id: algorithm.id,
    view,
  };
}

function normalizeRoute(route) {
  return String(route || "").replace(/\/+$/g, "");
}

function scrollWorkspaceIntoView() {
  window.requestAnimationFrame(() => {
    if (window.matchMedia("(min-width: 900px)").matches) return;
    root.querySelector(".workspace")?.scrollIntoView({ block: "start", behavior: "smooth" });
  });
}

function focusSmartSearch() {
  window.requestAnimationFrame(() => {
    root.querySelector("#smart-search")?.focus();
  });
}

function getSearchResults() {
  const query = state.searchQuery.trim();
  const records = algorithms.map((algorithm) => getSearchRecord(algorithm));
  if (!query) return records.sort(sortSuggestedSearchRecords).slice(0, 12);

  const tokens = tokenize(query);
  return records
    .map((record) => ({
      ...record,
      score: scoreSearchRecord(record, query, tokens),
    }))
    .filter((record) => record.score > 0)
    .sort((a, b) => b.score - a.score || sortSuggestedSearchRecords(a, b))
    .slice(0, 24);
}

function renderSearchResult(record) {
  const saved = state.savedIds.has(record.id);
  return `
    <button type="button" class="search-result ${record.id === state.selectedId ? "selected" : ""}" data-algorithm="${record.id}">
      <span class="card-icon ${slugify(record.category)}">${icon(record.icon)}</span>
      <span class="search-result-body">
        <strong>${escapeHtml(record.title)}</strong>
        <span>${escapeHtml(record.match)}</span>
        <span class="search-result-meta">
          <b>${escapeHtml(record.category)}</b>
          <b>${escapeHtml(record.priority)}</b>
          <b>${escapeHtml(record.visualizerType)}</b>
          ${saved ? `<b class="saved-chip">${icon("bookmark")} Saved</b>` : ""}
        </span>
      </span>
    </button>
  `;
}

function renderNoSearchResults(query) {
  return `
    <div class="empty-search">
      ${icon("search_off")}
      <strong>No matches for "${escapeHtml(query)}"</strong>
      <p>Try a title, topic, data structure, complexity term, visualizer type, or real-world use case.</p>
    </div>
  `;
}

function getSearchRecord(algorithm) {
  if (searchRecords.has(algorithm.id)) return searchRecords.get(algorithm.id);
  const record = createSearchRecord(algorithm);
  searchRecords.set(algorithm.id, record);
  return record;
}

function createSearchRecord(algorithm, pageData = {}) {
  const title = pageData.title || algorithm.title || algorithm.name;
  const category = pageData.category || algorithm.category || "Algorithms";
  const visualizerType = pageData.visualizerType || algorithm.visualizerType || "lesson";
  const priority = pageData.priority || algorithm.priority || algorithm.level || "medium";
  const iconName = pageData.icon || algorithm.icon || iconForAlgorithm(algorithm);
  const route = pageData.route || algorithm.route || "";
  const contentParts = [
    title,
    category,
    route,
    visualizerType,
    priority,
    summaryForAlgorithm({ ...algorithm, ...pageData, title, category, visualizerType }),
    useForAlgorithm({ ...algorithm, ...pageData, title, category, visualizerType, priority }),
    pageData.meaning,
    pageData.problem,
    pageData.realLifeExample,
    pageData.whenToUse,
    pageData.memoryTrick,
    pageData.visualizerCaption,
    pageData.complexity?.time,
    pageData.complexity?.space,
    pageData.quiz?.question,
    pageData.quiz?.correctText,
    pageData.quiz?.incorrectText,
    ...(pageData.logicSteps || []).flatMap((step) => [step.title, step.text]),
    ...(pageData.variables || []).flatMap((variable) => [variable.name, variable.purpose]),
    ...(pageData.dryRun || []).flatMap((step) => [step.label, step.title, step.note]),
    ...(pageData.quiz?.options || []).map((option) => option.text),
    route.replaceAll("/", " ").replaceAll("-", " "),
    String(title).replaceAll("-", " "),
    String(visualizerType).replaceAll("-", " "),
  ].filter(Boolean);

  return {
    id: algorithm.id,
    title,
    category,
    visualizerType,
    priority,
    icon: iconName,
    route,
    match: pageData.meaning || summaryForAlgorithm({ ...algorithm, ...pageData, title, category, visualizerType }),
    haystack: contentParts.join(" ").toLowerCase(),
  };
}

function scoreSearchRecord(record, query, tokens) {
  const normalizedQuery = query.toLowerCase();
  let score = 0;
  if (record.title.toLowerCase().includes(normalizedQuery)) score += 90;
  if (record.category.toLowerCase().includes(normalizedQuery)) score += 35;
  if (record.visualizerType.toLowerCase().includes(normalizedQuery)) score += 30;
  if (record.route.toLowerCase().includes(normalizedQuery)) score += 20;
  tokens.forEach((token) => {
    if (record.title.toLowerCase().includes(token)) score += 30;
    if (record.category.toLowerCase().includes(token)) score += 14;
    if (record.visualizerType.toLowerCase().includes(token)) score += 12;
    if (record.haystack.includes(token)) score += 6;
  });
  return score;
}

function sortSuggestedSearchRecords(a, b) {
  const priorityRank = { high: 0, medium: 1, low: 2 };
  return (priorityRank[a.priority] ?? 3) - (priorityRank[b.priority] ?? 3) || a.title.localeCompare(b.title);
}

function tokenize(value) {
  return String(value).toLowerCase().split(/[^a-z0-9+]+/).filter((token) => token.length > 1);
}

function getAlgorithmRouteParts(algorithm) {
  const parts = normalizeRoute(algorithm.route).split("/").filter(Boolean);
  const algorithmsIndex = parts.indexOf("algorithms");
  if (algorithmsIndex === -1 || !parts[algorithmsIndex + 1] || !parts[algorithmsIndex + 2]) return null;
  return {
    categorySlug: parts[algorithmsIndex + 1],
    algorithmSlug: parts[algorithmsIndex + 2],
  };
}

function ensureSmartSearchIndex() {
  if (smartSearchPromise) return smartSearchPromise;

  state.searchLoading = true;
  smartSearchPromise = Promise.allSettled(algorithms.map(async (algorithm) => {
    const parts = getAlgorithmRouteParts(algorithm);
    if (!parts) return;
    const module = await import(`./algorithms/${parts.categorySlug}/${parts.algorithmSlug}/data.js`);
    searchRecords.set(algorithm.id, createSearchRecord(algorithm, module.algorithmPage));
  })).finally(() => {
    state.searchLoading = false;
    if (state.view === "search") render();
  });

  return smartSearchPromise;
}

function saveCurrentAlgorithm() {
  const selected = getSelectedAlgorithm();
  if (!selected) return;

  const wasSaved = state.savedIds.has(selected.id);
  state.savedIds.add(selected.id);
  const saved = persistSavedIds();
  if (!saved && !wasSaved) state.savedIds.delete(selected.id);
  state.notice = saved
    ? wasSaved
      ? `${selected.title || selected.name} is already saved in this browser.`
      : `${selected.title || selected.name} saved in this browser.`
    : "Browser storage is unavailable, so this item could not be saved.";
  render();
  window.clearTimeout(saveCurrentAlgorithm.noticeTimer);
  saveCurrentAlgorithm.noticeTimer = window.setTimeout(() => {
    state.notice = "";
    render();
  }, 2200);
}

function loadSavedIds() {
  try {
    const value = window.localStorage.getItem("algo-explained:saved-algorithms");
    const ids = JSON.parse(value || "[]");
    return new Set(Array.isArray(ids) ? ids : []);
  } catch {
    return new Set();
  }
}

function persistSavedIds() {
  try {
    window.localStorage.setItem("algo-explained:saved-algorithms", JSON.stringify([...state.savedIds]));
    return true;
  } catch {
    return false;
  }
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
    searchRecords.clear();
    smartSearchPromise = null;

    const routeState = getRouteFromHash();
    if (routeState?.view === "search") {
      state.view = "search";
      ensureSmartSearchIndex();
      render();
      return;
    }

    if (routeState) {
      setActivePage(routeState.id);
      state.selectedId = routeState.id;
      state.view = routeState.view;
      await loadAlgorithmPage(routeState.id, { scrollToWorkspace: true });
      return;
    }

    state.selectedId = data.firstImplementationTarget || state.selectedId;
    render();
  } catch {
    algorithms = starterAlgorithms;
  }
}

window.addEventListener("hashchange", async () => {
  const routeState = getRouteFromHash();
  if (!routeState) {
    state.view = "catalog";
    render();
    return;
  }

  if (routeState.view === "search") {
    state.view = "search";
    ensureSmartSearchIndex();
    render();
    focusSmartSearch();
    return;
  }

  setActivePage(routeState.id);
  state.selectedId = routeState.id;
  state.view = routeState.view;
  await loadAlgorithmPage(routeState.id, { scrollToWorkspace: true });
});

root.addEventListener("click", handleShellClick);
render();
loadAlgorithmIndex();
