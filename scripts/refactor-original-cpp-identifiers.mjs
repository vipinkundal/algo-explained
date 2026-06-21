import fs from "node:fs/promises";
import path from "node:path";
import { execFileSync } from "node:child_process";

const ROOT = path.resolve("src/algorithms/data-structures");
const SOURCE_RE = /^original\.(c|cpp|h)$/;

const KEYWORDS = new Set(`
alignas alignof and and_eq asm auto bitand bitor bool break case catch char char16_t char32_t class compl const constexpr const_cast continue
decltype default delete do double dynamic_cast else enum explicit export extern false float for friend goto if inline int long mutable namespace new noexcept not not_eq
nullptr operator or or_eq private protected public register reinterpret_cast return short signed sizeof static static_assert static_cast struct switch template this
thread_local throw true try typedef typeid typename union unsigned using virtual void volatile wchar_t while xor xor_eq
include define ifdef ifndef endif pragma elif
`.trim().split(/\s+/));

const RESERVED = new Set(`
main std cout cin cerr clog endl ends flush ws dec hex oct fixed scientific setprecision printf scanf malloc calloc realloc free new delete sizeof NULL EOF FILE
string vector queue stack map set unordered_map unordered_set priority_queue pair
iostream cstdio cstdlib cstring bits
`.trim().split(/\s+/));

const PREFERRED_NAMES = new Map(Object.entries({
  i: "scanIndex",
  j: "writeIndex",
  k: "probeIndex",
  l: "leftIndex",
  r: "rightIndex",
  c: "columnIndex",
  m: "columnCount",
  n: "itemCount",
  x: "inputValue",
  y: "compareValue",
  z: "resultValue",
  a: "primaryValue",
  b: "secondaryValue",
  t: "swapValue",
  ch: "currentChar",
  temp: "temporaryValue",
  helper: "reverseBuffer",
  word: "sourceText",
  word2: "inPlaceText",
  arr: "items",
  array: "items",
  a1: "firstItems",
  a2: "secondItems",
  a3: "mergedItems",
  size: "itemCapacity",
  length: "textLength",
  len: "textLength",
  index: "targetIndex",
  pos: "targetPosition",
  key: "searchKey",
  value: "storedValue",
  data: "nodeValue",
  next: "nextLink",
  prev: "previousLink",
  first: "firstNode",
  last: "lastNode",
  head: "listHead",
  tail: "listTail",
  top: "stackTop",
  front: "queueFront",
  rear: "queueRear",
  root: "treeRoot",
  left: "leftChild",
  right: "rightChild",
  lchild: "leftChild",
  rchild: "rightChild",
  lChild: "leftChild",
  rChild: "rightChild",
  height: "nodeHeight",
  lh: "leftHeight",
  rh: "rightHeight",
  row: "rowIndex",
  col: "columnIndex",
  rows: "rowCount",
  cols: "columnCount",
  p: "currentNode",
  q: "nextNode",
  s: "workingText",
  str: "workingText",
  text: "workingText",
  A: "firstItems",
  B: "secondItems",
  C: "thirdItems",
  D: "spareItems",
  Q: "queueStorage",
  S: "stackStorage",
  H: "hashStorage",
  Res: "resultText",
}));

const STRUCTURE_NAMES = new Map(Object.entries({
  Array: "ArrayModel",
  Bst: "BstModel",
  BST: "BstModel",
  Element: "Entry",
  Heap: "HeapModel",
  Matrix: "MatrixModel",
  Node: "Node",
  Polynomial: "PolynomialModel",
  Queue: "QueueModel",
  Rectangle: "RectangleModel",
  Sparse: "SparseModel",
  Stack: "StackModel",
  Term: "PolynomialTerm",
  Tree: "TreeModel",
}));

async function walk(dir, out = []) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const filePath = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(filePath, out);
    else if (SOURCE_RE.test(entry.name)) out.push(filePath);
  }
  return out;
}

async function readBaselineSource(file) {
  const relativePath = path.relative(process.cwd(), file).replaceAll(path.sep, "/");
  try {
    return execFileSync("git", ["show", `HEAD:${relativePath}`], {
      cwd: process.cwd(),
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });
  } catch {
    return fs.readFile(file, "utf8");
  }
}

