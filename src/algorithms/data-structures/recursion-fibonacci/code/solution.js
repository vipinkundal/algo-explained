// Runnable JavaScript companion for Recursion Fibonacci
// Original source: 03_recursion/11_fibonacci.cpp
export function recursionFibonacci(n = 5) {
  const calls = [];
  function factorial(value) {
    calls.push(value);
    return value <= 1 ? 1 : value * factorial(value - 1);
  }
  return { pattern: "recursion", calls, result: factorial(n) };
}