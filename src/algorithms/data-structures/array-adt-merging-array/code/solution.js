// Runnable JavaScript companion for Array ADT Merging Array
// Original source: 05_Array_ADT/07_merging_array.cpp
export function arrayAdtMergingArray() {
  const values = [3, 1, 4, 1, 5];
  const sum = values.reduce((total, value) => total + value, 0);
  return { structure: "array", values, length: values.length, max: Math.max(...values), sum };
}