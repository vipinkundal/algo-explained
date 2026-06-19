// REFERENCE ALGORITHM SOLUTION
// C++ lower_bound()
// Route: /algorithms/cpp-stl/lower-bound

export function cppLowerBound(values, target) {
  let low = 0;
  let high = values.length;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (values[mid] < target) low = mid + 1;
    else high = mid;
  }
  return low;
}
