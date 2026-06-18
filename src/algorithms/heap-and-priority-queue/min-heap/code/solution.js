// SPECIFIC ALGORITHM SOLUTION
// Min Heap
// Route: /algorithms/heaps/min-heap

export function minHeap(values) {
  const heap = [];
  for (const value of values) {
    heap.push(value);
    let child = heap.length - 1;
    while (child > 0) {
      const parent = Math.floor((child - 1) / 2);
      if (heap[parent] <= heap[child]) break;
      [heap[parent], heap[child]] = [heap[child], heap[parent]];
      child = parent;
    }
  }
  return heap;
}
