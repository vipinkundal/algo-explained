const CODE_RUN_TIMEOUT_MS = 2000;

const RUNNER_WORKER_SOURCE = `
function formatValue(value) {
  if (typeof value === "string") return value;
  if (typeof value === "undefined") return "undefined";
  if (typeof value === "function") return "[Function " + (value.name || "anonymous") + "]";
  try {
    const json = JSON.stringify(value, null, 2);
    return json === undefined ? String(value) : json;
  } catch {
    return String(value);
  }
}

function collectExports(source) {
  const names = [];
  const addName = (name) => {
    if (name && !names.includes(name)) names.push(name);
    return name;
  };
  let transformed = source;

  transformed = transformed.replace(/export\\s+default\\s+async\\s+function\\s+([A-Za-z_$][\\w$]*)/g, (_, name) => {
    addName(name);
    return "async function " + name;
  });
  transformed = transformed.replace(/export\\s+default\\s+function\\s+([A-Za-z_$][\\w$]*)/g, (_, name) => {
    addName(name);
    return "function " + name;
  });
  transformed = transformed.replace(/export\\s+async\\s+function\\s+([A-Za-z_$][\\w$]*)/g, (_, name) => {
    addName(name);
    return "async function " + name;
  });
  transformed = transformed.replace(/export\\s+function\\s+([A-Za-z_$][\\w$]*)/g, (_, name) => {
    addName(name);
    return "function " + name;
  });
  transformed = transformed.replace(/export\\s+(const|let|var)\\s+([A-Za-z_$][\\w$]*)\\s*=/g, (_, kind, name) => {
    addName(name);
    return kind + " " + name + " =";
  });
  transformed = transformed.replace(/export\\s+default\\s+/g, () => {
    addName("__defaultExport");
    return "const __defaultExport = ";
  });
  transformed = transformed.replace(/export\\s*\\{([^}]+)\\};?/g, (_, list) => {
    list.split(",").forEach((part) => {
      addName(part.trim().split(/\\s+as\\s+/i)[0].trim());
    });
    return "";
  });

  return { transformed, names };
}

function splitParameters(parameterSource) {
  const parameters = [];
  let current = "";
  let depth = 0;
  let quote = "";

  for (const character of parameterSource) {
    if (quote) {
      current += character;
      if (character === quote) quote = "";
      continue;
    }
    if (character === "\\"" || character === "'" || character === "\`") {
      quote = character;
      current += character;
      continue;
    }
    if ("([{".includes(character)) depth += 1;
    if (")]}".includes(character)) depth -= 1;
    if (character === "," && depth === 0) {
      parameters.push(current.trim());
      current = "";
      continue;
    }
    current += character;
  }

  if (current.trim()) parameters.push(current.trim());
  return parameters;
}

function getFunctionParameters(source, functionName) {
  const match = source.match(new RegExp("(?:export\\\\s+)?(?:async\\\\s+)?function\\\\s+" + functionName + "\\\\s*\\\\(([^)]*)\\\\)"));
  if (!match) return [];
  return splitParameters(match[1]).map((parameter) => parameter.replace(/=.*/, "").trim()).filter(Boolean);
}

function sampleValueForParameter(parameter) {
  const name = String(parameter || "").toLowerCase();
  if (["array", "arr", "nums", "numbers"].includes(name)) return [1, 2, 3, 4, 5];
  if (["sortedarray"].includes(name)) return [1, 2, 3, 4, 5, 8, 13];
  if (["values"].includes(name)) return [4, 1, 2, 1, 3, 2, 5];
  if (["prices"].includes(name)) return [100, 80, 60, 70, 60, 75, 85];
  if (["heights"].includes(name)) return [2, 1, 5, 6, 2, 3];
  if (["choices"].includes(name)) return [1, 2, 3];
  if (["target", "key"].includes(name)) return 3;
  if (name === "value") return 12;
  if (name === "other") return 8;
  if (name === "k") return 2;
  if (name === "n") return 5;
  if (name === "size") return 5;
  if (name === "length") return 5;
  if (name === "capacity") return 3;
  if (name === "amount") return 7;
  if (name === "low") return -5;
  if (name === "high") return 5;
  if (name === "precision") return 0.001;
  if (name === "initial") return 0;
  if (name === "windowsize") return 3;
  if (name === "bucketcount") return 3;
  if (name === "coins") return [1, 3, 4];
  if (name === "weights") return [2, 3, 4];
  if (name === "dimensions") return [10, 20, 30, 40];
  if (name === "lists") return [[1, 4, 5], [1, 3, 4], [2, 6]];
  if (name === "updates") return [[0, 2, 3], [1, 4, 2]];
  if (name === "vertices") return ["A", "B", "C", "D"];
  if (name === "vertexcount") return 4;
  if (name === "edges") return [["A", "B", 1], ["B", "C", 2], ["A", "C", 4], [0, 1, 1], [1, 2, 2], [2, 3, 1]];
  if (name === "graph") return {
    A: ["B", "C"],
    B: ["D"],
    C: ["D"],
    D: [],
  };
  if (name === "start") return "A";
  if (name === "matrix" || name === "grid" || name === "board") return [
    [1, 1, 0],
    [0, 1, 0],
    [1, 0, 1],
  ];
  if (name === "root" || name === "node") return {
    value: 4,
    left: { value: 2, left: { value: 1 }, right: { value: 3 } },
    right: { value: 6, left: { value: 5 }, right: { value: 7 } },
  };
  if (name === "text" || name === "str" || name === "word" || name === "s" || name === "a") return "abracadabra";
  if (name === "pattern" || name === "b") return "abra";
  if (name === "input") return [1, 2, 3, 2, 1];
  if (name === "operations") return [
    ["push", 1],
    ["push", 2],
    ["peek"],
    ["pop"],
    ["get", 1],
    ["put", 1, 10],
  ];
  if (name === "evaluate") return (x) => -(x - 2) * (x - 2) + 4;
  return undefined;
}

function inferRunInput(source, functionName) {
  return getFunctionParameters(source, functionName).map(sampleValueForParameter);
}

self.onmessage = async (event) => {
  const logs = [];
  const consoleProxy = {};
  ["log", "info", "warn", "error"].forEach((level) => {
    consoleProxy[level] = (...args) => logs.push(args.map(formatValue).join(" "));
  });

  try {
    const source = event.data && event.data.source ? event.data.source : "";
    const runInput = Array.isArray(event.data && event.data.runInput) ? event.data.runInput : [];
    const collected = collectExports(source);
    const exportMap = collected.names
      .map((name) => name + ": typeof " + name + " === \\"undefined\\" ? undefined : " + name)
      .join(",");
    const factory = new Function("console", collected.transformed + "\\nreturn { " + exportMap + " };");
    const moduleExports = factory(consoleProxy);
    const callableName = collected.names.find((name) => typeof moduleExports[name] === "function");

    if (!callableName) {
      self.postMessage({ ok: true, logs, returned: false, result: "" });
      return;
    }

    const input = runInput.length ? runInput : inferRunInput(source, callableName);
    const result = await moduleExports[callableName](...input);
    self.postMessage({ ok: true, logs, returned: true, result: formatValue(result) });
  } catch (error) {
    self.postMessage({
      ok: false,
      message: error && error.message ? error.message : String(error),
    });
  }
};
`;

