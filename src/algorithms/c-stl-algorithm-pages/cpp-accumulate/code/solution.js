// REFERENCE ALGORITHM SOLUTION
// C++ accumulate()
// Route: /algorithms/cpp-stl/accumulate

export function cppAccumulate(values, initialValue = 0) {
  return values.reduce((total, value) => total + value, initialValue);
}
