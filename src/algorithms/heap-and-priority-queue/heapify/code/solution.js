// SPECIFIC ALGORITHM SOLUTION
// Heapify
// Route: /algorithms/heaps/heapify

export function heapify(values, index = 0, size = values.length) {
  const heap = [...values];
  siftDown(heap, index, size);
  return heap;
}

function siftDown(heap, index, size) {
  while (true) {
    let largest = index;
    const left = index * 2 + 1;
    const right = index * 2 + 2;
    if (left < size && heap[left] > heap[largest]) largest = left;
    if (right < size && heap[right] > heap[largest]) largest = right;
    if (largest === index) break;
    [heap[index], heap[largest]] = [heap[largest], heap[index]];
    index = largest;
  }
}
