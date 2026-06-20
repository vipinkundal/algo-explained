// Runnable JavaScript companion for Recursion Factorial
// Original source: 03_recursion/07_factorial.cpp
export function recursionFactorial(n = 5) {
  const calls = [];
  function factorial(value) {
    calls.push(value);
    return value <= 1 ? 1 : value * factorial(value - 1);
  }
  return { pattern: "recursion", calls, result: factorial(n) };
}