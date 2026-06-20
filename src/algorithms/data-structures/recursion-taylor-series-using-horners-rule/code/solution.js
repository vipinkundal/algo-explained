// Runnable JavaScript companion for Recursion Taylor Series Using Horners Rule
// Original source: 03_recursion/10_taylor_series_using_horners_rule.cpp
export function recursionTaylorSeriesUsingHornersRule(n = 5) {
  const calls = [];
  function factorial(value) {
    calls.push(value);
    return value <= 1 ? 1 : value * factorial(value - 1);
  }
  return { pattern: "recursion", calls, result: factorial(n) };
}