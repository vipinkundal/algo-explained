// Partition DP
// Route: /algorithms/dynamic-programming/partition-dp

export function partitionDp(array) {
  const total = array.reduce((sum, value) => sum + value, 0);
  if (total % 2 !== 0) return false;
  const target = total / 2;
  const possible = Array(target + 1).fill(false);
  possible[0] = true;
  for (const value of array) {
    for (let sum = target; sum >= value; sum -= 1) {
      possible[sum] = possible[sum] || possible[sum - value];
    }
  }
  return possible[target];
}
