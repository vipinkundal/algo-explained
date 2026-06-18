// AUTO-GENERATED ALGORITHM SOLUTION
// C++ sort()
// Route: /algorithms/cpp-stl/sort
// This educational implementation is intentionally small and side-effect-light.

export function cppSort(array) {
  const values = [...array];
  for (let pass = 0; pass < values.length; pass += 1) {
    for (let index = 1; index < values.length - pass; index += 1) {
      if (values[index - 1] > values[index]) {
        [values[index - 1], values[index]] = [values[index], values[index - 1]];
      }
    }
  }
  return values;
}
