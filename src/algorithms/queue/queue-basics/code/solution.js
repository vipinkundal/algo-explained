// SPECIFIC ALGORITHM SOLUTION
// Queue Basics
// Route: /algorithms/queue/queue-basics

export function queueBasics(operations) {
  const queue = [];
  const output = [];
  for (const operation of operations) {
    if (operation.type === "enqueue") queue.push(operation.value);
    if (operation.type === "dequeue") output.push(queue.shift() ?? null);
    if (operation.type === "front") output.push(queue[0] ?? null);
  }
  return output;
}
