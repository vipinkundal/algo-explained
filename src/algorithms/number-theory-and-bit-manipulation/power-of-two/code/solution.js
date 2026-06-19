// REFERENCE ALGORITHM SOLUTION
// Power of Two
// Route: /algorithms/bit-manipulation/power-of-two

export function powerOfTwo(value) {
  return value > 0 && (value & (value - 1)) === 0;
}
