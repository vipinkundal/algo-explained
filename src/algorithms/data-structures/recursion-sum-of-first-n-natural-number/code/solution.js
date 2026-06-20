// Runnable JavaScript companion for Recursion Sum Of First N Natural Number
// Original source: 03_recursion/06_sum_of_first_n_natural_number.cpp
export function recursionSumOfFirstNNaturalNumber(n = 5) {
  const calls = [];
  function factorial(value) {
    calls.push(value);
    return value <= 1 ? 1 : value * factorial(value - 1);
  }
  return { pattern: "recursion", calls, result: factorial(n) };
}