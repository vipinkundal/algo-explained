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

const initialAuthUser = loadAuthUser();
const initialUserId = initialAuthUser?.userId || loadUserId();

const supportedLanguages = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "zh-CN", label: "中文", dir: "ltr" },
  { code: "hi", label: "हिन्दी", dir: "ltr" },
  { code: "es", label: "Español", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" },
  { code: "fr", label: "Français", dir: "ltr" },
  { code: "bn", label: "বাংলা", dir: "ltr" },
  { code: "pt", label: "Português", dir: "ltr" },
  { code: "ru", label: "Русский", dir: "ltr" },
  { code: "id", label: "Indonesia", dir: "ltr" },
];

const state = {
  view: "catalog",
  selectedId: "binary-search",
  query: "",
  searchQuery: "",
  loadingPageId: "",
  notice: "",
  userId: initialUserId,
  authUser: initialAuthUser,
  sessionToken: loadSessionToken(),
  authMode: "login",
  authMessage: "",
  authMessageType: "error",
  savedIds: loadSavedIds(initialUserId),
  progress: loadProgress(initialUserId),
  recentIds: loadRecentIds(initialUserId),
  backendStatus: "local",
  searchLoading: false,
  quizDate: getTodayKey(),
  dailyQuiz: null,
  quizLoading: false,
  quizError: "",
  language: loadLanguage(),
};

const routeViews = new Set(["lesson", "visualizer", "challenge"]);
const dailyQuizCooldownMs = 24 * 60 * 60 * 1000;
const dailyQuizOnboardingMs = 3 * 24 * 60 * 60 * 1000;
const learningPathWindowMs = 3 * 24 * 60 * 60 * 1000;
const loadedPages = new Map();
const loadedStyles = new Set();
const searchRecords = new Map();
const algorithmDataRecords = new Map();
const localeDictionaries = new Map();
const root = document.getElementById("root");

let algorithms = starterAlgorithms;
let activePageId = "";
let smartSearchPromise = null;
let dailyQuizPromise = null;

function icon(name) {
  return `<span class="material-symbols-outlined" aria-hidden="true">${name}</span>`;
}

function renderHeader() {
  const currentSaved = state.savedIds.has(state.selectedId);
  const isAuthenticated = Boolean(state.authUser);
  const canSaveCurrentAlgorithm = isAuthenticated && routeViews.has(state.view) && Boolean(getSelectedAlgorithm());
  const navItems = ["catalog", "search", ...(isAuthenticated ? ["saved"] : []), "lesson", ...(isDailyQuizAvailable() ? ["quiz"] : []), "profile"];
  return `
    <header class="app-header">
      <button class="brand-button" data-view="catalog">${t("app.brand")}</button>
      <nav class="top-nav" aria-label="${escapeHtml(t("nav.primary"))}">
        ${navItems.map(renderNavButton).join("")}
      </nav>
      ${renderLanguageSelector()}
      ${canSaveCurrentAlgorithm ? `<button class="icon-button ${currentSaved ? "saved" : ""}" data-action="save-current" aria-label="${escapeHtml(t("actions.saveCurrentAlgorithm"))}">${icon(currentSaved ? "bookmark_added" : "bookmark")}</button>` : ""}
    </header>
  `;
}

function renderNavButton(view) {
  const labels = {
    catalog: t("nav.home"),
    search: t("nav.search"),
    saved: t("nav.saved"),
    profile: state.authUser ? t("nav.profile") : t("nav.signIn"),
    lesson: t("nav.lesson"),
    visualizer: t("nav.visualizer"),
    challenge: t("nav.challenge"),
    quiz: t("nav.quiz"),
  };
  return `<button class="nav-link ${state.view === view ? "active" : ""}" data-view="${view}">${escapeHtml(labels[view] || view)}</button>`;
}

function renderLanguageSelector() {
  return `
    <label class="language-selector" aria-label="${escapeHtml(t("language.label"))}">
      ${icon("translate")}
      <select data-language-select>
        ${supportedLanguages.map((language) => `
          <option value="${escapeHtml(language.code)}" ${language.code === state.language ? "selected" : ""}>
            ${escapeHtml(language.label)}
          </option>
        `).join("")}
      </select>
    </label>
  `;
}

function renderCatalog() {
  const recentAlgorithms = getRecentAlgorithms();

  return `
    <section class="catalog-panel" aria-labelledby="catalog-title">
      <div class="catalog-intro">
        <p class="eyebrow">Learning dashboard</p>
        <h1 id="catalog-title">Learn the logic, then watch it move.</h1>
        <p>Start from plain-English intuition, step through the code trace, then use visual controls to see the state changes.</p>
      </div>
      ${renderProgressPanel(getSelectedAlgorithm())}
      ${renderDashboardReports()}
      ${recentAlgorithms.length ? renderRecentDashboard(recentAlgorithms) : renderEmptyRecentDashboard()}
    </section>
  `;
}

function renderDashboardReports() {
  const recentAlgorithms = getRecentAlgorithms();
  const savedCount = state.savedIds.size;
  const completedCount = Object.values(state.progress)
    .reduce((total, progress) => total + ["lesson", "visualizer", "challenge"].filter((section) => progress?.[section]).length, 0);

  return `
    <section class="dashboard-reports" aria-labelledby="dashboard-reports-title">
      <div class="section-heading">
        <h2 id="dashboard-reports-title">Reports</h2>
        <span>More soon</span>
      </div>
      <div class="report-grid">
        ${renderReportCard("history", "Recent activity", `${recentAlgorithms.length}`, "Algorithms opened recently")}
        ${renderReportCard("fact_check", "Completed checks", `${completedCount}`, "Lesson, visualizer, and quiz marks")}
        ${renderReportCard("bookmark", "Saved for later", `${savedCount}`, "Algorithms saved to revisit")}
      </div>
    </section>
  `;
}

function renderReportCard(symbol, title, value, text) {
  return `
    <div class="report-card">
      <span class="report-icon">${icon(symbol)}</span>
      <strong>${escapeHtml(value)}</strong>
      <span>${escapeHtml(title)}</span>
      <p>${escapeHtml(text)}</p>
    </div>
  `;
}

function renderRecentDashboard(items) {
  return `
    <section class="recent-dashboard" aria-labelledby="recent-dashboard-title">
      <div class="section-heading">
        <h2 id="recent-dashboard-title">Recent learning</h2>
        <span>${items.length} recent</span>
      </div>
      <div class="recent-grid">
        ${items.map(renderRecentCard).join("")}
      </div>
    </section>
  `;
}

function renderEmptyRecentDashboard() {
  return `
    <section class="recent-dashboard" aria-labelledby="recent-dashboard-title">
      <div class="section-heading">
        <h2 id="recent-dashboard-title">Recent learning</h2>
        <span>0 recent</span>
      </div>
      <div class="empty-search dashboard-empty">
        ${icon("history")}
        <strong>No recent algorithms yet</strong>
        <p>Open an algorithm from Search and it will appear here for the next few days.</p>
      </div>
    </section>
  `;
}

function renderRecentCard(algorithm) {
  const title = algorithm.title || algorithm.name;
  const progressCount = getCompletedCount(algorithm.id);
  const progressLabel = progressCount ? `${progressCount}/3 complete` : "Started";
  return `
    <button type="button" class="recent-card" data-algorithm="${algorithm.id}">
      <span class="card-icon ${slugify(algorithm.category || "algorithms")}">${icon(algorithm.icon || iconForAlgorithm(algorithm))}</span>
      <span>
        <strong>${escapeHtml(title)}</strong>
        <em>${escapeHtml(algorithm.category || "Algorithms")}</em>
      </span>
      <b>${escapeHtml(progressLabel)}</b>
    </button>
  `;
}

function renderSearchPanel() {
  const query = state.searchQuery.trim();
  const results = getSearchResults();
  const status = state.searchLoading
    ? "Indexing full algorithm page content..."
    : `${searchRecords.size || algorithms.length} algorithms searchable`;
  const resultLabel = query ? `${results.length} matches` : `${results.length} algorithms`;

  return `
    <section class="catalog-panel search-panel" aria-labelledby="smart-search-title">
      <div class="search-field smart-search-field">
        ${icon("search")}
        <input id="smart-search" value="${escapeHtml(state.searchQuery)}" placeholder="Search title, concept, complexity, code, use case..." aria-label="Search algorithm content" />
      </div>
      <h1 class="visually-hidden" id="smart-search-title">Search algorithms</h1>
      <div class="search-summary">
        <span>${icon("database_search")} ${escapeHtml(status)}</span>
        <span>${escapeHtml(resultLabel)}</span>
      </div>
      <div class="search-results grouped-search-results" aria-live="polite">
        ${results.length ? renderSearchResultGroups(results) : renderNoSearchResults(query)}
      </div>
    </section>
  `;
}

function renderSavedPanel() {
  const savedAlgorithms = getSavedAlgorithms();
  return `
    <section class="catalog-panel saved-panel" aria-labelledby="saved-title">
      <div class="saved-heading">
        <p class="eyebrow">Saved for later</p>
        <h1 id="saved-title">Your saved algorithms</h1>
        <p>${savedAlgorithms.length ? `${savedAlgorithms.length} algorithms saved to your backend-backed progress.` : "Algorithms you save will appear here."}</p>
      </div>
      <div class="search-results saved-results" aria-live="polite">
        ${savedAlgorithms.length ? savedAlgorithms.map((algorithm) => renderSavedResult(algorithm)).join("") : renderEmptySaved()}
      </div>
    </section>
  `;
}

