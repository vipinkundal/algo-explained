import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const stringsRoot = path.join(root, "src", "algorithms", "strings");

function readPageData(filePath) {
  const source = readFileSync(filePath, "utf8");
  const json = source.match(/export const algorithmPage = ([\s\S]*);\s*$/)?.[1];
  if (!json) throw new Error(`Could not parse ${filePath}`);
  return JSON.parse(json);
}

function writePageData(filePath, data) {
  writeFileSync(
    filePath,
    `// AUTO-GENERATED ALGORITHM PAGE\n// Edit this file to customize this algorithm page without touching app.js.\n\nexport const algorithmPage = ${JSON.stringify(data, null, 2)};\n`,
    "utf8",
  );
}

function writeSolution(slug, filename, code) {
  writeFileSync(path.join(stringsRoot, slug, "code", filename), `${code.trim()}\n`, "utf8");
}

function stringAnimation(spec) {
  return {
    type: "string-flow",
    static: true,
    title: `${spec.title} trace`,
    ruleLabel: spec.animationRuleLabel || "String invariant",
    rule: spec.transitionSummary,
    text: spec.animationText,
    pattern: spec.animationPattern,
    steps: spec.animationSteps.map((step) => ({
      phase: step.phase,
      title: step.title,
      note: step.note,
      ruleLabel: spec.animationRuleLabel || "String invariant",
      rule: step.rule || spec.transitionSummary,
      activeRange: step.activeRange || [],
      matchedRange: step.matchedRange || [],
    })),
  };
}

function patchFor(spec) {
  return {
    meaning: `${spec.title} is taught with its own string state, transition, code trace, and stopping rule.`,
    problem: spec.problem,
    concept: spec.concept,
    logicSummary: spec.logicSummary,
    transitionSummary: spec.transitionSummary,
    codeInsight: spec.codeInsight,
    realLifeExample: spec.realLifeExample,
    whenToUse: spec.whenToUse,
    memoryTrick: spec.memoryTrick,
    visualizerCaption: spec.visualizerCaption,
    logicSteps: spec.logicSteps,
    variables: spec.variables,
    dryRun: spec.dryRun,
    runnerInput: spec.runnerInput,
    animation: stringAnimation(spec),
    complexity: spec.complexity,
    quiz: {
      question: `Which state keeps ${spec.title} correct?`,
      options: [
        { key: "A", text: spec.correctOption, correct: true },
        { key: "B", text: "Reuse another string algorithm's state names without matching its invariant.", correct: false },
        { key: "C", text: "Advance indices without the mismatch, hash, frequency, trie, or radius rule.", correct: false },
      ],
      correctText: `Correct. ${spec.title} works because the page state follows that exact string invariant.`,
      incorrectText: `Not quite. ${spec.title} needs its own string state and stop condition.`,
    },
  };
}

