// REFERENCE ALGORITHM SOLUTION
// Hashing Basics
// Route: /algorithms/foundations/hashing-basics

export function hashingBasics(values) {
  const counts = {};
  for (const value of Array.isArray(values) ? values : []) {
    const key = String(value);
    counts[key] = (counts[key] || 0) + 1;
  }
  return counts;
}
