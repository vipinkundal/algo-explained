# Learning improvements and verification

The site contains 242 registered lessons in 16 subject groups. Each has three
views, for 726 topic routes. Home, Search, Saved, Account, and Daily Quiz are the
app-level views. One bespoke Binary Search page was moved to the shared renderer
so it receives the same learning aids, runnable editor, and accessibility work.

## Content and learning UI

- Replaced template introductions with concrete descriptions of the named topic.
- Added `learningGuide` metadata to all 242 local `data.js` files: a mental model,
  a small example, sample arguments and result, glossary, and assumption checks.
- Supplied curated operation-specific explanations for all 107 C/C++ reference
  lessons and the generic foundations, recursion, matrix, number/bit, and STL
  lessons. Existing specific algorithm examples and prepared traces remain.
- Corrected factorial versus backtracking: factorial has smaller calls and
  returning products; it does not choose/unchoose candidate solutions. Its
  small-input visual model now shows both calls and returning products.
- Defined complexity with relevant assumptions, including output storage,
  fixed-width JavaScript bitwise behavior, STL iterator caveats, and the actual
  foundational companion demo. Removed the stale English backtracking override
  and corrected its complexity formulas in the existing translated overrides.
- Added an adjustable growth graph and accessible numeric comparison table.
- Made variables visible in lessons with explanations of their purpose, and added
  an optional rationale for key lines from the actual runnable source. Showed
  visual state alongside examples.
- Added a five-topic beginner path, 16 subject cards, subject filtering, and
  persistent Understand / Watch & try / Check yourself navigation.
- Added descriptive step controls, boundary stopping, keyboard focus restoration,
  announced output/quiz feedback, invalid-JSON feedback, and disclosure state.
- Fixed 23 related links that previously pointed to a missing `array-patterns`
  lesson. They now point to the indexed Linear Search lesson.
- Fixed the nine-column Sudoku board on narrow screens by making grid cells
  shrink within available width. Preserved empty array inputs in generic models.

## Verification

Final exact command results are recorded in the handoff. The automated coverage
report is `learning-coverage-report.json`; the source inventory is
`learning-page-inventory.json`.

- `check:learning`: 242 lesson records, 726 rendered view strings, and 242 sample
  executions checked; no failures.
- `check:shell`: 15 isolated renderer fixtures, covering home/library, login,
  signup, saved empty/populated, signed-in profile, daily quiz empty/question/
  feedback, progress markers, lesson-stage navigation, related search record merging, subject
  filtering before merging, and reference category mapping. No live accounts were created.
- `check:interactions`: factorial models for 0, 1, 4, and 5; empty-array model;
  growth comparison at n = 64.
- Local browser: all 726 topic routes loaded with the expected heading and stage
  navigation. All 242 visualizers were checked at a 390 × 844 viewport; the
  Sudoku overflow found during that audit was corrected and rechecked.
- Browser interactions: beginner entry, next/back/restart controls, original and
  changed sample input, runnable output, malformed JSON feedback, quiz wrong/
  correct reasoning, growth slider and table, search/filtering, related lesson
  navigation, C/C++ source tab, and account page. Representative screenshots
  include desktop/mobile views. Check the handoff for their absolute paths.

The project has no configured build, lint, or typecheck commands; it is served
as JavaScript modules without compilation. The documented syntax and data-page
checks are run in addition to the new coverage checks.

## Scope and limits

The added instructional prose is English. Existing interface languages and
translated backtracking content remain; a complete multilingual content rewrite
was not performed. Explanations are beginner-oriented topic guides, not a claim
that every algorithm implementation has been proven for every edge case.

107 C/C++ references remain reading material. Their JavaScript companions often
illustrate a structure rather than implementing every named C/C++ operation;
these differences are now stated in the UI. Prepared/schematic visualizers are
not recordings of the editable program and may cap displayed state. Run code
executes JavaScript only. No C/C++ compilation, deployment, push, or publishing
was performed. Live account creation and authenticated server mutations were
not exercised; account/quiz display states were tested using isolated fixtures.

## Remote integration

Rebased the completed changes onto the latest `origin/main` before pushing.
Preserved the newer search record merging and subject categorization while
combining them with the new subject filter. The three-stage learning experience
and shared Binary Search renderer are the intended UI redesign from this task.
