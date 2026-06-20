// Runnable JavaScript companion for Binary Tree Creation
// Original source: 13_Trees/01_creating_binary_tree.cpp
export function binaryTreeCreation() {
  const tree = { value: 1, left: { value: 2 }, right: { value: 3 } };
  return { structure: "binary tree", traversal: "level order", result: [tree.value, tree.left.value, tree.right.value] };
}