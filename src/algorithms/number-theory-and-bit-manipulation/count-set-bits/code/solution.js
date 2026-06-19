// REFERENCE ALGORITHM SOLUTION
// Count Set Bits
// Route: /algorithms/bit-manipulation/count-set-bits

export function countSetBits(value) {
  let n = Math.abs(value);
  let count = 0;
  while (n > 0) {
    n &= n - 1;
    count += 1;
  }
  return count;
}
