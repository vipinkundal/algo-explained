// REFERENCE ALGORITHM SOLUTION
// Lowest Common Ancestor
// Route: /algorithms/trees/lowest-common-ancestor

export function lowestCommonAncestor(root, first, second) {
  if (!root || root.value === first || root.value === second) return root?.value ?? null;
  const left = lowestCommonAncestor(root.left, first, second);
  const right = lowestCommonAncestor(root.right, first, second);
  if (left !== null && right !== null) return root.value;
  return left !== null ? left : right;
}
