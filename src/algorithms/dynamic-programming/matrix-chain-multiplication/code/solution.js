// Matrix Chain Multiplication
// Route: /algorithms/dynamic-programming/matrix-chain-multiplication

export function matrixChainMultiplication(dimensions) {
  const n = dimensions.length - 1;
  if (n <= 1) return 0;
  const dp = Array.from({ length: n }, () => Array(n).fill(0));
  for (let length = 2; length <= n; length += 1) {
    for (let left = 0; left + length - 1 < n; left += 1) {
      const right = left + length - 1;
      dp[left][right] = Infinity;
      for (let split = left; split < right; split += 1) {
        const cost = dp[left][split] + dp[split + 1][right] + dimensions[left] * dimensions[split + 1] * dimensions[right + 1];
        dp[left][right] = Math.min(dp[left][right], cost);
      }
    }
  }
  return dp[0][n - 1];
}
