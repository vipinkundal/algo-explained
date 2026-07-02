// Ternary Search
// Route: /algorithms/searching/ternary-search

export function ternarySearch(low, high, evaluate, precision = 1e-7) {
  const score = typeof evaluate === "function" ? evaluate : Function("return " + evaluate)();
  while (high - low > precision) {
    const mid1 = low + (high - low) / 3;
    const mid2 = high - (high - low) / 3;
    if (score(mid1) < score(mid2)) low = mid1;
    else high = mid2;
  }
  return (low + high) / 2;
}
