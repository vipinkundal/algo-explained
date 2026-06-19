// REFERENCE ALGORITHM SOLUTION
// Fast Power
// Route: /algorithms/number-theory/fast-power

export function fastPower(base, exponent) {
  let result = 1;
  let power = base;
  let n = exponent;
  while (n > 0) {
    if (n % 2 === 1) result *= power;
    power *= power;
    n = Math.floor(n / 2);
  }
  return result;
}
