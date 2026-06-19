// REFERENCE ALGORITHM SOLUTION
// Preorder Traversal
// Route: /algorithms/trees/preorder-traversal

export function preorderTraversal(root) {
  const result = [];
  function walk(node) {
    if (!node) return;
    result.push(node.value);
    walk(node.left);
    walk(node.right);
  }
  walk(root);
  return result;
}
