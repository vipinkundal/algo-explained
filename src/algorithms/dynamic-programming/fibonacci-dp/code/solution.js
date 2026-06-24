// Fibonacci DP
// Route: /algorithms/dynamic-programming/fibonacci-dp

export function fibonacciDp(n) {
  if (n <= 1) return n;
  const dp = Array(n + 1).fill(0);
  dp[1] = 1;
  for (let index = 2; index <= n; index += 1) dp[index] = dp[index - 1] + dp[index - 2];
  return dp[n];
}
