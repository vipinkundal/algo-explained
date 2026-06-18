// AUTO-GENERATED ALGORITHM SOLUTION
// Search in Sorted Matrix
// Route: /algorithms/matrix/search-in-sorted-matrix
// This educational implementation is intentionally small and side-effect-light.

export function searchInSortedMatrix(array, target) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === target) return index;
  }
  return -1;
}
