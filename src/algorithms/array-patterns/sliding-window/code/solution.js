// SPECIFIC ALGORITHM SOLUTION
// Sliding Window
// Route: /algorithms/array-patterns/sliding-window

export function slidingWindow(array, size) {
  if (size <= 0 || size > array.length) return [];
  const sums = [];
  let windowSum = 0;
  for (let right = 0; right < array.length; right += 1) {
    windowSum += array[right];
    if (right >= size) windowSum -= array[right - size];
    if (right >= size - 1) sums.push(windowSum);
  }
  return sums;
}
