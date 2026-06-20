// Runnable JavaScript companion for Static Variable In Recursion
// Original source: 03_recursion/02_static_variable_in_recursion.cpp
export function recursionStaticVariableInRecursion(n = 5) {
  const calls = [];
  function factorial(value) {
    calls.push(value);
    return value <= 1 ? 1 : value * factorial(value - 1);
  }
  return { pattern: "recursion", calls, result: factorial(n) };
}