export function createGenericAlgorithmPage(deps, algorithmPage) {
  const { icon, escapeHtml, requestRender } = deps;
  const t = deps.t || ((key) => key);
  algorithmPage = deps.localizeAlgorithmPage?.(algorithmPage) || algorithmPage;

  const state = {
    codeSource: "",
    codeDirty: false,
    codeLoaded: false,
    originalCodeSource: "",
    originalCodeLoaded: false,
    loadingOriginalCode: false,
    activeCodeTab: "js",
    loadingCode: false,
    codeOutput: "",
    codeOutputKind: "idle",
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

    root.querySelectorAll("[data-code-tab]").forEach((button) => {
      button.addEventListener("click", () => {
        state.activeCodeTab = button.dataset.codeTab === "original" ? "original" : "js";
        requestRender();
      });
    });

    root.querySelectorAll("[data-answer]").forEach((button) => {
      button.addEventListener("click", () => {
        state.selectedAnswer = button.dataset.answer;
        requestRender();
      });
    });

    const codeEditor = root.querySelector("[data-code-editor]");
    if (codeEditor) {
      codeEditor.addEventListener("input", () => {
        state.codeSource = codeEditor.value;
        state.codeDirty = true;
      });
    }
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
        ${renderRelatedLinks()}
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
            <p>${escapeHtml(getCodeInsight(current))}</p>
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
        ${renderRelatedLinks()}
      </section>
    `;
  }

  function renderRelatedLinks() {
    const links = Array.isArray(algorithmPage.relatedLinks) ? algorithmPage.relatedLinks : [];
    if (!links.length) return "";

    return `
      <section class="related-links" aria-label="Related lessons">
        <strong>${icon("link")} Related lessons</strong>
        <div>
          ${links.map((link) => `
            <button type="button" data-algorithm="${escapeHtml(link.id)}">
              <span>${escapeHtml(link.title || link.id)}</span>
              ${link.label ? `<em>${escapeHtml(link.label)}</em>` : ""}
            </button>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderCodeTrace(activeLine) {
    const hasOriginalCode = Boolean(algorithmPage.originalCodePath);
    const showingOriginal = hasOriginalCode && state.activeCodeTab === "original";
    const codeSource = showingOriginal ? getOriginalCodeSource() : getCodeSource();
    const codeLines = codeSource.split("\n");
    const output = state.codeOutput || t("algorithmPage.outputEmpty");
    const editorRows = Math.min(Math.max(codeLines.length, 12), 24);
    const filename = showingOriginal
      ? algorithmPage.originalCodeFilename || algorithmPage.sourceFile || "original.cpp"
      : algorithmPage.codeFilename;
    const lineLabel = showingOriginal
      ? algorithmPage.originalActiveLine || 1
      : activeLine;
    return `
      <div class="code-trace" aria-label="${escapeHtml(`${algorithmPage.title} ${t("algorithmPage.codeTrace")}`)}">
        <div class="code-header">
          <span>${escapeHtml(filename)}</span>
          <span class="code-header-actions">
            <span>${escapeHtml(t("algorithmPage.activeLine", { line: lineLabel }))}</span>
            ${showingOriginal ? "" : `<button type="button" data-action="run-code">${icon("play_arrow")} ${escapeHtml(t("algorithmPage.runCode"))}</button>`}
          </span>
        </div>
        ${hasOriginalCode ? renderCodeTabs(showingOriginal) : ""}
        ${showingOriginal ? renderOriginalSource(codeLines, lineLabel) : `
          <div class="code-editor-shell">
            <div class="code-line-gutter" aria-hidden="true">
              ${codeLines.map((_, index) => `<span class="${index + 1 === activeLine ? "active" : ""}">${index + 1}</span>`).join("")}
            </div>
            <textarea data-code-editor spellcheck="false" rows="${editorRows}" aria-label="${escapeHtml(t("algorithmPage.codeEditor"))}">${escapeHtml(codeSource)}</textarea>
          </div>
          <div class="code-output ${escapeHtml(state.codeOutputKind)}" aria-label="${escapeHtml(t("algorithmPage.codeOutput"))}">
            <strong>${escapeHtml(t("algorithmPage.codeOutput"))}</strong>
            <pre>${escapeHtml(output)}</pre>
          </div>
        `}
      </div>
    `;
  }

  function renderCodeTabs(showingOriginal) {
    return `
      <div class="code-tabs" role="tablist" aria-label="${escapeHtml(t("algorithmPage.codeView"))}">
        <button type="button" class="${showingOriginal ? "" : "active"}" data-code-tab="js" role="tab" aria-selected="${showingOriginal ? "false" : "true"}">
          ${escapeHtml(t("algorithmPage.runnableJs"))}
        </button>
        <button type="button" class="${showingOriginal ? "active" : ""}" data-code-tab="original" role="tab" aria-selected="${showingOriginal ? "true" : "false"}">
          ${escapeHtml(t("algorithmPage.originalCpp"))}
        </button>
      </div>
    `;
  }

  function renderOriginalSource(codeLines, activeLine) {
    return `
      <div class="source-viewer" aria-label="${escapeHtml(t("algorithmPage.originalCppSource"))}">
        <div class="code-line-gutter" aria-hidden="true">
          ${codeLines.map((_, index) => `<span class="${index + 1 === activeLine ? "active" : ""}">${index + 1}</span>`).join("")}
        </div>
        <pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>
      </div>
    `;
  }

  function getCodeSource() {
    return state.codeSource || `// ${t("algorithmPage.loadingImplementation", { title: algorithmPage.title })}`;
  }

  function getOriginalCodeSource() {
    return state.originalCodeSource || `// ${t("algorithmPage.loadingOriginalCpp")}`;
  }

  function getCodeInsight(current) {
    if (state.activeCodeTab === "original") {
      return current.originalCodeInsight || algorithmPage.originalCodeInsight || current.codeInsight || current.note || algorithmPage.codeInsight;
    }
    return current.codeInsight || current.note || algorithmPage.codeInsight;
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

  async function handleAction(action) {
    if (action === "run-code") {
      await runCode();
      return;
    }
    if (action === "prev") state.step = Math.max(0, state.step - 1);
    if (action === "next") state.step = Math.min(algorithmPage.dryRun.length - 1, state.step + 1);
    if (action === "reset") state.step = 0;
    requestRender();
  }

  async function runCode() {
    state.codeOutput = t("algorithmPage.runningCode");
    state.codeOutputKind = "running";
    requestRender();

    const result = await runJavaScriptSource(getCodeSource());
    if (!result.ok) {
      state.codeOutput = `${t("algorithmPage.outputError")}: ${result.message}`;
      state.codeOutputKind = "error";
      requestRender();
      return;
    }

    const outputParts = [];
    if (result.logs.length) {
      outputParts.push(`${t("algorithmPage.consoleOutput")}:\n${result.logs.join("\n")}`);
    }
    if (result.returned) {
      outputParts.push(`${t("algorithmPage.returnedValue")}:\n${result.result}`);
    }
    state.codeOutput = outputParts.join("\n\n") || t("algorithmPage.outputNoResult");
    state.codeOutputKind = "success";
    requestRender();
  }

  function runJavaScriptSource(source) {
    return new Promise((resolve) => {
      const workerUrl = URL.createObjectURL(new Blob([RUNNER_WORKER_SOURCE], { type: "text/javascript" }));
      const worker = new Worker(workerUrl);
      const finish = (result) => {
        window.clearTimeout(timeout);
        worker.terminate();
        URL.revokeObjectURL(workerUrl);
        resolve(result);
      };
      const timeout = window.setTimeout(() => {
        finish({ ok: false, message: t("algorithmPage.outputTimeout") });
      }, CODE_RUN_TIMEOUT_MS);

      worker.onmessage = (event) => finish(event.data);
      worker.onerror = (event) => finish({
        ok: false,
        message: event.message || t("algorithmPage.outputError"),
      });
      worker.postMessage({
        source,
        runInput: algorithmPage.runnerInput || [],
      });
    });
  }

  async function loadCode() {
    loadOriginalCode();

    if (state.codeLoaded || state.loadingCode || !algorithmPage.codePath) return;
    state.loadingCode = true;

    try {
      const response = await fetch(algorithmPage.codePath, { cache: "no-store" });
      if (response.ok) {
        const source = await response.text();
        if (!state.codeDirty) state.codeSource = source.trimEnd();
      }
    } finally {
      state.codeLoaded = true;
      state.loadingCode = false;
      requestRender();
    }

  }

  async function loadOriginalCode() {
    if (state.originalCodeLoaded || state.loadingOriginalCode || !algorithmPage.originalCodePath) return;
    state.loadingOriginalCode = true;

    try {
      const response = await fetch(algorithmPage.originalCodePath, { cache: "no-store" });
      if (response.ok) {
        state.originalCodeSource = (await response.text()).trimEnd();
      }
    } finally {
      state.originalCodeLoaded = true;
      state.loadingOriginalCode = false;
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
