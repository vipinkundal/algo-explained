// Runnable JavaScript companion for Recursion nCr
// Original source: 03_recursion/12_ncr.cpp
export function recursionNcr(n = 5) {
  const calls = [];
  function factorial(value) {
    calls.push(value);
    return value <= 1 ? 1 : value * factorial(value - 1);
  }
  return { pattern: "recursion", calls, result: factorial(n) };
}