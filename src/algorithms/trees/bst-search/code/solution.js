// REFERENCE ALGORITHM SOLUTION
// BST Search
// Route: /algorithms/trees/bst-search

export function bstSearch(root, target) {
  if (Array.isArray(root)) {
    let low = 0;
    let high = root.length - 1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (root[mid] === target) return mid;
      if (root[mid] < target) low = mid + 1;
      else high = mid - 1;
    }
    return -1;
  }
  let node = root;
  while (node) {
    if (node.value === target) return true;
    node = target < node.value ? node.left : node.right;
  }
  return false;
}
