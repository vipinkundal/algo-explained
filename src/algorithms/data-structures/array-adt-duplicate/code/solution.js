// Runnable JavaScript companion for Array ADT Duplicate
// Original source: 05_Array_ADT/10_02_Duplicate.cpp
export function arrayAdtDuplicate() {
  const values = [3, 1, 4, 1, 5];
  const sum = values.reduce((total, value) => total + value, 0);
  return { structure: "array", values, length: values.length, max: Math.max(...values), sum };
}