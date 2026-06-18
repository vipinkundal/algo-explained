// AUTO-GENERATED ALGORITHM SOLUTION
// C++ priority_queue
// Route: /algorithms/cpp-stl/priority-queue
// This educational implementation is intentionally small and side-effect-light.

export function cppPriorityQueue(values, windowSize = 3) {
  const queue = [];
  const result = [];
  for (const value of values) {
    queue.push(value);
    if (queue.length > windowSize) queue.shift();
    result.push([...queue]);
  }
  return result;
}
