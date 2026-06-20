// Runnable JavaScript companion for D Array
// Original source: 04_Array_representation/03_2d_array.cpp
export function arrayRepresentationDArray() {
  const values = [3, 1, 4, 1, 5];
  const sum = values.reduce((total, value) => total + value, 0);
  return { structure: "array", values, length: values.length, max: Math.max(...values), sum };
}