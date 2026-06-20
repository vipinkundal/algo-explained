// Runnable JavaScript companion for Binary Tree Traversal
// Original source: 13_Trees/02_Traversing.cpp
export function binaryTreeTraversal() {
  const tree = { value: 1, left: { value: 2 }, right: { value: 3 } };
  return { structure: "binary tree", traversal: "level order", result: [tree.value, tree.left.value, tree.right.value] };
}