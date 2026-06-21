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
    const current = getCurrentStep();
    const activeLine = getActiveLine(current);
    const stepTotal = getStepCount();
    return `
      <section class="algorithm-page visualizer-panel" data-algorithm-page="${escapeHtml(algorithmPage.id)}" data-visualizer="${escapeHtml(algorithmPage.visualizerType)}" aria-labelledby="visualizer-title">
        <div class="title-row">
          <div>
            ${renderPageTags()}
            <h2 id="visualizer-title">${escapeHtml(algorithmPage.title)}</h2>
            <p>${escapeHtml(algorithmPage.visualizerCaption)}</p>
          </div>
          <span class="step-pill">${escapeHtml(t("algorithmPage.stepCounter", { current: state.step + 1, total: stepTotal }))}</span>
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
        ${renderDryRunStage(current)}
        <div class="control-deck" aria-label="${escapeHtml(t("algorithmPage.visualizerControls"))}">
          <button data-action="prev" aria-label="${escapeHtml(t("algorithmPage.previousStep"))}">${icon("skip_previous")}</button>
          <button class="play-button" data-action="next" aria-label="${escapeHtml(t("algorithmPage.nextStep"))}">${icon("skip_next")}</button>
          <button data-action="reset" aria-label="${escapeHtml(t("algorithmPage.resetVisualizer"))}">${icon("replay")}</button>
        </div>
        <div class="trace-layout">
          ${renderCodeTrace(activeLine)}
          <aside class="explanation-bubble">
            ${icon("tips_and_updates")}
            <strong>${escapeHtml(t("algorithmPage.codeInsight"))}</strong>
            <p>${escapeHtml(getCodeInsight(current, activeLine))}</p>
          </aside>
        </div>
        ${renderRelatedLinks()}
      </section>
    `;
  }

  function getStepCount() {
    const dryRunCount = Array.isArray(algorithmPage.dryRun) ? algorithmPage.dryRun.length : 0;
    const animationStepCount = Array.isArray(algorithmPage.animation?.steps) ? algorithmPage.animation.steps.length : 0;
    const stackItemCount = algorithmPage.animation?.type === "stack-queue-flow" && Array.isArray(algorithmPage.animation.items)
      ? algorithmPage.animation.items.length
      : 0;
    return Math.max(dryRunCount, animationStepCount, stackItemCount, 1);
  }

  function getAnimationStep(stepIndex = state.step) {
    const animation = algorithmPage.animation || {};
    const existingStep = animation.steps?.[stepIndex];
    if (existingStep) return existingStep;
    if (animation.type === "stack-queue-flow" && Array.isArray(animation.items) && stepIndex < animation.items.length) {
      return {
        phase: `Slot ${stepIndex}`,
        title: `Inspect slot ${stepIndex}`,
        note: "The visualizer advances to this stack position before wrapping.",
        ruleLabel: `${algorithmPage.title} invariant`,
        rule: "Every stack slot can become the active visual state as the controls advance.",
        activeItems: [stepIndex],
        topIndex: stepIndex,
        queueWindow: [stepIndex, animation.items.length - 1],
      };
    }
    return {};
  }

  function getCurrentStep() {
    const dryRunStep = algorithmPage.dryRun[state.step];
    if (dryRunStep) return dryRunStep;
    const animationStep = getAnimationStep(state.step);
    return {
      label: animationStep.phase || `Step ${state.step + 1}`,
      title: animationStep.title || `Step ${state.step + 1}`,
      note: animationStep.note || animationStep.rule || algorithmPage.transitionSummary || "",
      activeLine: algorithmPage.dryRun.at(-1)?.activeLine || 1,
      codeInsight: animationStep.rule || algorithmPage.codeInsight,
    };
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

  function renderDryRunStage(current) {
    if (algorithmPage.animation?.type === "edge-relaxation") {
      return renderEdgeRelaxationStage(current);
    }
    if (algorithmPage.animation?.type === "tree-operation") {
      return renderTreeOperationStage(current);
    }
    if (algorithmPage.animation?.type) {
      return renderStructuredAnimationStage(current);
    }

    return renderStateFlowStage(current);
  }

  function renderEdgeRelaxationStage(current) {
    const animation = algorithmPage.animation || {};
    const animationStep = getAnimationStep(state.step);
    const nodes = Array.isArray(animation.nodes) ? animation.nodes : [];
    const edges = Array.isArray(animation.edges) ? animation.edges : [];
    const distances = animationStep.distances || {};
    const activeEdge = animationStep.activeEdge || null;
    const relaxedNode = animationStep.relaxedNode || "";

    return `
      <div class="dry-run-stage graph-relaxation-stage" aria-label="${escapeHtml(`${algorithmPage.title} ${t("algorithmPage.dryRun")}`)}">
        <div class="graph-relaxation-board">
          <svg class="graph-relaxation-svg" viewBox="0 0 640 300" role="img" aria-label="${escapeHtml(animation.title || algorithmPage.title)}">
            <defs>
              <marker id="edge-arrow-${escapeHtml(algorithmPage.id)}" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z"></path>
              </marker>
            </defs>
            ${edges.map((edge) => renderRelaxationEdge(edge, nodes, activeEdge)).join("")}
            ${nodes.map((node) => renderRelaxationNode(node, distances[node.id], relaxedNode)).join("")}
          </svg>
        </div>
        <div class="graph-relaxation-details">
          <p class="relaxation-kicker">${escapeHtml(animationStep.pass || current.label)}</p>
          <h3>${escapeHtml(animationStep.title || current.title)}</h3>
          <p>${escapeHtml(animationStep.note || current.note)}</p>
          <div class="distance-table" aria-label="Distance table">
            ${nodes.map((node) => `
              <span class="${node.id === relaxedNode ? "updated" : ""}">
                <b>${escapeHtml(node.label || node.id)}</b>
                <em>${escapeHtml(formatDistance(distances[node.id]))}</em>
              </span>
            `).join("")}
          </div>
        </div>
      </div>
    `;
  }

  function renderStateFlowStage(current) {
    const stepNumber = state.step + 1;
    const variableFocus = algorithmPage.variables[state.step % Math.max(algorithmPage.variables.length, 1)];
    const activeLine = getActiveLine(current);

    return `
      <div class="dry-run-stage state-flow-stage" aria-label="${escapeHtml(`${algorithmPage.title} ${t("algorithmPage.dryRun")}`)}">
        <div class="state-flow-current">
          <p class="state-flow-kicker">${escapeHtml(humanizeTag(algorithmPage.visualizerType))} · ${escapeHtml(t("algorithmPage.activeLine", { line: activeLine }))}</p>
          <h3>${escapeHtml(current.title || current.label)}</h3>
          <p>${escapeHtml(current.note || getCodeInsight(current, activeLine))}</p>
          <div class="state-flow-code-link">
            <span>${stepNumber}</span>
            <div>
              <strong>${escapeHtml(current.label)}</strong>
              <em>${escapeHtml(getCodeInsight(current, activeLine))}</em>
            </div>
          </div>
        </div>
        <div class="state-flow-visual" aria-hidden="true">
          <div class="state-flow-focus">
            <span>${escapeHtml(variableFocus?.name || current.label)}</span>
            <strong>${escapeHtml(variableFocus?.purpose || current.note || "")}</strong>
          </div>
          <div class="state-flow-mini-grid">
            ${algorithmPage.variables.slice(0, 4).map((variable, index) => `
              <span class="${index === state.step % Math.max(algorithmPage.variables.length, 1) ? "active" : ""}">
                ${escapeHtml(variable.name)}
              </span>
            `).join("")}
          </div>
        </div>
      </div>
    `;
  }

  function renderTreeOperationStage(current) {
    const animation = algorithmPage.animation || {};
    const animationStep = getAnimationStep(state.step);
    const nodes = Array.isArray(animation.nodes) ? animation.nodes : [];
    const edges = Array.isArray(animation.edges) ? animation.edges : [];
    const activeNode = animationStep.activeNode || "";
    const targetNode = animationStep.targetNode || "";
    const replacementNode = animationStep.replacementNode || "";
    const removedNodes = Array.isArray(animationStep.removedNodes) ? animationStep.removedNodes : [];
    const mutedNodes = Array.isArray(animationStep.mutedNodes) ? animationStep.mutedNodes : [];
    const nodeLabels = animationStep.nodeLabels || {};

    return `
      <div class="dry-run-stage tree-operation-stage" aria-label="${escapeHtml(`${algorithmPage.title} ${t("algorithmPage.dryRun")}`)}">
        <div class="tree-operation-board">
          <svg class="tree-operation-svg" viewBox="0 0 680 360" role="img" aria-label="${escapeHtml(animation.title || algorithmPage.title)}">
            ${edges.map((edge) => renderTreeEdge(edge, nodes, removedNodes, mutedNodes)).join("")}
            ${nodes.map((node) => renderTreeNode(node, {
              activeNode,
              targetNode,
              replacementNode,
              removedNodes,
              mutedNodes,
              nodeLabels,
            })).join("")}
          </svg>
        </div>
        <div class="tree-operation-details">
          <p class="tree-operation-kicker">${escapeHtml(animationStep.phase || current.label)}</p>
          <h3>${escapeHtml(animationStep.title || current.title)}</h3>
          <p>${escapeHtml(animationStep.note || current.note)}</p>
          <div class="tree-operation-rule">
            <span>${escapeHtml(animationStep.ruleLabel || "BST invariant")}</span>
            <strong>${escapeHtml(animationStep.rule || "Left subtree values stay smaller; right subtree values stay larger.")}</strong>
          </div>
          <div class="tree-operation-legend" aria-label="Tree operation legend">
            <span><i class="current"></i> Current</span>
            <span><i class="target"></i> Target</span>
            <span><i class="replacement"></i> Replacement</span>
          </div>
        </div>
      </div>
    `;
  }

  function renderTreeEdge(edge, nodes, removedNodes, mutedNodes) {
    const from = nodes.find((node) => node.id === edge.from);
    const to = nodes.find((node) => node.id === edge.to);
    if (!from || !to) return "";
    const muted = removedNodes.includes(edge.from)
      || removedNodes.includes(edge.to)
      || mutedNodes.includes(edge.from)
      || mutedNodes.includes(edge.to);
    return `
      <line class="tree-edge ${muted ? "muted" : ""}" x1="${from.x}" y1="${from.y + 26}" x2="${to.x}" y2="${to.y - 28}"></line>
    `;
  }

  function renderTreeNode(node, stateForNode) {
    const isRemoved = stateForNode.removedNodes.includes(node.id);
    const classes = [
      "tree-node",
      node.id === stateForNode.activeNode ? "active" : "",
      node.id === stateForNode.targetNode ? "target" : "",
      node.id === stateForNode.replacementNode ? "replacement" : "",
      isRemoved ? "removed" : "",
      stateForNode.mutedNodes.includes(node.id) ? "muted" : "",
    ].filter(Boolean).join(" ");
    const label = stateForNode.nodeLabels[node.id] || node.label || node.id;

    return `
      <g class="${classes}" transform="translate(${node.x} ${node.y})">
        <circle r="28"></circle>
        <text>${escapeHtml(label)}</text>
      </g>
    `;
  }

  function renderRelaxationEdge(edge, nodes, activeEdge) {
    const from = nodes.find((node) => node.id === edge.from);
    const to = nodes.find((node) => node.id === edge.to);
    if (!from || !to) return "";

    const isActive = activeEdge && activeEdge.from === edge.from && activeEdge.to === edge.to;
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const length = Math.max(Math.sqrt((dx * dx) + (dy * dy)), 1);
    const radius = 24;
    const startX = from.x + (dx / length) * radius;
    const startY = from.y + (dy / length) * radius;
    const endX = to.x - (dx / length) * radius;
    const endY = to.y - (dy / length) * radius;
    const labelX = (startX + endX) / 2;
    const labelY = (startY + endY) / 2 - 12;

    return `
      <g class="graph-edge ${isActive ? "active" : ""}">
        <line x1="${startX}" y1="${startY}" x2="${endX}" y2="${endY}" marker-end="url(#edge-arrow-${escapeHtml(algorithmPage.id)})"></line>
        <text x="${labelX}" y="${labelY}">${escapeHtml(edge.weight)}</text>
      </g>
    `;
  }

  function renderRelaxationNode(node, distance, relaxedNode) {
    return `
      <g class="graph-node ${node.id === relaxedNode ? "updated" : ""}" transform="translate(${node.x} ${node.y})">
        <circle r="26"></circle>
        <text y="-3">${escapeHtml(node.label || node.id)}</text>
        <text class="node-distance" y="17">${escapeHtml(formatDistance(distance))}</text>
      </g>
    `;
  }

  function formatDistance(value) {
    if (typeof value === "undefined") return "∞";
    return String(value);
  }

  function renderStructuredAnimationStage(current) {
    const animation = algorithmPage.animation || {};
    const animationStep = getAnimationStep(state.step);
    const activeLine = getActiveLine(current);

    return `
      <div class="dry-run-stage structured-animation-stage ${escapeHtml(animation.type)}" aria-label="${escapeHtml(`${algorithmPage.title} ${t("algorithmPage.dryRun")}`)}">
        <div class="structured-animation-board">
          ${renderStructuredBoard(animation, animationStep)}
        </div>
        <div class="structured-animation-details">
          <p class="structured-animation-kicker">${escapeHtml(animationStep.phase || current.label)}</p>
          <h3>${escapeHtml(animationStep.title || current.title)}</h3>
          <p>${escapeHtml(animationStep.note || current.note)}</p>
          <div class="structured-animation-rule">
            <span>${escapeHtml(animationStep.ruleLabel || animation.ruleLabel || "State rule")}</span>
            <strong>${escapeHtml(getCodeInsight(current, activeLine) || animationStep.rule || animation.rule)}</strong>
          </div>
        </div>
      </div>
    `;
  }

  function renderStructuredBoard(animation, animationStep) {
    if (animation.type === "array-flow") return renderArrayBoard(animation, animationStep);
    if (animation.type === "bucket-flow") return renderBucketBoard(animation, animationStep);
    if (animation.type === "matrix-flow") return renderMatrixBoard(animation, animationStep);
    if (animation.type === "graph-flow") return renderGraphBoard(animation, animationStep);
    if (animation.type === "stack-queue-flow") return renderStackQueueBoard(animation, animationStep);
    if (animation.type === "linked-list-flow") return renderLinkedListBoard(animation, animationStep);
    if (animation.type === "recursion-flow") return renderRecursionBoard(animation, animationStep);
    if (animation.type === "string-flow") return renderStringBoard(animation, animationStep);
    return renderStateBoard(animation, animationStep);
  }

  function renderArrayBoard(animation, animationStep) {
    const values = Array.isArray(animation.values) && animation.values.length ? animation.values : [4, 1, 3, 2];
    const active = new Set(animationStep.activeIndices || []);
    const sorted = new Set(animationStep.sortedIndices || []);
    const muted = new Set(animationStep.mutedIndices || []);
    const windowRange = Array.isArray(animationStep.window) ? animationStep.window : [];

    return `
      <div class="array-animation-row">
        ${values.map((value, index) => {
          const inWindow = windowRange.length === 2 && index >= windowRange[0] && index <= windowRange[1];
          const classes = [
            "array-animation-cell",
            active.has(index) ? "active" : "",
            sorted.has(index) ? "sorted" : "",
            muted.has(index) ? "muted" : "",
            inWindow ? "window" : "",
          ].filter(Boolean).join(" ");
          return `<span class="${classes}"><b>${escapeHtml(value)}</b><em>${index}</em></span>`;
        }).join("")}
      </div>
      <div class="animation-label-row">
        <span>${escapeHtml(animationStep.primaryLabel || "current state")}</span>
        <span>${escapeHtml(animationStep.secondaryLabel || "values move by the rule")}</span>
      </div>
    `;
  }

  function renderBucketBoard(animation, animationStep) {
    const values = Array.isArray(animation.values) && animation.values.length ? animation.values : [4, 1, 3, 2];
    const buckets = Array.isArray(animation.buckets) && animation.buckets.length ? animation.buckets : [
      { label: "low" },
      { label: "mid" },
      { label: "high" },
    ];
    const activeValue = animationStep.activeValue;
    const activeBucket = animationStep.bucketIndex;

    return `
      <div class="bucket-value-row">
        ${values.map((value) => `<span class="${value === activeValue ? "active" : ""}">${escapeHtml(value)}</span>`).join("")}
      </div>
      <div class="bucket-grid">
        ${buckets.map((bucket, index) => {
          const items = animationStep.bucketValues?.[index] || bucket.values || [];
          return `
            <div class="bucket-bin ${index === activeBucket ? "active" : ""}">
              <strong>${escapeHtml(bucket.label || `bucket ${index + 1}`)}</strong>
              <div>${items.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }

  function renderMatrixBoard(animation, animationStep) {
    const matrix = Array.isArray(animation.matrix) && animation.matrix.length ? animation.matrix : [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const active = new Set((animationStep.activeCells || []).map((cell) => cell.join(",")));
    const visited = new Set((animationStep.visitedCells || []).map((cell) => cell.join(",")));

    return `
      <div class="matrix-animation-grid" style="--matrix-columns: ${matrix[0]?.length || 1}">
        ${matrix.flatMap((row, rowIndex) => row.map((value, columnIndex) => {
          const key = `${rowIndex},${columnIndex}`;
          return `<span class="${active.has(key) ? "active" : ""} ${visited.has(key) ? "visited" : ""}"><b>${escapeHtml(value)}</b><em>${rowIndex},${columnIndex}</em></span>`;
        })).join("")}
      </div>
    `;
  }

  function renderGraphBoard(animation, animationStep) {
    const nodes = Array.isArray(animation.nodes) && animation.nodes.length ? animation.nodes : [
      { id: "A", label: "A", x: 120, y: 150 },
      { id: "B", label: "B", x: 320, y: 80 },
      { id: "C", label: "C", x: 520, y: 150 },
    ];
    const edges = Array.isArray(animation.edges) ? animation.edges : [];
    const activeNode = animationStep.activeNode || "";
    const visited = new Set(animationStep.visitedNodes || []);
    const frontier = new Set(animationStep.frontierNodes || []);
    const activeEdge = animationStep.activeEdge || {};

    return `
      <svg class="structured-graph-svg" viewBox="0 0 640 300" role="img" aria-label="${escapeHtml(animation.title || algorithmPage.title)}">
        ${edges.map((edge) => {
          const from = nodes.find((node) => node.id === edge.from);
          const to = nodes.find((node) => node.id === edge.to);
          if (!from || !to) return "";
          const active = activeEdge.from === edge.from && activeEdge.to === edge.to;
          return `<line class="structured-graph-edge ${active ? "active" : ""}" x1="${from.x}" y1="${from.y}" x2="${to.x}" y2="${to.y}"></line>`;
        }).join("")}
        ${nodes.map((node) => `
          <g class="structured-graph-node ${node.id === activeNode ? "active" : ""} ${visited.has(node.id) ? "visited" : ""} ${frontier.has(node.id) ? "frontier" : ""}" transform="translate(${node.x} ${node.y})">
            <circle r="28"></circle>
            <text>${escapeHtml(node.label || node.id)}</text>
          </g>
        `).join("")}
      </svg>
    `;
  }

  function renderStackQueueBoard(animation, animationStep) {
    const items = Array.isArray(animation.items) && animation.items.length ? animation.items : [1, 2, 3, 4];
    const active = new Set(animationStep.activeItems || []);
    const topIndex = typeof animationStep.topIndex === "number" ? animationStep.topIndex : items.length - 1;
    const windowRange = Array.isArray(animationStep.queueWindow) ? animationStep.queueWindow : [0, items.length - 1];

    return `
      <div class="stack-queue-board ${escapeHtml(animation.orientation || "stack")}">
        ${items.map((item, index) => {
          const inQueue = index >= windowRange[0] && index <= windowRange[1];
          return `<span class="${active.has(index) ? "active" : ""} ${index === topIndex ? "top" : ""} ${inQueue ? "" : "muted"}"><b>${escapeHtml(item)}</b><em>${index === topIndex ? "top" : `slot ${index}`}</em></span>`;
        }).join("")}
      </div>
    `;
  }

  function renderLinkedListBoard(animation, animationStep) {
    const nodes = Array.isArray(animation.nodes) && animation.nodes.length ? animation.nodes : [
      { id: "n1", label: "8" },
      { id: "n2", label: "13" },
      { id: "n3", label: "21" },
      { id: "n4", label: "34" },
    ];

    return `
      <div class="linked-list-board">
        ${nodes.map((node, index) => `
          <span class="linked-list-node ${node.id === animationStep.activeNode ? "active" : ""} ${node.id === animationStep.previousNode ? "previous" : ""} ${node.id === animationStep.nextNode ? "next" : ""}">
            <b>${escapeHtml(node.label || node.id)}</b>
            <em>${escapeHtml(node.role || `node ${index + 1}`)}</em>
          </span>
          ${index < nodes.length - 1 ? `<i aria-hidden="true">→</i>` : ""}
        `).join("")}
      </div>
    `;
  }

  function renderRecursionBoard(animation, animationStep) {
    const calls = Array.isArray(animation.calls) && animation.calls.length ? animation.calls : ["call(3)", "call(2)", "call(1)", "base"];
    const activeCall = animationStep.activeCall ?? 0;
    const returning = new Set(animationStep.returningCalls || []);

    return `
      <div class="recursion-board">
        ${calls.map((call, index) => `
          <span class="${index === activeCall ? "active" : ""} ${returning.has(index) ? "returning" : ""}" style="--depth: ${index}">
            <b>${escapeHtml(call)}</b>
            <em>${index === calls.length - 1 ? "base" : "call"}</em>
          </span>
        `).join("")}
      </div>
    `;
  }

  function renderStringBoard(animation, animationStep) {
    const text = String(animation.text || "algorithm");
    const activeRange = Array.isArray(animationStep.activeRange) ? animationStep.activeRange : [];
    const matchedRange = Array.isArray(animationStep.matchedRange) ? animationStep.matchedRange : [];

    return `
      <div class="string-animation-row">
        ${text.split("").map((character, index) => {
          const active = activeRange.length === 2 && index >= activeRange[0] && index <= activeRange[1];
          const matched = matchedRange.length === 2 && index >= matchedRange[0] && index <= matchedRange[1];
          return `<span class="${active ? "active" : ""} ${matched ? "matched" : ""}"><b>${escapeHtml(character)}</b><em>${index}</em></span>`;
        }).join("")}
      </div>
      ${animation.pattern ? `<div class="string-pattern-pill">pattern: ${escapeHtml(animation.pattern)}</div>` : ""}
    `;
  }

  function renderStateBoard(animation, animationStep) {
    const states = Array.isArray(animation.states) && animation.states.length
      ? animation.states
      : algorithmPage.dryRun.map((step) => step.label);
    const activeState = animationStep.activeState ?? state.step;
    return `
      <div class="state-machine-board">
        ${states.map((item, index) => `<span class="${index === activeState ? "active" : ""} ${index < activeState ? "complete" : ""}">${escapeHtml(item)}</span>`).join("")}
      </div>
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

  function getActiveLine(current) {
    if (state.activeCodeTab === "original") return algorithmPage.originalActiveLine || current.activeLine || 1;
    const codeLines = getCodeSource().split(/\r?\n/);
    const resolvedLine = resolveCodeLineForStep(current, codeLines) || current.activeLine || 1;
    const activeLine = Math.min(Math.max(resolvedLine, 1), Math.max(codeLines.length, 1));
    return findExecutableLine(codeLines, activeLine);
  }

  function findExecutableLine(codeLines, preferredLine) {
    const isExecutable = (line) => {
      const text = String(line || "").trim();
      return text && text !== "{" && text !== "}" && !text.startsWith("//") && !text.startsWith("/*") && !text.startsWith("*");
    };
    const preferredIndex = Math.min(Math.max(preferredLine - 1, 0), Math.max(codeLines.length - 1, 0));
    if (isExecutable(codeLines[preferredIndex])) return preferredIndex + 1;

    for (let index = preferredIndex + 1; index < codeLines.length; index += 1) {
      if (isExecutable(codeLines[index])) return index + 1;
    }
    for (let index = preferredIndex - 1; index >= 0; index -= 1) {
      if (isExecutable(codeLines[index])) return index + 1;
    }
    return preferredLine;
  }

  function resolveCodeLineForStep(current, codeLines) {
    const label = `${current.label || ""} ${current.title || ""}`.toLowerCase();
    const candidates = codeLines.map((line, index) => ({ text: line.trim(), number: index + 1 }));
    const findLine = (matcher) => candidates.find(({ text }) => matcher(text))?.number;
    const firstAlgorithmLine = () => findLine((text) => /^(const|let)\s+\w+\s*=|^for\s*\(|^while\s*\(|^if\s*\(/.test(text));

    if (/\b(result|answer|return|output|visible)\b/.test(label)) {
      return findLine((text) => /^return\b/.test(text));
    }

    if (/\b(push|pop|resolve)\b/.test(label)) {
      return findLine((text) => /^while\b/.test(text) && /stack|\.at|\.length/.test(text))
        || findLine((text) => /\.pop\(\)|\.push\(/.test(text));
    }

    if (/\bstack\b/.test(label) && /\b(top|inspect|check)\b/.test(label)) {
      return findLine((text) => /^while\b/.test(text) && /stack|\.at|\.length/.test(text))
        || findLine((text) => /^(const|let)\s+stack\b/.test(text));
    }

    if (/\bstack\b/.test(label) && /\b(read|state|stack)\b/.test(label)) {
      return findLine((text) => /^(const|let)\s+stack\b/.test(text))
        || firstAlgorithmLine();
    }

    if (/\b(compare|check|inspect)\b/.test(label)) {
      return findLine((text) => /^if\b/.test(text))
        || findLine((text) => /^const\b/.test(text) && /mid|pivot|current|candidate|target/i.test(text));
    }

    if (/\bstack\b/.test(label)) return findLine((text) => /^(const|let)\s+stack\b/.test(text));
    if (/\bqueue\b/.test(label)) return findLine((text) => /^(const|let)\s+queue\b/.test(text));
    if (/\b(low|high|window|boundary)\b/.test(label)) return findLine((text) => /^(const|let)\s+(low|left|start|high|right|end)\b/.test(text));
    if (/\bdistance\b/.test(label)) return findLine((text) => /^(const|let)\s+distance\b/.test(text));

    if (/\b(input|read|graph|array|text|root|start)\b/.test(label) && !/\b(top|inspect|check|compare|push|pop|resolve|relax)\b/.test(label)) {
      return firstAlgorithmLine();
    }

    if (/\b(loop|transition|swap|relax|merge|partition|visit|rotate|update)\b/.test(label)) {
      return findLine((text) => /\b(while|for|if)\b/.test(text) && /[<>!=]=?|\.length|\.at|includes|has\(/.test(text))
        || findLine((text) => /=/.test(text) && !/^(const|let)\b/.test(text));
    }

    if (/\b(state|table|heap|set|map|visited|bucket)\b/.test(label)) {
      return findLine((text) => /^(const|let)\s+\w+\s*=/.test(text));
    }

    return null;
  }

  function getCodeInsight(current, activeLine = getActiveLine(current)) {
    const source = state.activeCodeTab === "original" ? getOriginalCodeSource() : getCodeSource();
    const sourceLine = source.split(/\r?\n/)[activeLine - 1] || "";
    const lineInsight = describeCodeLine(sourceLine, current);
    if (lineInsight) return lineInsight;
    if (state.activeCodeTab === "original") {
      return current.originalCodeInsight || algorithmPage.originalCodeInsight || current.codeInsight || current.note || algorithmPage.codeInsight;
    }
    return current.codeInsight || current.note || algorithmPage.codeInsight;
  }

  function describeCodeLine(line, current) {
    const text = line.trim();
    if (!text || text === "}") return "";

    const functionMatch = text.match(/^export function\s+(\w+)\(([^)]*)\)/);
    if (functionMatch) {
      const params = functionMatch[2].trim();
      return params
        ? `This line defines the runnable function and its input (${params}), so changing those values changes the animation and output.`
        : "This line defines the runnable function used by the visualizer.";
    }

    const declarationMatch = text.match(/^(const|let)\s+(\w+)\s*=\s*(.+);?$/);
    if (declarationMatch) {
      const [, declarationKind, name, expression] = declarationMatch;
      if (name === "stack" && /\[\]/.test(expression)) return "This line creates the monotonic stack. It stores indexes that are still waiting for a greater value to appear.";
      if (name === "result" && /Array\(/.test(expression) && /\.fill\(/.test(expression)) return "This line creates the answer array and fills it with the fallback value for items that never find a next greater element.";
      if (/\[\]/.test(expression)) return `This line creates ${name} as empty working state; later steps push, pop, or scan values through it.`;
      if (/Array\(/.test(expression) && /\.fill\(/.test(expression)) return `This line prepares ${name} with default values, so unresolved answers already have the correct fallback.`;
      if (/Object\.fromEntries/.test(expression)) return `This line builds ${name} as a lookup table, giving every key a clear starting value.`;
      if (/Math\./.test(expression)) return `This line computes ${name}; the next branch uses that value to decide what part of the state changes.`;
      if (declarationKind === "let") return `This line initializes mutable state (${name}); later branches update it as the algorithm moves.`;
      return `This line stores ${name}, a local value the following code depends on.`;
    }

    const whileMatch = text.match(/^while\s*\((.+)\)/);
    if (whileMatch) {
      if (/stack\.length/.test(whileMatch[1]) && /\.at\(-1\)/.test(whileMatch[1])) {
        return "This line peeks at the stack top and keeps popping while the current value is greater, resolving every smaller value that was waiting.";
      }
      return `This condition (${whileMatch[1]}) decides whether more pending state must be resolved before the scan can continue.`;
    }

    if (/^for\s*\(/.test(text)) return "This loop scans the input from left to right so each value gets one chance to resolve earlier pending values.";

    const ifMatch = text.match(/^if\s*\((.+)\)/);
    if (ifMatch) return `This branch checks ${ifMatch[1]}; only the matching branch is allowed to update the algorithm state.`;

    if (/result\[stack\.pop\(\)\]\s*=/.test(text)) return "This line pops an index from the stack and writes the current value as that index's next greater element.";
    if (/\.pop\(\)/.test(text)) return "This line removes the most recent pending item and resolves it with the current value.";
    if (/stack\.push\(index\)/.test(text)) return "This line pushes the current index because its next greater value has not been found yet.";
    if (/\.push\(/.test(text)) return "This line stores the current item for a future step, which is why it appears in the visual state.";

    const returnMatch = text.match(/^return\s+(.+);?$/);
    if (returnMatch) return `This line returns ${returnMatch[1].replace(/;$/, "")}, which is the final value shown by the code output.`;

    const assignmentMatch = text.match(/^(.+?)\s*=\s*(.+);?$/);
    if (assignmentMatch) return `This line updates ${assignmentMatch[1].trim()} from the current code state.`;

    if (/^\/\//.test(text)) return "This comment labels the code section; the executable behavior starts on the next highlighted code line.";

    return `This highlighted line is the code step currently connected to the visualizer state: ${text}`;
  }

  function getTransitionSummary(current) {
    const variableNames = algorithmPage.variables.map((variable) => variable.name).join(", ");
    return t("algorithmPage.transitionSummaryFallback", {
      title: current.title,
      variables: variableNames || t("algorithmPage.stateFallback"),
      visualizer: algorithmPage.visualizerType.replaceAll("-", " "),
    });
  }

  function renderPageTags() {
    const tags = getPageTags();
    if (!tags.length) return "";

    return `
      <div class="page-tags" aria-label="Page tags">
        ${tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
      </div>
    `;
  }

  function getPageTags() {
    return uniqueTags([
      algorithmPage.category,
      algorithmPage.topicGroup,
      algorithmPage.track && algorithmPage.track !== algorithmPage.category ? algorithmPage.track : "",
      humanizeTag(algorithmPage.visualizerType),
      algorithmPage.sourceLanguage ? algorithmPage.sourceLanguage.toUpperCase() : "",
      algorithmPage.priority,
    ]).slice(0, 5);
  }

  function uniqueTags(values) {
    const tags = [];
    values.forEach((value) => {
      const tag = String(value || "").trim();
      if (!tag) return;
      if (!tags.some((current) => current.toLowerCase() === tag.toLowerCase())) tags.push(tag);
    });
    return tags;
  }

  function humanizeTag(value) {
    return String(value || "")
      .replaceAll("-", " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase());
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
    const stepCount = getStepCount();
    if (action === "prev") state.step = (state.step - 1 + stepCount) % stepCount;
    if (action === "next") state.step = (state.step + 1) % stepCount;
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
