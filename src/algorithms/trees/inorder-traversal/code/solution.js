// REFERENCE ALGORITHM SOLUTION
// Inorder Traversal
// Route: /algorithms/trees/inorder-traversal

export function inorderTraversal(root) {
  const result = [];
  function walk(node) {
    if (!node) return;
    walk(node.left);
    result.push(node.value);
    walk(node.right);
  }
  walk(root);
  return result;
}
