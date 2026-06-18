// SPECIFIC ALGORITHM SOLUTION
// Ternary Search
// Route: /algorithms/searching/ternary-search

export function ternarySearch(low, high, evaluate, precision = 1e-7) {
  while (high - low > precision) {
    const mid1 = low + (high - low) / 3;
    const mid2 = high - (high - low) / 3;
    if (evaluate(mid1) < evaluate(mid2)) low = mid1;
    else high = mid2;
  }
  return (low + high) / 2;
}
