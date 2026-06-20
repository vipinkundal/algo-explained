// Runnable JavaScript companion for Circular Queue
// Original source: 12_Queue/02_circular_queue.cpp
export function circularQueue() {
  const queue = [];
  const output = [];
  for (const value of [1, 2, 3, 4]) queue.push(value);
  output.push(queue.shift());
  return { structure: "queue", invariant: "first in, first out", state: queue, dequeued: output };
}