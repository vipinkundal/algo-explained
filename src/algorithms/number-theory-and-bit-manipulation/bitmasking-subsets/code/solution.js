// REFERENCE ALGORITHM SOLUTION
// Bitmasking for Subsets
// Route: /algorithms/bit-manipulation/bitmasking-subsets

export function bitmaskingSubsets(values) {
  const result = [];
  for (let mask = 0; mask < (1 << values.length); mask += 1) {
    const subset = [];
    for (let bit = 0; bit < values.length; bit += 1) if (mask & (1 << bit)) subset.push(values[bit]);
    result.push(subset);
  }
  return result;
}
