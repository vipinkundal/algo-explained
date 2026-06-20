// Runnable JavaScript companion for Tree Recursion
// Original source: 03_recursion/03_tree_recursion.cpp
export function recursionTreeRecursion() {
  const tree = { value: 1, left: { value: 2 }, right: { value: 3 } };
  return { structure: "binary tree", traversal: "level order", result: [tree.value, tree.left.value, tree.right.value] };
}