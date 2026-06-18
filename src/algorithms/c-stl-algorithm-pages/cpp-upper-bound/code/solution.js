// AUTO-GENERATED ALGORITHM SOLUTION
// C++ upper_bound()
// Route: /algorithms/cpp-stl/upper-bound
// This educational implementation is intentionally small and side-effect-light.

export function cppUpperBound(array, target) {
  let low = 0;
  let high = array.length;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (array[mid] <= target) low = mid + 1;
    else high = mid;
  }

  return low;
}
