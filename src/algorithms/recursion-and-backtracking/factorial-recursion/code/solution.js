// REFERENCE ALGORITHM SOLUTION
// Factorial Recursion
// Route: /algorithms/recursion/factorial-recursion

export function factorialRecursion(value) {
  if (value <= 1) return 1;
  return value * factorialRecursion(value - 1);
}
