// SPECIFIC ALGORITHM SOLUTION
// Kadane’s Algorithm
// Route: /algorithms/array-patterns/kadanes-algorithm

export function kadanesAlgorithm(array) {
  let bestEndingHere = array[0] ?? 0;
  let best = bestEndingHere;
  for (let index = 1; index < array.length; index += 1) {
    bestEndingHere = Math.max(array[index], bestEndingHere + array[index]);
    best = Math.max(best, bestEndingHere);
  }
  return best;
}
