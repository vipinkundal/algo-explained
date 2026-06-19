// REFERENCE ALGORITHM SOLUTION
// Greedy Basics
// Route: /algorithms/foundations/greedy-basics

export function greedyBasics(values, capacity = 10) {
  const sorted = [...(Array.isArray(values) ? values : [])].sort((a, b) => a - b);
  const chosen = [];
  let total = 0;
  for (const value of sorted) {
    if (total + value <= capacity) {
      chosen.push(value);
      total += value;
    }
  }
  return { chosen, total };
}
