// Runnable JavaScript companion for Nested Recursion
// Original source: 03_recursion/05_nested_recursion.cpp
export function recursionNestedRecursion(n = 5) {
  const calls = [];
  function factorial(value) {
    calls.push(value);
    return value <= 1 ? 1 : value * factorial(value - 1);
  }
  return { pattern: "recursion", calls, result: factorial(n) };
}