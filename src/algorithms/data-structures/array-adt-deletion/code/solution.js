// Runnable JavaScript companion for Deletion in Array ADT
// Original source: 05_Array_ADT/02_arrray_deletion.cpp
export function arrayAdtDeletion() {
  const values = [3, 1, 4, 1, 5];
  const sum = values.reduce((total, value) => total + value, 0);
  return { structure: "array", values, length: values.length, max: Math.max(...values), sum };
}