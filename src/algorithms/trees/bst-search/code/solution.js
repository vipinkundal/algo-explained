// AUTO-GENERATED ALGORITHM SOLUTION
// BST Search
// Route: /algorithms/trees/bst-search
// This educational implementation is intentionally small and side-effect-light.

export function bstSearch(array, target) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === target) return index;
  }
  return -1;
}
