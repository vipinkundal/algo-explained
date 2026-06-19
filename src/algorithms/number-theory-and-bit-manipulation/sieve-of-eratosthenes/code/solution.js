// REFERENCE ALGORITHM SOLUTION
// Sieve of Eratosthenes
// Route: /algorithms/number-theory/sieve-of-eratosthenes

export function sieveOfEratosthenes(limit) {
  const prime = Array(limit + 1).fill(true);
  prime[0] = prime[1] = false;
  for (let value = 2; value * value <= limit; value += 1) {
    if (!prime[value]) continue;
    for (let multiple = value * value; multiple <= limit; multiple += value) prime[multiple] = false;
  }
  const result = [];
  for (let value = 2; value <= limit; value += 1) if (prime[value]) result.push(value);
  return result;
}
