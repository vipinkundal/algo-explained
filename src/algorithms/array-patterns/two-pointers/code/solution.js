// SPECIFIC ALGORITHM SOLUTION
// Two Pointers
// Route: /algorithms/array-patterns/two-pointers

export function twoPointers(sortedArray, target) {
  let left = 0;
  let right = sortedArray.length - 1;
  while (left < right) {
    const sum = sortedArray[left] + sortedArray[right];
    if (sum === target) return [left, right];
    if (sum < target) left += 1;
    else right -= 1;
  }
  return [-1, -1];
}
