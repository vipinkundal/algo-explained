// Upper Bound
// Route: /algorithms/searching/upper-bound

export function upperBound(array, target) {
  let low = 0;
  let high = array.length;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (array[mid] <= target) low = mid + 1;
    else high = mid;
  }
  return low;
}
