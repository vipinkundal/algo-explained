// SPECIFIC ALGORITHM SOLUTION
// Prefix Sum
// Route: /algorithms/array-patterns/prefix-sum

export function prefixSum(array) {
  const prefix = [0];
  for (const value of array) prefix.push(prefix[prefix.length - 1] + value);
  return prefix;
}

export function rangeSum(prefix, left, right) {
  return prefix[right + 1] - prefix[left];
}
