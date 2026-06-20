// Runnable JavaScript companion for Heap Creation
// Original source: 17_Heap/create_heap.cpp
export function heapCreation() {
  const values = [10, 20, 15, 30, 40];
  const heap = [...values].sort((a, b) => b - a);
  return { structure: "max heap", inserted: values, heap };
}