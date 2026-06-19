// REFERENCE ALGORITHM SOLUTION
// Time Complexity Basics
// Route: /algorithms/foundations/time-complexity-basics

export function timeComplexityBasics(values) {
  const inputSize = Array.isArray(values) ? values.length : Number(values) || 0;
  return { inputSize, linearSteps: inputSize, quadraticSteps: inputSize * inputSize };
}
