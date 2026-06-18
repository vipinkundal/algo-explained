// AUTO-GENERATED ALGORITHM SOLUTION
// C++ binary_search()
// Route: /algorithms/cpp-stl/binary-search
// This educational implementation is intentionally small and side-effect-light.

export function cppBinarySearch(array, target) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (array[mid] === target) return mid;
    if (array[mid] < target) low = mid + 1;
    else high = mid - 1;
  }

  return -1;
}
