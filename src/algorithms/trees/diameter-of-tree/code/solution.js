// REFERENCE ALGORITHM SOLUTION
// Diameter of Tree
// Route: /algorithms/trees/diameter-of-tree

export function diameterOfTree(root) {
  let diameter = 0;
  function height(node) {
    if (!node) return 0;
    const left = height(node.left);
    const right = height(node.right);
    diameter = Math.max(diameter, left + right);
    return 1 + Math.max(left, right);
  }
  height(root);
  return diameter;
}
