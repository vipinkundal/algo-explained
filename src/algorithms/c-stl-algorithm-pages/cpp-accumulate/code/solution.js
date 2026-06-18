// AUTO-GENERATED ALGORITHM SOLUTION
// C++ accumulate()
// Route: /algorithms/cpp-stl/accumulate
// This educational implementation is intentionally small and side-effect-light.

export function cppAccumulate(array, initial = 0) {
  return array.reduce((sum, value) => sum + value, initial);
}
