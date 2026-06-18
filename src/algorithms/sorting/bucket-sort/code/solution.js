// SPECIFIC ALGORITHM SOLUTION
// Bucket Sort
// Route: /algorithms/sorting/bucket-sort

export function bucketSort(array, bucketCount = Math.max(1, Math.ceil(Math.sqrt(array.length)))) {
  if (array.length <= 1) return [...array];
  const min = Math.min(...array);
  const max = Math.max(...array);
  const width = (max - min + 1) / bucketCount;
  const buckets = Array.from({ length: bucketCount }, () => []);
  for (const value of array) {
    const bucketIndex = Math.min(bucketCount - 1, Math.floor((value - min) / width));
    buckets[bucketIndex].push(value);
  }
  return buckets.flatMap((bucket) => bucket.sort((a, b) => a - b));
}
