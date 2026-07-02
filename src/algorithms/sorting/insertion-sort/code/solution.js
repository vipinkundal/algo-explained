// Insertion Sort
// Route: /algorithms/sorting/insertion-sort

export function insertionSort(array) {
  const values = [...array];
  for (let index = 1; index < values.length; index += 1) {
    const current = values[index];
    let scan = index - 1;
    while (scan >= 0 && values[scan] > current) {
      values[scan + 1] = values[scan];
      scan -= 1;
    }
    values[scan + 1] = current;
  }
  return values;
}
