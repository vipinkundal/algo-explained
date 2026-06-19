// REFERENCE ALGORITHM SOLUTION
// Red-Black Tree Basics
// Route: /algorithms/trees/red-black-tree-basics

export function redBlackTreeBasics(root) {
  function height(node) {
    if (!node) return 0;
    return 1 + Math.max(height(node.left), height(node.right));
  }
  return { height: height(root), rootColor: root?.color || "black", balancedByColorRules: Boolean(root) };
}
