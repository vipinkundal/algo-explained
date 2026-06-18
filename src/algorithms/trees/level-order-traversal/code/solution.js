// AUTO-GENERATED ALGORITHM SOLUTION
// Level Order Traversal
// Route: /algorithms/trees/level-order-traversal
// This educational implementation is intentionally small and side-effect-light.

export function levelOrderTraversal(root) {
  const result = [];
  function visit(node) {
    if (!node) return 0;
    result.push(node.value);
    const leftHeight = visit(node.left);
    const rightHeight = visit(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
  const height = visit(root);
  return { result, height };
}