function renderSavedResult(algorithm) {
  const record = getSearchRecord(algorithm);
  return renderSearchResult({ ...record, match: algorithm.meaning || record.match });
}

function renderEmptySaved() {
  return `
    <div class="empty-search">
      ${icon("bookmark")}
      <strong>No saved algorithms yet</strong>
      <p>Open an algorithm and use the save control to keep it here for later.</p>
    </div>
  `;
}

function renderProfilePanel() {
  return `
    <section class="catalog-panel profile-panel" aria-labelledby="profile-title">
      ${state.authUser ? renderAccountProfile() : renderAuthForms()}
    </section>
  `;
}

function renderAccountProfile() {
  const user = state.authUser;
  const initials = getUserInitials(user);
  return `
    <div class="profile-hero">
      <span class="profile-avatar">${escapeHtml(initials)}</span>
      <div>
        <p class="eyebrow">Signed in</p>
        <h1 id="profile-title">${escapeHtml(user.name || "Profile")}</h1>
        <p>${escapeHtml(user.email)}</p>
      </div>
    </div>
    <div class="profile-meta">
      <div>
        <span>${icon("badge")}</span>
        <strong>User ID</strong>
        <p>${escapeHtml(user.userId)}</p>
      </div>
      <div>
        <span>${icon("sync")}</span>
        <strong>Progress sync</strong>
        <p>${escapeHtml(state.backendStatus === "synced" ? "Synced to backend" : "Available locally")}</p>
      </div>
    </div>
    <form class="auth-form profile-edit-form" data-auth-form="profile">
      <label>Name<input name="name" autocomplete="name" value="${escapeHtml(user.name || "")}" required /></label>
      <label>Email<input name="email" type="email" autocomplete="email" value="${escapeHtml(user.email || "")}" required /></label>
      <button class="auth-submit" type="submit">${icon("save")}<span>Save profile</span></button>
    </form>
    ${state.authMessage ? `<p class="auth-message ${escapeHtml(state.authMessageType)}">${escapeHtml(state.authMessage)}</p>` : ""}
    <button type="button" class="auth-submit danger" data-auth-action="logout">${icon("logout")}<span>Sign out</span></button>
  `;
}

function renderAuthForms() {
  const isSignup = state.authMode === "signup";
  const primaryLabel = isSignup ? "Create account" : "Continue";
  return `
    <div class="profile-hero auth-hero">
      <span class="profile-avatar">${icon("account_circle")}</span>
      <div>
        <p class="eyebrow">Account</p>
        <h1 id="profile-title">${isSignup ? "Create account" : "Sign in"}</h1>
        <p>${isSignup ? "Create an account to keep your learning path available." : "Continue to your learning account."}</p>
      </div>
    </div>
    <div class="auth-benefits" aria-label="Account benefits">
      <article>
        ${icon("quiz")}
        <strong>Daily quiz access</strong>
        <p>Get a daily quiz and keep your answer history tied to your account.</p>
      </article>
      <article>
        ${icon("bookmark")}
        <strong>Saved algorithms</strong>
        <p>Bookmark algorithm types and lessons you want to revisit later.</p>
      </article>
      <article>
        ${icon("history")}
        <strong>Recent activity</strong>
        <p>Resume from recently opened lessons, visualizers, and progress marks.</p>
      </article>
    </div>
    <form class="auth-form" data-auth-form="${escapeHtml(state.authMode)}">
      ${isSignup ? `<label>Full name<input name="name" autocomplete="name" placeholder="Ada Lovelace" /></label>` : ""}
      <label>Email<input name="email" type="email" autocomplete="email" placeholder="you@example.com" required /></label>
      <label>Password<input name="password" type="password" autocomplete="${isSignup ? "new-password" : "current-password"}" minlength="8" required /></label>
      <button class="auth-submit" type="submit">${icon(isSignup ? "person_add" : "login")}<span>${primaryLabel}</span></button>
    </form>
    <div class="auth-switch">
      <div>
        <strong>${isSignup ? "Already have an account?" : "New to Algo Explained?"}</strong>
        <p>${isSignup ? "Sign in to sync your saved algorithms and quiz progress." : "Create an account to save algorithms and unlock daily quiz history."}</p>
      </div>
      <button type="button" data-auth-mode="${isSignup ? "login" : "signup"}">${isSignup ? "Sign in" : "Create account"}</button>
    </div>
    ${state.authMessage ? `<p class="auth-message ${escapeHtml(state.authMessageType)}">${escapeHtml(state.authMessage)}</p>` : ""}
  `;
}

