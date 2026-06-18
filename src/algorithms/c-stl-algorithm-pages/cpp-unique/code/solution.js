// AUTO-GENERATED ALGORITHM SOLUTION
// C++ unique()
// Route: /algorithms/cpp-stl/unique
// This educational implementation is intentionally small and side-effect-light.

export function cppUnique(input) {
  const state = Array.isArray(input) ? [...input] : input;
  return { input, state, answer: state };
}
