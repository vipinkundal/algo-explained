// Runnable JavaScript companion for Indirect Recursion
// Original source: 03_recursion/04_indirect_recursion.cpp
export function recursionIndirectRecursion(n = 5) {
  const calls = [];
  function factorial(value) {
    calls.push(value);
    return value <= 1 ? 1 : value * factorial(value - 1);
  }
  return { pattern: "recursion", calls, result: factorial(n) };
}