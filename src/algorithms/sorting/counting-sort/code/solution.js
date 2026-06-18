// SPECIFIC ALGORITHM SOLUTION
// Counting Sort
// Route: /algorithms/sorting/counting-sort

export function countingSort(array) {
  if (!array.length) return [];
  const min = Math.min(...array);
  const max = Math.max(...array);
  const counts = Array(max - min + 1).fill(0);
  for (const value of array) counts[value - min] += 1;
  const result = [];
  counts.forEach((count, offset) => {
    for (let copy = 0; copy < count; copy += 1) result.push(offset + min);
  });
  return result;
}
