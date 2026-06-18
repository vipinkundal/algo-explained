// SPECIFIC ALGORITHM SOLUTION
// Lower Bound
// Route: /algorithms/searching/lower-bound

export function lowerBound(array, target) {
  let low = 0;
  let high = array.length;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (array[mid] < target) low = mid + 1;
    else high = mid;
  }
  return low;
}
