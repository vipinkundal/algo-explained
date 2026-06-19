// REFERENCE ALGORITHM SOLUTION
// GCD / Euclidean Algorithm
// Route: /algorithms/number-theory/gcd-euclidean

export function gcdEuclidean(a, b) {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) [x, y] = [y, x % y];
  return x;
}
