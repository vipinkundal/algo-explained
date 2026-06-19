// REFERENCE ALGORITHM SOLUTION
// C++ priority_queue
// Route: /algorithms/cpp-stl/priority-queue

export function cppPriorityQueue(values, count = values.length) {
  return [...values].sort((a, b) => b - a).slice(0, count);
}
