// SPECIFIC ALGORITHM SOLUTION
// Merge Sort
// Route: /algorithms/sorting/merge-sort

export function mergeSort(array) {
  if (array.length <= 1) return [...array];
  const mid = Math.floor(array.length / 2);
  return merge(mergeSort(array.slice(0, mid)), mergeSort(array.slice(mid)));
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    result.push(left[i] <= right[j] ? left[i++] : right[j++]);
  }
  return result.concat(left.slice(i), right.slice(j));
}
