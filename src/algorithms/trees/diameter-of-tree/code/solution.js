// AUTO-GENERATED ALGORITHM SOLUTION
// Diameter of Tree
// Route: /algorithms/trees/diameter-of-tree
// This educational implementation is intentionally small and side-effect-light.

export function diameterOfTree(root) {
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
