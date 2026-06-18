// SPECIFIC ALGORITHM SOLUTION
// Kth Largest / Smallest Element
// Route: /algorithms/heaps/kth-largest-smallest

export function kthLargestSmallest(values, k) {
  const sorted = [...values].sort((a, b) => a - b);
  return {
    kthSmallest: sorted[k - 1] ?? null,
    kthLargest: sorted[sorted.length - k] ?? null,
  };
}
