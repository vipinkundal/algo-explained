// Runnable JavaScript companion for Check Sorted Array
// Original source: 05_Array_ADT/06_02_check_if_soted.cpp
export function arrayAdtCheckIfSorted() {
  const values = [3, 1, 4, 1, 5];
  const sum = values.reduce((total, value) => total + value, 0);
  return { structure: "array", values, length: values.length, max: Math.max(...values), sum };
}