function getUserInitials(user) {
  const source = user?.name || user?.email || "U";
  return source
    .split(/[\s@._-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("") || "U";
}

function renderDailyQuizPanel() {
  const quiz = state.dailyQuiz;
  if (!isDailyQuizUnlocked()) return "";
  if (isDailyQuizCooldownActive(quiz)) return "";

  if (state.quizLoading) {
    return `
      <section class="catalog-panel daily-quiz-panel" aria-labelledby="daily-quiz-title">
        <div class="saved-heading">
          <p class="eyebrow">Daily quiz</p>
          <h1 id="daily-quiz-title">Building your test</h1>
          <p>Questions are selected from recently learned algorithms and related topics.</p>
        </div>
      </section>
    `;
  }

  if (!quiz?.questions?.length) {
    return `
      <section class="catalog-panel daily-quiz-panel" aria-labelledby="daily-quiz-title">
        <div class="saved-heading">
          <p class="eyebrow">Daily quiz</p>
          <h1 id="daily-quiz-title">No quiz available</h1>
          <p>${escapeHtml(state.quizError || "Start learning an algorithm to seed the daily question pool.")}</p>
        </div>
      </section>
    `;
  }

  const activeIndex = Math.min(quiz.activeIndex || 0, quiz.questions.length - 1);
  const question = quiz.questions[activeIndex];
  const answered = getAnsweredQuizCount(quiz);
  const complete = isDailyQuizComplete();
  const isLastQuestion = activeIndex >= quiz.questions.length - 1;

  return `
    <section class="catalog-panel daily-quiz-panel" aria-labelledby="daily-quiz-title">
      <div class="daily-quiz-heading">
        <p class="eyebrow">${escapeHtml(quiz.date)}</p>
        <h1 id="daily-quiz-title">Daily quiz</h1>
        <p>${complete ? "Completed for today." : "Required before opening another page."}</p>
        <div class="daily-quiz-meter" aria-label="${answered} of ${quiz.questions.length} questions answered">
          <span style="width: ${(answered / quiz.questions.length) * 100}%"></span>
        </div>
      </div>
      <article class="quiz-question-card">
        <div class="quiz-question-meta">
          <span>${icon("quiz")} Question ${activeIndex + 1}/${quiz.questions.length}</span>
          <span>${escapeHtml(question.category)}</span>
        </div>
        <h2>${escapeHtml(question.question)}</h2>
        <p>${escapeHtml(question.title)}</p>
        <div class="quiz-options">
          ${question.options.map((option) => renderQuizOption(question, option, complete)).join("")}
        </div>
        ${question.hintShown ? `<div class="quiz-hint">${icon("lightbulb")}<span>${escapeHtml(question.hint)}</span></div>` : ""}
        ${question.selectedKey ? renderQuizFeedback(question) : ""}
        <div class="quiz-controls">
          <button type="button" data-quiz-action="prev" ${activeIndex <= 0 ? "disabled" : ""}>${icon("skip_previous")}<span>Previous</span></button>
          <button type="button" data-quiz-action="hint" ${question.hintShown || complete ? "disabled" : ""}>${icon("lightbulb")}<span>Hint</span></button>
          ${isLastQuestion
            ? `<button type="button" class="primary" data-quiz-action="finish" ${complete || !question.selectedKey ? "disabled" : ""}>${icon("task_alt")}<span>Finish</span></button>`
            : `<button type="button" class="primary" data-quiz-action="next">${icon("skip_next")}<span>Next</span></button>`}
        </div>
      </article>
    </section>
  `;
}

function renderQuizOption(question, option, complete) {
  const selected = question.selectedKey === option.key;
  const answered = Boolean(question.selectedKey);
  const correctness = answered && selected
    ? option.key === question.correctKey
      ? "correct"
      : "incorrect"
    : "";
  const revealCorrect = answered && option.key === question.correctKey ? "correct-answer" : "";

  return `
    <button type="button" class="quiz-option ${selected ? "selected" : ""} ${correctness} ${revealCorrect}" data-quiz-answer="${escapeHtml(option.key)}" ${complete ? "disabled" : ""}>
      <b>${escapeHtml(option.key)}</b>
      <span>${escapeHtml(option.text)}</span>
    </button>
  `;
}

function renderQuizFeedback(question) {
  const correct = question.selectedKey === question.correctKey;
  return `
    <div class="quiz-feedback ${correct ? "correct" : "incorrect"}">
      ${icon(correct ? "check_circle" : "error")}
      <span>${escapeHtml(correct ? question.explanation : question.incorrectText)}</span>
    </div>
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
  const completedCount = getCompletedCount(algorithm.id);

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
        ${completedCount ? `<b class="progress-chip">${icon("task_alt")} ${completedCount}/3</b>` : ""}
        ${saved ? `<b class="saved-chip">${icon("bookmark")} Saved</b>` : ""}
      </span>
    </button>
  `;
}

function renderWorkspace() {
  const selected = getSelectedAlgorithm();
  const page = loadedPages.get(state.selectedId);

  if (state.view === "search") return "";
  if (state.view === "saved") return "";
  if (state.view === "profile") return "";
  if (state.view === "quiz") return renderDailyQuizWorkspace();
  if (state.view !== "catalog" && page) return page.render(state.view);
  return "";
}

function renderDailyQuizWorkspace() {
  const quiz = state.dailyQuiz;
  if (state.quizLoading) {
    return "";
  }

  if (!quiz?.questions?.length) {
    return "";
  }

  const answered = getAnsweredQuizCount(quiz);
  const complete = isDailyQuizComplete();
  if (!complete) return "";

  const score = getDailyQuizScore(quiz);

  return `
    <section class="daily-quiz-workspace" aria-labelledby="daily-quiz-workspace-title">
      <div>
        <p class="eyebrow">${complete ? "Completed" : "Required today"}</p>
        <h2 id="daily-quiz-workspace-title">${complete ? "Daily quiz complete" : "Finish today&apos;s quiz first"}</h2>
        <p>${complete ? "Your time and answers were logged to your progress." : "Navigation unlocks after every question has an answer."}</p>
      </div>
      <dl class="quiz-stats">
        <div>
          <dt>Questions</dt>
          <dd>${answered}/${quiz.questions.length}</dd>
        </div>
        <div>
          <dt>Score</dt>
          <dd>${score}/${quiz.questions.length}</dd>
        </div>
        <div>
          <dt>Time</dt>
          <dd>${formatDuration(getDailyQuizElapsedMs(quiz))}</dd>
        </div>
        <div>
          <dt>Hints</dt>
          <dd>${quiz.hintCount || 0}</dd>
        </div>
      </dl>
      <div class="quiz-topic-grid">
        ${quiz.questions.map((question, index) => `
          <button type="button" class="${index === quiz.activeIndex ? "active" : ""} ${question.selectedKey ? "answered" : ""}" data-quiz-action="jump" data-quiz-index="${index}">
            <span>${index + 1}</span>
            <strong>${escapeHtml(question.title)}</strong>
            <em>${escapeHtml(question.category)}</em>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function renderProgressPanel(selected) {
  if (!selected) return "";
  const progress = getAlgorithmProgress(selected.id);
  const completeCount = getCompletedCount(selected.id);
  const saved = state.savedIds.has(selected.id);
  const syncText = state.backendStatus === "synced"
    ? "Synced to backend"
    : state.backendStatus === "syncing"
      ? "Syncing..."
      : "Saved locally until backend is available";

  return `
    <section class="progress-panel" aria-label="${escapeHtml(selected.title || selected.name)} progress">
      <div>
        <strong>${icon("fact_check")} Progress</strong>
        <span>${completeCount}/3 complete · ${syncText}</span>
      </div>
      <div class="progress-actions">
        ${[
          ["lesson", "school", "Lesson"],
          ["visualizer", "play_circle", "Visualizer"],
          ["challenge", "quiz", "Quiz"],
        ].map(([section, symbol, label]) => `
          <button type="button" class="${progress[section] ? "completed" : ""}" data-progress-section="${section}">
            ${icon(progress[section] ? "check_circle" : symbol)}<span>${label}</span>
          </button>
        `).join("")}
        ${state.authUser ? `
          <button type="button" class="${saved ? "completed" : ""}" data-action="save-current">
            ${icon(saved ? "bookmark_added" : "bookmark")}<span>${saved ? "Saved" : "Save"}</span>
          </button>
        ` : ""}
      </div>
    </section>
  `;
}

function renderBottomNav() {
  const profileLabel = state.authUser ? t("nav.profile") : t("nav.signIn");
  const bottomItemCount = 2 + (state.authUser ? 1 : 0) + (isDailyQuizAvailable() ? 1 : 0) + 1;
  const secondaryItems = [
    ["catalog", "home", t("nav.home")],
    ["search", "search", t("nav.search")],
  ];
  const quizAvailable = isDailyQuizAvailable();
  return `
    <nav class="bottom-nav" aria-label="Section navigation" style="grid-template-columns: repeat(${bottomItemCount}, minmax(0, 1fr))">
      ${secondaryItems.map(([view, symbol, label]) => `
        <button class="${state.view === view ? "active" : ""}" data-view="${view}">
          ${icon(symbol)}<span>${label}</span>
        </button>
      `).join("")}
      ${state.authUser ? `
        <button class="${state.view === "saved" ? "active saved" : ""}" data-view="saved" aria-label="${escapeHtml(t("nav.savedAlgorithms"))}">
          ${icon("bookmark")}<span>${escapeHtml(t("nav.saved"))}</span>
        </button>
      ` : ""}
      ${quizAvailable ? `
        <button class="${state.view === "quiz" ? "active" : ""}" data-view="quiz">
          ${icon("quiz")}<span>${escapeHtml(t("nav.quiz"))}</span>
        </button>
      ` : ""}
      <button class="${state.view === "profile" ? "active" : ""}" data-view="profile" aria-label="${escapeHtml(profileLabel)}">
        ${icon(state.authUser ? "account_circle" : "person")}
        <span>${escapeHtml(profileLabel)}</span>
      </button>
    </nav>
  `;
}

function render() {
  const sidePanel = renderSidePanel();
  const workspace = renderWorkspace();
  const contentGridClass = [
    "content-grid",
    !(sidePanel && workspace) ? "single-column" : "",
    shouldFocusDailyQuizQuestion() ? "quiz-question-only" : "",
  ].filter(Boolean).join(" ");

  root.innerHTML = `
    ${renderHeader()}
    <main class="app-shell">
      <div class="${contentGridClass}">
        ${sidePanel}
        ${workspace ? `<div class="workspace">${workspace}</div>` : ""}
      </div>
    </main>
    ${renderNotice()}
    ${renderBottomNav()}
  `;
  bindEvents();
  loadedPages.get(state.selectedId)?.bind(root);
}

function shouldFocusDailyQuizQuestion() {
  return state.view === "quiz" && Boolean(state.dailyQuiz?.questions?.length) && !isDailyQuizComplete();
}

function renderSidePanel() {
  if (state.view === "search") return renderSearchPanel();
  if (state.view === "saved") return renderSavedPanel();
  if (state.view === "quiz") return renderDailyQuizPanel();
  if (state.view === "profile") return renderProfilePanel();
  if (state.view === "catalog") return renderCatalog();
  return "";
}

function bindEvents() {
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

  root.querySelectorAll("[data-auth-form]").forEach((form) => {
    form.addEventListener("submit", handleAuthSubmit);
  });

  const languageSelect = root.querySelector("[data-language-select]");
  if (languageSelect) {
    languageSelect.addEventListener("change", (event) => {
      setLanguage(event.target.value);
    });
  }
}

function handleShellClick(event) {
  const target = event.target.closest("[data-action='save-current'], [data-auth-action], [data-auth-mode], [data-algorithm], [data-view], [data-progress-section], [data-quiz-answer], [data-quiz-action]");
  if (!target || !root.contains(target)) return;

  if (target.dataset.authMode) {
    event.preventDefault();
    state.authMode = target.dataset.authMode;
    state.authMessage = "";
    state.authMessageType = "error";
    render();
    return;
  }

  if (target.dataset.authAction === "logout") {
    event.preventDefault();
    logoutUser();
    return;
  }

  if (target.dataset.quizAnswer) {
    event.preventDefault();
    answerDailyQuiz(target.dataset.quizAnswer);
    return;
  }

  if (target.dataset.quizAction) {
    event.preventDefault();
    handleDailyQuizAction(target);
    return;
  }

  if (target.dataset.action === "save-current") {
    event.preventDefault();
    saveCurrentAlgorithm();
    return;
  }

  if (isDailyQuizRequired() && (target.dataset.algorithm || target.dataset.progressSection || !["quiz", "profile"].includes(target.dataset.view))) {
    event.preventDefault();
    forceDailyQuiz("Complete today's quiz before opening another page.");
    return;
  }

  if (target.dataset.algorithm) {
    event.preventDefault();
    openAlgorithm(target.dataset.algorithm);
    return;
  }

  if (target.dataset.progressSection) {
    event.preventDefault();
    toggleProgress(target.dataset.progressSection);
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
  if (isDailyQuizRequired()) {
    forceDailyQuiz("Complete today's quiz before opening another page.");
    return;
  }

  setActivePage(id);
  state.selectedId = id;
  markAlgorithmRecent(id);
  state.view = pageLoaders[id] ? "lesson" : "catalog";
  updateRoute();

  if (!pageLoaders[id]) {
    render();
    return;
  }

  await loadAlgorithmPage(id, { scrollToWorkspace: true });
}

async function setView(view) {
  if (view === "saved" && !state.authUser) {
    showSignIn();
    return;
  }

  if (view === "quiz" && !isDailyQuizUnlocked()) {
    redirectFromQuizOnboarding();
    return;
  }

  if (view === "quiz" && isDailyQuizCooldownActive()) {
    redirectFromQuizCooldown();
    return;
  }

  if (isDailyQuizRequired() && !["quiz", "profile"].includes(view)) {
    forceDailyQuiz("Complete today's quiz before opening another page.");
    return;
  }

  state.view = view;
  loadedPages.get(state.selectedId)?.onViewChange?.(view);
  updateRoute();
  if (routeViews.has(view)) markAlgorithmRecent(state.selectedId);

  if (view === "quiz") {
    await initializeDailyQuiz();
    if (isDailyQuizCooldownActive()) {
      redirectFromQuizCooldown();
      return;
    }
    render();
    return;
  }

  if (view === "search") {
    ensureSmartSearchIndex();
    render();
    focusSmartSearch();
    return;
  }

  if (view === "saved") {
    render();
    return;
  }

  if (view === "profile") {
    render();
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
      localizeAlgorithmPage,
      t,
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

function getRecentAlgorithms() {
  return state.recentIds
    .map((id) => algorithms.find((algorithm) => algorithm.id === id))
    .filter(Boolean)
    .slice(0, 6);
}

function getSavedAlgorithms() {
  return [...state.savedIds]
    .map((id) => algorithms.find((algorithm) => algorithm.id === id))
    .filter(Boolean);
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

  if (state.view === "saved") {
    if (location.hash !== "#/saved") history.pushState(null, "", "#/saved");
    return;
  }

  if (state.view === "quiz") {
    if (location.hash !== "#/quiz") history.pushState(null, "", "#/quiz");
    return;
  }

  if (state.view === "profile") {
    if (location.hash !== "#/profile") history.pushState(null, "", "#/profile");
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
  if (normalizeRoute(hash) === "/saved" || normalizeRoute(hash) === "saved") {
    return { view: "saved" };
  }
  if (normalizeRoute(hash) === "/quiz" || normalizeRoute(hash) === "quiz") {
    return { view: "quiz" };
  }
  if (normalizeRoute(hash) === "/profile" || normalizeRoute(hash) === "profile") {
    return { view: "profile" };
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
  if (!query) return mergeEquivalentSearchRecords(records).sort(sortSuggestedSearchRecords);

  const tokens = tokenize(query);
  const scoredRecords = records
    .map((record) => ({
      ...record,
      score: scoreSearchRecord(record, query, tokens),
    }))
    .filter((record) => record.score > 0);

  return mergeEquivalentSearchRecords(scoredRecords)
    .sort((a, b) => b.score - a.score || sortSuggestedSearchRecords(a, b))
    .slice(0, 24);
}

function renderSearchResult(record) {
  const saved = state.savedIds.has(record.id);
  const completedCount = getCompletedCount(record.id);
  return `
    <button type="button" class="search-result ${record.id === state.selectedId ? "selected" : ""}" data-algorithm="${record.id}">
      <span class="search-result-body">
        <span class="search-result-title">
          <span class="card-icon ${slugify(record.category)}">${icon(record.icon)}</span>
          <strong>${escapeHtml(record.title)}</strong>
        </span>
        <span class="search-result-summary">${escapeHtml(record.match)}</span>
        <span class="search-result-meta">
          <b>${escapeHtml(record.category)}</b>
          ${record.mergedCount ? `<b>${record.mergedCount} merged</b>` : ""}
          <b>${escapeHtml(record.priority)}</b>
          <b>${escapeHtml(record.visualizerType)}</b>
          ${completedCount ? `<b class="progress-chip">${icon("task_alt")} ${completedCount}/3</b>` : ""}
          ${saved ? `<b class="saved-chip">${icon("bookmark")} Saved</b>` : ""}
        </span>
      </span>
    </button>
  `;
}

function renderSearchResultGroups(records) {
  return groupSearchResultsByCategory(records, Boolean(state.searchQuery.trim())).map(({ category, records: categoryRecords }) => `
    <section class="search-result-group">
      <div class="search-result-group-header">
        <h2>${escapeHtml(category)}</h2>
        <span>${categoryRecords.length} ${categoryRecords.length === 1 ? "algorithm" : "algorithms"}</span>
      </div>
      <div class="search-result-group-list">
        ${categoryRecords.map(renderSearchResult).join("")}
      </div>
    </section>
  `).join("");
}

function groupSearchResultsByCategory(records, isScoredSearch = false) {
  const groups = new Map();
  records.forEach((record) => {
    const group = getSearchGroup(record);
    if (!groups.has(group.key)) groups.set(group.key, { ...group, records: [] });
    groups.get(group.key).records.push(record);
  });

  return [...groups.values()]
    .map((group) => ({
      ...group,
      score: Math.max(...group.records.map((record) => record.score || 0)),
      records: group.records.sort(isScoredSearch ? sortScoredSearchRecords : sortSuggestedSearchRecords),
    }))
    .sort(isScoredSearch ? sortScoredSearchGroups : sortSearchCategoryGroups);
}

function sortScoredSearchRecords(a, b) {
  return (b.score || 0) - (a.score || 0) || sortSuggestedSearchRecords(a, b);
}

function sortScoredSearchGroups(a, b) {
  return (b.score || 0) - (a.score || 0) || sortSearchCategoryGroups(a, b);
}

function getSearchGroup(record) {
  const category = record.category || "Algorithms";
  if (category === "Data Structures" && record.topicGroup) {
    const mappedCategory = getDataStructureSearchCategory(record.topicGroup);
    return {
      key: mappedCategory,
      category: mappedCategory,
      baseCategory: mappedCategory,
      topicGroup: record.topicGroup,
    };
  }

  return {
    key: category,
    category,
    baseCategory: category,
    topicGroup: "",
  };
}

function getDataStructureSearchCategory(topicGroup) {
  const categoryMap = {
    "C/C++ Essentials": "C/C++ Essentials",
    Recursion: "Recursion and Backtracking",
    "Arrays / Array ADT": "Arrays",
    Strings: "Strings",
    "Matrix / Sparse Matrix / Polynomial": "Matrix and Grid",
    "Linked List": "Linked Lists",
    Stack: "Stack",
    Queue: "Queue",
    "Trees / BST / AVL / Heap": "Trees",
  };
  return categoryMap[topicGroup] || topicGroup || "Data Structures";
}

function mergeEquivalentSearchRecords(records) {
  const groups = new Map();
  records.forEach((record) => {
    const group = getSearchGroup(record);
    const key = `${group.key}:${normalizeEquivalentSearchTitle(record.title)}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(record);
  });

  return [...groups.values()].map((groupRecords) => {
    if (groupRecords.length === 1) return groupRecords[0];
    return createMergedSearchRecord(groupRecords);
  });
}

function createMergedSearchRecord(records) {
  const primary = choosePrimarySearchRecord(records);
  const mergedTitles = records
    .map((record) => record.title)
    .filter(Boolean)
    .filter((title, index, titles) => titles.indexOf(title) === index);
  const mergedCount = records.length;
  const mergedMatch = `${mergedCount} related lessons merged here: ${mergedTitles.slice(0, 3).join(", ")}${mergedTitles.length > 3 ? ", and more" : ""}.`;

  return {
    ...primary,
    score: Math.max(...records.map((record) => record.score || 0)),
    tags: uniqueSearchTags(records.flatMap((record) => record.tags || [])),
    haystack: records.map((record) => record.haystack).join(" "),
    match: mergedMatch,
    mergedCount,
  };
}

function choosePrimarySearchRecord(records) {
  return [...records].sort((a, b) => {
    if (a.category === "Data Structures" && b.category !== "Data Structures") return 1;
    if (a.category !== "Data Structures" && b.category === "Data Structures") return -1;
    return sortSuggestedSearchRecords(a, b);
  })[0];
}

function normalizeEquivalentSearchTitle(title) {
  return String(title || "")
    .toLowerCase()
    .replace(/\b(c\+\+|cpp|with|using|and|the|of|to|in|a|an)\b/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function sortSearchCategoryGroups(a, b) {
  const categoryOrder = [
    "Foundations",
    "Searching",
    "Sorting",
    "Arrays",
    "Array Patterns",
    "Recursion and Backtracking",
    "Dynamic Programming",
    "Graphs",
    "Trees",
    "Heap and Priority Queue",
    "Stack",
    "Queue",
    "Linked Lists",
    "Strings",
    "Matrix and Grid",
    "Number Theory and Bit Manipulation",
    "C/C++ Essentials",
    "C++ STL Algorithm Pages",
    "Data Structures",
  ];
  const dataStructureTopicOrder = [
    "C/C++ Essentials",
    "Recursion",
    "Arrays / Array ADT",
    "Strings",
    "Matrix / Sparse Matrix / Polynomial",
    "Linked List",
    "Stack",
    "Queue",
    "Trees / BST / AVL / Heap",
  ];
  const aRank = categoryOrder.indexOf(a.baseCategory || a.category);
  const bRank = categoryOrder.indexOf(b.baseCategory || b.category);
  const normalizedARank = aRank === -1 ? categoryOrder.length : aRank;
  const normalizedBRank = bRank === -1 ? categoryOrder.length : bRank;
  if (normalizedARank !== normalizedBRank) return normalizedARank - normalizedBRank;

  if ((a.baseCategory || a.category) === "Data Structures" && (b.baseCategory || b.category) === "Data Structures") {
    const aTopicRank = dataStructureTopicOrder.indexOf(a.topicGroup || "");
    const bTopicRank = dataStructureTopicOrder.indexOf(b.topicGroup || "");
    const normalizedATopicRank = aTopicRank === -1 ? dataStructureTopicOrder.length : aTopicRank;
    const normalizedBTopicRank = bTopicRank === -1 ? dataStructureTopicOrder.length : bTopicRank;
    if (normalizedATopicRank !== normalizedBTopicRank) return normalizedATopicRank - normalizedBTopicRank;
  }

  return a.category.localeCompare(b.category);
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
  const topicGroup = pageData.topicGroup || algorithm.topicGroup || "";
  const visualizerType = pageData.visualizerType || algorithm.visualizerType || "lesson";
  const priority = pageData.priority || algorithm.priority || algorithm.level || "medium";
  const iconName = pageData.icon || algorithm.icon || iconForAlgorithm(algorithm);
  const route = pageData.route || algorithm.route || "";
  const tags = getSearchTags(algorithm, pageData, { category, topicGroup, visualizerType, priority });
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
    pageData.track,
    topicGroup,
    pageData.sourceFolder,
    pageData.sourceFile,
    pageData.sourceLanguage,
    pageData.originalCodeFilename,
    ...tags,
    pageData.visualizerCaption,
    pageData.complexity?.time,
    pageData.complexity?.space,
    pageData.quiz?.question,
    pageData.quiz?.correctText,
    pageData.quiz?.incorrectText,
    ...(pageData.logicSteps || []).flatMap((step) => [step.title, step.text]),
    ...(pageData.variables || []).flatMap((variable) => [variable.name, variable.purpose]),
    ...(pageData.dryRun || []).flatMap((step) => [step.label, step.title, step.note]),
    ...(pageData.relatedLinks || []).flatMap((link) => [link.id, link.title, link.label]),
    ...(pageData.relatedAlgorithmIds || []),
    ...(pageData.quiz?.options || []).map((option) => option.text),
    route.replaceAll("/", " ").replaceAll("-", " "),
    String(title).replaceAll("-", " "),
    String(visualizerType).replaceAll("-", " "),
  ].filter(Boolean);

  return {
    id: algorithm.id,
    title,
    category,
    topicGroup,
    visualizerType,
    priority,
    tags,
    icon: iconName,
    route,
    match: pageData.meaning || summaryForAlgorithm({ ...algorithm, ...pageData, title, category, visualizerType }),
    haystack: contentParts.join(" ").toLowerCase(),
  };
}

function getSearchTags(algorithm, pageData, { category, topicGroup, visualizerType, priority }) {
  return uniqueSearchTags([
    ...normalizeSearchTagList(pageData.tags),
    category,
    topicGroup,
    pageData.track && pageData.track !== category ? pageData.track : "",
    humanizeSearchTag(visualizerType),
    pageData.sourceLanguage ? String(pageData.sourceLanguage).toUpperCase() : "",
    priority,
    algorithm.level,
  ]).slice(0, 6);
}

function normalizeSearchTagList(value) {
  if (Array.isArray(value)) return value;
  return value ? [value] : [];
}

function uniqueSearchTags(values) {
  const tags = [];
  values.forEach((value) => {
    const tag = String(value || "").trim();
    if (!tag) return;
    if (!tags.some((current) => current.toLowerCase() === tag.toLowerCase())) tags.push(tag);
  });
  return tags;
}

function humanizeSearchTag(value) {
  return String(value || "")
    .replaceAll("-", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function scoreSearchRecord(record, query, tokens) {
  const normalizedQuery = query.toLowerCase();
  let score = 0;
  if (record.title.toLowerCase().includes(normalizedQuery)) score += 90;
  if (record.category.toLowerCase().includes(normalizedQuery)) score += 35;
  if (record.visualizerType.toLowerCase().includes(normalizedQuery)) score += 30;
  if ((record.tags || []).some((tag) => tag.toLowerCase() === normalizedQuery)) score += 80;
  if ((record.tags || []).some((tag) => tag.toLowerCase().includes(normalizedQuery))) score += 45;
  if (record.route.toLowerCase().includes(normalizedQuery)) score += 20;
  tokens.forEach((token) => {
    if (record.title.toLowerCase().includes(token)) score += 30;
    if (record.category.toLowerCase().includes(token)) score += 14;
    if (record.visualizerType.toLowerCase().includes(token)) score += 12;
    if ((record.tags || []).some((tag) => tag.toLowerCase().includes(token))) score += 12;
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

async function loadAlgorithmData(algorithm) {
  if (algorithmDataRecords.has(algorithm.id)) return algorithmDataRecords.get(algorithm.id);

  const parts = getAlgorithmRouteParts(algorithm);
  if (!parts) return {};

  const module = await import(`./algorithms/${parts.categorySlug}/${parts.algorithmSlug}/data.js`);
  const pageData = module.algorithmPage || {};
  algorithmDataRecords.set(algorithm.id, pageData);
  searchRecords.set(algorithm.id, createSearchRecord(algorithm, pageData));
  return pageData;
}

async function initializeDailyQuiz() {
  if (!isDailyQuizUnlocked()) {
    state.quizLoading = false;
    state.dailyQuiz = null;
    return null;
  }

  if (isDailyQuizCooldownActive()) return state.dailyQuiz;
  if (dailyQuizPromise) return dailyQuizPromise;

  state.quizLoading = true;
  state.quizError = "";
  render();

  dailyQuizPromise = (async () => {
    const storedQuiz = await fetchDailyQuiz();
    if (storedQuiz) {
      state.dailyQuiz = storedQuiz;
      if (isDailyQuizCooldownActive()) {
        persistDailyQuizLocal();
        syncDailyQuiz({ silent: true });
      }
    } else if (isDailyQuizCooldownActive()) {
      state.quizLoading = false;
      render();
      return state.dailyQuiz;
    } else {
      state.dailyQuiz = await buildDailyQuiz();
      persistDailyQuizLocal();
      await syncDailyQuiz({ silent: true });
    }

    state.quizLoading = false;
    if (isDailyQuizRequired() && !["quiz", "profile"].includes(state.view)) {
      forceDailyQuiz("Complete today's quiz before opening another page.");
    } else {
      render();
    }

    return state.dailyQuiz;
  })().catch((error) => {
    state.quizLoading = false;
    state.quizError = error.message || "Daily quiz could not be prepared.";
    render();
    return state.dailyQuiz;
  }).finally(() => {
    dailyQuizPromise = null;
  });

  return dailyQuizPromise;
}

async function fetchDailyQuiz() {
  const localQuiz = loadDailyQuizLocal();
  if (isDailyQuizCooldownActive(localQuiz)) return localQuiz;

  try {
    const anonymousId = window.localStorage.getItem("algo-explained:anonymous-user-id");
    if (state.authUser && anonymousId && anonymousId !== state.userId) {
      const anonymousResponse = await fetch(`/api/daily-quiz?userId=${encodeURIComponent(anonymousId)}&date=${encodeURIComponent(state.quizDate)}`, { cache: "no-store" });
      if (anonymousResponse.ok) {
        const anonymousData = await anonymousResponse.json();
        const anonymousCompletedQuiz = getCooldownQuizFromDailyQuizPayload(anonymousData);
        if (anonymousCompletedQuiz) {
          persistDailyQuizLocal(anonymousCompletedQuiz);
          return anonymousCompletedQuiz;
        }
      }
    }

    const response = await fetch(`/api/daily-quiz?userId=${encodeURIComponent(state.userId)}&date=${encodeURIComponent(state.quizDate)}`, { cache: "no-store" });
    if (!response.ok) throw new Error("Daily quiz API unavailable");
    const data = await response.json();
    const completedQuiz = getCooldownQuizFromDailyQuizPayload(data);
    if (completedQuiz) {
      persistDailyQuizLocal(completedQuiz);
      return completedQuiz;
    }
    if (data.quiz?.date === state.quizDate) {
      persistDailyQuizLocal(data.quiz);
      return normalizeClientQuiz(data.quiz);
    }
  } catch {
    state.backendStatus = "local";
  }

  return localQuiz;
}

function getCooldownQuizFromDailyQuizPayload(data) {
  const todaysCompletedQuiz = data?.quiz ? normalizeClientQuiz(data.quiz) : null;
  if (isDailyQuizCooldownActive(todaysCompletedQuiz)) return todaysCompletedQuiz;

  const latestCompletedQuiz = data?.latestCompletedQuiz ? normalizeClientQuiz(data.latestCompletedQuiz) : null;
  return isDailyQuizCooldownActive(latestCompletedQuiz) ? latestCompletedQuiz : null;
}

async function buildDailyQuiz() {
  const candidates = getDailyQuizCandidates();
  const questions = [];

  for (const algorithm of candidates) {
    try {
      const pageData = await loadAlgorithmData(algorithm);
      const question = createDailyQuestion(algorithm, pageData, questions.length);
      if (question) questions.push(question);
      if (questions.length >= 10) break;
    } catch {
      continue;
    }
  }

  const startedAt = new Date().toISOString();
  return normalizeClientQuiz({
    date: state.quizDate,
    userId: state.userId,
    startedAt,
    completedAt: questions.length ? "" : startedAt,
    elapsedMs: 0,
    hintCount: 0,
    activeIndex: 0,
    sourceIds: questions.map((question) => question.algorithmId),
    questions,
  });
}

function getDailyQuizCandidates() {
  const learningIds = getRecentLearningIds();
  const learningAlgorithms = learningIds
    .map((id) => algorithms.find((algorithm) => algorithm.id === id))
    .filter(Boolean);
  const learningCategories = new Set(learningAlgorithms.map((algorithm) => algorithm.category));
  const candidateIds = [
    ...learningIds,
    ...algorithms.filter((algorithm) => learningCategories.has(algorithm.category)).map((algorithm) => algorithm.id),
    ...algorithms.filter((algorithm) => String(algorithm.priority || algorithm.level).toLowerCase() === "high").map((algorithm) => algorithm.id),
    ...algorithms.map((algorithm) => algorithm.id),
  ];

  return [...new Set(candidateIds)]
    .map((id) => algorithms.find((algorithm) => algorithm.id === id))
    .filter((algorithm) => algorithm && pageLoaders[algorithm.id])
    .slice(0, 40);
}

function getRecentLearningIds() {
  const cutoff = Date.now() - learningPathWindowMs;
  const progressIds = Object.entries(state.progress)
    .filter(([, progress]) => {
      const updatedAt = Date.parse(progress?.updatedAt || "");
      return Number.isFinite(updatedAt) && updatedAt >= cutoff;
    })
    .sort(([, a], [, b]) => Date.parse(b.updatedAt || "") - Date.parse(a.updatedAt || ""))
    .map(([id]) => id);

  return [...new Set([...progressIds, ...state.recentIds])].filter(Boolean);
}

function createDailyQuestion(algorithm, pageData, index) {
  const quiz = pageData.quiz || {};
  const options = Array.isArray(quiz.options) ? quiz.options : [];
  const correctOption = options.find((option) => option.correct);
  if (!quiz.question || !correctOption) return null;

  return {
    id: `${state.quizDate}-${algorithm.id}-${index + 1}`,
    algorithmId: algorithm.id,
    title: pageData.title || algorithm.title || algorithm.name,
    category: pageData.category || algorithm.category || "Algorithms",
    question: quiz.question,
    options: options.map((option) => ({
      key: String(option.key || ""),
      text: String(option.text || ""),
    })).filter((option) => option.key && option.text),
    correctKey: String(correctOption.key || ""),
    hint: pageData.memoryTrick || pageData.whenToUse || quiz.incorrectText || "Look for the input shape, state, and stop condition.",
    explanation: quiz.correctText || pageData.meaning || "That answer matches the algorithm's core pattern.",
    incorrectText: quiz.incorrectText || "Review the algorithm's own state and stop condition.",
    selectedKey: "",
    answeredAt: "",
    hintShown: false,
  };
}

function normalizeClientQuiz(quiz) {
  return {
    ...quiz,
    date: quiz.date || state.quizDate,
    userId: quiz.userId || state.userId,
    activeIndex: Math.max(0, Math.min(Number(quiz.activeIndex) || 0, Math.max((quiz.questions || []).length - 1, 0))),
    hintCount: Number(quiz.hintCount) || 0,
    elapsedMs: Number(quiz.elapsedMs) || 0,
    questions: Array.isArray(quiz.questions) ? quiz.questions.slice(0, 10).map((question) => ({
      ...question,
      selectedKey: question.selectedKey || "",
      answeredAt: question.answeredAt || "",
      hintShown: Boolean(question.hintShown),
    })) : [],
  };
}

function answerDailyQuiz(key) {
  const quiz = state.dailyQuiz;
  if (!quiz || isDailyQuizComplete()) return;
  const question = quiz.questions[quiz.activeIndex || 0];
  if (!question) return;

  question.selectedKey = key;
  question.answeredAt = new Date().toISOString();
  persistDailyQuizLocal();
  render();
  syncDailyQuiz({ silent: true });
}

function handleDailyQuizAction(target) {
  const quiz = state.dailyQuiz;
  if (!quiz) return;

  const action = target.dataset.quizAction;
  let completedNow = false;
  if (action === "jump") {
    quiz.activeIndex = Math.max(0, Math.min(Number(target.dataset.quizIndex) || 0, quiz.questions.length - 1));
  }

  if (action === "prev") {
    quiz.activeIndex = Math.max(0, (quiz.activeIndex || 0) - 1);
  }

  if (action === "next") {
    quiz.activeIndex = Math.min(quiz.questions.length - 1, (quiz.activeIndex || 0) + 1);
  }

  if (action === "hint" && !isDailyQuizComplete()) {
    const question = quiz.questions[quiz.activeIndex || 0];
    if (question && !question.hintShown) {
      question.hintShown = true;
      quiz.hintCount = (quiz.hintCount || 0) + 1;
    }
  }

  if (action === "finish") {
    const firstUnansweredIndex = quiz.questions.findIndex((question) => !question.selectedKey);
    if (firstUnansweredIndex >= 0) {
      quiz.activeIndex = firstUnansweredIndex;
      state.notice = `Answer question ${firstUnansweredIndex + 1} before finishing today's quiz.`;
    } else {
      quiz.completedAt = new Date().toISOString();
      quiz.elapsedMs = getDailyQuizElapsedMs(quiz);
      state.notice = `Daily quiz complete: ${getDailyQuizScore(quiz)}/${quiz.questions.length} in ${formatDuration(quiz.elapsedMs)}.`;
      completedNow = true;
    }

    window.clearTimeout(handleDailyQuizAction.noticeTimer);
    handleDailyQuizAction.noticeTimer = window.setTimeout(() => {
      state.notice = "";
      render();
    }, 2600);
  }

  persistDailyQuizLocal();
  syncDailyQuiz({ silent: true });
  if (completedNow) {
    state.view = "catalog";
    updateRoute();
  }
  render();
}

function isDailyQuizRequired() {
  return Boolean(isDailyQuizUnlocked() && state.dailyQuiz?.questions?.length && !isDailyQuizComplete() && !isDailyQuizCooldownActive());
}

function isDailyQuizComplete() {
  return Boolean(state.dailyQuiz?.completedAt);
}

function isDailyQuizAvailable() {
  return isDailyQuizUnlocked() && !isDailyQuizCooldownActive();
}

function isDailyQuizUnlocked() {
  const unlockAt = getDailyQuizUnlockAt();
  return Boolean(unlockAt && Date.now() >= unlockAt);
}

function getDailyQuizUnlockAt() {
  const createdAt = Date.parse(state.authUser?.createdAt || "");
  return Number.isFinite(createdAt) ? createdAt + dailyQuizOnboardingMs : 0;
}

function isDailyQuizCooldownActive(quiz = state.dailyQuiz) {
  const completedAt = Date.parse(quiz?.completedAt || "");
  if (!Number.isFinite(completedAt)) return false;
  return Date.now() - completedAt < dailyQuizCooldownMs;
}

function getNextDailyQuizAt(quiz = state.dailyQuiz) {
  const completedAt = Date.parse(quiz?.completedAt || "");
  return Number.isFinite(completedAt) ? completedAt + dailyQuizCooldownMs : 0;
}

function redirectFromQuizCooldown() {
  const nextQuizAt = getNextDailyQuizAt();
  state.view = "catalog";
  state.notice = nextQuizAt
    ? `Today's quiz is complete. Next quiz opens in ${formatDuration(nextQuizAt - Date.now())}.`
    : "Today's quiz is complete.";
  updateRoute();
  render();
}

function redirectFromQuizOnboarding() {
  state.view = "catalog";
  state.notice = "";
  updateRoute();
  render();
}

function forceDailyQuiz(message) {
  state.notice = message;
  state.view = "quiz";
  updateRoute();
  render();
}

function getAnsweredQuizCount(quiz = state.dailyQuiz) {
  return quiz?.questions?.filter((question) => question.selectedKey).length || 0;
}

function getDailyQuizScore(quiz = state.dailyQuiz) {
  return quiz?.questions?.filter((question) => question.selectedKey === question.correctKey).length || 0;
}

function getDailyQuizElapsedMs(quiz = state.dailyQuiz) {
  if (!quiz?.startedAt) return 0;
  if (quiz.completedAt && quiz.elapsedMs) return quiz.elapsedMs;
  return Math.max(0, Date.now() - Date.parse(quiz.startedAt));
}

function formatDuration(ms) {
  const totalSeconds = Math.max(0, Math.round(ms / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  if (days) return `${days}d ${String(hours).padStart(2, "0")}h`;
  if (hours) return `${hours}h ${String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0")}m`;
  return minutes ? `${minutes}m ${String(seconds).padStart(2, "0")}s` : `${seconds}s`;
}

function getTodayKey() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function loadDailyQuizLocal() {
  try {
    const currentQuiz = getLocalDailyQuizForUser(state.userId);
    if (isDailyQuizCooldownActive(currentQuiz)) return currentQuiz;

    const anonymousId = window.localStorage.getItem("algo-explained:anonymous-user-id");
    if (state.authUser && anonymousId && anonymousId !== state.userId) {
      const anonymousQuiz = getLocalDailyQuizForUser(anonymousId);
      if (isDailyQuizCooldownActive(anonymousQuiz)) return anonymousQuiz;
    }

    return currentQuiz || null;
  } catch {
    return null;
  }
}

function getLocalDailyQuizForUser(userId) {
  if (!userId) return null;
  try {
    const quizzes = JSON.parse(window.localStorage.getItem(`algo-explained:daily-quizzes:${userId}`) || "{}");
    const todaysQuiz = quizzes?.[state.quizDate] ? normalizeClientQuiz(quizzes[state.quizDate]) : null;
    if (todaysQuiz) return todaysQuiz;
    return Object.values(quizzes || {})
      .map((quiz) => normalizeClientQuiz(quiz))
      .filter((quiz) => quiz.completedAt)
      .sort((a, b) => Date.parse(b.completedAt) - Date.parse(a.completedAt))[0] || null;
  } catch {
    return null;
  }
}

function persistDailyQuizLocal(quiz = state.dailyQuiz) {
  if (!quiz) return false;
  try {
    const key = `algo-explained:daily-quizzes:${state.userId}`;
    const quizzes = JSON.parse(window.localStorage.getItem(key) || "{}");
    quizzes[quiz.date || state.quizDate] = quiz;
    window.localStorage.setItem(key, JSON.stringify(quizzes));
    return true;
  } catch {
    return false;
  }
}

async function syncDailyQuiz(options = {}) {
  if (!state.dailyQuiz) return false;

  try {
    state.backendStatus = "syncing";
    if (!options.silent) render();
    const response = await fetch("/api/daily-quiz", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        userId: state.userId,
        date: state.dailyQuiz.date || state.quizDate,
        quiz: state.dailyQuiz,
      }),
    });
    if (!response.ok) throw new Error("Daily quiz sync failed");
    const data = await response.json();
    if (data.quiz) {
      state.dailyQuiz = normalizeClientQuiz(data.quiz);
      persistDailyQuizLocal();
    }
    state.backendStatus = "synced";
    if (!options.silent) render();
    return true;
  } catch {
    state.backendStatus = "local";
    if (!options.silent) render();
    return false;
  }
}

async function handleAuthSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const type = form.dataset.authForm;

  state.authMessage = "";
  state.authMessageType = "error";
  render();

  if (type === "signup") {
    await authenticate("/api/auth/signup", {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    });
    return;
  }

  if (type === "login") {
    await authenticate("/api/auth/login", {
      email: formData.get("email"),
      password: formData.get("password"),
    });
    return;
  }

  if (type === "profile") {
    await updateAuthProfile({
      name: formData.get("name"),
      email: formData.get("email"),
    });
    return;
  }

  state.authMessage = "Unsupported account form.";
  state.authMessageType = "error";
  render();
}

async function authenticate(endpoint, payload) {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Authentication failed");
    await applyAuthSession(data);
  } catch (error) {
    state.authMessage = error.message || "Authentication failed";
    state.authMessageType = "error";
    render();
  }
}

async function refreshAuthSession() {
  if (!state.sessionToken) return false;
  try {
    const response = await fetch(`/api/auth/me?sessionToken=${encodeURIComponent(state.sessionToken)}`, { cache: "no-store" });
    if (!response.ok) throw new Error("Session expired");
    const data = await response.json();
    if (!data.user?.userId) throw new Error("Invalid session");

    state.authUser = data.user;
    state.userId = data.user.userId;
    persistAuthSession();
    persistUserId(state.userId);
    return true;
  } catch {
    return false;
  }
}

async function updateAuthProfile(payload) {
  try {
    const response = await fetch("/api/auth/profile", {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        ...payload,
        sessionToken: state.sessionToken,
      }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Profile update failed");

    state.authUser = data.user;
    state.authMessage = "Profile updated.";
    state.authMessageType = "success";
    persistAuthSession();
    render();
  } catch (error) {
    state.authMessage = error.message || "Profile update failed";
    state.authMessageType = "error";
    render();
  }
}

async function applyAuthSession(data) {
  const pendingSavedIds = new Set(state.savedIds);
  const pendingProgress = { ...state.progress };
  const pendingRecentIds = [...state.recentIds];
  state.authUser = data.user;
  state.sessionToken = data.sessionToken;
  state.userId = data.user.userId;
  state.savedIds = new Set([...loadSavedIds(state.userId), ...pendingSavedIds]);
  state.progress = { ...loadProgress(state.userId), ...pendingProgress };
  state.recentIds = [...new Set([...pendingRecentIds, ...loadRecentIds(state.userId)])].slice(0, 12);
  persistAuthSession();
  persistUserId(state.userId);
  persistSavedIds();
  persistProgress();
  persistRecentIds();
  state.dailyQuiz = null;
  dailyQuizPromise = null;
  await syncUserProgress({ silent: true });
  await loadUserProgress();
  await initializeDailyQuiz();
  state.notice = `Signed in as ${data.user.name || data.user.email}.`;
  state.view = "profile";
  updateRoute();
  render();
}

async function logoutUser() {
  const previousToken = state.sessionToken;
  clearAuthSession();
  state.authUser = null;
  state.sessionToken = "";
  state.userId = loadUserId({ forceAnonymous: true });
  state.savedIds = loadSavedIds(state.userId);
  state.progress = loadProgress(state.userId);
  state.recentIds = loadRecentIds(state.userId);
  state.dailyQuiz = null;
  dailyQuizPromise = null;
  try {
    if (previousToken) {
      await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ sessionToken: previousToken }),
      });
    }
  } catch {
    // Local logout still succeeds when the backend is unavailable.
  }
  await loadUserProgress();
  state.notice = "Signed out.";
  render();
}

async function saveCurrentAlgorithm() {
  if (!state.authUser) {
    showSignIn();
    return;
  }

  const selected = getSelectedAlgorithm();
  if (!selected) return;

  const wasSaved = state.savedIds.has(selected.id);
  state.savedIds.add(selected.id);
  const saved = persistSavedIds();
  if (!saved && !wasSaved) state.savedIds.delete(selected.id);
  if (saved) await syncUserProgress({ silent: true });
  state.notice = saved
    ? wasSaved
      ? `${selected.title || selected.name} is already saved.`
      : `${selected.title || selected.name} saved to your progress.`
    : "Browser storage is unavailable, so this item could not be saved.";
  render();
  window.clearTimeout(saveCurrentAlgorithm.noticeTimer);
  saveCurrentAlgorithm.noticeTimer = window.setTimeout(() => {
    state.notice = "";
    render();
  }, 2200);
}

function toggleProgress(section) {
  const selected = getSelectedAlgorithm();
  if (!selected) return;

  const progress = getAlgorithmProgress(selected.id);
  progress[section] = !progress[section];
  progress.updatedAt = new Date().toISOString();
  state.progress[selected.id] = progress;
  markAlgorithmRecent(selected.id, { sync: false });
  persistProgress();
  render();
  syncProgressSection(selected.id, section, progress[section]);
}

function showSignIn() {
  state.view = "profile";
  state.authMode = "login";
  state.authMessage = "";
  state.authMessageType = "error";
  updateRoute();
  render();
}

function getAlgorithmProgress(id) {
  state.progress[id] ||= {};
  return state.progress[id];
}

function getCompletedCount(id) {
  const progress = state.progress[id] || {};
  return ["lesson", "visualizer", "challenge"].filter((section) => progress[section]).length;
}

function loadUserId(options = {}) {
  try {
    const key = options.forceAnonymous ? "algo-explained:anonymous-user-id" : "algo-explained:user-id";
    const existing = window.localStorage.getItem(key);
    if (existing) return existing;
    const next = `user_${window.crypto?.randomUUID ? window.crypto.randomUUID() : Date.now().toString(36)}`;
    window.localStorage.setItem(key, next);
    return next;
  } catch {
    return "anonymous";
  }
}

function persistUserId(userId) {
  try {
    window.localStorage.setItem("algo-explained:user-id", userId);
    return true;
  } catch {
    return false;
  }
}

function loadAuthUser() {
  try {
    const user = JSON.parse(window.localStorage.getItem("algo-explained:auth-user") || "null");
    return user && typeof user === "object" ? user : null;
  } catch {
    return null;
  }
}

function loadSessionToken() {
  try {
    return window.localStorage.getItem("algo-explained:session-token") || "";
  } catch {
    return "";
  }
}

function loadLanguage() {
  try {
    const saved = window.localStorage.getItem("algo-explained:language") || "en";
    return supportedLanguages.some((language) => language.code === saved) ? saved : "en";
  } catch {
    return "en";
  }
}

function persistLanguage(language) {
  try {
    window.localStorage.setItem("algo-explained:language", language);
  } catch {
    // Language selection still applies for the current session.
  }
}

async function loadLocale(language = state.language) {
  if (localeDictionaries.has(language)) return localeDictionaries.get(language);

  const response = await fetch(`./src/i18n/${language}.json`, { cache: "no-store" });
  if (!response.ok) throw new Error(`Could not load locale ${language}`);
  const dictionary = await response.json();
  localeDictionaries.set(language, dictionary);
  return dictionary;
}

async function loadActiveLocale() {
  await loadLocale("en");
  if (state.language !== "en") {
    try {
      await loadLocale(state.language);
    } catch {
      state.language = "en";
      persistLanguage("en");
    }
  }
  applyDocumentLanguage();
}

async function setLanguage(language) {
  if (!supportedLanguages.some((item) => item.code === language)) return;
  state.language = language;
  persistLanguage(language);
  await loadActiveLocale();
  loadedPages.clear();
  activePageId = "";
  if (routeViews.has(state.view) && pageLoaders[state.selectedId]) {
    await loadAlgorithmPage(state.selectedId);
    return;
  }
  render();
}

function applyDocumentLanguage() {
  const language = supportedLanguages.find((item) => item.code === state.language) || supportedLanguages[0];
  document.documentElement.lang = language.code;
  document.documentElement.dir = language.dir;
}

function t(key, params = {}) {
  const value = getLocaleValue(state.language, key) ?? getLocaleValue("en", key) ?? key;
  if (typeof value !== "string") return key;
  return value.replace(/\{(\w+)\}/g, (_, name) => params[name] ?? "");
}

function getLocaleValue(language, key) {
  const dictionary = localeDictionaries.get(language);
  if (!dictionary) return undefined;
  return key.split(".").reduce((value, part) => value?.[part], dictionary);
}

function localizeAlgorithmPage(pageData) {
  const localized = getLocaleValue(state.language, `algorithmPages.${pageData.id}`)
    || getLocaleValue("en", `algorithmPages.${pageData.id}`);
  return localized ? deepMerge(pageData, localized) : pageData;
}

function deepMerge(base, override) {
  if (Array.isArray(base) && Array.isArray(override)) {
    return base.map((item, index) => deepMerge(item, override[index] || {}));
  }
  if (base && typeof base === "object" && override && typeof override === "object" && !Array.isArray(override)) {
    return Object.fromEntries(
      Object.keys({ ...base, ...override }).map((key) => [key, deepMerge(base[key], override[key])]),
    );
  }
  return override === undefined ? base : override;
}

function persistAuthSession() {
  try {
    if (state.authUser) window.localStorage.setItem("algo-explained:auth-user", JSON.stringify(state.authUser));
    if (state.sessionToken) window.localStorage.setItem("algo-explained:session-token", state.sessionToken);
    return true;
  } catch {
    return false;
  }
}

function clearAuthSession() {
  try {
    window.localStorage.removeItem("algo-explained:auth-user");
    window.localStorage.removeItem("algo-explained:session-token");
    window.localStorage.setItem("algo-explained:user-id", loadUserId({ forceAnonymous: true }));
  } catch {
    // Browser storage may be unavailable.
  }
}

function scopedStorageKey(name, userId = state?.userId || initialUserId) {
  return `algo-explained:${name}:${userId || "anonymous"}`;
}

function loadSavedIds(userId = state?.userId || initialUserId) {
  try {
    const value = window.localStorage.getItem(scopedStorageKey("saved-algorithms", userId))
      || window.localStorage.getItem("algo-explained:saved-algorithms");
    const ids = JSON.parse(value || "[]");
    return new Set(Array.isArray(ids) ? ids : []);
  } catch {
    return new Set();
  }
}

function loadProgress(userId = state?.userId || initialUserId) {
  try {
    const value = window.localStorage.getItem(scopedStorageKey("progress", userId))
      || window.localStorage.getItem("algo-explained:progress");
    const progress = JSON.parse(value || "{}");
    return progress && typeof progress === "object" ? progress : {};
  } catch {
    return {};
  }
}

function loadRecentIds(userId = state?.userId || initialUserId) {
  try {
    const value = window.localStorage.getItem(scopedStorageKey("recent-algorithms", userId))
      || window.localStorage.getItem("algo-explained:recent-algorithms");
    const ids = JSON.parse(value || "[]");
    return Array.isArray(ids) ? ids : [];
  } catch {
    return [];
  }
}

function persistSavedIds() {
  try {
    window.localStorage.setItem(scopedStorageKey("saved-algorithms"), JSON.stringify([...state.savedIds]));
    return true;
  } catch {
    return false;
  }
}

function persistProgress() {
  try {
    window.localStorage.setItem(scopedStorageKey("progress"), JSON.stringify(state.progress));
    return true;
  } catch {
    return false;
  }
}

function persistRecentIds() {
  try {
    window.localStorage.setItem(scopedStorageKey("recent-algorithms"), JSON.stringify(state.recentIds));
    return true;
  } catch {
    return false;
  }
}

function markAlgorithmRecent(id, options = {}) {
  if (!id) return;
  state.recentIds = [id, ...state.recentIds.filter((recentId) => recentId !== id)].slice(0, 12);
  persistRecentIds();
  if (options.sync !== false) syncUserProgress({ silent: true });
}

async function loadUserProgress() {
  try {
    state.backendStatus = "syncing";
    const response = await fetch(`/api/progress?userId=${encodeURIComponent(state.userId)}`, { cache: "no-store" });
    if (!response.ok) throw new Error("Progress API unavailable");
    const data = await response.json();
    applyProgressPayload(data);
    state.backendStatus = "synced";
    render();
  } catch {
    state.backendStatus = "local";
  }
}

function applyProgressPayload(data) {
  if (Array.isArray(data.savedAlgorithmIds)) {
    state.savedIds = new Set([...state.savedIds, ...data.savedAlgorithmIds]);
    persistSavedIds();
  }
  if (Array.isArray(data.recentAlgorithmIds)) {
    state.recentIds = [...new Set([...state.recentIds, ...data.recentAlgorithmIds])].slice(0, 12);
    persistRecentIds();
  }
  if (data.progress && typeof data.progress === "object") {
    state.progress = { ...state.progress, ...data.progress };
    persistProgress();
  }
}

async function syncUserProgress(options = {}) {
  try {
    state.backendStatus = "syncing";
    if (!options.silent) render();
    const response = await fetch("/api/progress", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        userId: state.userId,
        savedAlgorithmIds: [...state.savedIds],
        recentAlgorithmIds: state.recentIds,
        progress: state.progress,
      }),
    });
    if (!response.ok) throw new Error("Progress sync failed");
    applyProgressPayload(await response.json());
    state.backendStatus = "synced";
    render();
    return true;
  } catch {
    state.backendStatus = "local";
    render();
    return false;
  }
}