const specs = [
  {
    slug: "kmp",
    title: "KMP Algorithm",
    problem: "Find every occurrence of a pattern in text without rechecking characters that the prefix table already explains.",
    concept: "KMP preprocesses the pattern into an LPS table. On mismatch, the pattern index falls back to the longest proper prefix that is also a suffix.",
    logicSummary: "Build the LPS table for the pattern, scan text with indices i and j, and use LPS fallback instead of moving i backward.",
    transitionSummary: "A character match advances i and j; a mismatch with j > 0 sets j = lps[j - 1]; a mismatch at j = 0 advances i.",
    codeInsight: "The text index never moves backward. All reused work is encoded in the pattern's LPS fallback table.",
    realLifeExample: "Use KMP for search boxes, command matching, DNA motif search, or any exact substring search that must avoid repeated scans.",
    whenToUse: "Use KMP when many repeated prefixes in the pattern make naive backtracking expensive.",
    memoryTrick: "KMP keeps text moving and lets the pattern jump.",
    visualizerCaption: "The trace shows LPS construction and the text scan using fallback jumps.",
    logicSteps: [
      { title: "Build LPS table", text: "For each pattern index, store the longest reusable prefix length." },
      { title: "Compare text and pattern", text: "Move i and j while characters match." },
      { title: "Fallback on mismatch", text: "Use lps[j - 1] so the text index does not rewind." },
      { title: "Record match", text: "When j reaches pattern length, save i - j and fallback again for overlaps." },
    ],
    variables: [
      { name: "text, pattern", purpose: "The search text and exact pattern to locate." },
      { name: "lps", purpose: "Pattern fallback table for matched prefix lengths." },
      { name: "i, j", purpose: "Text index and pattern index during scan." },
      { name: "matches", purpose: "Starting indices where the full pattern is found." },
    ],
    dryRun: [
      { label: "LPS", title: "Build fallback table for ababc", note: "The prefix ab reappears before the final c, so lps ends as [0,0,1,2,0].", activeLine: 2, codeInsight: "The preprocessing loop updates only pattern state." },
      { label: "Scan", title: "Match abab in text", note: "i and j advance together while text characters match the pattern prefix.", activeLine: 12, codeInsight: "Text progress is never undone." },
      { label: "Fallback", title: "Mismatch at c", note: "j falls from 4 to lps[3] = 2 instead of restarting from zero.", activeLine: 19, codeInsight: "The fallback reuses the already-matched suffix." },
      { label: "Match", title: "Record index 0", note: "When j reaches pattern length, i - j is the full match start.", activeLine: 16, codeInsight: "After recording, KMP falls back again so the scan can find the later match at index 5." },
    ],
    runnerInput: ["ababcababc", "ababc"],
    animationText: "ababcababc",
    animationPattern: "ababc",
    animationSteps: [
      { phase: "LPS build", title: "Create [0,0,1,2,0]", note: "The pattern remembers reusable prefix lengths.", activeRange: [0, 4], rule: "lps[index] stores how much of the pattern can survive a mismatch." },
      { phase: "scan i=0..3", title: "Match abab", note: "Text and pattern move together during successful comparisons.", activeRange: [0, 3] },
      { phase: "fallback", title: "Mismatch uses lps[3]", note: "The pattern index jumps to 2; the text index stays in place.", activeRange: [2, 4] },
      { phase: "match at 0", title: "Full pattern found", note: "The window from 0 through 4 equals ababc.", activeRange: [0, 4], matchedRange: [0, 4] },
    ],
    complexity: { time: "O(n + m), where n is text length and m is pattern length.", space: "O(m) for the LPS table." },
    correctOption: "Track the LPS table plus text/pattern indices, and use LPS for every mismatch fallback.",
    js: `export function kmp(text, pattern) {
  if (pattern.length === 0) return Array.from({ length: text.length + 1 }, (_, index) => index);
  const lps = Array(pattern.length).fill(0);
  for (let index = 1, length = 0; index < pattern.length;) {
    if (pattern[index] === pattern[length]) lps[index++] = ++length;
    else if (length > 0) length = lps[length - 1];
    else lps[index++] = 0;
  }

  const matches = [];
  for (let i = 0, j = 0; i < text.length;) {
    if (text[i] === pattern[j]) {
      i += 1;
      j += 1;
      if (j === pattern.length) {
        matches.push(i - j);
        j = lps[j - 1];
      }
    } else if (j > 0) j = lps[j - 1];
    else i += 1;
  }
  return matches;
}`,
    cpp: `#include <string>
#include <vector>
using namespace std;

vector<int> kmp(const string& text, const string& pattern) {
    if (pattern.empty()) {
        vector<int> all;
        for (int index = 0; index <= static_cast<int>(text.size()); index += 1) all.push_back(index);
        return all;
    }
    vector<int> lps(pattern.size(), 0);
    for (int index = 1, length = 0; index < static_cast<int>(pattern.size());) {
        if (pattern[index] == pattern[length]) lps[index++] = ++length;
        else if (length > 0) length = lps[length - 1];
        else lps[index++] = 0;
    }
    vector<int> matches;
    for (int i = 0, j = 0; i < static_cast<int>(text.size());) {
        if (text[i] == pattern[j]) {
            i += 1;
            j += 1;
            if (j == static_cast<int>(pattern.size())) {
                matches.push_back(i - j);
                j = lps[j - 1];
            }
        } else if (j > 0) j = lps[j - 1];
        else i += 1;
    }
    return matches;
}`,
  },
  {
    slug: "trie-search",
    title: "Trie-Based Search",
    problem: "Store words in a prefix tree and answer whether a query word exists exactly.",
    concept: "A trie shares common prefixes. Each character chooses one child edge, and the terminal marker decides whether the path is a complete word.",
    logicSummary: "Insert each word character by character, mark terminal nodes, then walk the query path from the root.",
    transitionSummary: "Every query character must have a child edge; missing edge returns false, and the final node must be terminal.",
    codeInsight: "Prefix existence is not the same as word existence. The terminal marker is what makes cart true while car can be checked separately.",
    realLifeExample: "Use tries for autocomplete, dictionary lookup, prefix filters, and routing by character tokens.",
    whenToUse: "Use trie search when many words share prefixes or many repeated prefix queries are expected.",
    memoryTrick: "Characters are edges; terminal means complete word.",
    visualizerCaption: "The trace follows the query through the prefix tree and checks the terminal marker.",
    logicSteps: [
      { title: "Create root", text: "Start with an empty object representing the root node." },
      { title: "Insert words", text: "Create child nodes for each character along every word path." },
      { title: "Walk query", text: "Follow the query characters one by one." },
      { title: "Check terminal", text: "Return true only if the final node is marked as a complete word." },
    ],
    variables: [
      { name: "words", purpose: "Dictionary words inserted into the trie." },
      { name: "root", purpose: "Starting node of the prefix tree." },
      { name: "node", purpose: "Current node while inserting or searching." },
      { name: "$", purpose: "Terminal marker for complete words." },
    ],
    dryRun: [
      { label: "Insert", title: "Insert car, cart, dog", note: "car and cart share c -> a -> r before cart adds t.", activeLine: 4, codeInsight: "The insertion loop creates only missing child nodes." },
      { label: "Query c", title: "Follow c", note: "The root has a c child, so search can continue.", activeLine: 11, codeInsight: "A missing child would return false immediately." },
      { label: "Query cart", title: "Finish path", note: "c -> a -> r -> t exists.", activeLine: 12, codeInsight: "node moves down one trie edge per character." },
      { label: "Terminal", title: "Check word marker", note: "The final node has $, so cart is a complete stored word.", activeLine: 14, codeInsight: "The terminal marker distinguishes words from prefixes." },
    ],
    runnerInput: [["car", "cart", "dog"], "cart"],
    animationText: "cart",
    animationPattern: "car, cart, dog",
    animationSteps: [
      { phase: "insert", title: "Build shared prefix", note: "car and cart share c-a-r.", activeRange: [0, 2], rule: "Shared prefixes reuse the same trie nodes." },
      { phase: "c", title: "Root has c", note: "The first query edge exists.", activeRange: [0, 0] },
      { phase: "car", title: "Continue through a and r", note: "The path remains valid.", activeRange: [0, 2] },
      { phase: "cart", title: "Terminal node found", note: "The t node is marked as a full word.", activeRange: [0, 3], matchedRange: [0, 3] },
    ],
    complexity: { time: "O(total inserted characters + query length).", space: "O(total inserted characters)." },
    correctOption: "Track trie nodes and the terminal marker, not just whether the prefix path exists.",
    js: `export function trieSearch(words, query) {
  const root = {};
  for (const word of words) {
    let node = root;
    for (const char of word) node = node[char] ||= {};
    node.$ = true;
  }

  let node = root;
  for (const char of query) {
    if (!node[char]) return false;
    node = node[char];
  }
  return Boolean(node.$);
}`,
    cpp: `#include <string>
#include <unordered_map>
#include <vector>
using namespace std;

struct TrieNode {
    unordered_map<char, TrieNode*> next;
    bool terminal = false;
};

bool trieSearch(const vector<string>& words, const string& query) {
    TrieNode root;
    for (const string& word : words) {
        TrieNode* node = &root;
        for (char ch : word) {
            if (!node->next[ch]) node->next[ch] = new TrieNode();
            node = node->next[ch];
        }
        node->terminal = true;
    }
    TrieNode* node = &root;
    for (char ch : query) {
        if (!node->next.count(ch)) return false;
        node = node->next[ch];
    }
    return node->terminal;
}`,
  },
  {
    slug: "anagram-detection",
    title: "Anagram Detection",
    problem: "Decide whether two strings contain the same characters with the same frequencies.",
    concept: "Anagram detection compares frequency balance, not character order.",
    logicSummary: "Reject unequal lengths, count characters in the first string, subtract characters from the second string, and fail if any count would go negative.",
    transitionSummary: "Each character in the second string consumes one previously counted character from the first string.",
    codeInsight: "The length check is a real stop condition: two unequal-length strings cannot have identical character counts.",
    realLifeExample: "Use it for word games, duplicate normalized names, and grouping words by character inventory.",
    whenToUse: "Use frequency-based anagram detection when order is irrelevant but counts must match exactly.",
    memoryTrick: "Same letters, same counts, any order.",
    visualizerCaption: "The trace balances counts from the first word against the second word.",
    logicSteps: [
      { title: "Compare lengths", text: "Unequal lengths return false immediately." },
      { title: "Count first string", text: "Add one count for each character." },
      { title: "Subtract second string", text: "Consume one count for each character in the second word." },
      { title: "Return balanced", text: "If no count is missing, the strings are anagrams." },
    ],
    variables: [
      { name: "first, second", purpose: "Strings being compared." },
      { name: "counts", purpose: "Remaining characters from first after subtraction." },
      { name: "char", purpose: "Current character being counted or consumed." },
      { name: "balanced counts", purpose: "Condition proving both strings have equal character inventory." },
    ],
    dryRun: [
      { label: "Length", title: "listen and silent both length 6", note: "The algorithm can continue because lengths match.", activeLine: 2, codeInsight: "Unequal length would return before counting." },
      { label: "Count", title: "Count listen", note: "counts has l, i, s, t, e, n each once.", activeLine: 4, codeInsight: "The first loop builds available inventory." },
      { label: "Consume", title: "Read silent", note: "Each second-string character removes one matching count.", activeLine: 6, codeInsight: "A missing count proves not an anagram." },
      { label: "True", title: "All counts balanced", note: "No character was missing, so return true.", activeLine: 10, codeInsight: "The method does not need to sort either string." },
    ],
    runnerInput: ["listen", "silent"],
    animationText: "listen|silent",
    animationPattern: "same frequency",
    animationSteps: [
      { phase: "length", title: "Lengths match", note: "Both words have six characters.", activeRange: [0, 5] },
      { phase: "count", title: "Count listen", note: "Build inventory from the first word.", activeRange: [0, 5] },
      { phase: "consume", title: "Consume silent", note: "Every character in silent finds a count.", activeRange: [7, 12] },
      { phase: "balanced", title: "Anagram confirmed", note: "The frequency inventory is fully balanced.", activeRange: [0, 12], matchedRange: [0, 12] },
    ],
    complexity: { time: "O(n).", space: "O(k), where k is the number of distinct characters." },
    correctOption: "Track frequency counts and consume exactly one count for every character in the second string.",
    js: `export function anagramDetection(first, second) {
  if (first.length !== second.length) return false;
  const counts = new Map();
  for (const char of first) counts.set(char, (counts.get(char) || 0) + 1);
  for (const char of second) {
    const remaining = counts.get(char) || 0;
    if (remaining === 0) return false;
    counts.set(char, remaining - 1);
  }
  return true;
}`,
    cpp: `#include <string>
#include <unordered_map>
using namespace std;

bool anagramDetection(const string& first, const string& second) {
    if (first.size() != second.size()) return false;
    unordered_map<char, int> counts;
    for (char ch : first) counts[ch] += 1;
    for (char ch : second) {
        if (counts[ch] == 0) return false;
        counts[ch] -= 1;
    }
    return true;
}`,
  },
  {
    slug: "longest-palindromic-substring",
    title: "Longest Palindromic Substring",
    problem: "Return the longest contiguous substring that reads the same forward and backward.",
    concept: "Expanding around each possible center finds every odd and even palindrome without checking every substring separately.",
    logicSummary: "For each index, expand around one-character and two-character centers, then keep the longest valid palindrome.",
    transitionSummary: "A center expands while left and right characters match; the best substring updates after expansion stops.",
    codeInsight: "Both odd and even centers are required, otherwise palindromes like bb would be missed.",
    realLifeExample: "Use it for text analysis, DNA symmetry scans, and interview problems asking for the longest mirrored block.",
    whenToUse: "Use center expansion for simple O(n^2) palindrome search with O(1) extra state.",
    memoryTrick: "Pick a center, grow while both sides mirror.",
    visualizerCaption: "The trace expands candidate centers and locks the best palindrome found so far.",
    logicSteps: [
      { title: "Pick center", text: "Treat each index as an odd center and each gap as an even center." },
      { title: "Expand outward", text: "Move left and right while characters match." },
      { title: "Capture substring", text: "The valid palindrome is text.slice(left + 1, right)." },
      { title: "Keep best", text: "Replace best only when the current palindrome is longer." },
    ],
    variables: [
      { name: "text", purpose: "Input string." },
      { name: "left, right", purpose: "Expanding mirror pointers." },
      { name: "current", purpose: "Palindrome produced by one center expansion." },
      { name: "best", purpose: "Longest palindrome seen so far." },
    ],
    dryRun: [
      { label: "babad", title: "Center at a", note: "Expanding around index 1 yields bab.", activeLine: 12, codeInsight: "Odd centers call expand(index, index)." },
      { label: "Mirror", title: "b equals b", note: "left and right move outward while characters match.", activeLine: 5, codeInsight: "The while condition is the palindrome check." },
      { label: "Best", title: "Store bab", note: "bab is longer than the previous best.", activeLine: 10, codeInsight: "best changes only after a full center expansion." },
      { label: "Even", title: "Check gap centers", note: "The second expand call handles even-length palindromes.", activeLine: 13, codeInsight: "Even centers prevent missing double-letter palindromes." },
    ],
    runnerInput: ["babad"],
    animationText: "babad",
    animationPattern: "expand centers",
    animationSteps: [
      { phase: "center a", title: "Start at index 1", note: "a is the center of a possible odd palindrome.", activeRange: [1, 1] },
      { phase: "expand", title: "b a b matches", note: "Characters at indices 0 and 2 match.", activeRange: [0, 2], matchedRange: [0, 2] },
      { phase: "best bab", title: "Store longest so far", note: "bab becomes best.", activeRange: [0, 2], matchedRange: [0, 2] },
      { phase: "next centers", title: "Continue scanning", note: "Every center is checked for a longer palindrome.", activeRange: [2, 3] },
    ],
    complexity: { time: "O(n^2).", space: "O(1) auxiliary space." },
    correctOption: "Track center expansion pointers and update best only after a valid palindrome is known.",
    js: `export function longestPalindromicSubstring(text) {
  let bestStart = 0;
  let bestLength = 0;

  function expand(left, right) {
    while (left >= 0 && right < text.length && text[left] === text[right]) {
      left -= 1;
      right += 1;
    }
    const length = right - left - 1;
    if (length > bestLength) {
      bestStart = left + 1;
      bestLength = length;
    }
  }

  for (let index = 0; index < text.length; index += 1) {
    expand(index, index);
    expand(index, index + 1);
  }
  return text.slice(bestStart, bestStart + bestLength);
}`,
    cpp: `#include <string>
using namespace std;

string longestPalindromicSubstring(const string& text) {
    int bestStart = 0;
    int bestLength = 0;
    auto expand = [&](int left, int right) {
        while (left >= 0 && right < static_cast<int>(text.size()) && text[left] == text[right]) {
            left -= 1;
            right += 1;
        }
        int length = right - left - 1;
        if (length > bestLength) {
            bestStart = left + 1;
            bestLength = length;
        }
    };
    for (int index = 0; index < static_cast<int>(text.size()); index += 1) {
        expand(index, index);
        expand(index, index + 1);
    }
    return text.substr(bestStart, bestLength);
}`,
  },
  {
    slug: "rabin-karp",
    title: "Rabin-Karp Algorithm",
    problem: "Find pattern matches by comparing rolling hash values before confirming matching text windows.",
    concept: "Rabin-Karp gives every window a hash. Sliding the window updates the hash in O(1), and exact string comparison handles collisions.",
    logicSummary: "Compute the pattern hash and first window hash, slide one character at a time, update the rolling hash, and verify equal hashes.",
    transitionSummary: "Remove the outgoing character contribution, multiply by base, add the incoming character, and normalize by modulus.",
    codeInsight: "Hash equality is only a candidate match. The code still checks text.slice(...) to avoid false positives from collisions.",
    realLifeExample: "Use it for multi-pattern search, plagiarism checks, and fast candidate filtering over long text.",
    whenToUse: "Use Rabin-Karp when rolling hashes can quickly reject most windows.",
    memoryTrick: "Slide the hash, then verify the match.",
    visualizerCaption: "The trace slides a fixed-size window and updates the rolling hash.",
    logicSteps: [
      { title: "Hash pattern", text: "Compute the hash for the exact pattern." },
      { title: "Hash first window", text: "Compute the text hash for the first pattern-sized window." },
      { title: "Slide window", text: "Update hash by removing one char and adding the next." },
      { title: "Verify candidate", text: "When hashes match, compare the actual strings." },
    ],
    variables: [
      { name: "patternHash", purpose: "Hash of the pattern." },
      { name: "windowHash", purpose: "Rolling hash of current text window." },
      { name: "highestPower", purpose: "Contribution multiplier for outgoing character." },
      { name: "matches", purpose: "Verified match indices." },
    ],
    dryRun: [
      { label: "Hash", title: "Hash aba", note: "The pattern hash is computed once.", activeLine: 15, codeInsight: "Initial hashes are built with the same base and modulus." },
      { label: "Window 0", title: "Check abr", note: "The first hash does not match aba.", activeLine: 18, codeInsight: "Non-matching hashes skip exact comparison." },
      { label: "Slide", title: "Move to bra then rac", note: "Outgoing and incoming characters update the rolling hash.", activeLine: 22, codeInsight: "The slide formula avoids rebuilding the hash from scratch." },
      { label: "Verify", title: "Hash match at index 7", note: "The hash matches and exact comparison confirms aba.", activeLine: 19, codeInsight: "Exact comparison protects against collisions." },
    ],
    runnerInput: ["abracadabra", "abra"],
    animationText: "abracadabra",
    animationPattern: "abra",
    animationSteps: [
      { phase: "pattern hash", title: "Hash abra", note: "Create a numeric fingerprint for the pattern.", activeRange: [0, 3] },
      { phase: "window 0", title: "Compare first window", note: "abracadabra starts with abra, so index 0 verifies.", activeRange: [0, 3], matchedRange: [0, 3] },
      { phase: "slide", title: "Update rolling hash", note: "Remove a and add c for the next window.", activeRange: [1, 4] },
      { phase: "window 7", title: "Verify second match", note: "The final window abra also verifies.", activeRange: [7, 10], matchedRange: [7, 10] },
    ],
    complexity: { time: "Average O(n + m), worst-case O(nm) if many hash collisions verify.", space: "O(1) besides matches." },
    correctOption: "Track rolling window hash and verify exact text when hashes match.",
    js: `export function rabinKarp(text, pattern) {
  if (pattern.length === 0) return Array.from({ length: text.length + 1 }, (_, index) => index);
  if (pattern.length > text.length) return [];

  const base = 256;
  const mod = 1_000_000_007;
  let highestPower = 1;
  for (let i = 1; i < pattern.length; i += 1) highestPower = (highestPower * base) % mod;

  let patternHash = 0;
  let windowHash = 0;
  for (let i = 0; i < pattern.length; i += 1) {
    patternHash = (patternHash * base + pattern.charCodeAt(i)) % mod;
    windowHash = (windowHash * base + text.charCodeAt(i)) % mod;
  }

  const matches = [];
  for (let index = 0; index <= text.length - pattern.length; index += 1) {
    if (patternHash === windowHash && text.slice(index, index + pattern.length) === pattern) matches.push(index);
    if (index < text.length - pattern.length) {
      windowHash = (windowHash - text.charCodeAt(index) * highestPower) % mod;
      if (windowHash < 0) windowHash += mod;
      windowHash = (windowHash * base + text.charCodeAt(index + pattern.length)) % mod;
    }
  }
  return matches;
}`,
    cpp: `#include <string>
#include <vector>
using namespace std;

vector<int> rabinKarp(const string& text, const string& pattern) {
    if (pattern.empty()) {
        vector<int> all;
        for (int index = 0; index <= static_cast<int>(text.size()); index += 1) all.push_back(index);
        return all;
    }
    if (pattern.size() > text.size()) return {};
    const long long base = 256;
    const long long mod = 1000000007;
    long long highestPower = 1;
    for (int i = 1; i < static_cast<int>(pattern.size()); i += 1) highestPower = (highestPower * base) % mod;
    long long patternHash = 0;
    long long windowHash = 0;
    for (int i = 0; i < static_cast<int>(pattern.size()); i += 1) {
        patternHash = (patternHash * base + pattern[i]) % mod;
        windowHash = (windowHash * base + text[i]) % mod;
    }
    vector<int> matches;
    for (int index = 0; index <= static_cast<int>(text.size() - pattern.size()); index += 1) {
        if (patternHash == windowHash && text.substr(index, pattern.size()) == pattern) matches.push_back(index);
        if (index < static_cast<int>(text.size() - pattern.size())) {
            windowHash = (windowHash - text[index] * highestPower) % mod;
            if (windowHash < 0) windowHash += mod;
            windowHash = (windowHash * base + text[index + pattern.size()]) % mod;
        }
    }
    return matches;
}`,
  },
  {
    slug: "z-algorithm",
    title: "Z Algorithm",
    problem: "Find pattern matches by computing, for every position, how many characters match the combined string prefix.",
    concept: "The Z-array stores prefix match length at each position. A Z-box [left, right] reuses earlier comparisons inside the current matching window.",
    logicSummary: "Build pattern + sentinel + text, compute Z values with a reusable Z-box, then report text positions whose Z value equals pattern length.",
    transitionSummary: "Inside the Z-box copy the known minimum match; outside or after copying, expand while characters match and update the box.",
    codeInsight: "The sentinel prevents matches from crossing from pattern into text accidentally.",
    realLifeExample: "Use it for exact string matching, prefix analysis, and problems asking for repeated prefix lengths.",
    whenToUse: "Use Z Algorithm when prefix-match lengths for many positions are useful.",
    memoryTrick: "Z[i] says how much prefix starts again at i.",
    visualizerCaption: "The trace shows combined string positions, Z-box reuse, expansion, and match extraction.",
    logicSteps: [
      { title: "Combine strings", text: "Use pattern + sentinel + text." },
      { title: "Reuse Z-box", text: "If index is inside [left, right], copy the known bounded Z value." },
      { title: "Expand match", text: "Compare beyond the box while prefix characters match." },
      { title: "Report matches", text: "A text-side Z value equal to pattern length marks a match." },
    ],
    variables: [
      { name: "combined", purpose: "pattern + sentinel + text." },
      { name: "z", purpose: "Prefix match length for every combined index." },
      { name: "left, right", purpose: "Current Z-box boundaries." },
      { name: "matches", purpose: "Text indices where z[index] equals pattern length." },
    ],
    dryRun: [
      { label: "Combine", title: "aba$ababa", note: "The sentinel separates pattern from text.", activeLine: 2, codeInsight: "Combined indexing makes text matches visible as prefix matches." },
      { label: "Expand", title: "At index 4, match aba", note: "Z[4] becomes 3 because the text starts with aba.", activeLine: 6, codeInsight: "The while loop expands direct character matches." },
      { label: "Z-box", title: "Reuse [4,6]", note: "Positions inside the box can copy bounded Z values.", activeLine: 5, codeInsight: "Z-box reuse avoids repeated comparisons." },
      { label: "Report", title: "Z value equals pattern length", note: "A value of 3 on the text side reports a match.", activeLine: 12, codeInsight: "Subtract pattern.length + 1 to convert combined index to text index." },
    ],
    runnerInput: ["ababa", "aba"],
    animationText: "aba$ababa",
    animationPattern: "aba",
    animationSteps: [
      { phase: "combine", title: "Build aba$ababa", note: "The sentinel separates pattern and text.", activeRange: [0, 2] },
      { phase: "Z[4]=3", title: "Expand at text start", note: "The prefix aba matches at combined index 4.", activeRange: [4, 6], matchedRange: [4, 6] },
      { phase: "Z-box", title: "Reuse box [4,6]", note: "Known matches bound the next Z values.", activeRange: [4, 6] },
      { phase: "match", title: "Report text index 0", note: "Z[4] equals pattern length 3.", activeRange: [4, 6], matchedRange: [4, 6] },
    ],
    complexity: { time: "O(n + m).", space: "O(n + m) for combined string and Z array." },
    correctOption: "Track the combined string, Z array, and current Z-box while extracting matches.",
    js: `export function zAlgorithm(text, pattern) {
  if (pattern.length === 0) return Array.from({ length: text.length + 1 }, (_, index) => index);
  const combined = pattern + "$" + text;
  const z = Array(combined.length).fill(0);
  for (let index = 1, left = 0, right = 0; index < combined.length; index += 1) {
    if (index <= right) z[index] = Math.min(right - index + 1, z[index - left]);
    while (index + z[index] < combined.length && combined[z[index]] === combined[index + z[index]]) z[index] += 1;
    if (index + z[index] - 1 > right) {
      left = index;
      right = index + z[index] - 1;
    }
  }
  const matches = [];
  for (let index = pattern.length + 1; index < combined.length; index += 1) {
    if (z[index] === pattern.length) matches.push(index - pattern.length - 1);
  }
  return matches;
}`,
    cpp: `#include <string>
#include <vector>
using namespace std;

vector<int> zAlgorithm(const string& text, const string& pattern) {
    if (pattern.empty()) {
        vector<int> all;
        for (int index = 0; index <= static_cast<int>(text.size()); index += 1) all.push_back(index);
        return all;
    }
    string combined = pattern + "$" + text;
    vector<int> z(combined.size(), 0);
    for (int index = 1, left = 0, right = 0; index < static_cast<int>(combined.size()); index += 1) {
        if (index <= right) z[index] = min(right - index + 1, z[index - left]);
        while (index + z[index] < static_cast<int>(combined.size()) && combined[z[index]] == combined[index + z[index]]) z[index] += 1;
        if (index + z[index] - 1 > right) {
            left = index;
            right = index + z[index] - 1;
        }
    }
    vector<int> matches;
    for (int index = static_cast<int>(pattern.size()) + 1; index < static_cast<int>(combined.size()); index += 1) {
        if (z[index] == static_cast<int>(pattern.size())) matches.push_back(index - static_cast<int>(pattern.size()) - 1);
    }
    return matches;
}`,
  },
  {
    slug: "manachers-algorithm",
    title: "Manacher’s Algorithm",
    problem: "Find the longest palindromic substring in linear time by reusing palindrome radii.",
    concept: "Manacher transforms the text with separators, tracks the current rightmost palindrome, and mirrors radius information around its center.",
    logicSummary: "Transform text, keep center/right boundaries, initialize each radius from its mirror when possible, expand, and update the best radius.",
    transitionSummary: "If an index is inside the current palindrome, start with the mirrored bounded radius; then expand and update center/right if the palindrome grows farther.",
    codeInsight: "The transformed string makes odd and even palindromes use the same radius rule.",
    realLifeExample: "Use it when longest-palindrome queries must be linear rather than center-expansion O(n^2).",
    whenToUse: "Use Manacher’s Algorithm for longest palindromic substring when input size makes O(n^2) too slow.",
    memoryTrick: "Mirror the radius, then expand only beyond known territory.",
    visualizerCaption: "The trace shows transformed-string centers, mirrored radius reuse, expansion, and best extraction.",
    logicSteps: [
      { title: "Transform text", text: "Insert separators so every palindrome has one center." },
      { title: "Reuse mirror", text: "Inside the right boundary, copy the bounded mirror radius." },
      { title: "Expand center", text: "Compare characters outside the known radius." },
      { title: "Extract best", text: "Convert transformed center/radius back to original substring." },
    ],
    variables: [
      { name: "transformed", purpose: "Separator-based string such as ^#b#a#b#a#d#$." },
      { name: "radius", purpose: "Palindrome radius at each transformed index." },
      { name: "center, right", purpose: "Rightmost known palindrome boundary." },
      { name: "bestCenter, bestRadius", purpose: "Largest palindrome seen." },
    ],
    dryRun: [
      { label: "Transform", title: "Build #b#a#b#a#d#", note: "Separators make odd and even palindromes uniform.", activeLine: 2, codeInsight: "The sentinels avoid boundary checks during expansion." },
      { label: "Mirror", title: "Use mirrored radius", note: "An index inside right can start from its mirror's known radius.", activeLine: 8, codeInsight: "Mirror reuse is the linear-time shortcut." },
      { label: "Expand", title: "Grow around center a", note: "The radius expands while transformed characters match.", activeLine: 9, codeInsight: "Only comparisons beyond the known radius are new work." },
      { label: "Best", title: "Extract bab", note: "The best transformed radius maps back to substring bab.", activeLine: 19, codeInsight: "The final start index converts transformed coordinates to original text." },
    ],
    runnerInput: ["babad"],
    animationText: "#b#a#b#a#d#",
    animationPattern: "radius",
    animationSteps: [
      { phase: "transform", title: "Insert separators", note: "Every palindrome becomes centered on one index.", activeRange: [0, 10] },
      { phase: "mirror", title: "Reuse mirror radius", note: "Inside the right boundary, start from a mirrored value.", activeRange: [2, 6] },
      { phase: "expand", title: "Expand around center", note: "The radius covers #b#a#b#.", activeRange: [0, 6], matchedRange: [1, 5] },
      { phase: "best bab", title: "Return longest original substring", note: "The best radius maps to bab.", activeRange: [1, 5], matchedRange: [1, 5] },
    ],
    complexity: { time: "O(n).", space: "O(n) for transformed string and radius array." },
    correctOption: "Track transformed indices, mirror radius, center/right boundary, and best radius.",
    js: `export function manachersAlgorithm(text) {
  if (text.length === 0) return "";
  const transformed = "^#" + text.split("").join("#") + "#$";
  const radius = Array(transformed.length).fill(0);
  let center = 0;
  let right = 0;
  let bestCenter = 0;
  let bestRadius = 0;

  for (let index = 1; index < transformed.length - 1; index += 1) {
    const mirror = 2 * center - index;
    if (index < right) radius[index] = Math.min(right - index, radius[mirror]);
    while (transformed[index + radius[index] + 1] === transformed[index - radius[index] - 1]) radius[index] += 1;
    if (index + radius[index] > right) {
      center = index;
      right = index + radius[index];
    }
    if (radius[index] > bestRadius) {
      bestRadius = radius[index];
      bestCenter = index;
    }
  }

  const start = Math.floor((bestCenter - bestRadius) / 2);
  return text.slice(start, start + bestRadius);
}`,
    cpp: `#include <string>
#include <vector>
using namespace std;

string manachersAlgorithm(const string& text) {
    if (text.empty()) return "";
    string transformed = "^#";
    for (char ch : text) {
        transformed += ch;
        transformed += '#';
    }
    transformed += '$';
    vector<int> radius(transformed.size(), 0);
    int center = 0;
    int right = 0;
    int bestCenter = 0;
    int bestRadius = 0;
    for (int index = 1; index < static_cast<int>(transformed.size()) - 1; index += 1) {
        int mirror = 2 * center - index;
        if (index < right) radius[index] = min(right - index, radius[mirror]);
        while (transformed[index + radius[index] + 1] == transformed[index - radius[index] - 1]) radius[index] += 1;
        if (index + radius[index] > right) {
            center = index;
            right = index + radius[index];
        }
        if (radius[index] > bestRadius) {
            bestRadius = radius[index];
            bestCenter = index;
        }
    }
    int start = (bestCenter - bestRadius) / 2;
    return text.substr(start, bestRadius);
}`,
  },
];

for (const spec of specs) {
  const dataPath = path.join(stringsRoot, spec.slug, "data.js");
  const data = readPageData(dataPath);
  Object.assign(data, patchFor(spec));
  writePageData(dataPath, data);
  writeSolution(spec.slug, "solution.js", `// ${spec.title}\n// Route: /algorithms/strings/${spec.slug}\n\n${spec.js}`);
  writeSolution(spec.slug, "solution.cpp", `// ${spec.title}\n// Route: /algorithms/strings/${spec.slug}\n\n${spec.cpp}`);
}

console.log(`Updated ${specs.length} string algorithm pages.`);
