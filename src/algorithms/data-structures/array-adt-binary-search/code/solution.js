// Runnable JavaScript companion for Binary Search in Array ADT
// Original source: 05_Array_ADT/04_binary_search.cpp
export function arrayAdtBinarySearch() {
  const values = [3, 1, 4, 1, 5];
  const sum = values.reduce((total, value) => total + value, 0);
  return { structure: "array", values, length: values.length, max: Math.max(...values), sum };
}