// REFERENCE ALGORITHM SOLUTION
// Fibonacci Recursion
// Route: /algorithms/recursion/fibonacci-recursion

export function fibonacciRecursion(value) {
  if (value <= 1) return value;
  return fibonacciRecursion(value - 1) + fibonacciRecursion(value - 2);
}
