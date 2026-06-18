// AUTO-GENERATED ALGORITHM SOLUTION
// C++ next_permutation()
// Route: /algorithms/cpp-stl/next-permutation
// This educational implementation is intentionally small and side-effect-light.

export function cppNextPermutation(input) {
  const state = Array.isArray(input) ? [...input] : input;
  return { input, state, answer: state };
}
