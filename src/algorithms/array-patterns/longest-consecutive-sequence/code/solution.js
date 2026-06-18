// SPECIFIC ALGORITHM SOLUTION
// Longest Consecutive Sequence
// Route: /algorithms/array-patterns/longest-consecutive-sequence

export function longestConsecutiveSequence(array) {
  const values = new Set(array);
  let best = 0;
  for (const value of values) {
    if (values.has(value - 1)) continue;
    let current = value;
    while (values.has(current)) current += 1;
    best = Math.max(best, current - value);
  }
  return best;
}
