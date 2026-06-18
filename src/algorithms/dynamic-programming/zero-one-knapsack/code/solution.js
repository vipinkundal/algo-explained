// SPECIFIC ALGORITHM SOLUTION
// 0/1 Knapsack
// Route: /algorithms/dynamic-programming/zero-one-knapsack

export function zeroOneKnapsack(weights, values, capacity) {
  const dp = Array(capacity + 1).fill(0);
  for (let item = 0; item < weights.length; item += 1) {
    for (let cap = capacity; cap >= weights[item]; cap -= 1) {
      dp[cap] = Math.max(dp[cap], dp[cap - weights[item]] + values[item]);
    }
  }
  return dp[capacity];
}
