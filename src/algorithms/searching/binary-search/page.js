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
  ["A", "Move high to mid - 1 because the target must be on the left side.", false],
  ["B", "Return mid because the middle value matches the target.", true],
  ["C", "Move low to mid + 1 because every value before mid is too small.", false],
];

export const stylePath = "./src/algorithms/searching/binary-search/styles.css";

export function createAlgorithmPage({ icon, escapeHtml, requestRender }) {
  const state = {
    step: 0,
    playing: false,
    debug: true,
    selectedAnswer: "",
    timer: null,
  };

  function render(view) {
    if (view === "visualizer") return renderVisualizer();
    if (view === "challenge") return renderChallenge();
    return renderLesson();
  }

  function bind(root) {
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

  function onViewChange(view) {
    if (view !== "visualizer") stopPlayback();
  }

  function cleanup() {
    stopPlayback();
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
      <section class="visualizer-panel binary-search-visualizer" data-algorithm-page="binary-search" aria-labelledby="visualizer-title">
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
        <div class="concept-loop-grid">
          <article>
            <strong>${icon("psychology")} Concept</strong>
            <p>Binary Search keeps only the sorted half that can still contain the target.</p>
          </article>
          <article>
            <strong>${icon("repeat")} Loop</strong>
            <p>Run while <code>low &lt;= high</code>, compute <code>mid</code>, then compare <code>arr[mid]</code> with the target.</p>
          </article>
          <article>
            <strong>${icon("sync_alt")} State updates</strong>
            <p>If the middle value is too small, move <code>low</code>. If it is too large, move <code>high</code>.</p>
          </article>
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
      <section class="challenge-panel" data-algorithm-page="binary-search" aria-labelledby="challenge-title">
        <div class="title-row">
          <div>
            <p class="eyebrow">Binary search challenge</p>
            <h2 id="challenge-title">Middle Match</h2>
            <p>The current range is <code>[4 - 7]</code>, the middle value is <code>13</code>, and the target is <code>13</code>.</p>
          </div>
          <span class="step-pill purple">${icon("quiz")} Step 3/3</span>
        </div>
        <div class="array-stage challenge-array">
          <div class="array-track" aria-label="Binary search challenge array">
            ${arrayValues.map((value, index) => renderArrayCell(value, index, binarySteps[2])).join("")}
          </div>
        </div>
        ${renderCodeTrace(5)}
        <h3>What should the algorithm do next?</h3>
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
          ? "Correct. A match at mid ends the search and returns the middle index."
          : "Not quite. The middle value equals the target, so the algorithm returns mid immediately."}
      </p>
    `;
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
    if (action === "debug") state.debug = !state.debug;
    if (action === "play") state.playing ? stopPlayback() : startPlayback();
    requestRender();
  }

  function startPlayback() {
    state.playing = true;
    window.clearInterval(state.timer);
    state.timer = window.setInterval(() => {
      if (state.step >= binarySteps.length - 1) {
        stopPlayback();
      } else {
        state.step += 1;
        requestRender();
      }
    }, 1600);
  }

  function stopPlayback() {
    state.playing = false;
    window.clearInterval(state.timer);
    state.timer = null;
  }

  return {
    bind,
    cleanup,
    onViewChange,
    render,
  };
}
