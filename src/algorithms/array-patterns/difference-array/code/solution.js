// SPECIFIC ALGORITHM SOLUTION
// Difference Array
// Route: /algorithms/array-patterns/difference-array

export function differenceArray(length, updates) {
  const diff = Array(length + 1).fill(0);
  for (const [left, right, delta] of updates) {
    diff[left] += delta;
    if (right + 1 < diff.length) diff[right + 1] -= delta;
  }
  const result = [];
  let running = 0;
  for (let index = 0; index < length; index += 1) {
    running += diff[index];
    result.push(running);
  }
  return result;
}
