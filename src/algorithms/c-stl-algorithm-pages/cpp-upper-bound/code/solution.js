// REFERENCE ALGORITHM SOLUTION
// C++ upper_bound()
// Route: /algorithms/cpp-stl/upper-bound

export function cppUpperBound(values, target) {
  let low = 0;
  let high = values.length;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (values[mid] <= target) low = mid + 1;
    else high = mid;
  }
  return low;
}
