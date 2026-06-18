// SPECIFIC ALGORITHM SOLUTION
// Sliding Window Maximum
// Route: /algorithms/queue/sliding-window-maximum

export function slidingWindowMaximum(values, size) {
  const deque = [];
  const result = [];
  for (let index = 0; index < values.length; index += 1) {
    while (deque.length && deque[0] <= index - size) deque.shift();
    while (deque.length && values[deque.at(-1)] <= values[index]) deque.pop();
    deque.push(index);
    if (index >= size - 1) result.push(values[deque[0]]);
  }
  return result;
}
