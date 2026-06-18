// SPECIFIC ALGORITHM SOLUTION
// Longest Increasing Subsequence
// Route: /algorithms/dynamic-programming/longest-increasing-subsequence

export function longestIncreasingSubsequence(array) {
  const tails = [];
  for (const value of array) {
    let low = 0;
    let high = tails.length;
    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      if (tails[mid] < value) low = mid + 1;
      else high = mid;
    }
    tails[low] = value;
  }
  return tails.length;
}
