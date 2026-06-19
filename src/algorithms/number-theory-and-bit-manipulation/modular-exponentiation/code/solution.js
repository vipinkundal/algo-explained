// REFERENCE ALGORITHM SOLUTION
// Modular Exponentiation
// Route: /algorithms/number-theory/modular-exponentiation

export function modularExponentiation(base, exponent, mod) {
  let result = 1 % mod;
  let power = ((base % mod) + mod) % mod;
  let n = exponent;
  while (n > 0) {
    if (n % 2 === 1) result = (result * power) % mod;
    power = (power * power) % mod;
    n = Math.floor(n / 2);
  }
  return result;
}
