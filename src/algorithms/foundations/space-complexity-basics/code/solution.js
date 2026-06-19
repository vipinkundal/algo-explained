// REFERENCE ALGORITHM SOLUTION
// Space Complexity Basics
// Route: /algorithms/foundations/space-complexity-basics

export function spaceComplexityBasics(values) {
  const copy = Array.isArray(values) ? [...values] : [];
  return { inputSize: copy.length, auxiliarySpace: copy.length, note: "O(n) copied state" };
}
