// Quick Sort
// Route: /algorithms/sorting/quick-sort

export function quickSort(array) {
  const values = [...array];
  partitionSort(values, 0, values.length - 1);
  return values;
}

function partitionSort(values, low, high) {
  if (low >= high) return;
  const pivotIndex = partition(values, low, high);
  partitionSort(values, low, pivotIndex - 1);
  partitionSort(values, pivotIndex + 1, high);
}

function partition(values, low, high) {
  const pivot = values[high];
  let smaller = low;
  for (let index = low; index < high; index += 1) {
    if (values[index] <= pivot) {
      [values[smaller], values[index]] = [values[index], values[smaller]];
      smaller += 1;
    }
  }
  [values[smaller], values[high]] = [values[high], values[smaller]];
  return smaller;
}
