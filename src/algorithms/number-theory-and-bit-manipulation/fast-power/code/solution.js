// AUTO-GENERATED ALGORITHM SOLUTION
// Fast Power
// Route: /algorithms/number-theory/fast-power
// This educational implementation is intentionally small and side-effect-light.

export function fastPower(value, other = 1) {
  let a = Math.abs(Number(value) || 0);
  let b = Math.abs(Number(other) || 0);
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}
