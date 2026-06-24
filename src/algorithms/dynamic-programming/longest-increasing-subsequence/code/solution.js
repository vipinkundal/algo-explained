// Longest Increasing Subsequence
// Route: /algorithms/dynamic-programming/longest-increasing-subsequence

export function longestIncreasingSubsequence(nums) {
  const tails = [];
  for (const value of nums) {
    let left = 0;
    let right = tails.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (tails[mid] < value) left = mid + 1;
      else right = mid;
    }
    tails[left] = value;
  }
  return tails.length;
}
