// Runnable JavaScript companion for Static Variable In Recursion
export function recursionStaticVariableInRecursion(n = 5) {
  const calls = [];
  function factorial(value) {
    calls.push(value);
    return value <= 1 ? 1 : value * factorial(value - 1);
  }
  return { pattern: "recursion", calls, result: factorial(n) };
}