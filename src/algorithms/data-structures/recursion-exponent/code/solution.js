// Runnable JavaScript companion for Recursion Exponent
// Original source: 03_recursion/08_exponent.cpp
export function recursionExponent(n = 5) {
  const calls = [];
  function factorial(value) {
    calls.push(value);
    return value <= 1 ? 1 : value * factorial(value - 1);
  }
  return { pattern: "recursion", calls, result: factorial(n) };
}