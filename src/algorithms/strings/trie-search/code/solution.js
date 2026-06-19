// REFERENCE ALGORITHM SOLUTION
// Trie-Based Search
// Route: /algorithms/strings/trie-search

export function trieSearch(words, query) {
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
}
