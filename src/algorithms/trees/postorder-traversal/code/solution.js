// REFERENCE ALGORITHM SOLUTION
// Postorder Traversal
// Route: /algorithms/trees/postorder-traversal

export function postorderTraversal(root) {
  const result = [];
  function walk(node) {
    if (!node) return;
    walk(node.left);
    walk(node.right);
    result.push(node.value);
  }
  walk(root);
  return result;
}
