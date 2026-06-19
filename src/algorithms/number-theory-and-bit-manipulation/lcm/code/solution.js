// REFERENCE ALGORITHM SOLUTION
// LCM
// Route: /algorithms/number-theory/lcm

export function lcm(a, b) {
  const gcd = (x, y) => y === 0 ? Math.abs(x) : gcd(y, x % y);
  return a === 0 || b === 0 ? 0 : Math.abs(a * b) / gcd(a, b);
}
