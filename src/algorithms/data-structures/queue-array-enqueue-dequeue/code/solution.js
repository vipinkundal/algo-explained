// Runnable JavaScript companion for Queue Enqueue and Dequeue
// Original source: 12_Queue/01_enqueue_and_dequeue.cpp
export function queueArrayEnqueueDequeue() {
  const queue = [];
  const output = [];
  for (const value of [1, 2, 3, 4]) queue.push(value);
  output.push(queue.shift());
  return { structure: "queue", invariant: "first in, first out", state: queue, dequeued: output };
}