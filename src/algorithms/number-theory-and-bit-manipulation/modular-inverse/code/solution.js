// REFERENCE ALGORITHM SOLUTION
// Modular Inverse
// Route: /algorithms/number-theory/modular-inverse

export function modularInverse(value, mod) {
  function extendedGcd(a, b) {
    if (b === 0) return [Math.abs(a), Math.sign(a) || 1, 0];
    const [g, x1, y1] = extendedGcd(b, a % b);
    return [g, y1, x1 - Math.floor(a / b) * y1];
  }
  const [gcd, x] = extendedGcd(value, mod);
  if (gcd !== 1) return null;
  return ((x % mod) + mod) % mod;
}
