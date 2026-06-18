// SPECIFIC ALGORITHM SOLUTION
// Radix Sort
// Route: /algorithms/sorting/radix-sort

export function radixSort(array) {
  let values = [...array];
  const max = Math.max(0, ...values);
  for (let place = 1; Math.floor(max / place) > 0; place *= 10) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (const value of values) buckets[Math.floor(value / place) % 10].push(value);
    values = buckets.flat();
  }
  return values;
}
