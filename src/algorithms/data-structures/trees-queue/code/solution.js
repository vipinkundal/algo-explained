// Runnable JavaScript companion for Binary Tree Queue
// Original source: 13_Trees/Queue.h
export function treesQueue() {
  const queue = [];
  const output = [];
  for (const value of [1, 2, 3, 4]) queue.push(value);
  output.push(queue.shift());
  return { structure: "queue", invariant: "first in, first out", state: queue, dequeued: output };
}