function splitSource(source) {
  const segments = [];
  let index = 0;
  let codeStart = 0;
  let atLineStart = true;

  const pushCode = (end) => {
    if (end > codeStart) segments.push({ kind: "code", text: source.slice(codeStart, end) });
  };

  while (index < source.length) {
    const char = source[index];
    const next = source[index + 1];

    if (atLineStart && /[ \t]/.test(char)) {
      index += 1;
      continue;
    }

    if (atLineStart && char === "#") {
      pushCode(index);
      const start = index;
      while (index < source.length && source[index] !== "\n") index += 1;
      if (index < source.length) index += 1;
      segments.push({ kind: "other", text: source.slice(start, index) });
      codeStart = index;
      atLineStart = true;
      continue;
    }

    atLineStart = char === "\n";

    if (char === "/" && next === "/") {
      pushCode(index);
      const start = index;
      index += 2;
      while (index < source.length && source[index] !== "\n") index += 1;
      segments.push({ kind: "other", text: source.slice(start, index) });
      codeStart = index;
      continue;
    }

    if (char === "/" && next === "*") {
      pushCode(index);
      const start = index;
      index += 2;
      while (index < source.length && !(source[index] === "*" && source[index + 1] === "/")) index += 1;
      index = Math.min(source.length, index + 2);
      segments.push({ kind: "other", text: source.slice(start, index) });
      codeStart = index;
      continue;
    }

    if (char === "\"" || char === "'") {
      pushCode(index);
      const quote = char;
      const start = index;
      index += 1;
      while (index < source.length) {
        if (source[index] === "\\") {
          index += 2;
          continue;
        }
        if (source[index] === quote) {
          index += 1;
          break;
        }
        index += 1;
      }
      segments.push({ kind: "other", text: source.slice(start, index) });
      codeStart = index;
      continue;
    }

    index += 1;
  }

  pushCode(source.length);
  return segments;
}

function collectTypeIdentifiers(segments) {
  const names = new Set();

  for (const segment of segments) {
    if (segment.kind !== "code") continue;
    const text = segment.text;
    const declarationRe = /\b(?:struct|class)\s+([A-Za-z_][A-Za-z0-9_]*)\b/g;
    let match;
    while ((match = declarationRe.exec(text))) {
      const name = match[1];
      if (!KEYWORDS.has(name) && !RESERVED.has(name)) names.add(name);
    }
  }

  return [...names].filter((name) => {
    if (/^_[A-Z_]/.test(name)) return false;
    return /^[A-Z][A-Za-z0-9_]*$/.test(name) || STRUCTURE_NAMES.has(name);
  });
}

