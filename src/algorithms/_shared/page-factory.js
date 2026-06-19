export function createGenericAlgorithmPage(deps, algorithmPage) {
  const { icon, escapeHtml, requestRender } = deps;
  const t = deps.t || ((key) => key);
  algorithmPage = deps.localizeAlgorithmPage?.(algorithmPage) || algorithmPage;

  const state = {
    codeLines: [],
    codeLoaded: false,
    loadingCode: false,
    selectedAnswer: "",
    step: 0,
  };

  function render(view) {
    if (view === "visualizer") return renderVisualizer();
    if (view === "challenge") return renderChallenge();
    return renderLesson();
  }

  function bind(root) {
    loadCode();

    root.querySelectorAll(".workspace [data-action]").forEach((button) => {
      button.addEventListener("click", () => handleAction(button.dataset.action));
    });

    root.querySelectorAll("[data-answer]").forEach((button) => {
      button.addEventListener("click", () => {
        state.selectedAnswer = button.dataset.answer;
        requestRender();
      });
    });
  }

  function cleanup() {}

  function onViewChange() {}

  function renderLesson() {
    return `
      <section class="algorithm-page lesson-panel" aria-labelledby="lesson-title">
        <p class="eyebrow">${escapeHtml(algorithmPage.category)}</p>
        <h2 id="lesson-title">${escapeHtml(algorithmPage.title)}</h2>
        <p class="lede">${escapeHtml(algorithmPage.meaning)}</p>
        <div class="algorithm-hero" data-visualizer="${escapeHtml(algorithmPage.visualizerType)}">
          <div class="hero-symbol" aria-hidden="true">${icon(algorithmPage.icon)}</div>
          <div>
            <strong>${escapeHtml(algorithmPage.problem)}</strong>
            <p>${escapeHtml(algorithmPage.realLifeExample)}</p>
          </div>
        </div>
        <div class="logic-list">
          <h3>${icon("analytics")} ${escapeHtml(t("algorithmPage.stepByStepLogic"))}</h3>
          ${algorithmPage.logicSteps.map((step, index) => `
            <div class="logic-step">
              <span>${index + 1}</span>
              <div><strong>${escapeHtml(step.title)}</strong><p>${escapeHtml(step.text)}</p></div>
            </div>
          `).join("")}
        </div>
        <div class="info-grid">
          <article>
            <h3>${icon("rule")} ${escapeHtml(t("algorithmPage.whenToUse"))}</h3>
            <p>${escapeHtml(algorithmPage.whenToUse)}</p>
          </article>
          <article>
            <h3>${icon("psychology")} ${escapeHtml(t("algorithmPage.memoryTrick"))}</h3>
            <p>${escapeHtml(algorithmPage.memoryTrick)}</p>
          </article>
        </div>
        <button class="primary-action" data-view="visualizer">${escapeHtml(t("algorithmPage.startVisualizer"))} ${icon("arrow_forward")}</button>
      </section>
    `;
  }

  function renderVisualizer() {
    const current = algorithmPage.dryRun[state.step];
    return `
      <section class="algorithm-page visualizer-panel" data-algorithm-page="${escapeHtml(algorithmPage.id)}" data-visualizer="${escapeHtml(algorithmPage.visualizerType)}" aria-labelledby="visualizer-title">
        <div class="title-row">
          <div>
            <p class="eyebrow">${escapeHtml(t("algorithmPage.algorithmVisualizer"))}</p>
            <h2 id="visualizer-title">${escapeHtml(algorithmPage.title)}</h2>
            <p>${escapeHtml(algorithmPage.visualizerCaption)}</p>
          </div>
          <span class="step-pill">${escapeHtml(t("algorithmPage.stepCounter", { current: state.step + 1, total: algorithmPage.dryRun.length }))}</span>
        </div>
        <div class="concept-loop-grid">
          <article>
            <strong>${icon("psychology")} ${escapeHtml(t("algorithmPage.concept"))}</strong>
            <p>${escapeHtml(algorithmPage.concept || algorithmPage.problem)}</p>
          </article>
          <article>
            <strong>${icon("account_tree")} ${escapeHtml(t("algorithmPage.logic"))}</strong>
            <p>${escapeHtml(algorithmPage.logicSummary || current.note)}</p>
          </article>
          <article>
            <strong>${icon("repeat")} ${escapeHtml(t("algorithmPage.loopTransition"))}</strong>
            <p>${escapeHtml(algorithmPage.transitionSummary || getTransitionSummary(current))}</p>
          </article>
        </div>
        <div class="dry-run-stage" aria-label="${escapeHtml(`${algorithmPage.title} ${t("algorithmPage.dryRun")}`)}">
          ${algorithmPage.dryRun.map((step, index) => `
            <div class="dry-run-node ${index === state.step ? "active" : ""} ${index < state.step ? "complete" : ""}">
              <b>${index + 1}</b>
              <span>${escapeHtml(step.label)}</span>
            </div>
          `).join("")}
        </div>
        <div class="trace-layout">
          ${renderCodeTrace(current.activeLine)}
          <aside class="explanation-bubble">
            ${icon("tips_and_updates")}
            <strong>${escapeHtml(t("algorithmPage.codeInsight"))}</strong>
            <p>${escapeHtml(algorithmPage.codeInsight || current.note)}</p>
          </aside>
        </div>
        <div class="control-deck" aria-label="${escapeHtml(t("algorithmPage.visualizerControls"))}">
          <button data-action="prev" aria-label="${escapeHtml(t("algorithmPage.previousStep"))}">${icon("skip_previous")}</button>
          <button class="play-button" data-action="next" aria-label="${escapeHtml(t("algorithmPage.nextStep"))}">${icon("skip_next")}</button>
          <button data-action="reset" aria-label="${escapeHtml(t("algorithmPage.resetVisualizer"))}">${icon("replay")}</button>
        </div>
        <div class="variable-grid">
          ${algorithmPage.variables.map((variable) => `
            <article>
              <strong>${escapeHtml(variable.name)}</strong>
              <p>${escapeHtml(variable.purpose)}</p>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderCodeTrace(activeLine) {
    const codeLines = state.codeLines.length ? state.codeLines : [`// ${t("algorithmPage.loadingImplementation", { title: algorithmPage.title })}`];
    return `
      <div class="code-trace" aria-label="${escapeHtml(`${algorithmPage.title} ${t("algorithmPage.codeTrace")}`)}">
        <div class="code-header">
          <span>${escapeHtml(algorithmPage.codeFilename)}</span>
          <span class="window-dots"><i></i><i></i><i></i></span>
        </div>
        <pre>${codeLines.map((line, index) => `<code class="${index + 1 === activeLine ? "active-line" : ""}"><span>${index + 1}</span>${escapeHtml(line)}</code>`).join("")}</pre>
      </div>
    `;
  }

  function getTransitionSummary(current) {
    const variableNames = algorithmPage.variables.map((variable) => variable.name).join(", ");
    return t("algorithmPage.transitionSummaryFallback", {
      title: current.title,
      variables: variableNames || t("algorithmPage.stateFallback"),
      visualizer: algorithmPage.visualizerType.replaceAll("-", " "),
    });
  }

  function renderChallenge() {
    const selected = algorithmPage.quiz.options.find((option) => option.key === state.selectedAnswer);
    return `
      <section class="algorithm-page challenge-panel" aria-labelledby="challenge-title">
        <div class="title-row">
          <div>
            <p class="eyebrow">${escapeHtml(t("algorithmPage.miniQuiz"))}</p>
            <h2 id="challenge-title">${escapeHtml(algorithmPage.title)}</h2>
            <p>${escapeHtml(algorithmPage.quiz.question)}</p>
          </div>
          <span class="step-pill purple">${icon("quiz")} ${escapeHtml(t("algorithmPage.practice"))}</span>
        </div>
        <div class="answer-list">
          ${algorithmPage.quiz.options.map((option) => `
            <button class="answer ${state.selectedAnswer === option.key ? "selected" : ""}" data-answer="${escapeHtml(option.key)}">
              <span>${escapeHtml(option.key)}</span>${escapeHtml(option.text)}
            </button>
          `).join("")}
        </div>
        ${selected ? renderChallengeResult(selected) : ""}
        <div class="complexity-grid">
          <article><strong>${escapeHtml(t("algorithmPage.time"))}</strong><p>${escapeHtml(algorithmPage.complexity.time)}</p></article>
          <article><strong>${escapeHtml(t("algorithmPage.space"))}</strong><p>${escapeHtml(algorithmPage.complexity.space)}</p></article>
        </div>
      </section>
    `;
  }

  function renderChallengeResult(selected) {
    return `
      <p class="result ${selected.correct ? "correct" : "incorrect"}">
        ${escapeHtml(selected.correct ? algorithmPage.quiz.correctText : algorithmPage.quiz.incorrectText)}
      </p>
    `;
  }

  function handleAction(action) {
    if (action === "prev") state.step = Math.max(0, state.step - 1);
    if (action === "next") state.step = Math.min(algorithmPage.dryRun.length - 1, state.step + 1);
    if (action === "reset") state.step = 0;
    requestRender();
  }

  async function loadCode() {
    if (state.codeLoaded || state.loadingCode || !algorithmPage.codePath) return;
    state.loadingCode = true;

    try {
      const response = await fetch(algorithmPage.codePath, { cache: "no-store" });
      if (response.ok) {
        const source = await response.text();
        state.codeLines = source.trimEnd().split("\n");
      }
    } finally {
      state.codeLoaded = true;
      state.loadingCode = false;
      requestRender();
    }
  }

  return {
    bind,
    cleanup,
    onViewChange,
    render,
  };
}
