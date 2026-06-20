// Runnable JavaScript companion for Recursion Taylor Series
// Original source: 03_recursion/09_taylor_series.cpp
export function recursionTaylorSeries(n = 5) {
  const calls = [];
  function factorial(value) {
    calls.push(value);
    return value <= 1 ? 1 : value * factorial(value - 1);
  }
  return { pattern: "recursion", calls, result: factorial(n) };
}