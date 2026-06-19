// REFERENCE ALGORITHM SOLUTION
// C++ max_element() / min_element()
// Route: /algorithms/cpp-stl/max-min-element

export function cppMaxMinElement(values) {
  if (!values.length) return null;
  let minIndex = 0;
  let maxIndex = 0;
  for (let index = 1; index < values.length; index += 1) {
    if (values[index] < values[minIndex]) minIndex = index;
    if (values[index] > values[maxIndex]) maxIndex = index;
  }
  return { min: values[minIndex], max: values[maxIndex], minIndex, maxIndex };
}
