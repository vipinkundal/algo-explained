// SPECIFIC ALGORITHM SOLUTION
// Circular Queue
// Route: /algorithms/queue/circular-queue

export function circularQueue(capacity, operations) {
  const data = Array(capacity);
  let front = 0;
  let size = 0;
  const output = [];
  for (const operation of operations) {
    if (operation.type === "enqueue" && size < capacity) {
      data[(front + size) % capacity] = operation.value;
      size += 1;
    }
    if (operation.type === "dequeue" && size > 0) {
      output.push(data[front]);
      front = (front + 1) % capacity;
      size -= 1;
    }
  }
  return output;
}
