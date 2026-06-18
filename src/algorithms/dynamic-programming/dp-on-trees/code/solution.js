// SPECIFIC ALGORITHM SOLUTION
// DP on Trees
// Route: /algorithms/dynamic-programming/dp-on-trees

export function dpOnTrees(root) {
  function solve(node) {
    if (!node) return { take: 0, skip: 0 };
    const left = solve(node.left);
    const right = solve(node.right);
    return {
      take: node.value + left.skip + right.skip,
      skip: Math.max(left.take, left.skip) + Math.max(right.take, right.skip),
    };
  }
  const result = solve(root);
  return Math.max(result.take, result.skip);
}
