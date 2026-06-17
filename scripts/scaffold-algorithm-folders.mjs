import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const indexPath = path.join(root, "src", "content", "algorithm_pages_index.json");
const outRoot = path.join(root, "src", "algorithms");
const index = JSON.parse(readFileSync(indexPath, "utf8"));

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function titleCaseSlug(slug) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(" ");
}

function writeText(filePath, value) {
  writeFileSync(filePath, value, "utf8");
}

function jsStarter(algorithm) {
  const functionName = slugify(algorithm.id).replace(/-([a-z0-9])/g, (_, char) => char.toUpperCase());
  return `// ${algorithm.title}\n// Route: ${algorithm.route}\n// Visualizer: ${algorithm.visualizerType}\n\nexport function ${functionName}(input) {\n  // TODO: Implement ${algorithm.title}.\n  return input;\n}\n`;
}

function cppStarter(algorithm) {
  return `// ${algorithm.title}\n// Route: ${algorithm.route}\n// Visualizer: ${algorithm.visualizerType}\n\n#include <bits/stdc++.h>\nusing namespace std;\n\n// TODO: Implement ${algorithm.title}.\nint main() {\n    return 0;\n}\n`;
}

function readme(algorithm) {
  return `# ${algorithm.title}\n\n- Category: ${algorithm.category}\n- Phase: ${algorithm.phase}\n- Priority: ${algorithm.priority}\n- Route: \`${algorithm.route}\`\n- Visualizer: \`${algorithm.visualizerType}\`\n\n## Learning Page Checklist\n\n- [ ] One-line meaning\n- [ ] Problem this algorithm solves\n- [ ] Real-life example\n- [ ] When to use it\n- [ ] Variables and why each one exists\n- [ ] Step-by-step logic in plain English\n- [ ] Visual dry run\n- [ ] Clickable code with line-by-line explanation\n- [ ] Common mistakes\n- [ ] Memory trick\n- [ ] Time and space complexity\n- [ ] Interview pattern recognition\n- [ ] Practice problems\n- [ ] Mini quiz\n`;
}

mkdirSync(outRoot, { recursive: true });

const byCategory = new Map();
for (const algorithm of index.algorithms) {
  const categorySlug = slugify(algorithm.category);
  const algorithmSlug = slugify(algorithm.id);
  const algorithmDir = path.join(outRoot, categorySlug, algorithmSlug);
  const codeDir = path.join(algorithmDir, "code");
  mkdirSync(codeDir, { recursive: true });

  writeText(path.join(algorithmDir, "README.md"), readme(algorithm));
  writeText(path.join(algorithmDir, "meta.json"), `${JSON.stringify(algorithm, null, 2)}\n`);
  writeText(path.join(codeDir, "solution.js"), jsStarter(algorithm));
  writeText(path.join(codeDir, "solution.cpp"), cppStarter(algorithm));

  if (!byCategory.has(categorySlug)) {
    byCategory.set(categorySlug, {
      title: algorithm.category,
      algorithms: [],
    });
  }
  byCategory.get(categorySlug).algorithms.push(algorithm);
}

for (const [categorySlug, category] of byCategory) {
  const categoryDir = path.join(outRoot, categorySlug);
  const lines = [
    `# ${category.title}`,
    "",
    "Algorithms in this track:",
    "",
    ...category.algorithms.map(
      (algorithm) => `- [${algorithm.title}](./${slugify(algorithm.id)}) - phase ${algorithm.phase}, ${algorithm.priority} priority`,
    ),
    "",
  ];
  writeText(path.join(categoryDir, "README.md"), lines.join("\n"));
}

const rootReadme = [
  "# Algorithm Source Folders",
  "",
  "This directory mirrors `src/content/algorithm_pages_index.json`.",
  "",
  "Each algorithm folder contains:",
  "",
  "- `README.md` learning checklist",
  "- `meta.json` route/category/phase/visualizer metadata",
  "- `code/solution.js` frontend implementation starter",
  "- `code/solution.cpp` teaching/reference implementation starter",
  "",
  ...Array.from(byCategory.entries()).map(
    ([categorySlug, category]) => `- [${category.title}](./${categorySlug})`,
  ),
  "",
];
writeText(path.join(outRoot, "README.md"), rootReadme.join("\n"));

console.log(`Created ${index.algorithms.length} algorithm folders in ${outRoot}`);
