// AUTO-GENERATED ALGORITHM SOLUTION
// C++ lower_bound()
// Route: /algorithms/cpp-stl/lower-bound
// This educational implementation is intentionally small and side-effect-light.

export function cppLowerBound(array, target) {
  let low = 0;
  let high = array.length;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (array[mid] < target) low = mid + 1;
    else high = mid;
  }

  return low;
}
