import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";

const modulesPath = path.join("src", "content", "algorithm_page_modules.js");
const source = readFileSync(modulesPath, "utf8");
const entries = [...source.matchAll(/"([^"]+)": \(\) => import\("([^"]+)"\)/g)]
  .map((match) => ({
    id: match[1],
    importPath: match[2],
  }));

const failures = [];
const registeredDataPaths = new Set();

function findDataFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const current = path.join(dir, entry.name);
    if (entry.isDirectory()) return findDataFiles(current);
    return entry.name === "data.js" ? [path.normalize(current)] : [];
  });
}

for (const entry of entries) {
  const pagePath = path.normalize(path.join("src", "content", entry.importPath));
  if (!existsSync(pagePath)) {
    failures.push(`${entry.id}: missing page module ${pagePath}`);
    continue;
  }

  const pageSource = readFileSync(pagePath, "utf8");
  const dataPath = path.join(path.dirname(pagePath), "data.js");
  registeredDataPaths.add(path.normalize(dataPath));
  const importsLocalData = /import\s+\{\s*algorithmPage\s*\}\s+from\s+["']\.\/data\.js["']/.test(pageSource);
  const usesImportedData = /algorithmPage/.test(pageSource);
  const exportsPageFactory = /createAlgorithmPage/.test(pageSource);

  if (!existsSync(dataPath)) failures.push(`${entry.id}: missing data file ${dataPath}`);
  if (!importsLocalData) failures.push(`${entry.id}: page module does not import ./data.js`);
  if (!usesImportedData) failures.push(`${entry.id}: page module does not reference algorithmPage`);
  if (!exportsPageFactory) failures.push(`${entry.id}: page module does not export createAlgorithmPage`);
}

const allDataFiles = findDataFiles(path.join("src", "algorithms"));
for (const dataFile of allDataFiles) {
  if (!registeredDataPaths.has(path.normalize(dataFile))) {
    failures.push(`unregistered data file: ${dataFile}`);
  }
}

console.log(`Registered pages checked: ${entries.length}`);
console.log(`Data files found: ${allDataFiles.length}`);
console.log(`Failures: ${failures.length}`);

if (failures.length) {
  console.log(failures.join("\n"));
  process.exit(1);
}