async function syncProgressSection(algorithmId, section, completed) {
  try {
    state.backendStatus = "syncing";
    const response = await fetch("/api/progress", {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        userId: state.userId,
        algorithmId,
        section,
        completed,
      }),
    });
    if (!response.ok) throw new Error("Progress sync failed");
    applyProgressPayload(await response.json());
    state.backendStatus = "synced";
  } catch {
    state.backendStatus = "local";
  } finally {
    render();
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
  if (category.includes("data structure")) return "schema";
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
    algorithmDataRecords.clear();
    smartSearchPromise = null;

    const routeState = getRouteFromHash();
    if (["quiz", "profile"].includes(routeState?.view)) {
      state.view = routeState.view;
    }

    await initializeDailyQuiz();

    if (routeState?.view === "quiz" && !isDailyQuizUnlocked()) {
      redirectFromQuizOnboarding();
      return;
    }

    if (routeState?.view === "quiz" && isDailyQuizCooldownActive()) {
      redirectFromQuizCooldown();
      return;
    }

    if (!["quiz", "profile"].includes(routeState?.view) && isDailyQuizRequired()) {
      forceDailyQuiz("Complete today's quiz before opening another page.");
      return;
    }

    if (routeState?.view === "search") {
      state.view = "search";
      ensureSmartSearchIndex();
      render();
      return;
    }
    if (routeState?.view === "saved") {
      if (!state.authUser) {
        showSignIn();
        return;
      }
      state.view = "saved";
      render();
      return;
    }

    if (routeState?.view === "quiz") {
      state.view = "quiz";
      render();
      return;
    }

    if (routeState?.view === "profile") {
      state.view = "profile";
      render();
      return;
    }

    if (routeState) {
      setActivePage(routeState.id);
      state.selectedId = routeState.id;
      markAlgorithmRecent(routeState.id);
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
  if (routeState?.view === "quiz" && !isDailyQuizUnlocked()) {
    redirectFromQuizOnboarding();
    return;
  }

  if (routeState?.view === "quiz" && isDailyQuizCooldownActive()) {
    redirectFromQuizCooldown();
    return;
  }

  if (!["quiz", "profile"].includes(routeState?.view) && isDailyQuizRequired()) {
    forceDailyQuiz("Complete today's quiz before opening another page.");
    return;
  }

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

  if (routeState.view === "quiz") {
    state.view = "quiz";
    await initializeDailyQuiz();
    render();
    return;
  }

  if (routeState.view === "saved") {
    if (!state.authUser) {
      showSignIn();
      return;
    }
    state.view = "saved";
    render();
    return;
  }

  if (routeState.view === "profile") {
    state.view = "profile";
    render();
    return;
  }

  setActivePage(routeState.id);
  state.selectedId = routeState.id;
  markAlgorithmRecent(routeState.id);
  state.view = routeState.view;
  await loadAlgorithmPage(routeState.id, { scrollToWorkspace: true });
});

root.addEventListener("click", handleShellClick);

async function bootstrap() {
  await loadActiveLocale();
  render();
  await refreshAuthSession();
  await loadUserProgress();
  await loadAlgorithmIndex();
}

bootstrap();
