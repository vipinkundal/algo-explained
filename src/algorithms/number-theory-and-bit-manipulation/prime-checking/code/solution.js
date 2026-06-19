// REFERENCE ALGORITHM SOLUTION
// Prime Checking
// Route: /algorithms/number-theory/prime-checking

export function primeChecking(value) {
  if (value < 2) return false;
  if (value === 2) return true;
  if (value % 2 === 0) return false;
  for (let divisor = 3; divisor * divisor <= value; divisor += 2) {
    if (value % divisor === 0) return false;
  }
  return true;
}
