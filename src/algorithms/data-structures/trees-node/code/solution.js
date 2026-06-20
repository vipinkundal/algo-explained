// Runnable JavaScript companion for Binary Tree Node
// Original source: 13_Trees/Node.h
export function treesNode() {
  const tree = { value: 1, left: { value: 2 }, right: { value: 3 } };
  return { structure: "binary tree", traversal: "level order", result: [tree.value, tree.left.value, tree.right.value] };
}