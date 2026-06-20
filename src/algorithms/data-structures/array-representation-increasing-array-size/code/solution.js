// Runnable JavaScript companion for Increasing Array Size
// Original source: 04_Array_representation/02_increasing_array_size.cpp
export function arrayRepresentationIncreasingArraySize() {
  const values = [3, 1, 4, 1, 5];
  const sum = values.reduce((total, value) => total + value, 0);
  return { structure: "array", values, length: values.length, max: Math.max(...values), sum };
}