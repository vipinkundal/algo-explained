// SPECIFIC ALGORITHM SOLUTION
// Selection Sort
// Route: /algorithms/sorting/selection-sort

export function selectionSort(array) {
  const values = [...array];
  for (let start = 0; start < values.length; start += 1) {
    let minIndex = start;
    for (let index = start + 1; index < values.length; index += 1) {
      if (values[index] < values[minIndex]) minIndex = index;
    }
    [values[start], values[minIndex]] = [values[minIndex], values[start]];
  }
  return values;
}
