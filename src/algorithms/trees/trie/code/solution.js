// REFERENCE ALGORITHM SOLUTION
// Trie Operations
// Route: /algorithms/trees/trie

export function trie(words) {
  const root = {};
  for (const word of words) {
    let node = root;
    for (const char of word) node = node[char] ||= {};
    node.$ = true;
  }
  return root;
}
