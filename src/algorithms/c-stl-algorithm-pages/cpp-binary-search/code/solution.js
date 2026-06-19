// REFERENCE ALGORITHM SOLUTION
// C++ binary_search()
// Route: /algorithms/cpp-stl/binary-search

export function cppBinarySearch(values, target) {
  let low = 0;
  let high = values.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (values[mid] === target) return true;
    if (values[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return false;
}
