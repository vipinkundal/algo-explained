// Bubble Sort
// Route: /algorithms/sorting/bubble-sort

export function bubbleSort(array) {
  const values = [...array];
  for (let end = values.length - 1; end > 0; end -= 1) {
    let swapped = false;
    for (let index = 0; index < end; index += 1) {
      if (values[index] > values[index + 1]) {
        [values[index], values[index + 1]] = [values[index + 1], values[index]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return values;
}
