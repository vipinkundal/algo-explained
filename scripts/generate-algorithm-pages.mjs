import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const algorithmsRoot = path.join(root, "src", "algorithms");
const manifestPath = path.join(root, "src", "content", "algorithm_page_modules.js");
const marker = "AUTO-GENERATED ALGORITHM PAGE";

function findMetaFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const current = path.join(dir, entry.name);
    if (entry.isDirectory()) return findMetaFiles(current);
    return entry.name === "meta.json" ? [current] : [];
  });
}

function toPosix(value) {
  return value.split(path.sep).join("/");
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
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

function generatedOrMissing(filePath) {
  if (!existsSync(filePath)) return true;
  return readFileSync(filePath, "utf8").includes(marker);
}

function writeGenerated(filePath, value) {
  if (!generatedOrMissing(filePath)) return false;
  writeFileSync(filePath, value, "utf8");
  return true;
}

function createPageData(algorithm, relDir) {
  const visualizerName = algorithm.visualizerType.replaceAll("-", " ");
  return {
    id: algorithm.id,
    title: algorithm.title,
    category: algorithm.category,
    route: algorithm.route,
    phase: algorithm.phase,
    priority: algorithm.priority,
    visualizerType: algorithm.visualizerType,
    icon: iconForAlgorithm(algorithm),
    codePath: `./src/algorithms/${relDir}/code/solution.js`,
    codeFilename: "solution.js",
    meaning: `${algorithm.title} is a ${algorithm.category} technique taught with a ${visualizerName} dry run.`,
    problem: `It helps you recognize and solve the ${algorithm.title} pattern without mixing it with other algorithms.`,
    realLifeExample: `Think of this page as the isolated practice bench for ${algorithm.title}: inputs come in, key state changes are tracked, and the result is produced step by step.`,
    whenToUse: `Use ${algorithm.title} when a problem statement matches the ${algorithm.category} pattern and the planned visualization is ${visualizerName}.`,
    memoryTrick: `${algorithm.title}: name the state, update it once per step, and check the stop condition before returning.`,
    visualizerCaption: `A compact ${visualizerName} walkthrough for ${algorithm.title}.`,
    logicSteps: [
      {
        title: "Identify the input shape",
        text: `Read the problem and confirm it belongs to the ${algorithm.category} family.`,
      },
      {
        title: "Initialize the working state",
        text: "Create the variables or data structures that carry progress through the algorithm.",
      },
      {
        title: "Apply the transition",
        text: `Move through the input using the ${visualizerName} idea and update only the relevant state.`,
      },
      {
        title: "Return the answer",
        text: "Stop when the condition is satisfied and return the final value from the tracked state.",
      },
    ],
    variables: [
      {
        name: "input",
        purpose: "The data structure or values the algorithm receives.",
      },
      {
        name: "state",
        purpose: "The changing information that represents progress during the dry run.",
      },
      {
        name: "answer",
        purpose: "The value produced after the final transition or check.",
      },
      {
        name: "condition",
        purpose: "The rule that decides whether the algorithm should continue, branch, or stop.",
      },
    ],
    dryRun: [
      {
        label: "Input",
        title: "Read the problem data",
        note: `Start by identifying what ${algorithm.title} receives and what output is expected.`,
        activeLine: 1,
      },
      {
        label: "State",
        title: "Prepare working variables",
        note: "Set up counters, pointers, containers, or tables before the main transition begins.",
        activeLine: 4,
      },
      {
        label: "Transition",
        title: "Move one step forward",
        note: `Apply the core ${visualizerName} transition and keep unrelated state untouched.`,
        activeLine: 6,
      },
      {
        label: "Answer",
        title: "Finish and return",
        note: "Use the final tracked state to produce the result.",
        activeLine: 8,
      },
    ],
    complexity: {
      time: "Fill this with the finalized implementation's time complexity.",
      space: "Fill this with the finalized implementation's auxiliary space complexity.",
    },
    quiz: {
      question: `What is the safest first step when applying ${algorithm.title}?`,
      options: [
        {
          key: "A",
          text: "Identify the input shape and the state the algorithm needs to track.",
          correct: true,
        },
        {
          key: "B",
          text: "Start coding before naming the variables or stop condition.",
          correct: false,
        },
        {
          key: "C",
          text: "Reuse another algorithm's visualizer state without checking the pattern.",
          correct: false,
        },
      ],
      correctText: "Correct. Naming the input and state first keeps this algorithm separate from the others.",
      incorrectText: "Not quite. Keep each algorithm isolated by identifying its own input shape, state, and stop condition first.",
    },
  };
}

function dataModule(algorithmPage) {
  return `// ${marker}\n// Edit this file to customize this algorithm page without touching app.js.\n\nexport const algorithmPage = ${JSON.stringify(algorithmPage, null, 2)};\n`;
}

function pageModule() {
  return `// ${marker}\nimport { createGenericAlgorithmPage } from "../../_shared/page-factory.js";\nimport { algorithmPage } from "./data.js";\n\nexport const stylePath = \`./src/algorithms/\${algorithmPage.categorySlug}/\${algorithmPage.algorithmSlug}/styles.css\`;\n\nexport function createAlgorithmPage(deps) {\n  return createGenericAlgorithmPage(deps, algorithmPage);\n}\n`;
}

function stylesModule() {
  return `/* ${marker} */\n@import "../../_shared/page.css";\n`;
}

const pages = findMetaFiles(algorithmsRoot)
  .map((metaPath) => {
    const algorithm = JSON.parse(readFileSync(metaPath, "utf8"));
    const dir = path.dirname(metaPath);
    const relDir = toPosix(path.relative(algorithmsRoot, dir));
    const [categorySlug, algorithmSlug] = relDir.split("/");
    const algorithmPage = {
      ...createPageData(algorithm, relDir),
      categorySlug,
      algorithmSlug,
    };

    writeGenerated(path.join(dir, "data.js"), dataModule(algorithmPage));
    writeGenerated(path.join(dir, "page.js"), pageModule());
    writeGenerated(path.join(dir, "styles.css"), stylesModule());

    return {
      id: algorithm.id,
      importPath: `../algorithms/${relDir}/page.js`,
    };
  })
  .sort((a, b) => a.id.localeCompare(b.id));

const manifest = [
  `// ${marker}`,
  "export const pageLoaders = {",
  ...pages.map((page) => `  ${JSON.stringify(page.id)}: () => import(${JSON.stringify(page.importPath)}),`),
  "};",
  "",
].join("\n");

writeFileSync(manifestPath, manifest, "utf8");
console.log(`Generated ${pages.length} algorithm page modules.`);
