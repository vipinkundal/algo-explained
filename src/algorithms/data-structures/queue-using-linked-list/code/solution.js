// Runnable JavaScript companion for Queue Using Linked List
// Original source: 12_Queue/03_queue_using_ll.cpp
export function queueUsingLinkedList() {
  const queue = [];
  const output = [];
  for (const value of [1, 2, 3, 4]) queue.push(value);
  output.push(queue.shift());
  return { structure: "queue", invariant: "first in, first out", state: queue, dequeued: output };
}