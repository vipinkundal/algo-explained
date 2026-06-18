// AUTO-GENERATED ALGORITHM SOLUTION
// Fibonacci Recursion
// Route: /algorithms/recursion/fibonacci-recursion
// This educational implementation is intentionally small and side-effect-light.

export function fibonacciRecursion(values) {
  const items = Array.isArray(values) ? values : [];
  const dp = Array(items.length + 1).fill(0);
  for (let index = 1; index <= items.length; index += 1) {
    dp[index] = Math.max(dp[index - 1], Number(items[index - 1]) || 0);
  }
  return dp[items.length];
}
