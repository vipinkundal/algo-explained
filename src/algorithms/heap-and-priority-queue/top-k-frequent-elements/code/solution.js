// SPECIFIC ALGORITHM SOLUTION
// Top K Frequent Elements
// Route: /algorithms/heaps/top-k-frequent-elements

export function topKFrequentElements(values, k) {
  const frequency = new Map();
  for (const value of values) frequency.set(value, (frequency.get(value) || 0) + 1);
  return [...frequency.entries()].sort((a, b) => b[1] - a[1]).slice(0, k).map(([value]) => value);
}
