// Heap Sort
// Route: /algorithms/sorting/heap-sort

export function heapSort(array) {
  const values = [...array];
  for (let index = Math.floor(values.length / 2) - 1; index >= 0; index -= 1) heapify(values, values.length, index);
  for (let end = values.length - 1; end > 0; end -= 1) {
    [values[0], values[end]] = [values[end], values[0]];
    heapify(values, end, 0);
  }
  return values;
}

function heapify(values, size, root) {
  let largest = root;
  const left = root * 2 + 1;
  const right = root * 2 + 2;
  if (left < size && values[left] > values[largest]) largest = left;
  if (right < size && values[right] > values[largest]) largest = right;
  if (largest !== root) {
    [values[root], values[largest]] = [values[largest], values[root]];
    heapify(values, size, largest);
  }
}
