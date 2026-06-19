// REFERENCE ALGORITHM SOLUTION
// Height / Depth of Tree
// Route: /algorithms/trees/height-depth-of-tree

export function heightDepthOfTree(root) {
  if (!root) return 0;
  return 1 + Math.max(heightDepthOfTree(root.left), heightDepthOfTree(root.right));
}
