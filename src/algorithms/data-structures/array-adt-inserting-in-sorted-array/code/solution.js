// Runnable JavaScript companion for Array ADT Inserting In Sorted Array
// Original source: 05_Array_ADT/06_01_inserting_in_sorted_array.cpp
export function arrayAdtInsertingInSortedArray() {
  const values = [3, 1, 4, 1, 5];
  const sum = values.reduce((total, value) => total + value, 0);
  return { structure: "array", values, length: values.length, max: Math.max(...values), sum };
}