function collectIdentifiers(segments, typeNames = new Set()) {
  const stats = new Map();

  const touch = (name, key) => {
    const current = stats.get(name) || { total: 0, callLike: 0 };
    current.total += 1;
    if (key === "callLike") current.callLike += 1;
    stats.set(name, current);
  };

  for (const segment of segments) {
    if (segment.kind !== "code") continue;
    const text = segment.text;
    const identifierRe = /\b[A-Za-z_][A-Za-z0-9_]*\b/g;
    let match;
    while ((match = identifierRe.exec(text))) {
      const name = match[0];
      if (KEYWORDS.has(name) || RESERVED.has(name)) continue;
      if (typeNames.has(name)) continue;
      const before = text.slice(Math.max(0, match.index - 4), match.index);
      const after = text.slice(match.index + name.length);
      if (before.endsWith("::")) continue;
      if (/^\s*\(/.test(after)) {
        touch(name, "callLike");
        continue;
      }
      touch(name, "identifier");
    }
  }

  const names = [...stats.entries()]
    .filter(([, value]) => value.callLike < value.total)
    .map(([name]) => name);

  return [...names].filter((name) => {
    if (/^[A-Z][A-Za-z0-9_]*$/.test(name) && !PREFERRED_NAMES.has(name)) return false;
    if (/^_[A-Z_]/.test(name)) return false;
    return true;
  });
}

function toPascal(value) {
  return String(value)
    .replace(/^_+/, "")
    .replace(/[^A-Za-z0-9]+([A-Za-z0-9])/g, (_, letter) => letter.toUpperCase())
    .replace(/^[A-Z]/, (letter) => letter.toLowerCase())
    .replace(/^[0-9]+/, "");
}

function toUpperPascal(value) {
  const pascal = toPascal(value);
  return pascal.replace(/^[a-z]/, (letter) => letter.toUpperCase());
}

function topicPrefix(filePath) {
  const lesson = path.basename(path.dirname(path.dirname(filePath)));
  const prefix = lesson.split("-").filter(Boolean).slice(0, 2).join("-");
  return toPascal(prefix || "lesson") || "lesson";
}

function stripExistingPrefix(name, prefix) {
  if (name.startsWith(prefix) && name.length > prefix.length && /[A-Z]/.test(name[prefix.length])) {
    const stripped = name.slice(prefix.length);
    return stripped.replace(/^[A-Z]/, (letter) => letter.toLowerCase());
  }
  const upperPrefix = toUpperPascal(prefix);
  if (name.startsWith(upperPrefix) && name.length > upperPrefix.length && /[A-Z]/.test(name[upperPrefix.length])) {
    return name.slice(upperPrefix.length);
  }
  return name;
}

function createTypeRenameMap(names, filePath) {
  const used = new Set([...KEYWORDS, ...RESERVED, ...names]);
  const map = new Map();
  const rawPrefix = topicPrefix(filePath);
  const prefix = toUpperPascal(rawPrefix);

  for (const name of names.sort((a, b) => b.length - a.length)) {
    const normalizedName = stripExistingPrefix(name, rawPrefix);
    const suffix = STRUCTURE_NAMES.get(normalizedName) || toUpperPascal(normalizedName);
    const base = `${prefix}${suffix}`;
    let nextName = base;
    let count = 2;
    while (used.has(nextName) || nextName === name) {
      nextName = `${base}${count}`;
      count += 1;
    }
    used.add(nextName);
    map.set(name, nextName);
  }

  return map;
}

function createRenameMap(names, filePath, reservedNames = new Set()) {
  const used = new Set([...KEYWORDS, ...RESERVED, ...names, ...reservedNames]);
  const map = new Map();
  const prefix = topicPrefix(filePath);

  for (const name of names.sort((a, b) => b.length - a.length)) {
    const normalizedName = stripExistingPrefix(name, prefix);
    let base = PREFERRED_NAMES.get(normalizedName) || PREFERRED_NAMES.get(normalizedName.toLowerCase());
    if (!base) base = `${prefix}${toPascal(normalizedName).replace(/^[a-z]/, (letter) => letter.toUpperCase())}`;
    if (!base || base === name) base = `${prefix}State`;

    let nextName = base;
    let suffix = 2;
    while (used.has(nextName) || nextName === name) {
      nextName = `${base}${suffix}`;
      suffix += 1;
    }
    used.add(nextName);
    map.set(name, nextName);
  }

  return map;
}

function replaceCodeIdentifiers(text, renameMap) {
  return text.replace(/\b[A-Za-z_][A-Za-z0-9_]*\b/g, (name) => renameMap.get(name) || name);
}

const files = await walk(ROOT);
let updated = 0;
let renamed = 0;
let typeRenamed = 0;

for (const file of files) {
  const source = await readBaselineSource(file);
  const segments = splitSource(source);
  const typeNames = collectTypeIdentifiers(segments);
  const typeRenameMap = createTypeRenameMap(typeNames, file);
  const names = collectIdentifiers(segments, new Set(typeNames));
  const renameMap = createRenameMap(names, file, new Set(typeRenameMap.values()));
  const combinedRenameMap = new Map([...typeRenameMap, ...renameMap]);
  if (!combinedRenameMap.size) continue;

  const nextSource = segments
    .map((segment) => segment.kind === "code" ? replaceCodeIdentifiers(segment.text, combinedRenameMap) : segment.text)
    .join("");

  if (nextSource !== source) {
    await fs.writeFile(file, nextSource, "utf8");
    updated += 1;
    renamed += renameMap.size;
    typeRenamed += typeRenameMap.size;
  }
}

console.log(`C/C++ reference files scanned: ${files.length}`);
console.log(`C/C++ reference files updated: ${updated}`);
console.log(`Identifier mappings applied: ${renamed}`);
console.log(`Structure/type mappings applied: ${typeRenamed}`);
