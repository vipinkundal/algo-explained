// Runnable JavaScript companion for Array ADT Negative Values
// Original source: 05_Array_ADT/06_03_-ve.cpp
export function arrayAdtNegativeValues() {
  const values = [3, 1, 4, 1, 5];
  const sum = values.reduce((total, value) => total + value, 0);
  return { structure: "array", values, length: values.length, max: Math.max(...values), sum };
}