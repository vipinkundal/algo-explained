// SPECIFIC ALGORITHM SOLUTION
// Majority Element
// Route: /algorithms/array-patterns/majority-element

export function majorityElement(array) {
  let candidate = null;
  let votes = 0;
  for (const value of array) {
    if (votes === 0) candidate = value;
    votes += value === candidate ? 1 : -1;
  }
  return candidate;
}
