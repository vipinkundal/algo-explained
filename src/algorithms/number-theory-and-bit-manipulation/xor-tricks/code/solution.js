// REFERENCE ALGORITHM SOLUTION
// XOR Tricks
// Route: /algorithms/bit-manipulation/xor-tricks

export function xorTricks(a, b) {
  return { xor: a ^ b, withoutTempSwap: [b, a], toggledLowestBit: a ^ 1 };
}
