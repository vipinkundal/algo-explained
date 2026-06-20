// Runnable JavaScript companion for First Recursion Program
// Original source: 03_recursion/01_first_recursion_program.cpp
export function recursionFirstRecursionProgram(n = 5) {
  const calls = [];
  function factorial(value) {
    calls.push(value);
    return value <= 1 ? 1 : value * factorial(value - 1);
  }
  return { pattern: "recursion", calls, result: factorial(n) };
}