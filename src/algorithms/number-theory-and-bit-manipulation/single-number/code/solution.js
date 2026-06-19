// REFERENCE ALGORITHM SOLUTION
// Single Number
// Route: /algorithms/bit-manipulation/single-number

export function singleNumber(values) {
  return values.reduce((answer, value) => answer ^ value, 0);
}
