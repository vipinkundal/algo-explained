// SPECIFIC ALGORITHM SOLUTION
// Maximum Product Subarray
// Route: /algorithms/array-patterns/maximum-product-subarray

export function maximumProductSubarray(array) {
  let maxEnding = array[0] ?? 0;
  let minEnding = array[0] ?? 0;
  let best = array[0] ?? 0;
  for (let index = 1; index < array.length; index += 1) {
    const value = array[index];
    const candidates = [value, value * maxEnding, value * minEnding];
    maxEnding = Math.max(...candidates);
    minEnding = Math.min(...candidates);
    best = Math.max(best, maxEnding);
  }
  return best;
}
