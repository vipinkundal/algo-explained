// REFERENCE ALGORITHM SOLUTION
// AVL Tree Basics
// Route: /algorithms/trees/avl-tree-basics

export function avlTreeBasics(root) {
  function height(node) {
    if (!node) return 0;
    return 1 + Math.max(height(node.left), height(node.right));
  }
  function balanced(node) {
    if (!node) return true;
    return Math.abs(height(node.left) - height(node.right)) <= 1 && balanced(node.left) && balanced(node.right);
  }
  return { height: height(root), balanced: balanced(root) };
}
